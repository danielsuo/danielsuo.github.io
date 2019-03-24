---
layout: base
---

# Consistency

Consistency is a confusing term because it's used to mean different things in different contexts. First, some quick definitions:

- **Operation**: typically refers to a single access operation (e.g., read or write) on a single data item in a system
- **Transaction**: one or more operations that may touch multiple pieces of data on multiple machines that must be committed atomically (either all of them happen according to the system or none of them do)

In the database community, consistency most often refers to the so-called "ACID" properties that are desirable for transactions:
- **A**tomicty: either all constituent operations of the transaction complete successfully, or none do
- **C**onsistency: each transaction (in isolation) preserves a set of integrity contraints on the data
  - Note: this is application-specific!
  - For example, a consistenct bank database might require that no transaction contains a series of operations that allows a customer to spend money he or she doesn't have
- **I**solation: transactions are not impacted by the presence of other concurrent transactions
  - Note: confusingly, this is actually a consistency model in the distributed system community!
- **D**urability: the transaction's effects survive failures

In distributed systems (e.g., shared memory, distributed data stores, replicated state machines), consistency often refers to a set of models that define the rules for how operations sent to a system appear to be executed from different observers.

- ACID consistency: related to data integrity not ordering of operations

This is not handled by Coherence as coherence deals with maintaining a global order in which writes only to a single location or a single variable are seen by all processors. Consistency deals with the ordering of operations to multiples locations with respect to all processors.

Consider a key-value storage system, with a record containing a single key and a single value. Let T-Linearizability be a property of a system where the linearized operations are the transactions and Op-Linearizability be a property of a system where the linearized operations are read/write operations of single records (henceforth operations). Define T-Serializability as usual transaction serializability for key-value record systems. Define Op-Serializability as the property that concurrent execution of operations corresponds to some sequential execution of those operations, where operations are concurrent if their transactions are.

A transaction is a deterministic piece of sequential code which, among other things, contains possibly multiple operations.

Are the following correct conclusions?

1. Only serialializability (strict serializability not necessary) suffices for Isolation from ACID
2. Since transactions are sequential, T-Serializability implies Op-Serializability
3. T-Linearizability does not suffice for Op-Linearizability
4. Op-Linearizability does not suffice for T-Linearizability
5. Let ? be one of (T, Op). ?-Linearizability implies ?-Serializability.
6. T-Linearizability equals Strict Serializability (as defined in lecture)
7. T-Serializability and Op-Linearizability equals Strict Serializability

Let's see. It sounds like
Op-linearizability is the usual linearizability
T-linearizability is strict serializability (serializability + linearizability) (not sure if that's what you mean)
T-serializability is serializability
Op-serializability is sequential consistency

Given the somewhat limited kv store and my understanding of definitions:
1. True; in isolation, we don't care about ordering
2. True; since Ts are atomic and sequential
3. What's the example you're thinking of?
4. True; no guarantee that a transaction will be linearizable if only operations are linearizable
5. True; for both; a linear order is a serial order
6. True; Lol, ok so I guess my assumption above was right
7. True

- Strict
- Sequential
- Causal
- Processor
- Pipelined RAM
- Cache
- Slow
- Weak ordering
- Release
- Entry
- General
- Local
- Causal +
- Delta
- Fork
- Serializability
- Vector-field
- Weak
- Strong

- Eventual consistency
- Strong eventual consistency

# References
- [ACID vs. CAP: different words for the same thing and the same words for different things](http://blog.thislongrun.com/2015/03/the-confusing-cap-and-acid-wording.html)
- [Memory consistency vs. cache coherence](https://www.quora.com/What-is-the-difference-between-cache-consistency-and-cache-coherence)
