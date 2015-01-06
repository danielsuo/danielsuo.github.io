---
layout: post
title: On analog computing
categories: [beliefs]
published: false
---

Today, there is:
1. No general analog computing - if I want to modify an analog signal, I typically need specialized hardware. In the digital world, I can change bits however I want very quickly

2. No scalable analog computing - it is easy to have one analog source sending to another analog output. It is very challenging to scale the number of sources and outputs to the scale where computing becomes interesting
a) Transmitting analog signal requires hard wiring between source and output, which becomes untenable very quickly (number of connections possible between n nodes is on the order of n^2)
b) Even if there were some media by which arbitrary sources and outputs can connect, it would be very challenging for an output to sort through all the noise from other sources and without significant source decay

Solving these two problems give rise to a new class of computing hardware that would dramatically change how we solve a number of problems today via:

1. Rapid data transmission / processing: today, we simulate an analog signal with a some number of bits because we cannot reliably measure an analog signal at scale. To demonstrate the power of analog computation, water will find the fastest path down a mountain rapidly, but this would freeze even the most powerful computers

2. Arbitrary formation of new, directly linked connections: right now, we facilitate the connection of two computers over a network via centralized hardware -- a bottleneck -- or, in less common cases, via directly wired connections, which are expensive to implement at scale

3. Energy efficiency: computing resources only work when they receive some signals to process and are otherwise off, instead of being always on

The reason I'm excited by this is because it seems to be a very general use case for analog signaling. A very natural extension of this idea is analog inputs (like our sense of touch, for instance), which today would first be converted to a digital signal before being processed. True analog input to true analog computing would not require such a translation.

Today, we have CPUs that do logic and arithmetic very well and GPUs (graphics processing units) that do parallel logic and arithmetic very well. Analog computers (APUs?) would sit alongside existing hardware today to be used for specific types of problems in much the same way as CPUs and GPUs are used for very specific tasks today.