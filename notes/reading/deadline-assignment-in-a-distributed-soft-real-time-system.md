# Deadline Assignment in a Distributed Soft Real Time System
([link](https://drive.google.com/open?id=0B_10gtxnPV-_eHBjSUxPa2VPa2s))

## Problem
- Assign local deadline to subtasks such that global deadline is met

## Assumptions
- Soft real-time system (i.e., minimize number of deadlines that are missed)
  - May not know how many computations ahead of times
  - Computations may be complex and hard to predict task times
- Each subtask is submitted to some component, which may have local tasks that compete for resources with subtasks assigned there
- Subtask deadlines are assigned online (i.e., not known ahead of time); may depend on earlier subtasks, for example
- Scheduler at each component (or node) is independent of others. That is, each scheduler only decides based on the subtasks and deadlines that it has
- Components are unique; subtasks must be executed at a particular component and cannot be moved
- Network communication can be considered another task

## System models
- Distributed real-time system has several nodes representing components, which manage one or more resources. Each node has its own real-time scheduler (e.g., earliest deadline first)
- Local (visit only one node; only sees scheduler once) and global tasks, which has stages. Associated with execution node.
- Process manager monitors global task and submits subtasks to appropriate execution nodes; manager is notified when subtasks are finished
- Each task X (local, global, or subtask) has the following attributes:
  - arrival time
  - slack time
  - deadline time
  - execution time
  - predicted execution time
  - Note that dl(X) = ar(X) + ex(X) + sl(X)
- Global tasks arrive with their arrival time and deadline known
- Sometimes, prediction may be available

- Flexibility fl(X) = sl(X) / ex(X). In otherwords, how much slack to how much execution time (hope ex(X) < dl(X) - ar(X))
- stage(X) = i if X is the ith task of its global task

## Algorithms
- **Ultimate deadline (UD)**: set subtask deadline equal to deadline of global task. Execution time of future subtasks are treated as slack for current subtask.
- **Effective deadline (ED)**: deadline of global task minus total expected execution time of subtasks following the subtask. Slack of future subtasks treated as slack of current subtask.
- **Equal slack (EQS)**: divide remaining slack equally among remaining subtasks
- **Equal flexibility (EQF)**: divide remaining slack among subtasks in proportion to their predicted execution time

## Simulation
- All global tasks have fixed number of subtasks, *m*.
- *k* homogenous nodes in the system
- All nodes use earliest-deadline-first scheduling and there is no preemption
- Understand ratio of missed deadline under different loads and algorithms
