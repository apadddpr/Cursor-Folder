# Cursor 3 on Mac — Where Things Are (Interview Demo)

**Your docs were written for the older “Composer vs Chat” layout.** Cursor 3 is **agent-first**. Shortcuts still exist but **the safest method is the Command Palette** — works even if keys were remapped.

Official reference: https://cursor.com/docs/reference/keyboard-shortcuts

---

## The 3 surfaces (don’t mix them up)

| Surface | What it is | Use for interview? |
|---------|------------|-------------------|
| **IDE + file tree** | `Cursor-Folder` with `demo/`, `services/` | **YES** — open files, show Rules |
| **Side panel / Agent input** | Chat with AI, run prompts | **YES** — onboarding + Agent demo |
| **Agents Window** (`Cmd+Shift+P` → “Agents Window”) | Separate agent dashboard | **NO** — skip for AE demo |
| **cursor.com/agents** (browser) | Cloud agents | **NO** |

---

## How to open what you need (pick ONE method)

### Method 1 — Command Palette (always works)

Press **`Cmd + Shift + P`**, then type:

| You want | Type this | Press Enter |
|----------|-----------|-------------|
| Agent / side panel | `Toggle Sidepanel` or `Agent` | ✓ |
| Agent-focused layout | `Toggle Agent Layout` | ✓ |
| Switch Ask vs Agent mode | `Mode Menu` | ✓ |
| Open Agents Window (skip for demo) | `Agents Window` | — |
| See all shortcuts | `Keyboard Shortcuts` | ✓ |

### Method 2 — Keyboard shortcuts (Cursor 3 official)

| Shortcut | What it does in Cursor 3 |
|----------|--------------------------|
| **`Cmd + E`** | Toggle **Agent layout** (good for demo) |
| **`Cmd + I`** | Toggle **sidepanel** (AI panel) |
| **`Cmd + L`** | Toggle **sidepanel** (same as Cmd+I if not remapped) |
| **`Cmd + .`** | **Mode menu** — switch **Ask** vs **Agent** |
| **`Cmd + Shift + P`** | Command palette |
| **`Shift + Tab`** | Rotate Agent modes (in chat input) |

**Why `Cmd+I` felt wrong:** In Cursor 3, `Cmd+I` and `Cmd+L` often both toggle the **same sidepanel**, not separate “Composer” and “Chat” windows.

### Method 3 — Click (zero memorization)

1. Open folder **Cursor-Folder** (File → Open Folder)
2. Click **New Agent** or the **agent/chat icon** in the left sidebar (paper plane / agent icon)
3. In the input box at bottom, type your prompt
4. Use **Mode menu** (`Cmd + .`) to pick **Ask** for onboarding, **Agent** for JIRA-4827

---

## Interview demo flow (Cursor 3 Mac)

### 1. Open the project (file tree)

**File → Open Folder → Cursor-Folder**

You must see: `demo`, `services`, `docs` in the left sidebar.

### 2. Show architecture + Rules (clicks only)

Click in sidebar:

- `docs/ARCHITECTURE.md`
- `services/questionnaire-api/src/routes/questionnaires.ts`
- `.cursor/rules/responsive-platform.mdc`

### 3. Onboarding beat — **Ask mode**

1. Open AI sidepanel: **`Cmd + E`** or **`Cmd + I`** or click **New Agent**
2. Open mode picker: **`Cmd + .`** → choose **Ask** (if available)
3. Paste the onboarding question from `MASTER_TALK_TRACK.md`
4. Press **Return** to send

### 4. Shipping beat — **Agent mode**

1. **`Cmd + .`** → choose **Agent** (or use **Shift + Tab** in the input)
2. Paste **PROMPT 1** (JIRA-4827) → **Return**
3. When diff appears, review in the panel (Accept/Reject buttons)

### 5. Security beat

Same panel → paste **PROMPT 2** (SEC-1192) → **Return**

---

## Find YOUR shortcuts on your Mac (30 seconds)

1. **`Cmd + Shift + P`**
2. Type **`Keyboard Shortcuts`**
3. Search:
   - `sidepanel`
   - `agent layout`
   - `mode menu`
4. Write your actual bindings on a sticky note for interview day

Or: **`Cmd + R`** then **`Cmd + S`** (per Cursor docs) to open shortcut reference.

---

## What to say if shortcuts fail live

> “Cursor 3 moved to an agent-first layout—I’ll open the agent panel from the command palette so you can see the same workflow.”

Then: **`Cmd + Shift + P`** → type **Agent Layout** or **Sidepanel** → Enter.

---

## Do NOT use for this interview

- **Agents Window** (separate window from changelog 3.0)
- **cursor.com/agents** in browser
- Worrying that `Cmd+L` ≠ “Chat” — use **Ask mode** in the mode menu instead

---

## Quick replacement table (old doc → Cursor 3)

| Old instruction | Cursor 3 Mac |
|-----------------|--------------|
| Open Chat `Cmd+L` | `Cmd+E` or `Cmd+I` + **Ask** mode (`Cmd+.`) |
| Open Agent `Cmd+I` | `Cmd+E` or `Cmd+I` + **Agent** mode (`Cmd+.`) |
| Open Composer | Same sidepanel + **Agent** mode |
| Separate Composer window | Often one sidepanel now |
