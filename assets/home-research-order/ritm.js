/* Geometry, colors, two markers and speed scale adapted from ritm-interactive.html. */
(() => {
 'use strict';
 const mount=document.querySelector('[data-ritm-mount]');if(!mount)return;
 mount.innerHTML=`<div class="ritm" role="group" aria-label="Одна волна, два темпа">
 <svg viewBox="0 0 540 355" role="img" aria-labelledby="ritm-title ritm-desc" data-ritm="diagram"><title id="ritm-title">Один путь, два темпа</title><desc id="ritm-desc">Два маркера движутся по одной волне. Ползунки меняют скорости человека и технологий. Направляющие проецируют положения на ось; горизонтальный отрезок показывает расстояние. При уменьшении движения схема статична, кнопка выполняет отдельный шаг.</desc><path data-ritm="base" class="path-base"/><path data-ritm="system-path" class="path-system"/><path data-ritm="human-path" class="path-human"/><path class="axis" d="M58 296H490"/><path data-ritm="system-guide" class="guide"/><path data-ritm="human-guide" class="guide"/><path data-ritm="gap" class="gap"/><circle data-ritm="system-dot" class="marker system" r="11"/><circle data-ritm="human-dot" class="marker human" r="11"/></svg>
 <div class="controls"><label class="control human"><span><i class="swatch" aria-hidden="true"></i>Человек</span><input data-ritm="human-speed" type="range" min="10" max="100" value="45" aria-label="Скорость человека" aria-describedby="ritm-note"></label><label class="control system"><span><i class="swatch" aria-hidden="true"></i>Технологии</span><input data-ritm="system-speed" type="range" min="10" max="100" value="80" aria-label="Скорость технологий" aria-describedby="ritm-note"></label></div>
 <div class="ritm-footer"><output data-ritm="status" aria-live="polite">Технологии впереди</output><button data-ritm="action" type="button">Пауза</button></div>
 <p class="ritm-note" id="ritm-note">Условная модель рассогласования темпов, не измерение</p></div>`;
 const root=mount.querySelector('.ritm'),$=id=>root.querySelector(`[data-ritm="${id}"]`);
 const from=58,to=490,axisY=296,centerY=170,amp=60,cycles=2.35;
 const human=$('human-speed'),system=$('system-speed'),action=$('action'),reduce=matchMedia('(prefers-reduced-motion: reduce)');
 let hp=reduce.matches?.35:.04,sp=reduce.matches?.64:.09,running=!reduce.matches,finished=false,previous=0,raf=0,visible=false,frames=0;
 function point(p){return {x:from+(to-from)*p,y:centerY-amp*Math.sin(Math.PI*2*cycles*p)}}
 function path(p){const n=Math.max(1,Math.ceil(180*p));let d='';for(let i=0;i<=n;i++){const a=point(p*i/n);d+=(i?'L':'M')+a.x.toFixed(2)+' '+a.y.toFixed(2)}return d}
 function label(){action.textContent=finished?'Сначала':reduce.matches?'Следующий шаг':running?'Пауза':'Продолжить';}
 function draw(){
  $('system-path').setAttribute('d',path(sp));$('human-path').setAttribute('d',path(hp));
  const a=point(hp),b=point(sp);for(const [id,p] of [['human-dot',a],['system-dot',b]]){$(id).setAttribute('cx',p.x);$(id).setAttribute('cy',p.y);}
  $('human-guide').setAttribute('d',`M${a.x} ${a.y+12}V${axisY}`);$('system-guide').setAttribute('d',`M${b.x} ${b.y+12}V${axisY}`);
  $('gap').setAttribute('d',Math.abs(a.x-b.x)>8?`M${a.x} ${axisY}H${b.x}`:'');
  // State follows actual marker positions, never an inference from slider speeds.
  const distance=Math.hypot(a.x-b.x,a.y-b.y);
  const text=finished?'Оба прошли путь':distance<=16?'Движутся рядом':b.x>a.x?'Технологии впереди':'Человек впереди';
  if($('status').textContent!==text)$('status').textContent=text;
  Object.assign(root.dataset,{humanProgress:String(hp),systemProgress:String(sp),distance:String(distance),running:String(running),finished:String(finished),reduced:String(reduce.matches),frames:String(frames)});label();
 }
 function stop(){if(raf)cancelAnimationFrame(raf);raf=0;previous=0;}
 function advance(dt){hp=Math.min(1,hp+Number(human.value)/100*.115*dt);sp=Math.min(1,sp+Number(system.value)/100*.115*dt);if(hp>=1&&sp>=1){running=false;finished=true;}}
 function frame(t){raf=0;if(!running||reduce.matches||!visible||document.hidden){previous=0;return;}if(previous)advance(Math.min((t-previous)/1000,.05));previous=t;frames++;draw();if(running)raf=requestAnimationFrame(frame);}
 function schedule(){stop();if(running&&!reduce.matches&&visible&&!document.hidden)raf=requestAnimationFrame(frame);}
 action.addEventListener('click',()=>{
  if(finished){hp=0;sp=0;finished=false;running=!reduce.matches;draw();schedule();return;}
  if(reduce.matches){advance(2);draw();return;}
  running=!running;draw();schedule();
 });
 for(const slider of [human,system])slider.addEventListener('input',()=>{
  if(reduce.matches){hp=Number(human.value)/100*.8;sp=Number(system.value)/100*.8;finished=false;}
  draw();
 });
 reduce.addEventListener('change',()=>{if(reduce.matches)running=false;draw();schedule();});
 document.addEventListener('visibilitychange',schedule);
 new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;schedule();},{threshold:.05}).observe(root);
 $('base').setAttribute('d',path(1));draw();schedule();
})();
