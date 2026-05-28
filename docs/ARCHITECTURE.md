# Questionnaire API — Architecture (Demo)

This repository simulates a slice of **Responsive's** platform: the service that powers **vendor security questionnaires** and compliance workflows for enterprise customers.

## Context for demos

| Stakeholder concern | How this service maps |
|---------------------|------------------------|
| **Velocity** | Teams ship questionnaire features across routes, store, and audit in one PR |
| **Risk / compliance** | SOC2 CC7.2 requires immutable audit trails on mutations |
| **Scale** | Multi-tenant `orgId` scoping on every read/write |

## Components

```
┌─────────────┐     ┌──────────────────┐     ┌─────────────────┐
│   Client    │────▶│ questionnaire-api │────▶│  auditLogger    │
│  (Web app)  │     │  (Express /v1)    │     │  (SOC2 events)  │
└─────────────┘     └──────────────────┘     └─────────────────┘
                              │
                              ▼
                    ┌──────────────────┐
                    │ questionnaireStore│
                    │ (in-memory demo)  │
                    └──────────────────┘
```

## Known gaps (intentional — for Cursor Agent demo)

1. **JIRA-4827** — Audit events are not emitted on POST/PATCH routes (see TODOs in routes).
2. **SEC-1192** — `/v1/internal/export/:id` lacks authentication (demo security fix scenario).

## Local run

```bash
cd services/questionnaire-api
npm install
npm run dev
```

Auth header for API calls: `Authorization: Bearer demo-token` and `x-org-id: org-acme`.
