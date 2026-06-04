# Step-by-Step Script — Matches Master Talk Track

**Canonical script:** **`MASTER_TALK_TRACK_CONVERSATIONAL.md`** (edit there first).  
This file breaks the same words into **steps** for Notes / phone.  
**Clicks:** **`DEMO_CLICK_ONLY.md`** (short SAY column synced to master).

**How to use on your phone / second screen:**
1. Copy **`MASTER_TALK_TRACK_CONVERSATIONAL.md`** into **Apple Notes** (full script), or  
2. Use this file as a **step checklist** and open master for the words.

**After `git pull`:** https://github.com/apadddpr/Cursor-Folder/blob/main/demo/MASTER_TALK_TRACK_CONVERSATIONAL.md

---

# PART 1 — SLIDES (~5 min)

## Intro — camera only (no slide)

**CLICK:** Webcam on. Slides ready, not shared yet.

**SAY:**
> Hey Joe — how’ve you been?

*[Let him answer.]*

> Good — I was on PTO for a wedding and a couple birthdays in San Diego, so I can’t complain. Feels good to be back in the swing of things.

> I know we’re slated for about twenty minutes — I want to be conscious of your time. We’re not expecting anyone else on your end, right? Perfect.

> Quick context on today: last time we spoke, three things came up — compliance work slowing teams down, getting people ramped in the US and India, and using AI without skipping security review. So I shaped the live piece around that.

> Plan is simple: five minutes — quick refresher on Cursor and why it matters for Responsive. Then I’ll share my screen and show those three ideas live — small example, not a canned demo. Few minutes at the end for your questions.

> By the end you’ll have a clear sense of whether this is worth exploring further — or not, and that’s completely fine. Does that sound like a good plan?

*[Pause.]*

> Great — I’ll start with the big picture, then we’ll get into the product.

**CLICK:** Share screen → Google Slides → Slide 1

---

## Slide 1 — market shift

**CLICK:** Gesture at slide. Don’t read bullets verbatim. → Advance to Slide 2

**SAY:**
> Here’s the shift I’m seeing.

> Engineers used to get help one line at a time. Now they’re handing off a whole assignment—fix this ticket, add logging everywhere it’s missing, add tests—and then reviewing the result like any other pull request.

> What matters is whether the tool knows your product and your rules—not which AI model had hype last month.

> And every leader I talk to wants speed and safety—not one or the other.

> That’s especially true for Responsive. Your customers want security questionnaires and RFPs answered fast and right. Your engineering org feels the same pressure — ship AI product work without creating compliance debt.

> So the question isn’t “can AI write code?” It’s: can everyone use AI the same governed way — Portland, Coimbatore, all of it — without fifty random ChatGPT workflows?

---

## Slide 2 — what Cursor is (product)

**CLICK:** Point at each row on slide. → Advance to Slide 3

**SAY:**
> That’s where Cursor fits. Not a plugin on someone else’s editor — an AI-native IDE built as one product.

> Whole-project agents — I’ll show this in a minute — when work spans multiple files, the tool isn’t stuck on one tab.

> Rules — you write standards once: audit logging, customer data boundaries. Every developer and every agent session follows them. You’ll see this live.

> Review before merge — Cursor produces a draft. Your PR process, CI, and security review don’t go away.

> On the enterprise side—privacy controls, single sign-on, security documentation—the same trust questions your buyers ask Responsive, your security team asks us.

**Optional (don’t linger):**
> People compare us to Copilot or Claude Code — happy to unpack in Q&A. Short version: Copilot is great in-file; Claude Code is great in the terminal; Cursor is the full workspace where most of your org already lives.

---

## Slide 3 — outcomes + demo map

**CLICK:** Walk bullets. Point at “Next: live demo.” Stop slide share. Share Cursor.

**SAY:**
> What I’d want you to see in the first ninety days—I’ll tie each one to the demo:

