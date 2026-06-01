#!/usr/bin/env bash
# Restores the demo repo to its pre-Agent state (JIRA-4827 / SEC-1192 gaps intact).
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "Not a git repo. Use a fresh copy: cp -R Cursor-Folder Cursor-Folder-PRACTICE"
  exit 1
fi

git checkout -- .
git clean -fd --exclude=node_modules

echo "Demo reset complete. TODO(JIRA-4827) and SEC-1192 gaps should be back."
echo "Tip: open Cursor-Folder-PRACTICE for risk-free practice."
