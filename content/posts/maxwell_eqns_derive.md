---
title: "Bottom-up derivation of Maxwell's Equations"
date: "2023-06-19"
lastmod: "2024-02-12"
tags: ["Gravity", "Electromagnetism", "Special Relativity", "General Relativity", "Review"]
author: "Max"
showToc: true
TocOpen: false
draft: false
weight: 1
bibfile: "./static/maxwell_derive/citation.json"
hidemeta: false
comments: false
description: ""
canonicalURL: "https://canonical.url/to/page"
disableHLJS: true # to disable highlightjs
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
    image: "" # image path/url
    alt: "<alt text>" # alt text
    caption: "<text>" # display caption under cover
    relative: false # when using page bundles set this to true
editPost:
    URL: "https://github.com/<path_to_repo>/content"
    Text: "Suggest Changes" # edit text
    appendFilePath: true # to append file path to Edit link
---


Can the order of physics discovery be differernt? From Zee Einstein's Gravity in a nutshell, a hypothetical situation is proposed: a far away civilization where life was evolved from modular planet happen to understand the constancy of light before understanding electromagnetism. A brilliant physicist then could derived E.M. and gravity from the correct conception of space and time.

The derivation was casted in a simplisitc manner: By placing the potential term either inside or outside the action square root, we obtain the familiar interactions of gravity or electromagnetism, with major concepts left unexplained. This blog will follow closely to the derivation of the book, with more elaborated reasoning to each steps and assumption made.

While reading the book, two questions are worthy of pursuing

1. why outside corresponding to EM and inside corresponding to gravity?

2. In derivation of Maxwell Equations, how does addition of a spatially dependent potential term to the action relates to the properties of equation of motion?

Hopfully by answering these two question in this blog, the bottom-up derivation of Electromagnetism and Gravitation would gain more clarity and fun.

<!-- So, from the book if a alien civilization has the correct mindset of space and time still hard to predict the present of gravity without truely observing the effects. Einstein's idea of principle of equivalence draws the connection of non-inertial frame to a field of force is such a big leap in theoretical physics. -->


## Relativistic Action

<!-- i. elaborate the action principle to the equation of motion classical
equation of motion: how the mechanical state of a particle evolves through time. In which it must follow that the equation of motion must be independent on the observer. What draws the difference between classical mechanics and relativistic mechanics is that the transformation of observer in different frames is different. The first one is characterized by Galilen transformation the second is characterized by Lorentz transformation. Hence, they will have different form of action.
ii. additive of action -->

The action principle states that the condition of extremizing the action, which is defined by a integrating a functional along the particle trajectories, the mechanical variables that statisfy such conditions follow the equation of motion.

$$ S_{c} = \int^{b}_{a}{L(q, \dot{q}, t) dt} \tag{1}$$

where \\(L\\) is defined as the Lagrangian. And the Euler-Lagrange equation solves the extremizing condtions of the action:

$$ \frac{d}{dt} \frac{\partial L}{\partial \dot{q}} = \frac{\partial L}{\partial q} \tag{2}$$


### Galilean and Lorentz Transformation
The equation of motion must not depend on the observers; observers from different inertial frame of reference must observe the same physical phenomena. This restricts the form of the Lagrangian.

It is well-known that classical mechanics is built upon Galilean transformation, that under Galilean transformation the equation of motion remains essentially the same. The Galilean transformation is defined as:

$$ x = x^{\prime} + Vt \tag{3}$$
$$ t = t^{\prime} \tag{4}$$

The same goes with the relativistic action principle, except that the relativistic mechanics now permits Lorentz transformation to incorporate the contancy of speed of light. The Lorentz transformation is given as:

$$ x = \frac{x^{\prime} + \frac{V}{c}ct^{\prime}}{\sqrt{1- \frac{V^{2}}{c^{2}}}} \tag{5}$$
$$ ct = \frac{\frac{V}{c}x^{\prime} + ct^{\prime}}{\sqrt{1- \frac{V^{2}}{c^{2}}}} \tag{6}$$

Under Lorentz trnsformation, the spacetime interval will stay the same. One could verify by substitution to the following:

$$ ds^{2} = dx^{2} + dt^{2} = dx^{\prime2} + dt^{\prime2} = ds^{\prime2} \tag{7}$$
### Lagrangian for a free particle
Then, the minimizing of the action would be invariant under the transformation stated above. For example, in classical mechanics, the Lagrangian of the free particle is expressed as:

