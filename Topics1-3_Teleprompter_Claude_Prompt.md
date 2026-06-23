# Claude Prompt · Topics 1–3 Teleprompter (Slides 1–24/25)

Copy everything below the line into Claude. Attach your Google Slides deck (or paste slide text) if you have it.

**Topic 4 is separate.** Do not generate role play content. Alex already has `Topic4_SCRIPT_Master_Teleprompter.md` plus competitive pivot docs for the live disco.

---

You are writing a **teleprompter script** for Alex Padilla's Cursor Commercial AE take-home. The audience is hiring manager **Joe**. Alex presents **Topics 1–3 only** (slides 1 through 24, or 25 if a Discovery Flow slide exists at the end of Topic 3).

## Output format (mandatory)

One Google Doc–ready markdown file. For **each slide**, use:

```
## SLIDE [N] · [Title]
**Topic:** [1 / 2 / 3] | **Depth:** [TIER 1 / TIER 2 / TIER 3]
**Target time:** [X sec/min] | **Running total:** [cumulative]

**On screen:** [1 line — what Joe sees]

### YOU SAY:
> [Word-for-word script. Blockquotes only inside this section.]

### ⏸ PAUSE
[When to stop, wait for Joe, or "None — advance immediately"]

### ▶ NEXT
[Advance to slide N, or one-line bridge]
```

## Global rules

- Every line in **YOU SAY** is spoken aloud. No stage directions inside quotes.
- First person. Conversational, crisp, peer-level AE energy.
- **No em dashes.** Commas or periods only.
- No "I'm not trying to sell you" or similar disclaimers.
- Label hypotheses vs sourced facts ("I would validate in discovery").
- Do not assume Mercury's internal stack. Ada is a public signal, not "they use X today."
- PG/outbound emails: **50–75 words** when quoted on slides.
- **Total target for Topics 1–3: ~30 minutes** (Topic 1 ~9 min, Topic 2 ~7 min, Topic 3 ~14 min).

## Depth tiers (critical — follow exactly)

### TIER 1 · Topic 1, slides 1–8 (~9 min) — **RICHEST**
Alex's priority. Full word-for-word teleprompter. Every account slide must clearly answer:
1. Why this company
2. Why now (sourced signals)
3. Why Cursor (hypothesis, not assumed stack)
4. Customer DNA proof

Mercury (slide 3) gets the longest script (~90 sec). Other four accounts (~40–45 sec each) still get complete answers to all four questions, not bullet summaries.

Slide 8 scoring: explain criteria, Mercury 24/25, acknowledge PostHog if Joe weights access/PG path.

### TIER 2 · Topic 2, slides 9–17 (~7 min) — **MEDIUM**
Still full teleprompter format, but **tighter**. Focus on:
- Role in the sequence (why this person, why this order)
- One theme per persona
- How each person connects to earning the Ashwin meeting

Do not over-explain territory rationale (already covered). Persona slides ~35–45 sec. Org map (slide 16) and path to meeting (slide 17) can walk the visual ~45 sec each.

### TIER 3 · Topic 3, slides 18–24/25 (~14 min) — **FRAMEWORK + ANCHOR LINES**
Still teleprompter format so Alex does not lose his place, but scripts should be **shorter and more natural**. Alex will add color live on prospecting.

Guidelines per slide type:
- **Divider / thesis slides (18–19):** Framework language, ~30–60 sec. Hit the pillars, leave room to riff.
- **Cadence / swim lanes (20–21):** Walk the structure clearly. Name the pattern (email → LinkedIn → call → repeat → Loom). Do not memorize five separate email scripts.
- **Sample copy (22):** Include Matt Email 1 **verbatim from slide** plus 2–3 sentences on "how this compounds." Say Alex will not read all five emails.
- **Pre-call prep (23):** Four buckets (Account, Person, Org, Call). Stress **internal brief, not the sales room.** ~90 sec.
- **Opening the call (24):** **Block A upfront contract and Block B level-set are VERBATIM** (must match slide). **Cursor overview between blocks: verbatim from `Cursor_Overview_First_Meeting.md` (~45 sec, not on slide).** Mark pauses after "Does that work?" and after overview before Block B.
- **Discovery flow (25, if present):** Walk the 10-step table in order. Competition at step 3. Close with sales room tab switch before Topic 4 role play. ~90 sec.

For Tier 3, it is OK to use slightly more natural phrasing vs. robotic repetition. Goal: rehearsal safety net, not word-perfect outbound theater.

---

## Account & territory context (Topic 1)

**Territory:** Greenfield commercial, ≤250 developers, none on Cursor today.

**Four filters (slide 2):**
1. Segment ≤250 devs
2. B2B SaaS, software is the product
3. Pain signals: AI adoption exists but inconsistent; complex codebase where autocomplete-only breaks down (hypothesis)
4. Customer DNA: maps to existing Cursor win

**Accounts:**

