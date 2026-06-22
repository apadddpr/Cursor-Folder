# Doc D · Discovery Pivot · GPT / Codex / ChatGPT stack
## Mercury · Joe as Ashwin

**Open when:** "GPT" / "Codex" / "ChatGPT" / "OpenAI" / Copilot but model-centric

Note: Often overlaps with Copilot (GPT-powered). If they say both, use **Doc B** for GitHub/procurement and pull GPT-specific lines from here.

---

## What GPT / Codex stack does well

- **ChatGPT / Codex:** Strong general reasoning, familiar to many engineers
- **Copilot + GPT models:** Inline suggestions inside IDE
- **OpenAI ecosystem:** Codex for async / agentic tasks in OpenAI tooling
- Engineers already **know the models** and trust the brand

**Say:** "OpenAI is strong. Most teams already have engineers in that ecosystem."

---

## Where Mercury teams usually feel the gap

| Mercury moment | GPT/Codex gap | Cursor angle |
|----------------|---------------|--------------|
| **Codebase context** | ChatGPT does not know Mercury's monolith | Indexed codebase + repo-aware agents |
| **Standardization** | Copy-paste from ChatGPT; no shared Rules | `.cursor/rules` codified by DevEx |
| **Central integration** | Generic answers vs your architecture | Codebase intelligence learns your patterns |
| **Data governance (fintech)** | Consumer vs enterprise data handling | Privacy Mode, SOC 2, trust.cursor.com |
| **Review at scale** | More generated code, same reviewers | Bugbot + existing PR process |

---

## Cursor differentiators (talk track)

**30-second version:**
> "GPT and Codex are strong on reasoning. The gap we usually hear is context: the model does not know your codebase, your Central integration, or Mercury's conventions unless you paste them in every time. Cursor indexes the repo and lets DevEx encode standards in Rules so every engineer and every agent session starts from the same place."

**60-second version:**
> "Supabase's CEO publicly said Claude Code drives most of their new DB launches, then they shipped Agent Skills because agents were using their product wrong. That is a context problem, not a model problem. Cursor's bet is codebase intelligence plus model choice: run GPT, Claude, or Composer in one governed IDE. Brex and OnePay are fintech peers who standardized on Cursor for that reason."

---

## Customer proof

| Customer | Outcome | When to use |
|----------|---------|-------------|
| **Brex / OnePay** | Fintech standardization | Mercury DNA |
| **Coinbase** | Org-wide Cursor adoption | Regulated + complex |
| **Rippling** | Scale + fast adoption | Standardization narrative |
| **Supabase** (public signal) | Agents building without product context | "Context gap" story (not a Cursor customer claim) |

---

## Discovery questions

1. "Is GPT usage mostly ChatGPT in browser, or integrated in the IDE?"
2. "How much time do engineers spend pasting context into prompts?"
3. "Do squads reuse prompts/Rules, or everyone rolls their own?"
4. "For Central work, does the model see your actual repo or a summary?"
5. "Has Branden signed off on data flow for consumer ChatGPT vs enterprise tools?"
6. "Are you evaluating Codex async agents separately from IDE workflow?"

---

## If Joe pushes back

| Pushback | Response |
|----------|----------|
| "GPT-5 is good enough." | "Totally. The question is whether good enough is consistent across 58 engineers on your actual codebase." |
| "We built prompts that work." | "Smart. Can DevEx enforce those prompts org-wide, or do they live in Notion and Slack?" |
| "OpenAI is our standard vendor." | "Cursor runs OpenAI models. The difference is repo context and governance, not which LLM." |

---

## Mercury close

> "Sounds like the models are not the issue. Context and consistency across squads is. Pilot Cursor on one Central integration epic with Rules defined by Matt's team. You can still run GPT inside Cursor. Measure time on cross-file work. Worth a scoping call?"
