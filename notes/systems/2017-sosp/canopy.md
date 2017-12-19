---
layout: base
date: 2017-10-19
title: "Canopy: An End-to-End Performance Tracing And Analysis System"
authors: "Jonathan Kaldor, Jonathan Mace, Joe O’Neill, Kian Win Ong, Vinod Venkataraman, Michał Bejda, Edison Gao, Wiktor Kuropatwa, Bill Schaller, Pingjia Shan, Brendan Viscomi, Kaushik Veeraraghavan, Yee Jiun Song"
link: "http://cs.brown.edu/~jcmace/papers/kaldor2017canopy.pdf"
venue: SOSP
year: 2017
type: paper
categories: [systems, performance, bug hunting]
---

# {{ page.title }}
([link]({{ page.link }})) {{ page.authors }}

## Main idea
- **What is the problem?** Analyzing performance in large-scale distributed systems is challenging, especially when that system is used in many ways and at scale.
- **Why is it important?** Understanding and resolving performance issues is critical to increasingly complex services.
- **What is the approach?** Provide an end-to-end performance tracing infrastructure that can trace causally related performance data from client application to backend service.
- **What is the result?** Currently in production at Facebook and processes over 1 billion traces per day

## Notes
- Three main challenges
  1. Performance data is heterogeneous: how to collect, how to consume?
  2. Granularity mismatch between raw data and analysis: how to conduct high-level analyses on immense amounts of raw data?
  3. Tracing infrastructure must serve many users

## Questions
- What happens if a sub-system that's causing the problem hasn't been instrumented into the Canopy system yet?

## Extension ideas
