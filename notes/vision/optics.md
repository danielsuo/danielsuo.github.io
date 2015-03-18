---
layout: base
title: Optics
---

### Optics

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

#### Lenses
In order to gather more light while still maintaining a focused image, we use a lens and rely on its ability to bend light. If we replace a large aperture with a lens, we still let in a lot of light. The lens shifts the extra rays that would have blurred our image. This refraction lets us take advantage of the extra light.

![pinhole-with-lens.png](pinhole-with-lens.png)

An ideal thin lens refracts, or bends, all rays perpendicular to the surface of the lens to a single point on the other side at distance $f$ (focal length).

![lens-normal-rays.png](lens-normal-rays.png)

The idea thin lens does not alter rays going through its center, thus preserving perspective.

![lens-center-rays.png](lens-center-rays.png)

All rays coming from points on a plane parallel to the lens are focused onto corresponding points on another plane parallel to the lens.

![lens-trace-rays.png](lens-trace-rays.png)

The distance between the two planes to the lens and the focal length is governed by the expression

![lens-equation.png](lens-equation.png)

We can show this is true via geometry or representing the three rays as a system of simultaneous equations.

#### Anti-pinhole Cameras

#### Modern Cameras
- All about capturing and focusing light
- Two primary levers: aperture size, shutter speed
- A larger aperture size lets in more light and tends to focus an image at distances within a smaller range. Smaller aperture lets in less light, but focuses an image at distances within a larger range.

![large-small-aperture.png](large-small-aperture.png)

#### References
- [Class notes on image formation](http://vision.princeton.edu/courses/COS429/2014fa/slides/02_camera/)
- [Exposure settings on cameras](http://www.cambridgeincolour.com/tutorials/camera-exposure.htm)
