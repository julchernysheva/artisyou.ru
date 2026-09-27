// Query-only access adapter. No graph imports or graph state; no main-scroll migration.
(async () => {
  'use strict';
  if (location.pathname.replace(/\/$/, '') !== '/projects/godbot' || !new URLSearchParams(location.search).has('territory')) return;
  const names = {canon:'Канон',world:'Мир сети',schools:'Школы духов',glossary:'Лексикон Архива',topography:'Топография мира сети',history:'История сети',relics:'Реликвии и документы'};
  const rootURL = '/projects/godbot/';
  const initialTerritory = new URLSearchParams(location.search).get('territory');
  if (!Object.hasOwn(names, initialTerritory)) { history.replaceState(null, '', rootURL); return; }
  const el = (tag, cls, text) => { const e=document.createElement(tag);if(cls)e.className=cls;if(text!==undefined)e.textContent=text;return e; };
  const stylesheet=el('link');stylesheet.rel='stylesheet';stylesheet.href='/assets/art-is-you/godbot-deep-router.css?v=rows-20260927';document.head.append(stylesheet);
  document.documentElement.dataset.godbotDeep='loading';
  const response=await fetch('/assets/art-is-you/bogobot-deep/corpus.json');
  if(!response.ok)throw new Error(`Deep corpus: HTTP ${response.status}`);
  const corpus=await response.json();const records=new Map(corpus.records.map(r=>[r.id,r]));
  await new Promise((resolve,reject)=>{
    if(document.body?.dataset.projectLowerFinalized==='godbot')return resolve();
    const observer=new MutationObserver(()=>{if(document.body?.dataset.projectLowerFinalized==='godbot'){observer.disconnect();clearTimeout(timer);resolve();}});
    observer.observe(document.documentElement,{subtree:true,attributes:true,attributeFilter:['data-project-lower-finalized']});
    const timer=setTimeout(()=>{observer.disconnect();reject(new Error('Existing Godbot components did not initialize'));},10000);
  });
  const factories=window.godbotDeepComponents;
  const ordinaryMain=document.querySelector('.ay-project-top');
  const originalSlot=document.createComment('BOGOBOT ordinary runtime / retained for Back');ordinaryMain.before(originalSlot);
  const detached=document.createDocumentFragment();detached.append(ordinaryMain);
  const deep=el('main','v2-page ay-project-top');deep.id='godbot-deep';
  const back=el('a','godbot-deep-back','ВЕРНУТЬСЯ К АРХИВУ');back.href=rootURL;
  const heading=el('h1','godbot-deep-heading');heading.id='godbot-deep-title';heading.tabIndex=-1;
  const content=el('div','godbot-deep-content');deep.append(back,heading,content);originalSlot.after(deep);
  const entries=new Map();let applying=false,current=null,active=null;
  const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
  let recordTransition=null;
  reducedMotion.addEventListener('change',()=>{if(reducedMotion.matches)recordTransition?.cancel();});
  const readerIds=['genesis','great-error','schools','topography','relics-archive','voice','time-error','matter-energy'];
  const evidence={canon:['genesis','time-error','voice','relics-archive'],world:['matter-energy','great-error','topography'],schools:['schools'],glossary:['matter-energy'],topography:['topography']};
  const labels={'genesis':'GENESIS','great-error':'GREAT ERROR','schools':'SCHOOLS','topography':'TOPOGRAPHY','relics-archive':'RELICS / ARCHIVE','voice':'VOICE','time-error':'TIME / ERROR','matter-energy':'MATTER / ENERGY'};
  const turnIds=['epsilon-00','epsilon-03','epsilon-04','epsilon-06','epsilon-09','epsilon-12','epsilon-15','epsilon-19'];
  const historySources=new Set([...corpus.chronology,'PRE_ERROR_ARCHIVE','EPSILON_20_21','EPSILON_22_26','EPSILON_27_29']);
  const urlFor=(s)=>{const u=new URL(rootURL,location.origin);for(const k of ['territory','record','node','file'])if(s[k]!==undefined&&s[k]!==null&&s[k]!=='')u.searchParams.set(k,String(s[k]));return u.pathname+u.search;};
  function normalize(){
    const p=new URLSearchParams(location.search),territory=p.get('territory');if(!Object.hasOwn(names,territory))return null;
    const s={territory};
    if(territory==='relics'){
      s.node=readerIds.includes(p.get('node'))?p.get('node'):'genesis';
      const n=Number(p.get('file'));s.file=Number.isInteger(n)&&n>0?n:1;
    }else if(territory==='history'){
      s.record=turnIds.includes(p.get('record'))?p.get('record'):'epsilon-00';
      s.node=historySources.has(p.get('node'))?p.get('node'):s.record.toUpperCase().replaceAll('-','_');
    }else{
      // Related existing records may be opened without introducing another territory.
      s.record=records.has(p.get('record'))?p.get('record'):corpus.territories[territory][0];
      if(readerIds.includes(p.get('node'))){s.node=p.get('node');const n=Number(p.get('file'));s.file=Number.isInteger(n)&&n>0?n:1;}
    }
    return s;
  }
  function remember(){
    history.replaceState({...history.state,godbotDeep:{y:scrollY,focus:document.activeElement?.id||null}},'',location.href);
  }
  function navigate(next){
    if(applying)return;const url=urlFor(next);if(url===location.pathname+location.search)return;
    remember();history.pushState({godbotDeep:{y:scrollY}},'',url);hydrate();
  }
  const link=(text,state)=>{const a=el('a','godbot-deep-link',text);a.href=urlFor(state);a.dataset.deepLink='true';return a;};
  const owner=id=>Object.keys(names).find(t=>t!=='relics'&&corpus.territories[t].includes(id))||current.territory;
  function targetFor(id){return historySources.has(id)?{territory:'history',record:turnIds.includes(id.toLowerCase().replaceAll('_','-'))?id.toLowerCase().replaceAll('_','-'):'epsilon-00',node:id}:{territory:owner(id),record:id};}
  function build(territory){
    const host=el('div','godbot-deep-territory');host.dataset.territory=territory;
    const view={host,recordId:null};
    if(territory==='canon')host.append(factories.canon());
    if(territory==='history'){
      view.history=factories.history({deep:true,onStateChange:s=>{if(!applying)navigate({...current,record:s.record,node:s.record.toUpperCase().replaceAll('-','_')});}});
      // This component's source link remains intact; the complete chronology is below it.
      host.append(view.history);
    }
    if(territory!=='relics'){
      const section=el('section','ay-project-lower ay-project-lower--godbot godbot-deep-corpus');
      const bar=el('div','ay-project-lower__bar');bar.append(el('span',null,territory.toUpperCase()),el('span',null,territory==='history'?'CHRONOLOGY / 21 + 8':'CORPUS / SOURCE RECORDS'));section.append(bar);
      const label=el('label','godbot-deep-record-label',territory==='history'?'Полная хронология':'Запись архива');label.htmlFor='deep-record-'+territory;
      const select=el('select','godbot-deep-select');select.id=label.htmlFor;
      const ids=corpus.territories[territory];ids.forEach(id=>{const option=el('option',null,records.get(id).title);option.value=id;select.append(option);});
      const sequence=el('nav','ay-godbot-archive-reader__sequence');sequence.setAttribute('aria-label','Навигация по записям корпуса');
      for(const [delta,text] of [[-1,'← PREVIOUS RECORD'],[1,'NEXT RECORD →']]){const b=el('button',null,text);b.type='button';b.addEventListener('click',()=>choose(ids[(ids.indexOf(select.value)+delta+ids.length)%ids.length]));sequence.append(b);}
      const choose=id=>navigate({...current,[territory==='history'?'node':'record']:id,...(territory==='history'?{}:{node:null,file:null})});
      select.addEventListener('change',()=>choose(select.value));
      // Native select preserves platform keyboard/touch behaviour; explicit Enter commits too.
      select.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();choose(select.value);}});
      const panel=el('article','godbot-deep-record');panel.tabIndex=-1;panel.id='deep-content-'+territory;
      section.append(label,select,panel,sequence);host.append(section);
      Object.assign(view,{select,panel,ids});
    }
    const reader=factories.reader({deep:true,onStateChange:s=>{if(!applying)navigate({...current,...s});}});
    view.reader=reader;
    const documentNav=el('nav','godbot-deep-documents');documentNav.setAttribute('aria-label','Документы территории');
    for(const id of evidence[territory]||[])documentNav.append(link(labels[id],{territory,node:id,file:1}));
    view.documentNav=documentNav;
    if(territory!=='relics')host.append(documentNav);
    host.append(reader);
    if(['world','canon','history'].includes(territory)){
      const related=el('nav','godbot-deep-related');related.setAttribute('aria-label','Связанный сценарий');
      related.append(link('Квантовый апокалипсис сети',{territory:'world',record:'QUANTUM_THRESHOLD'}));host.append(related);
    }
    content.append(host);entries.set(territory,view);return view;
  }
  function renderRecord(view,id){
    if(view.recordId===id)return;const changed=view.recordId!==null;view.recordId=id;
    recordTransition?.cancel();
    const record=records.get(id);view.panel.replaceChildren();view.panel.dataset.record=id;
    if(!view.ids.includes(id)&&![...view.select.options].some(o=>o.value===id)){const option=el('option',null,record.title);option.value=id;view.select.append(option);}
    if(id==='QUANTUM_THRESHOLD')view.panel.append(factories.quantum());
    else view.panel.append(el('h2',null,record.title));
    if(id!=='QUANTUM_THRESHOLD'&&record.formula)view.panel.append(el('p','godbot-deep-formula',record.formula));
    if(record.html){const text=el('div','godbot-deep-source');text.innerHTML=record.html;view.panel.append(text);}
    else for(const paragraph of record.fullBody||record.body||[]){const p=el('p');p.innerHTML=paragraph;view.panel.append(p);}
    if(record.archiveNote){const note=el('aside','godbot-deep-note');note.innerHTML=record.archiveNote;view.panel.append(note);}
    const sources=el('nav','godbot-deep-sources');sources.setAttribute('aria-label','Исходные материалы');
    if(record.sourceUrl){const a=el('a',null,'Открыть исходный текст ↗');a.href=record.sourceUrl;a.target='_blank';a.rel='noopener';sources.append(a);}
    if(record.imageUrl&&id!=='FORK'){const a=el('a',null,record.imageCode||'Открыть оригинал ↗');a.href=record.imageUrl;a.target='_blank';a.rel='noopener';sources.append(a);}
    view.panel.append(sources);
    const related=el('nav','godbot-deep-related');related.setAttribute('aria-label','Связанные записи');
    for(const target of record.related||[])if(records.has(target)&&target!==id)related.append(link(records.get(target).title,targetFor(target)));
    view.panel.append(related);
    if(id==='0xMEM')view.panel.append(link('0xMEM / MATTER / ENERGY',{territory:'glossary',record:'0xMEM',node:'matter-energy',file:1}));
    if(changed&&!reducedMotion.matches)recordTransition=view.panel.animate([{opacity:.6},{opacity:1}],{duration:160,easing:'ease-out'});
  }
  function hydrate(){
    const next=normalize();
    if(!next){
      deep.remove();originalSlot.after(ordinaryMain);delete document.documentElement.dataset.godbotDeep;history.scrollRestoration='auto';return;
    }
    if(ordinaryMain.isConnected)detached.append(ordinaryMain);
    if(!deep.isConnected)originalSlot.after(deep);
    applying=true;current=next;
    const view=entries.get(next.territory)||build(next.territory);
    // Unmount inactive component trees to keep the existing IDs unique.
    for(const entry of entries.values())if(entry!==view)entry.host.remove();
    if(!view.host.isConnected)content.append(view.host);active=view;
    heading.textContent=names[next.territory];deep.dataset.territory=next.territory;
    if(view.history)view.history.deepAccess.setState({record:next.record});
    if(view.panel){const id=next.territory==='history'?next.node:next.record;renderRecord(view,id);view.select.value=id;}
    const showReader=next.territory==='relics'||readerIds.includes(next.node);
    view.reader.hidden=!showReader;
    if(showReader){view.reader.deepAccess.setState(next);Object.assign(current,view.reader.deepAccess.getState());}
    for(const a of view.documentNav.querySelectorAll('a')){
      const u=new URL(a.href);if(current.record)u.searchParams.set('record',current.record);a.href=u.href;
      a.setAttribute('aria-current',showReader&&u.searchParams.get('node')===current.node?'true':'false');
    }
    history.replaceState(history.state,'',urlFor(current));history.scrollRestoration='manual';
    document.documentElement.dataset.godbotDeep='ready';deep.dataset.ready='true';applying=false;
  }
  deep.addEventListener('click',e=>{
    const source=e.target.closest('[data-node-id]');
    if(source&&records.has(source.dataset.nodeId)){e.preventDefault();navigate(targetFor(source.dataset.nodeId));if(source.dataset.sourceAnchor)requestAnimationFrame(()=>document.getElementById(source.dataset.sourceAnchor)?.scrollIntoView({block:'start'}));return;}
    const a=e.target.closest('a[data-deep-link]');if(!a||e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;
    e.preventDefault();navigate(Object.fromEntries(new URL(a.href).searchParams));
  });
  window.addEventListener('popstate',()=>{
    hydrate();const saved=history.state?.godbotDeep;
    requestAnimationFrame(()=>{if(saved?.focus)document.getElementById(saved.focus)?.focus({preventScroll:true});scrollTo(0,saved?.y||0);});
  });
  hydrate();scrollTo(0,0);
})().catch(error=>{
  console.error(error);
  delete document.documentElement.dataset.godbotDeep;
  const message=document.createElement('p');message.setAttribute('role','alert');message.textContent='Deep access недоступен. Вернуться к проекту';
  const a=document.createElement('a');a.href='/projects/godbot/';a.append(message);document.body.prepend(a);
});
