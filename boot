#!/usr/bin/env bash

# Grab dotfiles directory
git clone --recursive https://www.github.com/danielsuo/dotfiles.git

# Run main setup file
cd dotfiles
./main
