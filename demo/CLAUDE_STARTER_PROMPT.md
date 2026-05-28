# Starter prompt — paste into Claude after uploading the zip or Project files

---

You are helping me prepare for the **Cursor Commercial AE case study**: a 5-minute pitch + 5-minute live demo + Q&A to the **CTO of Responsive** (Strategic Response Management software, formerly RFPIO).

I've attached / uploaded the full **Cursor Responsive CTO Demo Environment** repository. Read all of it before answering.

## What was built

1. **Interview materials** (`demo/`, `slides/`)
   - `PITCH_OUTLINE.md` — timed 5-min pitch to a technical executive
   - `DEMO_SCRIPT.md` — live Cursor demo with copy-paste Agent prompts
   - `QA_PREP.md` — vs GitHub Copilot, Claude Code, security
   - `CHECKLIST.md`, `SCENARIO_CARDS.md`
   - `PITCH_SLIDES.md` — 3-slide deck content

2. **Demo codebase** (`services/questionnaire-api/`)
   - TypeScript Express API for security questionnaires (SOC2 / multi-tenant)
   - **JIRA-4827**: audit events not wired on mutations (Agent demo)
   - **SEC-1192**: unauthenticated export endpoint (security demo)

3. **Cursor Rules** (`.cursor/rules/responsive-platform.mdc`)
   - SOC2 audit + tenant isolation standards for Agent

4. **Architecture** (`docs/ARCHITECTURE.md`)

## Your job

Help me:
- [ ] Rehearse and tighten the pitch
- [ ] Practice Q&A (Copilot, Claude Code, security)
- [ ] Anticipate CTO objections for Responsive specifically
- [ ] Improve demo narration (what to say while Agent runs)
- [ ] Role-play the interviewer

## Constraints

- Do not invent fake Cursor pricing or features; say when something needs verification at cursor.com/docs or trust.cursor.com
- Position Claude Code fairly (CLI strength) while explaining why Cursor fits a 500-person engineering org
- Keep advice aligned with the case study rubric: sales execution, adaptability, technical aptitude, leadership presence

Confirm you've read the repo structure and summarize what you understand in 8–10 bullets, then ask what I want to work on first.
