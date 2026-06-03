# START HERE — One Path (Ignore Everything Else on Interview Day)

You only need **one script** and **one shortcut card**.

---

## THE script (read this out loud)

### → [`demo/MASTER_TALK_TRACK_CONVERSATIONAL.md`](demo/MASTER_TALK_TRACK_CONVERSATIONAL.md) ← **recommended**

**Use for:** every word you say — natural, professional, less jargon.

### → [`demo/MASTER_TALK_TRACK.md`](demo/MASTER_TALK_TRACK.md)

Original version (more formal / technical). Use if you prefer denser language.

### → [`demo/DEMO_CLICK_ONLY.md`](demo/DEMO_CLICK_ONLY.md) ← **PRINT THIS**

**Use for:** exactly where to click (LEFT vs RIGHT). Practice hands-first so you don’t deviate.

**This replaces:** `DEMO_SCRIPT.md`, `LIVE_TELEPROMPTER.md`, and `PITCH_OUTLINE.md` for the live session.

**Interview day:** Phone = MASTER (words). Desk = DEMO_CLICK_ONLY (clicks).

### → [`demo/DEMO_PREP_GAME.html`](demo/DEMO_PREP_GAME.html) ← **PRACTICE GAME**

**Use for:** quiz, 17-step click simulator, Mac shortcuts, and Agent prompt recall. Open in any browser (double-click the file).

---

## THE Mac shortcuts (glance only)

### → [`demo/CURSOR_3_MAC_GUIDE.md`](demo/CURSOR_3_MAC_GUIDE.md)

**Use for:** only if a hotkey fails — especially **Shift+Cmd+L** (New Agent) and **Cmd+.** (Ask vs Agent)

---

## Everything else (reference, not “sources of truth”)

| File | When to open it |
|------|-----------------|
| [`demo/QA_PREP.md`](demo/QA_PREP.md) | Night before + Q&A section of interview |
| [`demo/CHECKLIST.md`](demo/CHECKLIST.md) | Day before (prep timeline) |
| [`slides/PITCH_SLIDES.md`](slides/PITCH_SLIDES.md) | Once — to build 3 Google Slides |
| [`demo/SCENARIO_CARDS.md`](demo/SCENARIO_CARDS.md) | Optional 1-page printout for prompts |
| `DEMO_SCRIPT.md` | **Skip** — duplicated in MASTER |
| `LIVE_TELEPROMPTER.md` | **Skip** — duplicated in MASTER |
| `PITCH_OUTLINE.md` | **Skip** — duplicated in MASTER |
| `NON_TECHNICAL_PLAYBOOK.md` | **Skip** unless you want extra Q&A phrasing |
| `HOW_TO_SHARE_WITH_CLAUDE.md` | Only if sharing repo with Claude |
| `RECORD_YOUR_DEMO_VIDEO.md` | Only if recording practice Loom |

---

## Copy these 2 prompts into Notes (from MASTER — don’t hunt files)

**Prompt 1 — JIRA-4827:**
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

**Prompt 2 — SEC-1192:**
```text
Fix SEC-1192: secure GET /v1/internal/export/:questionnaireId per responsive-platform rules.
Require auth and org scoping.
```

---

## Interview day in 4 steps

1. **Slides** — 3 slides from `slides/PITCH_SLIDES.md` (or from MASTER Part 1)
2. **Screen share Cursor** — folder `Cursor-Folder` open (what you showed in your screenshot)
3. **Follow** `MASTER_TALK_TRACK.md` Part 2 for demo
4. **Q&A** — `QA_PREP.md`

**You are not using:** GitHub in browser, cursor.com/agents, or “deploy” anything.

---

## Still confused?

You have **one source of truth:** `demo/MASTER_TALK_TRACK.md`  

Delete the mental clutter. The other files are drafts and backups.