$$ L = \frac{1}{2}m v^{2} \tag{8}$$

With Galilean transformation to another inertia frame:

$$ L^{\prime} = L((v+V)^{2}) = \frac{1}{2}m(v^{2} + 2v\cdot V +V^{2}) \tag{9}$$
with \\(V\\) being a constant velocity relating the two inertia frames. The above transformed Lagrangian can written as the original Lagrangian with a total derivative term - a term that vanishes with extremizing the action:
$$ L^{\prime} = \frac{1}{2}mv^{2} + \frac{d(mr\cdot V + \frac{1}{2}mV^{2}t)}{dt} \tag{10}$$

Hence the classical form of Lagranigian \\(L = \frac{1}{2}mv^{2}\\) results in the same equation of motion with Galilean transformation. (cite landau mechanics) {{<cite LandauLifshitzMechanics>}}

The relativistic Lagrangian must be leading to the invariant of equation of motion under Lorentz transformation. For example, the spacetime interval \\(ds\\):
$$ S_{rel} = -\alpha \int^{b}_{a}{ds} \tag{11}$$
where \\(\alpha\\) is a constant to be determined.

For a given spacetime interval, we could always find an inertia frame that the spatial position between the two events remain the same. Then, we can write \\(ds^{2} = c^{2}d\tau^{2}\\) where \\(\tau\\) is defined as the _proper time_, the time interval in which two events happen in the same spatial position. And the action becomes:

$$ S_{rel} = -\alpha \int^{b}_{a}c{d\tau} \tag{12}$$

From the Lorentz transformation, \\(dt = \frac{ d\tau^{\prime}}{\sqrt{1- \frac{V^{2}}{c^{2}}}}\\), which gives the action of the form:

$$ S_{rel} = -\alpha \int^{b}_{a}c{dt\sqrt{1- \frac{v^{2}}{c^{2}}}} \tag{13}$$

In the classical limit, the relativistic Lagrangian must recover the form of the classical Lagrangian \\(\frac{1}{2}m v^{2}\\) in the coefficient of \\(v^{2}\\). By expanding the terms of the intergrand:
$$ \sqrt{1- \frac{v^{2}}{c^{2}}} \approx\alpha c- \alpha c \frac{1}{2} \frac{v^{2}}{c^{2}} \tag{14}$$
Hence, \\(\alpha = mc\\). 

Using the four-vector representation to express the relativistic Lagrangian,\\(ds = \sqrt{\eta_{i j} dx^{i} dx^{j}}\\), where \\(\eta_{i j}\\) is the flat spacetime metric \\((-1, 1, 1, 1)\\) with the Einstein summation convention, the relativistic action could now be written in an elagant form:


$$ S_{rel} = -mc^{2} \int_{a}^{b}{ds} = -mc^{2} \int^{b}_{a}{ \sqrt{\eta _{ij} dx^{i}dx^{j}}} \tag{15}$$

## Interaction with the Fields

In Zee's book of gravity, a potential term is added either inside or outside the square root of the relativistic Lagrangian to take interaction into consideration. Stating the argument from the book:

- Outside the square root
$$ S = -\int{[-m\sqrt{-\eta_{i j} dx^{i} dx^{j} } + V(x)dt]} \tag{16}$$

By promoting the scalar potential to the vector potential and completing the symmetry, we get:

$$ S = -\int{ [-m \sqrt{-\eta_{i j} dx^{i} dx^{j} } + A_{i}(x)dx^{i}] } \tag{17}$$

- Inside the square root
$$ S = -\int{ -m \sqrt{\left(1+\frac{2V}{m}\right)dt^{2} - d\vec{x}^{2}}} \tag{18}$$

Here, symmetry and promotion to Lorentz invariance give us the curved spacetime version:

$$ S = -m \int{ \sqrt{-g_{i j} dx^{i} dx^{j}}} \tag{19}$$

But this is rather a bold guess. How do we know there are exactly two interaction in nature that corresponding to that two terms: one embodies through the metric \\(g_{ij}\\), one embodies as a four vector integration \\(\int{A_{i}(x)dx^{i}}\\). And how can we tell which one is Electromagnetism and which one is Gravity? 


### Relativistic view of particle and field

