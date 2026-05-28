export type QuestionnaireStatus = "draft" | "in_review" | "approved" | "archived";

export interface Questionnaire {
  id: string;
  orgId: string;
  title: string;
  framework: "SOC2" | "ISO27001" | "CUSTOM";
  status: QuestionnaireStatus;
  createdAt: string;
  updatedAt: string;
}

export interface QuestionnaireResponse {
  id: string;
  questionnaireId: string;
  questionId: string;
  answer: string;
  answeredBy: string;
  answeredAt: string;
}

export interface AuditEvent {
  id: string;
  orgId: string;
  actorId: string;
  action: string;
  resourceType: "questionnaire" | "response";
  resourceId: string;
  metadata: Record<string, unknown>;
  timestamp: string;
}
