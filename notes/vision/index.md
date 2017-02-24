---
layout: base
title: Notes on Computer Vision
use_math: true
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

#### Fourier transforms

#### References
- [Image operations](http://www.cs.virginia.edu/~gfx/Courses/2011/IntroGraphics/lectures/3-Image.pdf)
- [Fourier transform for image processing](http://www.cs.unm.edu/~brayer/vision/fourier.html) and [here](http://homepages.inf.ed.ac.uk/rbf/HIPR2/fourier.htm)
- [Fourier transform in Matlab](http://www.mathworks.com/help/images/fourier-transform.html?refresh=true)
[notes/vision/.gitignore](notes/vision/notes/vision/.gitignore)
[notes/vision/3d-rotations.md](notes/vision/notes/vision/3d-rotations.md)
[notes/vision/camera-matrix.md](notes/vision/notes/vision/camera-matrix.md)
[notes/vision/color.md](notes/vision/notes/vision/color.md)
[notes/vision/homogenous-coordinates.md](notes/vision/notes/vision/homogenous-coordinates.md)
[notes/vision/homogenous-coordinates.png](notes/vision/notes/vision/homogenous-coordinates.png)
[notes/vision/index.md](notes/vision/notes/vision/index.md)
[notes/vision/large-small-aperture.png](notes/vision/notes/vision/large-small-aperture.png)
[notes/vision/lens-center-rays.png](notes/vision/notes/vision/lens-center-rays.png)
[notes/vision/lens-equation.png](notes/vision/notes/vision/lens-equation.png)
[notes/vision/lens-normal-rays.png](notes/vision/notes/vision/lens-normal-rays.png)
[notes/vision/lens-trace-rays.png](notes/vision/notes/vision/lens-trace-rays.png)
[notes/vision/lighting.md](notes/vision/notes/vision/lighting.md)
[notes/vision/ols.md](notes/vision/notes/vision/ols.md)
[notes/vision/optics.md](notes/vision/notes/vision/optics.md)
[notes/vision/pinhole-2d-geometry.svg](notes/vision/notes/vision/pinhole-2d-geometry.svg)
[notes/vision/pinhole-3d-geometry.svg](notes/vision/notes/vision/pinhole-3d-geometry.svg)
[notes/vision/pinhole-no-hole.png](notes/vision/notes/vision/pinhole-no-hole.png)
[notes/vision/pinhole-with-hole.png](notes/vision/notes/vision/pinhole-with-hole.png)
[notes/vision/pinhole-with-lens.png](notes/vision/notes/vision/pinhole-with-lens.png)
[notes/vision/projections.md](notes/vision/notes/vision/projections.md)
[notes/vision/transformations.md](notes/vision/notes/vision/transformations.md)
[notes/vision/transformations.png](notes/vision/notes/vision/transformations.png)
[](
[](
[](
[](
[](
[](
[](
[](
[](
[](
[](
[](
[](
[](
[](
[](
[](
[](
[](
[](
[](
[](
[](
[.gitignore](
[3d-rotations.md](
[camera-matrix.md](
[color.md](
[homogenous-coordinates.md](
[homogenous-coordinates.png](
[index.md](
[large-small-aperture.png](
[lens-center-rays.png](
[lens-equation.png](
[lens-normal-rays.png](
[lens-trace-rays.png](
[lighting.md](
[ols.md](
[optics.md](
[pinhole-2d-geometry.svg](
[pinhole-3d-geometry.svg](
[pinhole-no-hole.png](
[pinhole-with-hole.png](
[pinhole-with-lens.png](
[projections.md](
[transformations.md](
[transformations.png](
[.gitignore]()
[3d-rotations.md]()
[camera-matrix.md]()
[color.md]()
[homogenous-coordinates.md]()
[homogenous-coordinates.png]()
[index.md]()
[large-small-aperture.png]()
[lens-center-rays.png]()
[lens-equation.png]()
[lens-normal-rays.png]()
[lens-trace-rays.png]()
[lighting.md]()
[ols.md]()
[optics.md]()
[pinhole-2d-geometry.svg]()
[pinhole-3d-geometry.svg]()
[pinhole-no-hole.png]()
[pinhole-with-hole.png]()
[pinhole-with-lens.png]()
[projections.md]()
[transformations.md]()
[transformations.png]()
[.gitignore](notes/vision/.gitignore)
[3d-rotations.md](notes/vision/3d-rotations.md)
[camera-matrix.md](notes/vision/camera-matrix.md)
[color.md](notes/vision/color.md)
[homogenous-coordinates.md](notes/vision/homogenous-coordinates.md)
[homogenous-coordinates.png](notes/vision/homogenous-coordinates.png)
[index.md](notes/vision/index.md)
[large-small-aperture.png](notes/vision/large-small-aperture.png)
[lens-center-rays.png](notes/vision/lens-center-rays.png)
[lens-equation.png](notes/vision/lens-equation.png)
[lens-normal-rays.png](notes/vision/lens-normal-rays.png)
[lens-trace-rays.png](notes/vision/lens-trace-rays.png)
[lighting.md](notes/vision/lighting.md)
[ols.md](notes/vision/ols.md)
[optics.md](notes/vision/optics.md)
[pinhole-2d-geometry.svg](notes/vision/pinhole-2d-geometry.svg)
[pinhole-3d-geometry.svg](notes/vision/pinhole-3d-geometry.svg)
[pinhole-no-hole.png](notes/vision/pinhole-no-hole.png)
[pinhole-with-hole.png](notes/vision/pinhole-with-hole.png)
[pinhole-with-lens.png](notes/vision/pinhole-with-lens.png)
[projections.md](notes/vision/projections.md)
[transformations.md](notes/vision/transformations.md)
[transformations.png](notes/vision/transformations.png)
[.gitignore](notes/vision/.html)
[3d-rotations.md](notes/vision/3d-rotations.html)
[camera-matrix.md](notes/vision/camera-matrix.html)
[color.md](notes/vision/color.html)
[homogenous-coordinates.md](notes/vision/homogenous-coordinates.html)
[homogenous-coordinates.png](notes/vision/homogenous-coordinates.html)
[index.md](notes/vision/index.html)
[large-small-aperture.png](notes/vision/large-small-aperture.html)
[lens-center-rays.png](notes/vision/lens-center-rays.html)
[lens-equation.png](notes/vision/lens-equation.html)
[lens-normal-rays.png](notes/vision/lens-normal-rays.html)
[lens-trace-rays.png](notes/vision/lens-trace-rays.html)
[lighting.md](notes/vision/lighting.html)
[ols.md](notes/vision/ols.html)
[optics.md](notes/vision/optics.html)
[pinhole-2d-geometry.svg](notes/vision/pinhole-2d-geometry.html)
[pinhole-3d-geometry.svg](notes/vision/pinhole-3d-geometry.html)
[pinhole-no-hole.png](notes/vision/pinhole-no-hole.html)
[pinhole-with-hole.png](notes/vision/pinhole-with-hole.html)
[pinhole-with-lens.png](notes/vision/pinhole-with-lens.html)
[projections.md](notes/vision/projections.html)
[transformations.md](notes/vision/transformations.html)
[transformations.png](notes/vision/transformations.html)
[vision](notes/vision/.html)
[3d-rotations](notes/vision/3d-rotations.html)
[camera-matrix](notes/vision/camera-matrix.html)
[color](notes/vision/color.html)
[homogenous-coordinates](notes/vision/homogenous-coordinates.html)
[homogenous-coordinates](notes/vision/homogenous-coordinates.html)
[index](notes/vision/index.html)
[large-small-aperture](notes/vision/large-small-aperture.html)
[lens-center-rays](notes/vision/lens-center-rays.html)
[lens-equation](notes/vision/lens-equation.html)
[lens-normal-rays](notes/vision/lens-normal-rays.html)
[lens-trace-rays](notes/vision/lens-trace-rays.html)
[lighting](notes/vision/lighting.html)
[ols](notes/vision/ols.html)
[optics](notes/vision/optics.html)
[pinhole-2d-geometry](notes/vision/pinhole-2d-geometry.html)
[pinhole-3d-geometry](notes/vision/pinhole-3d-geometry.html)
[pinhole-no-hole](notes/vision/pinhole-no-hole.html)
[pinhole-with-hole](notes/vision/pinhole-with-hole.html)
[pinhole-with-lens](notes/vision/pinhole-with-lens.html)
[projections](notes/vision/projections.html)
[transformations](notes/vision/transformations.html)
[transformations](notes/vision/transformations.html)
\n[vision](notes/vision/.html)
\n[3d-rotations](notes/vision/3d-rotations.html)
\n[camera-matrix](notes/vision/camera-matrix.html)
\n[color](notes/vision/color.html)
\n[homogenous-coordinates](notes/vision/homogenous-coordinates.html)
\n[homogenous-coordinates](notes/vision/homogenous-coordinates.html)
\n[index](notes/vision/index.html)
\n[large-small-aperture](notes/vision/large-small-aperture.html)
\n[lens-center-rays](notes/vision/lens-center-rays.html)
\n[lens-equation](notes/vision/lens-equation.html)
\n[lens-normal-rays](notes/vision/lens-normal-rays.html)
\n[lens-trace-rays](notes/vision/lens-trace-rays.html)
\n[lighting](notes/vision/lighting.html)
\n[ols](notes/vision/ols.html)
\n[optics](notes/vision/optics.html)
\n[pinhole-2d-geometry](notes/vision/pinhole-2d-geometry.html)
\n[pinhole-3d-geometry](notes/vision/pinhole-3d-geometry.html)
\n[pinhole-no-hole](notes/vision/pinhole-no-hole.html)
\n[pinhole-with-hole](notes/vision/pinhole-with-hole.html)
\n[pinhole-with-lens](notes/vision/pinhole-with-lens.html)
\n[projections](notes/vision/projections.html)
\n[transformations](notes/vision/transformations.html)
\n[transformations](notes/vision/transformations.html)

[vision](notes/vision/.html)

[3d-rotations](notes/vision/3d-rotations.html)

[camera-matrix](notes/vision/camera-matrix.html)

[color](notes/vision/color.html)

[homogenous-coordinates](notes/vision/homogenous-coordinates.html)

[homogenous-coordinates](notes/vision/homogenous-coordinates.html)

[index](notes/vision/index.html)

[large-small-aperture](notes/vision/large-small-aperture.html)

[lens-center-rays](notes/vision/lens-center-rays.html)

[lens-equation](notes/vision/lens-equation.html)

[lens-normal-rays](notes/vision/lens-normal-rays.html)

[lens-trace-rays](notes/vision/lens-trace-rays.html)

[lighting](notes/vision/lighting.html)

[ols](notes/vision/ols.html)

[optics](notes/vision/optics.html)

[pinhole-2d-geometry](notes/vision/pinhole-2d-geometry.html)

[pinhole-3d-geometry](notes/vision/pinhole-3d-geometry.html)

[pinhole-no-hole](notes/vision/pinhole-no-hole.html)

[pinhole-with-hole](notes/vision/pinhole-with-hole.html)

[pinhole-with-lens](notes/vision/pinhole-with-lens.html)

[projections](notes/vision/projections.html)

[transformations](notes/vision/transformations.html)

[transformations](notes/vision/transformations.html)
- [vision](notes/vision/.html)
- [3d-rotations](notes/vision/3d-rotations.html)
- [camera-matrix](notes/vision/camera-matrix.html)
- [color](notes/vision/color.html)
- [homogenous-coordinates](notes/vision/homogenous-coordinates.html)
- [homogenous-coordinates](notes/vision/homogenous-coordinates.html)
- [index](notes/vision/index.html)
- [large-small-aperture](notes/vision/large-small-aperture.html)
- [lens-center-rays](notes/vision/lens-center-rays.html)
- [lens-equation](notes/vision/lens-equation.html)
- [lens-normal-rays](notes/vision/lens-normal-rays.html)
- [lens-trace-rays](notes/vision/lens-trace-rays.html)
- [lighting](notes/vision/lighting.html)
- [ols](notes/vision/ols.html)
- [optics](notes/vision/optics.html)
- [pinhole-2d-geometry](notes/vision/pinhole-2d-geometry.html)
- [pinhole-3d-geometry](notes/vision/pinhole-3d-geometry.html)
- [pinhole-no-hole](notes/vision/pinhole-no-hole.html)
- [pinhole-with-hole](notes/vision/pinhole-with-hole.html)
- [pinhole-with-lens](notes/vision/pinhole-with-lens.html)
- [projections](notes/vision/projections.html)
- [transformations](notes/vision/transformations.html)
- [transformations](notes/vision/transformations.html)
- [vision](notes/vision/.html)
- [3d-rotations](notes/vision/3d-rotations.html)
- [camera-matrix](notes/vision/camera-matrix.html)
- [color](notes/vision/color.html)
- [homogenous-coordinates](notes/vision/homogenous-coordinates.html)
- [homogenous-coordinates](notes/vision/homogenous-coordinates.html)
- [index](notes/vision/index.html)
- [large-small-aperture](notes/vision/large-small-aperture.html)
- [lens-center-rays](notes/vision/lens-center-rays.html)
- [lens-equation](notes/vision/lens-equation.html)
- [lens-normal-rays](notes/vision/lens-normal-rays.html)
- [lens-trace-rays](notes/vision/lens-trace-rays.html)
- [lighting](notes/vision/lighting.html)
- [ols](notes/vision/ols.html)
- [optics](notes/vision/optics.html)
- [pinhole-2d-geometry](notes/vision/pinhole-2d-geometry.html)
- [pinhole-3d-geometry](notes/vision/pinhole-3d-geometry.html)
- [pinhole-no-hole](notes/vision/pinhole-no-hole.html)
- [pinhole-with-hole](notes/vision/pinhole-with-hole.html)
- [pinhole-with-lens](notes/vision/pinhole-with-lens.html)
- [projections](notes/vision/projections.html)
- [transformations](notes/vision/transformations.html)
- [transformations](notes/vision/transformations.html)
- [vision](notes/vision/.html)
- [3d-rotations](notes/vision/3d-rotations.html)
- [camera-matrix](notes/vision/camera-matrix.html)
- [color](notes/vision/color.html)
- [homogenous-coordinates](notes/vision/homogenous-coordinates.html)
- [homogenous-coordinates](notes/vision/homogenous-coordinates.html)
- [large-small-aperture](notes/vision/large-small-aperture.html)
- [lens-center-rays](notes/vision/lens-center-rays.html)
- [lens-equation](notes/vision/lens-equation.html)
- [lens-normal-rays](notes/vision/lens-normal-rays.html)
- [lens-trace-rays](notes/vision/lens-trace-rays.html)
- [lighting](notes/vision/lighting.html)
- [ols](notes/vision/ols.html)
- [optics](notes/vision/optics.html)
- [pinhole-2d-geometry](notes/vision/pinhole-2d-geometry.html)
- [pinhole-3d-geometry](notes/vision/pinhole-3d-geometry.html)
- [pinhole-no-hole](notes/vision/pinhole-no-hole.html)
- [pinhole-with-hole](notes/vision/pinhole-with-hole.html)
- [pinhole-with-lens](notes/vision/pinhole-with-lens.html)
- [projections](notes/vision/projections.html)
- [transformations](notes/vision/transformations.html)
- [transformations](notes/vision/transformations.html)
- [vision](/notes/vision/.html)
- [3d-rotations](/notes/vision/3d-rotations.html)
- [camera-matrix](/notes/vision/camera-matrix.html)
- [color](/notes/vision/color.html)
- [homogenous-coordinates](/notes/vision/homogenous-coordinates.html)
- [homogenous-coordinates](/notes/vision/homogenous-coordinates.html)
- [large-small-aperture](/notes/vision/large-small-aperture.html)
- [lens-center-rays](/notes/vision/lens-center-rays.html)
- [lens-equation](/notes/vision/lens-equation.html)
- [lens-normal-rays](/notes/vision/lens-normal-rays.html)
- [lens-trace-rays](/notes/vision/lens-trace-rays.html)
- [lighting](/notes/vision/lighting.html)
- [ols](/notes/vision/ols.html)
- [optics](/notes/vision/optics.html)
- [pinhole-2d-geometry](/notes/vision/pinhole-2d-geometry.html)
- [pinhole-3d-geometry](/notes/vision/pinhole-3d-geometry.html)
- [pinhole-no-hole](/notes/vision/pinhole-no-hole.html)
- [pinhole-with-hole](/notes/vision/pinhole-with-hole.html)
- [pinhole-with-lens](/notes/vision/pinhole-with-lens.html)
- [projections](/notes/vision/projections.html)
- [transformations](/notes/vision/transformations.html)
- [transformations](/notes/vision/transformations.html)
- [vision](/notes/vision/.html)
- [3d-rotations](/notes/vision/3d-rotations.html)
- [camera-matrix](/notes/vision/camera-matrix.html)
- [color](/notes/vision/color.html)
- [homogenous-coordinates](/notes/vision/homogenous-coordinates.html)
- [homogenous-coordinates](/notes/vision/homogenous-coordinates.html)
- [large-small-aperture](/notes/vision/large-small-aperture.html)
- [lens-center-rays](/notes/vision/lens-center-rays.html)
- [lens-equation](/notes/vision/lens-equation.html)
- [lens-normal-rays](/notes/vision/lens-normal-rays.html)
- [lens-trace-rays](/notes/vision/lens-trace-rays.html)
- [lighting](/notes/vision/lighting.html)
- [ols](/notes/vision/ols.html)
- [optics](/notes/vision/optics.html)
- [pinhole-2d-geometry](/notes/vision/pinhole-2d-geometry.html)
- [pinhole-3d-geometry](/notes/vision/pinhole-3d-geometry.html)
- [pinhole-no-hole](/notes/vision/pinhole-no-hole.html)
- [pinhole-with-hole](/notes/vision/pinhole-with-hole.html)
- [pinhole-with-lens](/notes/vision/pinhole-with-lens.html)
- [projections](/notes/vision/projections.html)
- [transformations](/notes/vision/transformations.html)
- [transformations](/notes/vision/transformations.html)
- [vision](/notes/vision/.html)
- [3d-rotations](/notes/vision/3d-rotations.html)
- [camera-matrix](/notes/vision/camera-matrix.html)
- [color](/notes/vision/color.html)
- [homogenous-coordinates](/notes/vision/homogenous-coordinates.html)
- [homogenous-coordinates](/notes/vision/homogenous-coordinates.html)
- [large-small-aperture](/notes/vision/large-small-aperture.html)
- [lens-center-rays](/notes/vision/lens-center-rays.html)
- [lens-equation](/notes/vision/lens-equation.html)
- [lens-normal-rays](/notes/vision/lens-normal-rays.html)
- [lens-trace-rays](/notes/vision/lens-trace-rays.html)
- [lighting](/notes/vision/lighting.html)
- [ols](/notes/vision/ols.html)
- [optics](/notes/vision/optics.html)
- [pinhole-2d-geometry](/notes/vision/pinhole-2d-geometry.html)
- [pinhole-3d-geometry](/notes/vision/pinhole-3d-geometry.html)
- [pinhole-no-hole](/notes/vision/pinhole-no-hole.html)
- [pinhole-with-hole](/notes/vision/pinhole-with-hole.html)
- [pinhole-with-lens](/notes/vision/pinhole-with-lens.html)
- [projections](/notes/vision/projections.html)
- [transformations](/notes/vision/transformations.html)
- [transformations](/notes/vision/transformations.html)
