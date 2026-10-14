# BOGOBOT reproducible export

The editable system source is `julchernysheva/bogobot`. Do not edit generated `bogobot/` files.

From this repository, run:

```sh
python3 tools/export-bogobot.py /absolute/path/to/bogobot APPROVED_FULL_COMMIT_SHA
```

The exporter reads committed files only, verifies previous generated hashes, exports the complete runtime asset/source banks, adapts the public origin to `https://artisyou.ru/bogobot/`, and updates the owned host sitemap entries. It refuses overwritten generated files. It performs no network, commit, push or deployment.

`bogobot-export-manifest.json` records the source commit, inclusion reasons, excluded files, source/export SHA-256 and every origin substitution. Source app logic, graph geometry, corpus, BOOKS, GLAS and Reader are not rewritten.

ART.IS.YOU maintains only its page integration: the graph iframe in `godbot-research.js`, the lazy topography iframe in `godbot-seven-selector.js` and its scoped CSS. Service counts in the existing page modules describe the exported graph. Future approved graph-size changes require an explicit integration review; the exporter does not infer editorial changes.

After each export run the route, source-HTML, lazy dependency, embedded page and 390/768/1440 browser gates before publication. Keep the GitHub Pages mirror untouched until the new host is successfully deployed and live-verified. Its canonical switch is a separate reviewed operation.
