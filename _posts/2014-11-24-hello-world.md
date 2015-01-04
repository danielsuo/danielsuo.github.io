---
layout: post
title: Hello, world!
categories: [main, bitcoin, Coin.jl, Crypto.jl]
---

I'm starting a new project and will be documenting my progress here. I'm exploring (B\|b)itcoin and will begin with reimplementing some basic parts of the protocol. I'll be using [`Julia`](http://julialang.org/).

NB: even if I do everything correctly, I can't recommend more strongly that you do not use this implementation for anything real.

### Why are you reimplementing?
I don't know Bitcoin well enough to meaningfully contribute. Rebuilding a few major pieces forces me into the technical details, the community, the issues, and the possibilities, without anyone depending on me.

### Why are you using `Julia`?
A few reasons:

- I'm interested in `Julia` as a possible replacement for work I'd do in `R`, `Python`, and `MATLAB`.
- It's young enough that there are easy ways to contribute.
- There doesn't appear to be any `Julia` implementation of the Bitcoin protocol. In other words, I can't get lazy and just copy someone else's source code.

### What will you be building?
I'll be starting with a simple command-line wallet. It will generate private and public keys, sign transactions, and broadcast to the Bitcoin network. For now, checking your balance is considered a luxury feature.

