---
title: Git quick reference
published_on: 2023-04-09
updated_on: 2023-07-26
---

- Undo the last commit.
```
git reset --hard HEAD~1
```
- Undo the last commit but keep the last commit's changes staged.
```
git reset --soft HEAD~1
```
- Create a new branch based on an existing local branch, replace `<new-branch>` with the name of the new branch and `<local-branch>` with the name of the existing local branch.
```
git checkout -b <new-branch> <local-branch>
```
- Delete Git-untracked files.
```
git clean -df
```
- Find a term in Git-tracked files, replace `<term>` with the search term.
```
git grep -n <term>
```
- Using this [[gitconfig|Git configuration]]
    - Status
    ```
    git g
    ```
    - Stage
    ```
    git s <pathspec>…​
    ```
    - Un-stage
    ```
    git u <pathspec>…​
    ```
    - Creates a new commit.
    ```
    git cc
    ```
    - Amends the last commit.
    ```
    git ca
    ```
    - Creates a new commit with an empty message.
    ```
    git ce
    ```
    - Deletes a branch. Replace `<branch>` with the branch name to delete.
    ```
    git bd <branch>
    ```
    - Renames the current branch. Replace `<name>` with the new branch name.
    ```
    git br <name>
    ```
    - Rebases the current branch with the updated upstream remote and branch.
    ```
    git ru
    ```
    - Fetches a branch from the upstream remote and checks it out. Replace `<branch>` with the name of the branch from the remote.
    ```
    git gb <branch>
    ```
    - Pushes the current branch to the upstream push remote.
    ```
    git pu
    ```
    - Spins off a new branch based on the upstream remote and branch. It first checks if there are uncommitted changes. Replace `<branch>` with the name of the new branch.
    ```
    git so <branch>
    ```
    - Creates a stash of the index and working tree. The stash name includes the current date and time stamp, and it takes an optional description `<desc>`. Additionally, it cleans up all the changes.
    ```
    git zz [<desc>]
    ```
    - Applies a stash to the working tree preserving the index. It takes an optional stash index `<index>` to apply, otherwise, defaults to the last created stash.
    ```
    git za [<index>]
    ```
    - Applies a stash to the working tree without preserving the index. When `git za` failed because of conflicts, use this instead. It takes an optional stash index `<index>` to apply, otherwise, defaults to the last created stash.
    ```
    git zw [<index>]
    ```
    - Lists stashes.
    ```
    git zl
    ```
    - Starts an interactive rebase to change the specified last number of commits. Replace `<num>` with the last number of commits to rebase.
    ```
    git ri <num>
    ```
    - Displays one-line logs for the current branch. It takes an optional number of commits to display `<num>`, otherwise, it defaults to the last 3 commits. 
    ```
    git ll [<num>]
    ```
    - Displays one-line logs for the upstream remote and branch.  It takes an optional number of commits to display `<num>`, otherwise, it defaults to the last 3 commits. 
    ```
    git lu [<num>]
    ```
