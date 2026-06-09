## Написание комитов

<type>(<scope>): <subject>
где:
-type — обязательный: feat, fix, docs, style, refactor, test, chore, perf, ci, build, revert
-scope — необязательный (например, (api), (ui))
-subject — краткое описание (не пустое, не начинается с заглавной, без точки в конце)

Примеры:
git commit -m "feat: add user authentication"
git commit -m "fix(button): resolve hover state issue"
git commit -m "docs: update README with setup instructions"
git commit -m "chore: configure commitlint and husky"
