#!/usr/bin/env bash

if [[ "$OSTYPE" == "linux-gnu" ]]; then
    os=`cat /etc/*release | grep ^NAME`
    if echo $os | grep Ubuntu; then
        sudo apt-get install -y git
    elif echo $os | grep CentOS; then
        sudo yum install -y git
    elif echo $os | grep "Red Hat"; then
        sudo yum install -y git
    fi
elif [[ "$OSTYPE" == "darwin"* ]]; then
    # Set up xcode-select
    xcode-select --install
fi

# Grab dotfiles directory
git clone --recursive https://github.com/danielsuo/dotfiles

# Run main setup file
cd dotfiles
./bin/install
