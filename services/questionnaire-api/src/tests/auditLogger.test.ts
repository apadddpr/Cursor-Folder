import { describe, it, expect, beforeEach } from "vitest";
import { recordAuditEvent, listAuditEvents, clearAuditBuffer } from "../services/auditLogger.js";

describe("auditLogger", () => {
  beforeEach(() => clearAuditBuffer());

  it("records and lists events by org", () => {
    recordAuditEvent({
      orgId: "org-acme",
      actorId: "user-1",
      action: "questionnaire.created",
      resourceType: "questionnaire",
      resourceId: "q-1",
      metadata: { title: "SOC2 Q1" },
    });

    expect(listAuditEvents("org-acme")).toHaveLength(1);
    expect(listAuditEvents("org-other")).toHaveLength(0);
  });
});
