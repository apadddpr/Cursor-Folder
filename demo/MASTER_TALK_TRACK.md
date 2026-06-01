# Master Talk Track — Full Script (Pitch → Demo → Close)

**Total live time: ~15 minutes** (5 pitch + 5 demo + 5 Q&A)

**What you need on screen:**
- **Slides:** Google Slides / Keynote with 3 slides (from `slides/PITCH_SLIDES.md`)
- **Demo:** Cursor desktop app → `Cursor-Folder` project
- **Second monitor or printed:** This document

**You do not use cursor.com/agents for this session.**

---

# BEFORE YOU START (not spoken)

1. Slides open, full screen ready (don’t share yet)
2. Cursor open with tabs: `docs/ARCHITECTURE.md`, `questionnaires.ts`, `.cursor/rules/responsive-platform.mdc`
3. Notes app with both Agent prompts
4. Font size 16+ in Cursor

---

# PART 1 — PITCH WITH SLIDES (~5 minutes)

## [00:00] — Greeting (no slide yet, or title slide if you have one)

**[Look at camera, not screen]**

> “Thanks for making the time today. I’m excited to walk you through Cursor and why I think it’s especially relevant for Responsive.
>
> I’ll keep the first part to about five minutes—high level, strategic—and then I’d love to spend five minutes in the product itself so you can see how this shows up for your engineering org, not just on slides.
>
> Please jump in anytime with questions, but I’ll save deeper product and security comparisons for the end if that works.”

---

## [00:30] — SLIDE 1: “Software development is shifting from assistance to agency”

**[Advance to Slide 1. Share screen → Slides only, OR slides full screen]**

> “Let me start with where I see the market going, because it’s the same tension I imagine you feel at Responsive.
>
> For years, ‘AI for developers’ meant autocomplete—finish this line, suggest this function. That’s useful, but it’s not where the industry is heading.
>
> What’s changing now is **agency**: developers are starting to delegate whole outcomes to AI—’implement this ticket,’ ‘fix this security finding,’ ‘add tests across these files’—and then review the result like they would a junior engineer’s pull request.
>
> At the same time, every CTO I talk to—including folks in regulated, enterprise software—is crystal clear that the mandate isn’t ‘move fast OR stay safe.’ It’s **both**. Velocity and risk mitigation. You can’t trade one for the other.
>
> That’s especially true for Responsive. You help customers respond to security questionnaires and RFPs with speed **and** accuracy. Your engineering organization is under the same microscope internally: ship AI-powered product capabilities quickly, but never at the cost of tenant isolation, auditability, or the trust your Fortune 500 customers expect.”

**[Pause 1 beat]**

> “So the question isn’t whether AI writes code. It’s whether your platform can **standardize** how hundreds of engineers use AI—across Portland, Coimbatore, and everywhere in between—without fifty different ChatGPT workflows and no governance.”

**[Advance to Slide 2]**

---

## [02:00] — SLIDE 2: “Cursor — AI-native IDE for enterprise engineering”

> “That’s where Cursor comes in—and I want to be precise about what makes it different, because a lot of tools sound similar from the outside.
>
> Cursor is not a plugin bolted onto someone else’s editor. It’s an **AI-native IDE**—the editor, the codebase index, and the agents are designed together. That matters because the biggest failure mode with AI coding tools is context: the model didn’t see the right files, didn’t know your standards, hallucinated something that doesn’t match your patterns.
>
> Cursor addresses that in four ways I’ll bucket for you.
>
> **First, codebase-aware agents.** The AI can reason across the whole project—routes, services, tests—not just the file you have open. That’s how you actually tackle cross-cutting work.
>
> **Second, Rules.** Your team can encode standards once—think SOC2 audit patterns, multi-tenant scoping, naming conventions—and every developer and every agent session inherits them. That’s governance at scale, not hope.
>
> **Third, model choice.** Cursor isn’t locked to one model vendor. You can use the best model for the task as the landscape shifts—OpenAI, Anthropic, Google, and others.
>
> **Fourth, enterprise trust.** Privacy Mode, SSO, admin controls, documentation in the Trust Center—built for the same security reviews your customers put you through.”

