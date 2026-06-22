# TOPIC 4 · LOCKED
## First-meeting role play · Joe as Ashwin · Rehearsal doc

**Status:** Locked for rehearsal. Checks & balances on full deck come after.

---

## Before you start (say to Joe, out of character)

> "Joe, I will run this as a first 45-minute call with you as Ashwin. Discovery first. If we find areas Cursor can help, I will bridge to a demo. I will not screen-share the product in the take-home, but I will show you exactly how I would transition and what I would show."

Optional: 60–90 sec sales room tab (Matt/Lev themes only). Switch back. Begin role play.

---

## Simulated call arc (45 min · compress to ~18–22 min in take-home)

| # | Phase | Simulated | Role play |
|---|-------|-----------|-----------|
| 1 | Upfront contract | 0–2 min | ~1 min |
| 2 | Cursor overview | 2–4 min | ~90 sec |
| 3 | Matt/Lev level-set | 4–6 min | ~2 min |
| 4 | Discovery | 6–22 min | ~10–12 min |
| 5 | Summarize A/B/C | 22–24 min | ~1 min |
| 6 | **Demo bridge** | 24–26 min | **~1 min · do not skip** |
| 7 | Demo (narrate only) | 26–40 min | ~60–90 sec |
| 8 | Next step | 40–45 min | ~30 sec |

---

## 1 · Upfront contract (verbatim)

> "Ashwin, thanks for making the time. We have about 45 minutes.
>
> Here is my plan. I will spend the first part understanding your priorities and how the team works today, especially with Central integration. If what I hear sounds like areas where Cursor can help, I would like to use the second part to walk you through how we address those specifically, not a generic product tour.
>
> By the end we will agree on a clear next step either way.
>
> Does that work?"

**Pause. Get yes.**

---

## 2 · Cursor overview (~90 sec · not on slide)

> "Quick context. Cursor is an AI-native development environment used by teams like Brex and OnePay in fintech. We help engineering orgs standardize AI-assisted development across complex codebases.
>
> I reached out because Mercury has signals that looked familiar: Central integration, the AI Enablement hire, and a team that cares about codebase context. I would rather hear from you if that resonates."

---

## 3 · Matt/Lev level-set (verbatim)

> "Before I ask a bunch of questions, I want to level-set on what I have heard.
>
> I spoke with Matt on DevEx and Lev on Banking. A consistent theme: AI usage is active, but standardizing across squads is the harder problem, especially with Central integration. Matt framed it from DevEx. Lev from Banking velocity and onboarding.
>
> From your seat, does that match what you are seeing, or is it different?"

**Stop. Listen. Mirror back.**

---

## 4 · Discovery · 10 questions max

**Bar:** Another AE could continue this account from your notes.

| # | Question |
|---|----------|
| 1 | (If not covered) Does the Matt/Lev picture match your view? |
| 2 | With Central integration, what is the biggest drag on eng productivity? |
| 3 | How consistent is AI usage across squads today? |
| 4 | What are engineers using for AI-assisted dev, formally or informally? |
| 5 | Where does that work well, and where does it fall short on your codebase? |
| 6 | When eng is slowest, is it single-file, cross-file, onboarding, or review? |
| 7 | If this went well in 90 days, what would be different? |
| 8 | Who else needs to be comfortable: DevEx, Branden, Max? |
| 9 | Let me reflect back: A, B, C. Did I miss anything? |
| 10 | (After bridge) What works on your end for a next step? |

**Do NOT ask:** MCP config, pricing, SCIM, benchmarks, seat counts, feature checklists.

**OK:** "Would Branden need to sign off on tools that touch source code?"

---

## 4b · Competitive pivot (when Joe answers Q4–5)

Open matching tab. Three questions only:

1. "How is that deployed today?"
2. "Where does it break down on your codebase?"
3. "What would you need to learn before evaluating anything else?"

| Joe says | Tab |
|----------|-----|
| Copilot / GitHub / Microsoft | Copilot one-pager |
| Claude Code / terminal / Anthropic | Claude one-pager |
| GPT / Codex / ChatGPT | GPT one-pager |
| Mix / no standard / per squad | **Mix one-pager (rehearse most)** |
| Ada / internal tools | Ada one-pager |
| Nothing formal / evaluating | Greenfield one-pager |

