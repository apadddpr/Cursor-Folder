# Claude Prompt · Topic 4 Google Doc Updates (Master Teleprompter + Copilot Pivot)

Copy **everything below the line** into Claude.

**Attach or paste:**
1. Full text of **SCRIPT · Topic 4 · Master ROLE PLAY (Teleprompter, current v2)**  
   https://docs.google.com/document/d/1y4-BSAp5aWAJYPNoehGRtdKB37Gepn41NkfdMUDcuiQ/edit

2. Full text of your **SCRIPT · Topic 4 · Copilot** pivot doc (if it exists as a separate Google Doc). If you do not have one yet, Claude should create it as a new doc section matching the master teleprompter format.

**Output:** Return the **full revised text** for each doc (not a diff summary). Preserve Alex's teleprompter conventions throughout.

---

You are revising Alex Padilla's **Topic 4 role-play teleprompter** for a Cursor Commercial AE take-home. Hiring manager **Joe** plays **Ashwin Baskaran**, VP Engineering at **Mercury**. First meeting, discovery then narrated demo bridge, no screen share.

## Teleprompter format rules (both docs)

- Spoken lines in quote blocks or `YOU SAY` blocks = say verbatim on the call
- `⏸ PAUSE`, `JOT`, `STAGE`, `SWITCH TAB` = stage directions (not spoken)
- One question per pause
- **No em dashes** in spoken copy
- Conversational AE voice, not marketing copy or feature dumps
- Do not quote cursor.com homepage language back at the prospect

---

# PART A · Master teleprompter v2 (9-question bank)

## Do NOT change these sections (already correct)

- BEFORE YOU START
- SECTION 1 · OPEN AND CONTRACT (conversational rapport + agenda)
- SECTION 2 · WHAT CURSOR IS (money version below — keep verbatim)
- SECTION 3 · LEVEL-SET (Matt on **AI Enablement**, Lev on Banking, calibration: working well / noisiest)
- Q1 · Q2 · Q3 discovery bank and SWITCH TAB table
- Q5 through Q9 (decision criteria through economic buyer)
- SECTION 6–9 (demo bridge, narrate demo, next step, break character)
- RULES WHILE READING (except update MEDDPICC Q4 row as specified)

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

## REQUIRED FIX 1 · Q4 · METRICS (M)

**Find and replace** the entire block titled `Q4 · METRICS + DESIRED OUTCOME (M)`.

**Delete these lines if present anywhere in Q4:**
- Peel (only if vague): "How do you track that today?"
- "Flip it around. If you got this right, what does good look like in 90 days?"
- JOT (90-day win)
- Any stage note that says 90-day answer feeds pilot metrics (unless reframed to use calibration from Section 3)

**Replace Q4 with this exact block:**

```
Q4 · METRICS (M)
Back from the pivot if you ran one. Now quantify.

YOU SAY
"When that gets in the way of shipping — missing a deadline, or product, GTM, or a customer waiting on something stuck — what does that actually cost you?"

⏸ PAUSE
JOT (cost): ____________________

STAGE: Do not ask "what does good look like in 90 days" here. Working well / noisy already captured at calibration. Demo bridge uses those areas.
```

**Rationale (do not put in doc):** Level-set calibration = what good looks like. Q4 = quantify cost only.

---

## REQUIRED FIX 2 · SECTION 5 · SUMMARIZE

**Find** the summarize playback that references `[Q4 win]` or "good in 90 days".

**Replace the YOU SAY block with:**

```
YOU SAY
"Let me play that back. Working well is [calibration]. The biggest drag is [Q1]. When it slips it costs you [Q4 cost]. The areas you want to improve are [calibration noisy / pain threads].

Did I get that right?"
```

**Delete:** "And good in 90 days looks like [Q4 win]."

---

## REQUIRED FIX 3 · MEDDPICC AT A GLANCE table

**Q4 row — change description from** `cost + 90-day win (pivots return here)` **to:**

`cost of delay only (quantify after pivot; no 90-day success question)`

---

## OPTIONAL · Q3 pivot instruction line

If Q3 says pivots "return here at Q4 and quantify" — keep that. It still applies; Q4 is cost-only now.

---

# PART B · Copilot pivot script (`SCRIPT · Topic 4 · Copilot`)

Create or fully replace the Copilot pivot doc. Match master teleprompter formatting. This doc opens when Joe says Copilot / GitHub. After Section 2 discovery, **return to master at Q4** to quantify cost.

## Frame (for you, not spoken as intro)

Flow: **flowers → where it thins out → Cursor wedge → optional example → 3 discovery questions → pushback blocks → return to master Q4**

Prep doc wedge: snippet help → task completion · local suggestions → codebase context · point solution → integrated experience

---

## SECTION 1 · ACKNOWLEDGE (~30 sec)

```
YOU SAY
"Copilot is strong. It helps engineers write code faster, and I would not rip it out on day one.

Where I would dig in is the work bigger than a snippet. Multi-file changes, the Central integration, tasks that span the codebase.

The way I think about it: Copilot is local suggestions and point assistance. Cursor is broader task completion across the real repo, as one integrated experience."

OPTIONAL · only if you want one concrete beat (~10 sec)
YOU SAY
"Quick example: rename a function across eight files and update the tests. Copilot helps line by line, you do the legwork. Cursor takes the whole change in one shot."

⏸ PAUSE
Let it land. Then go to your first question.
```

---

## SECTION 2 · DISCOVERY (3 questions)

```
QUESTION 1
YOU SAY
"Where does Copilot work great for your team, and where does it thin out?"

⏸ PAUSE
Listen fully.
JOT: Works = ____________________ · Thins out = ____________________

QUESTION 2
YOU SAY
"When a change touches several files or repos, how does that workflow go today?"

⏸ PAUSE
Listen for the multi-file gap.
JOT: Multi-file workflow = ____________________

QUESTION 3
YOU SAY
"With Central integrating, is codebase context holding up?"

⏸ PAUSE
Listen. Wedge into large codebase performance.
JOT: Context gap = ____________________

▶ RETURN TO MASTER SCRIPT at Q4 · METRICS (cost question)
```

---

## SECTION 3 · IF HE PUSHES BACK

```
BLOCK A · "Copilot is good enough"
YOU SAY
"For autocomplete, completely agree.

The question is the work bigger than one file, and getting every squad on the same standard. That is a different job than line completion."

⏸ PAUSE
Let him respond.

BLOCK B · optional · only if he engages
STAGE: one sentence of proof, then stop.

YOU SAY
"If it helps, Brex is a fintech that already had heavy AI usage and still moved the majority of its engineers onto Cursor for the bigger work."

⏸ PAUSE
Do not pile on. One proof point only.
```

---

## Copilot doc · DO NOT SAY (add as RULES section at bottom)

- Copilot is bad or obsolete
- Model benchmarks or pricing tiers
- Feature soup (Semantic Search, Bugbot) before he names the gap
- Rip and replace on day one

---

## Final deliverable

1. **Full revised Master teleprompter v2** with Part A fixes only (minimal diff elsewhere)
2. **Full Copilot pivot script** in matching format (Part B)
3. At the top of your response, a 5-line summary of what changed

Do not invent new discovery questions beyond what is specified. Do not add competitor comparisons to Section 2 Cursor overview. Do not reintroduce 90-day success questions anywhere in the master doc.
