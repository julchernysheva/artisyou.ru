/* One project menu and one visual treatment for contextual links. */
(()=>{
 const routes=[['/projects/godbot/','БОГОБОТ'],['/projects/godbot/materials/archives.html','АРХИВЫ'],['/projects/godbot/materials/','СВИДЕТЕЛЬСТВА'],['/projects/godbot/materials/texts.html','ТЕКСТЫ'],['/projects/godbot/?territory=glossary&record=GLOSSARY','ЛЕКСИКОН']];
 const path=location.pathname.replace(/index\.html$/,'');
 const inDeep=new URLSearchParams(location.search).has('territory');
 function sync(){
  let menu=document.querySelector('.gb-project-pages');
  const outerHero=document.querySelector('.ay-project-top > .ay-approved-hero--godbot');
  if(menu&&outerHero&&menu.parentElement!==outerHero){let branch=menu.parentElement;while(branch&&branch.parentElement!==outerHero)branch=branch.parentElement;if(branch)outerHero.insertBefore(menu,branch);}
  if(!menu){
   const old=document.querySelector('.page-tabs');const hero=document.querySelector('#godbot-deep')||document.querySelector('.ay-approved-hero--godbot');
   if(!old&&!hero)return;
   menu=document.createElement('nav');menu.className='gb-project-pages';menu.setAttribute('aria-label','Страницы Богобота');
   routes.forEach(([href,label])=>{const a=document.createElement('a');a.href=href;a.textContent=label;if(inDeep?href.includes('territory=glossary'):href===path)a.setAttribute('aria-current','page');menu.append(a);});
   if(old)old.replaceWith(menu);else if(hero.id==='godbot-deep')hero.prepend(menu);else{let media=hero.querySelector('figure');while(media&&media.parentElement!==hero)media=media.parentElement;if(media)hero.insertBefore(menu,media);else hero.append(menu);}
  }
 }
 let pending=false;new MutationObserver(()=>{if(!pending){pending=true;requestAnimationFrame(()=>{pending=false;sync();});}}).observe(document.body,{childList:true,subtree:true});sync();
})();