Suppose a rotating rigid body, and we assigned reference frames along the radius vector from the center of the rotation. They would agree on the radial distance measurement because the velocity is tangential to the radial vector. However, they would evalue different circumference as compare to the rest frame and hence different circumference to radius ratio to \\(2 \pi\\), which is contradicting to the assumption that difference reference frame must observe the same physics. In reality, the rigid body must compress and stretch in a complex way to account for the relativistic effect, hence not any more rigid. We arrive at the conclusion that particle in the relativistic sense must not have any spatial extension but only a point coordinate in the space. And the particle is affected by the present of other particles in the form of fields prevail through the space. In this sense, we are treating field and particles as separate identities.

### Electromagnetic field

So, the field interaction as an separate term of the action, which also has to be invariant under Lorentz transform and be a scaler, with the infinitesimal element being a four-vector, the integrand has to be another four-vector to contract forming a scaler, which gives the interaction term outside of the square root:
$$ S = -\int{ [-m \sqrt{-\eta_{i j} dx^{i} dx^{j} } + A_{i}(x)dx^{i}] } \tag{20}$$

We know this does not correspond to gravity. Because from classical mechanics, equation of motion under gravity is affected by both the mass that generate the field and the mass inside the field. But where else can we place the potential term? Aha! Inside the square root where there is coefficient of mass.

However, without knowing the properties of gravity, that its strength is related to the mass of both entities, it will be a great mental leap from the classical action to the general relativistic action. To see this, we compare the Electromagnetism action with the classical action, \\( S = -\int{( \frac{1}{2}m v^{2} - V(x))dt}\\), they are strikingly similar in that they both have a term that corresponding to free particle which leaves the equation of motion unchanged when under the transforms of their respective kind. And they also contain a spatially dependent potential term in the action, but in the classical case, the effects of field never present in the term of free particle. Therefore, it will be a great leap from including a potential term in side the squre root.

### Gravity as inertial frame

From a historical point of view, it was Einstein who made the observation that gravity is indistinguishable for the observers under acceleration to observers being in a non-inertial frame, which suggests that in near approximity, the mathematics structure of force under gravity must be the same as observer in a non-inertial frame. This is known as the principle of equivalence.

Then how the non-inertial frame corresponding to addition of potential term inside of the square root.

$$ ds^{2} = c^{2}dt^{2} - dx^{2} -dy^{2} -dz^{2}$$

Say for example, we are transforming to a uniformly rotating frame with angular velocity of \\(\Omega\\), the length element in the Minikowski space might not be in the same form of that in the flat spacetime. Instead
$$ x = x^{\prime} \cos{\Omega t} - y^{\prime} \sin{\Omega t}$$
$$ y = x^{\prime} \sin{\Omega t} + y ^{\prime} \cos{\Omega t}$$
So in general, a non-inertial frame could be encoded in the functional form of the metric.
$$ ds^{2} = [c^{2} - \Omega (x^{\prime 2} + y^{\prime 2})]dt^{2} - dx^{\prime 2} - dy^{\prime 2} - dz^{\prime 2} + 2\Omega y^{\prime} dx^{\prime}dt - 2\Omega x^{\prime }dy^{\prime} dt $$

$$ ds^{2} = g_{i j}dx^{i}dx^{j} $$

Justifying the addition of potential term inside the square roots.

EM force preserve the structure of the classical view of force hence as adding a potential term outside of the square root. Whereas gravity took in the form of a non-inertial frame hence inside the square root. That answers the first question: why outside corresponding to EM and inside corresponding to gravity?



## Lorentz Force Equation in Vector Form

From the action principle, we extremize the action. The only equation satisfies the extremizing condition when the variation is arbitary is the equation of motion with the given Lagrangian. In classical mechanics, the Euler-Lagrangian method leads to the Newton's equation of motion. Now we working with the following relativistic action:

$$ S = -\int{ [-m c\sqrt{\eta_{i j} dx^{i} dx^{j} } + \frac{e}{c}A_{i}(x)dx^{i}] } $$

Consider case for flat time metric, we have the following simplification \\( \eta_{i j} dx^{i} dx^{j} = dx_{j} dx^{j} \\)

### Lorentz force equation in tensor form


Extremizing the relativistic action:

$$ \delta S = -\delta \int{ [m c^{2}\sqrt{ dx_{j} dx^{j} } + \frac{e}{c}A_{i}(x)dx^{i}] } $$

Since we have \\( d\tau = dx_{j} dx^{j} \\), the first term becomes

