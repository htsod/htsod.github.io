---
title: "Top-down derivation of Electromagnetism"
date: "2023-06-19"
lastmod: "2024-01-06"
tags: ["Gravity", "Electromagnetism", "Special Relativity", "General Relativity", "Review"]
author: "Max"
showToc: true
TocOpen: false
draft: false
weight: 0.8
bibfile: "./maxwell_derive/citation.json"
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



Relativity's action principle constrains how light and matter interact within spacetime. By placing the potential term either inside or outside the action square root, we derive the familiar interactions of gravity or electromagnetism between matter. This post offers a top-down view of electromagnetism's derivation from these fundamental principles.



## Relativistic Action

To incorporate relativistic effects, the action is written as:

$$ S = -m \int{ \sqrt{-\eta_{\mu \nu} dx^{\mu} dx^{\nu}} } = -m \sqrt{dt^{2} - d\vec{x}^{2}} $$

In comparison, the classical action with an added potential term is:

$$ S_{NR} = \int{ dt \left(\frac{1}{2}m \left( \frac{d\vec{x}}{dt} \right)^{2} - V(x) \right) } $$

To include interactions in relativistic spacetime, we consider adding the potential term either outside or inside the square root.

- Outside the square root
$$ S = -\int{ [-m \sqrt{-\eta_{\mu \nu} dx^{\mu} dx^{\nu} } + V(x)dt] } $$

By promoting the scalar potential to the vector potential and completing the symmetry, we get:

$$ S = -\int{ [-m \sqrt{-\eta_{\mu \nu} dx^{\mu} dx^{\nu} } + A_{\mu}(x)dx^{\mu}] } $$

- Inside the square root
$$ S = -\int{ -m \sqrt{\left(1+\frac{2V}{m}\right)dt^{2} - d\vec{x}^{2}}  } $$

Here, symmetry and promotion to Lorentz invariance give us the curved spacetime version:

$$ S = -m \int{ \sqrt{-g_{\mu \nu} dx^{\mu} dx^{\nu}} } $$

## Maxwell's Equations in Hindsight

Extremizing the action and requiring the variation to vanish gives:

$$ \delta S = \delta \left(-m\int{d\tau \sqrt{-\eta_{\mu \nu} \frac{dx^{\mu}}{d\tau} \frac{dx^{\nu}}{d\tau}} + \int{d\tau A_{\mu}(x(\tau)) \frac{dx^{\mu}}{d\tau}}} \right) $$

- First term

$$ \delta \left( -m\int{d\tau \sqrt{-\eta_{\mu \nu} \frac{dx^{\mu}}{d\tau} \frac{dx^{\nu}}{d\tau}} } \right) = m \int{d\tau \eta_{\mu \nu} \frac{dx^{\mu}}{d\tau}\frac{dx^{\nu}}{d\tau} = -m \int{d\tau \eta_{\mu \rho} \frac{d^{2}x^{\mu}}{d\tau ^{2}}dx^{\rho}}}$$


- Second term

$$ \delta \int{d\tau A_{\mu}(x) \frac{dx^{\mu}}{d\tau}} = \int{d\tau \left[A_{\mu}\frac{d\delta x^{\mu}}{d\tau} + \delta_{\nu}A_{\mu}\delta x^{\nu} \frac{dx^{\mu}}{d\tau}\right]} $$


$$ \int{d\tau A_{\mu}(x)\frac{d\delta x^{\mu}}{d\tau}} = -\int{d\tau \frac{dA_{\mu}(x)}{d\tau}\delta x^{\mu}} = -\int{d\tau \delta_{\nu} A_{\mu}(x) \frac{dx^{\nu}}{d\tau} \delta x^{\mu}}$$

$$ \delta \int{d\tau A_{\mu}(x) \frac{dx^{\mu}}{d\tau}} = \int{d\tau \left( \delta_{\mu}A_{\nu} - \delta_{\nu}A_{\mu} \right) \frac{dx^{\nu}}{d\tau} \delta x^{\mu}} $$

Defining the antisymmetric tensor field

$$ F_{\mu \nu}(x) \equiv \delta_{\mu}A_{\nu}(x) - \delta_{\nu}A_{\mu}(x) $$

Thus, the variation of the action becomes:

