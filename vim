#!/usr/bin/env bash

# bash <(curl -s http://danielsuo.com/vim)

# Assume we have vim, git, and curl installed

curl http://danielsuo.com/vimrc.txt -o ~/.vimrc
git clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim
vim +PluginInstall +qall
