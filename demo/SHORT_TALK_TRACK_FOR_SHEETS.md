# Short Talk Track — Copy into Google Sheets

**Target:** ~8–9 min spoken + agent run time (~1–2 min while you talk over it)  
**Tone:** Same conversational style, fewer words.

**Columns for Sheets:** `Section` | `Click` | `Say`

Copy everything below the line into a sheet (one row per line).

---

## IF STILL OVER TIME — CUT IN THIS ORDER

| Cut | Time saved | What you lose |
|-----|------------|----------------|
| **1. Prompt 2 (SEC-1192) entire run** | ~2–3 min | Second wow — **best cut**; point at gap on ARCHITECTURE or Ask answer: "export risk—same Agent workflow, we can do in follow-up" |
| **2. Buy-in questions** (Confluence / security velocity) | ~30 sec | Small nods from Joe |
| **3. Copilot / Claude one-liner** (Slide 2) | ~15 sec | Fine in Q&A |
| **4. Slide 1 "model changed 5 times"** | ~15 sec | Still have standards > model on Slide 2 |
| **5. Long "while Ask runs"** — use one sentence | ~30 sec | Ramp still shown |
| **KEEP no matter what** | — | **Rules → Ask (quick) → Agent Prompt 1 → Review → pilot close** |

**Maximum wow in minimum time:** Rules + **one Agent ticket with Review** = governance + multi-file + human gate.

---

## SCRIPT (paste rows into Sheets)

**Section** | **Click** | **Say**
---|---|---
INTRO - camera | Webcam | Hey Joe — how've you been?
INTRO | | [Let him answer.]
INTRO | | Good — quick PTO recap, glad to be back. We've got twenty minutes — that still work on your end? Perfect.
INTRO | | Last time: compliance slowing teams, ramp in US and India, AI without skipping security review. Five minutes context, then live examples. Worth exploring or not — both fine. Good plan?
INTRO | | [Yes.] Great — sharing my screen.
SLIDE 1 | Share slides · Slide 1 | Here's the shift: engineers used to get help one line at a time. Now they hand off a whole task and review it in a PR like always.
SLIDE 1 | Point at slide | What matters is your product and your rules — not whichever model was hyped last month.
SLIDE 1 | | Leaders want speed and safety together. For Responsive — fast accurate questionnaires on the customer side, ship on eng side without compliance debt.
SLIDE 1 | | Question isn't can AI write code — can Portland and Coimbatore use it the same governed way, not fifty random chat tools?
SLIDE 1 | → Slide 2 | 
SLIDE 2 | Slide 2 | That's where Cursor fits — AI-native IDE, not a plugin.
SLIDE 2 | Point 4 cards | Agents: many files, one task. Rules: your standards every session. Review: fast draft, PR and CI still the gate. Enterprise: privacy, SSO — same trust bar your buyers use.
SLIDE 2 | → Slide 3 | So that's the product. This slide is what you get on ramp, compliance, and security — I'll show each live.
SLIDE 3 | Slide 3 | Ramp — Ask mode, real answers from the repo. Governed AI — Rules before anything runs. Compliance — audit logging ticket, live. Security — same flow, human approves — second example if we have time.
SLIDE 3 | Point NEXT | Let me show you. [Stop slides · share Cursor]
SLIDE 3 | Cursor visible | Can you see my window?
DEMO 1-2 | Tab ARCHITECTURE · scroll Known gaps | Small sample app — questionnaire compliance, not your prod repo. Gaps on purpose — listed here.
DEMO 3-4 | Tab questionnaires · point TODO | JIRA-4827 — need audit trail on every change. Code exists, not wired everywhere — that's this TODO.
DEMO 5-6 | Tab Rules · scroll | Before AI edits: Rules. Your non-negotiables — logging, customer boundaries, no shortcuts. Same for every dev and every agent.
DEMO 7-8 | RIGHT panel · Cmd+. Ask | Ramp first — learn then ship. Ask = teammate who answers, won't edit files.
DEMO 9 | Paste onboarding · Return | [Paste prompt only — don't read aloud]
DEMO 9 paste | | I'm a new engineer on day 3 at Responsive. Explain how multi-tenant isolation works in this questionnaire API and where we could accidentally expose one customer's data to another.
DEMO 10 | Skim answer | [While runs:] New hire gets answers from this repo — not three weeks in Confluence. Doesn't replace a senior — better questions in pairing.
DEMO 10 | Skim answer | Pulled real specifics — including risky spots. Next: Agent on the ticket.
DEMO 11 | Cmd+. Agent | Agent = same idea, but can edit — you review like any PR.
DEMO 12 | Point Composer | On Composer 2.5 — can switch models; happy to go deeper in Q&A.
DEMO 13 | Paste PROMPT 1 · Return | [Paste only]
DEMO 14 | Wait · talk | Three things: multiple files, Rules already in play, reviewable change — nothing merges from here.
DEMO 15-16 | Click Review · glance | Tech lead scan in minutes — hour of typing becomes a review job. Trust and proof for your own eng team.
DEMO 17-19 OPTIONAL | Paste PROMPT 2 · Review | [CUT IF SHORT ON TIME] Export wasn't locked down — same flow, still your security review.
DEMO 20 | Camera | Joe — recap: Ask for ramp, Rules for guardrails, Agent on compliance with you reviewing. Maps to what you wanted?
DEMO 20 | | If fair — open to a suggestion? Small test group, real tickets, check-ins, thirty days, decide on rollout — would that be a bad idea?
Q&A | | Copilot, models, security, pilot — wherever you want.

---

## PROMPT 1 (Notes — not spoken)

Implement JIRA-4827: wire SOC2 audit logging for all questionnaire and response mutations.
Requirements:
- Use recordAuditEvent from src/services/auditLogger.ts
- Follow .cursor/rules/responsive-platform.mdc
- Cover: POST /v1/questionnaires, PATCH .../status, POST .../responses
- Add vitest tests proving audit events are created
- Do not change the internal export route yet
After editing, summarize what changed for a PR description.

## PROMPT 2 (Notes — optional / cut first)

Fix SEC-1192: secure GET /v1/internal/export/:questionnaireId per responsive-platform rules.
Require auth and org scoping.

---

## TIMING CHEAT (spoken only, no agent wait)

| Block | ~min |
|-------|------|
| Intro | 1:00 |
| Slides 1–3 | 3:00 |
| Demo files + Rules + Ask | 2:00 |
| Agent + talk while running + Review | 2:00 |
| Close | 0:45 |
| **Total** | **~8:45** |

Add **60–90 sec** while Agent runs (you're talking — doesn't feel dead).
