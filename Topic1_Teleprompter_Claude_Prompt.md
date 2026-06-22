# Claude Prompt · Topic 1 Teleprompter (Slides 1–8)

Copy everything below the line into Claude. Attach or paste your Google Slides deck (or slide text) if you have it.

---

You are writing a **teleprompter script** for Alex Padilla's Cursor Commercial AE take-home presentation. The audience is hiring manager **Joe**. Alex presents **Topic 1 only: Commercial Territory Plan, slides 1–8**.

## Output format (mandatory)

One Google Doc–ready markdown file. For **each slide**, use this structure:

```
## SLIDE [N] · [Title]
**Target time:** [X sec/min] | **Running total:** [cumulative]

**On screen:** [1 line — what Joe sees]

### YOU SAY:
> [Word-for-word script Alex reads aloud. Use blockquotes.]

### ⏸ PAUSE
[When to stop, breathe, or wait for Joe — or "None, advance immediately"]

### ▶ NEXT
[What Alex does: "Advance to slide N" or brief transition line if needed]
```

**Rules:**
- Every line in YOU SAY is spoken out loud. No stage directions inside quotes.
- Write in **first person**, conversational but crisp. Sounds like a strong AE, not a blog post.
- **No em dashes.** Use commas or periods.
- Do not say "I'm not trying to sell you" or similar disclaimers.
- Label hypotheses vs sourced facts where relevant ("I would validate in discovery").
- Do not assume Mercury's internal stack (Ada is a signal, not "they use X today").
- Total Topic 1 target: **~9 minutes** across slides 1–8.

## Context

**Territory:** Greenfield commercial, ≤250 developers, none using Cursor today.

**Targeting framework (slide 2):** Four gates — (1) segment ≤250 devs, (2) B2B SaaS where software is the product, (3) pain signals: AI adoption exists but inconsistent + complex codebase where autocomplete-only breaks down (hypothesis to validate), (4) Customer DNA: each account maps to an existing Cursor win.

**Deep dive account:** Mercury (~58 eng, fintech). Primary proof: Brex (70%+ engineers on Cursor, James Reggio CTO). Also OnePay DNA.

## Slide-by-slide content to script (go deep on account fit)

### Slide 1 · Commercial Territory Plan (~30 sec)
Title slide. Set frame: five accounts, thesis, Mercury deep dive.

### Slide 2 · Targeting Framework (~45 sec)
Walk all four filters. Explain *why* each filter matters to Joe, not just what they are.

### Slide 3 · Mercury ★ Deep Dive (~90 sec) — **richest script**
- ~58 software engineers, fintech SaaS, commercial segment
- Customer DNA: Brex, OnePay
- **Why now (sourced):** Central acquisition (April), integration over coming months; AI Enablement hire (frontier users in silos, role is shared infrastructure)
- **Why Cursor:** Open-sourced Ada — README gap between general-purpose AI and codebase-aware tools; validate actual stack in discovery
- **Proof:** Brex 70%+ adoption, faster migrations/debugging per James Reggio

### Slide 4 · Ashby (~45 sec)
- Recruiting SaaS, ~60 eng → ~120 EOY
- DNA: Rippling, monday.com
- **Why now:** Public plan to double eng team; Talent Llama (AI interviewing)
- **Why Cursor:** One AI standard before habits fragment at scale
- **Proof:** Rippling 150→500 eng, 60% adoption in weeks

### Slide 5 · Retool (~40 sec)
- Internal tools platform, ~128 technical roles
- DNA: Faire, Amplitude
- **Why now:** Shipping AI agents in core product; hiring against major platform roadmap
- **Why Cursor:** Task completion across repos; cloud agents for large migrations
- **Proof:** Faire doubled PR throughput; 18-month migration with one engineer + agents

### Slide 6 · PostHog (~40 sec)
- Product-led devtools, ~124 eng, 15+ autonomous teams
- DNA: Sentry, Decagon
- **Why Cursor:** Large-codebase performance; model neutrality for opinionated engineers
- **Proof:** Sentry — Cursor as scale-multiplier for whole org

### Slide 7 · Supabase (~45 sec)
- Database dev platform, Series F, ~350 employees (validate dev count vs 250 rule in discovery)
- DNA: PlanetScale
- **Why now:** DB launches up 600% YoY; CEO cited AI coding tools as largest source of new databases; shipped Agent Skills because agents used Supabase incorrectly
- **Why Cursor:** Bugbot for review at scale; codebase context for monorepo
- **Proof:** PlanetScale 80% Bugbot resolution; CEO "mutiny to take it away"

### Slide 8 · Account Scoring (~60 sec)
Five criteria (Alex's judgment): segment fit, use-case strength, AI pain signals, access/PG path, Customer DNA match.

Mercury **24/25** — three concrete public signals + cleanest Brex proof = deep dive.

If Joe weights access/PG path highest, PostHog rises — but Mercury still leads on signals and DNA.

**Close Topic 1:** Bridge to Topic 2 — five people inside Mercury, path to VP meeting.

## Extra sections to append

### IF JOE INTERRUPTS (quick responses, 1–2 sentences each)
- "Why these five accounts?"
- "Why not bigger logos?"
- "How did you size engineer counts?"
- "Supabase is over 250 employees"
- "Why Mercury over PostHog?"
- "Is Ada proof they need Cursor?"

### TIMING CHECK
Table: slide | target | running total | what to cut if behind

## Tone reference

Match the energy of a prepared AE presenting to a hiring manager: confident, structured, peer-level. Mercury deep dive should feel like Alex *knows* this account. Other four accounts: tight but each must clearly answer **why this company, why now, why Cursor, what proof**.

## Do NOT include

- Topics 2–5 (separate scripts)
- Full outbound email copy
- Topic 4 role play
- Generic Cursor product pitch (save for later topics)

Generate the full teleprompter now.