**[Pause]**

> “A lot of teams compare us to Copilot or terminal-first tools like Claude Code. I’ll happily go deeper in Q&A, but at this level: Copilot is excellent assistance, often in-file. Claude Code is a strong terminal agent for developers who live in the CLI. **Cursor’s bet is the full development surface**—tab completion, chat, and autonomous agents sharing one understanding of your codebase—with visual diff review your whole org already knows how to do from VS Code.”

**[Advance to Slide 3]**

---

## [03:45] — SLIDE 3: “What success looks like in 90 days”

> “If I put this in outcomes for Responsive specifically, here’s what a successful partnership looks like in the first ninety days.
>
> **One: faster cross-cutting delivery.** The kind of work that touches multiple files—compliance logging, auth hardening, API plus tests—ships in less wall-clock time because the toil is compressed, not because review goes away.
>
> **Two: safer AI adoption.** Rules plus your existing CI, required reviewers, and security processes stay in place. Cursor accelerates the draft; your gates stay the gate.
>
> **Three: better engineer experience.** Less time on boilerplate threading, more time on architecture and customer problems—especially for people ramping on a large codebase.
>
> **Four: a sane pilot design.** I wouldn’t boil the ocean. I’d start with one platform team and one product squad—maybe twenty to forty seats for thirty days—and measure PR cycle time on tickets that touch three or more files, plus developer sentiment. Let the data tell you whether to expand.”

**[Pause, look at camera]**

> “And on ramp specifically—because I know you’re global—imagine a new engineer in Coimbatore on day three trying to understand how tenant isolation works across services. Today that might be weeks of docs and pairing. With Cursor, they’re asking questions against the **live** codebase with the same index that powers shipping. Learn faster, then ship faster, under the same Rules.”

---

## [04:45] — Transition off slides

**[Stop sharing slides. Or say:]**

> “That’s the strategic frame. Let me show you what this looks like in practice—I’ll share my Cursor window.”

**[Switch screen share to Cursor desktop app — Cursor-Folder project]**

> “Can everyone see the Cursor IDE okay?”

---

# PART 2 — LIVE DEMO (~5 minutes)

**[You are now in Cursor only. No slides.]**

---

## [05:00] — Set the scene (problem)

**[Click tab: `docs/ARCHITECTURE.md`]**

**[Scroll to “Known gaps”]**

> “I’m not going to pretend this is Responsive’s production repository. It’s a small, realistic example inspired by your world: a backend service that supports **security questionnaires**—the kind of compliance-heavy surface your platform team would own.
>
> Here’s the scenario. Your engineering team has a ticket—call it JIRA-4827. Every time someone creates or updates a questionnaire, the system has to write an **audit log entry**. That’s table stakes for SOC2 and for the enterprise customers who ask you to prove controls in their own security reviews.
>
> The audit logging utility already exists in the codebase. But it’s not wired up everywhere it should be. In the real world, fixing that means a developer opens several files, threads the same pattern through each path, writes tests, opens a pull request, and gets review. It’s not rocket science—it’s **tedious**, and it’s easy to miss a spot. That’s expensive when you’re scaling.”

**[Click tab: `services/questionnaire-api/src/routes/questionnaires.ts`]**

**[Point mouse at `TODO(JIRA-4827)` — do not read the code aloud]**

> “You’ll see a marker like this TODO in the code. I’m not going to ask you to read TypeScript. The point is simply: this is the kind of cross-file compliance ticket that burns half a day.”

---

## [05:45] — Rules (governance)

**[Click tab: `.cursor/rules/responsive-platform.mdc`]**

**[Scroll slowly]**

