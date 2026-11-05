/* Links to the three reviewed local material pages. No publication action. */
(()=>{
 if(!document.querySelector('.ay-project-top') && !location.pathname.includes('/projects/godbot/'))return;
 const base=new URL('materials/',location.href.split('#')[0].split('?')[0]);
 const destinations=[['#seven-module','archives.html','АРХИВЫ'],['#project-materials','index.html','СВИДЕТЕЛЬСТВА'],['#project-canon','texts.html','ТЕКСТЫ']];
 function mount(){
  for(const [selector,file,label] of destinations){
   const section=document.querySelector(selector);if(!section)continue;
   let link=section.querySelector('[data-material-page]');
   if(!link && file==='index.html')link=[...section.querySelectorAll('a')].find(a=>a.textContent.includes('Все материалы и видео'));
   if(!link){link=document.createElement('a');section.append(link);}
   link.dataset.materialPage=file;link.classList.add('gb-material-page');if(file==='index.html')link.classList.add('gb-materials-link');
   const href=new URL(file,base).href;if(link.href!==href)link.href=href;
   if(link.textContent!==label+' →')link.textContent=label+' →';
  }
 }
 let queued=false;new MutationObserver(()=>{if(!queued){queued=true;queueMicrotask(()=>{queued=false;mount();});}}).observe(document.body,{childList:true,subtree:true});mount();
})();
