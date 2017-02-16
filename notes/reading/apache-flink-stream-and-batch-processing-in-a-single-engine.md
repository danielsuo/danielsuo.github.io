# Apache Flink
*Stream and Batch Processing in a Single Engine*
([link](https://drive.google.com/open?id=0B_10gtxnPV-_MHhYdEJfaUN1T2s))

Built on top of streaming runtime engine that assumes unbounded data that may come out of order. Must reason about events that arrive in the future, but took place within some current / past window.

## Fault tolerance
Use distributed consistent snapshots for checkpoints and guarantees exactly-once-processing.
