---
title: Bash Cheat Sheet
---
- `C-r` - Search bash history backwards
- `C-s` - Search bash history forward
	- Requires `stty -ixon`
- `set -o vi` - Allows bash command prompt to work like vi, useful while on an SSH session where you can't have that permanent setting in the [[inputrc|.inputrc file]].
    - `bind '"\C-i":complete'` - in case the tab autocompletion stops working after setting the vi editing mode.
- `bash -l` - to reload `~/.bash_profile`
- [[bash_profile]] - bash configuration settings.