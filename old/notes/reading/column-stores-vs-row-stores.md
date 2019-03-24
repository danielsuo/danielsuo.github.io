---
layout: base
tags: [systems, databases, column-stores]
---

# Column-Stores vs. Row-Stores: How Different Are They Really?
[link](http://db.csail.mit.edu/projects/cstore/abadi-sigmod08.pdf)

**Elevator pitch**:
  > Column-stores are more I/O efficient for read-only queries since they only have to read from disk (or from memory) those attributes accessed by a query

If this is the case, why can't we achieve column-store performance with row-stores by vertically partitioning the schema or by indexing every column?

Answer: must make fundamental changes to both storage layer and query executor.
