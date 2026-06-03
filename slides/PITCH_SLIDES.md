# Cursor × Responsive — 3-Slide Deck

Copy into **Google Slides** or **Keynote**. These match **`MASTER_TALK_TRACK_CONVERSATIONAL.md`** and your live demo.

**Do slides need to match the demo word-for-word?**  
**No.** Slides = headlines. Demo = proof. They should **tee up** the same story, not repeat every click.

---

## Slide 1 — The shift

**Title:** Development is moving from line-by-line help to whole tasks

**Bullets:**

- Teams delegate **multi-file work** (features, fixes, tests)—not just autocomplete
- **Your codebase + your standards** matter more than which AI model you pick
- Leaders need **speed and safety**—not a tradeoff

**Say (conversational track):** Tie to Responsive—customers want fast, accurate questionnaire/RFP responses; engineering needs the same internally.

**Optional visual:**

```
Before:  Developer → PR (review)
Now:     Developer → AI draft across files → PR (same review)
```

---

## Slide 2 — Why Cursor

**Title:** Cursor — AI-native IDE for enterprise teams

**Bullets (keep simple on slide):**

| On slide | You'll show in demo |
|----------|---------------------|
| **Whole-project agents** | Compliance ticket across multiple files |
| **Rules** | `.cursor/rules` — your standards built in |
| **Review before merge** | Diff / PR workflow—nothing ships from the demo |
| **Enterprise trust** | Mention Privacy Mode / Trust Center verbally |

**Don't put on slide:** model names, competitor names, feature laundry lists.

**Say:** Copilot = strong in-file help. Claude Code = strong terminal. Cursor = full workspace + agents + Rules.

---

## Slide 3 — Outcomes + what we'll show live

**Title:** Success at Responsive — and what you'll see in Cursor

**Bullets:**

- **Faster ramp** — new engineers ask questions against the real codebase  
- **Governed AI** — Rules so Portland, Coimbatore, and every team play by the same book  
- **Faster compliance work** — audit logging wired across files (live ticket example)  
- **Security stays in the loop** — auth fix + human review, not "AI went rogue"  
- **Pilot:** 1 platform team + 1 product squad · 30 days · measure multi-file PR time  

**Bottom of slide (large text):**

> **Next: live demo** — questionnaire compliance + security scenario

**Say before sharing Cursor:**  
"This is the story on slides. Let me show you three things in the product: your standards in Rules, ramp on a real repo, and an agent closing a compliance and a security ticket—with review."

---

## Demo ↔ slide map (for you, not on slides)

| Demo step | Slide that set it up |
|-----------|----------------------|
| ARCHITECTURE + TODO (JIRA-4827) | Slide 1 (multi-file) + Slide 3 (compliance) |
| Rules file | Slide 2 (Rules) + Slide 3 (governed AI) |
| Ask — onboarding / tenant isolation | Slide 3 (faster ramp) |
| Agent — audit logging (Prompt 1) | Slide 3 (compliance work) |
| Agent — security fix (Prompt 2) | Slide 3 (security in the loop) |

---

## Are these up to date?

**Yes** as of this file—aligned with:

- Conversational talk track  
- Onboarding → Agent flow  
- JIRA-4827 + SEC-1192 demo  
- Rules + PR/review message  

**You still build the deck yourself** in Google Slides—this repo only has the **words**, not a `.pptx` file.

---

## Design tips

- **3 slides only** for the 5-min pitch  
- 28pt+ body text for screen share  
- Minimal text—you talk the rest  
- No Responsive logo (you're not an employee)  
- Cursor black/white is fine  

---

## Optional 4th slide (only if they ask for agenda on screen)

**Title:** Today's plan (15–20 min)

- Agenda & context  
- Cursor + Responsive (3 slides)  
- **Live:** Rules · Ramp · Compliance ticket · Security fix  
- Q&A  

Most reps keep this verbal (your Joe intro) and stay at 3 slides.
