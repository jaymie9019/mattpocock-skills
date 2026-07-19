Quickstart:

```bash
npx skills add mattpocock/skills --skill=to-questionnaire
```

```bash
npx skills update to-questionnaire
```

[Source](https://github.com/mattpocock/skills/tree/main/skills/productivity/to-questionnaire)

## What it does

`to-questionnaire` turns a decision you can't resolve alone into a **Markdown questionnaire** you hand to the one person who can — filled in async, or worked through together in a meeting. The recipient holds knowledge you lack; the document pulls it out of them.

It grills you about the **send**, not the subject. You can't answer the substance — that's why you're sending it — but you can always say who it goes to and what you need back, so the interview stays on those two things. The questions in the document then target the **gap** between what the recipient knows and what you need to walk away able to decide.

## When to reach for it

You invoke this by typing `/to-questionnaire` — the agent won't reach for it on its own.

Reach for it when a decision is blocked on knowledge that lives in someone else's head — a domain expert, a stakeholder, another team — and you need their input in a form they can answer on their own time. For sharpening a plan you *can* reason about yourself, use [grill-me](https://aihero.dev/skills-grill-me) instead; `to-questionnaire` is for the questions you can't answer at all.

## Grill the send, not the subject

The interview is two exchanges, both about the send:

- **Who is it going to?** Their role, expertise, and relationship to you — this fixes the questionnaire's tone and how much context it must carry.
- **What do you need back?** The specific decisions or facts you can't resolve alone, as a concrete list of what you must come away able to do or decide.

From those two, the agent drafts questions aimed at the gap and writes them to `to-questionnaire-<slug>.md` in the current directory. The document is framed as a **discovery questionnaire** — you lack context, the recipient holds it — with questions ordered most-important-first (async means you may get only one pass), one idea per question, never compound.

## Where it fits

`to-questionnaire` is a reach-for-it-anytime standalone — a way to unblock a decision on someone else's knowledge, off the main build flow. Its neighbour is [grill-me](https://aihero.dev/skills-grill-me): grill-me interrogates *you* about what you already know, while to-questionnaire packages up what you *don't* know for someone else to answer. What comes back can feed a [grill-me](https://aihero.dev/skills-grill-me) session or a [to-spec](https://aihero.dev/skills-to-spec) once the gap is filled. When you're unsure which flow fits, [ask-matt](https://aihero.dev/skills-ask-matt) routes you.
