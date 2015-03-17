---
layout: base
title: Lighting
---

### Lighting

#### Irradiance
Irradiance is the radiant flux incident on a surface per unit area. Radiant flux, or radiant power, is the radiant energy emitted, reflected, transmitted, or received, per unit time. Radiant flux is measured in watts, which are defined as joules per second, and describes the rate of energy transfer with respect to time. 1 joule is equal to the energy transferred, or work done, when applying a force of one newton (accelerate a one kilogram mass at 1 meter per second squared) through a distance of one meter. To sum up, irradiance is the energy transferred per second (watts) through an area (meters squared): $W/m^2$.

Irradiance refers to incoming power (energy per time, measured in watts).

#### Radiance
  Radiance is the radiant flux per unit solid angle per unit area. Solid angles are three-dimensional analogues to an angle between, for example, two vectors. They are measured in steradians. A radian is numerically equivalent to the length of a corresponding arc on a unity circle. Similarly, a steradian is numerically equivalent to the area subtended on a unit sphere.

There are two use cases for radiance:

1. Describing angle-dependent diffuse reflections (i.e., the power reflected in a particular direction by a particular area)
2. Describing emission from light sources (i.e., the power received by a particular area in a particular direction)

Radiance is 'conserved' along a ray. More generally, radiance divided by a medium's index of refraction is 'conserved' before and after traveling through that medium.

Radiant intensity is the radiant flux over a solid angle.

#### Luminance
From [Wikipedia](http://en.wikipedia.org/wiki/Luminance): Luminance is a measure of luminous intensity per unit area of light traveling in a given direction. It describes the amount of light that passes through, is emitted or reflected from a particular area, and falls within a given solid angle.

The SI unit for luminous intensity is the candela, which is defined as the luminous intensity, in a given direction, of a source that emits monochromatic radiation of frequency 540 terahertz and that has a radiant intensity in that direction of 1⁄683 watt per steradian. In otherwords, a candela is a measure of power through a solid angle weighted by the lumosity function (a standardized model of the sensitivity of the human eye to different wavelengths, also known as the luminous efficiency function).

A typical human eye responds to electromagnetic waves with wavelengths between 390 and 700 nm. This corresponds to 430 to 790 THz ($\lambda v = c$, where $\lambda$ is the wavelength, $v$ is the frequency, and $c$ is the speed of light).

#### Plenoptic Function
The plenoptic function attempts to fully describe a scene by giving the radiance as a function of a number of variables. The plenoptic function is typically not used in practice computationally. A common formulation:

$$
L(x,y,z,\theta,\phi,t,\lambda)
$$

gives radiance $L$ at a given position, $(x, y, z)$, in a certain direction, $(\theta, \phi)$, at a certain time $t$ for a certain frequency $\lambda$. Sometimes other variables are considered (e.g., polarization angle).

#### References
- Wikipedia for [irradiance](http://en.wikipedia.org/wiki/Irradiance) and [radiance](http://en.wikipedia.org/wiki/Radiance)
- [Radiometry Definitions](http://www.astrohandbook.com/ch14/radiation_defs.pdf)
- [Radiance Equation](http://physics.stackexchange.com/questions/52959/radiance-equation)
- [Radiance Theorem](http://www.physics.csbsju.edu/370/photometry/etendue.pdf)
- [Lighting in Physics vs Graphics](http://mrl.nyu.edu/~dzorin/cg05/lecture08.pdf)
- [Plenoptic Function](http://en.wikipedia.org/wiki/Light_field)
