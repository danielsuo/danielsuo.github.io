# A Categorization of Real-time Multiprocessor Scheduling Problems and Algorithms

([link](https://drive.google.com/open?id=0B_10gtxnPV-_OXR5M0Z3bDBuQkE))

Most known real-time scheduling algorithms are work-conserving:
- At each instant, associate priority with each active job
  - Job has arrive prior to instant
  - Deadline occurs after instant
  - Hasn't finished
- Highest priority jobs eligible to execute are selected for execution on available processors

## Periodic task model
- Tasks are characterized by two parameters
  - worst-case execution requirement *e*
  - period *p*
  - implied constraint (i.e., deadline is equal to *p*)
- A collection of periodic tasks is referred to as a periodic task system

- **Schedulable**: task system is schedulable by an algorithm if that algorithm ensures that the timing constraints of all tasks in the system are met
- **Feasible**: task system is feasible under a class of scheduling algorithms if the system is schedule by some algorithm in the class
- **Optimal**: an algorithm is optimal with respect to some class if the algorithm is in the class and correctly schedules every task system feasible under the class

- **Work-conserving**: processor never left idle while active job exists unless migration constraints prevent task from executing on the idle processor

## Scheduling approaches
- **Partitioning**: each periodic tasks is assigned to a single processor, on which each of its jobs will execute, reducing multiprocessor scheduling to a set of uniprocessor ones. However
  - Optimal assignment of tasks to processors is bin-packing problem (NP-hard)
  - Task systems exist that are schedulable if and only if tasks are not partitioned. Still, partitioning approaches are widely used.
- **Global**: all eligible tasks are stored in a single priority-ordered queue; the global scheduler selects for execution the highest priority tasks from this queue. Unfortunately, optimal uniprocessor algorithms (RM, EDF) may result in arbitrarily low processor utilization in MP systems
- **Hybrid**: each job assigned to single processor, but task allowed to migrate at job boundaries

## Classifying algorithms
1. Complexity of priority scheme
  - Static (rate monotonic)
  - Dynamic, but fixed within a job (earliest deadline first)
  - Fully dynamic (least-laxity-first)
2. Degree of migration allowed
  - No migration (task partitioning)
  - Migration allowed, but only at job boundaries (dynamic partitioning at the job level)
  - Unrestricted migration (jobs can migrate)
