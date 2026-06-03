# Brief for Claude — Build Google Slides for Cursor AE Interview

**Copy everything below this line and paste into Claude.**  
Ask Claude: *"Create a Google Slides outline (or export-ready slide content I can paste into Google Slides) using this brief. 3 slides for a 5-minute CTO pitch. Professional, minimal text, dark or clean enterprise style."*

---

## Project context

**Presenter:** Commercial AE candidate at Cursor  
**Audience:** CTO (or SVP Engineering) at **Responsive** (responsive.io)  
**Format:** ~5 minute pitch on slides, then live product demo in Cursor IDE (demo is separate—not on slides)  
**Meeting:** ~15–20 minutes total (pitch + demo + Q&A)  
**Tone:** Conversational, professional, credible—not jargon-heavy. Plain English. Executive-friendly.

### About Responsive (use for relevance, don't pretend presenter works there)

- Global leader in **Strategic Response Management (SRM)** (formerly RFPIO)
- Software for **RFPs, security questionnaires (VSQs), DDQs**, compliance-heavy enterprise responses
- ~2,000 customers, 20%+ Fortune 500, engineering in **Portland** and **Coimbatore, India**
- Buyers care about **speed + trust + auditability**—same tension engineering feels internally
- Competitors in AI dev tools conversation: GitHub Copilot, Claude Code—don't bash; position Cursor as full AI-native IDE

### About Cursor (what we're selling)

- **AI-native IDE** (not a plugin)—editor + codebase understanding + agents together
- **Rules:** engineering standards encoded once; apply to humans and AI
- **Agents:** multi-file tasks (features, fixes, tests) with human review via PR/diff
- **Enterprise:** Privacy Mode, SSO, Trust Center
- **Not on slides:** pricing, long feature lists, cursor.com/agents cloud UI

---

## Slide deck requirements

| Requirement | Detail |
|-------------|--------|
| **Number of slides** | **3 content slides** (optional: 1 title slide at start) |
| **Text density** | Minimal—headlines + short bullets only; presenter speaks the story |
| **Font** | Large (28pt+ body), readable on Zoom screen share |
| **Style** | Clean enterprise: black/white or dark mode, minimal, no clutter |
| **Logos** | Cursor acceptable; do NOT add Responsive logo (presenter is not an employee) |
| **Last slide** | Must end with clear **"Next: live demo"** CTA |

---

## SLIDE 1 — The market shift

**Slide title:**  
Development is moving from line-by-line help to whole tasks

**Bullets (put on slide):**
- Teams delegate **multi-file work** — features, fixes, tests — not just autocomplete
- **Your codebase + your standards** matter more than which AI model you pick
- Leaders need **speed and safety** — not a tradeoff

**Speaker will say (NOT on slide — for your speaker notes section if you create one):**
- Industry moving from autocomplete to handing off whole tasks, then reviewing like a PR
- Responsive parallel: customers want fast, accurate questionnaire/RFP responses; engineering needs speed without compliance debt
- Question: can every office use AI the same governed way?

**Optional simple visual for designer:**
```
Before:  Developer → PR review
Now:     Developer → AI draft (multiple files) → PR review (same gate)
```

---

## SLIDE 2 — Why Cursor

**Slide title:**  
Cursor — AI-native IDE for enterprise teams

**Content format:** 4 rows (table or icon + text), keep each row one line on slide

| Label (bold on slide) | Subtext (shorter on slide) |
|-----------------------|----------------------------|
| **Whole-project agents** | Multi-file work — shown live in demo |
| **Rules** | Your standards for every dev and every AI session |
| **Review before merge** | AI drafts — PR, CI, and security review stay the gate |
| **Enterprise trust** | Privacy Mode, SSO, Trust Center |

**Speaker will say (speaker notes):**
- Cursor is not a plugin; it's built as one product
- Rules file shown live in demo
- Copilot = strong in-file; Claude Code = strong terminal; Cursor = full workspace (mention verbally, optional small footnote only)

---

## SLIDE 3 — Outcomes + handoff to demo

