/* Test composition only. Move existing nodes; preserve handlers and storage. */
(() => {
 'use strict';
 const main=document.querySelector('.h3b-home'),intro=document.getElementById('research-frame'),route=document.querySelector('#method.research-route');
 const form=intro?.querySelector('.rf-form');
 if(!main||!intro||!route||!form)throw new Error('Home test: required source blocks not found');
 // The parser-loaded form.js already holds this exact form element and its handlers.
 const questionnaire=document.createElement('section');
 questionnaire.id='research-questionnaire';questionnaire.className='home-questionnaire';
 questionnaire.setAttribute('aria-labelledby','home-questionnaire-title');
 const layout=document.createElement('div');layout.className='rf-layout';
 questionnaire.append(layout);layout.append(form);
 form.querySelector('.rf-form__title').id='home-questionnaire-title';
 intro.setAttribute('aria-label','Исследовательская логика');
 route.querySelector('.research-route__label').remove();
 route.setAttribute('aria-label','Ошибка, человеческий сдвиг, модель мира, гипотезы и концепции');

 const model=route.querySelector('#route-agent'),modelHeading=model.parentElement;
 const formula=document.createElement('p');formula.className='home-order__formula-label';formula.textContent=model.textContent;
 model.textContent='Модель мира';modelHeading.append(formula);
 const question=document.createElement('p');question.className='home-order__question';question.textContent='Какое место эта система оставляет человеку?';
 const modelContent=route.querySelector('[data-stage="agent"]');
 const branches=modelContent.querySelector('.research-route__branches');
 modelContent.append(question);

 const hypothesisStep=document.createElement('section');hypothesisStep.className='research-route__step';
 hypothesisStep.setAttribute('aria-labelledby','home-hypotheses');
 const heading=document.createElement('div');heading.className='research-route__heading';
 const title=document.createElement('h2');title.id='home-hypotheses';title.textContent='Гипотезы и концепции';heading.append(title);
 branches.classList.add('home-order__parallel');branches.classList.add('research-route__content');
 hypothesisStep.append(heading,branches);
 route.querySelector('.research-route__steps').append(hypothesisStep);
 // Ordered editorial sequence. Move the existing model; do not recreate controls.
 const steps=route.querySelector('.research-route__steps');
 const human=route.querySelector('[data-stage="human-shift"]').closest('section');
 const error=route.querySelector('[data-stage="error"]').closest('section');
 const world=model.closest('section');
 const subtitle=document.createElement('p');subtitle.className='home-order__subtitle';
 subtitle.textContent=human.querySelector('h2').textContent;
 human.querySelector('h2').textContent='Изменения';human.querySelector('h2').after(subtitle);
 model.textContent='Новая модель мира';
 for(const [node,number] of [[human,'02'],[error,'03'],[world,'04']]){
  node.dataset.chapter=number;
  const index=document.createElement('p');index.className='home-order__index';index.textContent=number+' /';
  node.querySelector('.research-route__heading').prepend(index);
 }
 hypothesisStep.dataset.chapter='branches';
 steps.replaceChildren(human,error,world,hypothesisStep);
 const first=document.createElement('span');first.className='home-order__index home-order__text-index';first.textContent='01 / Текст';
 main.querySelector('.hero-label').append(first);
 route.setAttribute('aria-label','Изменения, ошибка, новая модель мира, гипотезы и концепции');
 // Retain the existing return link and its original #research-frame target.
 route.after(questionnaire);
 main.dataset.homeResearchOrder='ready';
})();
