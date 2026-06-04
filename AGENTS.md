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
