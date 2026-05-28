# Cursor AE Case Study — Responsive CTO Demo Environment

Everything you need to **pitch** (5 min), **demo** (5 min), and **handle Q&A** (5–7 min) for the Cursor Commercial AE case study—positioned for the CTO of **Responsive** (Strategic Response Management platform).

## Start here

| Order | Document | Purpose |
|-------|----------|---------|
| 0 | **[demo/NON_TECHNICAL_PLAYBOOK.md](demo/NON_TECHNICAL_PLAYBOOK.md)** | **Start here if you're not from engineering** — what to say word-for-word |
| 1 | [demo/CHECKLIST.md](demo/CHECKLIST.md) | Prep timeline |
| 2 | [demo/PITCH_OUTLINE.md](demo/PITCH_OUTLINE.md) | Word-for-word 5-min pitch |
| 3 | [slides/PITCH_SLIDES.md](slides/PITCH_SLIDES.md) | 3-slide deck content |
| 4 | [demo/DEMO_SCRIPT.md](demo/DEMO_SCRIPT.md) | Live Cursor demo steps + Agent prompts |
| 5 | [demo/QA_PREP.md](demo/QA_PREP.md) | Copilot, Claude Code, security answers |
| 6 | [demo/SCENARIO_CARDS.md](demo/SCENARIO_CARDS.md) | One-page cheat sheet |

## Demo codebase

A realistic **security questionnaire API** (`services/questionnaire-api/`) with intentional gaps for Agent demos:

- **JIRA-4827** — SOC2 audit logging not wired on mutations
- **SEC-1192** — Unauthenticated internal export endpoint

Engineering standards live in [.cursor/rules/responsive-platform.mdc](.cursor/rules/responsive-platform.mdc).

```bash
cd services/questionnaire-api
npm install
npm run dev    # http://localhost:3400
npm test
```

Example request:

```bash
curl -s -H "Authorization: Bearer demo-token" -H "x-org-id: org-acme" \
  http://localhost:3400/v1/questionnaires | jq
```

## How this maps to the rubric

| Rubric area | Where it's covered |
|-------------|-------------------|
| Sales execution | `PITCH_OUTLINE.md` — business value, Responsive-specific hooks |
| Adaptability | SDLC trends + SRM/compliance framing |
| Technical aptitude | `DEMO_SCRIPT.md` — Agent, Rules, Ask, multi-file diffs |
| Leadership presence | Executive metrics, pilot CTA, questions to ask them |

## Architecture

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md).

## External resources (from assignment)

- https://cursor.com
- https://cursor.com/docs
- https://trust.cursor.com
- Cursor blog & webinar recordings

## Share with Claude (or another AI)

See [demo/HOW_TO_SHARE_WITH_CLAUDE.md](demo/HOW_TO_SHARE_WITH_CLAUDE.md). Quick: run `./scripts/bundle-for-claude.sh` and upload the zip to a Claude Project.

Good luck in your interview.