$$ \delta S = \int{d\tau \left( -m \eta_{\mu \rho} \frac{d^{2}x^{\mu}}{d\tau^{2}} \delta x^{\rho} + F_{\mu \nu}\frac{dx^{\nu}}{d\tau} \delta x^{\mu} \right)} $$

Define

$$ F_{\nu}^{\mu} \equiv \eta^{\mu \lambda} F_{\lambda \nu} \Rightarrow F_{\nu}^{\mu} \frac{dx^{\nu}}{d\tau} \eta_{\mu \rho} \delta x^{\rho} $$

This results in the Lorentz force law in tensor form:

$$ m\frac{d^{2}x^{\mu}}{d\tau^{2}} = F_{\nu}^{\mu}(x) \frac{dx^{\nu}}{d\tau}  $$

### Fields and Particle Interaction

The action for multiple particles becomes:

$$ S = -\sum_{a} m_{a} \int{d\tau_{a} \sqrt{-\eta_{\mu \nu} \frac{dx_{a}^{{\mu}}}{d\tau_{a}} \frac{dx_{a}^{\nu}}{d\tau_{a}} }} + \sum_{a} e_{a} \int{d\tau_{a}A_{\mu}(x_{a}(\tau_{a}))\frac{dx_{a}^{\mu}}{d\tau_{a}}} $$

The field **\\(A_{\mu}\\) covers the entire space, but each particle couples to it locally with strength \\( e_{a} \\) which we recognize as the particle's charge.


## Gauge Invariant

Focusing on the second term \\( \int{A_{\mu}(x)dx^{\mu}} \\)

This is invariant under the gauge transformation:

$$ A_{\mu}(x) \rightarrow \tilde{A_{\mu}} = A_{\mu}(x) + \delta_{\mu}  \Lambda (x) $$

The variation of this term vanishes:

$$ \int{\delta_{\mu} \Lambda (x) dx^{\mu}} = \int_{\tau_{i}}^{\tau_f}d \tau \frac{dx^{\mu}}{d\tau}\delta_{\mu} \Lambda(x) = \int_{\tau_{i}}^{\tau_{f}} d\tau \frac{d}{d\tau} \Lambda (x)=0$$

From this, we conclude that \\( A_{\mu}(x) \\) contains non-physical degrees of freedom that can be removed by choosing an appropriate  \\( \Lambda (x) \\). Varying this gauge-invariant action leads to \\( F_{\mu \nu}\\) which is itself gauge-invariant.



Squaring \\( F_{\mu \nu} \\) gives the Lorentz scalar:
$$ \int{d^{4}x \left( -\frac{1}{4}F^{\mu \nu} F_{\mu \nu} \right)} $$

This is Maxwell's Lagrangian:

$$ \mathcal{L} = -\frac{1}{4}F^{\mu \nu} F_{\mu \nu} $$

## Maxwell's Lagrangian
 
Varying the Lagrangian results in Maxwell's equations in free space:

$$ \delta_{\mu} F^{\mu \nu} = 0 $$

In the presence of currents, we obtain:

$$ \delta_{\mu} F^{\mu \nu}(x) = -J^{\nu}(x)$$

## Maxwell's Equation in Vector Forms

For \\( \nu = 0  \\), 
$$ \delta_{i}F^{i0}=-\delta_{i} E^{i} = - \vec{\triangledown} \cdot \vec{E} = \rho  $$

For \\( \nu = 3  \\), 
$$ \delta_{\mu}F^{\mu 3} = \delta_{0}F^{03} + \delta_{1}F^{13} + \delta_{2}F^{23} = \delta_{0}E^{3} - \delta_{1}E^{2} + \delta_{2}B^{1}$$

$$ \vec{\triangledown} \times \vec{B} = \frac{\delta \vec{B}}{\delta t} + \vec{J}$$

## A Fun Game to Play

Exploring the relationship between spacetime and matter interaction offers exciting possibilities. Imagine if our spacetime structure changes:

$$\eta_{\mu\nu} \rightarrow \eta_{\mu\nu}^{\prime}$$


What new interactions or fields could emerge? It's a compelling thought experiment, highlighting the beauty of the theory's flexibility.




## Bibliography

{{< bibliography >}}



