# Learn · Matt Pocock 的 Agent Skills 学习资料

这是围绕本仓库（`mattpocock/skills`）这套 Claude Code agent skills 的**外部学习资料时间线** —— 作者 Matt Pocock（[@mattpocockuk](https://x.com/mattpocockuk) · [aihero.dev](https://www.aihero.dev)）在博客、YouTube、X 上对这些 skill 的讲解与更新公告。

按**时间倒序**排列（最新在前），覆盖 **2026 年 3 月至今**。

## 怎么用这份清单

- **想快速上手** → 先看 [3 月《5 Agent Skills I Use Every Day》](#-2026-03)（整套 skill 的入门）。
- **想搞懂"如何写好 skill"的方法论**（你做 plugin 拆分时最相关）→ 看 [6 月 Skills Changelog v1](#-2026-06) 里的 `writing-great-skills` 重写 + GLOSSARY。
- **想避坑** → 看 [5 月《9 Things People Get Wrong With /grill-\*》](#-2026-05)。
- 想要本仓库本地那份「上游合并解读」HTML，见仓库外 `~/skill-updates.html`。

**图例**：📝 博客 / newsletter（aihero.dev） · 📺 YouTube · 🐦 X/Twitter · 📦 GitHub repo

> ⚠️ 资料来源为 2026-06 的 Grok web/X 搜索汇总，部分日期为近似值（标 `约`）。引用前建议点开链接二次确认。

---

## 🗓 2026-06

| 日期 | 类型 | 标题 / 链接 | 说明 · 关联 skill |
|------|------|------------|------------------|
| 06-22 | 🐦 | [Building Great Skills: The Missing Manual（AIE SF 演讲预告）](https://x.com/mattpocockuk/status/2069170261367128080) | 在 AI Engineer SF 的演讲，主题正是"如何构建/改进 skill"。留意后续是否放出录像。 |
| 约 06-18~24 | 🐦 | [`/loop-me` 介绍](https://x.com/mattpocockuk/status/2069729160600203595) | 新的 in-progress skill：采访你、找出可委派给 AI 的 loop。→ `loop-me` |
| 约 06-17~24 | 🐦 | [把 skill 写短的技巧](https://x.com/mattpocockuk/status/2069785124950945825) · [续](https://x.com/mattpocockuk/status/2067966169860931606) | 去 no-op、去重复、去无关。→ `writing-great-skills` |
| **06-18** | 📝 | [**Skills Changelog v1 announcement**](https://www.aihero.dev/skills/skills-changelog-v1-announcement) ⭐ | **重点**：v1 发布全解。`writing-great-skills` 大改写 + 新 GLOSSARY（no-op / sprawl / sediment 等术语）、63% token 削减（`disable-model-invocation`）、user- vs model-invoked 分类、新增 `/ask-matt` router。→ `writing-great-skills` `domain-modeling` `grilling` |
| 约 06-19 | 📺 | [Matt Pocock's Agentic Engineering Workflow（David Ondrej）](https://www.youtube.com/watch?v=nQwJVHCtDDY) | 第三方复盘 Matt 的整套 agentic 工作流。 |
| 06-08 | 📝 | [Learn Anything With My /teach Skill](https://www.aihero.dev/learn-anything-with-my-teach-skill) | `/teach` skill：把任何主题做成分阶段、带练习的自适应课程。→ `teach` |

## 🗓 2026-05

| 日期 | 类型 | 标题 / 链接 | 说明 · 关联 skill |
|------|------|------------|------------------|
| **05-25** | 📺 | [**9 Things People Get Wrong With My /grill-\* skills**](https://www.youtube.com/watch?v=UzMNBN6xLLA) ⭐ | 13 分钟，讲 grilling 常见误区：太被动、不做 prototype、scope 失控、选错 model 等。→ `grill-me` `grill-with-docs` |
| 05-25 | 📝 | [9 Things People Get Wrong With /grill-me and /grill-with-docs](https://www.aihero.dev/things-people-get-wrong-with-grill-me-and-grill-with-docs) | 上一条的文字版深度指南。 |
| 05-25 | 🐦 | [grill-\* 误区帖](https://x.com/mattpocockuk/status/2058900756640453072) | 视频/博客的 X 入口。 |
| 05-13 | 📝 | [handoff: Move Context Between Agent Sessions](https://www.aihero.dev/skills-handoff) | `/handoff` 用法指南：在 agent session 间搬运上下文。→ `handoff` |
| 05-13 | 📝 | [prototype: Answer Questions With Throwaway Code](https://www.aihero.dev/skills-prototype) | `/prototype` 用法：用一次性代码回答设计问题。→ `prototype` |
| 05-12 | 📺 | [New Skills! /handoff, /prototype, /review and /writing-\*](https://www.youtube.com/watch?v=DNqsMXH6Eog) | Skills Changelog 视频，讲新增/更新的这批 skill。 |
| 05-11 | 📝 | [Skills Changelog: /handoff, /prototype, /review and /writing](https://www.aihero.dev/skills/skills-changelog-handoff-prototype-review-and-writing) | 对应的 changelog 博客，含 `/review` 与 writing 系列（fragments/beats/shape）预览。 |
| 05-11 | 🐦 | [两个新 skill 公告](https://x.com/mattpocockuk/status/2053789346084331569) | `/handoff` + `/prototype`。 |
| 约 05 | 📺 | [/handoff is my new favourite skill](https://www.youtube.com/watch?v=dtAJ2dOd3ko) | `/handoff` 深度讲解。→ `handoff` |
| 05-06 | 🐦 | [/prototype 预告](https://x.com/mattpocockuk/status/2051914199081652641) | 帮你 prototype business logic。 |
| 05-05 | 📝 | [I stopped using /grill-me for coding. Now I use /grill-with-docs](https://www.aihero.dev/grill-with-docs) | grilling 演进：写代码时改用 `/grill-with-docs`。→ `grill-with-docs` |

## 🗓 2026-04

| 日期 | 类型 | 标题 / 链接 | 说明 · 关联 skill |
|------|------|------------|------------------|
| 04-30 | 📝 | [Skills Changelog: Ubiquitous Language → /grill-with-docs](https://www.aihero.dev/skills/skills-changelog-ubiquitous-language-grill-with-docs) | `/ubiquitous-language` 被 `/grill-with-docs` 取代；CONTEXT.md / domain modeling / ADR 的来历。→ `grill-with-docs` `domain-modeling` |
| 04-30 | 🐦 | [本周 skills changelog（含视频）](https://x.com/mattpocockuk/status/2049770396858089933) | 多 tracker 支持、实验性 `/diagnose`、`/triage`。 |
| 04-27 | 📝 | [tdd: Red, Green, Refactor for Agentic Coding](https://www.aihero.dev/skill-test-driven-development-claude-code) | `/tdd` skill 详解：垂直切片 + red-green-refactor。→ `tdd` |
| 04-24 | 📺 | [Full Walkthrough: Workflow for AI Coding](https://www.youtube.com/watch?v=-QFHIoCo-Ko) | 完整工作坊：grill → PRD → TDD → 切片 → agent 工作流。 |
| 约 04（末） | 📺 | [I stopped using /grill-me for coding. Here's what I use instead](https://www.youtube.com/watch?v=6BB6exR8Zd8) | 引入 `/grill-with-docs`。→ `grill-with-docs` |

## 🗓 2026-03

| 日期 | 类型 | 标题 / 链接 | 说明 · 关联 skill |
|------|------|------------|------------------|
| 03-23 | 📝 | [My 'Grill Me' Skill Went Viral](https://www.aihero.dev/my-grill-me-skill-has-gone-viral) | `/grill-me` 走红，讲它的用法与价值。→ `grill-me` |
| 约 03-20 | 📝 | [Real-world feature build with Claude Code: every step explained](https://www.aihero.dev/real-world-feature-build-with-claude-code) | 真实 feature 全流程：grill → PRD → issues → TDD/反馈环。 |
| **03-16** | 📺 | [**5 Claude Code skills I use every single day**](https://www.youtube.com/watch?v=EJyuu6zlQCg) ⭐ | 入门首选：`/grill-me`、`/to-prd`、`/to-issues`、`/tdd`、`/improve-codebase-architecture`。 |
| 03-16 | 📝 | [5 Agent Skills I Use Every Day](https://www.aihero.dev/5-agent-skills-i-use-every-day) | 上一条视频的文字版拆解。 |
| 约 03 | 📺 | [Building a REAL feature with Claude Code: every step explained](https://www.youtube.com/watch?v=hX7yG1KVYhI) | 真实 feature 构建示例。 |

---

## 关联：这些资料对应本仓库的哪些 plugin

| 资料主题 | 对应 skill | 所在 bucket / plugin |
|----------|-----------|---------------------|
| writing-great-skills / GLOSSARY 方法论 | `writing-great-skills` | `productivity/` → **productive** plugin |
| grilling 系列 | `grill-me` `grilling` | productive；`grill-with-docs` 在 **engineering** |
| handoff / teach | `handoff` `teach` | **productive** plugin |
| tdd / to-prd / to-issues / prototype / diagnosing / domain-modeling | 同名 skill（to-prd、to-issues 已更名为 `to-spec`、`to-tickets`） | **engineering** plugin |
| loop-me / decision-mapping | `loop-me` `decision-mapping` | `in-progress/`（草稿，**不打包**） |

## 长期维护

- 后续有新内容，按同样格式追加到对应月份表格顶部（保持倒序）。
- 官方更新源：[@mattpocockuk](https://x.com/mattpocockuk) · [aihero.dev 全部文章](https://www.aihero.dev/posts) · [YouTube](https://www.youtube.com/@mattpocockuk/videos) · newsletter [aihero.dev/s/skills-newsletter](https://www.aihero.dev/s/skills-newsletter)。
