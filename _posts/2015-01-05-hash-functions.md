---
layout: post
title: Introduction to Cryptographic Hash Functions
categories: [bitcoin, five]
---

## Main ideas
- Need function to convert arbitrary string of bits into a hash of some fixed length
- Why?
  - To 
- Easy to verify that string becomes hash given string and hash function
- Want following properties

- Needs to be a function
- Deterministic
- Uniform
- Unique
- Fixed size and short
- Not invertible

- Computes easily
- Resists pre-image
- Resists second pre-image
- Resists collisions

Person A: generates message and hash
Person B: holds hash so others can validate
Person C: attacker

it is easy to compute the hash value for any given message
it is infeasible to generate a message that has a given hash
it is infeasible to modify a message without changing the hash
it is infeasible to find two different messages with the same hash