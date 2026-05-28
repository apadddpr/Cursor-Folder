# Non-Technical Playbook — What to Say & How to Demo

**You do not need to be an engineer to nail this interview.**

Your job in the demo is the same as in the pitch: show a **CTO** that Cursor helps their team ship **faster** and **safer**—not that you personally write production code.

Think of yourself as a **guide on a product tour**, not the developer doing the work.

---

## The one sentence that explains everything

> "Imagine your team has to add compliance logging across five files before a Fortune 500 security review—normally half a day of careful work. I'm going to show how Cursor's AI agent does that in minutes, with your company's rules built in, and your engineers still review every line before it ships."

Memorize that. It works even if you never open a code file.

---

## Plain English: what is this fake app?

Responsive sells software that helps companies answer **security questionnaires** and RFPs.  

This repo contains a **tiny pretend version** of one piece of their product:

| Piece | Plain English |
|-------|----------------|
| **Questionnaire API** | A backend service that stores security questionnaires and answers |
| **JIRA-4827** | A fake ticket meaning: "We must log every change for SOC2 audits" (like an audit trail in Salesforce) |
| **SEC-1192** | A fake security finding: "One export link doesn't check who's logged in" |
| **Cursor Rules** | Your company's playbook written once—AI follows it every time |
| **Agent** | AI that edits multiple files at once, like a junior dev who read the whole project |

You are **not** expected to explain TypeScript, Express, or APIs deeply. You only need to explain **business risk** and **time saved**.

---

## What the CTO cares about (your north star)

Every sentence should tie to one of these:

1. **Velocity** — Features and fixes ship faster.
2. **Risk** — Fewer compliance/security mistakes; same PR review process.
3. **Scale** — US + India teams follow the same standards (Rules).
4. **Governance** — Privacy Mode, Trust Center, nothing bypasses CI/review.

If you get lost, pause and say:

> "The details matter to your engineers—in the next step I'll show how Cursor keeps them in control while removing the tedious multi-file work."

---

## Before you touch Cursor: your 30-second setup line

**Say this while sharing your screen:**

> "I'm going to use a simplified example inspired by the kind of work your platform team does: security questionnaires, audit trails, and multi-tenant access. It's not your production codebase—it's a realistic slice so we can see Cursor in action in about five minutes."

That sets expectations and sounds credible.

---

## The 5-minute demo — word-for-word script

### Part 1 — Show the "problem" (60 seconds)

**Open:** `docs/ARCHITECTURE.md` (scroll to "Known gaps")

**Say:**

> "Here's the scenario. Your engineering team has a compliance ticket—call it JIRA-4827. Every time someone creates or updates a security questionnaire, the system has to write an audit log entry. That's standard for SOC2 and for customers like yours who live in security reviews.
>
> Right now, the audit helper exists, but it's not hooked up everywhere it should be. Fixing that usually means a developer opens several files, threads the same pattern through each one, writes tests, and opens a PR. It's not hard—it's **tedious and easy to miss a spot**. That's expensive at your scale."

**Optional:** Open `services/questionnaire-api/src/routes/questionnaires.ts` and point at the line that says `TODO(JIRA-4827)`.

**Say:**

> "You don't need to read the code—this TODO is the kind of marker your teams already use. The point is: cross-cutting compliance work."

---

### Part 2 — Show Cursor Rules (30 seconds)

**Open:** `.cursor/rules/responsive-platform.mdc`

**Say:**

> "Before we ask the AI to write anything, Responsive would encode standards here—Cursor Rules. Things like: always log audits, always scope by customer organization, never add unsecured endpoints without security sign-off.
>
> This is how you get **consistent** AI output across hundreds of engineers, not fifty different ChatGPT prompts."

**You do not need to read the file aloud.** Just scroll slowly.

---

### Part 3 — Agent does the work (2–3 minutes) — THE MAIN EVENT

**Open Cursor Agent** (Composer). Paste this prompt (from DEMO_SCRIPT.md):

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

**While it runs, narrate this (repeat phrases if it takes long):**

> "I'm not writing code manually—I'm giving the agent an outcome, the same way you'd assign a ticket to an engineer.
>
> Notice three things: First, it's pulling context from **multiple files**, not just the one on screen. Second, our **Rules** are already applied—it knows audit naming and tenant rules without me retyping them. Third, when it's done, I get a **diff**—a before-and-after view—exactly like code review.
>
> Nothing goes to production from here. Your team still opens a PR, runs CI, and a human approves. Cursor accelerates the **draft**; your process stays the gate."

**When the diff appears:**

> "I'd skim this as a tech lead: audit calls added on create and update paths, tests included. What might have been forty-five to ninety minutes of careful editing became a supervised review in a few minutes."

**If they ask "what changed?" and you don't know:**

