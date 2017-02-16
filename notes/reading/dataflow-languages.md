# Data flow languages
([link](https://drive.google.com/open?id=0B_10gtxnPV-_YXpxbHBhVER0SDA))

Data flow programming languages must satisfy two criteria

1. Must be able to deduce data dependency of program operations
2. Sequencing constraints must always be exactly the same as data dependencies, so that the instruction firing rule can be based simply on the availability of data

Two general properties of language which make it possible to meet these criteria:

1. Locality of effect

  Determining how code fragments affect each other made much harder by reusing variable names and GOTO statements. Can make easier by having definite scope or received as arguments.

2. Freedom from side effects

  Necessary to make sure data dependencies are the same as sequencing of constraints. Much harder than locality. Most common form is modifying variables in the calling program. Avoid global variables and control variable scope. Pointers to complex data structures make this hard, but can use call by value or const.

Efficiency is still an open question. If everything is pass by value and no side-effects.
