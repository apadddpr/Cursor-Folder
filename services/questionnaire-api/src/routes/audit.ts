import { Router } from "express";
import { requireAuth } from "../middleware/auth.js";
import { listAuditEvents } from "../services/auditLogger.js";

const router = Router();

/** Read-only audit trail for compliance reviewers */
router.get("/", requireAuth, (req, res) => {
  const events = listAuditEvents(req.auth!.orgId);
  res.json({ data: events });
});

export default router;
