# Doc B · Discovery Pivot · GitHub Copilot (+ Codex if bundled)
## Mercury · Joe as Ashwin

**Open when:** "We use Copilot" / "Copilot Enterprise" / "Microsoft stack" / "GitHub"

---

## What Copilot does well (say this first · be honest)

- Strong **inline completion** and chat inside the GitHub ecosystem
- **Enterprise maturity:** audit logs, policy controls, IP indemnity, SSO
- **IDE breadth:** VS Code, JetBrains, Neovim
- **Low friction** if you are already on GitHub Enterprise
- **Procurement path** security teams know and trust

**Say:** "Copilot is a strong layer, especially if you are GitHub-native. I would not ask you to rip it out on day one."

---

## Where Mercury teams usually feel the gap

Tie to their world, not a feature list.

| Mercury moment | Copilot gap | Cursor angle |
|----------------|-------------|--------------|
| **Central integration** | Cross-file / cross-service changes | Agent plans edits across the repo with shared index |
| **Standardizing across squads** | Often feels assistive per developer, per file | One IDE standard + Rules for org-wide guardrails |
| **Complex monolith** | Strong in open file; weaker on whole-codebase refactors | Built for large codebases; codebase intelligence |
| **AI Enablement hire** | Hard to enforce shared context/experiments | DevEx publishes Rules once; every session inherits |
| **Fintech review load** | More code generated, same review bandwidth | Bugbot on PRs; human review stays the gate |

---

## Cursor differentiators vs Copilot (talk track)

**30-second version:**
> "Copilot is great in-file inside GitHub's world. Cursor is a purpose-built AI IDE where the editor, codebase index, and agents are one product. When Mercury engineers need a change across multiple files during Central integration, with org rules baked in, Cursor's agent works repo-wide with shared context. Most teams do not replace Copilot on day one. They run a two-week pilot on real cross-cutting tickets and compare velocity there."

**60-second version (if Joe engages):**
> "What we hear from fintech teams like Brex: Copilot was already in the building. The gap was not autocomplete. It was standardizing AI-assisted work across a complex codebase and getting consistent outcomes squad to squad. Brex's CTO James Reggio shared 70% plus adoption on Cursor with faster migrations and debugging. Rippling went 150 to 500 engineers with similar standardization story. The wedge is usually org-wide agentic work and DevEx governance, not single-line completion."

---

## Customer proof (use 1–2 max)

| Customer | Quote / outcome | When to use |
|----------|-----------------|-------------|
| **Brex** | 70%+ eng adoption; faster migrations & debugging (James Reggio, CTO) | Fintech peer, closest DNA |
| **Rippling** | 150→500 eng; ~60% adoption in weeks (Albert Strasheim, CTO) | DevEx / scale standardization |
| **Coinbase** | Preferred IDE for most devs; refactors in days not months (Brian Armstrong) | Complex codebase, regulated |
| **Sentry** | "Scale-multiplier for the whole org" (Cody De Arkland) | 15-team autonomy → need standard |
| **Faire** | 2x PR throughput; 18-mo migration via cloud agents | Central-style integration parallel |

---

## Discovery questions (Copilot-specific)

Pick 2–3. Do not interrogate.

1. "Is Copilot deployed team-wide, or opt-in per squad?"
2. "Where does Copilot work great today, and where do engineers reach for something else?"
3. "On Central integration work, are changes usually single-file or cross-repo?"
4. "Does DevEx have a shared ruleset, or does each developer prompt differently?"
5. "Has security signed off on Copilot for all repos, or are some repos excluded?"
6. "If you ran a head-to-head, what ticket type would be the fairest test?"

---

## If Joe pushes back

| Pushback | Response |
|----------|----------|
| "We already pay for Copilot." | "Makes sense. I would not ask you to double-pay blindly. Pilot Cursor on cross-cutting work where you already feel friction." |
| "Copilot has agents now." | "Fair. The eval question is whether agent context and governance work the same across your whole monolith. That is what a pilot proves." |
| "Security approved Copilot." | "Great. Branden will ask the same questions of any tool. Privacy Mode and SOC 2 are documented at trust.cursor.com. Happy to run both through security in parallel." |
| "Devs love Copilot." | "Good sign AI is adopted. The question Ashwin owns is whether love is consistent across squads or concentrated in power users." |

---

## Mercury close (Copilot context)

> "It sounds like Copilot is working for inline work, and the open question is standardizing agentic, cross-file work as Central lands. A scoped two-week pilot on one integration epic, Matt's DevEx squad or Lev's Banking team, with success metrics you already care about. Copilot stays in place. We compare outcomes on the hard tickets. Worth scoping?"

---

## Do NOT say

- "Copilot is bad" or "Copilot is just autocomplete"
- Assume they hate Copilot
- Feature dump Privacy Mode before Branden is in the conversation
- Offer a demo before discovery lands
