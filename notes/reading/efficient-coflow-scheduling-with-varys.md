# Efficient Coflow Scheduling with Varys
([link](https://drive.google.com/open?id=0B_10gtxnPV-_bEVRd3BBaE9qcUE))

The time it takes for a coflow to complete is constrained by some bottleneck flow. Use two primary strategies to allocate network resources:

1. At the inter coflow level, schedule coflow based on bottleneck's completion time
2. Within a coflow, allocate network so that all flows in a coflow match the completion time of the flow that will take the longest to finish
