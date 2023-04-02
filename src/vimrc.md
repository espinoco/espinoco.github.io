---
title: vimrc
---
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

" Change cursor shape in different modes
let &t_SI.="\e[5 q" "SI = INSERT mode
let &t_SR.="\e[4 q" "SR = REPLACE mode
let &t_EI.="\e[1 q" "EI = NORMAL mode (ELSE)

" Instant cursor shape change in different modes
set ttimeout
set ttimeoutlen=1
set listchars=tab:>-,trail:~,extends:>,precedes:<,space:.
set ttyfast
```