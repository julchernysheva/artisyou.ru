document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('[data-v15-carousel]').forEach(root=>{
    const slides=[...root.querySelectorAll('[data-v15-slide]')];
    const status=root.querySelector('[data-v15-status]');
    let i=0;
    function show(n){i=(n+slides.length)%slides.length;slides.forEach((s,j)=>{s.hidden=j!==i;});if(status)status.textContent=String(i+1).padStart(2,'0')+' / '+String(slides.length).padStart(2,'0');}
    root.querySelector('[data-v15-prev]')?.addEventListener('click',()=>show(i-1));
    root.querySelector('[data-v15-next]')?.addEventListener('click',()=>show(i+1));
    root.addEventListener('keydown',e=>{if(e.key==='ArrowLeft')show(i-1);if(e.key==='ArrowRight')show(i+1);});
    show(0);
  });
});