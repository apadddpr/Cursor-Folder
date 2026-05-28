# How to Record Your Demo Video (15–20 minutes)

I **cannot** generate a screen recording of the Cursor app from the cloud—that requires **your** laptop running Cursor. This guide gets you a polished **5-minute Loom** you can rewatch before the interview (or share with a friend for feedback).

---

## What to record

| Segment | Length | What’s on screen |
|---------|--------|------------------|
| Intro | 30 sec | Your face optional; or slides only |
| Problem | 45 sec | `docs/ARCHITECTURE.md` + `questionnaires.ts` TODO |
| Rules | 30 sec | `.cursor/rules/responsive-platform.mdc` |
| Agent JIRA-4827 | 2 min | Agent panel + diff |
| Agent SEC-1192 | 1 min | `index.ts` diff |
| Close | 30 sec | Back to camera or README |

**Total:** ~5–6 minutes (trim in Loom).

---

## Tools (pick one)

| Tool | Cost | Notes |
|------|------|--------|
| **Loom** | Free tier | Easiest—one click, shareable link |
| **Zoom** | Free | Record → “Record to cloud” or local |
| **QuickTime** (Mac) | Free | File → New Screen Recording |
| **OBS** | Free | More control; steeper learning curve |

---

## Before you hit Record

1. Clone repo, open in **Cursor**, branch `cursor/responsive-cto-demo-c168`
2. Increase font: **Settings → Editor: Font Size → 16–18**
3. Close email/Slack; enable **Do Not Disturb**
4. Open tabs in order:
   - `docs/ARCHITECTURE.md`
   - `services/questionnaire-api/src/routes/questionnaires.ts`
   - `.cursor/rules/responsive-platform.mdc`
5. Copy both Agent prompts from `demo/DEMO_SCRIPT.md` into a Notes app
6. **Practice once** without recording

---

## Recording steps

1. Start Loom (or Zoom) → **Screen + Mic** (mic required for narration)
2. Select **Cursor window only** (not full desktop with notifications)
3. Read narration from **`demo/NON_TECHNICAL_PLAYBOOK.md`** — speak slowly
4. When starting Agent, paste **JIRA-4827** prompt; keep talking while it runs
5. When diff appears, scroll slowly through changed files—don’t read code, describe outcomes
6. Stop recording; trim dead air at start/end

---

## One-take narration cheat sheet

**Start:**  
> “Quick walkthrough of how I’d demo Cursor to a CTO—compliance ticket across multiple files, with engineering rules built in.”

**During Agent:**  
> “I’m assigning an outcome, not writing line by line… multi-file context… Rules applied… this diff is what goes to PR review.”

**End:**  
> “Same workflow for a security fix—faster drafts, same governance. That’s the story in five minutes.”

---

## Optional: terminal B-roll (30 sec)

Shows the API works without explaining code. Record a second clip or append:

```bash
cd services/questionnaire-api
npm test
```

**Say:** “Tests pass on the PR—CI does this automatically in real life.”

---

## Official Cursor video (for your own learning)

Use these to see how Cursor positions the product—you don’t need to send these to interviewers unless asked:

- https://cursor.com — homepage demos  
- https://cursor.com/docs — product docs  
- Cursor YouTube / webinar recordings (linked from cursor.com/blog)

Your recording should be **your** Responsive story, not a rehash of marketing.

---

## If the interview is live (no pre-recorded video)

You don’t need a video file—they want **live** demo. This recording is for **your rehearsal**, not submission.

---

## Checklist after recording

- [ ] Audio clear, no keyboard thunder
- [ ] Font readable on phone screen
- [ ] Under 6 minutes
- [ ] You explained business value, not syntax
- [ ] Watched once and fixed one weak minute
