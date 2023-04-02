---
title: Bash Cheat Sheet
publish_as_page_in_home_listings: true
---

- `C-r` - Search bash history backwards
- `C-s` - Search bash history forward
	- Requires `stty -ixon`
- `bash -l` - to reload `~/.bash_profile`
    - On macOS, the Terminal runs a login shell by default every time a shell is started, which can be slow. To disable this behavior go to Terminal > Settings > General > Shells open with > Command (complete path) > /bin/bash