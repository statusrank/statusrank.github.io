# AGENTS.md

## Repository Purpose

This is Shilong Bao's academic personal homepage, built with Jekyll/GitHub Pages
on top of the AcadHomepage/Minimal Mistakes style stack.

Treat this repository as a public-facing personal website. Changes should improve
clarity, credibility, readability, and visual polish without making the page feel
like a generic marketing landing page.

## Current Stack

- Static site generator: Jekyll via the `github-pages` gem.
- Main content: `_pages/about.md`.
- Site metadata and author profile: `_config.yml`.
- Navigation data: `_data/navigation.yml`.
- Layout and reusable markup: `_layouts/` and `_includes/`.
- Theme and site styling: `_sass/`, with project-specific overrides in
  `_sass/_custom.scss`.
- Assets: `images/`, `assets/css/`, `assets/js/`, and `assets/fonts/`.
- Local server: `bash run_server.sh`, which runs `bundle exec jekyll serve -l -H localhost`.

## Working Rules

- Check `git status --short` before editing. This repo may have many existing
  user changes; do not revert or overwrite changes you did not make.
- Keep edits scoped. Prefer content changes in `_pages/about.md`, metadata in
  `_config.yml`, and design changes in `_sass/_custom.scss`.
- Avoid editing vendor/theme files under `_sass/vendor/` unless there is no
  practical alternative.
- Preserve GitHub Pages compatibility. Do not add unsupported Jekyll plugins or
  build steps without confirming that deployment can still run on GitHub Pages.
- Keep public profile information accurate. Do not invent affiliations, awards,
  publications, links, or dates.
- This site includes Chinese and English text. Preserve file encoding and verify
  rendered output after editing multilingual content.

## Talks And Academic Service

- In the Invited Talks / 学术报告 section, every new or future talk entry must include a
  relevant, trustworthy image and accurate alt text. Use a user-provided asset
  or verifiable official organizer material such as an agenda, poster, talk
  cover, or event photograph. Record the source URL in the entry or a nearby
  maintenance comment. Do not use fabricated, AI-generated, stock, or unrelated
  images as evidence of an event.
- The 2023 AI TIME Youth PhD Talk and the 2022 NeurIPS oral-presentation entry
  are legacy text-only exceptions. Render them as compact plain text with their
  video links; do not add images, badges, abstracts, or `.paper-box` talk-card
  wrappers unless the user explicitly requests a later redesign.
- If no trustworthy image is available, ask the user to provide or approve one.
  Until then, keep the item as an explicitly incomplete text record rather than
  presenting it as a finished illustrated talk card.
- In rendered talk cards, label the abstract only as `摘要` on the Chinese page
  and `Abstract` on the English page. Do not render process or source labels such
  as `官网简介`, `官网英文简介（译）`, `整理`, `据官网`, `translated from`, or
  `adapted from`.
- Apply this abstract source order: user-provided complete text, official Chinese
  text, then a faithful Chinese translation of official English text only when
  no Chinese version exists. Reproduce user-provided abstracts exactly without
  polishing, shortening, reordering, or correcting them. Preserve official
  Chinese wording when authorized. For English-only sources, retain the claims,
  scope, information order, and detail level in translation without adding
  interpretation.
- Keep abstract source URLs and translation/provenance notes in nearby HTML
  comments or maintenance records, never in the visible abstract heading. If no
  official abstract exists, ask the user for one or omit it; never invent one.
- Chair, forum-chair, session-chair, moderator, host, area-chair, and program-chair
  roles belong under Services / 学术服务 and must remain compact text-only list
  items. Do not attach thumbnails, posters, abstracts, or talk-card layouts.
- When the same event includes both a speaking role and a chair role, maintain
  two records: an illustrated entry under Invited Talks / 学术报告 and a
  text-only entry under Services / 学术服务.

## Design Direction

- Use the installed Taste Skill (`design-taste-frontend`) for substantial visual
  design work after restarting Codex so the new skill is loaded.
- Aim for a modern academic homepage: restrained, crisp, professional, and easy
  to scan.
- Prioritize content hierarchy: About, News, Highlight Papers, Publications,
  Services, Honors, and Awards should remain easy to distinguish.
- Keep cards compact and purposeful. Do not turn the site into a card-heavy
  SaaS-style page.
- Prefer readable typography, balanced spacing, consistent link treatment, and
  strong mobile behavior over decorative effects.
- Avoid broad one-color themes, oversized gradients, ornamental blobs, and UI
  elements that distract from research content.
- When changing the first viewport, make the identity signal clear: name, role,
  research area, and profile photo should be legible without scrolling.

## Verification

Use the smallest relevant check for the change:

- For content-only edits, inspect the affected markdown and any generated links.
- For style/layout edits, run the local Jekyll server and visually inspect the
  homepage at desktop and mobile widths.
- For dependency or build changes, run `bundle exec jekyll build` if the local
  Ruby/Jekyll environment is available.

If the local Ruby environment is missing or dependencies need installation,
report that clearly instead of guessing.
