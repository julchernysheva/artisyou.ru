/* V18.1 historical overlay. The FROZEN files remain untouched. */
(() => {
  'use strict';
  const masterEl=document.getElementById('p0-master'), snapshotEl=document.getElementById('historical-snapshot');
  const master=JSON.parse(masterEl.textContent), snapshot=JSON.parse(snapshotEl.textContent);
  const people=[
    {id:'VH_PERSON_VLADIMIROV',name:'Василий Сергеевич Владимиров',surname:'Владимиров',birth:'1923',death:'2012',fields:['математическая физика','теория переноса','вычислительные методы','обобщённые функции'],who:'математик, академик РАН',contribution:'Разрабатывал методы решения уравнений переноса, исследовал математическую физику, функции нескольких комплексных переменных и обобщённые функции.',sources:[{title:'МИАН — биография В. С. Владимирова',url:'https://homepage.mi-ras.ru/~vladim/vladim2.htm'},{title:'В. С. Владимиров — «Я — сын трудового народа»',url:'https://djvu.online/file/IhYsgActo7jx4'}],pos:[378,846]},
    {id:'VH_PERSON_BOGOLYUBOV',name:'Николай Николаевич Боголюбов',surname:'Боголюбов',birth:'1909',death:'1992',fields:['математика','теоретическая физика'],who:'математик и физик-теоретик',contribution:'Научный руководитель кандидатской диссертации В. С. Владимирова. Вспомогательный исторический узел.',sources:[{title:'МИАН — Н. Н. Боголюбов',url:'https://mi.ras.ru/books/pdf/bogoliub.pdf'},{title:'В. С. Владимиров — воспоминания, с. 129–130',url:'https://djvu.online/file/IhYsgActo7jx4'}],pos:[826,850]}
  ];
  const relations=[
    {id:'VH_REL_01',a:'P009',b:'VH_PERSON_VLADIMIROV',type:'RESEARCH_GROUP_COLLABORATION',period:'1948',flow:'COLLABORATION',directed:'YES',wording:'Работа в научной группе Л. В. Канторовича с 1948 года. Руководство группой не означает руководство диссертацией.',url:'https://djvu.online/file/IhYsgActo7jx4',locator:'с. 108–109'},
    {id:'VH_REL_02',a:'VH_PERSON_BOGOLYUBOV',b:'VH_PERSON_VLADIMIROV',type:'SCIENTIFIC_SUPERVISION',period:'1953',flow:'TEACHING',directed:'YES',wording:'Боголюбов был научным руководителем кандидатской диссертации Владимирова (1953).',url:'https://djvu.online/file/IhYsgActo7jx4',locator:'с. 129–130'},
    {id:'VH_REL_03',a:'B036',b:'VH_PERSON_VLADIMIROV',type:'RESEARCH_COLLABORATION',period:'1953–1955',flow:'COLLABORATION',directed:'NO',wording:'Работа Владимирова в группе Лаврентьева над расчётами РДС-41. Это не утверждение о соавторстве или руководстве диссертацией.',url:'https://djvu.online/file/IhYsgActo7jx4',locator:'с. 128, 131'},
    {id:'VH_REL_04',a:'P017',b:'VH_PERSON_VLADIMIROV',type:'COAUTHORSHIP',period:'2000',flow:'COLLABORATION',directed:'NO',wording:'Соавторство статьи «Об определении сопряжённого оператора для нелинейных задач», ДАН, 2000, т. 372, № 2, с. 165–168.',url:'https://www.inm.ras.ru/publications2000/',locator:'Публикации ИВМ РАН за 2000 год'}
  ];
  const existing=new Set([...master.people.map(x=>x.person_id),...master.external_entities.map(x=>x.entity_id)]);
  for(const p of people){
    if(existing.has(p.id)||snapshot.people.some(x=>x.person_id===p.id))throw Error('Duplicate overlay person '+p.id);
    master.people.push({person_id:p.id,canonical_name:p.name,scope:'EXTERNAL_HISTORICAL',date_note:p.birth+'–'+p.death,patch_note:'Historical extension; excluded from FROZEN MASTER.'});
    snapshot.people.push({person_id:p.id,canonical_name:p.name,surname:p.surname,birth_year:p.birth,death_year:p.death,main_field:p.fields.join('; '),graph_status:'EXTERNAL_HISTORICAL_EXTENSION'});
    snapshot.personCards.push({person_id:p.id,canonical_name:p.name,life_years:p.birth+'–'+p.death,who:p.who,fields:p.fields,contribution:p.contribution,fact_check_status:'SOURCE_CHECKED',person_sources:p.sources});
    snapshot.personTags.push({person_id:p.id,canonical_name:p.name,ai_field:[],foundation:['COMPUTATIONAL_MATH'],confidence:'SOURCE_CHECKED',basis:'VLADIMIROV_EXTENSION'});
  }
  const names=new Map(master.people.map(p=>[p.person_id,p.canonical_name]));
  const provenance=window.RI_RELATION_PROVENANCE;
  for(const r of relations){
    if(!names.has(r.a)||!names.has(r.b)||snapshot.edges.some(e=>e.edge_id===r.id||((e.source_id===r.a&&e.target_id===r.b)||(e.source_id===r.b&&e.target_id===r.a))))throw Error('Duplicate or invalid overlay relation '+r.id);
    snapshot.edges.push({edge_id:r.id,source_id:r.a,source_name:names.get(r.a),target_id:r.b,target_name:names.get(r.b),relation:r.type,flow_type:r.flow,directed:r.directed,evidence_level:'SOURCE_CHECKED',source_title:r.wording,source_url:r.url,exact_quote:''});
    provenance.records[r.id]={relation_id:r.id,relation_class:'HISTORICAL',source_entity_id:r.a,target_entity_id:r.b,source_entity:names.get(r.a),target_entity:names.get(r.b),relation_type:r.type,directed:r.directed,public_wording:r.wording,evidence_status:'DIRECT',evidence_refs:[{source_url:r.url,source_title:r.wording,locator:r.locator,retrieval_status:'SOURCE_CHECKED'}],supported_claim:r.wording,supported_relation_scope:r.wording,locator:[r.locator],temporal_scope:[r.period],verification_status:'SOURCE_CHECKED',retrieval_status:['SOURCE_CHECKED']};
    provenance.approved_semantic_ids.push(r.id);
  }
  masterEl.textContent=JSON.stringify(master);snapshotEl.textContent=JSON.stringify(snapshot);
  window.RI_VLADIMIROV_EXTENSION={layout:Object.fromEntries(people.map(p=>[p.id,p.pos])),periods:Object.fromEntries(people.map(p=>[p.id,'СОВЕТСКАЯ НАУКА'])),people:2,relations:4,context:{source:'B033',target:'VH_PERSON_VLADIMIROV',wording:'Институциональный контекст: группа Владимирова и Ширкова работала на ЭВМ «Стрела» в ОПМ МИАН, возглавляемом Келдышем. Личное соавторство и наставничество не установлены.',url:'https://djvu.online/file/IhYsgActo7jx4'}};
})();
