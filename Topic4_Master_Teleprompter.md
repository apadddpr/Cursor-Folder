# Topic 4 · Master Teleprompter
## THE ONLY master script for Joe role play · Edit this file

**Pivot tabs (only other Topic 4 scripts):**
- `Topic4_Pivot_Copilot.md`
- `Topic4_Pivot_Claude_Code.md`

**Discovery order:** Level-set → **Q1 current state (pivot)** → Q2 calibrate → Q3–Q4 pain → Q5 cost → Q6–Q10 → summarize → demo bridge

---

## BEFORE YOU START (out of character · say to Joe)

> I will run this as a real first call. I play myself, you are Ashwin. It is a 45 minute meeting, discovery then a quick live look at how Cursor would address what we uncover. Ready when you are?

**STAGE:** Optional 60 sec sales room tab (Matt/Lev only). Switch back.

---

## SECTION 1 · OPEN AND CONTRACT (~1 to 2 min)

### YOU SAY:

> Ashwin, what's going on, how are you? ... Good, great to meet you, glad we could find time to connect.
>
> We are not expecting anyone else on your end, is that right? Cool.
>
> So let me give you an idea of what to expect here. We have got 30 to 45 minutes, that work for you?
>
> For this call I really just want to give you an overview of what Cursor is and why it is relevant to you and the Mercury team. From there I would like to get a sense of how your team is using the tools in your stack today, so I get a good understanding of what is working and maybe where there are areas to improve.
>
> If we uncover a few things where we align that Cursor can help, we will spend the back half in the platform showing you some real-life examples of how you can expect this to work for the team. By the end you will know whether this is something worth taking further, or maybe not, and that is okay too.
>
> I just want to make sure that all sounds good to you.

### ⏸ PAUSE

Get the yes.

---

## SECTION 2 · WHAT CURSOR IS (~45 sec)

### YOU SAY:

> Let me give you a quick picture of what Cursor is and how I want you to think about it.
>
> Cursor is an AI-native development environment. The shift is that the AI does not just suggest code, it does the work with you.
>
> Two things make that possible. It builds a complete understanding of your codebase, at any scale, and you use the best model for each task, whether that is OpenAI, Anthropic, Gemini, or others. That means write, review, and iteration across the whole project, not autocomplete on a single file.
>
> Most teams already have engineers using AI in different places. Cursor puts that in one workspace, with guardrails the org can set once instead of every squad running its own experiments.
>
> Hopefully that gives you a solid sense of what Cursor is.

### ⏸ PAUSE

Hand it back.

---

## SECTION 3 · LEVEL-SET (~2 min)

### YOU SAY:

> Before I dig in, I want to level-set on what I have already picked up, so I am not working off bad assumptions.
>
> I spoke with Matt on AI Enablement and Lev on Banking. A consistent theme: AI usage is active, but standardizing it across squads is the harder problem, especially with Central adding complexity.
>
> From your seat, does that match what you are seeing, or is it different?

### ⏸ PAUSE · STOP

Let him confirm or correct.

**JOT (his framing):** ____________________

### ▶ NEXT → Q1 (current state). Do not calibrate yet.

---

## SECTION 4 · DISCOVERY

Bank of threads. Pick 6 to 8, not all 10. Peel before advancing.

---

### Q1 · CURRENT STATE / COMPETITION (C) · PIVOT TRIGGER

### YOU SAY:

> What are engineers actually using for AI-assisted development today, formally or ad hoc?

### ⏸ PAUSE

**Peel:** "Anything off to the side, browser tools, or a squad doing its own thing?"

Listen fully. Do not lead.

**JOT (stack):** ____________________

### 🔀 SWITCH TAB

| He names | Open |
|----------|------|
| Copilot / GitHub | `Topic4_Pivot_Copilot.md` |
| Claude Code / Anthropic / terminal-first | `Topic4_Pivot_Claude_Code.md` |
| Mix / GPT / internal / vague / nothing formal | **Stay here.** Ask: "Where does that setup work well, and where does it fall short on Mercury's codebase?" Then → Q2 |

Run pivot Section 1 only. **Return at Q2 · calibrate.**

---

### Q2 · CALIBRATE

### YOU SAY:

> Quick calibration. Where is AI already working well for your team, and where is it noisiest?

### ⏸ PAUSE

**Peel:** "What makes those different?"

**JOT (working well / noisy):** ____________________

---

### Q3 · PAIN (I) · biggest drag

