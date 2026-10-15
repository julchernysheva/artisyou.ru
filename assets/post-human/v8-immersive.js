import * as THREE from './vendor/three.module.js';
const host=document.querySelector('#stage'),status=document.querySelector('#state');
const scene=new THREE.Scene();scene.background=new THREE.Color(0);scene.fog=new THREE.FogExp2(0,.024);
const camera=new THREE.PerspectiveCamera(73,1,.08,200);
const renderer=new THREE.WebGLRenderer({antialias:true});renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));host.append(renderer.domElement);
scene.add(new THREE.HemisphereLight(0xc6c9d0,0x191512,1.7));
for(const [x,y,z,power] of [[-12,15,4,4],[19,-7,-20,2.4],[-14,-9,21,2.8]]){const light=new THREE.PointLight(0xd8d4c9,power*100,90,2);light.position.set(x,y,z);scene.add(light);}
const canvas=renderer.domElement;canvas.tabIndex=0;canvas.setAttribute('aria-label','Объёмное поле: перетаскивание или стрелки — обзор; WASD — перемещение; Q/E — высота');
let yaw=0,pitch=0,drag=null,current='front',renderCount=0;
function render(){const w=host.clientWidth,h=host.clientHeight;camera.aspect=w/h;camera.updateProjectionMatrix();renderer.setSize(w,h,false);renderer.render(scene,camera);Object.assign(host.dataset,{camera:camera.position.toArray().map(n=>n.toFixed(3)).join(','),direction:camera.getWorldDirection(new THREE.Vector3()).toArray().map(n=>n.toFixed(3)).join(','),renderCount:String(++renderCount)});status.textContent=current.toUpperCase()+' / '+(host.dataset.segments||'…')+' CONNECTIONS';}
function look(){camera.up.set(0,1,0);camera.lookAt(camera.position.clone().add(new THREE.Vector3(-Math.sin(yaw)*Math.cos(pitch),Math.sin(pitch),-Math.cos(yaw)*Math.cos(pitch))));render();}
function view(v){current=v;camera.position.set(0,1.65,0);yaw=v==='right'?-Math.PI/2:v==='back'?Math.PI:0;pitch=v==='up'?1.49:0;if(v==='outside'){camera.position.set(57,43,65);const d=new THREE.Vector3().sub(camera.position).normalize();yaw=Math.atan2(-d.x,-d.z);pitch=Math.asin(d.y);}document.querySelectorAll('[data-view]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.view===v)));look();}
async function sample(file){
 const response=await fetch('/assets/post-human/'+file+'.samples.json');
 if(!response.ok)throw new Error('V8 sample data unavailable: '+file);
 const sampleData=await response.json();
 if(sampleData.width!==192||sampleData.height!==108||sampleData.rgba.length!==82944)throw new Error('Invalid V8 sample data');
 const data=sampleData.rgba;
 return(u,v)=>{const x=((Math.floor(u*192)%192)+192)%192,y=((Math.floor(v*108)%108)+108)%108,i=(y*192+x)*4;return[data[i]/255,data[i+1]/255,data[i+2]/255];};
}
const items=[],helper=new THREE.Object3D(),axis=new THREE.Vector3(0,1,0);
function connection(a,b,width,color){const d=b.clone().sub(a);helper.position.copy(a).add(b).multiplyScalar(.5);helper.quaternion.setFromUnitVectors(axis,d.clone().normalize());helper.scale.set(width,d.length(),width);helper.updateMatrix();items.push({matrix:helper.matrix.clone(),color});}
try{
 const matrix=await sample('v6-matrix.png'),signal=await sample('v6-signal.png'),nodes=new Map();
 // A volume, not a shell: independent source slices occupy all three axes.
 // No polar coordinate, central axis, radial camera void or enclosing surface.
 const nx=33,ny=21,nz=35;
 for(let z=0;z<nz;z++)for(let y=0;y<ny;y++)for(let x=0;x<nx;x++){
  const m=matrix(x/17+z*.013,y/12+z*.037),r=signal(x/35+z*.008,y/23-z*.016),red=Math.max(0,r[0]-(r[1]+r[2])*.5),lum=(m[0]+m[1]+m[2])/3;
  const across=matrix(z/23+y*.019,x/21),phase=(across[0]*.41+m[2]*.37+r[1]*.22);
  // Source-derived occupancy. The large black gaps remain actual 3D voids.
  const keep=(lum>.055&&phase>.045)||(lum>.016&&(x+2*y+z)%7===0);
  if(!keep||(red>.82&&(x+y+z)%3!==0))continue;
  const p=new THREE.Vector3((x-16)*1.8,(y-10)*1.8,(z-17)*1.8);
  p.x+=(m[0]-.3)*1.3+red*2.1;p.y+=(across[1]-.4)*1.5-red*.9;p.z+=(m[2]-.3)*1.6;
  // One small irregular navigable pocket, never a tunnel carved along an axis.
  if(p.distanceTo(new THREE.Vector3(0,1.65,0))<1.6)continue;
  nodes.set(`${x},${y},${z}`,{p,lum,red,phase});
 }
 const neighbors=[[1,0,0],[0,1,0],[0,0,1],[1,1,1],[-1,1,1],[2,0,1]];
 for(const [key,a] of nodes){const [x,y,z]=key.split(',').map(Number);for(let n=0;n<neighbors.length;n++){const [dx,dy,dz]=neighbors[n],b=nodes.get(`${x+dx},${y+dy},${z+dz}`);if(!b)continue;if(n<3&&(x+y+z+n)%3===0)continue;if(n>=3&&a.phase<.13+n*.025)continue;
  const rupture=(a.red+b.red)*.5;
  if(rupture>.7&&n<2)continue;
  const shade=.24+Math.min(.7,(a.lum+b.lum)*.65),c=rupture>.72?new THREE.Color(shade*.63,shade*.11,shade*.08):new THREE.Color(shade*.92,shade*.94,shade);
  connection(a.p,b.p,.023+Math.min(.045,a.lum*.05),c);
 }}
 const mesh=new THREE.InstancedMesh(new THREE.CylinderGeometry(1,1,1,4,1),new THREE.MeshStandardMaterial({roughness:.93,metalness:0}),items.length);items.forEach((s,i)=>{mesh.setMatrixAt(i,s.matrix);mesh.setColorAt(i,s.color);});scene.add(mesh);
 const octants=Array(8).fill(0);for(const a of nodes.values())octants[(a.p.x>0?1:0)+(a.p.y>1.65?2:0)+(a.p.z>0?4:0)]++;
 Object.assign(host.dataset,{nodes:String(nodes.size),segments:String(items.length),octants:octants.join(','),imagePlanes:'0',scenes:'1',cameras:'1',animation:'none',sources:'v6-matrix.png + v6-signal.png'});host.classList.add('ready');view('front');
}catch(error){document.querySelector('.loading').textContent='WebGL / исходные материалы недоступны';console.error(error);}
function free(){current='free';document.querySelectorAll('[data-view]').forEach(b=>b.setAttribute('aria-pressed','false'));}
function move(dir){free();const f=camera.getWorldDirection(new THREE.Vector3()),right=new THREE.Vector3().crossVectors(f,new THREE.Vector3(0,1,0)).normalize();if(dir==='forward')camera.position.addScaledVector(f,.9);if(dir==='back')camera.position.addScaledVector(f,-.9);if(dir==='left')camera.position.addScaledVector(right,-.9);if(dir==='right')camera.position.addScaledVector(right,.9);render();}
document.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>view(b.dataset.view)));document.querySelectorAll('[data-move]').forEach(b=>b.addEventListener('click',()=>move(b.dataset.move)));
const touchPoints=new Map();let touchBaseline=null;
function resetTouchBaseline(){
 const points=[...touchPoints.values()];
 touchBaseline=points.length===1?{count:1,...points[0]}:points.length===2?{count:2,y:(points[0].y+points[1].y)/2}:null;
}
canvas.addEventListener('pointerdown',e=>{
 canvas.focus();canvas.setPointerCapture(e.pointerId);
 if(e.pointerType==='touch'){touchPoints.set(e.pointerId,{x:e.clientX,y:e.clientY});resetTouchBaseline();drag=null;return;}
 drag={x:e.clientX,y:e.clientY};
});
canvas.addEventListener('pointermove',e=>{
 if(e.pointerType==='touch'){
  if(!touchPoints.has(e.pointerId))return;
  touchPoints.set(e.pointerId,{x:e.clientX,y:e.clientY});
  const previous=touchBaseline;resetTouchBaseline();
  if(!previous||!touchBaseline||previous.count!==touchBaseline.count)return;
  if(touchBaseline.count===2){
   const dy=touchBaseline.y-previous.y;if(!dy)return;
   free();camera.position.addScaledVector(camera.getWorldDirection(new THREE.Vector3()),-dy*.025);render();return;
  }
  free();yaw-=(touchBaseline.x-previous.x)*.004;pitch=THREE.MathUtils.clamp(pitch-(touchBaseline.y-previous.y)*.004,-1.55,1.55);look();return;
 }
 if(!drag)return;free();yaw-=(e.clientX-drag.x)*.004;pitch=THREE.MathUtils.clamp(pitch-(e.clientY-drag.y)*.004,-1.55,1.55);drag={x:e.clientX,y:e.clientY};look();
});
for(const type of ['pointerup','pointercancel','lostpointercapture'])canvas.addEventListener(type,e=>{
 if(e.pointerType==='touch'){touchPoints.delete(e.pointerId);resetTouchBaseline();}else drag=null;
});
canvas.addEventListener('keydown',e=>{const k=e.key.toLowerCase(),dirs={w:'forward',s:'back',a:'left',d:'right'};if(!dirs[k]&&!['q','e','arrowleft','arrowright','arrowup','arrowdown'].includes(k))return;e.preventDefault();if(dirs[k]){move(dirs[k]);return;}free();if(k==='q')camera.position.y-=.9;if(k==='e')camera.position.y+=.9;if(k==='arrowleft')yaw+=.09;if(k==='arrowright')yaw-=.09;if(k==='arrowup')pitch=Math.min(1.55,pitch+.09);if(k==='arrowdown')pitch=Math.max(-1.55,pitch-.09);look();});
canvas.addEventListener('wheel',e=>{e.preventDefault();move(e.deltaY<0?'forward':'back');},{passive:false});new ResizeObserver(render).observe(host);
