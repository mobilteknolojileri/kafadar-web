# Commit Conventions

Conventional Commits format. Enforced by commitlint + husky.

## Format

```
<type>(<scope>): <description>
```

## Types

| Type       | Use for                      |
| ---------- | ---------------------------- |
| `feat`     | New feature                  |
| `fix`      | Bug fix                      |
| `docs`     | Documentation                |
| `style`    | Formatting (no logic change) |
| `refactor` | Code restructure             |
| `perf`     | Performance                  |
| `test`     | Tests                        |
| `build`    | Dependencies, build system   |
| `ci`       | CI/CD                        |
| `chore`    | Maintenance, tooling         |
| `revert`   | Revert previous commit       |

## Scopes

`auth` `quiz` `result` `sharing` `profile` `premium` `ads` `ui` `i18n` `config` `store` `deps` `docs` `tests` `readme` `analytics` `deeplink`

> **Note:** For marketing assets (screenshots, images), use `chore(marketing)`. ❌ `assets` is NOT a valid type.

## Örnekler

```
feat(auth): add google sign-in
fix(quiz): resolve answer scoring bug
chore(deps): upgrade expo to v54
feat(quiz): add multiple choice question type
```

## Rules

- **Atomic**: One logical change per commit
- **Imperative**: "add" not "added"
- **Lowercase**: description starts lowercase, including acronyms (`url`, `api`, not `URL`, `API`)
- **No code identifiers**: Avoid function/class/constant names in subject (fails commitlint). Examples:
  - ❌ `add COLORS import` → uppercase constant
  - ❌ `add useQuizStore` → code identifier
  - ✅ `add color constants` → descriptive text
  - ✅ `add quiz store hook` → descriptive text
- **No period**: no `.` at end
- **Header max 72 chars**: type + scope + description combined

## Breaking Change

Add `!` after scope:

```
feat(api)!: change auth endpoint
```

## Revert

```
revert: feat(auth): add google sign-in
```

## Issue Reference

```
fix(quiz): resolve scoring bug (#42)
```

## AI Instructions

When suggesting commits:

1. **Batch format**: Provide commits as copy-pasteable PowerShell commands. **NO comment lines** (no `#` prefixes):

```powershell
git add "app/(tabs)/index.tsx" "src/features/quiz/quizStore.ts"
git commit -m "feat(quiz): add quiz creation flow"

git add "src/lib/supabase.ts"
git commit -m "fix(auth): resolve session refresh edge case"
```

2. **Quote paths with parentheses**: PowerShell requires quotes for paths like `(tabs)`:

```powershell
# ✅ Correct
git add "app/(tabs)/create.tsx"

# ❌ Wrong - will fail in PowerShell
git add app/(tabs)/create.tsx
```

3. **Atomic commits**: Group related files, separate unrelated changes into different commits.

4. **STRICT lowercase rule**: NEVER use camelCase, PascalCase or code identifiers in commit message subject:
   - ❌ `use getQuizData function` → camelCase identifier
   - ❌ `add SafeContainer component` → PascalCase identifier
   - ✅ `use quiz data getter` → descriptive lowercase
   - ✅ `add safe container component` → descriptive lowercase
