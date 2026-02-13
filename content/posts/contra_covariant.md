---
title: "The Necessity of Contravariant and Covariant Tensors"
date: "2026-01-01"
lastmod: "2025-01-10"
author: "Max"
weight: 1
showToc: true
TocOpen: false
# bibfile: "/fourier/citation.json"
draft: true
hidemeta: false
comments: false
description: ""
canonicalURL: "https://canonical.url/to/page"
disableHLJS: true
disableShare: false
disableHLJS: false
hideSummary: false
searchHidden: false
ShowReadingTime: true
ShowBreadCrumbs: true
ShowPostNavLinks: true
ShowWordCount: true
ShowRssButtonInSectionTermList: true
UseHugoToc: true
cover:
    image: ""
    alt: "<alt text>"
    caption: "<text>"
    relative: false
    hidden: true 
editPost:
    URL: "https://github.com/<path_to_repo>/content"
    Text: "Suggest Changes"
    appendFilePath: true
---
## A Common Mathematical Representation in Physics: Contravariant and Covariant Tensor
The terms contravariant and covariant tensor often arise in the field of physics. It captures the necessity of two different kind of physical quantities that transform differently under rotation. However, most physics textbook breify mention tensor analysis as a mathematical tool with certain rules but lacking explanation on the necessity of introducing such mathematical tools in the particular setting. It is important in the study of physics because we are interested in how a physical quantity transform in different coordinate system, curvillinear coordinate system to be particular. The importance will be further elaborated in the subsequent section. Following that, I will provide few examples of the necessity of introducing contravariant and covariant tensor from some common study in physics, most notably the study of relativity and unitary representation. 




## The Invariant of Equation of Motion under different Observers



### Classical action
The equation of motion is expected to be invariant under certain transformation. The equation that describes a moving train will have the same form if observe from different position on ground or in different viewing angle. It will be out of the ordinary if changing the observation will change the motion of the train. This reasoning would imply the following relation
M(x prime) = M(x)
where x is the coordinate system of the observer and x prime is the transformed coordinate system. 

It is well-known that the transformaton required for the physical quantities to be unchanged is characterized by different transformation in classical mechanics and relativistic mechanics; the first is by Galilen transformation while the second is characterized by Lorentz transformation.

### Relativistic action 

The form of transformation restrict the form of Lagrangian and changes the form of equation of motion in an essential way. The classical action for free particle:  S(dot q) = int(1/2mv2) leads to mv = constant.
relativistic action: S(dot q) = int(ds) leads to the rest mass energy and reduces to classical equation of motion in low velocity limit. In the Lagrangian formulation of mechanics, Galilean transformation implies the form of the Lagrangian that is invariant under rotation in R3, whereas Lorentz implies the form of Lagrangian that is invariant under Lorentz transform.

###

## Examples

### The general metric tensor
When evaluating the length element of a particular space, it does not restrict to the physical length in the usual Cartesian coordinate, where the infinitesimal distance squared is represented by 
ds2 = dx2 + dy2 + dz2
In general, the length element must satisfy this criteria:


Here we introduce the metric tensor to evaulate length in different coordinate system.
In Cartesian system R3, the length of the vector is calculated by the familiar ds2= dx2+ dy2 + dz2. But that implies a unit vector that is orthongoal and independent under rotation. TO see this, suppose in spherical coordinates

So, a more general way of expressing the length element with the metric tensor. The equality of the partial derivative only works in cartesian coordinates. Because the gradient of a vector and the coefficient transform in a different ways, we identify these two quantities with the name contravariant and covariant vectors.

Hence, the more general metric tensor consists of either upper and lower indices corresponding to the transformation of covariant and contravariant vector. For historical resson and notation simplicity, these indices are represented with upper and lower indices.

### Second example: Representaiton of Unitary group
This application of contravariant and covariant appears in quantum mechanics in the study of special unitary group SU(N).

With the unitary definition of det(U) and U+U = 1, the invariant from complex group is now differed from rotation, where complex conjugate is transform differently because they have different definition of invariant. In seeking the tensor representaiton of the special unitary group, 

#