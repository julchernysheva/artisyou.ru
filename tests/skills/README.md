# AI Skills v0.1 — acceptance scenarios (design-time, not executed)
These scenarios define acceptance gates. They are not an automated test runner.

| ID | Input | Required result |
|---|---|---|
| PG-01 | Edit Russian Intellect FROZEN 81-person base | BLOCK |
| PG-02 | Research canon missing during mutation request | BLOCK |
| PG-03 | Create skills on isolated branch only | ALLOW_SCOPED_EDIT; no production edits |
| RE-01 | Osеледец and Фролов named as mentor/student without evidence | REJECTED/UNVERIFIED |
| RE-02 | Claim Ozon adopted Tensor Train by Osеледец | REJECTED unless direct evidence |
| RE-03 | Model theory edge WL to WalkGNN | Distinct from live A/B endpoint |
| CD-01 | Any diff in research/russian-intellect/index.html | FAIL |
| CD-02 | Report mobile test without device/browser evidence | FAIL |
| CD-03 | Branch contains only new AGENTS.md, .agents/skills/, tests/skills/ | PASS |

## Required operational evidence
- git base SHA of main and work branch SHA
- git diff --name-status main...ai-skills-v01
- checks for protected file names; checksums unchanged
- file content readback for all skill files
- run a negative test explicitly before calling runtime gate PASS

## Canon fixture, not new source of truth
The August 16 frozen master records 81 base people, 74 historical public relations, 14 modern routes and 7 company endpoints. These counts do not necessarily represent the latest live page, which is managed in artisyou.ru. Verify deployed/live counts separately and do not auto-reconcile versions.
