# Master Talk Track — Conversational Version

**Use:**
- **This file** → what you **say** (pitch + demo)
- **`DEMO_CLICK_ONLY.md`** → what you **click** (short SAY column)
- **`STEP_BY_STEP_SCRIPT.md`** → same words, one block per step
- **Notes app** → Prompt 1 & 2 (from `DEMO_CLICK_ONLY.md` bottom)

**Jargon rule:** If you use a technical term, you get **one plain-English line** right after.

**Sound human:** Say what you’d say to a CTO at lunch—not slide labels or AE shorthand.

**Slides:** Google Slides or `slides/pitch-deck.html`. Part 1 = while slides are on screen.

---

## How to use slides (read once)

| Do | Don't |
|----|--------|
| **Share slides** for Part 1 only (~5 min) | Read every bullet word-for-word |
| **Glance or point** at a bullet, then explain | Turn your back and read the screen |
| **Advance** when you finish that slide's script | Put paragraphs on slides |
| **Switch share to Cursor** after Slide 3 | Stay on slides during the demo |

---

# PART 1 — PITCH WITH SLIDES (~5 min)

## [00:00] — Camera only (no slide yet)

**[Webcam on. Slides ready but not shared yet.]**

> “Hey Joe — how’ve you been?”
>
> *[Let him answer. Brief back-and-forth.]*
>
> “Good — I was on PTO for a wedding and a couple birthdays in San Diego, so I can’t complain. Feels good to be back in the swing of things.”
>
> “I know we’re slated for about **twenty minutes** — I want to be conscious of your time. We’re not expecting anyone else on your end, right? **Perfect.**”
>
> “Quick context on today: last time we spoke, three things came up — **compliance work slowing teams down**, **ramp time in the US and India**, and **using AI to ship faster without skipping security review**. I built today around those.”
>
> “First **five minutes** — what we’re seeing with AI and why Cursor matters for Responsive. Then I’ll **share my screen** and walk through **live examples** tied to those themes. A few minutes at the end for your questions.”
>
> “By the end you’ll have a clear sense of whether this is worth exploring further — or not, and that’s okay too. **Does that sound like a good plan?**”
>
> *[Pause for yes.]*
>
> “Great — let me share my screen.”

**[Share screen → Google Slides or `slides/pitch-deck.html` → Slide 1]**

---

## [00:30] — SLIDE 1 on screen

**On slide:** *Development is moving from line-by-line help to whole tasks*

