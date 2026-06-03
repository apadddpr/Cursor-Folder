# Master Talk Track — Conversational Version

**Same structure and timing as `MASTER_TALK_TRACK.md`** — same clicks, same prompts — but sounds like **you talking to a person**, not a whitepaper.

**Use:**
- **This file** → what you **say** (pitch + demo)
- **`DEMO_CLICK_ONLY.md`** → what you **click**
- **Notes app** → Prompt 1 & 2 (unchanged)

**Jargon rule:** If you use a technical term, you get **one plain-English line** right after.

**Sound human:** Don’t say “first bullet,” “grounded in your code,” or “the helper exists.” Say what a person would say to a CTO at lunch.

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
> “Quick context on today: last time we spoke, three things came up — **compliance work slowing teams down**, **getting people ramped in the US and India**, and **using AI without skipping security review**. So I shaped the live piece around that.”  
>  
> “Plan is simple: **five minutes** — quick refresher on Cursor and why it matters for Responsive. Then I’ll **share my screen** and show those three ideas live — small example, not a canned demo. Few minutes at the end for your questions.”  
>  
> “By the end you’ll have a clear sense of whether this is worth exploring further — or not, and that’s completely fine. **Does that sound like a good plan?**”  
>  
> *[Pause for yes.]*  
>  
> “Great — I’ll start with the big picture, then we’ll get into the product.”

**[Click Share Screen → Google Slides or `slides/pitch-deck.html` → Slide 1]**

---

## [00:30] — SLIDE 1 on screen

**On slide they see:**
- Title: *Development is moving from line-by-line help to whole tasks*
- Multi-file work · codebase + standards · speed and safety

