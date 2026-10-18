/* Local, additive fact layer. Runs after Snob people, before the canonical runtime.
 * Does not relocate existing nodes or infer transitive historical relationships.
 */
(() => {
 'use strict';
 if(window.RI_RESEARCH_LINKS_EXTENSION)return;
 const mn=document.getElementById('p0-master'),hn=document.getElementById('historical-snapshot');
 const master=JSON.parse(mn.textContent),hist=JSON.parse(hn.textContent);
 const provenance=window.RI_RELATION_PROVENANCE,records=provenance.records;
 const report={historicalAdded:0,segmentsAdded:0,technologiesAdded:0,routesAdded:0,items:[],idMap:{},positions:{},corrections:[]};
 const labels={SCIENTIFIC_SUPERVISION:'НАУЧНОЕ РУКОВОДСТВО',SCIENTIFIC_GUIDANCE:'НАУЧНОЕ НАПРАВЛЕНИЕ / СОВЕТ',METHOD_DEVELOPMENT:'РАЗВИТИЕ МЕТОДА',RESEARCH_GROUP_COLLABORATION:'РАБОТА В НАУЧНОЙ ГРУППЕ',COAUTHORSHIP:'СОАВТОРСТВО',RESEARCH_COLLABORATION:'СОВМЕСТНАЯ РАБОТА',SCIENTIFIC_SCHOOL:'НАУЧНАЯ ШКОЛА (БЕЗ УТОЧНЕНИЯ РУКОВОДСТВА)',METHOD_LINEAGE:'ПРЕЕМСТВЕННОСТЬ МЕТОДА',TEACHING:'ОБУЧЕНИЕ', 'TEACHING/DOCTORAL_SUPERVISION':'РУКОВОДСТВО В ДОКТОРАНТУРЕ',METHOD_CO_CREATION:'СОАВТОРСТВО МЕТОДА',DOCUMENTED_IMPLEMENTATION:'ДОКУМЕНТИРОВАННАЯ РЕАЛИЗАЦИЯ',METHOD_ORIGIN:'РАННИЙ МЕТОД',METHOD_GENERALIZATION:'ОБОБЩЕНИЕ МЕТОДА',INDEPENDENT_METHOD_CONTRIBUTION:'НЕЗАВИСИМЫЙ ВКЛАД В МЕТОД',DOCUMENTED_METHOD_FAMILY_IMPLEMENTATION:'РЕАЛИЗАЦИЯ СЕМЕЙСТВА МЕТОДОВ',EPONYM_AND_HISTORICAL_STUDY:'ЭПОНИМ / ИСТОРИЧЕСКИЙ ВКЛАД',DOCUMENTED_METHOD_USE:'ИСПОЛЬЗОВАНИЕ МЕТОДА',METHOD_CONSTRUCTION:'КОНСТРУКЦИЯ МЕТОДА',COAUTHOR_OF_WORK:'СОАВТОРСТВО РАБОТЫ',DISSERTATION_OPPONENT:'ОППОНИРОВАНИЕ ДИССЕРТАЦИИ',SEMINAR_CONTEXT:'РЕЗУЛЬТАТЫ НА СЕМИНАРЕ',COLLABORATION:'СОАВТОРСТВО ДОКЛАДА',COAUTHORSHIP_AND_EDUCATIONAL_COLLABORATION:'СОАВТОРСТВО / ПЕДАГОГИЧЕСКИЙ ПРОЕКТ',DATED_PROFESSIONAL_RESEARCH_ENGINEERING:'РАБОТА ML ENGINEER (2015–2016)',PAPER_COAUTHORSHIP_WITH_COMPANY_AFFILIATED_RESEARCHERS:'АФФИЛИАЦИЯ СОАВТОРОВ ПУБЛИКАЦИИ'};
 // Do not relabel the map's existing generic collaboration records as coauthorship.
 delete labels.COLLABORATION;
 const definitions=[
  ['PROPOSED_AVL','AVL-деревья','METHOD','ПРОГРАММИРОВАНИЕ',[1275,95]],
  ['PROPOSED_MULTIGRID','Многосеточные методы','METHOD_FAMILY','ОПТИМИЗАЦИЯ',[1275,285]],
  ['PROPOSED_QR_EIGEN','QR-итерация для собственных значений','METHOD_FAMILY','ОПТИМИЗАЦИЯ',[1275,665]],
  ['PROPOSED_WASSERSTEIN','Метрика Wasserstein / Kantorovich–Rubinstein','METRIC_FAMILY','ОСНОВЫ ML',[1275,855]],
  ['PROPOSED_SLICED_WASSERSTEIN','Sliced Wasserstein loss','METHOD','ОСНОВЫ ML',[1420,570]],
  ['PROPOSED_BOOST_INTRUSIVE','Boost.Intrusive AVL containers','SOFTWARE_IMPLEMENTATION','ПРОГРАММИРОВАНИЕ',[1420,125]],
  ['PROPOSED_PETSC_PCMG','PETSc PCMG','SOFTWARE_IMPLEMENTATION','ОПТИМИЗАЦИЯ',[1420,315]],
  ['PROPOSED_LAPACK_HSEQR','LAPACK xHSEQR','SOFTWARE_IMPLEMENTATION','ОПТИМИЗАЦИЯ',[1420,635]],
  ['PROPOSED_WGAN2017','WGAN2017','RESEARCH_METHOD','ОСНОВЫ ML',[1420,885]],
  ['PROPOSED_TTPOINT2024','TT point-cloud compression / ANN (2024)','RESEARCH_WORK','КОМПЬЮТЕРНОЕ ЗРЕНИЕ',[1580,955]],
  ['PROPOSED_LERA2025','LERa (2025)','RESEARCH_WORK','АГЕНТЫ И РОБОТЫ',[1580,465]]
 ];
 const shortLabels={PROPOSED_QR_EIGEN:'QR-итерация',PROPOSED_WASSERSTEIN:'Wasserstein / KR',PROPOSED_SLICED_WASSERSTEIN:'Sliced Wasserstein',PROPOSED_BOOST_INTRUSIVE:'Boost.Intrusive AVL',PROPOSED_TTPOINT2024:'TT point-cloud / ANN'};
 const facts=window.RI_RESEARCH_LINK_FACTS;
 const all=()=>[...master.people,...master.external_entities,...master.technologies,...master.middle_entities,...master.companies];
 const normalize=s=>String(s||'').toLowerCase().replace(/[\s–—-]/g,'');
 for(const [id,title,kind,category,xy] of definitions){
  const existing=all().find(e=>(e.entity_id||e.person_id)===id||normalize(e.title||e.canonical_name)===normalize(title));
  report.idMap[id]=existing?(existing.entity_id||existing.person_id):id;
  if(existing)continue;
  const related=facts.filter(f=>f.source_id===id||f.target_id===id);
  master.technologies.push({entity_id:id,title,map_label:shortLabels[id]||title,content_type:kind,display_type:kind,menu_category:category,entity_type:'TECHNOLOGY',audit_extension:true,route_ids:[],public_copy:related.map(f=>f.claim_ru).join(' '),note:related.map(f=>f.limitations_ru).join(' '),evidence_badge:'ИСТОЧНИКИ / 2026-10-18'});
  report.positions[id]=xy;report.technologiesAdded++;
 }
 const resolve=id=>report.idMap[id]||id;
 const names=new Map(all().map(e=>[e.person_id||e.entity_id,e.canonical_name||e.title||e.name]));
 const pair=(a,b)=>hist.edges.find(e=>(e.source_id===a&&e.target_id===b)||(e.source_id===b&&e.target_id===a));
 const visual=type=>/COAUTHOR|COLLABORATION/.test(type)?'COLLABORATION':/METHOD|EPONYM/.test(type)?'INFLUENCE':'TEACHING';
 function fact(f){return {fact_id:f.record_id,relation_type:f.relation_type,source_id:resolve(f.source_id),target_id:resolve(f.target_id),source_name:f.source_name,target_name:f.target_name,directed:f.directed,claim:f.claim_ru,limitations:f.limitations_ru,exact_quote:f.exact_quote||'',audit_date:f.audit_date,evidence_refs:f.evidence.map(s=>({source_url:s.url,source_title:s.title||f.claim_ru,source_kind:s.kind,locator:s.locator,retrieval_status:s.access,audit_date:s.date,paraphrase:s.paraphrase||'',independent_recheck:'NOT_VERIFIED_THIS_IMPORT'}))};}
 function appendFact(p,f){
  p.scoped_facts??=[];
  if(p.scoped_facts.some(x=>x.fact_id===f.record_id))return false;
  p.scoped_facts.push(fact(f));return true;
 }
 function record(id,f,cls='HISTORICAL',route=''){
  const r=fact(f);
  return {relation_id:id,relation_class:cls,source_entity_id:r.source_id,target_entity_id:r.target_id,source_entity:names.get(r.source_id),target_entity:names.get(r.target_id),route_id:route,company_endpoint:/^C_/.test(r.source_id)||/^C_/.test(r.target_id),relation_type:f.relation_type,directed:f.directed,public_wording:f.claim_ru,evidence_status:'DIRECT',evidence_refs:r.evidence_refs,supported_claim:f.claim_ru,supported_relation_scope:f.limitations_ru,locator:r.evidence_refs.map(e=>e.locator),temporal_scope:[f.audit_date],verification_status:'SUPPLIED_AUDIT_2026_10_18',retrieval_status:r.evidence_refs.map(e=>e.retrieval_status),exact_quote:'',scoped_facts:[r]};
 }
 function approve(id){if(!provenance.approved_semantic_ids.includes(id))provenance.approved_semantic_ids.push(id);}
 const groups={NEW_M01:'AVL',NEW_M02:'AVL',NEW_M03:'AVL',NEW_M04:'MULTIGRID',NEW_M05:'MULTIGRID',NEW_M06:'MULTIGRID',NEW_M07:'QR',NEW_M08:'QR',NEW_M09:'WASSERSTEIN',NEW_M10:'WASSERSTEIN',NEW_M11:'WASSERSTEIN',NEW_M12:'WASSERSTEIN',NEW_M13:'WASSERSTEIN',NEW_MALYKH_YANDEX_NEWS:'MALYKH_YANDEX',NEW_LERA_SBER_P022:'LERA',NEW_LERA_SBER_P020:'LERA',NEW_LERA_SBER_AFFILIATION:'LERA'};
 for(const f of facts){
  const a=resolve(f.source_id),b=resolve(f.target_id);
  if(!names.has(a)||!names.has(b))throw Error('Unknown fact endpoint: '+f.record_id);
  if(groups[f.record_id]){
   const rid='AUDIT_'+groups[f.record_id];
   let route=master.modern_routes.find(r=>r.route_id===rid);
   if(!route){route={route_id:rid,strength:'A',channel:'SCOPED_DOCUMENTED_RELATIONS',public_claim:'Подтверждённые факты без транзитивного вывода о личном контакте или внедрении.',forbidden_claim:'Наставничество, кодовая преемственность и внедрение из соседства в маршруте не следуют.',company_entity_id:rid==='AUDIT_MALYKH_YANDEX'?'C_YANDEX':rid==='AUDIT_LERA'?'C_SBER':'',audit_extension:true};master.modern_routes.push(route);report.routesAdded++;}
   const existing=master.route_segments.find(s=>s.audit_fact_id===f.record_id||(s.source_entity_id===a&&s.target_entity_id===b&&s.relation_type===f.relation_type));
   if(existing){report.items.push({fact:f.record_id,status:'ALREADY_PRESENT'});continue;}
   const sequence=master.route_segments.filter(s=>s.route_id===rid).length+1;
   const id=rid+':S'+String(sequence).padStart(2,'0');
   master.route_segments.push({route_id:rid,sequence,source_entity_id:a,target_entity_id:b,relation_type:f.relation_type,directed:f.directed,strength:'A',channel:'SCOPED_DOCUMENTED_RELATIONS',base_edge_id:'',note:f.limitations_ru,audit_fact_id:f.record_id});
   records[id]=record(id,f,'MODERN',rid);
   [a,b].forEach(eid=>{const entity=master.technologies.find(e=>e.entity_id===eid);if(entity&&!entity.route_ids.includes(rid))entity.route_ids.push(rid)});
   report.segmentsAdded++;report.items.push({fact:f.record_id,status:'ADDED_SEGMENT',id});continue;
  }
  let edge=pair(a,b);
  if(!edge){
   edge={edge_id:f.record_id,source_id:a,target_id:b,source_name:names.get(a),target_name:names.get(b),relation:f.relation_type,flow_type:visual(f.relation_type),directed:f.directed,source_title:f.evidence[0]?.title||f.claim_ru,source_url:f.evidence[0]?.url,exact_quote:'',audit_extension:true};
   hist.edges.push(edge);records[edge.edge_id]=record(edge.edge_id,f);approve(edge.edge_id);report.historicalAdded++;
   report.items.push({fact:f.record_id,status:'ADDED_PAIR',id:edge.edge_id});
  }else{
   const p=records[edge.edge_id];if(!p)throw Error('Missing provenance '+edge.edge_id);
   const added=appendFact(p,f);report.items.push({fact:f.record_id,status:added?'ENRICHED_EXISTING_PAIR':'ALREADY_PRESENT',id:edge.edge_id});
  }
 }
 // Separate, explicit corrections. Preserve prior assertions and exact quotations.
 const original=p=>{p.audit_prior??=JSON.parse(JSON.stringify(p));};
 const e004=hist.edges.find(e=>e.edge_id==='E004'),p004=records.E004;
 if(e004&&p004){original(p004);p004.relation_type='DISSERTATION_OPPONENT';p004.public_wording='Глушков был оппонентом докторской диссертации Журавлёва (1965). Прежнее направленное влияние не установлено.';p004.supported_claim=p004.public_wording;p004.verification_status='DISSERTATION_OPPONENT_CONFIRMED_INFLUENCE_UNESTABLISHED';approve('E004');report.corrections.push('E004: opponent confirmed; prior influence retained in audit_prior, not confirmed');}
 for(const id of ['AIG002','AIG003']){
  const p=records[id];if(!p)continue;original(p);p.verification_status='UNESTABLISHED';p.evidence_status='MISSING';p.public_wording='Личное направленное влияние не установлено. Совместное участие в комиссии 1959 года — только институциональный контекст.';p.context_refs=[{source_url:'https://www.computer-museum.ru/books/berg.pdf',source_title:'Аксель Иванович Берг: документальный сборник',locator:'PDF с. 282, документ 3-1 и редакторский комментарий',retrieval_status:'FULL_PDF',audit_date:'2026-10-18'}];report.corrections.push(id+': UNESTABLISHED; original assertion preserved');
 }
 const e009=hist.edges.find(e=>e.edge_id==='E009'),p009=records.E009;
 if(e009&&p009){original(p009);e009.audit_original_direction={source_id:e009.source_id,target_id:e009.target_id};Object.assign(e009,{source_id:'P009',target_id:'P004',source_name:names.get('P009'),target_name:names.get('P004'),directed:'YES'});Object.assign(p009,{source_entity_id:'P009',target_entity_id:'P004',source_entity:names.get('P009'),target_entity:names.get('P004'),directed:'YES',relation_type:'SCIENTIFIC_CORRESPONDENCE',public_wording:'Письмо Канторовича Ляпунову от 29.12.1960; направление: отправитель → адресат.'});p009.evidence_refs.push({source_url:'https://www.computer-museum.ru/books/lyapunov-90.pdf',source_title:'Письмо № 41: Канторович — Ляпунову, 29.12.1960',locator:'PDF с. 363–364, печатные с. 370–371',retrieval_status:'FULL_PDF',audit_date:'2026-10-18'});approve('E009');report.corrections.push('E009: P009 → P004, one edge only');}
 mn.textContent=JSON.stringify(master);hn.textContent=JSON.stringify(hist);
 window.RI_RESEARCH_LINKS_EXTENSION=report;
 window.RI_RESEARCH_RELATION_LABELS=labels;
})();