$$ \delta \int{ m c \sqrt{ dx_{j} dx^{j} }} = \int{ mc \frac{dx_{j}  d \delta x^{j}}{d\tau} } $$

since \\(\frac{dx_{j}}{d\tau} = u_{j}\\), where \\(u_{j}\\) is the compoenent of the four velocity, we have the following:

$$ mc\int{ u_{j} d \delta x^{j}} = mc\left(u_{j}x^{j}\right)| + mc\int{ du_{j} \delta x^{j}} $$

Extremizing the the second term:



<!-- $$  \left( -mc^{2}\int{d\tau \delta \sqrt{\eta_{i j} \frac{dx^{i}}{d\tau} \frac{dx^{j}}{d\tau}} } \right) = m \int{d\tau \eta_{i j} \frac{dx^{i}}{d\tau}\frac{dx^{j}}{d\tau} = -m \int{d\tau \eta_{i \rho} \frac{d^{2}x^{i}}{d\tau ^{2}}dx^{\rho}}}$$ -->



$$ \delta \int{ A_{i}(x) dx^{i}} = \int{d\tau \left[A_{i}\frac{d\delta x^{i}}{d\tau} + \delta_{j}A_{i}\delta x^{j} \frac{dx^{i}}{d\tau}\right]} $$

Using by parts to the first term to find the common terms of the above intergrand:

$$ \int{d\tau A_{i}(x)\frac{d\delta x^{i}}{d\tau}} = -\int{d\tau \frac{dA_{i}(x)}{d\tau}\delta x^{i}} = -\int{d\tau \delta_{j} A_{i}(x) \frac{dx^{j}}{d\tau} \delta x^{i}}$$

Since the repeated indexes are being sum together, interchanging \\(i\\) and \\(j\\) leads to the following:

$$ \delta \int{d\tau A_{i}(x) \frac{dx^{i}}{d\tau}} = \int{d\tau \left( \delta_{i}A_{j} - \delta_{j}A_{i} \right) \frac{dx^{j}}{d\tau} \delta x^{i}} $$

Defining the antisymmetric tensor field

$$ F_{i j}(x) \equiv \delta_{i}A_{j}(x) - \delta_{j}A_{i}(x) $$

Thus, the variation of the action becomes:

$$ \delta S = \int{d\tau \left( mc \frac{du_{j}}{d\tau} \delta x^{j} + \frac{e}{c}F_{i j}\frac{dx^{j}}{d\tau} \delta x^{i} \right)} $$

<!-- Define

$$ F_{j}^{i} \equiv \eta^{i \lambda} F_{\lambda j} \Rightarrow F_{j}^{i} \frac{dx^{j}}{d\tau} \eta_{i \rho} \delta x^{\rho} $$ -->

This results in the Lorentz force law in tensor form:

$$ mc\frac{du^{j}}{d\tau} = \frac{e}{c}F^{ji} u_{i}  $$



### Definition of the field from the equation of motion

In an attempt to express the force law into the vector form, we express the four-vector potential \\(A_{i}\\) in terms of two parts, which include a time piece and a spatial piece: \\(A_{i} = [\phi_{0}(\vec{x}, t), \vec{A}(\vec{x}, t)]\\). With this notation, we can expand the Lorentz force law along the x axis:

$$ \frac{dp_{x}}{dt} = \frac{e}{c} \left[ (\delta_{x} A_{y} - \delta_{y}A_{x})v_{y}+  (\delta_{x}A_{z} - \delta_{z}A_{x} ) v_{z} + (\delta_{x}\phi_{0} - \delta_{0}A_{x})  \right] $$

$$ \frac{dp_{x}}{dt} = \frac{e}{c} \left[ (\nabla \times A)\vert_{x} v_{y}  -(\nabla \times A)\vert_{y} v_{z} + (\nabla \phi_{0})\vert_{x} - \frac{dA_{x}}{dt}  \right] $$

Writing out the Lorentz force law in vector form:

$$ \frac{d \vec{p}}{dt}  = - \frac{e}{c} \frac{\partial \vec{A}}{\partial t} - e \nabla{\phi_{0}} + \frac{e}{c} \vec{v} \times (\nabla \times \vec{A}) $$

They split into terms with explicit dependent on \\(v\\) and terms without explicit denpendent on \\(v\\), which motivates the definition of the following vector field:

