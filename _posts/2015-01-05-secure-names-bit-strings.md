---
layout: post
title: Secure Names for Bit-Strings
categories: [bitcoin, reviews]
---

## Main ideas
- Need to refer to documents conveniently, unambiguously; need location and need to verify correct
- Digital documents easy to alter and locations are not persistent
- Signing and one-way hash confirms not changed, but not easy to communicate and may not be persistent either
- Use variation on time-stamping to keep repo of hash values that depend on many bit-string inputs, and to name each bit-string by a concise description
- Better integrity-checking portion

## Possible issues
- What defines document match? Why bit-string of document in current format?
- Needs authority to verify and to link