(()=>{'use strict';
const items=[
{key:'ri',id:'01',title:'|RU| Интеллект',category:'INTELLECTUAL HISTORY',question:'Как идеи, люди и институты складываются в историю вычислительной культуры?',process:'Люди → школы → методы → технологии.',result:'История технологий складывается из траекторий передачи знания между поколениями и институциями, а не из изолированных эпох.',route:'/research/russian-intellect/',image:'/assets/art-is-you/research/russian-intellect-current-neutral.png',alt:'Актуальная нейтральная карта исследования «Русский интеллект»',evidence:'selected-route'},
{key:'reverse',id:'02',title:'Обратный промпт',category:'MACHINE READING',question:'Что сохраняется и теряется, когда произведение переводится из изображения в текст и обратно?',process:'Оригинал → экфрасис → промпт → две системы → сопоставление.',result:'Корпус показывает диапазон машинных операций — от прерывания до нормализации, редукции и перекодировки.',route:'/research/reverse-prompt/',image:'/assets/art-is-you/research/reverse-prompt/reverse-prompt-experiment-schema-snob.png',alt:'Схема эксперимента «Обратный промпт»'},
{key:'field',id:'03',title:'Полевые исследования',category:'FIELD METHODS',question:'Как наблюдение территории превращается в проектное решение?',process:'Территория → наблюдение → метод → материал.',result:'Территория меняет проект через наблюдение, архив, поведение, материал и моделирование, переводя условия места в художественную форму.',route:'/research/lab/',image:'/assets/static.tildacdn.com/Arch_2019_artre003.jpeg',alt:'Arch_2019: наблюдение, найденный объект и проектная трансформация'},
{key:'prearchive',id:'04',title:'Преархив',category:'MEMORY & EVIDENCE',question:'Почему сконструированное прошлое начинает выглядеть как документ?',process:'Кейс → режим документа → механизм доверия → сопоставление.',result:'Документ может создавать прошлое, авторов, институции и материальные следы для вымышленного мира.',route:'/protoarchive/',image:'/assets/art-is-you/research/prearchive-vertical-temp.png',alt:'Документ и типология исследования «Преархив»'},
{key:'living',id:'05',title:'Живое как медиум',category:'LIVING SYSTEMS',question:'Что меняется в произведении, когда живое становится героем?',process:'Объект → модель → материал → действующая система.',result:'Сопоставление показывает изменение художественной операции с живым — от описания и моделирования к включению в материал и условия работы.',route:'/research/russian-bioart-history/',image:'./assets/living-microbial-agar-snob-2026.jpg',alt:'Микробиальное искусство на агаре: иллюстрация к авторской статье о биоарте'}
];
const selector=document.querySelector('.rp-selector'),active=document.querySelector('.rp-active');let selected=0,interacted=false,expanded=true;
const media=i=>`<figure class="rp-media"><div class="index-preview__media"><img src="${i.image}" alt="${i.alt}" loading="eager" decoding="async"></div><figcaption>${i.evidence==='selected-route'?'КАРТА / АКТУАЛЬНАЯ ВЕРСИЯ / ЛЮДИ → ТЕХНОЛОГИИ → КОМПАНИИ':i.category+' / EVIDENCE PREVIEW'}</figcaption></figure>`;
const mobileIndex=matchMedia('(max-width:768px)');
const workspace=active.parentElement;
['ВЫБРАТЬ ИССЛЕДОВАНИЕ','ПРЕДПРОСМОТР'].reverse().forEach(text=>{
  const label=document.createElement('div');label.className='index-navigation__label';label.textContent=text;workspace.prepend(label);
});
function placePreview(){
  const mobile=mobileIndex.matches;
  active.hidden=mobile&&!expanded;
  selector.setAttribute('role','group');
  active.setAttribute('role','region');
  [...selector.children].filter(e=>e.classList.contains('rp-row')).forEach((row,n)=>{
    const button=row.querySelector('.rp-row-button'),on=n===selected&&(!mobile||expanded);
    button.id=`research-selector-${n}`;
    button.setAttribute('role',mobile?'button':'link');
    button.removeAttribute('aria-selected');
    if(mobile)button.setAttribute('aria-expanded',String(on));else button.removeAttribute('aria-expanded');
    button.tabIndex=0;
    row.classList.remove('is-selected');
    row.classList.toggle('is-preview',on);
    row.classList.toggle('is-open',mobile&&on);
    let action=button.querySelector('.rp-row-action');
    if(!action){action=document.createElement('span');action.className='rp-row-action';action.setAttribute('aria-hidden','true');button.append(action);}
    action.textContent=mobile?(on?'−':'+'):'→';
  });
  active.setAttribute('aria-labelledby',`research-selector-${selected}`);
  if(mobile)selector.children[selected].append(active);else workspace.append(active);
}
function render(index,user=true){
  interacted=interacted||user;
  if(index===selected&&active.children.length){placePreview();return;}
  selected=index;const i=items[index];
  active.innerHTML=`<header class="index-preview__header"><span class="index-preview__number">${i.id}</span><div class="index-preview__identity"><h2>${i.title}</h2><p class="index-preview__meta">${i.category} · ${i.id} / ${String(items.length).padStart(2,'0')}</p></div></header>${media(i)}<p class="rp-selected-question">${i.question}</p><a class="rp-cta" href="${i.route}">Открыть исследование →</a>`;
  placePreview();
}
const togglePreview=n=>{expanded=n===selected?!expanded:true;render(n);};
items.forEach((i,n)=>{
  const row=document.createElement('article');row.className='rp-row';
  row.innerHTML=`<a class="rp-row-button" href="${i.route}" aria-controls="rp-active"><span class="rp-number">${i.id}</span><span><strong class="rp-row-title">${i.title}</strong><small class="rp-category">${i.category}</small></span></a>`;
  const link=row.querySelector('a');
  row.addEventListener('mouseenter',()=>{if(!mobileIndex.matches)render(n)});
  link.addEventListener('focus',()=>{if(!mobileIndex.matches)render(n)});
  link.addEventListener('click',event=>{if(mobileIndex.matches){event.preventDefault();togglePreview(n)}});
  link.addEventListener('keydown',event=>{if(mobileIndex.matches&&event.key===' '){event.preventDefault();togglePreview(n)}});
  selector.append(row);
});
selector.addEventListener('keydown',e=>{if(!['ArrowUp','ArrowDown','Home','End'].includes(e.key))return;e.preventDefault();const next=e.key==='Home'?0:e.key==='End'?items.length-1:(selected+(e.key==='ArrowDown'?1:items.length-1))%items.length;expanded=true;render(next);selector.children[next].querySelector('.rp-row-button').focus()});render(0,false);
mobileIndex.addEventListener('change',placePreview);
const canvas=document.querySelector('.rp-atlas-canvas'),note=document.querySelector('.rp-atlas-note'),nodes=[...document.querySelectorAll('.rp-atlas-node')];let committed='',keyboardMode=false;
function atlasState(key,commit=false){
  if(commit)committed=key===committed?'':key;
  const activeKey=commit?committed:committed||key;
  const edgeStates=[...document.querySelectorAll('.rp-atlas-edges path')].map(path=>{
    const territories=path.dataset.territories.split(' ');
    return {path,territories,active:Boolean(activeKey)&&territories.includes(activeKey)};
  });
  const showConnected=Boolean(committed)&&activeKey===committed;
  const connectedTerritories=new Set(edgeStates.filter(edge=>edge.active).flatMap(edge=>edge.territories).filter(territory=>territory!==activeKey));
  canvas.classList.toggle('has-active',Boolean(activeKey));
  nodes.forEach(node=>{
    const own=node.dataset.territory===activeKey;
    const connected=showConnected&&!own&&connectedTerritories.has(node.dataset.territory);
    const unrelated=Boolean(activeKey)&&!own&&!connected;
    node.classList.toggle('is-selected',own&&Boolean(committed));
    node.classList.toggle('is-connected',connected);
    node.classList.toggle('is-unrelated',unrelated);
    node.classList.toggle('is-preview',own&&!committed&&Boolean(activeKey));
    node.classList.toggle('is-muted',unrelated);
    node.setAttribute('aria-pressed',String(own&&Boolean(committed)));
  });
  edgeStates.forEach(({path,active})=>{
    path.classList.toggle('is-active',active);
    path.classList.toggle('is-muted',Boolean(activeKey)&&!active);
  });
  document.querySelectorAll('.rp-atlas-concepts g').forEach(group=>{
    const active=Boolean(activeKey)&&edgeStates.some(edge=>edge.path.dataset.concept===group.dataset.concept&&edge.active);
    group.classList.toggle('is-muted',Boolean(activeKey)&&!active);
  });
  const item=items.find(i=>i.key===activeKey);
  note.textContent=item?`${committed?'SELECTED':'HOVER'} / ${item.title}: связанные понятия усилены, остальные отношения отступают.`:'NORMAL / все территории и связи показаны равноправно.';
}
document.addEventListener('keydown',()=>{keyboardMode=true},true);document.addEventListener('pointerdown',()=>{keyboardMode=false;nodes.forEach(node=>delete node.dataset.focusVisible)},true);
nodes.forEach(n=>{n.addEventListener('pointerenter',e=>{if(e.pointerType==='mouse')atlasState(n.dataset.territory)});n.addEventListener('pointerleave',()=>atlasState(''));n.addEventListener('focus',()=>{if(keyboardMode)n.dataset.focusVisible='true';atlasState(n.dataset.territory)});n.addEventListener('blur',()=>{delete n.dataset.focusVisible;atlasState('')});n.addEventListener('click',()=>atlasState(n.dataset.territory,true));n.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();atlasState(n.dataset.territory,true)}})});
const clearAtlas=()=>{committed='';atlasState('');};
document.querySelector('.rp-atlas-reset').addEventListener('click',clearAtlas);
canvas.addEventListener('keydown',e=>{if(e.key==='Escape'){e.preventDefault();clearAtlas();}});
document.addEventListener('pointerdown',e=>{if(!canvas.contains(e.target))clearAtlas();});
customElements.whenDefined('art-is-you-header').then(()=>setTimeout(()=>{document.querySelectorAll('art-is-you-header a').forEach(a=>{if(new URL(a.href,location.href).pathname==='/research/'){a.classList.add('is-current');a.setAttribute('aria-current','location')}})},0));
})();
