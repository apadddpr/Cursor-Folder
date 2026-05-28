# Live Demo Script — Cursor for Responsive (5 minutes)

**Prereqs (do these before the interview):**

1. Clone/open this repo in **Cursor** (not VS Code alone).
2. `cd services/questionnaire-api && npm install && npm run dev` (optional—demo works without running server).
3. Enable **Privacy Mode** in settings if discussing security (mention verbally).
4. Have **Agent** mode ready; increase font size for screen share.

**Repo story:** Platform team must close **JIRA-4827** (SOC2 audit logging) before an enterprise customer's security review.

---

## Segment 1 (1:00) — Orient the CTO in the codebase

**Say:**

> "This is a simplified questionnaire API—the same compliance surfaces your product team ships against: multi-tenant auth, mutation endpoints, audit trail."

**Do:**

1. Open `docs/ARCHITECTURE.md` — scroll to "Known gaps".
2. **Cmd+Shift+P** → mention Command Palette (power users).
3. Open `services/questionnaire-api/src/routes/questionnaires.ts` — point at `TODO(JIRA-4827)`.

**Optional Ask mode (15 sec):** Select the TODO line → Chat → Ask:

```text
What files must change to satisfy JIRA-4827 and our platform rules?
```

**Point out:** Answer should cite `auditLogger.ts`, both route files, `.cursor/rules`, and tests—proves codebase context.

---

## Segment 2 (2:30) — Agentic implementation (hero moment)

**Say:**

> "Instead of manually threading audit calls across files, we delegate to Agent—with your engineering rules already loaded."

**Do:** Open **Agent** (Composer). Paste this prompt exactly:

```text
Implement JIRA-4827: wire SOC2 audit logging for all questionnaire and response mutations.

Requirements:
- Use recordAuditEvent from src/services/auditLogger.ts
- Follow .cursor/rules/responsive-platform.mdc (action names, orgId, actorId from req.auth)
- Cover: POST /v1/questionnaires, PATCH .../status, POST .../responses
- Add vitest tests proving audit events are created
- Do not change the internal export route yet

After editing, summarize what changed for a PR description.
```

**While Agent runs, narrate (critical for executives):**

- "It indexed multiple files—not just the active tab."
- "Rules enforced our SOC2 naming conventions without me repeating them."
- "I'd still open a PR; CI and human reviewers stay in the loop."

**When diff appears:**

1. Show `questionnaires.ts` + `responses.ts` — `recordAuditEvent` calls.
2. Show new/updated test file.
3. Mention **Accept** / partial accept / iterate in chat.

**Say:**

> "A task that might be 45–90 minutes of careful threading is now a supervised review of a coherent diff."

---

## Segment 3 (1:00) — Security scenario (differentiation)

**Say:**

> "Second scenario: security review flagged an unauthenticated export endpoint."

**Do:** New Agent thread (or follow-up):

```text
Fix SEC-1192: secure GET /v1/internal/export/:questionnaireId per responsive-platform rules.
Require auth and org scoping. Add a brief comment only if non-obvious.
```

Show `src/index.ts` diff — `requireAuth` added, org check.

**Say:**

> "Same agent, same rules—security patterns stay consistent across the team."

---

## Segment 4 (0:30) — Features lightning round (if time)

| Feature | 10-second demo |
|---------|----------------|
| **Tab completion** | Type `recordAuditEvent({` in a route—show inline suggestion |
| **@ references** | Type `@auditLogger` in chat |
| **Rules** | Open `.cursor/rules/responsive-platform.mdc` |
| **Terminal** | Agent can run `npm test` (offer to run if time) |
| **MCP** (mention only) | "Connect Jira, Linear, or internal docs—agent pulls live context" |

---

## Segment 5 (0:30) — Close demo → Q&A

**Say:**

> "Nothing here bypasses your process: git history, PR review, and SOC2 controls remain. Cursor accelerates the *implementation* layer your customers never see—but that determines how fast you deliver what they do see."

**Teardown offer:** "Happy to go deeper on Privacy Mode, Copilot comparison, or rollout models."

---

## Backup prompts (if Agent finishes early)

**Plan mode mention:**

```text
Plan a migration from in-memory store to Postgres with zero downtime—don't implement yet.
```

**Multi-file refactor:**

```text
Add Zod-validated query param ?status= to GET /v1/questionnaires with tests.
```

---

## What NOT to do

- Don't run a 10-minute Agent task—keep scope to audit + auth.
- Don't claim Cursor replaces code review or SOC2 auditors.
- Don't bash competitors—contrast on **full IDE + context + enterprise** (see `QA_PREP.md`).
