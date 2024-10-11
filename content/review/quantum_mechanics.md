---
title: "Study Notes on Quantum Mechanics"
date: "2023-07-21"
lastmod: "2024-01-05"
tags: ["Quantum Mechanics", "Review"]
author: "Max"
bibFile: "./qm_rules/citation.json"
showToc: true
TocOpen: false
draft: true
bibfile: "./qm_history/citation.json"
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
searchHidden: false
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


## Preview

If one struggle to convince themselves the sanity of quantum mechanics, the best advice to them is to move on and put yourself into practical question and work out the math. That's the core spirit of this reivew note about. All we need to know is the necessary axioms which were verified long ago, and then to make use of these axioms to draw meaningful observation on the theory itself or practical problems to draw in more intuition.

## Axioms of Quantum Mechanics: Get to the points



### Rule 1: Hilbert space
__A dynamical system corresponds to a Hilbert space in such a way that a definite state of the system corresponds to a definite ray in the space.__

- a state \\(\left| u \right\rangle \\)if it corresponds to the ray in the direction of vector \\(\left| u \right\rangle\\)
- complex factor and phase factor don't change its state
- linear combination of definite state produces another possible state
- linear superposition principle
- relative phase between states matters

**An isolated quantum mechanical system can evolve with time unitarily. The evolution is continuous and causal.**



<!-- _Time dependent Schroedinger equation_
$$ H \left| u(t) \right\rangle = i\hbar \frac{\delta \left| u(t) \right\rangle }{\delta t} $$

$$ i\hbar \delta_{t} \left[ U(t, t_{0})\left|u(t_{0}) \right\rangle \right] = HU(t, t_{0}) \left| u(t_{0}) \right\rangle$$

Hamiltonians at different times commute

$$ \frac{\delta}{\delta t} U(t, t_{0}) = -\frac{i}{\hbar} H U(t, t_{0}) $$


Providing that H does not depend on time
$$ U(t, t_{0}) = e^{\left[-\frac{i}{\hbar}\int_{t_{0}}^{t}H(t^{\prime})dt^{\prime}\right]} $$

if H does not commute at differen time, expansion about identity

$$ e^{\left[-\frac{i}{\hbar}\int_{t_{0}}^{t}H(t^{\prime})dt^{\prime}\right]_{t}}  $$ -->

### Rule 2: Time evolution
__An isolated quantum state evolves continously and casually in time by a unitary operator U.__


$$ \left| u(t) \right\rangle = U(t, t_{0}) \left | u(t_{0}) \right\rangle $$

where \\( U(t, t_{0}) = e^{\left[-\frac{i}{\hbar}\int_{t_{0}}^{t}H(t^{\prime})dt^{\prime}\right]}\\)

Starting from this axiom, one can derive the Schrodinger equation which we shall show.

Let \\( t>t_{0} \\), then unitary evolution \\(U(t, t_{0})\\) of the wavefunction \\( u(t_{0})\\) to \\(u(t)\\) can be stated as the following

$$ \left| u(t) \right\rangle = U(t, t_{0})\left| u(t_{0}) \right\rangle$$

In Lie's approach, we try to cover the unitary transformation with infinitestimal change from the identity, hence infinitestimal change of unitary operation can be written as 

$$ U(t_{0} + \delta t, t_{0}) = I + K \delta t $$

From the definition of unitary, \\( U \\) must satisfy \\( U^{\ast}U = I \\), which yields

$$ U^{\ast}U = (I + K)^{\ast}(I+K)= I + K^{\ast} + K = I $$

$$ K^{\ast} = -K  $$
Requiring , $K$ to be antihermitian. We could as well write \\(K = iH\\) and \\( H \\) to be hermitian.

To cover the time evolution up to \\(t\\), we carry the infinitestimal operations up to \\(N\\) times, and taking \\( N \\) to be infinte.

$$ U(t) = \lim_{N\rightarrow \infty}(U(t/N))^{N}= \lim_{N\rightarrow \infty}\left(I - iH \frac{t}{N}\right)^{N}= e^{-iHt} $$

Now we could rewrite the evolution of the wavefunction to derive the Schrodinger equation,

$$ U\left| u(t) \right\rangle = \left( I - \frac{i}{\hbar} H \delta t \right) \left| u(t) \right\rangle = \left | u(t+\delta t) \right\rangle $$

