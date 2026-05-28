# Demo Scenario Cards — Quick Reference

Print or keep on a second monitor during the interview.

---

## Card A — JIRA-4827 (Primary / SOC2)

| Field | Value |
|-------|--------|
| **Story** | Enterprise customer requires proof of audit trail on all questionnaire mutations |
| **Files** | `routes/questionnaires.ts`, `routes/responses.ts`, `services/auditLogger.ts`, tests |
| **Rules** | `.cursor/rules/responsive-platform.mdc` |
| **Win** | Multi-file agent + compliance standards in one flow |

**Agent prompt:** See `DEMO_SCRIPT.md` Segment 2.

---

## Card B — SEC-1192 (Security)

| Field | Value |
|-------|--------|
| **Story** | Pen test: unauthenticated export endpoint leaks questionnaire data |
| **File** | `src/index.ts` — `/v1/internal/export/:questionnaireId` |
| **Win** | Risk mitigation narrative for CTO |

**Agent prompt:** See `DEMO_SCRIPT.md` Segment 3.

---

## Card C — Ask mode only (30 sec backup)

**Prompt:** `Explain our multi-tenant isolation model and where it could fail.`

**Expected:** Cites `requireAuth`, `orgId` checks on routes, notes export gap.

---

## Card D — Rules / governance (no code change)

Open `.cursor/rules/responsive-platform.mdc` and say:

> "This is how Responsive would encode 'always audit mutations'—agents and developers inherit the same policy."

---

## Responsive facts (sprinkle naturally)

- Formerly RFPIO; **Strategic Response Management** category leader  
- ~2,000 customers, 20%+ Fortune 500, 300k+ users  
- HQ Portland; engineering in **Coimbatore** + US  
- **AJ Sunder** — CPO/CIO; **Manish Bafna** — SVP Engineering  
- Product: RFPs, security questionnaires (VSQ), DDQ, AI-powered response at scale
