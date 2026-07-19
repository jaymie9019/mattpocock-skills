Quickstart:

```bash
npx skills add mattpocock/skills --skill=batch-grill-me
```

```bash
npx skills update batch-grill-me
```

[Source](https://github.com/mattpocock/skills/tree/main/skills/productivity/batch-grill-me)

## What it does

`batch-grill-me` runs the same relentless interview as [grill-me](https://aihero.dev/skills-grill-me), walking the decision tree until you and the agent reach a **shared understanding** — but it asks in **rounds** instead of one question at a time. Each round fires the whole **frontier** at once: every decision whose prerequisites are already settled, numbered, each with the agent's recommended answer.

You answer a batch, and those answers reshape the tree — settled decisions push the frontier outward and unblock the questions that hung off them. The agent recomputes the frontier and asks the next round. A question whose answer depends on another still open in this round waits for a later round, so you never guess at something you haven't decided yet.

## When to reach for it

You invoke this by typing `/batch-grill-me` — the agent won't reach for it on its own.

Reach for it when you'd rather answer questions in batches than in a back-and-forth — a plan you can sit down with and work through a screen at a time. For the one-question-at-a-time version that reacts to each answer before the next, use [grill-me](https://aihero.dev/skills-grill-me); for the same interview against a codebase, leaving ADRs and a glossary behind, use [grill-with-docs](https://aihero.dev/skills-grill-with-docs).

## The frontier, round by round

The frontier is the set of questions you can answer *now* without guessing at answers you haven't heard yet. Working the tree in rounds means the agent widens its questioning as fast as your answers unlock it, rather than serialising through one decision at a time.

Finding **facts** is the agent's job, never yours: when a frontier question needs a fact from the environment, it dispatches a sub-agent to look it up rather than asking you — and it doesn't block on it, so only the questions downstream of that lookup wait while the rest of the frontier gets asked now. The **decisions** are yours: each is put to you and waits for your answer.

## It's working if

- Each round arrives as a numbered batch, not a single question, and every question carries a recommended answer.
- Nothing in a round depends on another question still open in the same round.
- The agent looks facts up itself and only asks you to decide.
- The session ends when the frontier is empty — every branch visited — and the agent waits for you to confirm shared understanding before acting.

## Where it fits

`batch-grill-me` is a reach-for-it-anytime standalone — a pre-build stress test, like [grill-me](https://aihero.dev/skills-grill-me) but batched. It is a user-invoked front door to the [grilling](https://aihero.dev/skills-grilling) primitive; its closest neighbour is [grill-me](https://aihero.dev/skills-grill-me), which runs the identical interview one question at a time. If the outcome is a spec you want written down, hand off to [to-spec](https://aihero.dev/skills-to-spec), which synthesises the settled understanding without re-interviewing you. When you're unsure which flow fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