**[Gesture at slide — don't read bullets verbatim]**

> “Here’s the shift we’re seeing with other customers.
>
> Engineers used to get help **one line at a time**. Now they hand off a **whole task**—fix the ticket, add logging everywhere it’s missing, add tests—and **review the result in a pull request**, like any other change.
>
> What matters more is whether the tool knows **your product** and **your rules**—not which model was trending last month. I’m sure you’ve seen it: the ‘best’ model has changed several times just this year.
>
> And the last piece: every leader I talk to wants **speed and safety together**—not a tradeoff.”

**[Pause. Look at camera.]**

> “That’s especially true for Responsive. Your customers want security questionnaires and RFPs answered **fast and accurately**. Your engineering org wants to **ship without piling on compliance debt**.
>
> So the question isn’t ‘can AI write code?’ It’s: **can your teams in Portland and Coimbatore use AI the same way**—with your rules and your review process—**instead of everyone doing their own thing in separate chat tools?**”

**[Click → Slide 2]**

---

## [02:00] — SLIDE 2 on screen

**On slide:** *Cursor — AI-native IDE* · agents · Rules · review · enterprise trust

**[Point at each row — don't read the table word-for-word]**

> “That’s where **Cursor** fits. We’re not a plugin bolted onto another editor—we’re an **AI-native IDE**, one consolidated product.
>
> Four things matter for a company like yours:
>
> **Agents** — work can span **many files** in one task, not one tab at a time. You’ll see that on the compliance ticket.
>
> **Rules** — your standards—audit logging, customer boundaries—written once. **Every developer and every agent session** has to follow them.
>
> **Review before merge** — Cursor produces a **first draft** fast. Your **PR process, CI, and security review** stay the gate—you’re not bypassing them, you’re getting to review sooner.
>
> **Enterprise trust** — privacy controls, SSO, security docs—the same kind of diligence your **buyers** put you through, and your **security team** puts us through.”

**[Optional — don't linger]**

> “People compare us to Copilot or Claude Code—happy to unpack in Q&A. Short version: Copilot is great in-file; Claude Code is great in the terminal; **Cursor is the full workspace** where most of your org already lives.”

**[Click → Slide 3]**

---

## [03:45] — SLIDE 3 on screen

**On slide:** Faster ramp · Governed AI · Compliance · Security · Pilot · **Next: live demo**

**[Walk bullets — say each outcome once; don't repeat “I’ll show” on every line]**

> “Here’s what we’d want the first ninety days to look like—and you’re about to see each one live.
>
> **Ramp** — new hires get answers from the **real codebase** in week one, not week three of doc archaeology.
>
> **Governed AI** — your standards live in **one file**; devs and AI follow them **every session**.
>
> **Compliance work** — tickets like **audit logging on every route**—multi-file, easy to miss a spot. We’ll fix one live.
>
> **Security** — findings like an **export without auth**—same workflow, **human still approves**.
>
> **Pilot** — small group, real tickets, thirty days, then decide on rollout.”

**[Point to “Next: live demo”]**

> “I’ll stop talking about it and **show you**—switching to Cursor.”

**[Stop slides. Share → Cursor desktop]**

> “Can you see my Cursor window?”

---

## Slide ↔ demo cheat sheet

| Slide 3 bullet | Demo moment |
|----------------|-------------|
| Faster ramp | Ask: new engineer / tenant isolation |
| Governed AI | Rules file (steps 5–6) |
| Compliance work | Agent + Prompt 1 + **Review** |
| Security + review | Agent + Prompt 2 + **Review** |
| Review before merge | Talk while diff visible (step 15–16) |

---

# PART 2 — LIVE DEMO (~5 min)

*Hands: **`DEMO_CLICK_ONLY.md` steps 1–20**. Words: below.*

| Talk section | Steps |
|--------------|-------|
| Problem | 1–4 |
| Rules | 5–6 |
| Ask / ramp | 7–10 |
| Agent | 11–12 |
| JIRA-4827 | 13–16 |
| SEC-1192 | 17–19 |
| Pilot close | 20 |

**Files:** preloaded **tabs** (left → right) or **`Cmd+P`**.

---

## [05:00] — The problem

**[Steps 1–2: tab **ARCHITECTURE.md** → scroll **Known gaps**]**

> “This is a **small sample app** I put together for today—not your production code. It’s meant to feel like something your platform team might own: **software for security questionnaires and compliance workflows**.
>
> I **left intentional gaps** so we can fix them live—listed here under **known gaps**.”

**[Steps 3–4: tab **questionnaires.ts** → point **TODO(JIRA-4827)**]**

> “Here’s the ticket—JIRA-4827. Whenever someone creates or updates a questionnaire, you need an **audit trail**—who changed what, when. Your enterprise customers and SOC2 are going to care about that.
>
> The project already has code to write those audit events. It’s just **not hooked up on every route yet**—easy to miss one file. That’s the TODO. I won’t make you read TypeScript—you get the picture.”

---

## [05:45] — Rules

**[Steps 5–6: tab **responsive-platform.mdc** → slow scroll]**

> “Before AI changes anything, **Rules**.
>
> This is where you’d write the non-negotiables: always log changes, always respect customer boundaries, don’t add insecure shortcuts.
>
> Same guardrails for **every developer and every agent**—that’s the ‘no skipping security review’ piece from our last conversation.”

---

## [06:15] — Onboarding (Ask)

**[Steps 7–8: RIGHT panel → `Cmd + .` → **Ask**]**

> “You mentioned **ramp** in the US and India. I’m going to show that **before** we fix JIRA-4827 on purpose: **same tool—learn first, then ship**.
>
> I’ll paste a prompt in **Ask mode**. Think of Ask as a **teammate who knows the codebase**—answers questions, **won’t edit files**.”

**[Step 9: paste onboarding → Return]**

```text
I'm a new engineer on day 3 at Responsive. Explain how multi-tenant isolation works in this questionnaire API and where we could accidentally expose one customer's data to another.
```

**[While it thinks:]**

> “A new hire in Portland or Coimbatore can ask how Customer A stays separate from Customer B—and get an answer **from this repo**, not after three weeks digging through Confluence and Slack.
>
> That **doesn’t replace** a senior engineer—it helps people **show up to pairing with better questions**.”

**[Step 10: skim answer]**

> “It pulled specifics from the project—even called out risky spots. Next I’ll switch to **Agent** and implement the ticket.”

**[Optional buy-in:]**

> “For someone in week one—would **this** beat digging through Confluence and Slack?”

*[If yes: “That’s the ramp story.”]*

---

## [07:00] — Agent

**[Step 11: `Cmd + .` → **Agent** — same panel, no New Agent]**

> “**Agent** is the same teammate idea—but now they **can make edits**, and you **review the diff** the same way you would any other PR.”

**[Step 12: point at **Composer 2.5 Fast** — optional one line; save cost/benchmark detail for Q&A]**

> “I’m on **Composer 2.5** here—you can switch models anytime. Happy to go deeper on models and cost in Q&A.”

---

## [07:15] — Ticket #1 (JIRA-4827)

**[Step 13: paste **PROMPT 1** → Return]**

**[Step 14 — while it runs:]**

> “Three things to watch: **multiple files**, **Rules already applied**, and a **reviewable diff** when it’s done.
>
> Nothing merges from this panel. Your team still opens a PR, tests run, someone approves. We’re speeding up the **first draft**, not removing the gate.”

**[Steps 15–16: click **Review** → glance diff]**

> “As a tech lead, I’d scan this in a few minutes—logging where it was missing, tests included. Work that might’ve been **an hour of careful editing** becomes a **review job**.
>
> Same story you tell customers—**trust and proof**—for your own engineering team.”

---

## [08:45] — Ticket #2 (SEC-1192)

**[Step 17: paste **PROMPT 2** → Return]**

**[Step 18 — while it runs:]**

> “Second example: a security review found an **export that didn’t check who’s logged in**. Same flow—describe the fix, Rules apply, **your team reviews the change**.
>
> That’s **speed and safety together**—you’re not choosing one over the other.”

**[Step 19: click **Review** → glance diff]**

> “Login check, customer scoping—**still** goes through your normal security review.”

**[Optional buy-in:]**

> “Fixing an open export **in this workflow**—does that match how you want **security and velocity** to work?”

---

## [09:30] — Close + pilot

**[Step 20: camera]**

> “Joe, quick recap: **Ask** for faster onboarding, **Rules** so devs and agents share the same guardrails, and **Agent** on real compliance work—with **you still reviewing before merge**.
>
> Based on today—does it feel like Cursor maps to what you were asking for? **Correct me if I’m off.**
>
> If that’s fair—**would you be open to a suggestion?**
>
> Great. I’d like to set up a small group of test users, with enough usage to take on some lighter, but real tickets so they can get a feel for it. We’d set up check-ins throughout the pilot to handle questions and share best practices as updates come out, and then at the end of the thirty days we can decide together if a broader rollout makes sense—
>
> **would that be a bad idea?**”

**[If not a bad idea:]**

> “What’s the best way to get a one-pager in front of you—email, or someone on your team?”

**[Q&A — include if asked:]**

> **Models / Composer cost:** “You’re not locked to our model—Opus, GPT, whatever you standardize on. Composer 2.5 is what many teams use for agent work on volume; we can share benchmark and pricing details with your team.”

> “Happy to go wherever is useful—Copilot, Claude Code, security, pilot scope.”

---

# PLAIN-ENGLISH CHEAT SHEET (if they ask)

| If you say… | Add this |
|-------------|----------|
| Agent | “Edits multiple files from one instruction—you review the diff.” |
| Ask | “Answers from the repo—doesn’t edit files.” |
| Diff | “Before-and-after, like PR review.” |
| Rules | “Your engineering standards, every session.” |
| SOC2 | “The audits your enterprise customers care about.” |
| Multi-tenant | “Customer A never sees Customer B’s data.” |

---

# Structure reminder

Slides → demo steps **1–20** → pilot close. Rehearse out loud; change any line that doesn’t sound like you.
