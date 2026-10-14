#!/usr/bin/env python3
"""Export an explicitly approved BOGOBOT commit; never edit the generated copy.
Usage: python3 tools/export-bogobot.py SOURCE_REPO APPROVED_SHA
Run from the destination ART.IS.YOU checkout. No network/push/deploy operations.
"""
import sys,json,subprocess,hashlib,re
from pathlib import Path
from xml.etree import ElementTree as ET
source=Path(sys.argv[1]).resolve();sha=sys.argv[2];root=Path(__file__).resolve().parents[1]
git=lambda *a:subprocess.check_output(['git',*a],cwd=source)
assert git('rev-parse',sha+'^{commit}').decode().strip()==sha,'Use exact full commit SHA'
old='https://julchernysheva.github.io/bogobot/';new='https://artisyou.ru/bogobot/'
files=git('ls-tree','-r','--name-only',sha).decode().splitlines()
def reason(f):
 if '/' not in f and Path(f).suffix in ['.js','.css','.html','.xml']:return 'runtime entry/module/metadata'
 if f.startswith(('articles/','books/','experiences/')):return 'public standalone/Reader dependency'
 if f.startswith('assets/') and not f.startswith('assets/canon-image-candidates/'):return 'runtime asset bank incl. dynamic Markdown/images/videos'
 if f.startswith('_source/canon-pack/SOURCE_ARCHIVE/'):return 'legacy runtime source bank'
 return None
export={f:reason(f) for f in files if reason(f)}
manifest_path=root/'bogobot-export-manifest.json';prior=json.loads(manifest_path.read_text()) if manifest_path.exists() else None
if prior:
 for item in prior['files']:
  p=root/'bogobot'/item['path']
  assert p.exists() and hashlib.sha256(p.read_bytes()).hexdigest()==item['export_sha256'],f'Generated file modified: {p}'
 for item in prior['files']:
  if item['path'] not in export:(root/'bogobot'/item['path']).unlink()
rows=[]
for f,why in sorted(export.items()):
 original=git('show',sha+':'+f);data=original;changes=[]
 if Path(f).suffix in ['.html','.xml','.js'] and old.encode() in data:
  count=data.count(old.encode());data=data.replace(old.encode(),new.encode());changes=[{'operation':'public origin replacement only','from':old,'to':new,'occurrences':count}]
 target=root/'bogobot'/f;target.parent.mkdir(parents=True,exist_ok=True);target.write_bytes(data)
 rows.append({'path':f,'reason':why,'source_sha256':hashlib.sha256(original).hexdigest(),'export_sha256':hashlib.sha256(data).hexdigest(),'bytes':len(data),'changes':changes})
manifest={'schema':1,'source_repository':'julchernysheva/bogobot','source_sha':sha,'destination':'https://artisyou.ru/bogobot/','generator':'tools/export-bogobot.py','files':rows,'excluded':[f for f in files if f not in export]}
manifest_path.write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n')
# Preserve existing project content/design; only embed/link addresses and service labels.
p=root/'projects/godbot/index.html';text=p.read_text();text=text.replace(old,'/bogobot/').replace('LIVE GRAPH / GITHUB','LIVE GRAPH / ART.IS.YOU').replace('LIVE TOPOGRAPHY / GITHUB','LIVE TOPOGRAPHY / ART.IS.YOU');p.write_text(text)
# Page-specific and route-scoped modules also contain lazy external system links.
for relative in ['assets/art-is-you/godbot-research.js','assets/art-is-you/godbot-seven-selector.js','assets/art-is-you/project-lower-protocol.js']:
 p=root/relative
 text=p.read_text();p.write_text(text.replace(old,'/bogobot/'))
# Keep the host sitemap intact outside the owned /bogobot/ entries.
p=root/'sitemap.xml';text=p.read_text();text=re.sub(r'<url>\s*<loc>https://artisyou\.ru/bogobot/.*?</url>\s*','',text,flags=re.S)
urls=[new]+re.findall(r'<loc>(.*?)</loc>',(root/'bogobot/sitemap.xml').read_text())
addition=''.join('<url><loc>'+u+'</loc></url>' for u in dict.fromkeys(urls))
assert '</urlset>' in text
p.write_text(text.replace('</urlset>',addition+'</urlset>'))
print(json.dumps({'source_sha':sha,'files':len(rows),'adapted':[x['path'] for x in rows if x['changes']],'excluded':len(manifest['excluded'])}))
