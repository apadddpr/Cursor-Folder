import type { Request, Response, NextFunction } from "express";

export interface AuthContext {
  userId: string;
  orgId: string;
  roles: string[];
}

declare global {
  namespace Express {
    interface Request {
      auth?: AuthContext;
    }
  }
}

/**
 * Validates JWT from Authorization header (demo: accepts Bearer demo-token).
 * Production uses Okta + org-scoped claims.
 */
export function requireAuth(req: Request, res: Response, next: NextFunction): void {
  const header = req.headers.authorization;
  if (!header?.startsWith("Bearer ")) {
    res.status(401).json({ error: "missing_token" });
    return;
  }

  const token = header.slice("Bearer ".length);
  if (token !== "demo-token") {
    res.status(401).json({ error: "invalid_token" });
    return;
  }

  req.auth = {
    userId: "user-demo-001",
    orgId: (req.headers["x-org-id"] as string) ?? "org-acme",
    roles: ["questionnaire:write", "questionnaire:read"],
  };
  next();
}
