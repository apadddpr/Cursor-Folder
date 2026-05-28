import { Router } from "express";
import { z } from "zod";
import { requireAuth } from "../middleware/auth.js";
import * as store from "../services/questionnaireStore.js";

const router = Router();

const createSchema = z.object({
  title: z.string().min(1).max(200),
  framework: z.enum(["SOC2", "ISO27001", "CUSTOM"]),
});

const statusSchema = z.object({
  status: z.enum(["draft", "in_review", "approved", "archived"]),
});

router.get("/", requireAuth, (req, res) => {
  const orgId = req.auth!.orgId;
  res.json({ data: store.listQuestionnaires(orgId) });
});

router.post("/", requireAuth, (req, res) => {
  const parsed = createSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "validation_failed", details: parsed.error.flatten() });
    return;
  }

  const questionnaire = store.createQuestionnaire(
    req.auth!.orgId,
    parsed.data.title,
    parsed.data.framework
  );

  // TODO(JIRA-4827): wire recordAuditEvent for SOC2 — see demo/DEMO_SCRIPT.md
  res.status(201).json({ data: questionnaire });
});

router.get("/:id", requireAuth, (req, res) => {
  const questionnaire = store.getQuestionnaire(req.params.id);
  if (!questionnaire || questionnaire.orgId !== req.auth!.orgId) {
    res.status(404).json({ error: "not_found" });
    return;
  }
  res.json({ data: questionnaire });
});

router.patch("/:id/status", requireAuth, (req, res) => {
  const parsed = statusSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "validation_failed", details: parsed.error.flatten() });
    return;
  }

  const existing = store.getQuestionnaire(req.params.id);
  if (!existing || existing.orgId !== req.auth!.orgId) {
    res.status(404).json({ error: "not_found" });
    return;
  }

  const updated = store.updateQuestionnaireStatus(req.params.id, parsed.data.status);
  res.json({ data: updated });
});

export default router;
