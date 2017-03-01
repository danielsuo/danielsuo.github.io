---
layout: base
tags: [systems, databases, column-stores]
---

# C-Store: A Column-oriented DBMS
[link](http://db.csail.mit.edu/projects/cstore/vldb.pdf)

**Main idea**: read-optimized relational DBMS (as opposed to write-optimized) that
- Stores data by column rather than by row
- Uses a number of tricks to pack data
- Offers high availability and snapshot islation

## Introduction
- Most major DBMS write records contiguously in storage (i.e., by row)
  - High-perfoormance writes
  - Good for online transaction processing (OLTP) workloads
- Many scenarios require read-optimized DBMS where there is bulk load followed by relatively long period of ad-hoc queries

Several ways to address read-optimized workload
- Use column stores to access relevant attributes
- Use CPU cycles, which have increased much faster than disk bandwidth, to compress data and avoid padding (to preserve byte or word boundaries)
- Query executor operate on compressed representations wherever possible
