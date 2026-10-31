---
name: research-engine
description: Build evidence-backed entity and relationship registries for ART.IS.YOU research maps with disciplined historical and technological attribution.
---
# RESEARCH ENGINE v0.1
## Inputs
`research_question`, `corpus_urls[]`, `canon_version`, `base_entity_ids[]`, `candidate_entities[]`, `candidate_relations[]`, `allowed_relation_types[]`.

## Procedure
1. Load canon/IDs before researching. Never alter a frozen base or turn external candidates into base people.
2. Source each claim with URL, publisher, title, date, exact passage/page and access date. Separate primary evidence from secondary commentary.
3. Classify edges: TEACHING, MENTORSHIP, COLLABORATION, SCHOOL_CONTINUITY, INSTITUTIONAL, METHOD_FAMILY, THEORY_LINEAGE, PRODUCT_RESEARCH. Do not infer mentorship from coauthorship or employment; institutional succession is not scientific lineage.
4. Grade VERIFIED_PRIMARY / VERIFIED_SECONDARY / INFERRED / UNVERIFIED / REJECTED. Only evidenced statements go to verified outputs; show uncertainty.
5. Evaluate cross-domain bridges: mechanism, unit of analysis, exact inference, limits/counterexample, and whether product deployment is evidenced.
6. Emit proposed additions only as a separate overlay with provenance and stable IDs. No publication.

## Output contract
```json
{"question":"","canon_ref":"","entities":[],"relations":[{"id":"","source_id":"","target_id":"","type":"","claim":"","evidence":[{"url":"","locator":"","quote_or_paraphrase":"","accessed":""}],"status":"UNVERIFIED","limits":"","forbidden_claims":[]}],"excluded":[],"hypotheses":[],"qa":{"valid_ids":false,"verified_links":0,"unverified_links":0,"source_coverage":0},"publication_allowed":false}
```
No invented URLs or fabricated quotes.

## Acceptance tests
- All VERIFIED relations have evidence and correct exact IDs (100%).
- All external persons remain in overlay; frozen base unchanged.
- R026 Osеледец + Фролов: collaboration/research/institution, NOT supervision.
- R010/11: METHOD_FAMILY, NOT attribution of Ozon/Avito recommender invention to people.
- R019 vs R020: theoretical WalkGNN relationship distinct from experimentally observed VK endpoint.
- Any missing source -> UNVERIFIED, not VERIFIED.
