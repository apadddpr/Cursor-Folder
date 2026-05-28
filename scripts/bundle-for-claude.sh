#!/usr/bin/env bash
# Creates a zip of the demo repo for Claude (no node_modules, no .git).
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="${ROOT}/cursor-responsive-demo-export.zip"

cd "$ROOT"
rm -f "$OUT"

zip -r "$OUT" . \
  -x "./.git/*" \
  -x "./**/node_modules/*" \
  -x "./node_modules/*" \
  -x "./cursor-responsive-demo-export.zip" \
  -x "./.git/*"

echo "Created: $OUT"
echo "Size: $(du -h "$OUT" | cut -f1)"
echo ""
echo "Upload this zip to Claude (chat attachment or Project knowledge)."
