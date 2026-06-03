# START HERE — Interview Prep (4 files only)

Everything else was removed so you don’t get confused.

---

## Your 4 files

| File | Use |
|------|-----|
| **[demo/MASTER_TALK_TRACK_CONVERSATIONAL.md](demo/MASTER_TALK_TRACK_CONVERSATIONAL.md)** | **Say this** — intro, slides (Part 1), demo (Part 2) |
| **[demo/DEMO_CLICK_ONLY.md](demo/DEMO_CLICK_ONLY.md)** | **Click this** — print or second screen |
| **[demo/QA_PREP.md](demo/QA_PREP.md)** | **Q&A** — night before + after demo |
| **[demo/PRACTICE_SAFELY.md](demo/PRACTICE_SAFELY.md)** | Reset after practice in `Cursor-Folder-PRACTICE` |

**Optional:** [demo/CURSOR_3_MAC_GUIDE.md](demo/CURSOR_3_MAC_GUIDE.md) — only if a shortcut fails.

**Slides:** Your Google Slides (you built them). Backup: [slides/pitch-deck.html](slides/pitch-deck.html).

**Prompts:** Copy into Notes from bottom of this file.

---

## Practice order

1. `PRACTICE_SAFELY` — create `Cursor-Folder-PRACTICE`
2. `DEMO_CLICK_ONLY` — clicks only ×2
3. `MASTER_TALK_TRACK_CONVERSATIONAL` — full run ×3
4. `QA_PREP` — read once

**Interview day:** open **`Cursor-Folder`** (not PRACTICE). Share slides → then Cursor.

---

## Day-before (10 min)

- [ ] `git pull` · open `Cursor-Folder`
- [ ] One full rehearsal (intro + slides + demo)
- [ ] Prompts in Notes · font size 16+ in Cursor
- [ ] `DEMO_CLICK_ONLY` printed or on second monitor

---

## Agent prompts (Notes app)

**Prompt 1:**
```text
Implement JIRA-4827: wire SOC2 audit logging for all questionnaire and response mutations.

Requirements:
- Use recordAuditEvent from src/services/auditLogger.ts
- Follow .cursor/rules/responsive-platform.mdc
- Cover: POST /v1/questionnaires, PATCH .../status, POST .../responses
- Add vitest tests proving audit events are created
- Do not change the internal export route yet

After editing, summarize what changed for a PR description.
```

**Prompt 2:**
```text
Fix SEC-1192: secure GET /v1/internal/export/:questionnaireId per responsive-platform rules.
Require auth and org scoping.
```

---

## Not used for this interview

- cursor.com/agents (browser)
- GitHub in browser during the call
- `docs/ARCHITECTURE.md` — only if you want extra context (optional read)
