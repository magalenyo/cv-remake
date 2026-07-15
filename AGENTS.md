# AGENTS.md — cv-remake

Instructions for AI agents working in this repository. Prefer **small, focused changes** and **Conventional Commits**.

## What this project is

Personal CV / resume remake. Repository: https://github.com/magalenyo/cv-remake

## Mandatory rules (git workflow)

These rules are **non-negotiable**:

1. **Small commits.** One clear purpose per commit. Do not batch unrelated changes (e.g. layout + copy + config) into a single commit.
2. **Conventional Commits.** Every commit subject must follow [Conventional Commits](https://www.conventionalcommits.org/).
3. **Commit when asked.** Only create commits when the user explicitly requests it, unless they ask you to follow this file’s commit rules for a task.
4. **No secrets or large binaries.** Never commit `.env`, credentials, or large zip/assets unless the user explicitly asks.

On Windows, if `git commit -m` fails, use a message file:

```powershell
& "C:\Program Files\Git\cmd\git.exe" commit -F path\to\message.txt
```

## Small commits

- **One logical change per commit** — e.g. one section of the CV, one styling tweak, one dependency bump.
- **Split by type** — separate `feat`, `fix`, `refactor`, and `docs` into different commits when they are not tightly coupled.
- **Keep diffs reviewable** — aim for commits a human can skim in under a minute.
- **Commit at natural stopping points** — after a coherent block of work is done and verified, not after an entire multi-hour session.

### Good vs bad

```
# ✅ Good — two focused commits
feat(content): add experience section for Next Digital
style(layout): tighten spacing on mobile breakpoint

# ❌ Bad — mixed concerns
update CV with new job and fix header and add README
```

## Conventional Commits

### Format

```
<type>(<optional scope>): <short description in imperative mood>

[optional body: why, not just what]
```

- **Subject:** ~72 characters max; imperative (`add`, `fix`, not `added` / `fixes`).
- **Scope** (optional): area affected, e.g. `content`, `layout`, `styles`, `build`.
- **Body** (optional): explain motivation when the subject alone is not enough.

### Common types

| Type | When to use |
|------|-------------|
| `feat` | New content, section, or user-visible capability |
| `fix` | Bug or incorrect behavior |
| `refactor` | Internal change without behavior change |
| `style` | Visual/CSS-only changes (not `feat`) |
| `docs` | README, AGENTS.md, comments |
| `chore` | Tooling, deps, maintenance |
| `test` | Tests only |
| `ci` | CI/CD configuration |

### Examples

```
feat(content): add work history for Next Digital
fix(layout): prevent header overlap on small screens
style(theme): switch accent color to navy
docs: add agent commit guidelines
chore: add gitignore for build output
```

### Avoid

```
# ❌ No conventional type
Update homepage and fix typo

# ❌ Multiple topics in one commit
feat: add projects section and fix mobile nav and update deps

# ❌ Past tense
added experience section / Fixed the header bug
```

## General coding principles

- **Minimal scope** — solve the requested problem; avoid drive-by refactors.
- **Match existing patterns** — read neighboring files before adding new code or styles.
- **Self-explanatory code** — comment only non-obvious logic.

## Checklist before finishing a task

- [ ] Changes are limited to what was requested
- [ ] No secrets or unintended files in the diff
- [ ] If committing: subject uses **Conventional Commits** and the commit is **small and focused**
