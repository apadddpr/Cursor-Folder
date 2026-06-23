# Claude Prompt · Topic 4 Google Doc Updates (Reorder + Copilot + Q5 fix)

Copy **everything below the line** into Claude.

**Document to edit:** https://docs.google.com/document/d/1y4-BSAp5aWAJYPNoehGRtdKB37Gepn41NkfdMUDcuiQ/edit

Paste or attach the **full current** Master ROLE PLAY teleprompter v2 text.

**Also create/update:** Copilot pivot doc (`SCRIPT · Topic 4 · Copilot`) if separate, or add as appendix tab.

**Output:** Full revised text for each doc. Not a summary.

---

You are revising Alex Padilla's **Topic 4 Master ROLE PLAY teleprompter v2** for a Cursor AE take-home. Joe plays Ashwin, VP Eng at Mercury.

## Format rules

- Quote blocks / YOU SAY = spoken verbatim
- ⏸ PAUSE, JOT, STAGE, SWITCH TAB = not spoken
- One question per pause
- **No em dashes** in spoken copy
- Conversational AE voice

---

# PART A · REORDER DISCOVERY (main change)

## New discovery logic

**After** Section 1 (open/contract), Section 2 (Cursor overview), and Section 3 (Matt/Lev level-set validate only):

1. **Q1 · Current state / competition FIRST** (pivot trigger)
2. **Q2 · Calibrate** (working well / noisy) — moved from Section 3
3. **Q3–Q4 · Pain** (old Q1–Q2 content, same words)
4. **Q5 · Metrics** (cost only — see Part B)
5. **Q6–Q10 ·** old Q5–Q9 (criteria → economic buyer)

**Rationale:** Lay of land first, then what's working/breaking, then quantify, then close. Pain questions unchanged in substance; competition informs them.

## Do NOT change

- BEFORE YOU START
- SECTION 1 · OPEN AND CONTRACT (conversational version)
- SECTION 2 · WHAT CURSOR IS (money version — keep verbatim below)
- Q3–Q4 pain question wording (only renumber to Q3–Q4)
- Q6–Q10 substance (renumber from old Q5–Q9)
- SECTION 6–9 demo bridge, narrate, next step, break character
- Copilot / Claude / Fallback tab names

## SECTION 2 · keep verbatim

> Let me give you a quick picture of what Cursor is and how I want you to think about it.
>
> Cursor is an AI-native development environment. The shift is that the AI does not just suggest code, it does the work with you.
>
> Two things make that possible. It builds a complete understanding of your codebase, at any scale, and you use the best model for each task, whether that is OpenAI, Anthropic, Gemini, or others. That means write, review, and iteration across the whole project, not autocomplete on a single file.
>
> Most teams already have engineers using AI in different places. Cursor puts that in one workspace, with guardrails the org can set once instead of every squad running its own experiments.
>
> Hopefully that gives you a solid sense of what Cursor is.

---

## SECTION 3 · LEVEL-SET · edit

**Keep:** Matt AI Enablement + Lev validate block.

**Remove from Section 3:** calibration question ("where is AI working well / noisiest") — it moves to **Q2** after Q1 competition.

**End Section 3 with:** ▶ NEXT → Q1 (current state)

---

## SECTION 4 · DISCOVERY · renumber entire bank

Replace discovery order with this structure (preserve Alex's peel style where present):

### Q1 · CURRENT STATE / COMPETITION (C) · PIVOT TRIGGER
- "What are engineers actually using for AI-assisted development today, formally or ad hoc?"
- Peel: browser tools / squad doing own thing
- SWITCH TAB table (Copilot / Claude Code / General Fallback)
- Stage note: Run pivot, **return at Q2** (not Q4)

### Q2 · CALIBRATE
- "Quick calibration. Where is AI already working well for your team, and where is it noisiest?"
- Peel: "What makes those different?"
- JOT working well / noisy

### Q3 · PAIN (I) — old Q1 content
- Central integrating, biggest drag
- Peels: where show up first; widen if inside eng only

### Q4 · PAIN (I) — old Q2 content
- Consistency breaks down between squads

### Q5 · METRICS (M) — see Part B (cost only)

### Q6–Q10 — old Q5–Q9
- Criteria, process+timing, paper/Branden, champion (Matt AI Enablement), economic buyer

Update intro line: "Pick 6 to 8 threads, not all 10."

---

## SECTION 5 · SUMMARIZE · replace playback

```
YOU SAY
"Let me play that back. Working well is [Q2 calibration]. You are on [Q1 stack]. The biggest drag is [Q3]. When it slips it costs you [Q5 cost]. The areas you want to improve are [Q2 noisy / pain threads].

Did I get that right?"
```

Delete any "good in 90 days" or [Q4 win] references.

---

## MEDDPICC AT A GLANCE · replace table

| Q | Letter | Topic |
| Q1 | C | Current state / competition (PIVOT) |
| Q2 | — | Calibrate working well / noisy |
| Q3–Q4 | I | Pain |
| Q5 | M | Cost of delay only |
| Q6 | D | Decision criteria |
| Q7 | D | Decision process + timing |
| Q8 | P | Paper / Branden |
| Q9 | C | Champion |
| Q10 | E | Economic buyer |

---

## Add RULES bullet

- Q1 is pivot trigger. Return to master at **Q2** after pivot (not Q4).
- No 90-day success question at Q5.

---

# PART B · Q5 METRICS (cost only)

Replace any `Q4 · METRICS + DESIRED OUTCOME` or old Q5 metrics block with:

```
Q5 · METRICS (M)
Back from pivot if you ran one. Now quantify.

YOU SAY
"When that gets in the way of shipping — missing a deadline, or product, GTM, or a customer waiting on something stuck — what does that actually cost you?"

⏸ PAUSE
JOT (cost): ____________________

STAGE: Do not ask 90-day success or "how do you track that today."
```

---

# PART C · Copilot pivot doc (full script)

Format like master teleprompter. After pivot Section 2, **return to master at Q2** (calibrate), not Q4/Q5.

Include verbatim:

**SECTION 1 · ACKNOWLEDGE (~30 sec)**
- Copilot is strong, would not rip out day one
- Work bigger than snippet, Central, tasks across codebase
- Local suggestions vs task completion across real repo
- OPTIONAL: 8-file rename example

**SECTION 2 · DISCOVERY (3 questions)**
1. Where does Copilot work great / thin out?
2. When change touches several files or repos, how does workflow go?
3. With Central integrating, is codebase context holding up?

**▶ RETURN TO MASTER at Q2 · CALIBRATE**

**SECTION 3 · PUSHBACK**
- Block A: autocomplete agree; bigger than one file + standard
- Block B optional: Brex one sentence only

**DO NOT SAY:** Copilot bad, pricing tiers, rip and replace

---

## Deliverable

1. Full revised Master teleprompter v2 with reorder + Q5 fix + summarize + MEDDPICC table
2. Full Copilot pivot doc
3. 5-line summary of changes at top
