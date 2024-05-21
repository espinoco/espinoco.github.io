---
title: gitconfig
published_on: 2023-04-06
updated_on: 2024-05-15
---
I think the Git command line is the best Git client. I use JetBrains IDEs, with Git staging enabled, for reviewing local changes and interactive staging. I use the Git command-line interface (CLI) for all other Git tasks. I use this `.gitconfig` professionally and personally.

```ini
[alias]
    # Status
    g = status

    # Stage
    s = add

    # Unstage
    u = restore --staged

    # Checkout alias.
    co = checkout

    # Creates a new commit.
    cc = commit

    # Amends the last commit.
    ca = commit --amend

    # Creates a new commit with an empty message. Useful for dummy commits.
    ce = commit --allow-empty

    # Deletes a branch.
    bd = !git branch -D

    # Renames the current branch. It reads from the input the branch name to delete.
    br = !git branch -m

    # Gets the upstream remote and branch.
    up = !git for-each-ref --format='%(upstream:short)' "$(git symbolic-ref -q HEAD)"

    # Gets the upstream branch only.
    upb = !git up | sed 's/.*\\///'

    # Gets the upstream remote only.
    upr = !git up | sed 's/\\/.*//'

    # Fetches the upsteram branch from the upstream remote.
    fu = !git fetch $(git upr) $(git upb)

    # Rebases the current branch with the updated upstream remote and branch.
    ru = !git fu && git rebase $(git up)

    # Fetches a branch from the upstream remote and checks it out. It reads from input the name of
    # the branch from the remote.
    gb = !git fetch $(git upr) $1 && git checkout -b $1 $(git upr)/$1 && :

    # Pushes the current branch to the upstream push remote.
    pu = !git push $(git upr) $(git branch --show-current)

    # Spins off a new branch based on the upstream remote and branch. It first checks if there are
    # uncommitted changes. It reads from the input the name of the new branch.
    so = "!if [[ -z $(git status -s) ]]; then \
               if [[ -z "$1" ]]; then \
                   echo \"Usage: git so <new-branch-name>\"; \
               else \
                   git fu && \
                   git checkout -b $1 $(git up); \
               fi; \
           else git status; fi" && :

    # Creates a stash of the index and working tree. The stash name includes the
    # current date and time stamp and takes an optional description read from input.
    # Additionally, it cleans up all the changes.
    zz = "!git stash push --include-untracked --message \"$(date +'%a %b %d %H:%M') $1\" && \
            git reset --hard HEAD -- && git clean --force -d" && :

    # Applies a stash to the working tree preserving the index.
    # It takes an optional stash index, otherwise, it defaults to the last created stash.
    za = !git stash apply --index $1 && :

    # Applies a stash to the working tree without preserving the index. When `git za` fails because
    # of conflicts, use this instead.
    # It takes an optional stash index to apply, otherwise, it defaults to the last created stash.
    zw = !git stash apply $1 && :

    # Lists stashes.
    zl = !git stash list

    # Starts an interactive rebase to change the specified last number of commits. It reads from
    # the input the last number of commits to rebase.
    ri = !git rebase -i HEAD~$1 && :

    # Displays one-line logs for the current branch. It takes an optional number of commits to
    # display, otherwise, it defaults to the last 3 commits.
    ll = "!if [[ -z $1 ]]; then \
               git log --pretty=oneline -3; \
           else \
               git log --pretty=oneline -$1; \
           fi" && :

    # Displays one-line logs for the upstream remote and branch. It takes an optional number of
    # commits to display, otherwise, it defaults to the last 3 commits.
    lu = "!if [[ -z $1 ]]; then \
               git fetch $(git upr) $(git upb) && \
               git log --pretty=oneline @{u} -3; \
           else \
               git fetch $(git upr) $(git upb) && \
               git log --pretty=oneline @{u} -$1; \
           fi" && :
[core]
    # Sets the Vi editor to create and edit the commit and tag messages.
    editor = vi
[pull]
    # Updates the current branch only if it can be "fast-forwarded" without creating new commits
    # during the process.
    ff = only
[push]
    # Pushes the current branch to a branch of the same name, avoids setting up the upstream branch
    # each time, and helps prevent pushing current branch changes to other branches by mistake.
    default = current
[include]
    # I place all the Git projects under ~/workspace and a ~/workspace/.gitconfig with workspace
    # specific configurations like user, email, defaultBranch, etc. It allows to have this common
    # config and separated specific settings for life and work.
    path = ~/workspace/.gitconfig

```