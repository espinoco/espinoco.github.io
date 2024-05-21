---
title: Bash quick reference
published_on: 2023-04-09
updated_on: 2024-05-15
---
- Check out my [[bash_profile|bash configuration]].
- Search bash history backward.
    ```
    Ctrl-r
    ```
- Search bash history forward. Requires `stty -ixon` in the [[bash_profile|bash configuration]].
    ```
    Ctrl-s
    ```
- Invoke the `EDITOR` and execute the result as commands. If using vi mode, hit `v` instead while in command mode. vi mode is set in the [[inputrc|.inputrc file]].
    ```
    Ctrl-x Ctrl-e
    ```
    - In case you get an `emacs: command not found` while on an SSH session.
        ```
        export EDITOR=vi
        ```
- Print the current directory's full path.
    ```
    pwd
    ```