**[Gesture at title or first bullet — don't read it aloud]**

> “Here’s the shift I’m seeing.
>
> Engineers used to get help one line at a time. Now they’re handing off a **whole assignment**—‘fix this ticket, add logging everywhere it’s missing, add tests’—and then **reviewing the result** like any other pull request.
>
> What matters is whether the tool knows **your** product and **your** rules—not which AI model had hype last month.
>
> And every leader I talk to wants **speed and safety**—not one or the other.”

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
> On the enterprise side—privacy controls, single sign-on, security documentation—the same trust questions your buyers ask Responsive, your security team asks us.”

**[Optional one line — don't linger]**

> “People compare us to Copilot or Claude Code — happy to unpack in Q&A. Short version: Copilot is great in-file; Claude Code is great in the terminal; **Cursor is the full workspace** where most of your org already lives.”

**[Click → Slide 3]**

---

## [03:45] — SLIDE 3 on screen

**On slide they see:**
- Faster ramp · Governed AI · Compliance work · Security + review · Pilot
- **Next: live demo**

**[Walk down the bullets — point, then explain each in plain English]**

> “What I’d want you to see in the first ninety days—I'll tie each one to the demo:
>
> **Ramp:** Someone new can ask how your product actually works on day three—not wait until week three to feel oriented. I’ll show that in Ask mode.
>
> **Governed AI:** Your standards live in one place; the AI has to follow them. I’ll open the Rules file.
>
> **Compliance work:** The annoying tickets that touch five files—like audit logging everywhere. I’ll run one live.
>
> **Security:** Something like ‘this export shouldn’t be public’—fix it the same way, still reviewed by a human. Second live example.
>
> **Pilot:** Small group, real tickets, thirty days—then decide if you expand.”

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
| Review before merge | Click **Review** after Prompt 1 — talk while diff is visible |

---

# PART 2 — LIVE DEMO (~5 min)

*Hands: follow **`DEMO_CLICK_ONLY.md` steps 1–20**. Words: this file.*

### Talk track ↔ clicks (same order)

| Talk section | Click steps | What you do on screen |
|--------------|-------------|------------------------|
| Problem (architecture + TODO) | **1–4** | Tab or tree → **ARCHITECTURE** → scroll **Known gaps** → tab **questionnaires.ts** → point **TODO** |
| Rules | **5–6** | Tab **responsive-platform.mdc** → slow scroll |
| Ask / ramp | **7–10** | RIGHT panel → **Cmd+.** **Ask** → paste onboarding → Return → skim answer |
| Agent + Composer | **11–12** | **Cmd+.** **Agent** → point **Composer 2.5** → say model callout |
| JIRA-4827 | **13–16** | Paste **Prompt 1** → wait → click **Review** → talk over diff |
| SEC-1192 | **17–19** | Paste **Prompt 2** → wait → **Review** → glance / buy-in line |
| Close + pilot | **20** | Camera — pilot script (no clicks) |

**Open files:** preloaded **tabs** (click tab) or **`Cmd+P`** — same story either way.

---

## [05:00] — The problem (why: set the scene before code)

**[Steps 1–2: tab **ARCHITECTURE.md** or `Cmd+P` → ARCHITECTURE → scroll to Known gaps]**

> “I built a **small sample app** for today—it’s not Responsive’s code, and I don’t have access to your real repo. It’s the kind of thing your team might own: software that helps with **security questionnaires** and compliance.
>
> I left gaps on purpose so we can fix them live. The doc lists them here under **known gaps**.”

**[Steps 3–4: tab **questionnaires.ts** or `Cmd+P` → questionnaires → point at TODO]**

> “Here’s the ticket—JIRA-4827. Whenever someone creates or updates a questionnaire, you need an **audit trail**—who changed what, when. Your enterprise customers and SOC2 care about that.
>
> The project already has code to write those audit events. It’s just **not hooked up on every route yet**—easy to miss one file. That’s the TODO. I won’t make you read TypeScript—you get the picture.”

---

## [05:45] — Rules (why: governance before any AI runs)

**[Steps 5–6: tab **responsive-platform.mdc** or `Cmd+P` → responsive-platform → slow scroll]**

> “Before we let AI change a line of code, **Rules**.
>
> This is where Responsive writes the non-negotiables: always log changes, always respect customer boundaries, don’t add insecure shortcuts.
>
> Same playbook for **every developer and every agent session**—that’s the ‘AI without skipping security review’ piece you cared about.”

---

## [06:15] — Onboarding (Ask) (why: ramp *before* we fix the ticket—not a random pivot)

**[Steps 7–9: RIGHT panel → `Cmd + .` → **Ask** → paste onboarding → Return]**

> “You also mentioned **ramp**—especially across US and India. I’m going to show that **before** we close JIRA-4827 on purpose: same tool, **learn** first, then **ship**.”

```text
I'm a new engineer on day 3 at Responsive. Explain how multi-tenant isolation works in this questionnaire API and where we could accidentally expose one customer's data to another.
```

**[While it thinks:]**

> “While that runs—this is the ramp piece. Same tool they’ll use to ship code. A new hire in Portland or Coimbatore can ask, ‘How do we make sure Customer A never sees Customer B’s data?’ and get an answer from **this** codebase—not from guessing after three weeks of digging through internal docs.
>
> It doesn’t replace a senior engineer. It means they show up to the first pairing session with better questions.”

**[Step 10: When answer shows — skim, don’t read it all]**

> “You can see it pulled specifics from the project—even called out risky spots. That’s the onboarding use case. Next I’ll switch to Agent and actually implement the ticket.”

**[Optional buy-in — one beat, then move on:]**

> “For someone in week one in Coimbatore or Beaverton—would this beat digging through Confluence and Slack?”

*[If yes: “That’s the ramp story.” If he expands, nod once and continue.]*

---

## [07:00] — Switch to shipping (why: now we close the ticket you saw)

**[Step 11: `Cmd + .` → **Agent**, or Shift+Tab]**

> “Same tool—now **Agent** mode. I’ll describe the outcome for that compliance ticket and let it work across files. You review the diff like any other PR.”

**[Step 12: Point at model name in the agent panel — e.g. Composer 2.5 Fast — then:]**

> “Real quick—since it’s visible here—I just want to highlight that I’m using **our own model, Composer 2.5**. One of the things teams love most about Cursor is they’re **not locked into just our model**. They can use any model they like—whether that’s **Opus 4.8**, **Chat 5.5**, whatever you’ve standardized on.
>
> I will call out, though—and you’ll see the speed of the agent here in a sec—**Composer 2.5 is benchmarking with those top models at about one-tenth of the cost**. Obviously, as teams think about their AI spend budget, that’s gonna be something I imagine you factor in heavily—but I just wanted to call that out before I run the agent.”

---

## [07:15] — Ticket #1 (paste PROMPT 1)

**[Step 13: Paste from Notes → Return]**

**[Steps 14 — While it runs — loop these:]**

> “Three things to watch.
>
> **One**—it’s looking at **more than one file**, not just what’s on screen.
>
> **Two**—our **Rules** already applied—I didn’t retype the compliance requirements.
>
> **Three**—when it’s done, I get a **before-and-after view**, like code review. Nothing goes live from here. Your team still opens a PR, tests still run, someone still approves. We’re speeding up the **first draft**, not removing the gate.”

**[Steps 15–16: When agent finishes → click **Review** (or **Review changes**) in the RIGHT panel. Diff opens — glance in CENTER or diff view.]**

> “As a tech lead, I’d scan this in a few minutes: logging added where it was missing, tests included. Work that might take an hour or more of careful editing becomes a **review job**.
>
> And this rhymes with what you sell: **trust and proof**—just aimed at your own engineering team.”

---

## [08:45] — Ticket #2 (paste PROMPT 2)

**[Step 17: Paste → Return]**

**[Step 18 — While it runs:]**

> “Second example—a security review found an export that didn’t check who’s logged in. Same flow: describe the fix, Rules apply, human reviews the change.
>
> That’s how I talk about **speed and safety together**—you’re not picking one.”

**[Steps 19: When done → click **Review** again if shown. Glance diff.]**

> “Login check added, customer scoping added. Still goes through your normal security review.”

**[Optional buy-in — one beat:]**

> “Catching an unauthenticated export in the same workflow—does that feel closer to how you want **security and velocity** together?”

*[If yes: “Same workflow—you’re not picking one.” Then close.]*

---

## [09:30] — Close + pilot ask

**[Step 20: Camera if you can. Deliver this as your final close—then pause for Joe.]**

> “Joe, just to recap what we walked through: ramping with Ask, Rules before the AI changes anything, and Agents working on real compliance work, with you still reviewing before merge.
>
> I mean, based on what we covered today and how you reacted, it sounds like Cursor fits what you were asking for, and you can keep me honest there, BUT—
>
> if that’s fair, would you be open to a suggestion?
>
> Great. I’d like to set up a small group of test users, with enough usage to take on some lighter, but real tickets so they can get a feel for it. We’d set up check-ins throughout the pilot to handle questions and give best practices as updates come about, and then at the end of the 30 days we can decide together if a broader rollout makes sense—
>
> would that be a bad idea?”

**[If he says it’s not a bad idea — logistics only, no new “outs”:]**

> “What’s the best way to get a one-pager in front of you—email, or someone on your team?”

**[Then Q&A if time:]**

> “Happy to go wherever is useful—Copilot, Claude Code, security, pilot details.”

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

**Yes.** Slides → files (1–6) → Ask (7–10) → Agent + Composer (11–12) → Prompt 1 + **Review** (13–16) → Prompt 2 + **Review** (17–19) → pilot close (20).

**Change the words** to sound like you. This script is a strong draft—adjust phrases so they feel natural in your mouth when you rehearse.

---

# Practice tip

Read a section out loud. Any sentence you **stumble on** → rewrite it in your own words in the margin. That’s the version you should say on the call.
