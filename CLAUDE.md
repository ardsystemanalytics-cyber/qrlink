# CLAUDE.md

Repo-specific working instructions for Claude Code in this project.

## Workflow preference

- Do not ask for approval/confirmation on content or data work (e.g. importing/scraping
  content into `js/data.js`, editing text, restructuring pages) while it's in progress.
  Just proceed end-to-end.
- This includes testing/verification: don't ask clarifying questions about how to test,
  what to check, or how to work around test-tooling quirks — just proceed and verify.
- Asking permission to do or test something is never necessary — that's always allowed.
  The one exception is genuine uncertainty about what's actually being requested (unclear
  or ambiguous scope/spec) — it's fine to ask in that case, to avoid building the wrong thing.
- If a request looks like it could break something, or there's a cleaner/better technical
  approach, feel free to point it out and suggest it instead of just implementing exactly
  as asked.
- The only checkpoint that matters is `git push` — always ask before pushing to GitHub, every time.
  `git commit` is local-only (nothing published) and needs no prior approval.
- When the work is done, give one concise summary of what was changed instead of
  narrating step by step along the way.
