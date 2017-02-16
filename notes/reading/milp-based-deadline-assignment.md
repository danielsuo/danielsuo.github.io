# MILP-based Deadline Assignment for End-to-End Flows in Distributed Real-Time Systems
([link](https://drive.google.com/open?id=0B_10gtxnPV-_LUItc3RTd19sREE))

## Idea
- Most real-time systems schedule subtasks by first calculating deadlines for subtasks and then scheduling subtasks using some real-time algorithm (e.g., EDF)
- Reduce how pessimistic (being too conservative (i.e., something can’t be scheduled when in fact it can)) algorithm is for admission control (schedulability analysis) by jointly considering deadline and priority assignment.
- Introduce 'distributed generalized multiframe task model with parameter adaption' (see below)

## Models
- **Multiframe task model (MF)** ([link](https://drive.google.com/open?id=0B_10gtxnPV-_NENFb0F6WjktQXc)): a task that generates an infinite succession of frames where the ready times of consecutive frames is at least some *P* time units apart and the execution time of the ith frame is chosen cyclically from some vector of execution times *E* of length *N* (i.e., choose execution time i mod N). The deadline of each frame is equal to *P* time units after the ready time (implied deadline)
- **Generalized multiframe task model (GMF)** ([link](https://drive.google.com/open?id=0B_10gtxnPV-_dFM5Q01ySzNEc2M)): same as above, but
  1. Assume that  deadlines of frames can differ from the minimum separation
  2. The minimum separation between frames need not be the same
- **Generalized multiframe task model with parameter adaptation (GMF-PA)** ([link](https://drive.google.com/open?id=0B_10gtxnPV-_V0d4WlZiaVdSY2c)): Consider a set of *n* GMF tasks on a uniprocessor system. Each task has its own period with execution times for each frame as well as upper / lower bounds for deadline and inter-arrival period. The frames execute in a cycle indefinitely.
- **Distributed generalized multiframe task model with parameter adaption (dGMF-PA)** ([this paper](https://drive.google.com/open?id=0B_10gtxnPV-_LUItc3RTd19sREE)): each task is now split into some number of virtual tasks that run on different processors. dGMF-PA reduces to GMF-PA if there is only one processor.
