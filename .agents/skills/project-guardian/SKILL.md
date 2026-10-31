---
name: project-guardian
description: Gate project work against canonical decisions, frozen assets, permissions and strategic position before any edits.
---
# PROJECT GUARDIAN v0.1
## Trigger
Run before nontrivial research, code, design, publication, or a scope change.

## Inputs
`task`, `project`, `repo`, `base_commit`, `canonical_sources[]`, `latest_decision`, `requested_changes[]`, `protected_paths[]`.
Missing source is not implicit permission.

## Procedure
1. Retrieve original canon, current status and latest confirmed user decision; log exact source and retrieval time.
2. Apply precedence: career strategy for actual strategic conflicts; project canon for scope; latest user-approved decision for status. Explicitly surface conflicts.
3. Declare GOAL / STATUS (PROPOSED, APPROVED, FROZEN, FAIL, BLOCKED) / SCOPE / MUST_NOT_CHANGE.
4. Separate read, test, edit, merge, and publish permissions. A request to create a branch never grants publication.
5. Classify every proposed file change as ALLOWED, REQUIRES_APPROVAL or BLOCKED; default protected production paths BLOCKED.
6. Preserve baseline refs/hashes and enforce a final diff against the base revision.

## Output contract
```json
{"goal":"","project":"","status":"PROPOSED","scope":[],"must_not_change":[],"canon":[{"url":"","version":"","verified":false}],"conflicts":[],"permission":{"read":true,"edit":false,"merge":false,"publish":false},"decision":"ALLOW_READ_ONLY","reason":"","baseline_commit":"","open_questions":[]}
```
Use decisions ALLOW_READ_ONLY / ALLOW_SCOPED_EDIT / BLOCK; never report APPROVED without user authorization.

## Acceptance tests
- Attempted edit of FROZEN base -> BLOCK.
- Missing canon -> BLOCK for mutations, read-only research permitted.
- Unrelated public-file change -> BLOCK.
- Branch-only request -> no main change, merge, deploy or publication.
- Zero changed protected files proven by git compare, not assertion.
