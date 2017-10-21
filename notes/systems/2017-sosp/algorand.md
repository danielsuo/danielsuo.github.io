---
layout: base
---

# Algorand: Scaling Byzantine Agreements for Cryptocurrencies
([link](https://people.csail.mit.edu/nickolai/papers/gilad-algorand-eprint.pdf)) Yossi Gilad, Rotem Hemo, Silvio Micali, Georgios Vlachos, Nickolai Zeldovich

## Main idea
- **What is the problem?** Existing cryptocurrencies require on the order of an hour to confirm transactions with high confidence
- **Why is it important?** Cryptocurrencies enable many new applications, but transaction latency and throughput are among two of the major limitations of existing cryptocurrencies
- **What is the approach?**
   - Never allow forks; users always have consistent view of transactions even if some users are malicious or the network is temporarily partitioned
   - Scale consensus by sampling some number of users to participate
- **What is the result?** Simulate 500K users on 1K virtual machines with transaction latency under one minute and 125 times Bitcoin's throughput with minimal penalty for scaling to more users

## Notes
- Existing cryptocurrencies trade-off latency with confidence
- Reaching consensus is hard because you don't trust most nodes; need way more nodes to reach consensus than if you had honest nodes
- Three core challenges
   1. Sybil attacks: adversary creates many pseudonyms to influence Byzantine agreement protocol
   2. Scale: many more users than existing Byzantine agreement protocols handle
   3. Resilient: to DoS attacks or if honest users are disconnected
- Techniques
   - Weight users by the money in their account. Require that 2/3 of money is owned by honest users
   - Reach consensus by committee.
   - Select committee members in a private, non-interactive way. Anyone can independently determine if they're on a committee or if someone who claims to be on the committee is indeed on said committee. Adversaries do not know in advance who will be on the committee.
   - Replace committee members. Only require committee members to send a single message (thus revealing their place on committee) before being replaced. Made possible by only depending on user's private key and no other private state that needs to be transferred.
- Related work
   - Proof of work: Bitcoin's mechanism for reaching consensus. Make it expensive to double spend.
   - Byzantine consensus: protocols for reaching consensus in the face of faulty (or malicious) servers. Authors claim their algorithm lifts the restriction of fixed number of servers (prevents Sybil attacks since random people can't join) and using verifiable random functions to select random committees for scaling up.
   - Proof of stake: rather than rely on computational expense of proof of work, prove stake in cryptocurrency instead

TODO: add protocol description

## Questions
- What are the limits of how long network partitions can last for? Does the system still make progress during extended partition?

## Extension ideas
