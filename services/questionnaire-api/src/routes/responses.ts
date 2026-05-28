import { Router } from "express";
import { z } from "zod";
import { requireAuth } from "../middleware/auth.js";
import * as store from "../services/questionnaireStore.js";

const router = Router({ mergeParams: true });

const responseSchema = z.object({
  questionId: z.string().min(1),
  answer: z.string().min(1).max(10000),
});

router.get("/", requireAuth, (req, res) => {
  const questionnaireId = req.params.questionnaireId as string;
  const questionnaire = store.getQuestionnaire(questionnaireId);
  if (!questionnaire || questionnaire.orgId !== req.auth!.orgId) {
    res.status(404).json({ error: "not_found" });
    return;
  }
  res.json({ data: store.listResponses(questionnaireId) });
});

router.post("/", requireAuth, (req, res) => {
  const parsed = responseSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "validation_failed", details: parsed.error.flatten() });
    return;
  }

  const questionnaireId = req.params.questionnaireId as string;
  const questionnaire = store.getQuestionnaire(questionnaireId);
  if (!questionnaire || questionnaire.orgId !== req.auth!.orgId) {
    res.status(404).json({ error: "not_found" });
    return;
  }

  const response = store.addResponse(
    questionnaireId,
    parsed.data.questionId,
    parsed.data.answer,
    req.auth!.userId
  );

  // TODO(JIRA-4827): audit log on response mutations
  res.status(201).json({ data: response });
});

export default router;
