# Cyclo-static Data Flow

([theory link](https://drive.google.com/open?id=0B_10gtxnPV-_WmNNb2NMbndOY2s))
([implementation link](https://drive.google.com/open?id=0B_10gtxnPV-_SnpHZ01ibmhOT1U))

Given a cyclo-static data flow graph, give necessary and sufficient conditions for existence of static schedule, and give construction.

## Definitions

- **Cyclo-static data flow**: model to describe applications with cyclically changing behavior.
- **Dynamic scheduling**: run-time supervisor determines when blocks are ready / schedules on idle processors.
- **Static scheduling**: determine task execution order / placement at compile-time. Only overhead is synchronization and external data.
- **Synchronous data flow**: every task behaves identically each time it fires, producing the same fixed number of tokens
- **Single-rate application**: all edges in data flow contains at most one token at a time (vs. multi-rate application). A node is 'firable' if there is at least one token on all its incoming edges.
- **Token**: an atomic data object

## Example

In audio, left and right channel arrive alternately. Behavior is known at compile-time, but not identical at each time step. Synchronous data flow model not powerful enough to model, so introduce cyclo-static data flow.

## Single-rate dataflow (SRDF)

The consumer / producer of each edge produce one token. Construct static schedule with minimum period (i.e., shortest completion time) with one instance for each task and length-one buffer.

## Multi-rate dataflow (MRDF):

Constant number of tokens produced and consumed at each edge. Doesn't allow for data-dependent or state-dependent conditionals (i.e., the amount of data consumed or produced depends on data or state).

## Asynchronous dataflow (ADF):

The firing rule can be any Boolean expression and number of tokens produced or consumed are unknown at compile-time. Very expressive, but buffers might become unbounded.

## Cyclo-static dataflow (CSDF):

Number of tokens produced / consumed by a single task is still known at compile-time, but changes periodically.