**Prep-doc differentiators only (priority):**
1. AI-native IDE · 2. Codebase context · 3. Multi-file agents · 4. Rules · 5. Model agnostic · 6. IDE adoption · 7. Privacy/enterprise

**One proof max per call:** Brex (fintech) · Rippling (standardization) · Faire (cross-file)

**Competitive tone:** What they do well first. Gap on Mercury's codebase. No feature dump.

---

## 5 · Summarize A/B/C

> "Ashwin, let me make sure I have this right.
>
> You said **[A]**, **[B]**, and **[C]**.
>
> If I am hearing you correctly, the issue is not whether AI is useful. It is **[one-line synthesis]**.
>
> Did I miss anything?"

**Pause.**

Skip demo bridge if no real pain surfaced. Use soft next step instead.

---

## 6 · Demo bridge (required if pain surfaced)

> "Based on what you shared, those are exactly the areas I would want to show you, not tell you.
>
> We still have time in our 45 minutes. Rather than a generic tour, I would like to walk you through how Cursor handles **[A, B, C]** in an environment like yours. You can tell me if it is relevant.
>
> Does that work?"

**Pause. Get yes.**

---

## 7 · Demo narrate (take-home only · 60–90 sec)

> "Great. For your three areas, I would typically show:
>
> **One, [A]:** how DevEx sets Rules once and every squad inherits the same guardrails.
>
> **Two, [B]:** how Agent handles a multi-file change with codebase context, not just the open file.
>
> **Three, [C]:** how eng keeps review in the loop, and how Privacy Mode works for fintech teams.
>
> Joe, in a live call I would screen-share here."

**Map pains → beats:**

| Pain | Narrate |
|------|---------|
| No standard / inconsistent | Rules |
| Cross-file / Central | Agent multi-file |
| Onboarding / context | Codebase-aware workflow |
| Review | Review before merge |
| Security | Privacy Mode · PR unchanged |
| Already on Copilot/Claude | Their A/B/C workflows, not comparison deck |

---

## 8 · Next step (~30 sec)

Pick one based on disco:

> "Based on today, a logical next step would be a session with Matt's DevEx team focused on **[A]**. Does that work?"

> "Branden may need to weigh in early. Happy to coordinate a brief security conversation separately."

> "I can send the Brex case study before you sync internally. Would that help?"

Not a pilot close. Logical follow-up.

---

## 9 · Break character

> "Joe, that is how I would run the first call. Discovery, bridge, tailored demo on A/B/C, next step. Happy for feedback."

---

## Jot during role play (handoff capture)

```
STACK:
PAIN A / B / C (verbatim):
WORKS / BREAKS:
90-DAY SUCCESS:
STAKEHOLDERS:
BRIDGE USED: Y / N
DEMO BEATS NARRATED:
NEXT STEP PROPOSED:
```

---

## Pushback quick hits

| Joe says | You say |
|----------|---------|
| "We use Copilot." | "Where does it break down on your codebase?" |
| "Matt/Lev didn't tell me." | "Fair. Does the theme resonate from your seat?" |
| "We're fine." | "What would need to be true to revisit in six months?" |
| "Show me now." | "Happy to. Let me confirm A/B/C first so I show the right things." (then bridge) |
| "No time for demo." | "Understood. What would a good next step look like?" |

---

## Rehearsal drills (in order)

1. **Full run once:** contract → level-set → 6 questions → summarize → bridge → narrate → next step (~18 min)
2. **Mix pivot drill:** Joe says "every squad different" → Mix tab → 3 questions → bridge
3. **Copilot drill:** Joe says Copilot → honest strength → gap → bridge
4. **No-fit drill:** Joe says "we're fine" → skip bridge → soft next step
5. **Timing:** Topic 4 fits in ~18–22 min within your 60-min block

---

## Supporting files (detail if needed)

- `Topic4_Discovery_Run_Sheet.md`
- `Topic4_Competitive_One_Pagers.md`
- `Topic4_First_Meeting_Flow.md`

**This doc is the run-of-show. Rehearse from here.**

---

## After Topic 4 is rehearsed

Checks & balances pass (separate session):
- Slide 23 contract matches 45-min frame above
- Talk track Topic 4 section matches this doc
- Topic 2 Max language aligned with Topic 3
- Full 60-min timing run with Topics 1–5
