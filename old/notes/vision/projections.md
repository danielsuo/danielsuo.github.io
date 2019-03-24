---
layout: base
title: 3D to 2D Projections
---

### 3D to 2D projections
We often want to know how to project 3D objects onto a 2D plane (e.g., display an image on a screen).

- **Orthographic** Drop the $z$ component of any three-dimensional point $p$ to obtain the two-dimensional point $x$. We can write this transform as:

  $$
    x = \left[I_{2\times2}\ \vert\ 0\right]p
  $$

  If we use homogenous, or projective coordinates $\tilde{x}$ and $\tilde{p}$:

  $$
    \tilde{x} = \left[
  \begin{array}{cccc}
  1 & 0 & 0 & 0\\
  0 & 1 & 0 & 0\\
  0 & 0 & 0 & 1\\
  \end{array}
  \right]
  $$

  Orthographic projections are fixed-depth.

- **Perspective** The perspective projection divides the $x$ and $y$ components by the $z$ component, weighting them by distance to the camera. We can write this transform using homogenous coordinates as:


  $$
    \tilde{x} = \left[
  \begin{array}{cccc}
  1 & 0 & 0 & 0\\
  0 & 1 & 0 & 0\\
  0 & 0 & 1 & 0\\
  \end{array}
  \right]
  $$
  

  where we drop the $w$ coordinate. Note that we do not divide by $z$ because homogenous coordinates are equivalent by a multiple.