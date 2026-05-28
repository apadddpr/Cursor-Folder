import { randomUUID } from "node:crypto";
import type { AuditEvent } from "../types/questionnaire.js";

/**
 * In-memory audit sink for local dev. Production ships to Splunk + immutable S3.
 * SOC2 CC7.2: all create/update/delete on questionnaires must emit audit events.
 */
const auditBuffer: AuditEvent[] = [];

export function recordAuditEvent(input: Omit<AuditEvent, "id" | "timestamp">): AuditEvent {
  const event: AuditEvent = {
    ...input,
    id: randomUUID(),
    timestamp: new Date().toISOString(),
  };
  auditBuffer.push(event);
  return event;
}

export function listAuditEvents(orgId: string): AuditEvent[] {
  return auditBuffer.filter((e) => e.orgId === orgId);
}

export function clearAuditBuffer(): void {
  auditBuffer.length = 0;
}