> "The agent added audit logging on the create and update flows and added tests—that's the compliance requirement on the ticket. Your engineers would verify the exact lines; I'm showing you the **workflow and speed**."

---

### Part 4 — Security fix (60 seconds)

**New Agent message:**

```text
Fix SEC-1192: secure GET /v1/internal/export/:questionnaireId per responsive-platform rules.
Require auth and org scoping.
```

**Say:**

> "Second scenario—security review flagged an endpoint that exported data without checking authentication. Same pattern: describe the fix, Rules enforce the standard, engineer reviews the diff. This is how you talk about **risk mitigation** and **velocity** in the same breath."

---

### Part 5 — Close the demo (30 seconds)

**Say:**

> "To recap: Cursor isn't replacing your engineers or your SOC2 program. It's giving them an AI-native workspace where completion, chat, and agents share the same understanding of your codebase—and your Rules. The question for Responsive isn't whether AI can write code; it's whether you can **standardize speed and governance** as you scale past five hundred people globally."

---

## What you are NOT responsible for

| Don't worry about | Why |
|-------------------|-----|
| Reading every line of the diff | Say you'll "review like a tech lead," not implement |
| Running `npm test` live | Optional; say "CI runs tests on the PR" |
| Explaining TypeScript syntax | Point to outcomes: audit, auth, tests |
| Agent making a mistake | Say "That's why review exists—let me steer it" (see below) |
| Being slower than a developer | You're selling **workflow to executives** |

---

## If something goes wrong (you will look confident)

**Agent errors or does nothing:**

> "Same as any tool—I'll refine the prompt. In production your engineers iterate in chat until the diff is right."

**Agent changes the wrong thing:**

> "I'd reject this hunk and ask it to retry—that's the same muscle memory as code review."

**They ask a deep technical question you don't know:**

> "Great question for a solutions engineer on a follow-up—I want to be precise. At a leadership level, the architecture is [velocity / risk / governance]. Happy to get you the Trust Center doc on data handling."

**They say "I can do this in Copilot":**

> "Copilot is excellent for suggestions inside a file. What we just did is **multi-file, rule-aware agent work** in an AI-native IDE—that's Cursor's bet. Many teams pilot both on the same ticket type and compare cycle time."

---

## Glossary — if they use jargon

| They say | You say |
|----------|---------|
| **PR / pull request** | "The formal code review before anything merges" |
| **Diff** | "The before-and-after of what the AI proposed" |
| **SOC2** | "The audit standard enterprise customers ask about" |
| **Multi-tenant** | "Customer A never sees Customer B's data" |
| **CI/CD** | "Automated tests and deployment pipelines—unchanged" |
| **Agent / Composer** | "AI that works across the whole project, not one file" |
| **Rules** | "Your engineering standards, baked into every AI session" |
| **Context window** | "How much of the codebase the AI can reason about at once" |
| **Privacy Mode** | "Your code isn't stored to train models—documented in Trust Center" |

---

## Your 5-minute pitch (non-technical version)

Use `PITCH_OUTLINE.md` for structure, but here's the **simple story arc**:

1. **Hook:** "Responsive wins on trust and speed in security questionnaires. Engineering feels the same pressure—ship fast, don't break compliance."

2. **Market:** "Development is moving from autocomplete to **agents** that handle whole tickets across files."

3. **Cursor:** "AI-native IDE—not a plugin. Codebase context + Rules + agents in one place."

4. **Outcomes:** "Faster cross-cutting work, same review gates, happier engineers, governed AI adoption."

5. **Handoff:** "Let me show you a compliance ticket and a security fix in the product."

---

## How to practice without coding (2 hours total)

| Step | Time | What to do |
|------|------|------------|
| 1 | 20 min | Read this playbook out loud twice |
| 2 | 20 min | Read `PITCH_OUTLINE.md` — only the spoken lines |
| 3 | 30 min | Run the demo in Cursor; **read the narration script**, don't improvise yet |
| 4 | 20 min | Read `QA_PREP.md` — practice answers out loud |
| 5 | 30 min | Record yourself on Zoom; watch once, fix awkward parts |

---

## Questions that make you sound executive (ask them)

1. "Where do compliance-heavy changes slow your releases today?"
2. "How are you rolling out AI tools across Portland and Coimbatore consistently?"
3. "What would a 30-day pilot need to prove for you to expand seats?"

---

## Remember your unfair advantage

You're not competing with engineers on **code**. You're competing on **story, clarity, and trust**.

The CTO buys **outcomes and governance**. Your demo proves:

- Cursor understands their **world** (questionnaires, SOC2, enterprise).
- Cursor fits their **process** (PR review, Rules, Trust Center).
- Cursor is **different** (agents + full IDE + context).

**You can deliver this demo without writing a single line of code yourself.**
