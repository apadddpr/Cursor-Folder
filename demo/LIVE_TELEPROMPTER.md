# Live Session Teleprompter — Start to Finish

**Print this page or keep it on a second monitor.**

You are **not** deploying a website to the internet. You are:

1. Opening a folder on your laptop in **Cursor**
2. **Sharing your screen** on Zoom/Google Meet
3. **Talking** while Cursor’s Agent edits files

No AWS, no Heroku, no production deploy required.

---

## PART A — One-time setup (do 24 hours before)

### A1. Install Cursor

1. Go to **https://cursor.com**
2. Download for Mac or Windows
3. Install and sign in

### A2. Get the project on your laptop

Open **Terminal** (Mac) or **PowerShell** (Windows). Paste:

```bash
git clone https://github.com/apadddpr/Cursor-Folder.git
cd Cursor-Folder
git checkout cursor/responsive-cto-demo-c168
```

If you don’t have git: install from https://git-scm.com or download the repo as ZIP from GitHub → Code → Download ZIP → unzip.

### A3. Open it in Cursor

1. Open **Cursor** app
2. **File → Open Folder**
3. Select the `Cursor-Folder` folder (the one that contains `demo`, `services`, `README.md`)
4. Click **Open**

You should see a **left sidebar** with folders: `demo`, `services`, `docs`, etc.

### A4. Optional — run the fake API (skip if nervous)

Only needed if you want to say “tests pass.” Not required for the interview.

```bash
cd services/questionnaire-api
npm install
```

If `npm` fails, skip this entire step—you can still demo Agent.

### A5. Increase font size

1. **Cursor → Settings** (gear icon) or `Cmd + ,` / `Ctrl + ,`
2. Search **Font Size** → set **16** or **18**
3. Close settings

### A6. Save your Agent prompts in Notes

Copy these two blocks into Apple Notes / Notepad:

**PROMPT 1 — JIRA-4827 (main demo):**
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

**PROMPT 2 — SEC-1192 (security):**
```text
Fix SEC-1192: secure GET /v1/internal/export/:questionnaireId per responsive-platform rules.
Require auth and org scoping.
```

---

## PART B — Interview day (30 min before)

| Step | Do this |
|------|---------|
| B1 | Restart laptop |
| B2 | Open **Cursor** with `Cursor-Folder` project |
| B3 | Open **Zoom/Meet** test your mic and camera |
| B4 | Open **Notes** with both prompts |
| B5 | Open these files as **tabs** in Cursor (click each in sidebar): |
|     | • `docs/ARCHITECTURE.md` |
|     | • `services/questionnaire-api/src/routes/questionnaires.ts` |
|     | • `.cursor/rules/responsive-platform.mdc` |
| B6 | Close Slack, email, anything embarrassing |
| B7 | Turn on **Do Not Disturb** |
| B8 | Have slides ready (optional) — 3 slides from `slides/PITCH_SLIDES.md` |

---

## PART C — When the call starts

### C1. Join meeting

1. Join Zoom/Meet link
2. **Share screen** → choose **Cursor** window (or entire screen if easier)
3. Say: *“Can you see my Cursor window okay?”*

### C2. Session structure (they will guide you)

| Block | Time | You use |
|-------|------|---------|
| Pitch | ~5 min | Slides + memorized opening (below) |
| Demo | ~5 min | **This teleprompter Part D** |
| Q&A | ~5–7 min | `demo/QA_PREP.md` |

---

## PART D — PITCH (5 minutes) — say this

**[SLIDE 1 or no slide] — 0:00**

> “Thanks for the time. I’ll keep this tight—five minutes on why Cursor matters for Responsive, then I’ll show the product live, not slides.
>
> You’re scaling an AI-powered platform where accuracy and auditability win Fortune 500 deals. Engineering feels the same pressure: ship questionnaire and compliance features fast, without widening security review backlog.
>
> Development is shifting from autocomplete in a single file to **agents** that work across the whole codebase—with your standards built in.”

**[SLIDE 2] — 1:30**

> “Cursor is an **AI-native IDE**, not a plugin. Your codebase is the context layer. **Rules** encode how Responsive builds—SOC2 audit patterns, tenant isolation. **Agents** implement multi-file tickets under human review. **Enterprise controls**—Privacy Mode, SSO, Trust Center—match what your customers ask you in security questionnaires.”

**[SLIDE 3] — 3:00**

> “Outcomes: faster cross-cutting delivery, same PR and CI gates, governed AI across US and Coimbatore. A sensible pilot is one platform team plus one product squad for thirty days, measuring PR cycle time on tickets that touch three or more files.
>
> Let me show you what that looks like in Cursor on work that resembles your world.”

**→ Go to Part E (Demo)**

---

## PART E — DEMO (5 minutes) — clicks + words

### E0 — Transition (10 sec)

**Click:** Cursor window (already shared)

**Say:**

> “This is a small example inspired by your domain—security questionnaires, audit trails, multi-tenant access. Not your production repo—a realistic slice for five minutes.”

---

### E1 — Show the problem (45 sec)

**Click:** Tab `docs/ARCHITECTURE.md`

**Scroll to:** section **“Known gaps”**

**Say:**

> “Scenario: ticket JIRA-4827. Every create or update on a security questionnaire must write an audit log—for SOC2 and for enterprise customers. The audit utility exists, but it’s not connected everywhere. That’s a common type of work: several files, easy to miss one, expensive at your scale.”

