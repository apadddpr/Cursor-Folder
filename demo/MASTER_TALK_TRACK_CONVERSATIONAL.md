# Master Talk Track — Conversational Version

**Same structure and timing as `MASTER_TALK_TRACK.md`** — same clicks, same prompts — but sounds like **you talking to a person**, not a whitepaper.

**Use:**
- **This file** → what you **say** (pitch + demo)
- **`DEMO_CLICK_ONLY.md`** → what you **click**
- **Notes app** → Prompt 1 & 2 (unchanged)

**Jargon rule:** If you use a technical term, you get **one plain-English line** right after.

**Slides:** Build from `slides/PITCH_SLIDES.md`. **Part 1 below = what you say while each slide is on screen.**

---

## How to use slides (read once)

| Do | Don't |
|----|--------|
| **Share slides** for Part 1 only (~5 min) | Read every bullet word-for-word |
| **Glance or point** at a bullet, then **explain in your own words** | Turn your back and read the screen |
| **Advance** when you finish that slide's script | Put paragraphs of text on slides |
| **Switch share to Cursor** after Slide 3 | Stay on slides during the demo |

**Relationship:** Slide bullets = **headlines**. This talk track = **what you actually say**. They cover the same ideas; the talk track is longer and more conversational.

---

# PART 1 — PITCH WITH SLIDES (~5 min)

## [00:00] — Camera only (no slide yet)

**[Webcam on. Slides ready but not shared yet. This is ONE script — rapport + contract + reconnect + agenda.]**

> “Hey Joe — how’ve you been?”  
>  
> *[Let him answer. Brief back-and-forth.]*  
>  
> “Good — I was on PTO for a wedding and a couple birthdays in San Diego, so I can’t complain. Feels good to be back in the swing of things.”  
>  
> “I know we’re slated for about **twenty minutes** — I want to be conscious of your time. We’re not expecting anyone else on your end, right? **Perfect.**”  
>  
> “So you know what we’ll cover: When we talked a few weeks ago, you mentioned a few things that were top of mind — **shipping compliance-heavy work without slowing releases**, **ramping engineers across your US and India teams**, and **using AI in a way that doesn’t bypass security and review**. I built today around those.”  
>  
> “Here’s the plan: I’ll do a **quick refresher** — who Cursor is, why this moment matters for Responsive — about **five minutes**, mostly slides. Then I’ll **share my screen** and show those themes **live** in a small example that looks like the kind of work your platform team does — not a generic demo. We’ll leave a few minutes at the end for your questions.”  
>  
> “By the end you’ll have a clear sense of whether this is worth exploring further — or not, and that’s completely fine. **Does that sound like a good plan?**”  
>  
> *[Pause for yes.]*  
>  
> “Great — I’ll start with the big picture, then we’ll get into the product.”

**[Click Share Screen → Google Slides or `slides/pitch-deck.html` → Slide 1]**

### Shorter version (if you're running long)

> “Joe — good to see you. We’ve got **twenty minutes**, just us — perfect. Last time you flagged **compliance work**, **ramp**, and **governed AI** — today is slides for five, then I’ll show those **live** in Cursor. **Good plan?**” *[yes → Slide 1]*

---

## [00:30] — SLIDE 1 on screen

**On slide they see:**
- Title: *Development is moving from line-by-line help to whole tasks*
- Multi-file work · codebase + standards · speed and safety

