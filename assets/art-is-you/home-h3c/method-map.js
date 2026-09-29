(() => {
 const main=document.querySelector('.h3b-home'),hero=main.querySelector('.hero');
 const node=(key,title,href)=>`<section class="method-node method-node--compact" data-stage="${key}" data-control="${key}"><h2 class="method-node__title">${href?`<a href="${href}">${title}</a>`:`<button type="button" aria-pressed="false">${title}</button>`}</h2></section>`;
 const marker=(id,color)=>`<marker id="${id}" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="8" markerHeight="8" orient="auto"><path d="M1 1 L7 4 L1 7" style="fill:none;stroke:${color};stroke-width:1.2;marker-end:none"/></marker>`;
 const map=document.createElement('section');map.className='method-map';map.id='method';map.setAttribute('aria-label','Фрагменты методологии: ошибка, человеческий сдвиг, модель мира, гипотезы и концепции');
 map.innerHTML=`<p class="system method-map__label">ФРАГМЕНТЫ МЕТОДОЛОГИИ</p><div class="method-map__field">
 <svg class="method-map__paths" aria-hidden="true"><defs>${marker('method-arrow','var(--muted)')}${marker('method-arrow-active','var(--ui-accent)')}</defs><g class="method-map__lines"></g><g class="method-map__ports"></g></svg>
 <section class="method-node method-node--compact" data-stage="error" data-control="error"><h2 class="method-node__title"><button type="button" aria-pressed="false">Ошибка</button></h2><p class="method-node__example"><a href="/projects/godbot/">Богобот <span aria-hidden="true">↗</span></a></p></section>
 <section class="method-node method-node--compact" data-stage="human-shift" data-control="human-shift"><h2 class="method-node__title"><button type="button" aria-pressed="false">ЧЕЛОВЕЧЕСКИЙ СДВИГ</button></h2><p class="method-node__example"><a href="/research/russian-intellect/">|RU| Интеллект <span aria-hidden="true">↗</span></a><a href="/projects/likes-pond/">Лайков пруд <span aria-hidden="true">↗</span></a></p></section>
 <section class="method-node method-node--compact method-agent" data-stage="agent" data-control="agent"><div class="method-node__title"><button type="button" aria-pressed="false" aria-label="agent = model(world)" aria-description="Пунктирные связи к гипотезам и концепциям обозначают промежуточные исследовательские операции, не развёрнутые в этой схеме."><span class="method-formula-visual"><img src="/assets/art-is-you/bogobot-deep/source/assets/canon/book-1-awakening.webp" width="1536" height="1024" alt="agent = model(world)"></span></button></div></section>
 <div class="method-hypothesis-cluster"><div class="method-hypothesis-row">${node('hypothesis','Гипотезы','/research/')}${node('concepts','Концепции','/projects/')}</div></div>
 </div><p class="method-map__return"><a href="#research-frame">К исследовательской рамке <span aria-hidden="true">↑</span></a></p>`;
 const core=main.querySelector('.home-core');
 (core||hero).after(map);
 if(core){
  for(const version of core.querySelectorAll('[data-frame-version]')){
  const steps=[...version.querySelectorAll('li')];
  let selected=null,hovered=null,focused=null;
  const paint=()=>{
   const active=selected??focused??hovered;
   core.dataset.activeStep=active===null?'':String(active+1).padStart(2,'0');
   core.dataset.selectedStep=selected===null?'':String(selected+1).padStart(2,'0');
   steps.forEach((step,index)=>{
    step.classList.toggle('is-active',index===active);
    step.classList.toggle('is-related',active!==null&&index===active+1);
    step.classList.toggle('is-selected',index===selected);
    step.classList.toggle('is-focused',index===focused);
    step.querySelector('button').setAttribute('aria-pressed',String(index===selected));
   });
  };
  steps.forEach((step,index)=>{
   const button=step.querySelector('button');
   step.addEventListener('pointerenter',event=>{if(event.pointerType==='mouse'){hovered=index;paint();}});
   step.addEventListener('pointerleave',()=>{hovered=null;paint();});
   button.addEventListener('focus',()=>{focused=index;paint();});
   button.addEventListener('blur',()=>{focused=null;paint();});
   button.addEventListener('click',()=>{selected=selected===index?null:index;hovered=null;focused=null;paint();});
  });
  core.addEventListener('keydown',event=>{if(event.key==='Escape'){selected=null;hovered=null;focused=null;paint();}});
  document.addEventListener('pointerdown',event=>{if(selected!==null&&!core.contains(event.target)){selected=null;hovered=null;focused=null;paint();}});
  paint();
  }
 }
 const archiveImage=hero.querySelector('.hero-visual');
 const field=map.querySelector('.method-map__field'),svg=map.querySelector('svg'),paths=svg.querySelector('.method-map__lines'),ports=svg.querySelector('.method-map__ports');
 const futures=main.querySelector('.home-futures');
 field.querySelector('[data-stage=hypothesis]').append(futures.querySelector('[data-future-category=research]'));
 field.querySelector('[data-stage=concepts]').append(futures.querySelector('[data-future-category=projects]'));
 futures.remove();
 const errorNode=field.querySelector('[data-stage=error]');
 let pinned=null,preview=null,focused=null;
 const controls=[...field.querySelectorAll('[data-control]')];
 const applyState=()=>{
  const state=pinned||preview||focused;map.dataset.active=state||'';map.dataset.selected=pinned||'';
  const related={error:['human-shift'],'human-shift':['agent'],agent:['hypothesis','concepts']}[state]||[];
  controls.forEach(el=>{
   const key=el.dataset.control;
   el.classList.toggle('is-active',key===state);
   el.classList.toggle('is-related',related.includes(key));
   el.classList.toggle('is-selected',key===pinned);
   el.querySelector('button')?.setAttribute('aria-pressed',String(pinned===key));
  });
  paths.querySelectorAll('path').forEach(path=>{
   const active=Boolean(state)&&[...path.dataset.from.split(' '),...path.dataset.to.split(' ')].includes(state);
   path.classList.toggle('is-active',Boolean(active));
  });
  paths.querySelectorAll('.is-active').forEach(path=>paths.append(path));
  ports.querySelectorAll('circle').forEach(port=>{
   port.classList.toggle('is-active',port.dataset.node===state||related.includes(port.dataset.node));
   port.classList.toggle('is-selected',port.dataset.node===pinned);
  });
 };
 const clear=()=>{pinned=null;preview=null;focused=null;applyState();};
 controls.forEach(el=>{
  const key=el.dataset.control;
  el.addEventListener('pointerenter',event=>{if(event.pointerType==='mouse'){preview=key;applyState();}});
  el.addEventListener('pointerleave',()=>{preview=null;applyState();});
  el.addEventListener('focusin',()=>{focused=key;preview=null;applyState();});
  el.addEventListener('focusout',event=>{if(!el.contains(event.relatedTarget)){focused=null;applyState();}});
  el.addEventListener('click',event=>{if(event.target.closest('a'))return;pinned=pinned===key?null:key;preview=null;focused=null;applyState();});
 });
 map.addEventListener('click',event=>{if(!event.target.closest('[data-control]'))clear();});
 document.addEventListener('pointerdown',event=>{if(pinned&&!map.contains(event.target))clear();});
 main.addEventListener('keydown',event=>{if(event.key==='Escape'&&map.contains(event.target)){event.preventDefault();clear();}});
 const rect=e=>{const r=e.getBoundingClientRect(),f=field.getBoundingClientRect();return{x:r.x-f.x,y:r.y-f.y,w:r.width,h:r.height}};
 const draw=()=>{
  const f=field.getBoundingClientRect();svg.setAttribute('viewBox',`0 0 ${f.width} ${f.height}`);
  const horizontal=matchMedia('(min-width:1360px)').matches;
  const elements=Object.fromEntries(controls.map(el=>[el.dataset.stage,el]));
  const box=key=>rect(elements[key]);
  const title=key=>rect(elements[key].querySelector('.method-node__title'));
  const point=(key,side)=>{
   const r=horizontal?title(key):box(key);
   if(side==='in')return horizontal?{x:r.x-6,y:r.y+r.h/2}:{x:r.x+r.w/2,y:r.y-6};
   return horizontal?{x:r.x+r.w+6,y:r.y+r.h/2}:{x:r.x+r.w/2,y:r.y+r.h+6};
  };
  const lines=[],dots=new Map();
  const dot=(key,side)=>{const p=point(key,side);dots.set(`${key}-${side}`,`<circle data-node="${key}" cx="${p.x}" cy="${p.y}" r="3"/>`);return p;};
  const path=(from,to,d,kind='solid',arrow=true)=>lines.push(`<path data-from="${from}" data-to="${to}" data-kind="${kind}" data-arrow="${arrow}" d="${d}"/>`);
  const direct=(from,to)=>{
   const a=dot(from,'out'),b=dot(to,'in');
   const d=horizontal?`M${a.x+4},${a.y} H${(a.x+b.x)/2} V${b.y} H${b.x-6}`:`M${a.x},${a.y} V${b.y-5}`;
   path(from,to,d);
  };
  direct('error','human-shift');direct('human-shift','agent');
  const a=dot('agent','out'),h=dot('hypothesis','in'),c=dot('concepts','in');
  if(horizontal){
   const splitX=(a.x+h.x)/2;
   path('agent','hypothesis concepts',`M${a.x+4},${a.y} H${splitX}`,'omitted',false);
   path('agent','hypothesis',`M${splitX},${a.y} V${h.y} H${h.x-6}`,'omitted');
   path('agent','concepts',`M${splitX},${a.y} V${c.y} H${c.x-6}`,'omitted');
  }else{
   const splitY=(a.y+h.y)/2;
   path('agent','hypothesis concepts',`M${a.x},${a.y} V${splitY}`,'omitted',false);
   path('agent','hypothesis',`M${a.x},${splitY} H${h.x} V${h.y-6}`,'omitted');
   path('agent','concepts',`M${a.x},${splitY} H${c.x} V${c.y-6}`,'omitted');
  }
  paths.innerHTML=lines.join('');
  ports.innerHTML=[...dots.values()].join('');
  // Active paths above neutral shared trunks.
  applyState();
 };
 // Do not mutate SVG geometry inside desktop resize delivery (WebKit loop).
 let drawFrame=0;
 const scheduleDraw=()=>{
  if(!matchMedia('(min-width:961px)').matches){draw();return;}
  if(!drawFrame)drawFrame=requestAnimationFrame(()=>{drawFrame=0;draw();});
 };
 const observer=new ResizeObserver(scheduleDraw);observer.observe(field);observer.observe(hero);controls.forEach(el=>observer.observe(el));document.fonts.ready.then(scheduleDraw);draw();
 const arrange=()=>{
  if(document.documentElement.dataset.openingSystem!=='ready')return false;
  errorNode.prepend(archiveImage);
  observer.observe(errorNode);draw();document.documentElement.dataset.methodMap='ready';return true;
 };
 if(!arrange()){const wait=new MutationObserver(()=>{if(arrange())wait.disconnect();});wait.observe(document.documentElement,{attributes:true,attributeFilter:['data-opening-system']});}
})();
