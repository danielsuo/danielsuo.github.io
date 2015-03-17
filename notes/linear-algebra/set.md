---
layout: base
title: Set
---

## Set
A _set_ is a collection of distinct objects. Each object in the set is called an _element_ or a _member_ of the set. A set can have a finite or infinite number of elements. As we will soon see, sets are a fundamental concept in linear algebra.

**Example**. A set $S$ written as $$\{5,1,2,10\}$$ contains as elements the numbers $5$, $1$, $2$, and $10$.

**Example**. A set $S$ written as $$\{\{5,1\},\{2,10\}\}$$ contains as elements $$\{5,1\}$$ and $$\{2,10\}$$, themselves sets. Here we see that sets are objects in their own right and can contain or belong in other sets.

**Example**. A set $S$ with zero members is called the _empty set_ and is denoted by $\emptyset$. Note that the empty set is still a set and equivalent to neither nothing nor the number $0$.

**Belonging**. Given an element $x$ and a set $S$, we write $x\in S$ to mean $x$ is a member of, or belongs to, $S$. Inversely, we write $x\notin S$ to mean $x$ is not a member of, or does not belong to, $S$.

**Subset and equality**. Given two sets $A$ and $B$, if every element in $A$ is also an element in $B$, we say that $A$ is a subset of $B$ (written $A\subseteq B$) and $B$ is a super set of $A$ (written $B\supseteq A$). If every element in $B$ is also an element in $A$, we say $A$ is equal to $B$, or $A=B$. If not, then we say $A$ is a proper subset of $B$ (written $A\subset B$) and $B$ is a proper superset of $A$ (written $B\supset A$).

**Example**. The set of natural numbers, $$\mathbb{N}=\{1,2,3\}$$ , is a proper subset of the set of integers, $$\mathbb{Z}=\{\ldots,-2,-1,0,1,2,\ldots\}$$. We can write this statement as $\mathbb{N}\subset\mathbb{Z}$.

**Intersection, union, and complement**. Given two sets $A$ and $B$, the intersection of $A$ and $B$, or $A\cap B$, is the set of elements contained in both $A$ and $B$. The union of the $A$ and $B$, or $A\cup B$, is the set of elements contained in either $A$ or $B$. The complement of $A$, or $\bar{A}$, with respect to some superset $B$ is the set of all elements not in $A$, but in $B$.

**List**. A _list_ is a collection of objects in some order. Lists are special sets. Elements of a list need not be distinct. Lists with identical elements arranged different orders are different. Like sets, lists can have a finite or infinite number of elements. Lists with certain lengths sometimes have special names. For example, lists of length two are often called _ordered pairs_.

**Cartesian product**. If $A$ and $B$ are two sets, we define their _Cartesian product_ or _cross product_ as the set of all ordered pairs in which the first element of each pair is a member in $A$ and the second element is a member in $B$. We often write the Cartesian product between $A$ and $B$ as $A\times B$.

If A has $$\|A\|$$ elements and $B$ has $$\|B\|$$ elements, then the length of $A\times B$, $$\|A\times B\|$$, is $$\|A\|\cdot\|B\|$$.

Cartesian products can be extended to many sets. The Cartesian product of $A_1\times A_2 \times \ldots \times A_k$ is the set of all lists length $k$ in which the ith element of the list is a member of the set $A_i$.
 
**Remark**. We often organize sets that satisfy common axioms into types. In linear algebra, we will study many types of sets. We study elements and sets within each type, and relate elements in one set to elements in another set. The reader may wonder why we study this type or that relation. We study them because history has shown them to be useful models for real-world applications.

We define a type by enumerating the axioms that each set of that type must satisfy. Each section in the following notes describes a different type of set. 