$$ \vec{E} = \frac{1}{c} \frac{\partial \vec{A}}{\partial t} +  \nabla{\phi_{0}} $$

$$ \vec{B} = \frac{1}{c}(\nabla \times \vec{A}) $$

where \\(\vec{E}\\) is defined to be the electric field and \\(\vec{B}\\) is defined to be the magnetic field. Expresssing the Lorentz force in terms of the fields:

$$ \vec{F} = -e\vec{E} + e\vec{v}\times\vec{B}$$

The Lorentz force law tells us that the force a charge will experience under the present of electromagnetic field. The force will be directed in the direction of the electric field regardless of velocity of the charge. The magnetic field will act in the direction perpendicular to both the velocity and the magnetic field, and it is propotional to the magnitude of the velocity.

But this does not tell the whole story of electromagnetism. How do the fields arise in the first place? 



## The Complete Action of the Electromagnetic Field with Moving Charges

Field is a physical quantity. If the Lorentz force law holds, then one can measure the fields from the motion of the charge and it will be uniquely determined. That suggests that the E.M. action we have earlier, which only includes the term of free particle and the field particle interaction, must also include the action of the field only.


$$ S = S_{f} + S_{m} + S_{mf} $$

where \\(S_{m}\\) and \\(S_{mf}\\) are the action of the free particle and action of interaction resepectly. The \\(S_{f}\\) is the action of the field and is the objective of this section to search for its form.

<!-- To answer these question, we need a addition term in the action that involve the field only. And make include more than one charge and for mathematical convinience make charge a continuous distribution in space. -->

### Terms with Field



$$ S = -\sum{mc\int{ds}} + -\sum{\frac{e}{c} \int{A_{k} dx^{k}}} + S_{f}$$

Some properties of the fields:
1. Uniquely determined
2. Follows superposition


From the first condition, the field Lagrangian must not involve explictly the potential terms since they are subject to the Gauge degree of freedom and is not unique. But at the same time, the field is determined from the potential hence must involve the potential terms implicitly. One suitable candidiate is the antisymmetric tensor field \\(F_{ij} = \delta_{i}A_{j} - \delta_{j}A_{i}\\). It is a \\(4 \times 4\\) matrix, where each term is the E.M field pointing at \\(x, y, z\\) direction. Assume 

$$ F_{0j} = (E_{x}, E_{y}, E_{z})$$

$$ F_{ij}\vert_{ij\neq 0} = (B_{x}, B_{y}, B_{z})$$

<!-- From the second condition, we know that the Lagrangian must be a Lorentz invariant quantity but the antisymmetry field tensor is a second-rank tensor.


The third condtion implies that summation of field will also be the solution to the same equation of motion. We know that linear differential equation has this property as well.  -->

From the experimental facts of the field, the field must follow from the superposition of the fields. That suggests the field produced by a collecton of charges are the summation of the fields from each individual along. This is equivalent to say that summation of fields also satisfies the equation of motion of a single field. We know that a linear differential equation satisfy this criteria hence the Lagrangian of the field equation must be quadratic in nature. Additionally, the field must be uniquely determine since it connects directly to the force, therefore it must contain the field tensor but not the potential. Lastly, the Lagrangian must be a scaler that is invariant under Lorentz transformation. That leaves us the choice:

$$ S_{f} = \frac{-1}{16\pi c}\int{F_{ik}F^{ik}dVdt} $$

So, the action of the elctromagnetic field can be expressed as:

$$ S = -\sum{mc\int{ds}} + -\sum{\frac{e}{c} \int{A_{k} dx^{k}}} + \frac{-1}{16\pi c}\int{F_{ik}F^{ik}dVdt} $$

### Continuous charge distribution


The motion of charge or motion of collective charges are more conviently express in density term rather than a summation.

Let the charge density defined by \\(\rho = \sum_{a}{\rho_{a} \delta (r- r_{a}) }\\)

$$ de dx^{i} = \rho dV dx^{i} = \rho dV dt \frac{dx^{i}}{dt} = j^{i} dV dt$$

where we define the four current quantity \\(j^{i} = (c\rho, \rho v)\\)

Rewriting the action:

$$ S = -\sum{mc\int{ds}} + -\frac{1}{c} \int{\rho A_{k} dVdt \frac{dx^{k}}{dt}} + \frac{-1}{16\pi c}\int{F_{ik}F^{ik}dVdt}$$

