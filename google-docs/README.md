# Google Docs upload

Word files here match the latest markdown in the repo. Google Drive converts them to editable Google Docs on upload.

## Files

| File | Source |
|------|--------|
| `Topic4_Master_Teleprompter.docx` | Master role-play script |
| `Topic4_Pivot_Copilot.docx` | Copilot pivot tab |
| `Topic4_Pivot_Claude_Code.docx` | Claude Code pivot tab |
| `Alex_Padilla_AE_Challenge_Talk_Track.docx` | Full deck talk track |
| `SALES_ROOM_Mercury_Copy.docx` | Sales room paste copy |

## Upload (about 2 min)

1. Open [Google Drive](https://drive.google.com).
2. **New → Folder** → name it `Cursor AE Prep - Topic 4`.
3. Open the folder. Drag all five `.docx` files from this folder into Drive.
4. For each file: right-click → **Open with → Google Docs**.

Each file becomes its own Google Doc you can edit. Re-upload after you change the markdown and run `scripts/convert-to-docx.sh`.

## Replace your old master doc

If you still use [this Google Doc](https://docs.google.com/document/d/1y4-BSAp5aWAJYPNoehGRtdKB37Gepn41NkfdMUDcuiQ/edit), upload `Topic4_Master_Teleprompter.docx` as a new doc instead of editing the stale version in place.

## Regenerate

```bash
./scripts/convert-to-docx.sh
```
