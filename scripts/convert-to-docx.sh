#!/usr/bin/env bash
# Regenerate .docx files from markdown for Google Docs upload.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/google-docs"
PANDOC="${PANDOC:-pandoc}"

if ! command -v "$PANDOC" >/dev/null 2>&1; then
  echo "pandoc not found. Install pandoc or set PANDOC to a binary path." >&2
  exit 1
fi

mkdir -p "$OUT"

FILES=(
  Topic4_Master_Teleprompter.md
  Topic4_Pivot_Copilot.md
  Topic4_Pivot_Claude_Code.md
  Alex_Padilla_AE_Challenge_Talk_Track.md
  SALES_ROOM_Mercury_Copy.md
)

for f in "${FILES[@]}"; do
  src="$ROOT/$f"
  if [[ ! -f "$src" ]]; then
    echo "skip (missing): $f" >&2
    continue
  fi
  "$PANDOC" "$src" -f gfm -t docx -o "$OUT/${f%.md}.docx"
  echo "wrote $OUT/${f%.md}.docx"
done

echo "Done. Upload files in google-docs/ to Google Drive to edit as Google Docs."
