# Topic 4 · Discovery Run Sheet (Live Role Play · ~18–22 min)
## Mercury · Ashwin · Handoff-quality discovery · NO demo in take-home

**Goal:** Collect enough so another AE could continue the deal without re-discovery.  
**Not the goal:** Demo, pilot close, pricing, MCP deep dives, or AE-only technical trivia.

**Take-home context:** 60 minutes total for Topics 1–5. Topic 4 simulates a **45-min first call** with Ashwin. You run discovery, **bridge to demo**, but do not screen-share product in the take-home.

**Simulated meeting frame (upfront contract):**
> "Ashwin, thanks for the time. We have about 45 minutes. I will spend the first part understanding your priorities and how the team works today. If what I hear sounds like areas where Cursor can help, I would like to use the second part to walk you through how we address those specifically, not a generic tour. By the end we will agree on a clear next step either way. Does that work?"

---

## Timing

| Phase | Min | Purpose |
|-------|-----|---------|
| Open | 0–3 | Contract, brief Cursor, Matt/Lev level-set |
| Pain & context | 3–8 | Their words on problems |
| Stack & usage | 8–12 | What they use, how, where it breaks |
| Success & stakeholders | 12–16 | What demo must prove, who else matters |
| Summarize + demo bridge | 16–20 | A/B/C confirm → bridge to demo |
| Demo outline (take-home only) | +1–2 min | Narrate 3 beats · no screen share |
| Next step | +30 sec | Logical follow-up after call |

---

## The 12 questions (max)

Ask naturally. Skip any Joe already answered. **Capture verbatim quotes.**

### Block 1 · Context (3–8 min)

1. **Validate level-set:** "Does that Matt/Lev picture match your view, or is it different from your seat?"

2. **Priority pain:** "With Central integration underway, what is the single biggest drag on eng productivity right now?"

3. **Standardization:** "How consistent is AI-assisted development across squads today: same tools, same patterns, or everyone doing their own thing?"

### Block 2 · Stack (8–12 min) · *Pivot doc when you hear the answer*

4. **Current tools:** "What are engineers actually using for AI-assisted dev today, formally or informally?"

5. **Usage pattern:** "Is that org-wide, or concentrated in certain teams or power users?"

6. **Gap:** "What is working well with that setup, and where does it fall short on Mercury's codebase?"

### Block 3 · Impact (12–16 min)

7. **Workflow:** "When eng is slowest, is it usually single-file work, cross-file changes, onboarding, or review?"

8. **Success:** "If we met again in 90 days and this went well, what would be different?"

9. **Stakeholders:** "Who else would need to be comfortable beyond you: DevEx, Branden on security, Max?"

### Block 4 · Bridge (16–20 min)

10. **Summarize:** "Let me reflect back what I heard: A, B, C. Did I miss anything?"

11. **Demo bridge:** "Based on what you shared, those are exactly the areas I would want to show you, not tell you. We still have time. Want me to walk you through how Cursor handles those in an environment like yours?"

12. **Take-home only:** Narrate 3 demo beats mapped to A/B/C (60–90 sec), then break character or ask Joe for feedback.

13. **Next step:** "Logical next step would be [X]. What works on your end?"

---

## Handoff capture template (fill during disco)

Copy into your internal prep doc or a blank Google Doc during role play.

```
MERCURY · ASHWIN DISCO CAPTURE · [date]

ATTENDEE: Ashwin Baskaran, VP Engineering

CURRENT STACK:
- Primary tool(s):
- Formal vs ad hoc:
- Who uses it (org / squads / power users):

PAIN A (their words):
PAIN B (their words):
PAIN C (their words):

WORKFLOW TO DEMO:
- [ ] Cross-file / Central-style change
- [ ] DevEx Rules / standards
- [ ] Onboarding / codebase context
- [ ] Review / quality gate
- [ ] Other: ___

WHAT WORKS TODAY (incumbent):
WHERE IT BREAKS:

SUCCESS IN 90 DAYS (their words):

STAKEHOLDERS MENTIONED:
- DevEx (Matt?):
- Security (Branden?):
- EB (Max?):

DEMO MUST-SHOW / MUST-AVOID:

RECOMMENDED NEXT STEP (for handoff AE):
-
OPEN QUESTIONS FOR FOLLOW-UP:
-

VERBATIM QUOTES TO MIRROR:
-
```

**Handoff test:** Could another AE write a follow-up email and schedule the right next meeting without calling Ashwin? If yes, discovery worked.

---

## Demo bridge script (in character · required)

> "Based on what you shared, those are exactly the areas I would want to show you, not tell you.
>
> We still have time in our 45 minutes. Rather than a generic tour, I would like to walk you through how Cursor handles **[A, B, C]** in an environment like yours. You can tell me if it is relevant.
>
> Does that work?"

**Pause. Get yes.**

## After bridge (take-home: narrate, do not screen-share)

> "For your three areas, I would typically show: one, **[A]** via Rules / standardization. Two, **[B]** via Agent on a multi-file change. Three, **[C]** via review workflow and Privacy Mode for fintech.
>
> Joe, in a live call I would screen-share here."

## Next step (after demo would run)

> "Based on today, a logical next step would be **[DevEx session / Branden security sync / scoped eval]**. What works on your end?"

---

## What to NOT ask (AE-in-the-weeds trap)

| Skip | Why |
|------|-----|
| MCP allowlist configuration | Implementation detail for SE |
| Specific model token pricing | AE manager / pricing conversation |
| Composer vs Sonnet benchmarks | Only if they ask |
| SCIM provisioning steps | Security deep dive with Branden later |
| Bugbot YAML / CI integration | Post-pilot technical |
| "What is your Copilot seat count?" | Procurement, not disco |
| Feature checklist by name | Sounds like a survey, not discovery |

**High-level security is OK:** "Does Branden need to weigh in before eng standardizes on a tool that touches source code?" That is serviceable.

---

## Competitive pivot (simplified)

When Joe answers Q4–6, open the matching one-pager. Only three follow-ups:

1. "How is that deployed today?"
2. "Where does it work well vs fall short on your codebase?"
3. "What would you need to **learn** before considering anything else?"

Then map to **prep-doc differentiators** (next file).

---

## After role play (say to Joe, out of character)

> "Joe, that is how I would run the first call. Discovery only. Next step would be [X] based on what I heard. Happy to take feedback."
