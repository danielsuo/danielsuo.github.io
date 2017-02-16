---
title: Making Geo-Replicated Systems Fast as Possible, Consistent when Necessary
date: 2017-02-15
tags: [systems, consistency, distributed systems]
---

# {{ page.title }}

**Key observation**: not all operations require strong consistency, but some operations do.

## Contributions
1.  Introduce 'RedBlue' consistency, which

    > Enables blue operations to be fast (and eventually consistent) while the remaining red operations are strongly consistent (and slow)

2.  Identify the conditions separating red and blue operations

    -   Commutative operations that do not impact invariants can be blue

3.  Introduce a method to expand the number of blue operations

          -   Decompose operations into generator and shadow operations

## Benchmarks
-   [TPC-W](http://www.tpc.org/tpcw/), a transactional web benchmark from a typical internet commerce website.
-   [RUBiS](http://rubis.ow2.org/), an auction site prototype modeled after [eBay.com](eBay.com)
