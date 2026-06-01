# Practice the Demo Safely (Run It 100 Times)

You **will** let Agent change files when you practice. That’s OK. You can **undo everything** in one command and start fresh.

---

## Best option: duplicate folder (zero stress)

### Once

```bash
cd ~
cp -R Cursor-Folder Cursor-Folder-PRACTICE
```

### Every practice session

1. Open **Cursor → File → Open Folder → `Cursor-Folder-PRACTICE`**
2. Run the full demo (Ask + Agent prompts)
3. When done, **delete the copy** and make a new one:

```bash
rm -rf ~/Cursor-Folder-PRACTICE
cp -R ~/Cursor-Folder ~/Cursor-Folder-PRACTICE
```

Re-open `Cursor-Folder-PRACTICE` in Cursor.

**Your real `Cursor-Folder` stays untouched** for interview day.

---

## Option B: reset with Git (same folder)

Use this if you only want one copy on disk.

### Before practice — check you're clean

```bash
cd ~/Cursor-Folder
git status
```

You want: `nothing to commit, working tree clean`  
(If not clean, run **Reset** below first.)

### Practice

Do the full demo in Cursor (Agent will edit files).

### After practice — reset demo to "broken" state

```bash
cd ~/Cursor-Folder
git checkout -- .
git clean -fd
```

Or run the script:

```bash
cd ~/Cursor-Folder
./scripts/reset-demo.sh
```

**Result:** TODOs and missing audit wiring come back. Ready to practice again.

---

## In Cursor: don't panic about diffs

| Button | What it means for practice |
|--------|----------------------------|
| **Accept** | Keeps changes — do this if you want to see the "after" state |
| **Reject** | Undoes that hunk |
| After full run | Run **git reset** anyway so TODOs return |

For practice you can **Accept all** to see the wow moment, then **reset with git**.

---

## Safe practice loop (10 min)

| # | Do |
|---|-----|
| 1 | Open `Cursor-Folder-PRACTICE` (or run `git status` on main folder) |
| 2 | Follow `DEMO_CLICK_ONLY.md` steps 1–17 |
| 3 | Paste onboarding → Prompt 1 → Prompt 2 |
| 4 | Watch diffs, practice talking |
| 5 | **Reset** (delete copy OR `git checkout -- .`) |
| 6 | Repeat |

---

## What you cannot "mess up"

| Fear | Truth |
|------|--------|
| Break the internet / deploy | Nothing deploys |
| Delete GitHub | Local only unless you `git push` |
| Ruin interview repo | Use **PRACTICE** copy or `git reset` |
| Wrong clicks | Files still there; reset fixes Agent edits |

**Never run `git push`** during practice unless you mean to.

---

## Interview day

Open the **clean** folder:

- `Cursor-Folder` (not PRACTICE), or  
- Fresh copy: `cp -R Cursor-Folder Cursor-Folder-INTERVIEW` morning of

Run demo **once** live. No reset needed until after.

---

## Connection errors during practice

If "Connection failed" — retry. Practice the **click path** and **talk track** even when AI is down; reset when AI works again.

---

## Quick reference

```bash
# Reset demo state (from repo root)
cd ~/Cursor-Folder && ./scripts/reset-demo.sh

# Fresh practice copy
rm -rf ~/Cursor-Folder-PRACTICE && cp -R ~/Cursor-Folder ~/Cursor-Folder-PRACTICE
```
