---
layout: base
title: Notes on Computer Vision
---

## Computer Vision

These notes are based on the course [COS429](http://vision.princeton.edu/courses/COS429/2014fa/), which is taught at Princeton by Professor Jianxiong Xiao.

## Notes with their own pages
- [2D and 3D transformations](transformations.html)
- [Homogenous coordinates](homogenous-coordinates.html)
- [Lighting](lighting.html)
- [Optics](optics.html)
- [Color](color.html)

## Notes that have not been organized

### Images

#### Pixels
From [class notes](http://vision.princeton.edu/courses/COS429/2014fa/slides/02_camera/): Conceptually, each pixel is a sample of the radiance arriving at a camera viewpoint from a direction. The camera records the number of photons captured for each pixel in its sensor in a given period of time and approximates the power (energy from the photons in a given time) for all pixels.

#### Photograph
From [class notes](http://vision.princeton.edu/courses/COS429/2014fa/slides/02_camera/): A photograph is a slice of the plenoptic function 

- At a particular point of view $(x,y,z)$
- In the camera's field of view (range over $\theta$ and $\phi$)
- At a certain time $t$
- Over a range of frequencies $\lambda$

#### References
- [Class notes on image formation](http://vision.princeton.edu/courses/COS429/2014fa/slides/02_camera/)

#### 3D rotations
- Euler angles
- Quaternions
- Exponential twist

#### 3D to 2D projections
We often want to know how to project 3D objects onto a 2D plane (e.g., display an image on a screen).

**Orthographic** Drop the $z$ component of any three-dimensional point $p$ to obtain the two-dimensional point $x$. We can write this transform as:

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

**Perspective** The perspective projection divides the $x$ and $y$ components by the $z$ component, weighting them by distance to the camera. We can write this transform using homogenous coordinates as 
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

### Image operations

#### References
- [Image operations](http://www.cs.virginia.edu/~gfx/Courses/2011/IntroGraphics/lectures/3-Image.pdf)