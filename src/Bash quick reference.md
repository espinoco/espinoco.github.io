---
title: Bash quick reference
---

- [[bash_profile]] - bash configuration settings.
- `C-r` - Search bash history backwards.
- `C-s` - Search bash history forward.
	- Requires `stty -ixon`.
- `C-x C-e` - Invoke an editor and execute the result as commands. If using vi mode, hit `v` instead while in command mode. Set vi mode in the [[inputrc|.inputrc file]].
    - `export EDITOR=vi` - in case you get an emacs error while on an SSH session.
- `pwd` - print the current directory's full path.
- `<command> | pbcopy` - copy the output of the `<command>` to the clipboard (macOS only).