# Static Scheduling of Synchronous Data Flow Programs for Digital Signal Processing

([link](https://drive.google.com/open?id=0B_10gtxnPV-_VVE4M3AxVU9iRm8))

## Definitions

- **Large grain data flow**: in contrast to atomic data flow, where each node in the data flow graph represents a nonatomic computation (e.g., FFT, filters) as opposed to atomic operations (e.g., adders or multipliers).
- **Granularity**: of a function describes its complexity, and determines the amount of parallelism available to the overall computation. Blocks can happen concurrently, but the model does not consider concurrency within a block.
- Concurrency: dealing with lots of things at once. Parallelism: doings lots of things at once.
- **Asynchronicity**: In digital signal processing (DSP), asynchronicity refers to systems with sample rates that are not related by a rational multiplicative factor. This has nothing to do with concurrency.
- **Block**: a function that is invoked when there is enough input available to perform a computation (blocks lacking inputs can be invoked at any time). The 'node' in a data flow graph. When a block is invoked, it will *consume* a fixed number of new input samples on each input path.
- **Synchronocity**: If we can specify *a priori* the number of input samples consumed on each input and the number of output samples produced on each output each time the block is invoked.
- **Delay**: The sample offset between the input and the output (i.e., how many samples between when one block outputs and another inputs)
- **Admissible sequential schedule**: sequential schedule of nodes (i.e., blocks) such that if the nodes are executed in the sequence, the amount of data in the buffers is nonnegative and bounded. Each node must appear in the schedule at least once.
- **Periodic admissible sequential schedule (PASS)**: specified by a schedule for a single period; repeated indefinitely

## Major steps

- Define computational model
- Find necessary and sufficient conditions for the existence of PASS / PAPS
- Find algorithm for finding PASS, if one exists
- Find algorithm for constructing PAPS, if PASS exists

## Assumptions

- No communication time
- Processors are heterogeneous
- Blocks take identical time to execute each time

## Questions

- Why does periodic admissible parallel schedule (PAPS) necessarily follow from periodic admissible sequential schedule (PASS)?
