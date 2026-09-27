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
 if(/OPEN_ERROR|TIMEOUT|UNAVAILABLE|403|404/.test(s))return 'ДОСТУП: источник временно недоступен; статус доказательства сохранён';
 if(/INDEXED/.test(s))return 'ДОСТУП: проверен индексированный фрагмент; полная загрузка не подтверждена';
 if(/RETRIEVED/.test(s))return 'ДОСТУП: текст проверен при аудите';
 return 'ДОСТУП: повторная загрузка в этом проходе не проверялась';
}
function riSourceReference(ref,allowLink=true){
 const usable=allowLink&&/^https?:\/\/[^\s]+$/.test(ref.source_url||'')&&!/WRONG_URL|BROKEN|404|INVALID_URL/.test(ref.retrieval_status||'');
 return `<section class="card-block"><div class="source-title">${esc(ref.source_title||'Источник')}</div>${ref.locator?`<div class="card-copy">${esc(ref.locator)}</div>`:''}<div class="card-key" data-provenance-status>${esc(riRetrievalLabel(ref))}</div>${usable?`<a class="source-link" href="${esc(ref.source_url)}" target="_blank" rel="noopener">ОТКРЫТЬ ИСТОЧНИК ↗</a>`:''}</section>`;
}
function riEvidenceCards(items){
 if(!items.length)return '<div class="card-empty">Для этой сущности нет отображаемых отношений с записью provenance.</div>';
 return items.map(p=>{
  if(p.background)return `<section class="card-block" data-entity-background><div class="card-key">СПРАВКА О СУЩНОСТИ — НЕ ДОКАЗАТЕЛЬСТВО СВЯЗИ</div>${p.refs.map(s=>riSourceReference({source_url:s.url,source_title:s.title,retrieval_status:'PASS04_RETAINED'})).join('')}</section>`;
  return `<article class="source-card" data-provenance-id="${esc(p.relation_id)}" data-evidence-status="${esc(p.evidence_status)}"><div class="card-key">${esc(p.relation_id)}</div><div class="source-title">${esc(p.source_entity)} — ${esc(p.target_entity)}</div><div class="card-copy">${esc(riRelationWording(p))}</div><div class="card-key" data-provenance-status>${esc(riEvidenceLabel(p.evidence_status))}</div>${p.supported_claim?`<div class="card-copy">${esc(p.supported_claim)}</div>`:''}${p.evidence_status==='MISSING'?'':p.evidence_refs.map(ref=>riSourceReference(ref)).join('')}</article>`;
 }).join('');
}
function riRouteText(rt,rid){
 return routeTopologyPaths(rt,rid).map(path=>path.reduce((text,id,i)=>{
  if(!i)return routeEndpointText(rt,id);
  const s=(rt.segmentsByRoute[rid]||[]).find(s=>s.source_entity_id===path[i-1]&&s.target_entity_id===id),p=s&&riSegmentRecord(rt,s);
  let join=' → ';
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
 if(ids.length!==201||set.size!==201||keys.length!==201||missing.length||orphans.length||malformed.length)throw new Error('Relation provenance coverage failed');
 const counts=rows=>Object.fromEntries(['DIRECT','CONTEXTUAL','INHERITED','MISSING'].map(s=>[s,rows.filter(p=>p.evidence_status===s).length]));
 window.RI_PROVENANCE_COUNTS={historical:counts(keys.map(k=>records[k]).filter(p=>p.relation_class==='HISTORICAL')),modern:counts(keys.map(k=>records[k]).filter(p=>p.relation_class==='MODERN')),company_endpoints:counts(keys.map(k=>records[k]).filter(p=>p.company_endpoint))};
}
