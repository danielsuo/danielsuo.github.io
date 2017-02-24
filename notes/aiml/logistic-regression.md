---
layout: base
use_math: true
use_function_plot: true
---

# Logistic regression

## The classification problem

While we're often interested predicting continuous variables based on some input variables (e.g., home price based on number of bedrooms), there are many cases where we want to predict binary outcomes (e.g., it will snow tomorrow). In this case, the input variables may be continuous or not. We will investigate the case where we want to predict some category (e.g., this picture is of a cat, dog, or mouse) at some later point.

A quick note on taxonomy: regression models typically predict continuous values whereas classification models typically predict discrete values (i.e., classes). Logistic regressions are often used as classifiers. A cliffhanger! We will resolve this seeming inconsistency soon.

But we're interested in more than just categorizing input variables into two classes "yes" and "no" (this problem is called binary classification). We'd also like some measure of how likely our response $Y$ of "yes" or "no" is given the input data, $X$. In other words, we'd like the conditional probability distribution of $Y$ on $X$, $\Pr(Y\|X).$

## A statistician's approach

Let's rename our classes 1 ("yes") and 0 ("no"). $Y$ becomes an indicator random variable, which is just a fancy way of saying $Y$ is a random variable associated with whether an event (call it $A$) happens or not. To be completely explicit:

$$
Y = \left\{
\begin{array}{ll}
1 & \textrm{if }A\\
0 & \textrm{otherwise}
\end{array}
\right.
$$

By the definition of expectation, indicator random variables have the property that

$$
\mathbf{E}[Y] = \Pr(Y = 1)\\
\mathbf{E}[Y | X] = \Pr(Y = 1 | X = x)
$$

We could just use a linear regression on the input data to predict $Y$, but this ignores the fact that we'd like to model probabilities and probabilities must stay between 0 and 1! How might we model $p = \Pr(Y = 1)$? One simple thing to do is to take each datapoint $x_i$ and the corresponding output $y_i$ and maximize the probability of all the $y_i$ occurring, given the corresponding $x_i$.

$$
\prod_{i=1}^n \Pr(Y=y_i | X=x_i) = \prod_{i=1}^n p^{y_i}(1-p)^{1-y_i}
$$

Of course, the right-hand side is maximized when $p = \hat{p} = \sum_{i=1}^n y_i / n$. But hang on, do we really want $p$ to be the same regardless of $x_i$? Surely it's more likely to rain when there are storm clouds gathering than during a cloudless, sunny day. Here is a revised likelihood function:

$$
\prod_{i=1}^n \Pr(Y=y_i | X=x_i) = \prod_{i=1}^n p_i^{y_i}(1-p_i)^{1-y_i}
$$

Getting warmer, though a closer look tells us that this function doesn't tell us anything. We can maximize it by setting $\hat{p}_i = y_i$. Once again, we ignore $x_i$. We need some constraints on $p_i$ that force it to depend on $x_i$ and establish some consistency across the $x_i$ we see: $p_i = p(x_i;\theta)$, where we assume some function $p$ and try to estimate $\theta$ by maximizing the new likelihood function:

$$
\prod_{i=1}^n \Pr(Y=y_i | X=x_i) = \prod_{i=1}^n p(x_i;\theta)^{y_i}(1-p(x_i;\theta))^{1-y_i}
$$

## Logistic regression
It so happens that the machinery people have developed for linear regressions are so handy that we ask ourselves how we might use linear regressions to estimate the unknown parameters in our probability function.

1. The simplest approach is to let $p(x)$ be a linear function of $x$ (with $\theta$ as the corresponding coefficients). The problem, though, is linear functions are unbounded, whereas probabilities are bounded between 0 and 1. It's also worth noting that in many problems, we need a much bigger change in $x$ to change $p$ when $p$ is already very close to 1 or 0.

2. After some futzing, we see that

$$
\log \frac{p}{1 - p} = \beta_0 + x\cdot \beta
$$

gives us the two properties that we want: bounded between 1 and 0 regardless of $x$, and small changes in $p$ with respect to $x$ as $p$ gets close to 0 or 1. In the plot below, we let

$$
u=\beta_0 + x\cdot\beta
$$

for simplicity.

<div id='quadratic'></div>

<script>
functionPlot({
  disableZoom: true,
  xAxis: {
    label: 'u - axis'
  },
  yAxis: {
    label: 'p - axis',
    domain: [0, 1.2]
  },
  target: '#quadratic',
  data: [{
    fn: '1 / (1 + exp(-x))'
  }],
  grid: true
})
</script>

## Comparing linear and logistic regressions

## Examining how logistic regression changes based on parameters

## The decision boundary

## Maximizing the likelihood function for logistic regression

## Logistic regression with more than two classes (multinomial regression)

## Further topics
- Newton's method in one or more dimensions
- Iteratively re-weighted least squares
- Generalized linear models

## Questions to answer
- [Why is it called a regression?](https://www.quora.com/Why-is-logistic-regression-called-regression-if-it-doesnt-model-continuous-outcomes)



## References
- [Introduction 1](https://www.stat.cmu.edu/~cshalizi/uADA/12/lectures/ch12.pdf)
- [Introduction 2](http://data.princeton.edu/wws509/notes/c3.pdf)
- [Basic Introduction](http://www.mc.vanderbilt.edu/gcrc/workshop_files/2004-11-12.pdf)
