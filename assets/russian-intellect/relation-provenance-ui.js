// PASS 04D: relation evidence in the existing inspector; no geometry or event ownership.
function riProvenance(id){return window.RI_RELATION_PROVENANCE.records[id];}
function riSegmentId(segment){return segment.route_id+':S'+String(segment.sequence).padStart(2,'0');}
function riApproved(id){return window.RI_RELATION_PROVENANCE.approved_semantic_ids.includes(id);}
function riPatchHistorical(edge){
 if(!riApproved(edge.edge_id))return edge;
 const p=riProvenance(edge.edge_id);
 // Retain the original stroke class independently of the corrected semantic type.
 edge.provenance_visual_type=edge.flow_type;
 edge.flow_type=edge.relation=p.relation_type;
 edge.public_wording=p.public_wording;
 if(p.directed)edge.directed=p.directed;
 if(p.relation_scope)edge.relation_scope=p.relation_scope;
 return edge;
}
function riPatchModern(segments){
 segments.forEach(segment=>{const id=riSegmentId(segment);if(!riApproved(id))return;
  const p=riProvenance(id);segment.relation_type=p.relation_type;segment.public_wording=p.public_wording;
 });
}
function riEvidenceLabel(status){return ({DIRECT:'ПРЯМОЙ ИСТОЧНИК',CONTEXTUAL:'КОНТЕКСТНЫЙ ИСТОЧНИК',INHERITED:'ИСТОЧНИК МАРШРУТА',MISSING:'ИСТОЧНИК ОТНОШЕНИЯ НЕ УСТАНОВЛЕН'})[status];}
function riGraphLabel(id){return ({E027:'ВЛИЯНИЕ',GH010:'ОБЩАЯ ШКОЛА',GM002:'ИНСТИТУЦИОНАЛЬНЫЙ КОНТЕКСТ',E009:'ПЕРЕПИСКА',E024:'НАУЧНЫЙ КОНТЕКСТ',T11_011:'СОТРУДНИЧЕСТВО КОЛЛЕКТИВОВ',PV46_SCHOOL_SHREIDER:'СЕМИНАРЫ','R020:S02':'КОНТЕКСТ КОМАНДЫ'})[id];}
function riRelationWording(p){return p.public_wording||relationRu(p.relation_type);}
function riSegmentRecord(rt,s){
 if(s.relation_type!=='BASE_EDGE_REF')return riProvenance(riSegmentId(s));
 const edge=rt.historical.edges.find(e=>e.edge_id===s.base_edge_id)||rt.historical.edges.find(e=>(e.source_id===s.source_entity_id&&e.target_id===s.target_entity_id)||(e.directed==='NO'&&e.target_id===s.source_entity_id&&e.source_id===s.target_entity_id));
 return edge?riProvenance(edge.edge_id):null;
}
function riEntityEvidence(rt,id){
 const records=new Map();
 const routes=routeIdsFor(rt,id);
 const focused=CARD_ROUTE_FOCUS&&routes.includes(CARD_ROUTE_FOCUS)?CARD_ROUTE_FOCUS:null;
 if(!focused)incidentRelations(rt,id).forEach(({edge})=>records.set(edge.edge_id,riProvenance(edge.edge_id)));
 (focused?[focused]:routes).forEach(rid=>(rt.segmentsByRoute[rid]||[]).forEach(s=>{const p=riSegmentRecord(rt,s);if(p)records.set(p.relation_id,p);}));
 const result=[...records.values()];
 // Background bibliography remains accessible, explicitly outside relation proof.
 if(!focused){const own=(rt.cardById[id]?.person_sources||[]).filter(s=>/^https?:\/\//.test(s.url||''));if(own.length)result.push({background:true,refs:own});}
 return result;
}
function riRetrievalLabel(ref){
 const s=String(ref.retrieval_status||'');
 if(/^(FULL_|full_|PDF_full|PDF$|fullpage)/.test(s))return 'ДОСТУП ПРИ АУДИТЕ: '+s+'; повторная проверка при импорте — NOT VERIFIED';
 if(/OPEN_ERROR|TIMEOUT|UNAVAILABLE|403|404/.test(s))return 'ДОСТУП: источник временно недоступен; статус доказательства сохранён';
 if(/INDEXED/.test(s))return 'ДОСТУП: проверен индексированный фрагмент; полная загрузка не подтверждена';
 if(/RETRIEVED/.test(s))return 'ДОСТУП: текст проверен при аудите';
 return 'ДОСТУП: повторная загрузка в этом проходе не проверялась';
}
function riCardPresentation(initial=[]){return {claims:new Set(initial.filter(Boolean).map(s=>String(s).trim())),refs:new Set()};}
function riCardCopy(text,state){
 const value=String(text||'').trim();
 if(!value||state.claims.has(value))return '';
 state.claims.add(value);return `<div class="card-copy">${esc(text)}</div>`;
}
// Reviewed presentation copy by fact ID, not a text-removal heuristic.
// Raw limitations, provenance, claims, and exact quotations are never changed.
const RI_PUBLIC_FACT_CAVEATS={
 NEW_H01:'Соавторство не установлено. Руководство кандидатской диссертацией подтверждено для Соболева.',
 NEW_H02:'Формальное руководство Колмогорова кандидатской диссертацией не подтверждено. Здесь речь о студенческом научном направлении и совете.',
 NEW_H03:'Это развитие метода, не доказательство личного наставничества или соавторства. Современные многосеточные методы не сводятся к одной исходной версии.',
 NEW_H04:'Руководство Канторовича её диссертацией не подтверждено. Эта связь не доказывает его авторство в QR. Связь с линейным программированием нельзя выводить автоматически.',
 NEW_H05:'Статья по математике групп; непосредственная AI-преемственность не установлена.',
 NEW_H06:'Проектная связь не подтверждает формальное наставничество. Соавторство статьи 1947 г. подтверждено также полной позднейшей статьёй самого Ландиса (NS21, p.61, ref.[11]); оригинальный лист 1947 г. не получен.',
 NEW_H06_SCOPE_1:'Полный оригинал статьи 1947 г. не был открыт при аудите.',
 NEW_H07:'Соавторство не доказывает формальное руководство диссертацией. Свидетельство научной школы приведено отдельно. Происхождение всех современных WL/GNN-реализаций из статьи 1969 г. не установлено.',
 NEW_H07_SCOPE_1:'Источник не различает, кто был формальным, а кто неформальным учеником. Руководство диссертацией не установлено. Само ребро не доказывает промышленное применение WL/GNN.',
 NEW_H08:'Соавторство не доказывает формальное руководство диссертацией. Свидетельство научной школы приведено отдельно. Происхождение всех современных WL/GNN-реализаций из статьи 1969 г. не установлено.',
 NEW_H08_SCOPE_1:'Формальное научное руководство и корпоративное применение GNN этой связью не подтверждены.',
 NEW_H09:'Не доказывает личное ученичество или совместную публикацию. Совместный источник идей: Кублановская и Френсис; вклад других разработчиков не исключается. Тип связи — преемственность метода.',
 HF_PROPOSAL_06:'Руководство Яблонского кандидатской диссертацией 1960 года не подтверждено.',
 HF_PROPOSAL_08:'Точный объём: руководство в докторантуре после военной службы; дата защиты и руководитель иной диссертации не выводятся.',
 NEW_M01:'Соавторство относится к AVL-деревьям, а не ко всем сбалансированным деревьям.',
 NEW_M02:'Это вклад в метод; соавторство статьи Адельсона-Вельского и Ландиса отражено отдельной связью.',
 NEW_M03:'Это библиотечная реализация, не доказательство применения конкретной компанией.',
 NEW_M04:'Авторство всех современных вариантов многосеточного метода этой связью не утверждается.',
 NEW_M05:'Авторство PETSc или всех его методов Бахвалову не приписывается.',
 NEW_M06:'Связь семейства методов, не побитовая преемственность кода 1961/1966. Наличие численного пакета не доказывает корпоративную AI-преемственность.',
 NEW_M07:'Независимо от Френсиса, не единоличный автор всей современной QR-линии. Её ранняя версия не была реализована на электронной машине: см.NS06p475.',
 NEW_M08:'Прямое использование исходного кода Кублановской не подтверждено. QR-итерация не тождественна любому QR-разложению, SVD или tensor train.',
 NEW_M09:'Единоличное авторство optimal transport не утверждается. Название метрики не доказывает личного контакта с Канторовичем.',
 NEW_M10:'Не соавторство Васерштейна с авторами WGAN. Не доказательство использования WGAN любой компанией карты.',
 NEW_M11:'Это поздняя конструкция, не изобретение Васерштейна 1969 г.',
 NEW_M12:'Метод сочетается с nearest-neighbor loss, не единственная функция потерь. Не доказано production-применение.',
 NEW_M13:'Это авторство конкретной работы, не персональное ученичество у Васерштейна.',
 HF_PROPOSAL_01:'Оппонирование подтверждено независимо; личное направленное влияние этим фактом не установлено.',
 HF_PROPOSAL_02:'Дополнительное соавторство, не замена уже подтверждённого узкого семинарского влияния. Доклад совместный; связь ненаправленная.',
 HF_PROPOSAL_03:'Источник явно исключает руководство PhD.',
 HF_PROPOSAL_04:'Сотрудничество и руководство могут сосуществовать.',
 HF_PROPOSAL_05:'Отдельный более ранний факт преподавания курса.',
 ENRICH_SN_REL_005:'Соавторство подтверждается отдельным источником, а не свидетельством Арлазарова о работе лаборатории. Кронрод здесь Александр Семёнович, не Михаил Александрович.',
 NEW_MALYKH_YANDEX_NEWS:'Авторское CV подтверждает профессиональную связь. Это не доказательство внедрения методов Арлазарова.',
 NEW_LERA_SBER_P022:'Не означает работу этого автора в Сбере, участие в Kandinsky или внедрение в продукт.',
 NEW_LERA_SBER_P020:'Не означает работу этого автора в Сбере, участие в Kandinsky или внедрение в продукт.',
 NEW_LERA_SBER_AFFILIATION:'Связь публикации с аффилиацией её соавторов. Не общее авторство компании, не принадлежность всех авторов Сберу, не передача метода и не production deployment. Связь с T‑Bank или Kandinsky этим фактом не подтверждается.'
};
function riSourceReference(ref,allowLink=true,state=null){
 if(state){
  const key=JSON.stringify([ref.source_url,ref.source_title,ref.locator,ref.retrieval_status,ref.source_kind,ref.audit_date]);
  if(state.refs.has(key))return '';
  state.refs.add(key);
 }
 const title=state?.claims.has(String(ref.source_title||'').trim())?'Источник':(ref.source_title||'Источник');
 const usable=allowLink&&/^https?:\/\/[^\s]+$/.test(ref.source_url||'')&&!/WRONG_URL|BROKEN|404|INVALID_URL/.test(ref.retrieval_status||'');
 return `<section class="card-block"><div class="source-title">${esc(title)}</div>${ref.source_kind?`<div class="card-key">${esc(ref.source_kind)} · ${esc(ref.audit_date||'')}</div>`:''}${ref.locator?`<div class="card-copy">${esc(ref.locator)}</div>`:''}<div class="card-key" data-provenance-status>${esc(riRetrievalLabel(ref))}</div>${usable?`<a class="source-link" href="${esc(ref.source_url)}" target="_blank" rel="noopener">ОТКРЫТЬ ИСТОЧНИК ↗</a>`:''}</section>`;
}
function riScopedFacts(p,state=riCardPresentation()){
 return (p.scoped_facts||[]).map(f=>`<section class="card-block" data-fact-id="${esc(f.fact_id)}"><div class="card-key">${esc(relationRu(f.relation_type))} · ${f.directed==='YES'?'НАПРАВЛЕННАЯ СВЯЗЬ':'БЕЗ НАПРАВЛЕНИЯ'}</div><div class="card-copy">${esc(f.source_name||f.source_id)} ${f.directed==='YES'?'→':'—'} ${esc(f.target_name||f.target_id)}</div>${riCardCopy(f.claim,state)}${riCardCopy(RI_PUBLIC_FACT_CAVEATS[f.fact_id]??f.limitations,state)}${f.evidence_refs.map(ref=>riSourceReference(ref,true,state)).join('')}</section>`).join('');
}
function riEvidenceCards(items){
 if(!items.length)return '<div class="card-empty">Для этой сущности нет отображаемых отношений с записью provenance.</div>';
 return items.map(p=>{
  if(p.background)return `<section class="card-block" data-entity-background><div class="card-key">СПРАВКА О СУЩНОСТИ — НЕ ДОКАЗАТЕЛЬСТВО СВЯЗИ</div>${p.refs.map(s=>riSourceReference({source_url:s.url,source_title:s.title,retrieval_status:'PASS04_RETAINED'})).join('')}</section>`;
  const state=riCardPresentation();
  return `<article class="source-card" data-provenance-id="${esc(p.relation_id)}" data-evidence-status="${esc(p.evidence_status)}"><div class="card-key">${esc(p.relation_id)}${p.verification_status==='UNESTABLISHED'?' · НЕ УСТАНОВЛЕНО':''}</div><div class="source-title">${esc(p.source_entity)} — ${esc(p.target_entity)}</div>${riCardCopy(riRelationWording(p),state)}<div class="card-key" data-provenance-status>${esc(riEvidenceLabel(p.evidence_status))}</div>${p.verification_status!=='UNESTABLISHED'?riCardCopy(p.supported_claim,state):''}${p.evidence_status==='MISSING'?'':p.evidence_refs.map(ref=>riSourceReference(ref,true,state)).join('')}${riScopedFacts(p,state)}${(p.context_refs||[]).map(ref=>'<div class="card-key">ТОЛЬКО КОНТЕКСТ, НЕ ДОКАЗАТЕЛЬСТВО ВЛИЯНИЯ</div>'+riSourceReference(ref,true,state)).join('')}</article>`;
 }).join('');
}
function riRouteText(rt,rid){
 return routeTopologyPaths(rt,rid).map(path=>path.reduce((text,id,i)=>{
  if(!i)return routeEndpointText(rt,id);
  const s=(rt.segmentsByRoute[rid]||[]).find(s=>s.source_entity_id===path[i-1]&&s.target_entity_id===id),p=s&&riSegmentRecord(rt,s);
  let join=' → ';
  if(p?.directed==='NO')join=' — ';
  if(p?.relation_id==='R020:S02')join=' — [контекст; принадлежность к команде не подтверждена] — ';
  else if(p?.relation_scope==='institutional')join=' — [сотрудничество коллективов] — ';
  else if(p?.relation_type==='SCIENTIFIC_CORRESPONDENCE')join=' — [переписка] — ';
  else if(p&&(p.evidence_status==='CONTEXTUAL'||p.evidence_status==='INHERITED'||p.relation_type.includes('CONTEXT')))join=' — [контекст] — ';
  return text+join+routeEndpointText(rt,id);
 },'')).join('; ');
}
function riAssertProvenance(rt){
 const ids=[...rt.historical.edges.map(e=>e.edge_id),...Object.values(rt.segmentsByRoute).flat().filter(s=>s.relation_type!=='BASE_EDGE_REF').map(riSegmentId)];
 const records=window.RI_RELATION_PROVENANCE.records,keys=Object.keys(records),set=new Set(ids);
 const missing=ids.filter(id=>!records[id]),orphans=keys.filter(id=>!set.has(id));
 const fields=['relation_id','evidence_status','evidence_refs','supported_claim','supported_relation_scope','locator','temporal_scope','verification_status','retrieval_status'];
 const malformed=keys.filter(id=>records[id].relation_id!==id||fields.some(f=>!(f in records[id]))||!riEvidenceLabel(records[id].evidence_status));
 window.RI_PROVENANCE_QA={displayed:ids.length,resolved:ids.filter(id=>records[id]).length,missing,orphans,malformed,unique:set.size};
 const expected=200+(window.RI_PERSON_EXTENSION?.relationsAdded||0)+(window.RI_RESEARCH_LINKS_EXTENSION?.historicalAdded||0)+(window.RI_RESEARCH_LINKS_EXTENSION?.segmentsAdded||0);
 if(ids.length!==expected||set.size!==expected||keys.length!==expected||missing.length||orphans.length||malformed.length)throw new Error('Relation provenance coverage failed');
 const counts=rows=>Object.fromEntries(['DIRECT','CONTEXTUAL','INHERITED','MISSING'].map(s=>[s,rows.filter(p=>p.evidence_status===s).length]));
 window.RI_PROVENANCE_COUNTS={historical:counts(keys.map(k=>records[k]).filter(p=>p.relation_class==='HISTORICAL')),modern:counts(keys.map(k=>records[k]).filter(p=>p.relation_class==='MODERN')),company_endpoints:counts(keys.map(k=>records[k]).filter(p=>p.company_endpoint))};
}
