# BOGOBOT reproducible export

The editable system source is `julchernysheva/bogobot`. Do not edit generated `bogobot/` files.

From this repository, run:

```sh
python3 tools/export-bogobot.py /absolute/path/to/bogobot APPROVED_FULL_COMMIT_SHA
```

The exporter reads committed files only, verifies previous generated hashes, exports the complete runtime asset/source banks, adapts the public origin to `https://artisyou.ru/bogobot/`, and updates the owned host sitemap entries. It refuses overwritten generated files. It performs no network, commit, push or deployment.

`bogobot-export-manifest.json` records the source commit, inclusion reasons, excluded files, source/export SHA-256 and every origin substitution. Source app logic, graph geometry, corpus, BOOKS, GLAS and Reader are not rewritten.

ART.IS.YOU maintains only its page integration: the graph iframe in `godbot-research.js`, the lazy topography iframe in `godbot-seven-selector.js` and its scoped CSS. Service counts in the existing page modules describe the exported graph. Future approved graph-size changes require an explicit integration review; the exporter does not infer editorial changes.

After each export run the route, source-HTML, lazy dependency, embedded page and 390/768/1440 browser gates before publication. Keep the GitHub Pages mirror untouched until the new host is successfully deployed and live-verified. Its canonical switch is a separate reviewed operation.

## Host integration and audited runtime reconciliation (2026-11-15)

Generic runtime transitions and WebP delivery assets now live in the editable BOGOBOT source. The two Art.Is.You-only links are declared in `tools/bogobot-host-adaptations.json`. The exporter applies these patches after origin adaptation, requires an exact anchor count, and records the patch hash in the manifest. Changed anchors abort before writes.

The four historical edits were reviewed against the live site and imported without changing their published bytes. For this single migration, use:

```sh
python3 tools/export-bogobot.py /absolute/path/to/bogobot 7b749d201ea6ae7991bf7d15f5bed02c53a3937f --reconcile tools/bogobot-reconciliation-2026-11-15.json
```

This is not a general drift override: the receipt pins both source commits, the previous export hashes and the observed host hashes. It must cover exactly the detected drift, and every rebuilt file must reproduce the current host byte for byte. A changed host file or source cannot pass the receipt. Newly owned files also cannot overwrite different unowned host files. All these checks run before writing generated files.

After migration the normal command, without `--reconcile`, passes again. The receipt remains only as an audit record. Do not edit its hashes to accept new changes.

Regression tests: `python3 tools/test_export_bogobot.py`. Browser validation for this release covered all seven BOOKS routes, parameter-free host canonicals, the Reader deep link, the two WebP assets, the host return link and opening/closing the embedded graph at 390/768/1440 pixels. The 250-file runtime comparison changed only the seven canonical metadata lines. Article text and graph data were not regenerated.
