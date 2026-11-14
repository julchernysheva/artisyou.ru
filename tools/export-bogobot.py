#!/usr/bin/env python3
"""Export a committed source; verify exact host adaptations before writing.
Usage: export-bogobot.py SOURCE APPROVED_SHA [--reconcile RECEIPT.json]
No network, commit, push or deployment operations.
"""
import argparse,json,subprocess,hashlib,re
from pathlib import Path

def digest(data):
 return hashlib.sha256(data).hexdigest()

def reason(f):
 if '/' not in f and Path(f).suffix in ['.js','.css','.html','.xml']:return 'runtime entry/module/metadata'
 if f.startswith(('articles/','books/','experiences/')):return 'public standalone/Reader dependency'
 if f.startswith('assets/') and not f.startswith('assets/canon-image-candidates/'):return 'runtime asset bank incl. dynamic Markdown/images/videos'
 if f.startswith('_source/canon-pack/SOURCE_ARCHIVE/'):return 'legacy runtime source bank'
 return None

def main():
 parser=argparse.ArgumentParser(description=__doc__)
 parser.add_argument('source',type=Path);parser.add_argument('sha');parser.add_argument('--reconcile',type=Path)
 args=parser.parse_args();source=args.source.resolve();sha=args.sha;root=Path(__file__).resolve().parents[1]
 git=lambda *a:subprocess.check_output(['git',*a],cwd=source)
 assert git('rev-parse',sha+'^{commit}').decode().strip()==sha,'Use exact full commit SHA'
 old='https://julchernysheva.github.io/bogobot/';new='https://artisyou.ru/bogobot/'
 files=git('ls-tree','-r','--name-only',sha).decode().splitlines();export={f:reason(f) for f in files if reason(f)}
 adapter=root/'tools/bogobot-host-adaptations.json'
 config=json.loads(adapter.read_text()) if adapter.exists() else {'schema':1,'patches':[]}
 assert config['schema']==1,'Unknown adapter schema'
 for patch in config['patches']:
  assert patch['path'] in export and patch['find'] and patch['expected_occurrences']>0,'Invalid host adaptation'
 # Stage and validate every byte before touching the generated copy.
 rows=[];staged={}
 for f,why in sorted(export.items()):
  original=git('show',sha+':'+f);data=original;changes=[]
  if Path(f).suffix in ['.html','.xml','.js'] and old.encode() in data:
   count=data.count(old.encode());data=data.replace(old.encode(),new.encode())
   changes.append({'operation':'public origin replacement only','from':old,'to':new,'occurrences':count})
  for patch in config['patches']:
   if patch['path']!=f:continue
   find=patch['find'].encode();replacement=patch['replace'].encode();count=data.count(find)
   assert count==patch['expected_occurrences'],f'Host adaptation anchor mismatch: {f}'
   data=data.replace(find,replacement)
   changes.append({'operation':'host integration patch','patch_sha256':digest(find+b'\0'+replacement),'occurrences':count})
  staged[f]=data
  rows.append({'path':f,'reason':why,'source_sha256':digest(original),'export_sha256':digest(data),'bytes':len(data),'changes':changes})
 manifest_path=root/'bogobot-export-manifest.json';prior=json.loads(manifest_path.read_text()) if manifest_path.exists() else None
 previous={x['path']:x for x in prior['files']} if prior else {};drift={}
 for f,item in previous.items():
  p=root/'bogobot'/f;assert p.exists(),f'Generated file missing: {p}'
  actual=digest(p.read_bytes())
  if actual!=item['export_sha256']:drift[f]=actual
 if drift:
  assert args.reconcile,'Generated files modified: '+', '.join(sorted(drift))
  receipt=json.loads(args.reconcile.read_text())
  assert receipt['schema']==1,'Unknown reconciliation schema'
  assert receipt['previous_source_sha']==prior['source_sha'],'Wrong previous source'
  assert receipt['source_sha']==sha,'Wrong reconciled source'
  assert set(receipt['files'])==set(drift),'Receipt must cover exactly the observed drift'
  for f,actual in drift.items():
   approved=receipt['files'][f]
   assert approved['previous_export_sha256']==previous[f]['export_sha256'],f'Wrong prior hash: {f}'
   assert approved['observed_host_sha256']==actual,f'Unreviewed host change: {f}'
   assert f in staged and digest(staged[f])==actual,f'Source does not reproduce current host: {f}'
 for f,data in staged.items():
  p=root/'bogobot'/f
  if f not in previous and p.exists():assert p.read_bytes()==data,f'Unowned file collision: {p}'
 # Validate host integration inputs before writing generated files.
 updates={}
 for relative in ['projects/godbot/index.html','assets/art-is-you/godbot-research.js','assets/art-is-you/godbot-seven-selector.js','assets/art-is-you/project-lower-protocol.js']:
  text=(root/relative).read_text().replace(old,'/bogobot/')
  if relative=='projects/godbot/index.html':text=text.replace('LIVE GRAPH / GITHUB','LIVE GRAPH / ART.IS.YOU').replace('LIVE TOPOGRAPHY / GITHUB','LIVE TOPOGRAPHY / ART.IS.YOU')
  updates[relative]=text
 original_sitemap=(root/'sitemap.xml').read_text()
 text=re.sub(r'<url>\s*<loc>https://artisyou\.ru/bogobot/.*?</url>\s*','',original_sitemap,flags=re.S)
 urls=[new]+re.findall(r'<loc>(.*?)</loc>',staged['sitemap.xml'].decode());addition=''.join('<url><loc>'+u+'</loc></url>' for u in dict.fromkeys(urls))
 assert '</urlset>' in text,'Invalid host sitemap'
 existing_urls=re.findall(r'<loc>(https://artisyou\.ru/bogobot/.*?)</loc>',original_sitemap)
 updates['sitemap.xml']=original_sitemap if existing_urls==list(dict.fromkeys(urls)) else text.replace('</urlset>',addition+'</urlset>')
 for f in previous.keys()-staged.keys():(root/'bogobot'/f).unlink()
 for f,data in staged.items():
  p=root/'bogobot'/f;p.parent.mkdir(parents=True,exist_ok=True);p.write_bytes(data)
 manifest={'schema':1,'source_repository':'julchernysheva/bogobot','source_sha':sha,'destination':new,'generator':'tools/export-bogobot.py','files':rows,'excluded':[f for f in files if f not in export]}
 manifest_path.write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n')
 for relative,text in updates.items():(root/relative).write_text(text)
 print(json.dumps({'source_sha':sha,'files':len(rows),'reconciled':sorted(drift),'adapted':[x['path'] for x in rows if x['changes']],'excluded':len(manifest['excluded'])}))

if __name__=='__main__':main()