$$ H\left|u(t) \right\rangle = i\hbar \frac{\delta \left|u(t)\right\rangle}{\delta t} $$

As promised.

### Rule 3: Observables
__Each observable of a system is associated with a Hermitian operator on the Hilbert space of the system. We assume that the eigenstates of each observable form a complete set.__

To get a intuitive picture of this axiom, we first note that the statistical properties of the wavefunction allows us to weight the contribution of the wavefunction on to a obervable. Stating the the statistical properties:

- Probability distribution sum to one

$$ \int^{\infty}_{-\infty}{\psi^{\ast}(x) \psi(x)dx } = 1 $$

- Given observable \\( O(x) \\),

$$ \int^{\infty}_{-\infty}{\psi^{\ast}(x)O(x) \psi(x)dx } = \left< O(x)\right> $$

Writing in Dirac notation, \\( \left< O(x)\right> = \left\langle \psi \right| O(x) \left| \psi \right\rangle \\).

Hermitian conjugate both side and subtract it from its originall form 

$$ \left\langle \psi \right| O^{\dagger}(x) - O(x) \left| \psi \right\rangle = \left< O(x)\right> - \left< O(x)\right> = 0$$

Hence, \\( O^{\dagger}(x) = O(x)\\) is hermitian.

The second statement is saying that for any set of commuting observables, \\(A_{1}, A_{2},... \\), the system can be expressed as the superposition of \\( \psi = \sum_{a}{a_{a}\psi_{a}} \\)


### Rule 4: Measurement
__The result of any given measurement of an observabble is an eigenvalue of the corresponding Hermitian operator.__


### Rule 5: Statistical 
__The average \\( \bar{A} \equiv \left\langle A \right\rangle \\) of a number of measurements of \\(A\\) is__

$$ \bar{A} \equiv \left\langle A \right\rangle = \frac{\left\langle u|A| u \right\rangle}{\left\langle u|u \right\rangle} $$

- With \\( u \\) an eigenstate of \\( \Rightarrow \left| u \right\rangle = \left| \phi_{i} \right\rangle \\), \\( A \left| \phi_{i} \right\rangle = \lambda_{i} \left|\phi_{i} \right\rangle \\)

$$ \bar{A} = \frac{\left\langle \phi_{i}|A| \phi_{i} \right\rangle}{\left\langle \phi_{i}|\phi_{i} \right\rangle} = \lambda_{i} \Rightarrow  \triangle^{2} = \left\langle A^{2} \right\rangle - \left\langle A \right\rangle ^{2} $$

- With \\( u \\) not an eigenstate of A

$$ \left| u \right\rangle = \sum_{i} \left| \phi_{i} \right\rangle \left\langle \phi_{i} \right| \left| u \right\rangle $$

\\(u\\) in basic of \\( \phi_{i} \\)

$$ \bar{A} = \sum_{i, j} \frac{\langle u | \phi_{i} \rangle \langle \phi_{i} | A | \phi_{j} \rangle \langle \phi_{j} | u \rangle}{\langle u | u \rangle} = \frac{\sum_{i} \lambda_{i}|\langle u | \phi_{i}\rangle |^{2}}{\sum_{i} | \langle u | \phi_{i} \rangle |^{2}}$$


$$ \bar{A} = \frac{\sum_{i} P_{i} \lambda_{i}}{\sum_{i} P_{i}} $$


### Rule 7: Wavefunction collapse
 **A measurement of observable \\( A \\) resulting in eigenvalue \\( \lambda_{i} \\) projects the state vector from \\( |u\rangle \\) to that subspace of the Hilbert space associated with \\( \lambda_{i} \\). If the eigenvalue is nondegenerate, the subspace is just a single eiggenstate \\( \phi_{i} \\) associated with \\( \lambda_{i} \\). If \\( |u\rangle \\) is already an eigenstate of \\( A \\), it's not changed by the measreument. If \\( u \\) is not an eigenstate of \\( A \\), then in the nondegenerate case it 'collapses' to \\( \phi_{i} \\) with probability \\( |\langle u | \phi_{i} \rangle  |^{2} \\)**

> Rule2 and Rule 7 macroscopic objectification problem

> If \\( [A, B] = 0 \\), then \\(A\\) and \\(B\\) are simultaneously diagonalized by the same unitary transformation

