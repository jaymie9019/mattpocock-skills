---
"mattpocock-skills": patch
---

Revert the **`prototype`** skill's logic branch back to a **tiny interactive terminal app** (TUI). The HTML shareable-demo format is removed; the logic branch now builds a lightweight TUI that clears and re-renders the whole frame on every keystroke, isolates the pure logic module from the TUI shell, and runs from one command in the project's existing task runner.