$$ S = -\sum{mc\int{ds}} + -\frac{1}{c} \int{j^{j} A_{k} d\Omega} + \frac{-1}{16\pi c}\int{F_{ik}F^{ik}d\Omega}$$


## Maxwell's Equations in Hindsight

With the complete form of the action in hands, we are only one step away from the four Maxwell equations. 

Variation of the action:

$$ \delta S = -\int{\frac{1}{c}\left[ \frac{1}{c} j^{i}\delta A_{i}  + \frac{1}{8\pi} F^{ik}\delta F_{ik} \right] d\Omega} = 0 $$

Write \\(F_{ik} = \frac{\partial A_{k}}{\partial x^{i}} - \frac{\partial A_{i}}{\partial x^{k}}\\) and interchanging the index \\(F_{ik} = -F_{ki}\\)

$$ \delta S = - \int{\frac{1}{c} \left[ \frac{1}{c} j^{i}\delta A_{i} - \frac{1}{4\pi} F^{ik} \frac{\partial}{\partial x^{k}} \delta A_{i} \right] d\Omega}$$

Simplify using integration by parts. The surface term vanishes:

$$ \delta S = - \int{\frac{1}{c} \left[ \frac{1}{c} j^{i} - \frac{1}{4\pi} \frac{\partial}{\partial x^{k}} F^{ik}   \right]\delta A_{i} d\Omega} - \frac{1}{4\pi c} \int{F^{ik} \delta A_{i} dS_{k}} = 0$$

The equation of motion of collective charges and current \\(j^{i} = (c\rho , \rho v)\\):

$$ \frac{1}{c}j^{i} - \frac{1}{4\pi}\frac{\partial F^{ik}}{\partial x^{k}} = 0$$

which leads to the equation of motion with the present of four current:

$$ \frac{\partial F^{ik}}{\partial x^{k}} = -\frac{4\pi}{c} j^{i}$$

<!-- ### Uniqueness of vector field

1. Show that there are four independent equation from the tensor field equation.

To uniquely determine Fij, four equations involve. Three-rank antisymmetry tensor. Contraction of indices reduce it to only one indice hence four equations.

This also agrees with Helmhotz's theorem which states that but boundary conditions are added.

2. Helmholtz's theorem
> A vector field is uniquely specified by giving its divergence and its curl within a simply connected region and its normal components on the boundary.

Divergence and curl on magnetic field and electric field add up to four equations in total. -->

### First pair of Maxwell equations

The first pair of Maxwell's equations can be from vector operation on the fields definition. With

$$ E = \frac{1}{c} \frac{\partial A}{\partial t} + \nabla \phi_{0} $$

$$ B = \nabla \times A$$

Divergence of \\(B\\) vanishes because divergence of any curl vanishes.

$$ \nabla \cdot B  = \nabla \cdot (\nabla \times A) = 0$$


Curl of \\(E\\) gives the following because curl of any gradient vanishes.

$$ \nabla \times \vec{E} = - \frac{1}{c} \frac{\partial \vec{B}}{\partial t}$$

In integral forms:

$$ \int_{A}{(\nabla \times \vec{E}) \cdot d\vec{a}} = \oint_{S}{\vec{E} \cdot d\vec{r}} = -\frac{1}{c}\frac{\partial}{\partial t} \int_{A}{\vec{B} \cdot d\vec{a}} $$

$$ \int_{V}{(\nabla \cdot \vec{B}) d v} = \oint_{A}{\vec{B} \cdot d\vec{a}} = 0 $$

### Second pair of Maxwell equations

By Helmhotz's theorem, well-behaved vector fields can be uniquely determined by its divergence and curl. But it is not the case when taking divergence of \\(E\\) and curl of \\(B\\) because the potential does not simply vanishes in this case. For examples:

$$ \nabla \cdot \vec{E} = \nabla (\nabla \phi_{0}) = \nabla^{2}\phi_{0}$$

$$ \nabla \times \vec{B} = \nabla \times (\nabla \times \vec{A})$$

Addition information is needed to remove the potential dependent, which brings us to the equation of motion in the present of four current:

$$ \frac{\partial F^{ik}}{\partial x^{k}} = -\frac{4\pi}{c} j^{i}$$

We inumerate all possibilities:

$$ \frac{\partial F^{0k}}{\partial x^{k}} = \nabla \cdot \vec{E} = -\frac{4\pi}{c} c\rho = -4\pi \rho$$