> If A, B, C, ... form a complete set of commuting (compatible) observables then we know everythig there is to know about the steate of the system when we specify the eigenvalue of each of A, B, C, ... for that state

This is called a complete set of quantum numbers for that state

$$ \frac{d\langle A \rangle}{dt} = \left(\frac{ d \langle u |}{dt}\right)  A |u\langle  +  \langle u | A  \left(\frac{d |u \rangle}{dt}\right) +  \langle u | \left(\frac{\delta A}{\delta t}\right) | u \rangle  $$

Employing \\( H|u\rangle = i\hbar \delta_{t} |u\rangle \\) and \\( \langle u | H = -i \hbar \delta_{t} \langle u | \\)

$$ \frac{d\langle A \rangle}{dt} = \frac{i}{\hbar} \left[ \langle u | HA | u \rangle - \langle u | AH | u \rangle \right] + \left\langle u \left| \frac{\delta A}{\delta t} \right| u \right\rangle $$

$$ = \frac{i}{\hbar} \langle u | [A, H] | u \rangle + \left\langle u \left| \frac{\delta A}{\delta t} \right| u \right\rangle  $$

Carry out unitary transformation into a new basic in which \\( u \\) is a constant.

$$ S(t, t_{0}) = U^{\dagger}(t, t_{0}) = e^{\left[ -\frac{i}{\hbar}\int_{t_{0}}^{t} H(t^{\prime}) dt^{\prime} \right]^{\dagger}} $$

Giving us the Heisenberg equation for uncertainty

$$ A^{\prime} = SAS^{\dagger} = U^{\dagger}AU \Rightarrow \frac{dA^{\prime}}{dt} = \frac{1}{i\hbar} [A^{\prime}, H] + \frac{\delta A^{\prime}}{\delta t}$$

## Probability is conserved by some kind of flow 

- Probability conserved by flow
- The evolution of closed quantum system is deterministic
- Feynman Dirac sum over all paths

To further elaborate the rule 2 of the quantum axioms, that is, a isolated quantum mechanical system will evolve unitarily, we will look at the wavefunction representation of the quantum states.

Recall 
$$ \left| u(t) \right\rangle = U(t, t_{0}) \left | u(t_{0}) \right\rangle $$



Given the Schrodinger equation, nameing it _eqn 1_

$$ -i\hbar \frac{\partial}{\partial t} \psi = (-\frac{\hbar^{2}}{2m} \nabla ^{2} + V) \psi $$

and its complex conjugate and naming it _eqn 2_

$$ -i\hbar \frac{\partial}{\partial t} \psi^{\ast} = (-\frac{\hbar^{2}}{2m} \nabla ^{2} + V) \psi^{\ast} $$

Multiply Schrodinger equation from the left by \\( \psi^{\ast} \\) and multiply the complex conjugate of the Schrodinger equation form the left by \\( \psi \\) and subtracting these two expression yields

$$ i\hbar \frac{\delta}{\delta t}(\psi^{\ast}\psi) = -\frac{\hbar^{2}}{2m} \left(\psi^{\ast} \nabla ^{2}\psi + \psi \nabla ^{2} \psi^{\ast} \right) $$
$$ = -\frac{\hbar^{2}}{2m} \nabla \cdot \left(\psi^{\ast} \nabla \psi + \psi \nabla  \psi^{\ast} \right) $$

then in a closed integration, by Gauss theorem, the right hand side could be converted into surface integral as the following

$$ i\hbar \frac{\delta}{\delta t} \int_{\tau}{\psi^{\ast}\psi d\tau} = -\frac{\hbar^{2}}{2m} \oint_{S}{\left(\psi^{\ast} \nabla \psi + \psi \nabla  \psi^{\ast} \right) \cdot d\vec{S}} $$

let \\( \rho = \psi^{\ast}\psi \\) and \\(\vec{j}= \psi^{\ast} \nabla \psi + \psi \nabla  \psi^{\ast}  \\), then equation becomes the familar continuity equation in fluid dynamics

$$ \frac{\delta}{\delta t} \rho + \vec{\nabla} \cdot \vec{j} = 0$$

For \\( \rho = \psi^{\ast} \psi \\), we have a fairly good intuition about it, however, the flow term is bit more tricky.


## Bibliography

{{< bibliography >}}