---
title: bash_profile
---
```bash
# History size
export HISTSIZE=1000000
export HISTFILESIZE=1000000

# Append commands to the history file rather than overwrite it
shopt -s histappend

# Control how commands are saved in the history file
export HISTCONTROL=ignoredups:erasedups

# Store multi-line commands in one history entry
shopt -s cmdhist

# Enables forward bash history search with C-s
stty -ixon

# Navigate through previous commands, which start with the same fragment using up/down arrows
bind '"\e[A":history-search-backward'
bind '"\e[B":history-search-forward'

# Save each command right after it has been executed
PROMPT_COMMAND="history -n; history -w; history -c; history -r; $PROMPT_COMMAND"

# Get git branch for prompt
parse_git_branch() {
  git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/(\1)/'
}

# Prompt
PS1="\`if [ \$? = 0 ];
    then echo \[\e[32m\]0\[\e[0m\];
    else echo \[\e[31m\]\$?\[\e[0m\];
    fi\` \e[0;34m\W \$(parse_git_branch)\nλ\e[m "

# Set the default editor
export EDITOR=vi

# Locally installed programs for system administration.
export PATH="/usr/local/sbin:$PATH"

alias ls="ls -holA"

# Automatically corrects small typos in directory names and jumps to the best guess of existing
# directories
shopt -s cdspell

# cd to only suggest directories
complete -d cd

# Use CDPATH to define the base directories for cd command, place all projects under ~/workspace
export CDPATH=.:~:~/workspace

# Place all projects under ~/workspace and have in there a .bash_profile with workspace specific
# bash configurations like nvm, sdkman, pyenv, tea, etc.
if [[ -f ~/workspace/.bash_profile ]]; then
  source ~/workspace/.bash_profile
fi
```