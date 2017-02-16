# Resilient Distributed Datasets (Spark)
*A fault-tolerant abstraction for in-memory cluster computing* ([link](https://drive.google.com/file/d/0B_10gtxnPV-_VW14M281OWN3UVU/view?usp=sharing))

## Overview

Enables
- Interactive data manipulation
- Iterative computations

By
- Leveraging distributed shared memory for performance
- Using coarse-grained transformations for fault-tolerance
  - Lineage allows in-memory storage while still achieving fault-tolerance
- Offering a wider set of computations (i.e., not just map and reduce)

## What are limitations
- Memory-intensive
- Communication among nodes challenging outside well-defined abstractions
- Applications that need to asynchronously update fine-grained state
