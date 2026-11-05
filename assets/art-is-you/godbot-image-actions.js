/* Explicit original-file affordance for editorial images, including lazy readers. */
(() => {
  let queued=false;
  function sync(){
    queued=false;
    document.querySelectorAll('.ay-project-top img').forEach(img=>{
      if(img.closest('#most-entry,.ay-project-primary--godbot,.ay-godbot-archive-reader__primary-media,nav,button'))return;
      const src=img.currentSrc||img.getAttribute('src')||img.dataset.src;
      if(!src||src.startsWith('data:')||src.endsWith('.svg'))return;
      const url=new URL(src,location.href);
      if(!['http:','https:'].includes(url.protocol))return;
      const holder=img.closest('figure')||img.parentElement;
      if(!holder)return;
      const existing=Array.from(holder.querySelectorAll('a')).find(a=>!a.contains(img)&&/открыть.*(оригинал|полностью)/i.test(a.textContent));
      if(existing){if(existing.textContent!=='Открыть оригинал ↗')existing.textContent='Открыть оригинал ↗';return;}
      let action=holder.querySelector(':scope > .gb-image-original');
      if(!action){action=document.createElement('a');action.className='gb-image-original';action.textContent='Открыть оригинал ↗';action.target='_blank';action.rel='noopener';holder.append(action);}
      if(action.href!==url.href)action.href=url.href;
    });
  }
  function schedule(){if(!queued){queued=true;requestAnimationFrame(sync);}}
  new MutationObserver(schedule).observe(document.body,{subtree:true,childList:true,attributes:true,attributeFilter:['src','data-src']});
  document.addEventListener('load',schedule,true);schedule();
})();
