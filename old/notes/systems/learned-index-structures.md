---
layout: base
date: 2017-12-19
title: The Case for Learned Index Structures
authors: Tim Kraska, Alex Beutel, Ed H. Chi, Jeffrey Dean, Neoklis Polyzotis
link: https://arxiv.org/abs/1712.01208
venue: arXiv
year: 2017
type: paper
categories: [unorganized, systems, aiml]
---

# {{ page.title }}
([link]({{ page.link }})) {{ page.authors }}

## Main idea
- **What is the problem?** Efficiently access data under different scenarios. An old problem.
- **Why is it important?** Lots of data that needs to be searched.
- **What is the approach?** Treat indexes as models that can be specified (e.g., B-Trees) or learned
- **What is the result?** 70% speedup while saving > 1 OOM of space

## Notes
### Main points
- Databases use models of / assumptions about data already
- However, typically assumes much less about data than might be fruitful; if we can make more assumptions without  incurring too much cost (e.g., inflexibility, guarantees), can we improve performance?
- Training / executing models becoming very fast, especially with growing parallelism and simple operators
- Must be absolutely clear about guarantees and tradeoffs
- No point in ML for ML's sake. Don't be shy about using a hybrid approach

### Range index
- If data is sorted, think of range index as model to predict cumalitive distribution function (CDF). The CDF gives the density of items before the item we care about, so we can get a very good estimate of where the range we care about is if our model of the data's CDF is good
- Traditional models are very good at overfitting in the local case. Consider hybrid approaches that use ML to get to approximate location and then traditional model for last-mile search

### Recursive model index
- Use a hierarchy of small models rather than one large model

### Point index
- Use neural nets as a learned hashing function to reduce collisions. Just scale the CDF to size of hash map

### Existence index
- Use learned bloom filter as classifier
- But other classifiers could also work

## Questions
## Extension ideas
- The authors sketch some ideas for write-heavy loads
- Authors make no claim about exhaustively searching models
- Data domains / simple decisions based on rich data may benefit most immediately, but what about more complex decision-making domains?
