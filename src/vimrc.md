---
title: vimrc
published_on: 2023-04-02
updated_on: 2024-05-15
---
I use Vi for text editing non-project files. I rely on Vi for remote sessions. I use JetBrains IDEs for projects.

I use the following minimal configuration for my local machines.

```vimscript
" syntax highlighting
syntax on

" show line numbers
set number

" auto indent
set autoindent
set smartindent

" identation size
set tabstop=2 " Width of tab character
set softtabstop=2 " Fine tunes the amount of white space to be added
set shiftwidth=2 " Determines the amount of whitespace to add in normal mode

" use spaces instead of tabs
set expandtab

" use tabs instead of spaces for make files
autocmd FileType make set noexpandtab shiftwidth=8 softtabstop=0

" file formatting
set fileformat=unix
set fileformats=unix,dos
set encoding=utf-8  " The encoding displayed
set fileencoding=utf-8  " The encoding written to file

" trim trailing whitespaces
autocmd BufWritePre * :%s/\s\+$//e

" tell vim to keep a backup file
set backup

" tell vim where to put its backup and swap files
if has('win32') || has ('win64')
  " backup files
  set backupdir=C:\\Temp
  " swap files
  set dir=C:\\Temp
else
  " backup files
  set backupdir=/private/tmp
  " swap files
  set dir=/private/tmp
endif

" enable mouse click navigation
set mouse=a

```