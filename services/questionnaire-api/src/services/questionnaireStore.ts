import { randomUUID } from "node:crypto";
import type { Questionnaire, QuestionnaireResponse } from "../types/questionnaire.js";

const questionnaires = new Map<string, Questionnaire>();
const responses = new Map<string, QuestionnaireResponse>();

export function createQuestionnaire(
  orgId: string,
  title: string,
  framework: Questionnaire["framework"]
): Questionnaire {
  const now = new Date().toISOString();
  const questionnaire: Questionnaire = {
    id: randomUUID(),
    orgId,
    title,
    framework,
    status: "draft",
    createdAt: now,
    updatedAt: now,
  };
  questionnaires.set(questionnaire.id, questionnaire);
  return questionnaire;
}

export function getQuestionnaire(id: string): Questionnaire | undefined {
  return questionnaires.get(id);
}

export function listQuestionnaires(orgId: string): Questionnaire[] {
  return [...questionnaires.values()].filter((q) => q.orgId === orgId);
}

export function updateQuestionnaireStatus(
  id: string,
  status: Questionnaire["status"]
): Questionnaire | undefined {
  const existing = questionnaires.get(id);
  if (!existing) return undefined;
  const updated: Questionnaire = {
    ...existing,
    status,
    updatedAt: new Date().toISOString(),
  };
  questionnaires.set(id, updated);
  return updated;
}

export function addResponse(
  questionnaireId: string,
  questionId: string,
  answer: string,
  answeredBy: string
): QuestionnaireResponse | undefined {
  if (!questionnaires.has(questionnaireId)) return undefined;
  const response: QuestionnaireResponse = {
    id: randomUUID(),
    questionnaireId,
    questionId,
    answer,
    answeredBy,
    answeredAt: new Date().toISOString(),
  };
  responses.set(response.id, response);
  return response;
}

export function listResponses(questionnaireId: string): QuestionnaireResponse[] {
  return [...responses.values()].filter((r) => r.questionnaireId === questionnaireId);
}

export function resetStore(): void {
  questionnaires.clear();
  responses.clear();
}
