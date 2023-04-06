---
title: Bash Cheat Sheet
---
- `C-r` - Search bash history backwards
- `C-s` - Search bash history forward
	- Requires `stty -ixon`
- `set -o vi` - Allows bash command prompt to work like vi, useful while on an SSH session where you don't have this permanent setting in the [[inputrc]].
- `bash -l` - to reload `~/.bash_profile`