# Topic 4 · Master Teleprompter
## THE ONLY master script for Joe role play · Edit this file

**Pivot tabs (only other Topic 4 scripts):**
- `Topic4_Pivot_Copilot.md`
- `Topic4_Pivot_Claude_Code.md`

**Discovery order:** Level-set → **Q1 current state (pivot)** → Q2 calibrate → Q3–Q4 pain → Q5 cost → Q6–Q10 → summarize → demo

---

## BEFORE YOU START (out of character · say to Joe)

> I will run this as a real first call. I play myself, you are Ashwin. It is a 45 minute meeting, discovery then a quick narrated view of what a demo would show. I will not screen share, I will narrate. Ready when you are?

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

Run pivot Sections 1–2. **Return at Q2 · calibrate.**

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

> With Central integrating, what is the single biggest drag on engineering productivity right now?

### ⏸ PAUSE

**Peel:** "Where does it show up first, reviews, onboarding, cross-squad handoffs?"

**Widen (only if stayed inside eng):** "Does that stay in engineering, or do product, GTM, or customers feel it when standardization slips?"

**JOT (biggest drag):** ____________________

---

### Q4 · PAIN (I) · consistency

### YOU SAY:

> As the codebase grows with Central in it, where does consistency break down between squads?

### ⏸ PAUSE

**JOT:** ____________________

---

### Q5 · METRICS (M) · cost only

### YOU SAY:

> When that gets in the way of shipping — missing a deadline, or product, GTM, or a customer waiting on something stuck — what does that actually cost you?

### ⏸ PAUSE

**JOT (cost):** ____________________

**Do not ask:** 90-day success or "how do you track that today."

---

### Q6 · DECISION CRITERIA (D)

### YOU SAY:

> If you standardized on one approach, what would it have to satisfy? Security, IDE fit, monorepo performance, something else?

### ⏸ PAUSE

**JOT (must-haves):** ____________________

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

> For anything that touches source code, what does security review look like, and would Branden need to weigh in early?

### ⏸ PAUSE

**If he engages security (optional):**

> Since you are fintech, the relevant pieces are Privacy Mode, so code is not stored or trained on, and SOC 2. I would bring Branden in early so it is settled up front.

**JOT:** ____________________

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

### YOU SAY:

> Let me play that back. Working well is **[Q2 calibration]**. You are on **[Q1 stack]**. The biggest drag is **[Q3]**. When it slips it costs you **[Q5 cost]**. The areas you want to improve are **[Q2 noisy / pain threads]**.
>
> Did I get that right?

### ⏸ PAUSE

---

## SECTION 6 · DEMO BRIDGE (~1 min)

### YOU SAY:

> Based on what you shared, the part worth showing is the piece tied to that drag. I will not screen share today. Let me narrate what you would see so it is grounded in your world. Does that work?

### ⏸ PAUSE

Get a yes.

---

## SECTION 7 · NARRATE DEMO (~60 to 90 sec)

### YOU SAY:

> Picture a change that touches several files across the Central boundary. Instead of a snippet, the agent reads the whole repo, pulls the right context, drafts the change across those files, and you review it like any other pull request.
>
> Because you are not locked to one model, you are on the best one for that task underneath. Your standards are set once and applied to every engineer and every AI session, so it stays consistent across squads. And review keeps pace, because it can look at the diff before it merges.
>
> That is the difference between writing one line faster and doing the whole task across the codebase.

### ⏸ PAUSE

**STAGE:** "That is the narrated version. What stands out, or what would you want to see for real?"

---

## SECTION 8 · NEXT STEP (~30 sec)

### YOU SAY:

> If this is worth a closer look, the natural next step is a short working session with whoever owns developer experience, scoped against your codebase and what you mentioned today. Would that be useful, and who would you want in the room?

### ⏸ PAUSE

---

## SECTION 9 · BREAK CHARACTER

### YOU SAY (to Joe):

> That is where I would leave the first call. Happy to hear your read, what landed and what you would push on.

---

## 10–15 MIN PRIORITY

Level-set → **Q1 stack** → Q2 calibrate → Q3 pain → **Q5 cost** → summarize → demo bridge

---

## RULES

- One question per pause
- Q1 = pivot trigger. Return at Q2 after Copilot or Claude tab
- No em dashes in spoken copy
