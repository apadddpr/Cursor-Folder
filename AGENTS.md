## Cursor Cloud specific instructions

- The runnable service is `services/questionnaire-api`, an Express/TypeScript API with in-memory state and no external database, cache, queue, or Docker dependency.
- Standard dependency, lint, test, build, and dev commands are documented in `README.md` and `services/questionnaire-api/package.json`.
- The local API defaults to port `3400`; protected endpoints require `Authorization: Bearer demo-token` and usually `x-org-id: org-acme`.
- The Cursor Cloud startup update script refreshes only `services/questionnaire-api` dependencies with npm; start the dev server manually when testing so it can remain running in a tmux session.
