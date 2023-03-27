---
title: Git Cheat Sheet
publish_as_page_in_home_listings: true
---

- `git checkout -b <commit hash> <commit hash>` - creates new branch with name  `<commit hash>` based on the `<commit hash>`
- `git clean -df` - delete untracked files
- `git rebase -i HEAD~<num>` - rebase the last `<num>` of commits interactively
- `git reset --soft HEAD~1` - undo the last commit, but keep the last commit's changes staged