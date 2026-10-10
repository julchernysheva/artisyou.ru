(() => {
 const frame=document.querySelector('.ri-application iframe');
 if(!frame)return;
 const build=()=>{
  const win=frame.contentWindow,rt=win.RI_RUNTIME;
  if(!rt||document.querySelector('.ri-people'))return;
  const section=document.createElement('section');section.className='ri-people';section.setAttribute('aria-labelledby','ri-people-title');
  const title=document.createElement('h2');title.id='ri-people-title';title.textContent='ЛЮДИ / ХРОНОЛОГИЯ';section.append(title);
  const note=document.createElement('p');note.className='ri-people__note';note.textContent='По году рождения. Наведите или выберите имя — соответствующий узел подсветится на карте.';section.append(note);
  const list=document.createElement('ol');
  const master=JSON.parse(win.document.getElementById('p0-master').textContent);
  const notes=new Map(master.people.map(p=>[p.person_id,p.date_note]));
  const people=rt.historical.people.map(p=>{const note=notes.get(p.person_id)||'';const dates=note.match(/\b(\d{4})(?:[–-](\d{4}))?/);return {...p,listBirth:p.birth_year||dates?.[1],listDeath:p.death_year||dates?.[2]}}).sort((a,b)=>(Number(a.listBirth)||Infinity)-(Number(b.listBirth)||Infinity)||a.canonical_name.localeCompare(b.canonical_name,'ru'));
  people.filter(person=>person.person_id!=='B058').forEach(person=>{
   const item=document.createElement('li'),button=document.createElement('button');button.type='button';button.dataset.personId=person.person_id;
   const name=document.createElement('span');name.textContent=person.canonical_name;
   const years=document.createElement('span');years.className='ri-people__years';years.textContent=person.listBirth?`${person.listBirth}${person.listDeath?'–'+person.listDeath:''}`:'ГОД НЕ УКАЗАН В ДАННЫХ';
   button.append(name,years);
   const node=()=>win.document.querySelector(`.hist-node[data-id="${person.person_id}"]`);
   const enter=()=>{node()?.classList.add('people-index-focus');node()?.dispatchEvent(new win.MouseEvent('mouseenter'))};
   const leave=()=>{node()?.classList.remove('people-index-focus');node()?.dispatchEvent(new win.MouseEvent('mouseleave'))};
   button.addEventListener('pointerenter',event=>{if(event.pointerType!=='touch')enter()});
   button.addEventListener('pointerleave',leave);
   button.addEventListener('focus',enter);
   button.addEventListener('blur',leave);
   button.addEventListener('click',()=>node()?.dispatchEvent(new win.MouseEvent('click',{bubbles:true})));
   item.append(button);list.append(item);
  });
  const style=win.document.createElement('style');style.textContent='.hist-node.people-index-focus{opacity:1!important}.hist-node.people-index-focus .dot{stroke:#064cff!important;stroke-width:4!important}.hist-node.people-index-focus .label-plate{stroke:#064cff!important;stroke-width:2!important}';win.document.head.append(style);
  section.append(list);document.querySelector('.ri-application').after(section);
 };
 frame.addEventListener('load',build);if(frame.contentWindow.RI_RUNTIME)build();
})();
