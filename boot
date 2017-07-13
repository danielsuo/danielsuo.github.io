#!/usr/bin/env bash

if [[ "$OSTYPE" == "linux-gnu" ]]; then
  sudo apt-get install -y git
elif [[ "$OSTYPE" == "darwin"* ]]; then
  # Set up xcode-select
  xcode-select --install
fi

# Grab dotfiles directory
git clone --recursive https://www.github.com/danielsuo/dotfiles.git

# Run main setup file
cd dotfiles
./bin/install
