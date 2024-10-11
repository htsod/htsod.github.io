---
title: "Study Notes on Statistical Mechanics"
date: "2023-06-11"
lastmod: "2024-09-11"
weight: 1
author: "Max"
tags: ["Statistical Mechanics", "Review"]
showToc: true
TocOpen: false
draft: true
bibfile: "./statistical_mechanics/citation.json"
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
    hidden: true # only hide on current single page
editPost:
    URL: "https://github.com/<path_to_repo>/content"
    Text: "Suggest Changes" # edit text
    appendFilePath: true # to append file path to Edit link
---


## Entropy,  Order Parameters and Complexity

### What is statistical mechanics?
*Ensemble*
How to connect microscopic law with macroscopic phenomenon? The concept of ensemble provides a method that connects the two. Treating a large system(macroscopic) as collection of similarly prepared systems(microscopic).


*Entropy*
Entropy to be defined as a function of probability distribution \\(p_{i}\\) must satisfy the following:
1. Maximum at \\(\frac{1}{p_{i}}\\)
2. Minimum at \\(p_{i} = 0 , S = 0\\)
3. Minimum at \\(p_{i} = 1, S = 0\\)

The unique function that satisfies the above requirement is \\(S=-p_{i}\log{p_{i}}\\), giving rise to the information interpretation of entropy. From the first requirement, we could see that entropy is maximized when the distribution is more even, or in other words, more mixed, leading to the disorder interpretation of entropy. If entropy is zero, the probability distribution is either \\(0\\) or \\(1\\). Then, if the value of entropy is the only thing we know about the system, we could easily reproduce the system distribution with certainty. As entropy increases, it will be less likely that we could reproduce the system from scratch, making the system irreversible. And this gives rise to the reversibility interpretation of entropy. 



*Quantum Statistical Mechanics*
Quantum mechanics is the law that governs microscopic evolution and particles type. Whereas in everyday life where temperature is sufficiently high, we do not have to worry about quantum mechanical effect. The underlying reason is that the asymetrical states that are created by quantum mechanics effect is thermalized to equally occupied states. So, in sufficiently high temperature, we could treat particles as ideal gas that have no internal structure. 

The reverse is true. As we cool object, the states might settle into one of the asymetrical states and shows bewildering behavior. 


*Monte Carlo*
It allow the computer to find ensemble averages in systems far too complicated to allow analytical evaluation.



*Phases*
Different phases are categorized by different symmetries. Matters with different symmetries cannot cross by perturbation theory. So far, there are two recognized way for matter to transit from one state to another. Namely the abrupt phase transition and continous phase transition.



*Fluctuations and correlations*
How a system reponse is related to the correlation function of the system. THe correlation function measure the alignment of state within the system and it condensed the information more compactly. 

*Abrupt phase transition*
By the name suggests, it happens when there is a discontinouity at the first derivative of the free energies because the phase boundary must have equal free energy but above and below it is a different free energy function. 



*Criticality*
The second type of phase changes is by continuous phase transition. This happens when the symmetries of matter change. At critical temperature where the transition occurs, the system fluction is singular at the zero frequency vibration mode. At this point of transition, the system is self-similar. This phenomena is universal across different physical system. 



### Random walks and emergent properties
Random walks is defined as taking a random steps in a given manifold randomly for every time step. This simple microscopic evolution rule 



### Temperature and equilibrium

**Why do systems approach equilibrium?**. When one of my classmates asked this question in a highschool chemistry class, I was astonished by how naturally we took in the concept that system eventually reaches equilibrium but never asked why. This inquiry of equilibrium had stucked in my head for quite a while until reading upon a statistical mechanics textbook which offers a elegant explanation to equilibrium. The short answer is that **the states of equilibrium is much more probable than some other non-equlibrium states for microcanonical ensembles**. One could imagine a system dynamics as flow in a network diagram with each nodes representing a possible state. 

<!-- ![System_model](/statistical_mechanics/system_evolve.JPG) -->

 As time proceeds, the flow on each node has probability to evolve into some other states and will eventually reach a time-independent state which we called it equilibrium. Formally speaking, when we say a system has reached a state of equilibrium, we mean that **the observable of the time average and the ensemble averages equal**. Alternatively, no matter how the flow initially biased towards a particular set of states, as time proceeds, it eventually becomes uniform across all the possible states (a microcannonical ensemble). Noting that the above diagram has a equal number of nodes at the start and at the end. This is because the system is isolated and the total possible states remain unchanged. 

To illustrate how the above model could be used to explain why a microcannonical system will reach equilibrium eventually,imagining mixing two types of particles with a total particle number of N. Initially, \\(\frac{N}{2}\\) of particle A and \\(\frac{N}{2}\\) of particle B each occupies half of the box with a partition in between. 

<!-- ![particle_partition](/statistical_mechanics/particle_partition.JPG) -->

