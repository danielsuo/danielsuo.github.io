# The Tail at Scale
([link](https://drive.google.com/open?id=0B_10gtxnPV-_NW5MNUlQWExWNlU))

## The idea

- Need to have very high response rate
- But in large systems, tail behavior can cause entire system to have problems
- Not feasible to get rid of variation in latency
- Must make predictable whole out of unpredictable parts

## Reducing component variability

- Have multiple service classes
- Use higher-level queuing and short lower-level queues so you can implement smarter policies
- Reduce head-of-line blocking by breaking up longer-running requests
- Manage background activities (e.g., log compaction, garbage collection) by throttling, breaking down operations into smaller parts, triggering operations at low load times
- For large fanout services, synchronize background activity so service is usually running at low latency instead of always running at medium latency

## Living with latency variability

### Short-term adaptations
- Hedge requests by sending multiple copies of identical requests. Can optimize in various ways (e.g., send second request after some percentile delay). This works when the difference between, say, 95th and 100th percentile delay is longer than 0th and 95th percentile; we can still save time by sending out a second request after the 95th percentile delay has happened
- Tied requests via power of two rule (modify by actually queueing multiple requests and cancel the others) because queueing time is one major source of variability (and not execution time itself). Use small delay between sending tied requests so they don't cancel each other

### Long-term adaptations
- Use micro-partitions to partition data much more finely than there are machines, so it's easy to repartition in load balancing
- Selectively replicate hot micro-partitions
- Put slow machines on probation (typically just a temporary issue), but continue to send shadow requests to collect statistics

## Large information-retrieval systems
- Good enough: don't wait for slowest servers because in high fan-out, unlikely that the slowest server has the best result; or skip subservices that aren't mandatory (e.g., spelling correction)
- Canary requests: don't send query to all servers at once in high fanout case. Send one or two first (low variability on latency) and then to the rest when we hear back
