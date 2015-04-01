---
layout: base
title: Notes on Computer Vision
---

## Computer Vision

These notes are based on the course [COS429](http://vision.princeton.edu/courses/COS429/2014fa/), which is taught at Princeton by Professor Jianxiong Xiao.

## Notes with their own pages
- [Ordinary least squares](ols.html)
- [Lighting](lighting.html)
- [Optics](optics.html)
- [Color](color.html)
- [2D and 3D transformations](transformations.html)
- [Homogenous coordinates](homogenous-coordinates.html)
- [3D rotations](3d-rotations.html)
- [Camera matrix](camera-matrix.html)

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

### Image operations

#### Image transformations
- Image warping changes the domain of the image. In other words, we move pixels around (e.g., moving, scaling, rotating, fisheye).
- Image filtering changes the range of the image. In other words, we modify the pixels, but keep them in the same location (e.g., Instagram filters).

#### References
- [Image operations](http://www.cs.virginia.edu/~gfx/Courses/2011/IntroGraphics/lectures/3-Image.pdf)