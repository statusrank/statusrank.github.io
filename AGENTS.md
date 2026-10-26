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

## Independent Chinese And English Profiles

- Write the Chinese and English homepage profiles independently for their own
  readers. Do not produce the Chinese profile by directly translating or
  mechanically mirroring the English profile, or vice versa.
- Keep names, roles, dates, awards, publications, and other shared facts
  consistent, but allow different structure, emphasis, length, and wording.
  For assistant-drafted copy, prefer natural academic Chinese without
  duplicating detailed lists already shown elsewhere on the page. When the user
  supplies final Chinese copy, preserve its wording, scope, and detail even if
  it is longer. Fix broken Markdown links without changing their destinations.
- When the user requests a change to only one language, change only that page
  unless they explicitly request cross-language updates.

## Publication Citation Style

- Format conference papers in compact conference style: official venue acronym,
  page range when available, and year; for example,
  `**NeurIPS**, pp. 2451–2464, 2022.`
- Do not display the full proceedings-series title, proceedings volume or issue,
  or publisher-series metadata for conference papers (for example,
  `Advances in Neural Information Processing Systems 35`, `PMLR 267`, or
  `AAAI 39(18)`) unless the user explicitly requests full bibliographic metadata.
- When official page numbers are unavailable, use the venue acronym and year
  without inventing pages. Preserve verified Oral, Spotlight, or Long Talk
  distinctions separately from the citation.
- A newly accepted paper without a public landing page must still use the same
  title hierarchy and catalog styling as linked publications. Render its title
  as a non-link title element, keep its publication metadata available to any
  catalog filters, and add the real link only after it becomes public. Never add
  a placeholder, unrelated, or fabricated link merely to obtain linked-title
  styling.
- Journal papers retain conventional journal metadata, including journal name,
  volume, issue, pages, and publication date when available.

## Academic Keywords

- Choose community-standard, searchable task or subfield names at a moderate
  level of specificity. Avoid umbrella disciplines, narrow implementation
  details, and redundant synonyms. Do not force a fixed number of keywords.
- Prefer terms used by independent papers that readers could search on Google
  Scholar. If Scholar cannot be accessed, verify usage in primary publications
  and do not claim that Scholar indexing was directly checked.
- Do not use a paper's newly coined method, metric, or acronym as a field keyword
  unless the user requests it or it has independently become established.
  Popular terms must still accurately describe the paper.
- These are editorial homepage tags, not replacements for official author
  keywords. Use standard English search terms where useful on either language
  page, and maintain the shared facts in `_data/preprints.yml`.

## Honors And Awards Ordering

- In Honors and Awards / 荣誉与奖励, separate personal honors from competition
  results in source order. Place personal honors first and competition results
  second, but render them as one continuous list without visible subgroup
  headings such as `Personal Honors`, `Competition Awards`, `个人荣誉`, or
  `竞赛获奖`.
- Within each group, sort entries in reverse chronological order, newest first.
  Keep all competition results together, including championships and other
  medals; do not interleave them with personal honors.
- Preserve the exact official award name when evidence provides one. On the
  Chinese page, a user-confirmed championship may be labeled `冠军`, with the
  official English award name retained in parentheses when useful. The English
  page should use the official award title.
- Keep News / 最新动态 as an independent reverse-chronological timeline; adding
  or regrouping an award must not remove its corresponding news item.

## Talks And Academic Service

- In News / 最新动态, announce the user's academic-service appointments as
  invitations. Use natural first-person English such as `I was invited to
  serve as...` or `I was invited to chair...`, and concise Chinese such as
  `受邀担任...`. Name the exact role and venue. Do not make acceptance itself
  the lead or repeat `已接受邀请` after `受邀`. Reviewer distinctions such as
  Gold Reviewer and Notable Reviewer are honors and retain award language.
- When adding or changing an academic-service role, update both News / 最新动态
  and the corresponding Services / 学术服务 entry on the English and Chinese
  pages in the same change. Match the exact role and venue across all four
  places. An invitation alone should be labeled `invited` / `受邀` in Services;
  do not imply an active appointment or open-ended term until confirmed.
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

## Student Profiles

- Maintain current students in `_data/students.yml`; render both languages with
  `_includes/current-students.html`. Preserve the established roster order,
  portraits, and profile links when updating honors.
- Display only honors earned during graduate study. Exclude undergraduate
  scholarships, undergraduate graduation honors, and awards whose study stage
  cannot be established. Use exact user-confirmed years; do not infer dates.
- Do not list academic-presentation awards such as excellent-report or
  best-student-presentation awards in student cards.
- Keep a dated source for each new honor in the data or maintenance record.
  Use the established former-student design as the reference for additions:
  two-column horizontal cards on wide screens, portrait on the left and all
  text on the right, subtle light-theme background and capsule-shaped badges.
  Adapt to one column when content space is tight; avoid redesigning these
  into three-column small tiles. Preserve the dark-theme counterpart.
  Display current students' full honor names and years directly as a quiet
  text list. Do not duplicate honors as abbreviated badges or hide them behind
  an Honor details / 荣誉详情 disclosure. Align years and wrapped names in columns.
  Put publication counts at the top right of each current-student card beside
  the portrait/name header, one compact venue badge per line. Publication
  badges may use a soft violet tint and stronger type for emphasis without
  assigning a different color to every venue. Keep the honor text list in the
  right-hand content area below the header. Preserve former-student badges.
  Do not shrink important content
  to fit. Keep placeholder avatars visually quieter than real portraits.

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

## GitHub Publishing Network

- This Windows machine routes GitHub HTTPS Git traffic through the user-level,
  GitHub-scoped proxy `http://127.0.0.1:7890` with HTTP/1.1. The canonical
  settings live in the global Git configuration; do not duplicate them in this
  repository's local Git config.
- Before pushing, ensure the local proxy application is running. A normal
  `git push origin main` should then work without one-off proxy arguments.
- If GitHub access fails, first verify the effective URL-matched proxy and run a
  read-only `git ls-remote --heads origin main`. Do not disable SSL verification
  or change the remote URL as a workaround.
