# Q&A Prep — Cursor Sales Case Study

Use these as **spoken answers** (30–90 seconds each). Sound confident; admit limits honestly.

---

## vs. GitHub Copilot

**Question:** "We already pay for Copilot. Why Cursor?"

**Answer:**

> "Copilot is a strong **completion and chat layer inside GitHub's ecosystem**. Cursor is a **purpose-built AI IDE** where the editor, codebase index, and agents are one product. Practically: when Responsive engineers need a change across `routes`, `auditLogger`, and tests—with org-specific rules in `.cursor/rules`—Cursor's Agent plans and edits multiple files with shared context. Copilot Enterprise is improving, but most teams still experience Copilot as assistive in a single file, while Cursor's bet is **agentic, repo-wide work** as the default. Many customers run a pilot side-by-side for two weeks on real tickets; velocity on cross-cutting work is usually where Cursor wins."

**Proof point:** Demo JIRA-4827 multi-file change.

---

## vs. Claude Code (Anthropic)

**Question:** "Why not Claude Code in the terminal?"

**Answer:**

> "Claude Code is excellent for developers who live in the terminal and want a **CLI-first agent**. Cursor targets the **full SDLC surface**: visual diff review, inline tab completion, multi-model choice, integrated terminal, and an IDE UX that most of your organization already knows from VS Code. For a 500-person org with mixed skill levels, adoption matters—Cursor lowers the barrier for PMs, full-stack, and infra engineers alike. Strategically, Cursor is **model-agnostic** (OpenAI, Anthropic, Google, etc.), so you're not locked to one model vendor as the landscape shifts."

**Honest caveat:** "If your org is 100% terminal-native, Claude Code deserves evaluation too—I'd position Cursor for breadth and governance."

---

## Security & compliance

**Question:** "Does our code train your models? What about customer data?"

**Answer:**

> "For enterprise evaluations, start with the **Cursor Trust Center** and **Privacy Mode**. Privacy Mode means your code is not persisted for training. Cursor supports SSO, admin controls, and configurations aligned with regulated customers. Your security review should mirror how you'd review any SaaS dev tool: data flow diagram, retention, subprocessors, and whether agents can call external MCP servers—which you can restrict. **Cursor doesn't replace your CI, SAST, or required reviewers**—it sits in the developer workflow before the PR."

**Responsive-specific tie:**

> "You sell trust on security questionnaires—your internal evaluation will look like what your customers ask you: subprocessors, data residency, audit logs. Cursor has answers documented publicly; I'd bring Solutions/SE for a deep dive with your security team."

**If asked about the unauthenticated export in demo:**

> "That's intentional tech debt in this demo repo—we used Agent to fix it the same way we'd fix a pen-test finding."

---

## Pricing / procurement (if asked)

**Answer (high level):**

> "Cursor typically licenses per seat with Business/Enterprise tiers for SSO, admin, and privacy controls. Exact pricing depends on seat count and features—I'd loop in your account executive after we align on a pilot scope. For a CTO pilot, I'd recommend **one platform team + one product squad**, 20–40 seats, 30 days, with baseline metrics: PR cycle time, % tickets touching 3+ files, developer NPS."

---

## Rollout & change management

**Question:** "How do we roll this out without chaos?"

**Answer:**

> "Three phases: (1) **Pilot** with Rules and a golden repo pattern—like the questionnaire service; (2) **Enablement**—office hours, recorded demos, internal champions in Beaverton and Coimbatore; (3) **Governance**—approved models, MCP allowlists, Privacy Mode default on. Cursor wins when platform engineering treats Rules as **codified standards**, not optional prompts."

---

## "Will AI replace our engineers?"

**Answer:**

> "No—and that's not our pitch. Responsive's moat is **domain expertise in strategic response** and enterprise trust. Cursor removes friction in implementation so engineers spend more time on architecture, data model, and customer problems. The winning org uses AI to **raise the floor**, not shrink the team."

---

## Questions YOU should ask them (shows executive presence)

1. "Where is audit/compliance work slowing releases today—platform or product squads?"
2. "How are you standardizing AI tooling across US and India engineering?"
3. "Is your bottleneck model access, or **context** across microservices?"
4. "What would a successful 30-day pilot prove to you?"
