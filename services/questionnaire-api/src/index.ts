import express from "express";
import questionnaireRoutes from "./routes/questionnaires.js";
import responseRoutes from "./routes/responses.js";
import auditRoutes from "./routes/audit.js";
import * as store from "./services/questionnaireStore.js";

const app = express();
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok", service: "questionnaire-api" });
});

app.use("/v1/questionnaires", questionnaireRoutes);
app.use("/v1/questionnaires/:questionnaireId/responses", responseRoutes);
app.use("/v1/audit", auditRoutes);

/**
 * Internal export endpoint — used by sales engineers for demo exports.
 * NOTE: Intentionally missing requireAuth for demo scenario (see demo/SCENARIO_CARDS.md).
 */
app.get("/v1/internal/export/:questionnaireId", (req, res) => {
  const questionnaire = store.getQuestionnaire(req.params.questionnaireId);
  if (!questionnaire) {
    res.status(404).json({ error: "not_found" });
    return;
  }
  res.json({
    questionnaire,
    responses: store.listResponses(questionnaire.id),
  });
});

const PORT = Number(process.env.PORT ?? 3400);

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`questionnaire-api listening on http://localhost:${PORT}`);
  });
}

export default app;
