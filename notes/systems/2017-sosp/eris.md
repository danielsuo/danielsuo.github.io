---
layout: base
date: 2017-10-23
title: "Eris: Coordination-Free Consistent Transactions Using In-Network Concurrency Control"
authors: "Jialin Li, Ellis Michael, Dan R. K. Ports (University of Washington)"
link: "http://delivery.acm.org/10.1145/3140000/3132751/p104-li.pdf?ip=71.168.224.8&id=3132751&acc=OPEN&key=4D4702B0C3E38B35%2E4D4702B0C3E38B35%2E4D4702B0C3E38B35%2E6D218144511F3437&CFID=817327380&CFTOKEN=37195893&__acm__=1508816887_88b6a9d74daeee4bb5d7e05f1ecfbe89"
venue: SOSP
year: 2017
type: paper
categories: [systems, in-network computing, network co-design]
---

# {{ page.title }}
([link]({{ page.link }})) {{ page.authors }}

## Main idea
- **What is the problem?** Strong consistency and isolation are hard in a highly distributed setting and typically quite expensive
- **Why is it important?** These guarantees make higher components of a distributed stack much easier to reason about
- **What is the approach?** Move core piece of concurrency control into datacenter network (i.e., co-design network with software)
- **What is the result?** Process large class of distributed systems in a single round trip between client to strage without explicit coordination among shards or replicas while providing atomicity, consistency, and fault tolerance with ~10% overhead with up to an order of magnitude higher throughput and ~80% lower latency.

## Notes
- I'll be honest...didn't get the kids to bed until midnight and couldn't make it past the introduction. In my defense, I've seen Dan Ports give a talk on this paper already. See y'all tomorrow.

## Questions

## Extension ideas