### YOU SAY:

> What is the single biggest drag on engineering productivity right now?

### ⏸ PAUSE

**Peel:** "Where does it show up first, reviews, onboarding, cross-squad handoffs?"

**Peel (only if needed):** "Does that tie to integration work you have in flight, or somewhere else?"

**Widen (only if stayed inside eng):** "Does that stay in engineering, or do product, GTM, or customers feel it when standardization slips?"

**JOT (biggest drag):** ____________________

---

### Q4 · PAIN (I) · consistency

### YOU SAY:

> Where does consistency break down between squads as the codebase grows?

### ⏸ PAUSE

**JOT (consistency gap):** ____________________

---

### Q5 · METRICS (M) · cost only

### YOU SAY:

> When that kind of thing gets in the way of shipping, have you ever tried to quantify what it cost you, even roughly?

### ⏸ PAUSE

**Peel (only if vague or he engages):**

> Something I have seen teams do is walk through a past slip, a feature or unlock that missed the window and pushed customer or revenue impact out. Curious if you have looked at it that way, even back-of-napkin.

**JOT (cost):** ____________________

**Do not ask:** 90-day success or a full incident-cost lecture upfront.

---

### Q6 · DECISION CRITERIA (D)

### YOU SAY:

> When you think about bringing something like this in, what would need to be true for you to say it is worth a pilot?

### ⏸ PAUSE

**Peel (if he leads with security only):** "Totally fair, that is table stakes. What else beyond security would you need to see?"

**JOT (pilot bar):** ____________________

---

### Q7 · DECISION PROCESS + TIMING (D)

### YOU SAY:

> Walk me through how a tool like this gets evaluated here. One squad first, or team-wide?

### ⏸ PAUSE

**Peel:** "Is there a timeframe driving it, or is it more when-you-get-to-it?"

**JOT (process + timing):** ____________________

---

### Q8 · PAPER PROCESS (P)

### YOU SAY:

> For anything that touches source code, what does security review look like on your end, and would Branden need to weigh in early?

### ⏸ PAUSE

**If he engages security (optional):**

> Since you are fintech, the relevant pieces are Privacy Mode, so code is not stored or trained on, and SOC 2. I would bring Branden in early so it is settled up front.

**JOT (paper process):** ____________________

---

### Q9 · CHAMPION (C)

### YOU SAY:

> If you ran an eval, who would co-own it with you? Matt on AI Enablement, Lev on Banking, someone else?

### ⏸ PAUSE

**JOT (champion):** ____________________

---

### Q10 · ECONOMIC BUYER (E)

### YOU SAY:

> When something like this gets resourced, does it run through you, or does Max need to sign off?

### ⏸ PAUSE

**JOT (buyer):** ____________________

---

## SECTION 5 · SUMMARIZE (~1 min)

**Fill these during discovery. Your recap pulls from here — do not scramble for notes.**

| Slot | Source | Your jot |
|------|--------|----------|
| **A** | Q1 stack / current state | ____________________ |
| **B** | Q2 working well / noisy | ____________________ |
| **C** | Q3 biggest drag (+ Q4 if relevant) | ____________________ |
| **D** | Q5 cost / why it matters | ____________________ |

### YOU SAY:

> Okay, let me reiterate what we heard. It sounds like **A**, **B**, **C**, and **D**, right?
>
> If we can address those, this is worth entertaining further.

### ⏸ PAUSE

Get the yes or correction.

---

## SECTION 6 · DEMO BRIDGE (~1 min)

### YOU SAY:

> What I want to do now is highlight some of these areas live for you, so you get a real-life example of how we would anticipate Cursor addressing them. Does that work?

### ⏸ PAUSE

Get a yes. Transition to live demo (or narrated demo if no screen share in this session).

**STAGE (after demo):** "What stood out, or what would you want to see for real?"

---

## SECTION 7 · BREAK CHARACTER

### YOU SAY (to Joe):

> That is where I would leave the first call. Happy to hear your read, what landed and what you would push on.

---

## 10–15 MIN PRIORITY

Level-set → **Q1 stack** → Q2 calibrate → Q3 pain → **Q5 cost** → summarize (A–D) → demo bridge

---

## RULES

- One question per pause
- Q1 = pivot trigger. Return at Q2 after Copilot or Claude tab. Pivot Section 1 only in short mock
- No em dashes in spoken copy
- Q6 = pilot bar. Q8 = security process. Do not duplicate
