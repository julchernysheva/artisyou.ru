/* Only approved Filatov / Grebnev expansion; metadata stays separate from UI. */
(() => {
  const episodes = {
    artem:{name:'Артём Филатов',images:[['/assets/art-is-you/art-interviews/evidence/filatov-environment.png','Артём Филатов / Art.Is.You']]},
    konstantin:{name:'Константин Гребнев',images:[['/assets/art-is-you/art-interviews/evidence/grebnev-scan-portrait.png','Константин Гребнев / Art.Is.You'],['/assets/art-is-you/art-interviews/evidence/grebnev-urban-portrait.jpg','Константин Гребнев / Art.Is.You']]}
  };
  for(const [id,episode] of Object.entries(episodes)) {
    const article=document.getElementById(id);
    const caption=article.querySelector('.c3b-film-caption');
    const source=caption.firstElementChild;
    const wrapper=document.createElement('span');wrapper.className='c3b-archive-caption';
    source.replaceWith(wrapper);wrapper.append(source);
    const trigger=document.createElement('button');trigger.type='button';trigger.className='c3b-archive-trigger';
    trigger.textContent='АРХИВ ЭПИЗОДА';trigger.setAttribute('aria-label','Архив эпизода: '+episode.name);
    trigger.setAttribute('aria-haspopup','dialog');trigger.setAttribute('aria-expanded','false');
    const dialog=document.createElement('dialog');dialog.id='archive-'+id;dialog.className='c3b-episode-archive';
    dialog.setAttribute('aria-labelledby',dialog.id+'-title');trigger.setAttribute('aria-controls',dialog.id);
    const header=document.createElement('header');header.className='c3b-archive-heading';
    const title=document.createElement('h2');title.id=dialog.id+'-title';title.className='title';title.textContent=episode.name;
    const close=document.createElement('button');close.type='button';close.className='system c3b-archive-close';close.textContent='Закрыть';
    header.append(title,close);dialog.append(header);
    const gallery=document.createElement('div');gallery.className='c3b-archive-images'+(episode.images.length===1?' c3b-archive-images--single':'');
    for(const [src,identification] of episode.images){
      const figure=document.createElement('figure'),image=document.createElement('img'),note=document.createElement('figcaption');
      image.dataset.archiveSrc=src;image.alt=identification;image.decoding='async';note.className='micro';note.textContent=identification;
      figure.append(image,note);gallery.append(figure);
    }
    dialog.append(gallery);document.querySelector('main').append(dialog);wrapper.append(trigger);
    trigger.addEventListener('click',()=>{
      dialog.querySelectorAll('img[data-archive-src]').forEach(image=>{if(!image.hasAttribute('src'))image.src=image.dataset.archiveSrc;});
      trigger.setAttribute('aria-expanded','true');dialog.showModal();close.focus();
    });
    close.addEventListener('click',()=>dialog.close());
    dialog.addEventListener('keydown',event=>{
      if(event.key!=='Tab')return;
      const controls=[...dialog.querySelectorAll('button,a[href],[tabindex="0"]')];
      const first=controls[0],last=controls[controls.length-1];
      if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}
      else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
    });
    dialog.addEventListener('close',()=>{trigger.setAttribute('aria-expanded','false');trigger.focus();});
  }
  document.documentElement.dataset.c3b6Ready='true';
})();
