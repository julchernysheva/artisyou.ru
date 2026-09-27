/* Shared editorial field. Adapters preserve semantic content and media.
   The first Project/Research field receives the approved common heading. */
(() => {
  'use strict';
  const attr=(el,role)=>el.setAttribute('data-text-grid-'+role,'');
  const make=(role,tag='div')=>{const el=document.createElement(tag);attr(el,role);return el;};
  const visible=el=>el && el.getBoundingClientRect().width>0;
  const resetInline=el=>[el,...el.querySelectorAll('*')].forEach(node=>{
    for(const property of ['font-family','font-size','font-weight','line-height','letter-spacing','text-transform','margin','margin-top','padding','width','max-width','grid-column','grid-row'])node.style.removeProperty(property);
  });
  const mount=(host,columns,titles=[],tail=[])=>{
    if(!visible(host)||host.hasAttribute('data-text-grid')||!columns.length)return;
    // Reject media-bearing adapters: captions and authored stages are not prose grids.
    if(columns.some(({node})=>node.querySelector('img,video,iframe,canvas,svg')))return;
    const originalChildren=[...host.children],field=make('field'),grid=make('columns');
    host.setAttribute('data-text-grid','');
    const common=make('heading');titles.filter(Boolean).forEach(el=>{
      [el,...el.querySelectorAll('h2,h3')].filter(node=>node.matches('h2,h3')).forEach(node=>{if(parseFloat(getComputedStyle(node).fontSize)>=24)attr(node,'display');});
      resetInline(el);common.append(el);
    });
    grid.dataset.textGridColumns=String(columns.length===4?2:Math.min(columns.length,3));
    grid.dataset.textGridTitled=String(columns.some(c=>c.heading));
    for(const {node,heading} of columns){
      resetInline(node);const definition=heading?.tagName==='DT';
      const column=make('column',definition?'dl':'div'),body=make('body',definition?'dd':'div');
      if(heading){resetInline(heading);attr(heading,'label');column.append(heading);}
      else if(grid.dataset.textGridTitled==='true'){const spacer=make('label');spacer.setAttribute('aria-hidden','true');column.append(spacer);}
      if(node.matches('p'))body.append(node);
      else while(node.firstChild){
        const child=node.firstChild;
        if(definition&&child.nodeType===1&&child.tagName==='DD'){body.append(...child.childNodes);child.remove();}
        else body.append(child);
      }
      column.append(body);grid.append(column);
    }
    field.append(grid);
    tail.filter(Boolean).forEach(el=>{resetInline(el);attr(el,'tail');field.append(el);});
    // Keep non-text siblings (for example the existing Bogobot context media)
    // outside the editorial field, in their existing order.
    const extras=originalChildren.filter(el=>el.isConnected&&el.parentElement===host&&!titles.includes(el)&&!tail.includes(el)&&el.textContent.trim());
    host.replaceChildren(...(common.children.length?[common]:[]),field,...extras);
    extras.forEach(el=>attr(el,'extra'));
  };
  const cards=(host,container,headingSelector,titles=[],tail=[])=>{
    if(!host||!container)return;
    const columns=[...container.children].map(node=>({node,heading:node.querySelector(headingSelector)}));
    mount(host,columns,titles,tail);
  };
  const apply=()=>{
    document.querySelectorAll('.ay-project-top__concept,.ay-project-top__research').forEach(host=>cards(host,host.querySelector(':scope > .ay-project-top__registers'),':scope > h2',[host.querySelector(':scope > h2')]));
    const method=document.querySelector('.ay-project-top__method');
    if(method){
      mount(method,[...method.querySelectorAll('dl > div')].map(node=>({node,heading:node.querySelector('dt')})),[method.querySelector(':scope > h2'),method.querySelector('.ay-project-top__method-path')]);
      if(location.pathname.replace(/\/$/,'')==='/projects/godbot')method.querySelector('[data-text-grid-columns]')?.setAttribute('data-text-grid-columns','4');
    }
    for(const cls of ['likes12-concept','city12-framework','programmer12-concept','nowords12-concept']){
      const host=document.querySelector('.'+cls),container=host?.querySelector('.'+cls+'__registers');
      cards(host,container,':scope > p:first-child',host?[...host.children].filter(el=>el!==container):[]);
    }
    const artact=document.querySelector('.artact-opening__context');
    if(artact)mount(artact,[...artact.querySelectorAll(':scope > article')].map(node=>({node,heading:node.querySelector('.artact-opening__label')})));
    document.querySelectorAll('.research-detail-evidence-frame').forEach(host=>{
      mount(host,[...host.querySelectorAll(':scope > .research-detail-protocol__field')].map(node=>({node,heading:node.querySelector(':scope > h2')})));
    });
    const methodology=document.querySelector('.ri-editorial-methodology');
    if(methodology)mount(methodology,[...methodology.querySelector('.ri-methodology-grid').children].map(node=>({node})),[methodology.querySelector(':scope > h2')]);
    const interview=document.querySelector('#research-frame');
    if(interview)cards(interview,interview.querySelector('.c3b-film-grid'),':scope > .c3b-frame-label',[],[interview.querySelector('.c3b-frame-formula')]);
    const statement=document.querySelector('.statement-system-opening');
    if(statement)mount(statement,[{node:statement.querySelector('.statement-system-opening__copy')}],[statement.querySelector('.statement-system-opening__meta'),statement.querySelector('h2')]);
    document.querySelectorAll('.t119__preface').forEach(node=>{
      const host=node.closest('.t-rec');if(host)mount(host,[{node}]);
    });
    const route=location.pathname.replace(/\/$/,'');
    if(route.startsWith('/projects/')||route.startsWith('/research/')||route==='/protoarchive'){
      const concept=document.querySelector('[data-text-grid]');
      if(concept){
        attr(concept,'concept');
        if(!concept.querySelector(':scope > [data-text-grid-heading]')){
          const common=make('heading'),title=document.createElement('h2');
          title.textContent='Концепция';common.append(title);concept.prepend(common);
        }
        const columns=concept.querySelector('[data-text-grid-columns]');
        columns.dataset.textGridColumns=String(Math.min(columns.children.length,4));
        if(['/research/lab','/protoarchive','/research/russian-bioart-history'].includes(route)){
          const stage=concept.parentElement.querySelector(':scope > .research-analytics,:scope > .bio-morph');
          if(stage)stage.before(concept);
        }
      }
    }
    document.documentElement.dataset.textGridSystem='ready';
  };
  const css=document.createElement('link');css.rel='stylesheet';css.href='/assets/art-is-you/second-screen-text-grid.css?v=godbot-release-20260926';
  css.onload=apply;css.onerror=()=>{document.documentElement.dataset.textGridSystem='error';};
  document.head.prepend(css);
})();
