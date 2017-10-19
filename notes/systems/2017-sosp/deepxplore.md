---
layout: base
---

# DeepXplore: Automated Whitebox Testing of Deep Learning Systems
([link](http://www.cs.columbia.edu/~suman/docs/deepxplore.pdf)) Kexin Pei, Yinzhi Cao, Junfeng Yang, Suman Jana

## Main idea
- **What is the problem?** No systematic way to check correctness or coverage for deep learning models.
- **Why is it important?** Deep learning is increasingly deployed in safety- and security-critical domains.
- **What is the approach?**
  1. Use 'neuron coverage' as metric for measuring which parts of model are tested by inputs
  2. Use other, similar models to cross-check output to avoid manual checking
  3. Pose the search for inputs that both a) trigger many differential behaviors and b) trigger high neuron coverage as a joint optimization problem to solve via gradiant-based search
- **What is the result?**
  - Can generate bad test input without much compute
  - Can use generated bad test inputs to improve model accuracy by up to 3%

<div class="vspace"></div>

## Notes
- Adversarial images expose some errors, but only cover limited portion of a model's logic
- Neuron coverage is # of unique activated neurons for all test inputs / total number of neurons
- Maximize differential behavior means have different behaviors (e.g., classification) from different DNNs on the same input

## Questions
- Is neuron coverage a good metric? How many neurons are likely to be dead with a large enough training set? What indication do we have that neuron coverage is correlated with unusual input or wrong behavior?
- Isn't this just another (hand-crafted) mechanism for generating adversarial images? Why is neuron coverage important? We could relax standard adversarial deep learning and use similar domain-specific constraints

## Extension ideas