Ignoring the momentum degree of freedom, the possible states are the volume configuration \\( \Omega_{unmixed} = \frac{((V/2)^{N/2})^{2}}{(N/2)!(N/2)!} = \frac{1}{2^{N}} \frac{(V)^{N}}{(N/2)!(N/2)!} \\). The nominator states that there is \\( (V/2)^{N/2} \\) ways of configurations allowed for \\(N/2\\) particle in a volume \\(V/2\\). The denominator states that in those indistinguishable \\(N/2\\) particle A and \\( N/2 \\) particle B, they can freely exchange their states without changing the configuration of the system. Now by removing the partition, a total of N particle could fill the entire volume. The mixed state becomes \\( \Omega_{mixed} = \frac{(V)^{N}}{(N/2)!(N/2)!} =  2^{N} \Omega_{unmixed} \\). Provided N is a large number of order \\( \sim 10^{23} \\). The mixed state is much more likely than the unmixed state by simply out numbering the possibles state of an un mixed state. Hence, as the system evolves (by how we do not care), it is much more likely to fill the mixed states than the unmixed state reaching equilibrium.

Framing this mixing process with the network model we defined above. Before mixing, we have \\( \Omega_{unmixed} \\) states to start with. As we remove the partition, the system is no longer isolated and as a result the total number of states have increased to \\( \Omega_{mixed} = 2^{N} \Omega_{unmixed} \\). Because the flow is distributed uniformly across all possible states in equilibrium, the mixed states are far more likely than the unmixed states. 

<!-- ![mixing](/statistical_mechanics/mixing.JPG) -->

Then, how likely the system will remain in the non-equlibrium unmixed state after mixing? With a crazy small probability of \\(P_{unmixed} = \frac{1}{2^{N}} \\). Take \\( N = 10 \\), \\( P_{unmixed} = 0.001 \\). Not to mention that N usually of order \\( \sim 10^{23} \\)

## Phase-space dynamics and ergodicity

One might consider further and ponder what kind of system will eventually reach equilibrium where macroscopic observable remain statistically fixed except for rare thermal fluctuation. Or equivalently, for what kind of system does its time average behavior and ensemble behavior equal. Let's start with a most common system.  A classical \\(N\\) particle system in which its evolution is descirbed by its Hamiltonian. \\( H(P,Q) = \sum_{\alpha}{p_{\alpha}^{2}/2m_{\alpha} + U(q_{1}, ..., q_{3N})} \\). We want to study how Hamiltonian evolution will modify the \\(\rho(q_{1},...,q_{3N},p_{1},...,p_{3N})\\) \\(6N\\) dimensional phase space density distribution.

Consider the total time derivative on \\(\rho\\)

$$ \frac{d \rho}{dt} = \frac{\partial \rho}{\partial t} + \vec{\nabla} \cdot \vec{J} $$

where \\(\vec{J} = (\rho \dot{P}, \rho \dot{Q}\\)) is the phase space probability current. For probability to conserve, total derivative of \\(\rho\\) must vanishes giving the continuity equation

$$ \frac{\partial \rho}{\partial t} = -\sum_{\alpha=1}^{3N}{\frac{\partial \rho}{\partial q_{\alpha}}q_{\alpha} + \frac{\partial q_{\alpha}}{\partial q_{\alpha}}\rho_{\alpha} + \frac{\partial \rho}{\partial p_{\alpha}}p_{\alpha} + \frac{\partial p}{\partial p_{\alpha}}\rho_{\alpha}} $$

So far we did the discussion is completely general to the \\(6N\\)-dimensional system. Observing the terms above we see two of them are rather strange looking \\( \frac{\partial q_{\alpha}}{\partial q_{\alpha}}\rho_{\alpha} \\) and \\( \frac{\partial p}{\partial p_{\alpha}}\rho_{\alpha} \\). Indeed, for Hamiltonian system these term cancel out leading to the Liouville's theorem

$$ \frac{\partial \rho}{\partial t} = -\sum_{\alpha=1}^{3N}{\frac{\partial \rho}{\partial q_{\alpha}}q_{\alpha} + \frac{\partial \rho}{\partial p_{\alpha}}p_{\alpha} = 0} $$

For folks that familiar with fluid dynamics this is like saying fluid only flow around but cannot be compressed.(changing its density by going somewhere in space) In this case, the \\(6N\\)-dimensional phase space behaves as the incompressible fluid; some states become less likely only by "flowing" its likeliness to its neighbor states.



<!-- {{< cite "lebowitz1973modern">}} -->

## Entropy



## Free energies

Ever being involved in drawing a color ball from a mysterious box and winning a price only when a certain color or combination are drawn? Statistical mechanics from another perspective is fairly similar to this concept of drawing color ball except that some functional constraints have been applied to the color ball ensuring that this model is compatible with some physical process in interest.

In microcanonical ensemble, the states of the system are labelled by its position and momentum, which together gives the position and momentum dependent energy \\(E_{s} = \frac{p^{2}}{2m} + U(r)\\) of that state. 


## Quantum statistical mechanics

Ongoing



## Bibliography

{{< bibliography cited >}}