> Ramp: Someone new can ask how your product actually works on day three—not wait until week three to feel oriented. I’ll show that in Ask mode.

> Governed AI: Your standards live in one place; the AI has to follow them. I’ll open the Rules file.

> Compliance work: The annoying tickets that touch five files—like audit logging everywhere. I’ll run one live.

> Security: Something like this export shouldn’t be public—fix it the same way, still reviewed by a human. Second live example.

> Pilot: Small group, real tickets, thirty days—then decide if you expand.

> Everything on this slide — I’m about to show you in Cursor, not tell you about.

> Can you see my Cursor window?

---

# PART 2 — LIVE DEMO (steps 1–20)

*Layout: **LEFT** = file tree · **CENTER** = editor · **RIGHT** = agent panel*

---

## Step 1

**CLICK:** Tab **ARCHITECTURE.md** (or LEFT tree → docs → ARCHITECTURE.md)

**SAY:**
> I built a small sample app for today—it’s not Responsive’s code, and I don’t have access to your real repo. It’s the kind of thing your team might own: software that helps with security questionnaires and compliance.

---

## Step 2

**CLICK:** CENTER — scroll to **Known gaps**

**SAY:**
> I left gaps on purpose so we can fix them live. The doc lists them here under known gaps.

---

## Step 3

**CLICK:** Tab **questionnaires.ts**

**SAY:**
> Here’s the ticket—JIRA-4827. Whenever someone creates or updates a questionnaire, you need an audit trail—who changed what, when. Your enterprise customers and SOC2 care about that.

---

## Step 4

**CLICK:** CENTER — point at **TODO(JIRA-4827)** (don’t read code)

**SAY:**
> The project already has code to write those audit events. It’s just not hooked up on every route yet—easy to miss one file. That’s the TODO. I won’t make you read TypeScript—you get the picture.

---

## Step 5

**CLICK:** Tab **responsive-platform.mdc**

**SAY:**
> Before we let AI change a line of code, Rules.

---

## Step 6

**CLICK:** CENTER — scroll Rules file slowly

**SAY:**
> This is where Responsive writes the non-negotiables: always log changes, always respect customer boundaries, don’t add insecure shortcuts.

> Same playbook for every developer and every agent session—that’s the AI without skipping security review piece you cared about.

---

## Step 7

**CLICK:** RIGHT — click in agent text box

**SAY:**
> You also mentioned ramp—especially across US and India. I’m going to show that before we close JIRA-4827 on purpose: same tool, learn first, then ship.

---

## Step 8

**CLICK:** **Cmd + .** → **Ask** (or use Ask dropdown on the box)

**SAY:** *(nothing required — or one word: “Ask mode.”)*

---

## Step 9

**CLICK:** RIGHT — paste onboarding prompt → **Return**

**PASTE:**
```text
I'm a new engineer on day 3 at Responsive. Explain how multi-tenant isolation works in this questionnaire API and where we could accidentally expose one customer's data to another.
```

**SAY (while it runs):**
> While that runs—this is the ramp piece. Same tool they’ll use to ship code. A new hire in Portland or Coimbatore can ask how we make sure Customer A never sees Customer B’s data—and get an answer from this codebase—not from guessing after three weeks of digging through internal docs.

> It doesn’t replace a senior engineer. It means they show up to the first pairing session with better questions.

---

## Step 10

**CLICK:** RIGHT — skim answer (don’t read it all)

**SAY:**
> You can see it pulled specifics from the project—even called out risky spots. That’s the onboarding use case. Next I’ll switch to Agent and actually implement the ticket.

**Optional buy-in:**
> For someone in week one in Coimbatore or Beaverton—would this beat digging through Confluence and Slack?

*[If yes: “That’s the ramp story.”]*

---

## Step 11

**CLICK:** **Cmd + .** → **Agent** (same panel — do NOT need New Agent)

