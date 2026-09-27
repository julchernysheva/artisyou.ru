/* ART.IS.YOU V17 P7.6.9 — deferred direct live systems. */
(function(){
  'use strict';
  function ready(fn){if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',fn,{once:true});else fn();}
  ready(function(){
    document.querySelectorAll('.ay-system-deferred[data-system-src]').forEach(function(node){
      var busy=false;
      var button=node.querySelector('.ay-system-deferred__activate');
      function activate(ev){
        if(node.classList.contains('is-active')||busy)return;
        if(ev){ev.preventDefault();ev.stopPropagation();}
        busy=true;
        var src=node.getAttribute('data-system-src');
        if(!src){busy=false;return;}
        var frame=document.createElement('iframe');
        frame.src=src;
        frame.title=node.getAttribute('data-system-title')||'Live system';
        frame.loading='eager';
        frame.tabIndex=0;
        frame.setAttribute('allow','fullscreen; autoplay');
        frame.setAttribute('referrerpolicy','strict-origin-when-cross-origin');
        frame.addEventListener('load',function(){busy=false;node.classList.add('is-active');node.setAttribute('aria-pressed','true');frame.focus({preventScroll:true});},{once:true});
        node.appendChild(frame);
      }
      node.setAttribute('role','button');
      node.setAttribute('tabindex','0');
      node.setAttribute('aria-pressed','false');
      if(button)button.addEventListener('click',activate);
      node.addEventListener('click',function(ev){if(!node.classList.contains('is-active'))activate(ev);});
      node.addEventListener('keydown',function(ev){if((ev.key==='Enter'||ev.key===' ')&&!node.classList.contains('is-active'))activate(ev);});
    });
  });
})();

/* ART.IS.YOU V18 — route-scoped positioning, UI and error signal. */
(function(){
  'use strict';
  function ready(fn){if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',fn,{once:true});else fn();}
  ready(function(){
    var path=window.location.pathname.replace(/index\.html$/,'');
    var pilotPage=path==='/about/'||path==='/about';
    if(pilotPage){
      var pilotStyle=document.createElement('link');
      pilotStyle.rel='stylesheet';pilotStyle.href='/assets/art-is-you/v18-1-style-pilot.css?v=1';
      document.head.appendChild(pilotStyle);
      document.body.classList.add('v18-1-pilot');
      if(path.indexOf('/projects')===0)document.body.classList.add('v18-1-projects');
      if(path.indexOf('/about')===0)document.body.classList.add('v18-1-about');
    }
    var description;
    if(path==='/about/'||path==='/about'){
      document.title='Юлия Чернышева — директор культурных исследований и стратегий';
      description='Юлия Чернышева — директор культурных исследований и стратегий для новых технологий. ИИ и биотехнологии — равноправные территории практики; ART.IS.YOU — авторская исследовательская платформа.';
    }
    if(description){
      var meta=document.querySelector('meta[name="description"]');if(meta)meta.content=description;
      var og=document.querySelector('meta[property="og:description"]');if(og)og.content=description;
      var tw=document.querySelector('meta[name="twitter:description"]');if(tw)tw.content=description;
    }
    if(path==='/projects/'||path==='/projects')document.body.classList.add('v18-projects');
    if(path==='/research/'||path==='/research')document.body.classList.add('v18-bioart');

    if(path!=='/'&&path!=='')document.querySelectorAll('.ay-system-deferred__activate').forEach(function(node){if(node.textContent.trim()==='Click to activate')node.textContent='Активировать';});

    var footer=document.querySelector('.ay-site-footer');
    if(footer&&path!=='/'&&path!==''){
      var bars=footer.querySelectorAll('.ay-site-footer__bar span');
      if(bars[0])bars[0].textContent='ART.IS.YOU / АВТОРСКАЯ ПЛАТФОРМА';
      if(bars[1])bars[1].textContent='ИИ / БИОТЕХНОЛОГИИ / КУЛЬТУРА / ПАМЯТЬ';
      var about=footer.querySelector('.ay-site-footer__about');
      if(about){
        var ps=about.querySelectorAll('p');
        if(ps[0])ps[0].textContent='Креативный R&D-директор, куратор и исследователь культуры эпохи AI.';
        if(ps[1])ps[1].textContent='Art.Is.You — авторская исследовательская система о технологиях как части культуры. Исследования развиваются здесь через тексты, карты, архивы и цифровые проекты.';
      }
    }

    if(path.indexOf('/research/essays/error-as-territory-of-freedom/')===0){
      document.body.classList.add('v18-error');
      var anchor=document.querySelector('.v16-essay-media');
      if(anchor&&!document.querySelector('.v18-error-signal')){
        var signal=document.createElement('section');
        signal.className='v18-error-signal';signal.dataset.state='deviation';signal.setAttribute('aria-label','Ошибка, оптимизация, порядок и новая ошибка');
        signal.innerHTML='<div class="v18-error-signal__meta"><span>СИСТЕМА / ОШИБКА</span><span class="v18-error-signal__status">ОТКЛОНЕНИЕ</span></div><div class="v18-error-signal__field"><div class="v18-error-signal__phrase"><span>ошибка</span><span>становится</span><span>методом</span></div></div>';
        anchor.insertAdjacentElement('afterend',signal);
        if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){signal.dataset.state='order';signal.querySelector('.v18-error-signal__status').textContent='ОТКЛОНЕНИЕ / ПОРЯДОК / НОВАЯ ОШИБКА';return;}
        var states=[['deviation','ОТКЛОНЕНИЕ',4200],['optimization','ОПТИМИЗАЦИЯ',3600],['order','ПОРЯДОК',1800],['new-error','НОВАЯ ОШИБКА',4200]],index=0;
        (function advance(){var item=states[index];signal.dataset.state=item[0];signal.querySelector('.v18-error-signal__status').textContent=item[1];index=(index+1)%states.length;window.setTimeout(advance,item[2]);})();
      }
    }
  });
})();
