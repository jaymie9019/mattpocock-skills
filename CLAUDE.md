Skills are organized into bucket folders under `skills/`:

- `engineering/` — daily code work
- `productivity/` — daily non-code workflow tools (shipped as the `productive` plugin)
- `misc/` — kept around but rarely used
- `personal/` — tied to my own setup
- `in-progress/` — drafts not yet ready to ship
- `deprecated/` — no longer used

This repo is a **Claude Code plugin marketplace**. The root `.claude-plugin/marketplace.json` lists one plugin per shipped bucket — `engineering`, `productive`, `misc`, `personal` — each pointing at its bucket via a relative `source`. `in-progress/` and `deprecated/` are **not** packaged as plugins and must not appear in `marketplace.json`.

Each shipped bucket has its own `.claude-plugin/plugin.json` (e.g. `skills/engineering/.claude-plugin/plugin.json`) whose `skills` array lists each skill as a path relative to the bucket (e.g. `./tdd`). Every skill in a shipped bucket must have an entry in its bucket's `plugin.json`; skills in `engineering/`, `productivity/`, or `misc/` must also have a reference in the top-level `README.md`. Skills in `in-progress/` and `deprecated/` must not appear in either. When you add a skill to a shipped bucket, update both that bucket's `plugin.json` and the relevant `README.md`s.

The same repo is **also an OpenAI Codex plugin marketplace**, sharing the exact same `SKILL.md` files (no duplication). The Codex layer is a parallel set of manifests:

- Root catalog `.agents/plugins/marketplace.json` lists the same four plugins, each with a `local` source pointing at its bucket (e.g. `./skills/engineering`).
- Each shipped bucket has its own `.codex-plugin/plugin.json` alongside the `.claude-plugin/plugin.json`.

Codex's `plugin.json` uses `"skills": "./"` — a **directory scan** of the bucket, not a curated list — so a Codex plugin ships *every* `<skill>/SKILL.md` in its bucket. To keep the two channels in parity, the Claude `plugin.json` for each bucket must list **every** skill in that bucket (that is why `engineering` includes `implement` and `resolving-merge-conflicts`). When you add a skill to a shipped bucket, add it to that bucket's Claude `plugin.json` and the `README.md`s; the Codex side needs no per-skill edit (the scan picks it up). Only touch `.codex-plugin/plugin.json` / `.agents/plugins/marketplace.json` when adding a whole new plugin or bumping a version.

Each skill entry in the top-level `README.md` must link the skill name to its `SKILL.md`.

Each bucket folder has a `README.md` that lists every skill in the bucket with a one-line description, with the skill name linked to its `SKILL.md`. The `engineering/` and `productivity/` bucket `README.md`s and the top-level `README.md` group entries into **User-invoked** and **Model-invoked**; the `misc/` and `personal/` bucket `README.md`s use a flat list.

Skills in `engineering/` and `productivity/` also have a human-facing docs page at `docs/<bucket>/<skill-name>.md` (the docs tree mirrors those two bucket folders under `skills/`). The published URL is `https://aihero.dev/skills-<skill-name>` regardless of bucket — the docs path is repo organisation only. When you add, rename, or change the behaviour of a skill in `engineering/` or `productivity/`, create or re-sync its docs page following [.agents/writing-docs.md](./.agents/writing-docs.md). Skills in `misc/`, `personal/`, `in-progress/`, and `deprecated/` get **no** docs page.

Every `SKILL.md` is either user-invoked (`disable-model-invocation: true`, reachable only by the human) or model-invoked (model- or user-reachable). For the full definitions, description conventions, and why a user-invoked skill can invoke model-invoked skills but never another user-invoked one, see [.agents/invocation.md](./.agents/invocation.md).

[`ask-matt`](./skills/engineering/ask-matt/SKILL.md) is the router that maps every user-reachable skill and how they relate. Whenever you add, rename, remove, or change how a user-reachable skill fits the flows, re-read `ask-matt`'s `SKILL.md` and update it so the map stays accurate — a new skill it never mentions, or a stale one it still routes to, is a router that lies.

To (re)link every skill into the local harness skill directories (`~/.claude/skills`, `~/.agents/skills`), run `scripts/link-skills.sh`. Each entry is a symlink into this repo, so a `git pull` keeps installed skills current; re-run the script after adding, removing, or renaming a skill.