**Click:** Tab `questionnaires.ts`

**Point** (mouse) at line with `TODO(JIRA-4827)` — don’t read code

**Say:**

> “Your engineers would see a TODO like this. The point is cross-file compliance work—not the syntax.”

---

### E2 — Show Rules (30 sec)

**Click:** Tab `responsive-platform.mdc`  
(Path: `.cursor/rules/responsive-platform.mdc`)

**Say:**

> “Responsive would document standards here—Cursor Rules. Always audit mutations, always scope by customer org. Every developer and every agent session follows the same bar. That’s governance at scale.”

---

### E3 — Open Agent (15 sec)

**How to open Agent in Cursor:**

- **Mac:** `Cmd + I` or click **Composer/Agent** in the right sidebar  
- **Windows:** `Ctrl + I` or same sidebar icon  
- Or: **Cmd/Ctrl + Shift + P** → type **“Composer”** or **“Agent”** → Enter

You should see a **chat panel** where you can type instructions.

**Say:**

> “I’m opening Cursor’s Agent—the same surface engineers use for multi-file tasks.”

---

### E4 — Run main Agent demo (2 min)

**Click:** In Agent chat box

**Paste:** **PROMPT 1** from your Notes (`Cmd+V` / `Ctrl+V`)

**Press:** **Enter**

**While waiting — keep talking (repeat until done):**

> “I described the business outcome, not line-by-line code.
>
> First—it’s reading **multiple files**, not just one tab.
>
> Second—our **Rules** apply automatically.
>
> Third—we’ll get a **diff** for review. Nothing merges from here. PR, CI, human approval—that’s unchanged.”

**When you see a diff / file changes:**

**Click:** Through changed files in the diff view (green highlights)

**Say:**

> “I’d skim this like a tech lead: audit logging on create and update flows, tests included. What might be forty-five to ninety minutes of careful editing becomes a supervised review in minutes.”

**If Agent asks a question:** type “Yes, proceed” or “Implement as described.”

**If Agent errors:** say aloud:

> “Same as any tool—I’d refine the prompt. Let me try again.”  
> Re-paste PROMPT 1.

---

### E5 — Security fix (60 sec)

**Click:** Agent chat (same thread or **New Agent** — either works)

**Paste:** **PROMPT 2**

**Press:** Enter

**While it runs:**

> “Second scenario—a pen-test style finding: an export endpoint without proper authentication. Same workflow: describe fix, Rules apply, engineer reviews diff.”

**When done:**

**Click:** `services/questionnaire-api/src/index.ts` in the diff if visible

**Say:**

> “Auth added on that export path. Velocity and risk in one workflow.”

---

### E6 — Close demo (20 sec)

**Say:**

> “Recap: Cursor doesn’t replace engineers or SOC2. It gives them an AI-native workspace—completion, chat, and agents sharing the same codebase context and Rules. For Responsive, the question is standardizing **speed and governance** as you scale globally. Happy to go deeper on security, Copilot comparison, or pilot design in Q&A.”

**Stop sharing screen** only if they ask you to.

---

## PART F — Q&A — quick redirects

| If they ask… | You say… |
|--------------|----------|
| Copilot | “Great in-file; Cursor is built for multi-file agents + Rules + full IDE. Teams often pilot both on the same ticket type.” |
| Claude Code | “Strong terminal agent; Cursor fits mixed skill levels and visual diff review across a large org.” |
| Security / training data | “Privacy Mode and Trust Center—code not used for training. I’ll get an SE for your security questionnaire on subprocessors.” |
| Something too technical | “I want to be precise—I’ll follow up with Solutions. Strategically, the win is [velocity / risk / governance].” |

Full answers: `demo/QA_PREP.md`

---

## PART G — Where is everything? (map)

```
Your laptop
└── Cursor app
    └── Open Folder: Cursor-Folder/
        ├── demo/          ← scripts you read (this file)
        ├── docs/          ← ARCHITECTURE.md (show problem)
        ├── services/      ← fake API (Agent edits files here)
        └── .cursor/rules/ ← Rules file (show governance)
```

**Nothing is hosted on cursor.com.**  
**Nothing is deployed to the cloud for this demo.**

---

## PART H — Troubleshooting during the call

| Problem | Fix |
|---------|-----|
| They can’t see screen | Re-share → Cursor window only |
| Can’t find Agent | `Cmd/Ctrl + I` or Command Palette → “Composer” |
| Sidebar missing | **View → Appearance → Show Primary Side Bar** |
| Agent slow | Keep narrating the three bullets (multi-file, Rules, diff) |
| No git / no clone | Download ZIP from GitHub, unzip, File → Open Folder |
| Panic | Pause, breathe, read E6 close paragraph |

---

## PART I — 60-second mental model

1. **Pitch** = business story (Responsive, velocity, risk)  
2. **Demo** = open folder → show problem → show Rules → Agent + paste prompt → talk during wait → show diff → second prompt → close  
3. **Q&A** = honest, redirect deep tech to SE  

**You are the tour guide. Cursor is the product. The code is a prop.**

---

## Checklist right before “Share screen”

- [ ] Cursor open on `Cursor-Folder`
- [ ] Font size 16+
- [ ] Tabs: ARCHITECTURE, questionnaires.ts, rules file
- [ ] Both prompts in Notes
- [ ] This teleprompter on second screen or printed
- [ ] Water nearby
- [ ] Smile — you’ve rehearsed the story
