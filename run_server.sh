#!/usr/bin/env bash

# Jekyll watches and rebuilds changed files automatically. Browser LiveReload is
# intentionally disabled to avoid EventMachine native ABI conflicts on Windows.
bundle exec jekyll serve -H localhost