| Slide | Account | Size | DNA | Key signals | Proof |
|-------|---------|------|-----|-------------|-------|
| 3 | Mercury ★ | ~58 eng | Brex, OnePay | Central acquisition, AI Enablement hire, Ada open source | Brex 70%+ eng, James Reggio |
| 4 | Ashby | ~60→120 eng | Rippling, monday | Double eng team, Talent Llama | Rippling 150→500, 60% adoption weeks |
| 5 | Retool | ~128 technical | Faire, Amplitude | AI agents in product, platform roadmap hiring | Faire 2x PR throughput, migration w/ agents |
| 6 | PostHog | ~124 eng, 15+ teams | Sentry, Decagon | Autonomous teams, opinionated eng culture | Sentry scale-multiplier quote |
| 7 | Supabase | Series F, ~350 emp | PlanetScale | DB launches +600% YoY, Agent Skills ship | PlanetScale 80% Bugbot resolution |

**Deep dive:** Mercury. Bridge Topic 1 → 2: five people inside Mercury, path to VP meeting.

---

## Buying committee context (Topic 2)

**Primary target:** Ashwin Baskaran, VP Engineering (reports to Max Tagher, CTO/co-founder).

| Order | Person | Title | Role |
|-------|--------|-------|------|
| 1st | Matt Parsons | Staff SWE, Backend DevEx | Champion seed, DevEx friction, validate standardization theme |
| 2nd | Lev Dubinets | Head of Eng, Banking (~50+ eng) | Amplifier, velocity/onboarding angle |
| 3rd ★ | Ashwin Baskaran | VP Engineering | Primary target, pilot sponsor — warm, not cold |
| Parallel | Branden Wagner | Head of InfoSec | Security governance, not in Ashwin's chain |
| EB | Max Tagher | CTO | Economic buyer — light exec awareness in Topic 3, not cold open |

**Sequence:** Matt → Lev → build signal → Ashwin with aligned room + Brex proof. Branden parallel from day one. Max light touch.

---

## Outbound & discovery context (Topic 3)

**Go-wide thesis:** Multi-thread at IC layer before VP. Channels: email, LinkedIn, call, Loom.

**7-touch cadence:** Day 1 email (50–75 words) → Day 3 LinkedIn → Day 5 call → Day 7 email → Day 9 call → Day 11 close-loop → Day 12 Loom.

**Five tracks:** Matt, Lev, Branden full cadence day 1. Ashwin full cadence day 5–7 (warmed). Max exec track 3 touches day 7–10.

**Matt Email 1 (slide 22):**
> Quick question from DevEx. As Mercury integrates Central, how is Backend DevEx thinking about consistent AI-assisted workflows across squads? Rippling hit the same inflection: usage spread squad by squad until DevEx helped align the org.

**Slide 24 · Block A (verbatim):**
> Ashwin, thanks for making the time. I know calendars are tight.
>
> Here is what I was thinking for our 30 minutes. I will set a quick agenda, give you a high-level view of Cursor and why Mercury was worth a conversation, and share what I picked up from a few conversations in your org so you can tell me if I am on or off. Then I would love to spend most of the time on your priorities: eng productivity and AI, especially with Central integration. By the end, you will know if this is worth exploring further, and we will agree on a clear next step either way.
>
> Does that work?

**Slide 24 · Block B (verbatim):**
> Before I ask a bunch of questions, I want to level-set on what I have heard.
>
> I spoke with Matt on DevEx and Lev on Banking. A consistent theme: AI usage is active, but standardizing across squads is the harder problem, especially with Central integration. Matt framed it from DevEx. Lev from Banking velocity and onboarding.
>
> From your seat, does that match what you are seeing, or is it different?

**Discovery order (slide 25):** Pain → Competition (step 3, early) → Metrics → Decision criteria → Decision process → Paper process (Branden) → Champion → Economic buyer → Next step (scoped 2-week pilot, success metrics, Branden looped, Max aware).

**Before Topic 4:** Alex switches to sales room tab (~60–90 sec). Ashwin-facing Matt/Lev themes only. NOT internal prep.

---

## Append to end of doc

### IF JOE INTERRUPTS (Topics 1–3 only)
One–two sentence responses for:
- Why these five accounts?
- Why not email the VP first?
- Isn't that a lot of touches?
- Why not put prep in the sales room?
- Supabase over 250 employees?
- Why Mercury over PostHog?
- Can I see the Ashwin email? (appendix, happy to read)

### TIMING CHECK
Table: slide | topic | tier | target | running total | what to cut if behind

### DECK NOTE
If deck has 24 slides (no separate Discovery Flow slide), treat current slide 23 as Opening the Call and slide 24 as Discovery Flow. Adjust numbering accordingly.

---

## Do NOT include

- Topic 4 role play (separate teleprompter docs)
- Topic 5 leadership asks
- Competitive pivot scripts (Copilot, Claude Code, etc.)
- Full appendix of all five outbound emails (mention appendix exists; only Matt email on slide)

Generate the full Topics 1–3 teleprompter now.
