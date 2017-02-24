---
layout: base
---

# Coflow: A Networking Abstraction for Cluster Applications
([link](https://drive.google.com/open?id=0B_10gtxnPV-_VnloRm11SzhCejg))

A coflow is a collection of flows (data over network between two nodes) between two groups of machines with associated semantics and a collective objective (e.g., shuffle in MapReduce).

Three primary patterns: shuffle, broadcast, aggregation. Two primary objectives: minimize completion times and meeting deadlines.

Coflows can interact via sharing, prioritizing, and ordering.

API:
-   create / update a coflow
-   get / put (senders and receivers create pairs on content id)
-   terminate (coflow is done)
