# Demo Click Card — Left / Right / Say One Line

**Print this page.** Keep `MASTER_TALK_TRACK_CONVERSATIONAL.md` for full sentences.

**Rule:** If you get lost, click **LEFT sidebar → demo → MASTER_TALK_TRACK** to reorient. Say: *"Let me pull up the compliance ticket example."*

---

## Your screen (memorize this)

```
┌──────────────┬─────────────────┬──────────────────────┐
│   LEFT       │    CENTER       │    RIGHT             │
│   file tree  │    (file text)  │    "New Agent" box   │
│   click here │    optional     │    PASTE PROMPTS HERE│
│   to open    │    look here    │    ← ONLY HERE       │
│   files      │    with mouse   │    for AI            │
└──────────────┴─────────────────┴──────────────────────┘
```

**Never paste prompts in the center.** Only the **RIGHT** box.

---

## Before the call (5 min)

| # | LEFT sidebar | RIGHT panel |
|---|--------------|-------------|
| P1 | Click **Cursor-Folder** at top (already open) | Press **Shift+Cmd+L** — box appears on right |
| P2 | — | Copy **Prompt 1** from bottom of this page into **Notes** |
| P3 | Click **docs** → **ARCHITECTURE.md** | — |
| P4 | Click **services** → **questionnaire-api** → **src** → **routes** → **questionnaires.ts** | — |
| P5 | Click **.cursor** → **rules** → **responsive-platform.mdc** | — |

Done. Close everything else. Leave these 3 tabs/files ready.

---

## LIVE DEMO — 14 steps (do in order)

### SHOW FILES (clicks on LEFT only)

| Step | WHERE | CLICK / DO | SAY (short) |
|------|-------|------------|-------------|
| **1** | LEFT | **docs** → **ARCHITECTURE.md** | "Small example inspired by security questionnaires." |
| **2** | CENTER | Scroll with mouse wheel until you see **Known gaps** | "Ticket 4827—audit logging missing in places." |
| **3** | LEFT | **services** → **questionnaire-api** → **src** → **routes** → **questionnaires.ts** | "Engineers see a TODO like this." |
| **4** | CENTER | Point mouse at line with **TODO(JIRA-4827)** — don't read code | "Cross-file compliance work." |
| **5** | LEFT | **.cursor** → **rules** → **responsive-platform.mdc** | "Rules—your standards for every dev and every agent." |
| **6** | CENTER | Scroll slowly (anywhere) | "Before AI writes anything." |

### ONBOARDING (RIGHT panel)

| Step | WHERE | CLICK / DO | SAY (short) |
|------|-------|------------|-------------|
| **7** | RIGHT | Click inside text box ("Plan, Build…") | "Ramp first—then we'll fix the ticket." |
| **8** | KEYBOARD | **Cmd + .** → tap **Ask** if menu shows (if no menu, skip) | — |
| **9** | RIGHT | Paste onboarding text below → press **Return** | "Same codebase for learning and shipping." |
| **10** | RIGHT | Wait. Skim answer. Don't read it all. | "Grounded in your repo, not generic web." |

**Onboarding paste:**
```text
I'm a new engineer on day 3 at Responsive. Explain how multi-tenant isolation works in this questionnaire API and where we could accidentally expose one customer's data to another.
```

### AGENT (RIGHT panel only)

| Step | WHERE | CLICK / DO | SAY (short) |
|------|-------|------------|-------------|
| **11** | KEYBOARD | **Cmd + .** → tap **Agent** OR press **Shift+Tab** in the box | "Now shipping—not just learning." |
| **12** | RIGHT | Paste **PROMPT 1** from Notes → **Return** | "I describe the outcome. Watch multiple files, Rules, then a diff." |
| **13** | RIGHT | Wait 30–90 sec. Keep talking (see below). | Repeat while waiting ↓ |
| **14** | RIGHT | When done, click any **file names** in the reply | "Tech lead review—minutes not hours." |
| **15** | RIGHT | Paste **PROMPT 2** → **Return** | "Security fix—same workflow." |
| **16** | RIGHT | Wait. Glance at changes. | "Velocity and risk together." |
| **17** | CAMERA | Stop clicking. Look at camera. | "Recap: learn faster, ship faster, same PR process. Q&A?" |

### While step 12–13 runs, repeat these 3 lines:

1. "Multiple files—not just one tab."
2. "Rules already applied."
3. "Diff for review—nothing merges without your PR."

---

## If something goes wrong

| Problem | Fix (1 action) |
|---------|----------------|
| Can't find RIGHT box | **Shift + Cmd + L** |
| Pasted in wrong place | Click RIGHT box, **Cmd+A**, paste again |
| Agent asks "Proceed?" | Type **yes** → Return |
| Agent stuck 2+ min | Say "I'll nudge it" → paste PROMPT 1 again |
| Opened wrong file | LEFT sidebar → click correct file |
| Blank center | Normal. Use LEFT + RIGHT only |
| Panic | Read step **17** recap anyway — you already showed Rules + files |

---

## PROMPT 1 (copy to Notes)

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

## PROMPT 2 (copy to Notes)

```text
Fix SEC-1192: secure GET /v1/internal/export/:questionnaireId per responsive-platform rules.
Require auth and org scoping.
```

---

## Practice method (30 min)

1. **Run steps 1–17 with zero talking** — just clicks. Twice.
2. **Run steps 1–17 saying only the short SAY column** — once.
3. **Full words from MASTER_TALK_TRACK Part 2** — once.

You will not deviate if your **hands** know the 17 steps.

---

## What you are NOT clicking

- ❌ Terminal (bottom) — ignore unless you want to
- ❌ "Agents Window ↗" (top right) — ignore
- ❌ cursor.com in browser — ignore
- ❌ GitHub — ignore during demo
- ❌ Center empty area for typing prompts — never