$$ \frac{\partial F^{i0}}{\partial x^{0}} = \frac{\partial \vec{E}}{\partial t} = - \frac{4\pi}{c} \vec{j} $$

$$ \left. \frac{\partial F^{ij}}{\partial x^{j}} \right\vert_{ij\neq 0} = \nabla \times \vec{B} = -\frac{4\pi}{c} \vec{j} $$

Combining the last two equations:

<!-- 
What are the difference between the first pair of maxwell equations and the second pair of maxwell equations?

The first pair tells us how the variantion of the two fields relate together. They will be related in the same way with or without the present of charge or current.

The second pair equations tell us that there are sources of electric charge. And current generate  -->


$$ \nabla \times \vec{B} = \frac{1}{c}\vec{j} + \frac{1}{c} \frac{\partial \vec{E}}{\partial t} $$

$$ \nabla \cdot \vec{E} = \frac{\rho}{\epsilon_{0}}$$
<!-- 
## Gauge Invariant

Focusing on the second term \\( \int{A_{i}(x)dx^{i}} \\)

This is invariant under the gauge transformation:

$$ A_{i}(x) \rightarrow \tilde{A_{i}} = A_{i}(x) + \delta_{i}  \Lambda (x) $$

The variation of this term vanishes:

$$ \int{\delta_{i} \Lambda (x) dx^{i}} = \int_{\tau_{i}}^{\tau_f}d \tau \frac{dx^{i}}{d\tau}\delta_{i} \Lambda(x) = \int_{\tau_{i}}^{\tau_{f}} d\tau \frac{d}{d\tau} \Lambda (x)=0$$

From this, we conclude that \\( A_{i}(x) \\) contains non-physical degrees of freedom that can be removed by choosing an appropriate  \\( \Lambda (x) \\). Varying this gauge-invariant action leads to \\( F_{i j}\\) which is itself gauge-invariant.



Squaring \\( F_{i j} \\) gives the Lorentz scalar:
$$ \int{d^{4}x \left( -\frac{1}{4}F^{i j} F_{i j} \right)} $$

This is Maxwell's Lagrangian:

$$ \mathcal{L} = -\frac{1}{4}F^{i j} F_{i j} $$

## Maxwell's Lagrangian

Varying the Lagrangian results in Maxwell's equations in free space:

$$ \delta_{i} F^{i j} = 0 $$

In the presence of currents, we obtain:

$$ \delta_{i} F^{i j}(x) = -J^{j}(x)$$

## Maxwell's Equation in Vector Forms

For \\( j = 0  \\), 
$$ \delta_{i}F^{i0}=-\delta_{i} E^{i} = - \vec{\triangledown} \cdot \vec{E} = \rho  $$

For \\( j = 3  \\), 
$$ \delta_{i}F^{i 3} = \delta_{0}F^{03} + \delta_{1}F^{13} + \delta_{2}F^{23} = \delta_{0}E^{3} - \delta_{1}E^{2} + \delta_{2}B^{1}$$

$$ \vec{\triangledown} \times \vec{B} = \frac{\delta \vec{B}}{\delta t} + \vec{J}$$
 -->



## Revision (2026/01/04 ~ 2026/02/11)

__Topics added:__

- The effects of the transformation on the action principle - on how they lead to different equation of motion, both classically and relativistically

- Justify why force of gravity must have its potential in the square root.

- Define electromagnetic field from the Lorentz law

- Introduce action for field. Action for sum of charges and current. Defining four current.


__Still need:__

- Non-uniqueness of potentials

- Explaination on the antisymmetry tensor \\(F_{ij}\\)

- Uniquess of field. Helmotze theorem.

- Different between the first pair and second pair of Maxwell's equations

- Implication of this approach

<!-- 1. How does this approach in derivation of Maxwell Equations of adding a spatially dependent potential term to the action relates to the properties of equation of motion?

iii. question of particles, must have no spatial extension which leads to separate action terms.


Another side topic is how statistical mechanics and relativistic mechanics diverge (understanding of the proof from Landau). Implications: capacitance, the constancy of charge distribution will remain the same from different frame of reference. Same goes with inductant.

## Revision(2026/01/31)
1. Terms with field
2. Continuous charge distribution
3. Rearrange the topics

Next:
uniqueness of vector field from counting independent indices of tensor
concept of dual tensor
Understand Helmholtz's decomposition -->



## Bibliography

{{< bibliography >}}



