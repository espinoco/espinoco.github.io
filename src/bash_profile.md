---
title: bash_profile
published_on: 2023-04-02
updated_on: 2024-05-15
---

```bash
# Use GNU bash version 5.2.26 or greater.

# Set unlimited history capability.
export HISTSIZE=-1
export HISTFILESIZE=-1

# Append commands to the history file rather than overwrite it.
shopt -s histappend

# Ignore/erase duplicate commands from the history file.
export HISTCONTROL=ignoredups:erasedups

# Store multi-line commands in one history entry.
shopt -s cmdhist

# Enables forward bash history search with Ctrl-s
stty -ixon

# Search history using up/down arrows that start with the same fragment.
# Example: type "to" and hit arrow_up, it completes the command "touch".
bind '"\e[A":history-search-backward'
bind '"\e[B":history-search-forward'

# Save each command right after it has been executed.
PROMPT_COMMAND="history -n; history -w; history -c; history -r; $PROMPT_COMMAND"

# Get the current Git branch if any.
parse_git_branch() {
  git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/(\1)/'
}

# Prompt
#
# If the last executed command succeeded, display green code, otherwise, display
# red code.
# Displays the current directory and Git branch if any.
#
# Example displaying success code "0", while on the directory "logs" and
# the Git branch named "logback":
#     0 logs (logback)
#     λ ▮
PS1="\`if [ \$? = 0 ];
    then echo \[\e[32m\]0\[\e[0m\];
    else echo \[\e[31m\]\$?\[\e[0m\];
    fi\` \e[0;34m\W \$(parse_git_branch)\nλ\e[m "

# Set EDITOR to vi
export EDITOR=vi

# Add to the path the locally installed programs for system administration.
export PATH="/usr/local/sbin:$PATH"

# Make "ls" display more details
alias ls="ls -holA"

# Automatically corrects small typos in directory names and jumps to the best
# guess of existing directories.
shopt -s cdspell

# Only suggest directories with "cd".
complete -d cd

# Define the base directories for the "cd" command, and place all
# projects under ~/workspace
export CDPATH=.:~:~/workspace

# Load machine-specific bash configurations.
#
# Place all projects under ~/workspace and have in there a .bash_profile with
# workspace-specific bash configurations like nvm, sdkman, pyenv, tea, etc.
if [[ -f ~/workspace/.bash_profile ]]; then
  source ~/workspace/.bash_profile
fi

```