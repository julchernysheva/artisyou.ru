/* ART.IS.YOU V17 P7.6.8A — click to activate. No hover activation. */
(function(){
  function ready(fn){if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',fn,{once:true});else fn();}
  ready(function(){
    document.querySelectorAll('.ay-live-experience[data-live-src]').forEach(function(node){
      var mount=node.querySelector('.ay-live-experience__mount');
      if(!mount)return;
      var frame=null, loading=false;
      node.setAttribute('data-activation','click');
      node.setAttribute('tabindex','0');
      node.setAttribute('role','button');
      node.setAttribute('aria-pressed','false');
      var baseLabel=node.getAttribute('data-live-label')||'Live system';
      node.setAttribute('aria-label','Активировать: '+baseLabel);

      function start(ev){
        if(node.classList.contains('is-live')||loading)return;
        if(ev){ev.preventDefault();ev.stopPropagation();}
        var src=node.getAttribute('data-live-src'); if(!src)return;
        loading=true; node.classList.add('is-loading');
        frame=document.createElement('iframe');
        frame.src=src; frame.title=baseLabel; frame.loading='eager'; frame.tabIndex=0;
        frame.setAttribute('allow','autoplay; fullscreen');
        frame.setAttribute('referrerpolicy','no-referrer-when-downgrade');
        frame.addEventListener('load',function(){
          loading=false; node.classList.remove('is-loading'); node.classList.add('is-live');
          node.setAttribute('aria-pressed','true'); node.removeAttribute('role'); node.removeAttribute('tabindex');
          mount.setAttribute('aria-hidden','false');
        },{once:true});
        mount.replaceChildren(frame);
      }
      node.addEventListener('click',function(ev){
        if(!node.classList.contains('is-live')) start(ev);
      });
      node.addEventListener('keydown',function(ev){
        if((ev.key==='Enter'||ev.key===' ')&&!node.classList.contains('is-live')) start(ev);
      });
    });

    /* Direct GitHub iframes stay visually available, but cannot capture pointer/scroll until clicked. */
    document.querySelectorAll('iframe[src*="julchernysheva.github.io"]').forEach(function(frame){
      if(frame.closest('.ay-live-experience'))return;
      var parent=frame.parentElement; if(!parent||parent.classList.contains('ay-embed-gate'))return;
      parent.classList.add('ay-embed-gate');
      var btn=document.createElement('button');
      btn.type='button'; btn.className='ay-embed-gate__activate'; btn.textContent='Click to activate';
      btn.setAttribute('aria-label','Активировать интерактивный экран: '+(frame.title||'live system'));
      btn.addEventListener('click',function(ev){
        ev.preventDefault();ev.stopPropagation();parent.classList.add('is-active');btn.remove();
      });
      parent.appendChild(btn);
    });
  });
})();
