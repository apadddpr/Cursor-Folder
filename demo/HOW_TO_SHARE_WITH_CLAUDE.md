# How to Share This Demo with Claude

Claude does **not** read files from `cursor.com` or your local disk unless you give it the files. Use one of the methods below.

---

## Best option: Upload a zip (most complete)

From the repo root:

```bash
chmod +x scripts/bundle-for-claude.sh
./scripts/bundle-for-claude.sh
```

This creates **`cursor-responsive-demo-export.zip`** (~50KB, no `node_modules`).

**In Claude.ai:**

1. Start a new chat or open a **Project** (recommended for interview prep).
2. Click **attach** / add to project knowledge → upload `cursor-responsive-demo-export.zip`.
3. Paste the starter prompt from [CLAUDE_STARTER_PROMPT.md](CLAUDE_STARTER_PROMPT.md).

**In Claude Code (terminal):** clone or unzip the repo in your working directory; Claude Code reads the filesystem directly.

---

## Second best: Claude Project + individual files

Create a Project named e.g. `Cursor AE Interview` and upload these files (drag from your cloned repo):

| Priority | Files |
|----------|--------|
| Must | `README.md`, `demo/DEMO_SCRIPT.md`, `demo/PITCH_OUTLINE.md`, `demo/QA_PREP.md` |
| Should | `docs/ARCHITECTURE.md`, `.cursor/rules/responsive-platform.mdc` |
| Code | All of `services/questionnaire-api/src/**` |
| Nice | `demo/SCENARIO_CARDS.md`, `slides/PITCH_SLIDES.md`, `demo/CHECKLIST.md` |

Then paste the starter prompt.

---

## Third: GitHub link (if Claude has web access)

Repo: `https://github.com/apadddpr/Cursor-Folder`  
Branch: `cursor/responsive-cto-demo-c168`

**Limitation:** Claude may not fetch every file reliably. Prefer zip or Project upload for “exact” context.

---

## Fourth: One-shot paste (quick feedback only)

For a single question, paste [CLAUDE_STARTER_PROMPT.md](CLAUDE_STARTER_PROMPT.md) plus one file (e.g. `DEMO_SCRIPT.md`). Too large to paste the whole repo.

---

## What Claude needs to understand “exactly” what was built

Tell Claude this structure:

```
Cursor-Folder/
├── demo/              # Interview scripts (pitch, demo, Q&A)
├── slides/            # 3-slide deck markdown
├── docs/              # Architecture for CTO
├── services/questionnaire-api/   # TypeScript demo API
│   └── src/           # Intentional JIRA-4827 + SEC-1192 gaps
└── .cursor/rules/     # Cursor Rules for Agent demo
```

**Intentional demo gaps:**

- **JIRA-4827** — audit logging not wired on POST/PATCH routes
- **SEC-1192** — `/v1/internal/export/:id` missing auth

---

## Suggested first message to Claude

Copy from [CLAUDE_STARTER_PROMPT.md](CLAUDE_STARTER_PROMPT.md).
