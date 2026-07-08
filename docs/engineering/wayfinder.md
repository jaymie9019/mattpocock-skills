Quickstart:

```bash
npx skills add mattpocock/skills --skill=wayfinder
```

```bash
npx skills update wayfinder
```

[Source](https://github.com/mattpocock/skills/tree/main/skills/engineering/wayfinder)

## What it does

`wayfinder` plans a chunk of work too big for one agent session — and too fogged in to see the end of — as a **shared map** of investigation tickets on your issue tracker, then resolves them one at a time until the way to the destination is clear.

It **plans, it doesn't build**. Every ticket resolves a *decision*, not a deliverable, and the map is done when nothing is left to decide before someone goes and does the thing. The pull to just start doing the work is the signal you've reached the edge of the map and it's time to hand off to the build flow.

## When to reach for it

You invoke this by typing `/wayfinder` — the agent won't reach for it on its own.

Reach for it when an effort is both **big** (more than one session can hold) and **foggy** (the decisions block each other, so you can't grill it straight into a plan). If one pass of grilling already converges on a spec, you don't need a map — grill and go straight to [to-prd](https://aihero.dev/skills-to-prd) instead. Wayfinder earns its weight only when there is genuine **fog of war** to clear.

## Prerequisites

Wayfinder lives on your issue tracker — the map is one issue labelled `wayfinder:map` and its tickets are child issues — so [setup-matt-pocock-skills](https://aihero.dev/skills-setup-matt-pocock-skills) must have configured the tracker first. The tracker-specific mechanics (how the map, child tickets, blocking edges, and frontier queries are expressed) live in that repo's `docs/agents/issue-tracker.md`; absent it, wayfinder falls back to a local-markdown tracker.

## Fog of war

The map is *deliberately* incomplete. Beyond the live tickets lies the **fog of war** — decisions you can tell are coming but can't yet pin down, because they hang on questions still open. You don't chart what you can't see: the fog is written loosely into the map's **Not yet specified** section, and resolving a ticket clears the fog ahead of it, **graduating** whatever's now sharp into fresh tickets — one at a time, until no tickets remain.

The test for fog-or-ticket is whether you can *state* the question precisely now — not whether you can *answer* it. Sharp question → ticket, even if it's blocked. Can't phrase it sharply yet → leave it in the fog. Work past the destination isn't fog at all — it's **out of scope**, ruled out and never graduated.

## The map and its tickets

- **The map** is a single index issue: a Destination (what reaching the end looks like), Notes, the Decisions-so-far index, and the Not-yet-specified fog. It gists and links; it never restates a decision, which lives in exactly one place — its ticket.
- **Tickets** are child issues, each sized to one ~100K-token session and carrying a type: **research** (AFK — read sources, leave a summary), **prototype** (make a rough artifact to react to), **grilling** (the default — one question at a time), or **task** (the one type that *does* rather than decides, and only to unblock a decision).
- **The frontier** is the open, unblocked, unclaimed tickets — the edge of the known. Blocking uses the tracker's native dependency edges so the frontier renders visually in the tracker's own UI. A session **claims** a ticket by assigning it before any work, so parallel sessions don't collide.

The one hard rule across both modes — charting the map and working through it — is **never resolve more than one ticket per session**.

## It's working if

- There's a single `wayfinder:map` issue, and the decisions live in the tickets while the map only gists and links them.
- Tickets are questions to resolve, not tasks to build — and the fog is written down as fog, not pre-sliced into tickets.
- Each session claims one ticket, resolves it, records the answer back on the map, and stops.

## Where it fits

Wayfinder is a **precursor to the main build chain** — it runs *before* it, not inside it:

```txt
wayfinder  →  grill-with-docs → to-prd → to-issues → implement → code-review
```

It exists for the case the main flow assumes away: that step-1 grilling can converge in one context window. When it can't, wayfinder charts the fog into a shared map and clears it decision by decision; once the way is clear you re-enter at [grill-with-docs](https://aihero.dev/skills-grill-with-docs) and [to-prd](https://aihero.dev/skills-to-prd) with the plan in hand. Its nearest sibling is [to-issues](https://aihero.dev/skills-to-issues), which also splits work onto the tracker — but to-issues cuts a *settled* plan into buildable vertical slices, whereas wayfinder cuts an *unsettled* problem into decisions to make. When you're unsure which skill or flow fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
