---
title: Bash quick reference
published_on: 2023-04-09
updated_on: 2023-05-29
---

- [[bash_profile]] - bash configuration settings.
- `C-r` - Search bash history backward.
- `C-s` - Search bash history forward.
	- Requires `stty -ixon`.
- `C-x C-e` - Invoke the `EDITOR` and execute the result as commands. If using vi mode, hit `v` instead while in command mode. Set vi mode in the [[inputrc|.inputrc file]].
    - `export EDITOR=vi` - in case you get an `emacs: command not found` while on an SSH session.
- `pwd` - print the current directory's full path.
- `<command> | pbcopy` - copy the output of the `<command>` to the clipboard (macOS only).
- `pbpaste > <file-path>` - output clipboard contents to the `<file-path>` (macOS only).