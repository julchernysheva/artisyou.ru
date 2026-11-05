/* Image inspection is independent of archive/card selection. */
(() => {
  const dialog=document.createElement('dialog');dialog.className='gb-image-viewer';dialog.setAttribute('aria-label','Просмотр изображения');
  const close=document.createElement('button');close.type='button';close.className='gb-image-close';close.textContent='×';close.setAttribute('aria-label','Закрыть изображение');
  const full=document.createElement('img');const caption=document.createElement('p');caption.className='gb-image-caption';dialog.append(close,full,caption);document.body.append(dialog);
  let opener=null,queued=false;
  close.addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
  dialog.addEventListener('close',()=>{full.removeAttribute('src');opener?.focus({preventScroll:true});});
  const actions=new WeakMap();
  function sync(){
    queued=false;
    document.querySelectorAll('.ay-project-top img').forEach(img=>{
      if(img.closest('#most-entry,.ay-project-primary--godbot,nav,button'))return;
      const src=img.currentSrc||img.getAttribute('src')||img.dataset.src;
      if(!src||src.startsWith('data:'))return;
      const url=new URL(src,location.href);if(!['http:','https:'].includes(url.protocol))return;
      const holder=img.closest('figure')||(img.parentElement?.tagName==='A'?img.parentElement.parentElement:img.parentElement);
      if(!holder)return;
      // Keep live experiences and their launch controls separate from image inspection.
      if(img.closest('[role="button"],.is-live,.is-loading'))return;
      holder.querySelectorAll('a').forEach(a=>{
        if(a.contains(img)){
          if(a.href===url.href){a.replaceWith(...a.childNodes);}
        }else if(/открыть.*(оригинал|полностью)/i.test(a.textContent)&&a.href===url.href){a.remove();}
      });
      let action=actions.get(img);
      if(!action||!action.isConnected){
        action=document.createElement('button');action.type='button';action.className='gb-image-expand';action.textContent='⤢';
        action.setAttribute('aria-label','Открыть изображение');action.title='Открыть изображение';holder.append(action);actions.set(img,action);
        action.addEventListener('click',e=>{
          e.preventDefault();e.stopPropagation();opener=action;
          full.src=img.currentSrc||img.src;full.alt=img.alt;caption.textContent=img.alt;
          dialog.showModal();close.focus({preventScroll:true});
        });
      }
    });
  }
  function schedule(){if(!queued){queued=true;requestAnimationFrame(sync);}}
  new MutationObserver(schedule).observe(document.body,{subtree:true,childList:true,attributes:true,attributeFilter:['src','data-src']});
  document.addEventListener('load',schedule,true);schedule();
})();
