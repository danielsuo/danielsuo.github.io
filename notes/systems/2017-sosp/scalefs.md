---
layout: base
---

# Scaling a file system to many cores using an operation log
([link](https://people.csail.mit.edu/nickolai/papers/bhat-scalefs.pdf)) Srivatsa S. Bhat (MIT CSAIL and VMware); Rasha Eqbal (MIT CSAIL and Apple); Austin T. Clements (MIT CSAIL and Google); M. Frans Kaashoek, Nickolai Zeldovich (MIT CSAIL)

## Main idea
- **What is the problem?** Many-core machines are becoming more prevalent. Many other parts of software stack are being parallelized to take advantage of new hardware. However, file systems still suffer from weaker cores (i.e., don't have a fast core to do I/O) and poor multicore scalability.
- **Why is it important?** File systems need an upgrade for new manycore realities.
- **What is the approach?** Decouple in-memory file system from on-disk file system using per-core operation logs, allowing highly concurrent data structures for in-memory representation, while allowing commutative operations to write to disk in parallel without cache conflicts.
- **What is the result?** Provides performance comparable to that of Linux ext4 with no cache conflicts for 99% of test cases of commutative operations.

## Notes
- Provides crash safety and good disk throughput (requirements for any file system) in addition to manycore scalability
- Combines an in-memory file system (sv6) with an on-disk file system (xv6) by extending sv6 with an operation log to track linearization points

## Questions
- Comparable performance with Linux ext4 on manycores? Or on a fast, low-core machine? Comparable to Linux ext4 on a low number of cores, but with much better speed-up as cores increase
- How do we know cache conflict tests have good coverage? Generate all possible pairs of commutative operations to check
- What happens to operations that *don't* commute? Perhaps this is up to the application developer to handle? Undefined behavior if across multiple applications?
- How does ScaleFS handle reading a single large file? Does it parallelize the read?

## Extension ideas

## Other
- Liked that the evaluation section is prefaced with a list of questions to answer
