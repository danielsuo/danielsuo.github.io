# Kahn Process Networks
([Original paper](https://drive.google.com/open?id=0B_10gtxnPV-_UlV2TlV3eGVPZ2c))
([Wiki](https://en.wikipedia.org/wiki/Kahn_process_networks))
([Some dude's thesis](http://users.ece.utexas.edu/~bevans/students/phd/greg_allen/phd.pdf))

- Group of deterministic (as opposed to [actor model](http://stackoverflow.com/questions/9683043/difference-between-kahn-process-network-and-actor-model)) sequential processes communicating via unbounded FIFO channels [as opposed to dataflow synchronous languages where number of tokens on input and output channels are known for each process]
- Does not depend on various computation or communication delays
