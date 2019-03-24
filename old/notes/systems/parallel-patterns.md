---
layout: base
use_math: true
use_function_plot: true
---

# Parallel programming patterns

## Amdahl's Law
A simple model describing how parallelism can speed up a given task. Let $$S$$ be the fraction of the task that cannot be parallelized and $$P = 1-S$$ be the fraction that can be. If we have $N$ available processors, the speed-up in this model is given by

$$
speedup = \frac{1}{\frac{1-S}{N} + S} = \frac{1}{\frac{P}{N} + S}
$$

Below are some speed-up curves by number of available processors $N$ (2, 4, 8, 16).

<div id='amdahl'></div>

<script>
functionPlot({
  disableZoom: true,
  xAxis: {
    label: '% serial',
    domain: [0, 1]
  },
  yAxis: {
    label: 'speed-up',
    domain: [0, 20]
  },
  target: '#amdahl',
  data: [{
    fn: '1 / ((1-x)/2 + x)'
  }, {
    fn: '1 / ((1-x)/4 + x)'
  }, {
    fn: '1 / ((1-x)/8 + x)'
  }, {
    fn: '1 / ((1-x)/16 + x)'
  }],
  grid: true
})
</script>

## Finding concurrency
Two primary sources of concurrency:
- **Task parallelism**: work on independent functional tasks simultaneously
- **Data parallelism**: work on independent data elements simultaneously

## Resources
- http://www.cc.gatech.edu/~hyesoon/spr11/lec_parallel_pattern.pdf
