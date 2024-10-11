---
title: "Before you read: Here are the updates"
date: "2024-10-11"
lastmod: "2024-10-11"
author: "Max"
weight: 1
showToc: true
TocOpen: false
bibfile: "/read_me/citation.json"
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
    image: "/read_me/cover_page.jpg"
    alt: "<alt text>"
    caption: "<text>"
    relative: false
    hidden: false
editPost:
    URL: "https://github.com/<path_to_repo>/content"
    Text: "Suggest Changes"
    appendFilePath: true
---

## Updates

### 2024/10/11



<!-- Liouvill theory studies the probability density flow in a phase space. For a non-disspative system such as the classical Hamiltonian, the probability density follows the continuity equation. For such system it follows three properties and will be ergodic (follow microcanonical ensemble). However, most quantum system will not be ergodic: the probability density will not fully explore the phase space.  -->
- __Distinguishing Microscopic and Emergent Properties__
Microscopic theories, whether classical or quantum mechanics, do not inherently lead to an increase in entropy. Entropy is an emergent property, arising from the complex interactions of many-body systems. In some cases, we can simplify the behavior of weakly perturbed systems by adding microscopic interactions. However, in strongly interacting systems, complexity increases, often requiring nonlinear models. Yet, we can still derive meaningful rules at the phenomenological level to describe emergent patterns. This gives rise to two approaches in physics: starting from microscopic principles with approximations, or abstractly analyzing relevant parameters and order. When these two methods align, the gap between fundamental laws and complex phenomena is bridged.



- __Phenomenological Approach__
The phenomenological approach to studying physical systems is a key concept I learned from Landau’s method of deriving free energy. This approach unifies theories based on symmetries and order parameters, leading to the concept of universality: systems can be categorized by their universal classes, regardless of their microscopic details.


In the coming weeks, I will explore several topics to further investigate these theories and applications:




1. [__Phases transition in Random Graphs__](https://htsod.github.io/posts/small_world/)

Fundamental physics often deals with elegant, simplified models. However, complex problems, such as those in social sciences, require a different approach. For example, the "six degrees of separation" observation, made in the early 20th century, wasn't fully understood until more recently. By adjusting the length and time scales, we can study the relevant interactions leading to emergent connectivity patterns. In this blog, I will use both computational methods and RG group method to demonstrate qualitative effects and quantiative measure of random graphs.


2. [__Ginzburg-Landau Eqaution and its Applications__](https://htsod.github.io/posts/gl_eqn_application/)

Landau's work on second-order phase transitions reveals that transitions between different phases involve symmetry changes that cannot occur smoothly. This leads to the concept of criticality at the phase transition point, governed by the diverging correlation length. The Ginzburg-Landau equation provides a framework for understanding such transitions, using a free energy functional that respects symmetry. In this blog, I will demonstrate phase transitions in different physical systems within this framework.



3. [__Comparative Study on Tight-binding and Free electron Model__](https://htsod.github.io/posts/free_tight/)

In the absence of potential, many-body electrons will follow the Fermi-Dirac distribution. By making suitable assumption about the temperature dependence of the chemical potential we were able to derive a expression relating to the thermodynamics properties of free electron. Interstingly, the states of the electrons at zero temperature will populate a Fermi-sphere. In this blog, I will explore breifly how these Fermi sphere affect the properties of physical materials such as metal.

Tight-binding model takes another approach. It assumes that the atoms equilibrate into lattice structure where each eletron is confined. The calculation leads to a modify Hamiltonian with a new ground state energy and a hopping state energy. I want to dive into the symmetry breaking aspects of the calculation and how this led to the prediction of phonon in a lattice model.



## Disclaimer

### 2024/10/10

1. The author has made every effort to reference materials accurately. If any content is inappropriate or uncited, please contact via email (liangtianming7@gmail.com) for corrections.

2. All content is under the MIT license and may be freely used for non-commercial purposes.

3. This blog uses AI tools for grammar correction; however, no generative content has been used.



### Non-Markovian Record

### 2024/10/10

- This blog started as a personal space to organize my study notes on various physics topics, most of which I’ve learned independently. Below is a list of past blogs in chronological order:


[__Solving the Ising Model__](https://htsod.github.io/posts/ising_model/)

My first blog, motivated by the discovery of a continuous phase transition in the two-dimensional Ising model, which is absent in the one-dimensional case. This led me to investigate the role of dimensionality in critical phenomena.



[__Renormalization Group method with Examples__](https://htsod.github.io/posts/rg_method/)

During a group project on logistic mapping as a mathematical model for double period bifurcations, I encountered the renormalization group (RG) method for studying dynamic stability. This blog demonstrates RG calculations on the one-dimensional Ising model, though the RG method in logistic mapping remains purely qualitative.


[__Top-down derivation of Electromagnetism__](https://htsod.github.io/posts/maxwell_eqns_derive/)

While reading Zee's book on group theory, I became fascinated with his other works on quantum field theory and gravitation. One particularly interesting concept is how Maxwell's equations can be derived, assuming no prior knowledge of gravity or electromagnetism, simply by understanding how spacetime works. This blog reproduces that derivation.

[__Variational Method as Approximation to Simplify Quantum Circuit__](https://htsod.github.io/posts/NISQ/)

I’ve been captivated by the idea of quantum computation, but as I delve deeper into the topic, I find myself becoming more skeptical. Though some algorithms theoretically require far fewer resources than their classical counterparts, they demand extremely precise quantum hardware. Given the limitations imposed by the uncertainty principle, we are only closing the gap between the controllable and precision limits. During this "NISQ" period, approximation solutions are being proposed. This blog focuses on the variational method for simplifying quantum circuits. (ongoing)


[__Fourier Transforms: A Group Theoretic Perspective__](https://htsod.github.io/posts/fourier/)

Group theory and representation theory are elegant frameworks. From the perspective of group theory, Fourier transforms are simply representations of the \\(Z_{n}\\) group or U(1) group in the continuous limit. The orthogonality relations in Fourier analysis are reflected in the character orthogonality of irreducible representations. Despite the symplicity, it opens up a possiblity to explore the orthogonality in other symmetries group.



[__Quantum Mechanical Historian__](https://htsod.github.io/posts/wave_particle/)

In my undergraduate study of quantum mechanics, the motivations behind the Schrödinger wavefunction and operator approaches were often overlooked. Von Neumann's mathematical analysis unified both approaches using the concept of a Hilbert space and introduced the density matrix, a key tool in studying quantum information. This blog covers these foundational ideas.











## Recommended Reading List

### Group Theory
1. Group theory in a Nutshell for Physicsts


2. Symmetry, Broken Symmetry, and Topology in Modern Physics: A First Course


3. Mathematical Methods for Physics: An Introduction to Group Theory, Topology and Geometry



4. Group Theory: Application to the Physics of Condensed Matter




### Statistical Mechanics


1. Statistical Mechanics: Entropy, Order Parameters, and Complexity



2. An introduction to the Ginzburg–Landau theory of phase transitions and nonequilibrium patterns




### Quantum Mechanics

1. Introduction of Quantum Mechanics


2. Mathematical Foundations of Quantum Mechanics



3. 量子力学教程



4. Quantum Mechanics An Experimentalist's Approach



5. Quantum Computation and Quantum Information






### Condensed Matter




## Reference

{{< bibliography cited >}}