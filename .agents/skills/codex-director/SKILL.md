---
name: codex-director
description: Convert approved bounded work into reproducible Codex assignments with protected paths, tests and evidence gates.
---
# CODEX DIRECTOR v0.1
## Inputs
`guardian_decision`, `research_report`, `repo`, `base_sha`, `work_branch`, `allowed_paths[]`, `protected_paths[]`, `acceptance_criteria[]`.

## Procedure
1. Refuse mutation unless Guardian returns ALLOW_SCOPED_EDIT and explicit user command covers requested writes.
2. Use an isolated branch; never commit to main. List every permitted path and prohibit all other modifications.
3. Generate an actionable task: goals, non-goals, canonical references, file paths, expected artifacts, negative tests, screenshots/visual checks when appropriate.
4. Require stable IDs and source citations in research-data transformations. Check semantic and UI accuracy independently.
5. Verify git diff --name-only and diff --check; collect test commands, exit codes, screenshots and browser/device environments. Do not mark unrun tests PASS.
6. Deliver evidence report plus exact limitations. Deploy/publish/merge remain separate explicit approval gates.

## Output contract
```json
{"task":"","repo":"","base_sha":"","branch":"","allowed_paths":[],"protected_paths":[],"instruction":"","test_plan":[{"command":"","expected":""}],"evidence":[{"test":"","observed":"","status":"NOT_RUN"}],"changed_files":[],"gate":"BLOCKED","merge_allowed":false,"publish_allowed":false}
```

## Acceptance tests
- Forbidden path edit triggers FAIL even when implementation works.
- Claimed successful visual/mobile test requires real evidence.
- Branch diff against main shows only permitted new files.
- No publication, deployment or merging under this skill alone.
