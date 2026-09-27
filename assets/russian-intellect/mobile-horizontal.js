/* Mobile viewport adapter only. The graph, routes and node coordinates are unchanged. */
window.RI_MOBILE_GRAPH = {
 active:false, fit:false, lastScroll:0, viewport:null,
 setup(){
  const map=document.getElementById('map'),stage=document.getElementById('stage');
  const media=window.matchMedia('(max-width:600px)');
  const update=()=>{
   if(media.matches===this.active)return;
   this.active=media.matches;
   map.classList.toggle('zoomable',window.self===window.top||window.matchMedia('(max-width:979px)').matches);
   if(this.active){
    this.fit=false;
    const viewport=document.createElement('div');
    viewport.className='mobile-map-viewport';viewport.tabIndex=0;
    viewport.setAttribute('role','region');
    viewport.setAttribute('aria-label','Карта: горизонтальная прокрутка, стрелки влево и вправо');
    stage.insertBefore(viewport,map);viewport.append(map);this.viewport=viewport;
    this.bind(viewport);
   }else{
    this.viewport.before(map);this.viewport.remove();this.viewport=null;
   }
   requestAnimationFrame(()=>applyResponsiveHomeView(true));
  };
  media.addEventListener('change',update);update();
 },
 sync(){
  if(!this.active)return;
  const atOverview=this.fit&&currentZoomScale()<1.001;
  document.getElementById('fitMapBtn').disabled=atOverview;
  // '+' also returns from the optional overview to the readable canvas.
  if(this.fit)document.getElementById('zoomInBtn').disabled=false;
 },
 overview(){
  this.lastScroll=this.viewport.scrollLeft;this.fit=true;
  this.viewport.classList.add('is-overview');
  this.viewport.scrollLeft=0;applyResponsiveHomeView(true);
 },
 read(){
  this.fit=false;this.viewport.classList.remove('is-overview');
  applyResponsiveHomeView(true);this.viewport.scrollLeft=this.lastScroll;
 },
 reveal(id){
  if(!this.active||this.fit)return;
  const node=document.querySelector(`.hist-node[data-id="${id}"],.modern-node[data-id="${id}"]`);
  const label=node?.querySelector('.surname,.mname');if(!label)return;
  const r=label.getBoundingClientRect(),v=this.viewport.getBoundingClientRect();
  if(r.left<v.left+24||r.right>v.right-24)this.viewport.scrollLeft+=r.left-v.left-48;
 },
 wheel(event){
  if(event.ctrlKey||event.metaKey)return false;
  if(Math.abs(event.deltaX)>Math.abs(event.deltaY))return true; // native horizontal scroll
  if(event.shiftKey){event.preventDefault();this.viewport.scrollLeft+=event.deltaY;return true;}
  // Vertical wheel belongs to the page, not to graph zoom.
  if(window.parent!==window){
   event.preventDefault();
   const unit=event.deltaMode===1?16:event.deltaMode===2?innerHeight:1;
   try{window.parent.scrollBy({top:event.deltaY*unit,behavior:'auto'});}catch(_error){}
  }
  return true;
 },
 bind(viewport){
  let drag=null,suppressClick=false;
  viewport.addEventListener('pointerdown',event=>{
   if(event.pointerType!=='mouse'||event.button!==0||this.fit)return;
   drag={id:event.pointerId,x:event.clientX,left:viewport.scrollLeft,moved:false};
  });
  viewport.addEventListener('pointermove',event=>{
   if(!drag)return;
   const dx=event.clientX-drag.x;
   if(!drag.moved&&Math.abs(dx)<6)return;
   drag.moved=true;IS_PANNING=true;suppressClick=true;
   viewport.setPointerCapture(event.pointerId);
   viewport.classList.add('is-dragging');viewport.scrollLeft=drag.left-dx;
  });
  const end=()=>{if(!drag)return;drag=null;IS_PANNING=false;viewport.classList.remove('is-dragging');};
  viewport.addEventListener('pointerup',end);viewport.addEventListener('pointercancel',end);
  viewport.addEventListener('lostpointercapture',end);
  viewport.addEventListener('pointerleave',()=>{if(drag&&!drag.moved)drag=null;});
  viewport.addEventListener('click',event=>{
   if(suppressClick){suppressClick=false;event.preventDefault();event.stopImmediatePropagation();}
  },true);
  viewport.addEventListener('keydown',event=>{
   if(event.target!==viewport)return;
   if(event.key==='ArrowRight'||event.key==='ArrowLeft'){
    event.preventDefault();viewport.scrollLeft+=(event.key==='ArrowRight'?1:-1)*viewport.clientWidth*.75;
   }
  });
 }
};
