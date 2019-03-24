---
layout: base
tags: [systems, operating systems]
---

# The PARSEC Benchmark Suite: Characterization and Architectural Implications
[link](http://parsec.cs.princeton.edu/doc/parsec-report.pdf)

## 1. Contributions
- Shortcomings of existing benchmarks
  - E.g., HPC, smaller, not parallelized
- Benchmark suite to focus on emerging applications
  - Recognition, mining, and synthesis
  - Large-scale multi-threaded commercial applications
- What future chip multi-processors (CMPs) need to have

## 2. Requirements for CMP benchmark suites
1. Multi-threaded applications with shared memory
2. Emerging workloads (see section 3)
3. Diverse
4. State-of-art programming techniques
5. Support research (e.g., provide infrastructure for instrumentation)

**Pipeline parallelism**: In work-sharing, split each loop so that multiple iterations are run in parallel. Pipeline parallelism splits each loop iteration into stages and threads and operate on different stages from different iterations concurrently. Each stage is assigned one or more worker threads and an in-queue, which stores the work to be processed by that stage. It exposes parallelism in ordered loops where iterations are non-independent and cannot run concurrently. By splitting each loop iteration into segments, we can expose intra-iteration parallelism. ([Source](http://www.futurechips.org/parallel-programming-2/parallel-programming-clarifying-pipeline-parallelism.html))

## 3. The PARSEC benchmark suite