**[Gesture at title or first bullet — don't read it aloud]**

> “Here’s the shift I’m seeing.
>
> **First bullet —** teams aren’t just getting help on one line anymore. They’re handing off **whole tasks** — fix this ticket, wire up logging in every place it’s missing, add tests — then **review** the result like any other PR.
>
> **Second —** what matters is whether the tool understands **your codebase and your standards**, not which AI model is fashionable this quarter.
>
> **Third —** every leader I talk to wants **speed and safety together**. Not a tradeoff.”

**[Pause. Look at camera.]**

> “That’s especially true for Responsive. Your customers want security questionnaires and RFPs answered **fast** and **right**. Your engineering org feels the same pressure — ship AI product work without creating compliance debt.
>
> So the question isn’t ‘can AI write code?’ It’s: **can everyone use AI the same governed way** — Portland, Coimbatore, all of it — without fifty random ChatGPT workflows?”

**[Click → Slide 2]**

---

## [02:00] — SLIDE 2 on screen

**On slide they see:**
- Title: *Cursor — AI-native IDE for enterprise teams*
- Whole-project agents · Rules · Review before merge · Enterprise trust

**[Point to each row as you explain — don't read the table word-for-word]**

> “That’s where **Cursor** fits. Not a plugin on someone else’s editor — an **AI-native IDE** built as one product.
>
> **Whole-project agents** — I’ll show this in a minute — when work spans multiple files, the tool isn’t stuck on one tab.
>
> **Rules** — you write standards once: audit logging, customer data boundaries. Every developer and every agent session follows them. **You’ll see this live.**
>
> **Review before merge** — Cursor produces a **draft**. Your PR process, CI, and security review don’t go away.
>
> **Enterprise trust** — Privacy Mode, SSO, Trust Center — the same kind of questions your customers ask you.”

**[Optional one line — don't linger]**

> “People compare us to Copilot or Claude Code — happy to unpack in Q&A. Short version: Copilot is great in-file; Claude Code is great in the terminal; **Cursor is the full workspace** where most of your org already lives.”

**[Click → Slide 3]**

---

## [03:45] — SLIDE 3 on screen

**On slide they see:**
- Faster ramp · Governed AI · Compliance work · Security + review · Pilot
- **Next: live demo**

**[Walk down the bullets — point, then explain each in plain English]**

> “What success looks like at Responsive in the first ninety days:
>
> **Faster ramp** — a new engineer asks real questions against the **real repo** on day three, not week three. **I’ll demo that.**
>
> **Governed AI** — Rules so every team plays by the same book. **I’ll show the Rules file.**
>
> **Faster compliance work** — tickets that touch lots of files, like wiring audit logs everywhere. **I’ll run that as a live agent task.**
>
> **Security stays in the loop** — something like locking down an endpoint that was too open — still human review. **Second live example.**
>
> **Pilot** — I’d start small: one platform team, one product squad, thirty days, measure PR time on multi-file tickets.”

**[Point to “Next: live demo” on slide]**

> “Everything on this slide — I’m about to show you in Cursor, not tell you about.”

**[Stop sharing slides. Share → Cursor desktop]**

> “Can you see my Cursor window?”

---

## Slide ↔ demo cheat sheet (keep next to you)

| Slide 3 bullet | Demo moment |
|----------------|-------------|
| Faster ramp | Ask: new engineer / tenant isolation |
| Governed AI | Open `.cursor/rules` |
| Compliance work | Agent + Prompt 1 (JIRA-4827) |
| Security + review | Agent + Prompt 2 (SEC-1192) |
| Review before merge | Say while Agent diff is visible (Slide 2 bullet) |

---

# PART 2 — LIVE DEMO (~5 min)

*Clicks: `DEMO_CLICK_ONLY.md` or `Cmd+P` to open files.*

---

## [05:00] — The problem

**[`Cmd+P` → ARCHITECTURE → scroll to Known gaps]**

> “This isn’t your production repo—it’s a small example modeled on your world: software that supports **security questionnaires** and compliance workflows.
>
> Picture a ticket on the board—call it JIRA-4827. Every time someone creates or updates a questionnaire, the system needs to **record that in an audit log**. Your enterprise customers and your SOC2 program expect that. No exceptions.
>
> The logging helper already exists in the project. It’s just **not hooked up everywhere yet**. In real life, a developer opens several files, copies the same pattern over and over, adds tests, opens a PR, gets review. It’s not hard—it’s **easy to miss a spot**, and it eats half a day. At your scale, that adds up.”

**[`Cmd+P` → questionnaires.ts → point at TODO]**

> “There’s a TODO here—I won’t make you read the code. The point is: this is the kind of ticket that spans multiple files.”

---

## [05:45] — Rules

**[`Cmd+P` → responsive-platform]**

> “Before we let AI touch anything, I want to show **Rules**.
>
> This is where Responsive would write the non-negotiables: always log changes, always respect customer boundaries, don’t add insecure shortcuts.
>
> Think of it as your engineering playbook—**the same rules for every person and every AI session**. That’s how you move fast without everyone doing their own thing in ChatGPT.”

---

## [06:15] — Onboarding (Ask)

**[Right panel → paste onboarding question → Return]**

```text
I'm a new engineer on day 3 at Responsive. Explain how multi-tenant isolation works in this questionnaire API and where we could accidentally expose one customer's data to another.
```

**[While it thinks:]**

> “Quick sidebar on **ramp time**. Same tool, same codebase—a new engineer in Portland or Coimbatore can ask ‘how do we keep customers’ data separate?’ and get an answer grounded in **your** code—not a generic blog post.
>
> They’re not replacing a senior engineer. They’re showing up to pairing sessions having already done the homework.”

**[When answer shows:]**

> “And when they’re ready to contribute, they’re already in the tool they use to ship.”

---

## [07:00] — Switch to shipping

**[`Cmd + .` → Agent, or Shift+Tab]**

> “Learning is one mode. **Shipping** is another. I’m switching to **Agent** mode—I’ll describe what I want done, not type every line myself.”

---

## [07:15] — Ticket #1 (paste PROMPT 1)

**[Paste from Notes → Return]**

**[While it runs — loop these:]**

> “Three things to watch.
>
> **One**—it’s looking at **more than one file**, not just what’s on screen.
>
> **Two**—our **Rules** already applied—I didn’t retype the compliance requirements.
>
> **Three**—when it’s done, I get a **before-and-after view**, like code review. Nothing goes live from here. Your team still opens a PR, tests still run, someone still approves. We’re speeding up the **first draft**, not removing the gate.”

**[When diff shows:]**

> “As a tech lead, I’d scan this in a few minutes: logging added where it was missing, tests included. Work that might take an hour or more of careful editing becomes a **review job**.
>
> And this rhymes with what you sell: **trust and proof**—just aimed at your own engineering team.”

---

## [08:45] — Ticket #2 (paste PROMPT 2)

**[Paste → Return]**

**[While it runs:]**

> “Second example—a security review found an export that didn’t check who’s logged in. Same flow: describe the fix, Rules apply, human reviews the change.
>
> That’s how I talk about **speed and safety together**—you’re not picking one.”

**[When done:]**

> “Login check added, customer scoping added. Still goes through your normal security review.”

---

## [09:30] — Close

**[Camera if you can]**

> “Quick recap.
>
> **Ramp**—new engineers get answers from the real codebase.
>
> **Governance**—Rules so AI follows your standards.
>
> **Shipping**—a multi-file compliance ticket and a security fix, both as something a human reviews—not copy-paste from the internet.
>
> Cursor doesn’t replace your engineers or your compliance program. It gives them one place to learn, write, and use AI—with your rules built in.
>
> For Responsive—growing fast, serving huge customers—the bet is: **can you standardize how AI is used** so speed goes up and risk doesn’t?
>
> Happy to go wherever is useful in Q&A—Copilot, Claude Code, security, how you’d run a pilot.”

---

# PLAIN-ENGLISH CHEAT SHEET (if they ask)

| If you say… | They might think… | Add this |
|-------------|-------------------|----------|
| Agent | Sci-fi | “AI that can edit multiple files from one instruction” |
| Diff | ? | “Before-and-after, like PR review” |
| Rules | ? | “Your engineering standards, built into every session” |
| SOC2 | audit | “The audits your enterprise customers care about” |
| Multi-tenant | ? | “Customer A never sees Customer B’s data” |
| PR | ? | “Normal code review before anything merges” |
| CI | ? | “Your automated tests in the pipeline” |

---

# KEEP THE SAME STRUCTURE?

**Yes.** Slides → 3 files → Ask → Agent → Agent → recap.

**Change the words** to sound like you. This script is a strong draft—adjust phrases so they feel natural in your mouth when you rehearse.

---

# Practice tip

Read a section out loud. Any sentence you **stumble on** → rewrite it in your own words in the margin. That’s the version you should say on the call.
