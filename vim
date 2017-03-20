#!/usr/bin/env bash

# bash <(curl -s http://danielsuo.com/vim)

# Assume we have vim, git, and curl installed

curl http://danielsuo.com/vimrc.txt -o ~/.vimrc
curl -fLo ~/.vim/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
vim +PlugInstall +qall
