// Connector geometry for the formula's relocated outgoing branch.
// Existing selection, relation data and event handlers remain untouched.
(() => {
 const field=document.querySelector('#method .method-map__field');
 if(!field)return;
 const draw=()=>{
  if(innerWidth<769)return;
  const origin=field.getBoundingClientRect();
  // Tablet uses the same horizontal composition, despite the base map's
  // width-only resolver still choosing vertical ports below 1360px.
  for(const key of ['error','human-shift','agent']){
   const r=field.querySelector(`[data-stage="${key}"] .method-node__title`).getBoundingClientRect();
   const dots=[...field.querySelectorAll(`circle[data-node="${key}"]`)];
   if(key!=='error'){dots[0].setAttribute('cx',r.left-origin.left-6);dots[0].setAttribute('cy',r.top-origin.top+r.height/2);}
   if(key!=='agent'){const dot=dots.at(-1);dot.setAttribute('cx',r.right-origin.left+6);dot.setAttribute('cy',r.top-origin.top+r.height/2);}
  }
  for(const [from,to] of [['error','human-shift'],['human-shift','agent']]){
   const start=[...field.querySelectorAll(`circle[data-node="${from}"]`)].at(-1);
   const end=field.querySelector(`circle[data-node="${to}"]`);
   if(start&&end)field.querySelector(`path[data-from="${from}"][data-to="${to}"]`)?.setAttribute('d',`M${+start.getAttribute('cx')+4},${start.getAttribute('cy')} L${+end.getAttribute('cx')-6},${end.getAttribute('cy')}`);
  }
  const box=key=>field.querySelector(`[data-stage="${key}"] .method-node__title`).getBoundingClientRect();
  const a=box('agent'),h=box('hypothesis'),c=box('concepts');
  const x=a.left+a.width/2-origin.left,y=a.bottom-origin.top+6;
  const hx=h.left+h.width/2-origin.left,cx=c.left+c.width/2-origin.left;
  const end=Math.min(h.top,c.top)-origin.top-6,split=(y+end)/2;
  const set=(to,d)=>field.querySelector(`path[data-from="agent"][data-to="${to}"]`)?.setAttribute('d',d);
  set('hypothesis concepts',`M${x},${y} V${split}`);
  set('hypothesis',`M${x},${split} H${hx} V${end-6}`);
  set('concepts',`M${x},${split} H${cx} V${end-6}`);
  const dot=(el,px,py)=>{if(el){el.setAttribute('cx',px);el.setAttribute('cy',py);}};
  dot([...field.querySelectorAll('circle[data-node="agent"]')].at(-1),x,y);
  dot(field.querySelector('circle[data-node="hypothesis"]'),hx,end);
  dot(field.querySelector('circle[data-node="concepts"]'),cx,end);
 };
 new MutationObserver(draw).observe(field.querySelector('.method-map__lines'),{childList:true});
 addEventListener('resize',()=>requestAnimationFrame(draw));
 document.fonts.ready.then(draw);
 draw();
 // A single interruptible material response; never changes selection state.
 const error=field.querySelector('[data-stage="error"]');
 const formula=field.querySelector('.method-formula-visual img');
 const reduce=matchMedia('(prefers-reduced-motion: reduce)');
 let motion=null,lastStart=-Infinity;
 const stop=()=>{motion?.cancel();motion=null;};
 const pulse=()=>{
  if(reduce.matches||performance.now()-lastStart<180)return;
  lastStart=performance.now();
  stop();
  motion=formula.animate([
   {filter:'blur(0px)',offset:0},
   {filter:'blur(3px)',offset:.3},
   {filter:'blur(0px)',offset:1}
  ],{duration:560,easing:'cubic-bezier(.22,.61,.36,1)',iterations:1});
  const current=motion;
  current.onfinish=()=>{current.cancel();if(motion===current)motion=null;};
 };
 error.addEventListener('pointerenter',event=>{if(event.pointerType==='mouse')pulse();});
 error.addEventListener('focusin',event=>{if(!error.contains(event.relatedTarget))pulse();});
 error.querySelector('button').addEventListener('click',pulse);
 reduce.addEventListener('change',()=>{if(reduce.matches)stop();});
 document.addEventListener('visibilitychange',()=>{if(document.hidden)stop();});
})();
