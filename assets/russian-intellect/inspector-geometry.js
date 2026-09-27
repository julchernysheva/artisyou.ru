/* Dock / bottom inspector. Camera changes never mutate graph coordinates or corpus. */
window.RI_INSPECTOR={
 savedView:null, savedViewport:null, mode:null, entity:null, cameraKey:null, expanded:false, bound:false,
 setup(){
  if(this.bound)return;
  this.bound=true;
  const toggle=document.createElement('button');
  toggle.type='button';toggle.className='inspector-toggle';
  toggle.setAttribute('aria-controls','drawerBody');
  toggle.addEventListener('click',()=>{
   this.expanded=!this.expanded;
   this.position(DRAWER_POSITION_RUNTIME,SELECTED_ID);
  });
  document.getElementById('drawer').prepend(toggle);
  const update=()=>scheduleDrawerContainment();
  window.addEventListener('resize',update);
  try{if(parent!==window){parent.addEventListener('scroll',update,{passive:true});parent.addEventListener('resize',update);parent.visualViewport?.addEventListener('resize',update);}}catch(_error){}
 },
 visibleBounds(stageRect){
  let top=0,bottom=innerHeight;
  try{if(parent!==window&&frameElement){
   const frame=frameElement.getBoundingClientRect();
   top=Math.max(top,-frame.top);
   bottom=Math.min(bottom,(parent.visualViewport?.height||parent.innerHeight)-frame.top);
  }}catch(_error){}
  return{top:Math.max(stageRect.top,top),bottom:Math.min(stageRect.bottom,bottom)};
 },
 position(rt,id){
  const d=document.getElementById('drawer'),stage=document.getElementById('stage');
  if(!rt||!id||!d.classList.contains('open'))return;
  this.setup();
  const mobile=matchMedia('(max-width:600px)').matches,mode=mobile?'bottom':'docked';
  if(!this.savedView){this.savedView={...CURRENT_VIEW};this.savedViewport=[innerWidth,innerHeight].join(':');}
  if(this.entity!==id||this.mode!==mode){this.expanded=false;this.cameraKey=null;}
  this.entity=id;this.mode=mode;
  d.classList.remove('pos-left','pos-right');
  d.classList.toggle('company-safe',rt.entityById[id]?.entity_type==='COMPANY');
  stage.classList.remove('company-card-open');
  stage.classList.toggle('inspector-docked',!mobile);
  stage.classList.toggle('inspector-bottom',mobile);
  d.classList.toggle('is-collapsed',mobile&&!this.expanded);
  const toggle=d.querySelector('.inspector-toggle');
  toggle.textContent=this.expanded?'Свернуть карточку':'Открыть карточку';
  toggle.setAttribute('aria-expanded',String(!mobile||this.expanded));
  const rect=stage.getBoundingClientRect();
  const menuBottom=['subnavWrap','thirdnavWrap'].map(key=>document.getElementById(key))
   .filter(menu=>menu?.classList.contains('open')).reduce((bottom,menu)=>Math.max(bottom,menu.getBoundingClientRect().bottom),rect.top);
  const topInset=Math.max(18,menuBottom-rect.top+18);
  const visible=this.visibleBounds(rect);
  const height=mobile?(this.expanded?Math.max(44,Math.min(430,(visible.bottom-visible.top-24)*.65)):44):Math.max(44,rect.height-topInset-18);
  stage.style.setProperty('--inspector-height',`${height}px`);
  const width=d.getBoundingClientRect().width;
  stage.style.setProperty('--inspector-allocation',`${width+36}px`);
  d.style.setProperty('left',mobile?'12px':`${rect.width-width-18}px`);
  d.style.setProperty('right','auto');
  d.style.setProperty('top',`${mobile?Math.max(12,visible.bottom-rect.top-height-12):topInset}px`,'important');
  d.style.setProperty('bottom','auto','important');
  d.style.setProperty('transform','none');
  d.dataset.placement=mode;
  if(!mobile){
   const key=[id,CARD_ROUTE_FOCUS,rect.width,rect.height,width].join(':');
   if(key!==this.cameraKey){
    this.cameraKey=key;
    requestAnimationFrame(()=>requestAnimationFrame(()=>{
     if(this.cameraKey!==key||!d.classList.contains('open'))return;
     if(CARD_ROUTE_FOCUS)this.fitRoute(rt,CARD_ROUTE_FOCUS);
     else applyResponsiveHomeView(true);
    }));
   }
  }
 },
 fitRoute(rt,rid){
  const map=document.getElementById('map'),inverse=map.getScreenCTM().inverse();
  const boxes=[...rt.routeNodeSets[rid]].map(id=>document.querySelector(`.hist-node[data-id="${id}"],.modern-node[data-id="${id}"]`)).filter(Boolean).map(node=>node.getBoundingClientRect());
  document.querySelectorAll('path.selected-route-primary').forEach(path=>boxes.push(path.getBoundingClientRect()));
  if(!boxes.length)return;
  const points=boxes.flatMap(r=>[new DOMPoint(r.left,r.top).matrixTransform(inverse),new DOMPoint(r.right,r.bottom).matrixTransform(inverse)]);
  const x=Math.min(...points.map(p=>p.x))-55,y=Math.min(...points.map(p=>p.y))-55;
  const w=Math.max(...points.map(p=>p.x))-x+55,h=Math.max(...points.map(p=>p.y))-y+55;
  const viewport=map.getBoundingClientRect(),ratio=viewport.width/viewport.height;
  const fitW=Math.max(w,h*ratio),fitH=fitW/ratio;
  setMapView({x:x+(w-fitW)/2,y:y+(h-fitH)/2,w:fitW,h:fitH});
 },
 close(){
  const stage=document.getElementById('stage'),d=document.getElementById('drawer');
  const restore=this.savedView,desktop=this.mode==='docked',sameViewport=this.savedViewport===[innerWidth,innerHeight].join(':');
  stage.classList.remove('inspector-docked','inspector-bottom');
  stage.style.removeProperty('--inspector-height');stage.style.removeProperty('--inspector-allocation');
  d.classList.remove('is-collapsed');
  this.savedView=null;this.savedViewport=null;this.entity=null;this.cameraKey=null;this.mode=null;this.expanded=false;
  if(restore&&desktop){window.VIEW_HOME_RUNTIME=responsiveHomeView();setMapView(sameViewport?restore:window.VIEW_HOME_RUNTIME);}
 }
};
