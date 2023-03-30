---
title: inputrc
publish_as_page_in_home_listings: true
---
```bash
$if Bash
    # Allow bash command prompt to work like vi. Similar to Ctrl-X Ctrl-E while on the default emacs mode, you can hit `v` while in the vi command mode
    set editing-mode vi
$endif

$if mode=vi
    # Allow to display the vi current mode in the prompt
    set show-mode-in-prompt on
    # Set the cursor as vertical bar while on insert mode
    set vi-ins-mode-string \1\e[6 q\2
    # Set the cursor as block while on command mode
    set vi-cmd-mode-string \1\e[2 q\2
    # Switch to block cursor before executing a command. Otherwise, cursor will stay as vertical bar (insert mode) after opening a file with vi
    set keymap vi-insert
    RETURN: "\e\n"
$endif

```