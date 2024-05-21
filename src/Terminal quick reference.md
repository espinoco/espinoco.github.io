---
title: Terminal quick reference
published_on: 2023-04-09
updated_on: 2024-05-17
---
-  Wipes all the previous terminal's output so it can't be reached even when scrolling up.
    ```
    command + k
    ```
- The cursor jumps to the Terminal's clicked location.
    ```
    option + left_click
    ```
- To use bash in macOS instead of zsh.
    - Install the latest version of bash with [[Homebrew quick reference|Homebrew]].
    - Get the bash path.
        ```
        which bash
        ```
    - Go to Terminal > Settings > General > Shells open with > Command (complete path) > input the bash path.
    - [[Bash quick reference]]
- Copy the `<COMMAND>`'s output to the clipboard (macOS only).
    ```
    <COMMAND> | pbcopy
    ```
- Output clipboard contents to the `<FILE-PATH>` (macOS only).
    ```
    pbpaste > <FILE-PATH>
    ```