> “Before we ask AI to change anything, I want to show you **Rules**. This is how Responsive would document non-negotiables: always emit audit events on mutations, always scope data by customer organization, don’t add unsecured endpoints without security sign-off.
>
> Think of this as your engineering playbook, enforced for **every** developer and **every** agent session—not fifty different prompts in Slack. When I see CTOs light up, it’s often here—because it’s how you scale AI without scaling chaos.”

---

## [06:15] — Onboarding beat (Ask — easy, human)

**[Open Chat — `Cmd + L` on Mac, or Chat panel in sidebar. NOT Agent yet.]**

**[Optional: click `src/middleware/auth.ts` in sidebar first]**

**[Paste into Chat, press Enter:]**

```text
I'm a new engineer on day 3 at Responsive. Explain how multi-tenant isolation works in this questionnaire API and where we could accidentally expose one customer's data to another.
```

**[While answer generates, say:]**

> “Quick detour on ramp time. Same platform, same indexed codebase—someone new doesn’t need three weeks of architecture tours before they can ask sensible questions. They’re not replacing senior engineers; they’re compressing the **learning** curve so pairing time is higher quality.”

**[When answer appears, skim it — don’t read it all]**

> “You’d get a grounded answer tied to **your** repo—not generic Stack Overflow. And when that engineer is ready to contribute, they’re in the same tool where they ship.”

---

## [07:00] — Agent intro (transition to shipping)

**[Open Agent / Composer — `Cmd + I`]**

> “Learning is one mode. **Shipping** is another. I’m going to open Cursor’s Agent—the same workflow your engineers use for multi-file tasks—and I’m going to describe an **outcome**, not write code line by line.”

---

## [07:15] — Agent demo #1 (JIRA-4827) — HERO MOMENT

**[Paste PROMPT 1 from Notes. Press Enter.]**

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

**[While Agent runs — keep talking. Repeat until done:]**

> “A few things to watch while this runs.
>
> **First**, it’s pulling context from **multiple files**—not just the tab in front of me.
>
> **Second**, our **Rules** are already in effect—I didn’t retype the SOC2 requirements in the prompt.
>
> **Third**, when it finishes, I’ll get a **diff**—a before-and-after view—exactly like code review. Nothing goes to production from this screen. Your team still opens a PR, CI still runs, a human still approves. Cursor is compressing the **draft**, not removing governance.”

**[If Agent asks a clarifying question — type:]** `Yes, proceed as described.`

**[When diff appears — click through changed files slowly]**

> “If I were a tech lead, I’d skim this in a few minutes: audit calls added on create and update paths, tests included. What might have been forty-five to ninety minutes of careful, error-prone editing becomes a **supervised review** in a fraction of the time.
>
> And this maps directly to how you sell trust externally: the same discipline—prove every control, miss nothing—your engineers feel internally on every compliance ticket.”

**[If Agent shows PR summary in chat, read one line:]**

> “It even drafted PR language I could paste into GitHub.”

---

## [08:45] — Agent demo #2 (SEC-1192) — security / risk

**[Same Agent thread or new — paste PROMPT 2. Enter.]**

```text
Fix SEC-1192: secure GET /v1/internal/export/:questionnaireId per responsive-platform rules.
Require auth and org scoping.
```

**[While it runs:]**

> “Second scenario—a pen-test style finding. An export endpoint that could expose questionnaire data without proper authentication. Same workflow: describe the fix, Rules apply, engineer reviews the diff. This is how I talk about **velocity and risk in the same sentence**—you’re not choosing between moving fast and staying secure.”

**[When done — glance at `src/index.ts` if it’s in the diff]**

> “Auth and org scoping added. In production, that goes through the same security review as any other change.”

---

## [09:30] — Demo close

**[Stay in Cursor, face camera if possible]**

