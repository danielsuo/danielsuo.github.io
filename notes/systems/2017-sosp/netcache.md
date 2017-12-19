---
layout: base
date: 2017-10-19
title: "NetCache: Balancing Key-Value Stores with Fast In-Network Caching"
authors: "Xin Jin (Johns Hopkins University); Xiaozhou Li (Barefoot Networks); Haoyu Zhang (Princeton University); Robert Soulé (Barefoot Networks and Università della Svizzera italiana); Jeongkeun Lee (Barefoot Networks); Nate Foster (Barefoot Networks and Cornell University); Changhoon Kim (Barefoot Networks); Ion Stoica (UC Berkeley)"
link: "https://www.cs.jhu.edu/~xinjin/files/SOSP17_NetCache.pdf"
venue: SOSP
year: 2017
type: paper
categories: [systems, bug hunting]
---

# {{ page.title }}
([link]({{ page.link }})) {{ page.authors }}

## Main idea
- **What is the problem?** Caching is hard, especially with balancing load in the face of hot keys
- **Why is it important?** Faster is always better. Also one of the first systems to bring sophisicated application-level functionality into switches at line rate
- **What is the approach?** Use programmable switches to efficiently detect, index, cache, and serve hot key-value items in the switches' data planes
- **What is the result?** Improve throughput by 3-10x and reduces latency of up to 40% of queries by 50%

## Notes
- Major challenge for scaling key-value stores: hot items (10% of items account for 60-90% of queries in Memcached deployment at Facebook)
- Key insight is to use switches as load-balancing cache, not necessarily primary cache
- Caching $$O(N\log N)$$ items is sufficient to balance the load for $$N$$ storage servers (or CPU cores)
- Only need to program top-of-rack (ToR) switch and leave the rest unmodified
- Cache coherence is maintained because control plane only responsible for inserting and evicting; write-through

## Questions
- How can you keep track of which keys are hot with such limited memory? Count-Min sketch to report hot uncached keys and Bloom filter to remove duplicate reports
- How to handle larger items? Divide up into smaller chunks and retrieve with multiple packets
- What are the different caching policies?
- What workloads are bad for NetCache?

## Extension ideas
- Use a hierarchy of switches to maintain a hierarchy of caches. Complexity ftw.
- Network-accelerated distributed machine learning; are there a small percentage of parameters we can store in network switches to move at line rate?
