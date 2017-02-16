# Managing Data Transfers in Computer Clusters with Orchestra

([link](https://drive.google.com/open?id=0B_10gtxnPV-_bTVrTEJsb1FlMDg))

## Overview
- Data transfer accounts for more than 50% of job completion

## Transfers
- Set of all flows transporting data between two stages of a job
- Examine *shuffle*- and *broadcast*-style transfers
  - **Shuffle**: Weighted shuffle scheduling (WSS)
  - **Broadcast**: Cornet (BitTorrent-like protocol) + adaptive clustering algorithm to take advantage of hierarchical network topology in many data centers
- Orchestra manages both intra- (via Transfer Controller (TC)) and inter-transfer (via Inter-Transfer Controller (ITC)) activities

## Architecture
- ITC sits at top and implements cross-transfer scheduling policies (e.g., prioritizing transfers from ad-hoc queries over batch jobs)
- Manages multiple TCs (one for each transfer in the cluster)
- Each TC chooses some appropriate transfer mechanism based on data size, number of nodes in the transfer, their locations, and other factors