> “Let me recap what you just saw.
>
> **Onboarding:** a new engineer getting grounded in tenant isolation without weeks of passive learning.
>
> **Governance:** Rules encoding Responsive’s standards before AI writes a line.
>
> **Agentic shipping:** a multi-file compliance ticket and a security fix, both as reviewable diffs—not copy-paste from ChatGPT.
>
> Cursor doesn’t replace your engineers, your SOC2 program, or your PR process. It gives them an AI-native workspace where learning, completion, chat, and agents share one understanding of the codebase.
>
> For Responsive—scaling past five hundred people, serving twenty percent of the Fortune 500—the question is whether you can standardize **speed and governance** as AI becomes default in the SDLC. That’s what Cursor is built for.”

**[Pause]**

> “I’m happy to go wherever you want in Q&A—Copilot, Claude Code, security and Privacy Mode, pilot design, pricing, whatever’s most useful.”

---

# PART 3 — Q&A (~5–7 minutes)

**[No script — use `demo/QA_PREP.md`]**

**If you blank, use these bridges:**

> “Great question—I want to be precise. At the executive level, the way I think about it is…”

> “That’s documented in our Trust Center—I’d loop in a solutions engineer for the exact data flow, but strategically…”

**Questions to ask THEM (pick 2):**

> “Where does compliance-heavy, multi-file work slow your teams down the most today—platform or product squads?”

> “How are you thinking about rolling out AI tooling consistently across US and India engineering?”

> “If a thirty-day pilot succeeded, what metric would make you expand—cycle time, quality, developer NPS, something else?”

---

# PART 4 — THANK YOU / CLOSE (if time)

> “Thank you again. I really enjoyed the conversation. I’m genuinely excited about Cursor and about the fit with Responsive’s mission—I’d love to be part of helping your customers’ engineering teams work the way you help your customers respond with speed and trust.
>
> Happy to follow up with a pilot outline or connect you with technical resources on security if that’s helpful.”

---

# TIMING CHEAT SHEET

| Time | Section | Screen |
|------|---------|--------|
| 0:00–0:30 | Intro | Camera / title |
| 0:30–2:00 | Slide 1 — market shift | Slides |
| 2:00–3:45 | Slide 2 — why Cursor | Slides |
| 3:45–4:45 | Slide 3 — outcomes + ramp | Slides |
| 4:45–5:00 | Transition | “Switching to Cursor…” |
| 5:00–6:15 | Problem + Rules | Cursor |
| 6:15–7:00 | Ask — onboarding | Cursor Chat |
| 7:00–8:45 | Agent — JIRA-4827 | Cursor Agent |
| 8:45–9:30 | Agent — SEC-1192 | Cursor Agent |
| 9:30–10:00 | Demo recap | Cursor |
| 10:00+ | Q&A | Camera or Cursor |

---

# WHEN THINGS GO WRONG

| Issue | Say this |
|-------|----------|
| Agent stuck | “Same as any tool—I’ll nudge the prompt.” Re-paste PROMPT 1. |
| Agent wrong | “That’s why we review diffs—I’d reject this hunk and iterate.” |
| Technical question | “I’ll get you an exact answer from our SE team; strategically…” |
| Can’t find Chat vs Agent | Chat = `Cmd+L`, Agent = `Cmd+I` |
| Running over time | Skip SEC-1192; keep recap |

---

# SLIDE TEXT (copy into Google Slides)

**Slide 1 title:** Software development is shifting from assistance to agency  
- Multi-file outcomes, not just lines  
- Context beats raw model IQ  
- Velocity **and** risk—not either/or  

**Slide 2 title:** Cursor — AI-native IDE for enterprise engineering  
- Codebase-aware agents  
- Rules & standards  
- Model choice  
- Enterprise trust  

**Slide 3 title:** What success looks like in 90 days  
- Faster cross-cutting delivery  
- Safer AI adoption (Rules + CI/review)  
- Better engineer experience + faster ramp  
- Pilot: 1 platform team + 1 squad, 30 days  

---

**Practice goal:** Read Part 1 + Part 2 out loud twice. Time yourself. Target: under 10 minutes before Q&A.
