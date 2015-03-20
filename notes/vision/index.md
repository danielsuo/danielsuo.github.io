---
layout: base
title: Notes on Computer Vision
---

## Computer Vision

These notes are based on the course [COS429](http://vision.princeton.edu/courses/COS429/2014fa/), which is taught at Princeton by Professor Jianxiong Xiao.

## Notes with their own pages
- [Lighting](lighting.html)
- [Optics](optics.html)
<!-- - [Homogenous coordinates](homogenous-coordinates.html) -->

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

### 2D and 3D Transformations

#### Image transformations
- Image warping changes the domain of the image. In other words, we move pixels around (e.g., moving, scaling, rotating, fisheye).
- Image filtering changes the range of the image. In other words, we modify the pixels, but keep them in the same location (e.g., Instagram filters).

#### 2D Linear transformations
- Closed under combinations of scale, rotation, sheer, mirror (interestingly, not translation)
- Linear transformations preserve
  - Origin
  - Lines
  - Parallelism
  - Ratios

#### Homogenous coordinates
Homogenous, or projective coordinates form a coordinate system where we can represent points at infinity using finite coordinates. Homogenous coordinates also let us easily represent affine and, in general, projective transformations by matrices.

To get the homogenous coordinate of some coordinate in $\mathbb{R}^n$, we append the number 1 to create a vector of length $n+1$. In the case of a coordinate in $\mathbb{R}^2$, we represent the coordinate $(x,y)$ as:

$$
(x,y)\Rightarrow\left[
\begin{array}{c}
x\\
y\\
1\\
\end{array}
\right]
$$

We add a further stipulation that any scalar multiple of a homogenous coordinate is considered the same point. We can think of the homogenous coordinate for some $\mathbb{R}^2$ coordinate and all its scalar multiples as a line in $\mathbb{R}^3$.

![homogenous-coordinates.png](homogenous-coordinates.png)

Converting back from some homogenous coordinate:

$$\left[
\begin{array}{c}
x\\
y\\
w\\
\end{array}
\right] \Rightarrow (x/w,y/w)
$$

Continuing with our example in $\mathbb{R}^2$, let us consider the plane $z=1$, or all the points of the form $(x,y,1)$. Every point in $\mathbb{R^2}$ corresponds uniquely with a point $(x,y,z)$ on the plane $z=1$. However, if we want to consider all lines in $\mathbb{R}^3$ that pass through the origin, we must examine points of the form $(x,y,0)$. Intuitively, we call these 'points at infinity'.

Using homogenous coordinates, we can now use the power of linear algebra in ways we could not with normal coordinates.

$$
\left[
\begin{array}{c}
x'\\
y'\\
\end{array}
\right]

=

\left[
\begin{array}{cc}
? & ?\\
? & ?\\
\end{array}
\right] 

\left[
\begin{array}{c}
x\\
y\\
\end{array}
\right]

=

\left[
\begin{array}{c}
x + t_x\\
y + t_y\\
\end{array}
\right]
$$

can now be computed via

$$
\left[
\begin{array}{c}
x'\\
y'\\
1\\
\end{array}
\right]

=

\left[
\begin{array}{ccc}
1 & 0 & t_x\\
0 & 1 & t_y\\
0 & 0 & 1\\
\end{array}
\right] 

\left[
\begin{array}{c}
x\\
y\\
1\\
\end{array}
\right]

=

\left[
\begin{array}{c}
x + t_x\\
y + t_y\\
1\\
\end{array}
\right]
$$

Translations are an example of an _affine transformation_.

#### Affine transformations
Affine transformations are a superset of linear transformations; they relax the requirement that the origin is preserved. Affine transformations, like linear transformations, are still closed under composition and preserve

- Lines
- Parallelism
- Ratios

We can tell if a matrix represents an affine transformation if its last row contains all zeros except for a 1 in the last column. Physically, we interpret affine transformations as some combination of a linear transformation and a translation.

#### Projective transformations
Projective transformations are a superset of affine transformations. Parallel lines do not necessarily remain parallel and ratios are not preserved. We can tell if a matrix represents a projective transformation if its last row is not $[0,0,\ldots,1]$ as is required for an affine transformation.

#### 3D rotations
- Euler angles
- Quaternions
- Exponential twist

#### 3D to 2D projections

#### Summary of transformations
From [Szeliski's book](http://szeliski.org/Book/drafts/SzeliskiBook_20100903_draft.pdf).

![transformations.png](transformations.png)

### Image operations

#### References
- [Image operations](http://www.cs.virginia.edu/~gfx/Courses/2011/IntroGraphics/lectures/3-Image.pdf)