**Slide title:**  
Success at Responsive — and what you'll see live

**Bullets (put on slide):**
- **Faster ramp** — new engineers learn from the real codebase
- **Governed AI** — Rules so every team plays by the same book
- **Faster compliance work** — audit logging across files (live example)
- **Security stays in the loop** — auth fix + human review
- **Pilot:** 1 platform team + 1 product squad · 30 days · measure multi-file PR time

**Callout box at bottom (large, prominent):**  
**Next → Live demo**  
Questionnaire compliance + security scenario

**Speaker will say (speaker notes):**
- Each bullet will be demonstrated in Cursor in the next 5 minutes
- Pilot suggestion: don't boil the ocean; measure PR cycle time on tickets touching 3+ files
- Then stop sharing slides and share Cursor desktop

---

## Demo alignment (so slides tee up the live demo)

These happen **after** slides in Cursor IDE—not on slides:

| Demo step | Slide that sets it up |
|-----------|------------------------|
| Open Rules file (`.cursor/rules`) | Slide 2 Rules + Slide 3 Governed AI |
| Ask mode: new engineer question about tenant/data isolation | Slide 3 Faster ramp |
| Agent: compliance ticket JIRA-4827 (wire audit logging across files) | Slide 3 Faster compliance work |
| Agent: security ticket SEC-1192 (secure an endpoint) | Slide 3 Security stays in the loop |
| Show diff / review | Slide 2 Review before merge |

**Demo story in one sentence:**  
Small example API modeled on security questionnaires—a compliance ticket and a security fix, with Rules and onboarding, all reviewed before merge.

---

## Optional title slide (slide 0)

**Title:** Cursor × Responsive  
**Subtitle:** Strategic development velocity + governance  
**Footer:** [Presenter name] · [Date] · Confidential conversation

---

## Intro before slides (not a slide — presenter speaks on camera)

Presenter may open with rapport + agenda (~60 sec):

- ~20 minutes total
- Confirm attendees
- Plan: refresher on Cursor + relevance to Responsive (~5 min slides) → live examples (~5 min) → Q&A
- "Sound good?"

---

## What NOT to put on slides

- Long paragraphs
- GitHub / JIRA ticket numbers (JIRA-4827 is demo-only)
- Code snippets
- cursor.com/agents
- Fake metrics or pricing
- "Agency," "SDLC," "agentic" unless simplified
- Comparison table vs Copilot (verbal only unless 1 footnote)

---

## Design direction for Claude

Please output either:

1. **Slide-by-slide content** ready to paste into Google Slides (title + bullets per slide), OR  
2. **Google Slides API / Apps Script**, OR  
3. **Detailed layout spec** per slide (headline placement, bullet count, speaker notes)

**Preferred aesthetic:** Minimal, confident, similar to modern B2B SaaS pitch (Stripe/Linear vibe)—dark background white text OR white background black text. High contrast for Zoom.

**Include speaker notes** under each slide with the "Speaker will say" bullets summarized.

---

## Files in the source repo (for reference only)

- `slides/pitch-deck.html` — browser version already built (3 slides, dark theme)
- `slides/PITCH_SLIDES.md` — markdown source
- `demo/MASTER_TALK_TRACK_CONVERSATIONAL.md` — full spoken script Part 1 = while slides show
- `demo/DEMO_CLICK_ONLY.md` — demo clicks (not for slides)

---

## One-paragraph summary for Claude

Build a 3-slide Google Slides deck for a Cursor AE pitching a Responsive CTO: (1) dev is shifting to multi-file AI tasks with speed+safety, (2) Cursor as AI-native IDE with agents, Rules, review, enterprise trust, (3) Responsive outcomes—ramp, governed AI, compliance, security, pilot—with a strong "Next: live demo" CTA. Minimal on-slide text, executive tone, speaker notes with Responsive-specific context, slides must tee up a live demo of Rules, onboarding Ask, and two Agent scenarios. No Responsive logo. Professional dark or clean light design.

---

**END OF BRIEF — paste everything above into Claude**
