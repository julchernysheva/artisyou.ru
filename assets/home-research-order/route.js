/* Original local route content. Wave interaction has its own scoped owner. */
(() => {
 'use strict';
 const main=document.querySelector('.h3b-home'),core=main?.querySelector('#research-frame');
 if(!main||!core)return;
 const futures=main.querySelector('.home-futures');
 const route=document.createElement('section');route.id='method';route.className='research-route';
 route.setAttribute('aria-label','Ошибка, человеческий сдвиг, модель мира, гипотезы и концепции');
 route.innerHTML=`<p class="system research-route__label">МАРШРУТ ИССЛЕДОВАНИЯ</p>
 <div class="research-route__steps">
  <section class="research-route__step" aria-labelledby="route-error"><div class="research-route__heading"><h2 id="route-error">Ошибка</h2><p class="research-route__links"><a href="/projects/godbot/">Богобот <span aria-hidden="true">↗</span></a></p></div><div class="research-route__content" data-stage="error"></div></section>
  <section class="research-route__step" aria-labelledby="route-human"><div class="research-route__heading"><h2 id="route-human">Человеческий сдвиг</h2><p class="research-route__links"><a href="/research/russian-intellect/">|RU| Интеллект <span aria-hidden="true">↗</span></a><a href="/projects/likes-pond/">Лайков пруд <span aria-hidden="true">↗</span></a></p></div><div class="research-route__content" data-stage="human-shift"><div data-ritm-mount></div></div></section>
  <section class="research-route__step" aria-labelledby="route-agent"><div class="research-route__heading"><h2 id="route-agent">agent = model(world)</h2></div><div class="research-route__content research-route__agent" data-stage="agent">
   <figure class="research-route__formula"><img src="/assets/art-is-you/bogobot-deep/source/assets/canon/book-1-awakening.webp" width="1536" height="1024" alt="agent = model(world)"></figure>
   <div class="research-route__branches" aria-describedby="route-branch-note"><p class="route-sr-only" id="route-branch-note">Пунктирные связи к гипотезам и концепциям обозначают промежуточные исследовательские операции, не развёрнутые в этой схеме.</p><section data-stage="hypothesis"><h3><a href="/research/">Гипотезы</a></h3></section><section data-stage="concepts"><h3><a href="/projects/">Концепции</a></h3></section></div>
  </div></section>
 </div><p class="research-route__return"><a href="#research-frame">К исследовательской рамке <span aria-hidden="true">↑</span></a></p>`;
 core.after(route);
 const image=main.querySelector('[data-home-error-source]');if(image){route.querySelector('[data-stage=error]').append(image);image.hidden=false;}
 if(futures){for(const [stage,category] of [['hypothesis','research'],['concepts','projects']]){const existing=futures.querySelector(`[data-future-category=${category}]`);if(existing)route.querySelector(`[data-stage=${stage}]`).append(existing);}futures.remove();}
 document.documentElement.dataset.methodMap='ready';
})();
