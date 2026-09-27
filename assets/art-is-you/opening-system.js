(() => {
  const q = selector => document.querySelector(selector);
  const route = location.pathname.replace(/\/$/, '') || '/';
  if (!new Set(["/","/projects","/research","/publications","/artist-statement","/about","/about/press","/research/essays/error-as-territory-of-freedom","/research/essays/russia-as-dataset","/projects/godbot","/projects/likes-pond","/projects/artact","/projects/talking-city","/projects/programmer","/projects/nowords","/dark","/projects/special-projects","/nikola-lenivets","/science-quarter","/pavlov-dogs","/research/russian-intellect","/research/reverse-prompt","/research/lab","/research/interview","/projects/post_human","/projects/archive","/projects/musicvideo","/projects/fashion","/protoarchive","/research/russian-bioart-history"]).has(route)) return;
  const configurations = [
    ['.ay-approved-hero', '.ay-approved-hero__meta', '.ay-approved-hero__title', '.ay-approved-hero__lead', null, 'project'],
    ['.h3b-home > .hero', '.hero-label', 'h1', '.hero-position', null, 'home'],
    ['.index-baseline__section-intro', '.index-baseline__eyebrow', 'h1', ':scope > p', '.index-baseline__projects-layout', 'projects'],
    ['.rp-hero', '.rp-eyebrow', 'h1', '.rp-hero-grid > p', null, 'research-index'],
    ['.wb-intro', '.wb-register', 'h1', '.wb-intro-copy', null, 'publications'],
    ['.publications-intro', '.publications-intro__eyebrow', 'h1', '.publications-intro__copy', null, 'publications-mobile'],
    ['.press-index__intro', '.press-index__eyebrow', 'h1', '.press-index__lead', null, 'press-mobile'],
    ['.statement-header', '.statement-header__eyebrow', 'h1', '.statement-header__lead', null, 'statement'],
    ['.about-hero', '.about-system-label', 'h1', '.about-roles', null, 'about'],
    ['.ay-injected-hero', '.ay-context-bar', 'h1', '.ay-injected-hero__lead', null, 'injected'],
    ['.archive-header', '.archive-header__eyebrow', 'h1', '.archive-header__lead', null, 'archive'],
    ['.ph-hero', '.ph-kicker', 'h1', '.ph-hero__lead', '.ph-nav', 'posthuman'],
    ['.research-detail-protocol__screen--opening', '.research-detail-protocol__register', 'h1', '.research-detail-protocol__field--question', null, 'research-detail'],
    ['.c3b-opening', '.c3b-register', 'h1', '.c3b-question', null, 'interview']
  ];
  const resolve = () => {
    const opening=q('[data-opening-shell]');
    if(opening)return {route,kind:opening.dataset.openingShell,host:opening,meta:opening.querySelector('[data-opening-meta]'),h1:opening.querySelector('[data-opening-title]'),leadGroup:opening.querySelector('[data-opening-lead-group]'),lead:opening.querySelector('[data-opening-lead]'),next:q('[data-opening-next]')};
    for (const [selector, metaSelector, h1Selector, leadSelector, nextSelector, kind] of configurations) {
      const host = q(selector);
      if (!host || !host.getBoundingClientRect().width) continue;
      const meta = host.querySelector(metaSelector)||q(metaSelector), h1 = host.querySelector(h1Selector), leadGroup = host.querySelector(leadSelector);
      if (!meta || !h1 || !leadGroup) continue;
      const lead = kind === 'interview' ? leadGroup.querySelector('h2') : kind === 'research-detail' ? leadGroup.querySelector('.research-detail-protocol__text') : leadGroup.matches('p') ? leadGroup : leadGroup.querySelector('p') || leadGroup;
      let next = nextSelector ? host.querySelector(nextSelector)||q(nextSelector) : null;
      if(!next)for(let ancestor=host;ancestor&&ancestor!==document.body;ancestor=ancestor.parentElement){
        for(let sibling=ancestor.nextElementSibling;sibling;sibling=sibling.nextElementSibling){if(sibling.getBoundingClientRect().width&&sibling.getBoundingClientRect().height){next=sibling;break;}}
        if(next)break;
      }
      return {route, kind, host, meta, h1, leadGroup, lead, next};
    }
    return null;
  };
  const apply = () => {
  const c=resolve(); if(!c || c.host.hasAttribute('data-opening-shell'))return;
  const {host,meta,h1,leadGroup,lead,kind}=c;
  // Case is a shared title role, not a font-size exception. Preserve acronyms
  // inside mixed-case titles and existing BRs; normalize all-capitals titles.
  const letters=h1.textContent.replace(/[^\p{L}]/gu,'');
  if(letters.length>2 && letters===letters.toLocaleUpperCase()) {
    const walker=document.createTreeWalker(h1,NodeFilter.SHOW_TEXT);let first=true;
    while(walker.nextNode()){
      const node=walker.currentNode;let value=node.textContent.toLocaleLowerCase();
      if(first && /\p{L}/u.test(value)){value=value.replace(/\p{L}/u,c=>c.toLocaleUpperCase());first=false;}
      node.textContent=value;
    }
  }
  const metaParentClass=meta.parentElement===host?'':meta.parentElement.className;
  const titleParentClass=h1.parentElement===host?'':h1.parentElement.className;
  const leadParentClass=leadGroup.parentElement===host?'':leadGroup.parentElement.className;
  const commonRowClass=h1.parentElement!==host&&h1.parentElement.contains(leadGroup)?h1.parentElement.className:'';
  const attr=(e,name)=>e?.setAttribute('data-opening-'+name,'');
  const div=name=>{const e=document.createElement('div');attr(e,name);return e;};
  const header=document.querySelector('art-is-you-header');
  // One header owns document flow; legacy headers embedded in details must not
  // leave the opening above the global navigation.
  if(host.compareDocumentPosition(header)&Node.DOCUMENT_POSITION_FOLLOWING)host.parentElement.prepend(header);
  const ancestors=[];for(let e=host.parentElement;e && e!==document.body;e=e.parentElement)ancestors.push(e);
  const frame=ancestors.find(e=>parseFloat(getComputedStyle(e).paddingLeft)>0);
  ancestors.forEach(e=>attr(e,'path'));if(frame)attr(frame,'frame');
  host.setAttribute('data-opening-shell',kind); if(frame)attr(host,'in-frame');
  let context=kind==='research-detail'?document.createElement('header'):div('context');attr(context,'context');
  const row=div('row'), titleColumn=div('title-column'), leadColumn=div('lead-column');row.className=commonRowClass;
  if(kind==='research-detail')context.className=metaParentClass;
  if(kind==='research-index')context.className='rp-hero';
  titleColumn.className=titleParentClass;
  leadColumn.className=leadParentClass;
  attr(meta,'meta');attr(h1,'title');attr(leadGroup,'lead-group');attr(lead,'lead');
  // Remove former inline absolute anchors, not their typography.
  for(const el of [meta,h1,leadGroup,lead])for(const key of ['position','left','right','top','bottom','width','max-width','height','margin','padding','transform'])el.style.removeProperty(key);
  context.append(meta);titleColumn.append(h1);leadColumn.append(leadGroup);row.append(titleColumn,leadColumn);
  const date=host.querySelector('.ay-approved-hero__date');if(date){attr(date,'aux');for(const key of ['position','left','right','top','bottom','width','white-space'])date.style.removeProperty(key);leadColumn.append(date);}
  const questionLabel=leadGroup.querySelector('.research-detail-protocol__label');if(questionLabel){attr(questionLabel,'aux');context.append(questionLabel);}
  const taxonomy=host.querySelector('.ri-research-taxonomy');if(taxonomy){attr(taxonomy,'aux');leadColumn.append(taxonomy);}
  const capacity=host.querySelector('.capacity');if(capacity){attr(capacity,'aux');leadColumn.append(capacity);}
  if(titleColumn.children.length===1){attr(h1,'title-column');titleColumn.replaceWith(h1);}
  if(leadColumn.children.length===1){attr(leadGroup,'lead-column');leadColumn.replaceWith(leadGroup);}
  if(context.children.length===1&&kind!=='projects'){attr(meta,'context');context=meta;}
  // Retain native fields in their original class context after the common opening.
  // Their internal coordinates, sources and event listeners are untouched.
  let next=c.next;
  if(['project','about','posthuman'].includes(kind)){
    const native=host.cloneNode(false);native.removeAttribute('id');native.removeAttribute('style');
    for(const a of [...native.attributes])if(a.name.startsWith('data-opening-'))native.removeAttribute(a.name);
    attr(native,'native');
    while(host.firstChild)native.append(host.firstChild);
    native.querySelectorAll('.ph-hero__top').forEach(e=>{if(!e.textContent.trim())attr(e,'empty');});
    native.querySelectorAll('.ay-approved-hero__title,.ay-approved-hero__lead,.ay-approved-hero__meta').forEach(e=>{throw new Error('Opening content not transferred: '+e.className);});
    host.append(native);host.setAttribute('data-opening-has-native','');next=native;
    if(['project','about'].includes(kind))attr(native,'full-width');
    if(kind==='project' && route!=='/projects/godbot'){
      const fields=[...native.children].filter(e=>e.matches('.ay-approved-hero__media,.ay-approved-hero__extra'));
      const rebase=()=>{
        native.style.removeProperty('height');native.style.removeProperty('min-height');
        for(const field of fields){field.style.removeProperty('top');field.style.removeProperty('height');}
        const box=native.getBoundingClientRect();
        const boxes=fields.map(field=>({field,box:field.getBoundingClientRect()}));
        const inset=Math.max(0,Math.min(...boxes.map(x=>x.box.top-box.top)));
        native.style.setProperty('height',`${box.height-inset}px`,'important');
        native.style.setProperty('min-height','0','important');
        for(const x of boxes){x.field.style.setProperty('top',`${x.box.top-box.top-inset}px`,'important');x.field.style.setProperty('height',`${x.box.height}px`,'important');}
      };
      rebase();window.addEventListener('resize',rebase);
    }
  }else{
    // Only empty containers left behind by moved semantic elements disappear.
    for(const e of [...host.querySelectorAll('*')].reverse())if(!e.textContent.trim()&&!e.querySelector('img,video,iframe,canvas,svg,button,input')&&!e.matches('img,video,iframe,canvas,svg,button,input'))attr(e,'empty');
  }
  host.prepend(context,row);
  if(['projects','research-index'].includes(kind)) {
    attr(host,'index');
    // The index label belongs to the shared context slot, not a second
    // spacer between the opening and the selector.
    const sectionLabel=q('.rp-territories > .rp-section-title');
    if(sectionLabel){attr(sectionLabel,'aux');context.append(sectionLabel);}
  }
  attr(next,'next');
  if(kind==='project' && ['/projects/likes-pond','/projects/talking-city'].includes(route)) {
    attr(host,'overlay');
    const native=host.querySelector(':scope > [data-opening-native]');
    const fitField=()=>{
      // The native field starts at the shared 48px boundary. Its image can
      // paint behind the opening, while the opening keeps normal grid flow.
      const start=native.getBoundingClientRect().top-host.getBoundingClientRect().top;
      const screen=Math.max(innerHeight-document.querySelector('.ay-desktop-header').getBoundingClientRect().height,760);
      native.style.setProperty('height',`${Math.max(0,screen-start)}px`,'important');
      native.style.setProperty('min-height','0','important');
      // Overlay height belongs to the whole screen, not the shorter native
      // flow placeholder or the legacy 54px meta inset.
      if(route==='/projects/talking-city')native.querySelectorAll(':scope > .ay-approved-hero__media').forEach(field=>{
        field.style.setProperty('top','0px','important');
        field.style.setProperty('height',`${screen}px`,'important');
      });
    };
    fitField();window.addEventListener('resize',fitField);
  }
  window.__ayOpeningApplied={kind};
  };


  const boot = async () => {
    const css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = '/assets/art-is-you/opening-system.css?v=20260925';
    const loaded = new Promise((resolve, reject) => {
      css.onload = resolve;
      css.onerror = () => reject(new Error('Shared opening stylesheet did not load'));
    });
    // Important declarations in this first layer retire legacy geometry only.
    document.head.prepend(css);
    await loaded;
    await document.fonts.ready;
    const approvedProjects = new Set(['godbot','likes-pond','artact','talking-city','programmer','nowords']);
    const waitForOwner = () => {
      const needsHero = approvedProjects.has(route.split('/').pop());
      const initialized = !needsHero || document.querySelector('.ay-approved-hero');
      const needsLower = route === '/projects/godbot';
      return initialized && (!needsLower || document.body.dataset.projectLowerFinalized === 'godbot') && resolve();
    };
    for (let attempt = 0; attempt < 100; attempt++) {
      if (waitForOwner()) {
        await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
        apply();
        document.documentElement.dataset.openingSystem = 'ready';
        if (!document.querySelector('script[data-text-grid-loader]')) {
          const textGrid=document.createElement('script');
          textGrid.src='/assets/art-is-you/second-screen-text-grid.js?v=godbot-release-20260926';
          textGrid.dataset.textGridLoader='';document.head.append(textGrid);
        }
        return;
      }
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    document.documentElement.dataset.openingSystem = 'missing-owner';
    console.error('Shared opening: canonical semantic owner did not initialize', route);
  };
  const start = () => boot().catch(error => {
    document.documentElement.dataset.openingSystem = 'error';
    console.error(error);
  });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, {once:true});
  else start();
})();
