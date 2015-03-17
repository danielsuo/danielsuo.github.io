---
layout: base
title: Notes on Computer Vision
---

## Notes with their own pages
- [Homogenous coordinates](homogenous-coordinates.html)
- [Lighting](lighting.html)

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

### Cameras and optics

#### Camera obscura
A dark box with a hole in one side. Light from an external scene goes through the hole and projects on the surface opposite the hole (or some kind of sensor, in the case of a camera). Color and perspective are preserved, but the image is rotated 180 degrees. A _pinhole camera_ is a camera obscura that does not use a lens to focus light.

**Why do we need a hole?** Asked a different way, why don't we see reflections of a scene on arbitrary pieces of paper? Without a hole, light from many directions hit the recording surface or sensor at a given point. It is not possible to record the light coming from only the area of the scene we want to record at that point on the sensor. 

![pinhole-no-hole.png](pinhole-no-hole.png)

The pinhole camera only allows rays from one point in the scene to strike each point of the paper.

![pinhole-with-hole.png](pinhole-with-hole.png)

#### Aperture
From [class notes](http://vision.princeton.edu/courses/COS429/2014fa/slides/02_camera/): In optics, an aperture is a hole or opening through which light travels. The aperture determines the cone angle of a bundle of rays that come to a focus in the image plane.

If the aperture is small, we need to expose the sensor for a long time to collect enough light (i.e., long exposure time). However, we get a high fidelity image. There are very few rays from the external scene that hit each part of the sensor.

On the other hand, if the aperture is very big, we don't need to expose the sensor for as long, but our image is blurry. Light from too many directions hit each part of the sensor.

If the aperture is extremely small, we see a blurry image. This is because of the wave nature of light. Light diffracts through a pinhole and the effect increases as the pinhole's size becomes smaller.

### Lenses
In order to gather more light while still maintaining a focused image, we use a lens and rely on its ability to bend light. If we replace a large aperture with a lens, we still let in a lot of light. The lens shifts the extra rays that would have blurred our image. This refraction lets us take advantage of the extra light.

![pinhole-with-lens.png](pinhole-with-lens.png)

#### References
- [Class notes on image formation](http://vision.princeton.edu/courses/COS429/2014fa/slides/02_camera/)

### Anti-pinhole Cameras

### 2D and 3D Transformations