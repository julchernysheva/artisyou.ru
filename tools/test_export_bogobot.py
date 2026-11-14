"""Regression checks for fail-closed export and exact legacy reconciliation."""
import hashlib
import json
from pathlib import Path
import shutil
import subprocess
import tempfile
import unittest

EXPORTER = Path(__file__).with_name('export-bogobot.py')


class ExportSafety(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name)
        self.source = self.root / 'source'
        self.host = self.root / 'host'
        self.source.mkdir()
        (self.host / 'tools').mkdir(parents=True)
        shutil.copy2(EXPORTER, self.host / 'tools/export-bogobot.py')
        self.git('init', '-q')
        (self.source / 'app.js').write_text('const original = true;\n')
        (self.source / 'sitemap.xml').write_text('<urlset></urlset>')
        (self.source / 'books').mkdir()
        (self.source / 'books/index.html').write_text('<title>Books</title>')
        self.old = self.commit()
        for path in ['projects/godbot/index.html', 'assets/art-is-you/godbot-research.js',
                     'assets/art-is-you/godbot-seven-selector.js', 'assets/art-is-you/project-lower-protocol.js']:
            p = self.host / path
            p.parent.mkdir(parents=True, exist_ok=True)
            p.write_text('unchanged host integration')
        (self.host / 'sitemap.xml').write_text('<urlset></urlset>')
        self.run_export(self.old, success=True)

    def git(self, *args):
        return subprocess.check_output(['git', '-c', 'user.name=Export Test', '-c',
                                       'user.email=export-test@example.invalid', *args], cwd=self.source).decode().strip()

    def commit(self):
        self.git('add', '.')
        self.git('commit', '-qm', 'fixture')
        return self.git('rev-parse', 'HEAD')

    def snapshot(self):
        return {str(p.relative_to(self.host)): p.read_bytes() for p in self.host.rglob('*') if p.is_file()}

    def run_export(self, sha, *args, success=False):
        result = subprocess.run(['python3', str(self.host / 'tools/export-bogobot.py'),
                                 str(self.source), sha, *map(str, args)], capture_output=True, text=True)
        self.assertEqual(result.returncode == 0, success, result.stderr)
        return result

    def prepare_drift(self):
        p = self.host / 'bogobot/app.js'
        p.write_text(p.read_text() + '// reviewed published change\n')
        (self.source / 'app.js').write_bytes(p.read_bytes())
        new = self.commit()
        manifest = json.loads((self.host / 'bogobot-export-manifest.json').read_text())
        prior = next(x for x in manifest['files'] if x['path'] == 'app.js')
        receipt = {'schema': 1, 'previous_source_sha': self.old, 'source_sha': new,
                   'files': {'app.js': {'previous_export_sha256': prior['export_sha256'],
                                        'observed_host_sha256': hashlib.sha256(p.read_bytes()).hexdigest()}}}
        path = self.root / 'receipt.json'
        path.write_text(json.dumps(receipt))
        return new, path

    def test_drift_requires_explicit_receipt_and_writes_nothing(self):
        new, _ = self.prepare_drift()
        before = self.snapshot()
        self.run_export(new)
        self.assertEqual(before, self.snapshot())

    def test_exact_reconciliation_then_strict_idempotent_export(self):
        new, receipt = self.prepare_drift()
        runtime = (self.host / 'bogobot/app.js').read_bytes()
        self.run_export(new, '--reconcile', receipt, success=True)
        self.assertEqual(runtime, (self.host / 'bogobot/app.js').read_bytes())
        before = self.snapshot()
        self.run_export(new, success=True)
        self.assertEqual(before, self.snapshot())

    def test_new_host_change_is_not_covered_by_old_receipt(self):
        new, receipt = self.prepare_drift()
        p = self.host / 'bogobot/app.js'
        p.write_text(p.read_text() + '// unreviewed edit\n')
        before = self.snapshot()
        self.run_export(new, '--reconcile', receipt)
        self.assertEqual(before, self.snapshot())

    def test_reconciled_source_must_reproduce_host(self):
        _, receipt = self.prepare_drift()
        (self.source / 'app.js').write_text('different source\n')
        new = self.commit()
        data = json.loads(receipt.read_text())
        data['source_sha'] = new
        receipt.write_text(json.dumps(data))
        before = self.snapshot()
        self.run_export(new, '--reconcile', receipt)
        self.assertEqual(before, self.snapshot())

    def test_adapter_anchor_failure_writes_nothing(self):
        (self.host / 'tools/bogobot-host-adaptations.json').write_text(json.dumps({
            'schema': 1, 'patches': [{'path': 'app.js', 'find': 'missing anchor',
                                     'replace': 'host integration', 'expected_occurrences': 1}]}))
        before = self.snapshot()
        self.run_export(self.old)
        self.assertEqual(before, self.snapshot())

    def test_new_asset_cannot_overwrite_unowned_host_file(self):
        (self.source / 'assets').mkdir()
        (self.source / 'assets/image.webp').write_bytes(b'new source image')
        new = self.commit()
        target = self.host / 'bogobot/assets/image.webp'
        target.parent.mkdir(parents=True)
        target.write_bytes(b'different existing host image')
        before = self.snapshot()
        self.run_export(new)
        self.assertEqual(before, self.snapshot())


if __name__ == '__main__':
    unittest.main()