**SAY:**
> Same tool—now Agent mode. I’ll describe the outcome for that compliance ticket and let it work across files. You review the diff like any other PR.

---

## Step 12

**CLICK:** RIGHT — point at **Composer 2.5 Fast** (don’t change model)

**SAY:**
> Real quick—since it’s visible here—I just want to highlight that I’m using our own model, Composer 2.5. One of the things teams love most about Cursor is they’re not locked into just our model. They can use any model they like—whether that’s Opus 4.8, Chat 5.5, whatever you’ve standardized on.

> I will call out, though—and you’ll see the speed of the agent here in a sec—Composer 2.5 is benchmarking with those top models at about one-tenth of the cost. Obviously, as teams think about their AI spend budget, that’s gonna be something I imagine you factor in heavily—but I just wanted to call that out before I run the agent.

---

## Step 13

**CLICK:** RIGHT — paste **PROMPT 1** from Notes → **Return**

**SAY (optional one line before paste):**
> I’ll describe the outcome—not the step-by-step code.

---

## Step 14

**CLICK:** Wait 30–90 sec. Keep talking.

**SAY (loop):**
> Three things to watch.

> One—it’s looking at more than one file, not just what’s on screen.

> Two—our Rules already applied—I didn’t retype the compliance requirements.

> Three—when it’s done, I get a before-and-after view, like code review. Nothing goes live from here. Your team still opens a PR, tests still run, someone still approves. We’re speeding up the first draft, not removing the gate.

---

## Step 15

**CLICK:** RIGHT — click **Review** (or **Review changes**)

**SAY:**
> As a tech lead, I’d scan this in a few minutes: logging added where it was missing, tests included. Work that might take an hour or more of careful editing becomes a review job.

---

## Step 16

**CLICK:** CENTER / diff — glance, point at changes if visible

**SAY:**
> And this rhymes with what you sell: trust and proof—just aimed at your own engineering team.

---

## Step 17

**CLICK:** RIGHT — paste **PROMPT 2** → **Return**

**SAY (while it runs):**
> Second example—a security review found an export that didn’t check who’s logged in. Same flow: describe the fix, Rules apply, human reviews the change.

> That’s how I talk about speed and safety together—you’re not picking one.

---

## Step 18

**CLICK:** Wait. When done → **Review** again if shown

**SAY:**
> Login check added, customer scoping added. Still goes through your normal security review.

---

## Step 19

**CLICK:** Glance diff

**Optional buy-in:**
> Catching an unauthenticated export in the same workflow—does that feel closer to how you want security and velocity together?

---

## Step 20

**CLICK:** Look at camera (stop clicking)

**SAY — pilot close:**
> Joe, just to recap what we walked through: ramping with Ask, Rules before the AI changes anything, and Agents working on real compliance work, with you still reviewing before merge.

> I mean, based on what we covered today and how you reacted, it sounds like Cursor fits what you were asking for, and you can keep me honest there, BUT—

> if that’s fair, would you be open to a suggestion?

> Great. I’d like to set up a small group of test users, with enough usage to take on some lighter, but real tickets so they can get a feel for it. We’d set up check-ins throughout the pilot to handle questions and give best practices as updates come about, and then at the end of the 30 days we can decide together if a broader rollout makes sense—

> would that be a bad idea?

**If yes — logistics:**
> What’s the best way to get a one-pager in front of you—email, or someone on your team?

**Q&A:**
> Happy to go wherever is useful—Copilot, Claude Code, security, pilot details.

---

# PROMPTS (copy to Notes)

**PROMPT 1 — JIRA-4827:** see `DEMO_CLICK_ONLY.md` bottom  
**PROMPT 2 — SEC-1192:** see `DEMO_CLICK_ONLY.md` bottom

---

# After you edit

1. Save this file (or send your Notes version).  
2. Ask: **“Sync DEMO_CLICK_ONLY SAY from my step script.”**  
3. We’ll shorten each **SAY** to one line for the printed click card.
