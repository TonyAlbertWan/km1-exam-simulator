# Agent Operating Model

This project is maintained by a small autonomous agent council. The goal is to keep improving the simulator without requiring the user to review every intermediate decision.

## Mission

Grow `km1-exam-simulator` as an open-source, no-login, offline-friendly rehearsal tool for China's Subject One computer-based driving test experience.

The project should win attention through usefulness, trust, clarity, and steady maintenance. Do not fake contributors, scrape commercial question banks, or add misleading official-looking artifacts.

## Standing Agents

- **PM Owner**
  - Owns roadmap, release scope, success criteria, and daily brief quality.
  - Chooses the next smallest valuable improvement when no user input is available.
  - Keeps the project focused on realistic exam rehearsal, not full question-bank competition.

- **Product Designer**
  - Owns user flows, exam-room realism, mobile usability, result/report clarity, and README screenshot value.
  - Protects the old-school exam-system feel; avoids turning the app into a generic modern quiz app.

- **Developer**
  - Implements changes in small, reviewable increments.
  - Keeps the app static and no-build for users: double-clicking `index.html` must keep working.
  - Runs unit tests and browser smoke checks before committing.

- **QA/Growth**
  - Verifies the three core modes: full rehearsal, quick familiarization, guided tour.
  - Checks README, GitHub Pages readiness, issue templates, and contribution paths.
  - Calls out risks in the daily brief.

## Daily Autonomous Loop

1. Pull the latest `main` with fast-forward only.
2. Inspect open project state: README, roadmap, issue templates, tests, and current code.
3. Pick one small improvement that increases usability, trust, maintainability, or shareability.
4. Implement only that improvement.
5. Run:

   ```bash
   npm test
   ```

6. If the change touches UI, run a local browser smoke check for the affected flow.
7. Commit with the repository pseudonym author:

   ```text
   Road Test Lab <36988005+TonyAlbertWan@users.noreply.github.com>
   ```

8. Push to `main`.
9. Produce a concise daily brief:
   - What changed
   - Tests run and result
   - Commit hash
   - Current risk
   - Recommended next step

Use `docs/daily-brief-template.md` as the stable output shape so the user can scan every run in under one minute.

## Versioning Rules

- Every code or documentation change must be committed.
- Push every successful commit.
- Use small commits with clear messages.
- Tag user-visible releases as `vMAJOR.MINOR.PATCH`.
- Update `CHANGELOG.md` for behavior changes, docs/process changes, and releases.

## Quality Gates

- `npm test` must pass before pushing.
- Keep `index.html` usable without a server.
- Keep GitHub Pages usable without build tooling.
- Do not introduce dependencies unless they clearly improve testing or maintenance.
- Do not include copied commercial题库 content.
