---
title: "Wave Equation Approach and Matrix Method Derivation of the Schrodinger Equation"
date: "2024-03-24"
lastmod: "2024-03-24"
tags: ["Blog Post", "Quantum Mechanics"]
author: "Max"
weight: 5
showToc: true
TocOpen: false
draft: false
bibfile: "./static/qm_history/citation.json"
hidemeta: false
comments: false
description: "Both the Schrödinger wave equation and the Heisenberg matrix method are fundamental approaches to quantum mechanics, each offering a unique perspective. To unify them, we recognize that while they approach the problem differently, they ultimately describe the same quantum phenomena."
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

<!-- ![comic_1](/qm_history/comic1.JPG) -->


## The Wave and Particle Dispute
The contradiction between classical physics and microscopic phenomena is one of the most fascinating episodes in the history of science, reshaping our fundamental understanding of waves and particles. To grasp the weirdness of __wave-particle duality__, let’s start with a simple analogy.

Imagine shooting bullets at a wall with two equally spaced gaps. As expected, the bullets passing through each gap will behave independently, forming two distinct patterns on a measurement panel behind the wall. Each pattern would look like a Gaussian distribution centered around the corresponding slit. The resulting measurement would be a straightforward combination of these two distributions:

$$ \rho_{12}(x) = \rho_{1}(x) + \rho_{2}(x) $$ 

This is because the events are independent, and the densities of bullet impacts simply add up.

Now, let’s replace the bullets with waves—perhaps water waves or sound waves—propagating through the same two slits. Experimentally, something entirely different occurs. Instead of the waves passing independently through the slits, they interfere with each other, producing a distinctive __interference pattern__ on the panel.

If we describe the waves mathematically, let \\( h_{1}(x)e^{i2\pi \nu t} \\) and  \\( h_{2}(x)e^{i2\pi \nu t} \\) represent the waves passing through the first and second slits, respectively. When both slits are open, the total wave is: 
$$ (h_{1}(x) + h_{2}(x))e^{i2\pi \nu t} $$ 

The intensity of this combined wave is given by the square of the total wave function:

$$ I_{12} = |h_{1}(x) + h_{2}(x)|^{2} = |h_{1}(x)|^{2} + |h_{2}(x)|^{2} + h_{1}(x)h_{2}^{\ast} + h_{1}(x)^{\ast}h_{2} $$

This reveals something new: the presence of interference terms. Unlike the case with bullets, where the results simply add, waves interact, creating regions of constructive and destructive interference:

$$ I_{12}(x) = I_{1}(x) + I_{2}(x) + I_{interference}(x) \neq I_{1}(x) + I_{2}(x) $$

### The Wave-Particle Mystery
This wave-particle duality extends beyond classical waves. Experiments with electrons—and more recently, with larger molecules like \\( C_{60} \\) (the largest known entity to show this duality)—reveal that quantum particles exhibit both wave-like and particle-like behaviors. As the famous physicist Richard Feynman put it:

> ... a phenomennon which is impossible, _absolutely_ impossible, to explain in any classical way, and which has in the heart of quantum mechanics, ... We can not make the mystery go away by 'explaining' how it works. We will just tell you how it works.

This duality isn’t the only strange aspect of quantum mechanics. Quantum effects are also evident in __blackbody radiation__ and __spectroscopy__. In the case of blackbody radiation, it became necessary to assume that energy levels are discrete to match experimental data. In spectroscopy, quantum theory governs the probability of transitions between these discrete energy levels.

### Two Paths to Quantum Mechanics: Schrödinger and Heisenberg

Faced with these puzzling phenomena, physicists developed two different mathematical frameworks to describe quantum mechanics. The first was the matrix mechanics approach, formulated by Heisenberg, Born, and Jordan. The second was Schrödinger’s wave mechanics, which, despite starting from a different perspective, led to the same numerical results.

For the sake of clarity in our ongoing discussion of wave-particle duality, we will first explore Schrödinger’s wave equation, which builds directly on the wave-like nature of quantum systems. Heisenberg’s matrix mechanics, while equally valid, feels more like the "black magic" of theoretical physics—it’s powerful but requires more effort to follow. We’ll dive into that after setting the stage with Schrödinger's more intuitive approach.

{{<cite "2008量子力学教程">}}


## The "Wave Equation" Approach to Quantum Mechanics: Abandoning Preconceived Notions

<!-- First we note Hamiltonian function of action \\( W \\),

$$ W = \int_{t_{0}}^{t}(T-V)dt $$

it satisfies the Hamiltonian partial differential equation,

$$ \partial W/ \partial t + (1/2m)\[(\partial W / \partial x)^{2} + (\partial W / \partial y)^{2} + (\partial W / \partial z)^{2}\] + V(x, y, z) = 0$$

The solution is of the form

$$ W = -Et + S(x, y, z) $$

Hence the Hamiltonian pde can be written as

$$ |gradW| = \[ 2m(E-V) \]^{\frac{1}{2}} $$

The significant of the above can be understood as the action propagate as constant energy 'wavefont' with velocity

$$ u = E/\[ 2m(E-V) \]^{\frac{1}{2}} $$

in the direction of normal to the energy surface

$$ dn = dW_{0}/ \[ 2m(E-V) \]^{\frac{1}{2}} $$

Though Hamiltonian mechanics only describes particles, the action itself demonstrates some 'wave properties' that is quite different from a particle point of view. Say for example the velocity \\( u \\) is quite different from the particle velocity \\( v = \[ 2(E-V)/m \]\\).

So far is already a well-known properties long before Schrodinger. What really makes the change is the vec attempt to suggest that the action modifies properties of the wavefunction, leading to the an ansatz:

$$ \psi = A\exp{(iW/K)} = A\exp{\[i( -Et/K + S(x, y, z)/K )\]} $$

Further guessing \\(K = \hbar \\) making the unit right.

Now we are fully equiped to somehow guess the form of the wave equation. 

Taking time with of the wave solution yields

$$ \frac{\partial \psi}{\partial t} = -i\frac{E}{\hbar} \psi $$


$$ \frac{\partial^{2} \psi}{\partial x^{2}} = -\frac{1}{\hbar^{2}}\left(\frac{\partial S}{\partial x}\right)^{2}\psi= -\frac{p_{x}^{2}}{2m\hbar^{2}}+V(x)\psi  $$

Rearranging -->


Louis de Broglie proposed that every particle possesses a wavelength, which is related to its wave vector \\( |\vec{k}| = 2\pi \lambda \\).

For a free particle, the energy is given by \\( E = p^{2}/2m \\). We can relate energy to angular frequency \\( \omega \\) using \\( w=E/\hbar \\) connect the wave vector \\( |\vec{k}| \\) to momentum through \\( \vec{k} = \vec{p}/\hbar \\). Schrödinger found inspiration in these ideas as he sought to explain wave-particle duality.

His journey toward the formulation of the Schrödinger equation began with a question from P. Debye:

> You speak about waves, but where is the wave equation?

Historically, Schrödinger derived the wave function from the classical action principle. However, we will focus directly on the wave function ansatz to derive the Schrödinger equation.

### Deriving the Schrödinger Equation

Consider a free particle with energy \\( E = \frac{p^{2}}{2m} \\). According to de Broglie's principle, this particle has an angular frequency \\( w = \frac{E}{\hbar} \\) and a wave vector \\( \vec{k} = \frac{\vec{p}}{\hbar} \\). We can suggest an ansatz for the wave function as a plane wave:

$$ \psi(r,t) \sim e^{i(\vec{k}\cdot\vec{r}-wt)} = e^{i(\vec{p}\cdot\vec{r} -Et)/\hbar} $$

From this, we can derive:

$$ i\hbar \frac{\partial}{\partial t}\psi = E \psi $$
$$ -i\hbar \nabla \psi = \vec{p}\psi, -\hbar^{2}\nabla ^{2} \psi = p^{2}\psi $$

For a free particle, since \\(E = p^{2}/2m\\), we can equate these to obtain:

$$ \left( i\hbar \frac{\partial}{\partial t} + \frac{\hbar^{2}}{2m}\nabla^{2} \right)\psi = \left( E - \frac{p^{2}}{2m} \right)\psi = 0$$

This leads to the Schrödinger equation for a free particle:

$$ -i\hbar \frac{\partial}{\partial t} \psi = \frac{\hbar^{2}}{2m}\nabla^{2} \psi $$

### Superposition of Solutions

The equation is linear, allowing for the superposition of plane wave solutions:

$$ \psi(\vec{r}, t) = \frac{1}{(2\pi \hbar)^{3/2}} \int{\varphi(\vec{p}) e^{i(\vec{p}\cdot\vec{r} - Et)/\hbar} d^{3}p} $$

Substituting this expression confirms that it satisfies the Schrödinger equation:

$$ i\hbar \frac{\partial}{\partial t}\psi = \frac{1}{(2\pi \hbar)^{3/2}}\int{\varphi(\vec{p}) E e^{i(\vec{p}\cdot\vec{r} - Et)/\hbar} d^{3}p } $$


$$ -\frac{\hbar^{2}}{2m}\nabla^{2} \psi = \frac{1}{(2\pi \hbar)^{3/2}}\int{\varphi(\vec{p}) p^{2} e^{i(\vec{p}\cdot\vec{r} - Et)/\hbar} d^{3}p } $$

Thus, we find:

$$ \left( i\hbar \frac{\partial}{\partial t} + \frac{\hbar^{2}}{2m}\nabla^{2} \right)\psi = \int{\varphi(\vec{p}) \left( E - \frac{p^{2}}{2m} \right)e^{i(\vec{p}\cdot\vec{r} - Et)/\hbar} d^{3}p }  = 0$$

Any linear combination of wave packets will satisfy the Schrödinger equation for free particles.

Promoting Observables to Operators
In this derivation, __we promote observables namely energy and momentum to operators acting on the wave function__:

$$ E \rightarrow i\hbar \frac{\partial}{\partial t}, \vec{p} \rightarrow -i\hbar \nabla $$

### The Case of a Particle in a Potential Field

Now, let’s consider a particle in a potential field \\( V(\vec{r}) \\). Based on the nonrelativistic relation of total energy: 

$$ E= \frac{1}{2m}p^{2} + V(\vec{r}) $$

Promoting these quantities to operators yields Schrödinger's equation:

$$ i\hbar \frac{\partial}{\partial t}\psi(\vec{r}, t) = \left\[ -\frac{\hbar^{2}}{2m}\nabla^{2} + V(\vec{r})\right\] \psi(\vec{r}, t) $$


### Implications of the Schrödinger Equation

1. __wave-particle duality__: The Schrödinger equation offers a fresh interpretation of matter and waves. In this framework, we retain properties such as mass and charge while moving away from classical trajectories—something we can never truly observe at the microscopic level. Instead, we adopt a probabilistic view of reality. Measurements on a dynamical system with observable \\(O(x)\\) are now defined probabilistically:

$$ \int_{-\infty}^{\infty}{\psi^{\ast}(x) O(x) \psi(x)dx} $$ 

Here, the statistical interpretation of the wave function leads to the normalization condition:

$$ \int_{-\infty}^{\infty}{\psi^{\ast}(x)\psi(x)dx } = 1 $$




2. __discrete energy level__

The Schrödinger equation naturally leads to discrete energy levels due to "boundary conditions" imposed on \\( \psi \\) when confined in an infinite potential well. The allowed energy states, or "characteristic values," arise from the requirement that the wave function remains bounded. For example, in polar coordinates, the ordinary differential equation has singularities at \\(r=0\\) and \\(r = \infty\\). The solutions are constrained to those that remain bounded, resulting in discrete energy levels.

<!-- {{<cite "Schrodinger1926-ib">}} -->




## The matrix calculus approach to quantum mechanics: only the measureables matter


The gut of Heisenberg vec attempt to derive his quantum perspective is best summarized the following phrase

> Discard all hope of observing hitherto unobservable quantities

In the case of the elecctron, we dispose unobservable quantities such as the position and period in the theory but leaving behind observables such as energy in stationary states together with the associated frequencies defined only upon two variables that characterized the transition

$$ w(n, n - \alpha) = \frac{1}{\hbar} \{ W(n) - W(n - \alpha) \} $$

which shows the algebraic structure of the frequency \\(w\\) with the transition in energy level \\(W\\).

From the perspective of Heisenberg, there is not thing wrong with the classical theory, it is the classical variables have to redefine to match the algebraic structure of a quantum variable

Carrying on with this logic, Heisenberg promote kinetic variables with the observables he defined to derive the quantum equivalent of some classical theories. For example

- A simple one-dimensional model of an atom consisting of an electron undergoes periodic motion

For a state characterized by the label \\( n \\), fundamental frequency \\( \omega(n) \\) and coordinate \\( x(n, t) \\), ne can represent \\(x(n,t) \\) as a Fourier series

$$ x(n,t) = \sum_{\alpha=-\infty}^{\infty}{X_{\alpha}(n)exp\[i\omega(n)\alpha t\]} $$

Then, Heisenberg asks the question: 'how is the quantity \\(x(t)^{2}\\)' to be represented?'. In classical theory, it would be

$$ \[x(t)\]^{2} = \sum_{\alpha}{\sum_{\gamma}{X_{\alpha}(n)X_{\gamma}(n)e^{i\omega(n)(\alpha + \gamma)t}}} = \sum_{\beta}{Y_{\beta}(n)e^{i\omega(n)\beta t}}$$


In classical theory, the frequencies simply add up. The resulting algebric structure is then

$$ Y_{\beta}(n) = \sum_{\alpha}{X_{\alpha}(n)X_{\beta - \alpha}(n)} $$

$$ \omega(n)\beta = \omega(n)\alpha + \omega(n)(\beta - \alpha) $$

Note that these quantities could not be combined in the same way in the case of quantum, one crucial different is how the frequencies would combine like

$$ \omega(n, n-\alpha) + \omega(n-\alpha, n-\beta) = \omega(n, n-\beta) $$
 
Hence, promoting these varibales to quantum compatibles, yield the following algebraic relation


$$ Y(n, n-\beta) = \sum_{\alpha}{X(n, n-\alpha)X(n-\alpha, n-\beta)} $$


Also known as the Heisenberg's law for multiplying transition amplitude together. One profound characterisitics is that these promoted quantities don't commute. These non-commutativity define the Heisenberg algrebra that could essentially allow us to solve discrete energy eigenvalues.


- Let's see how this commutation relation be applied

define the momentum and position operator to be \\(p = i\hbar \nabla \\) and \\( q = x \\). Its communtation relation \\( \[p, q\] = pq - qp = i\hbar \\)  can be verified by acting on a wavefunction \\(\psi(x)\\). 

$$ \[p, q\] = -i\hbar \frac{\delta }{\delta x}(x\psi(x)) + i \hbar x \frac{\delta }{\delta x} {\psi(x)} $$
$$  = -i\hbar \psi -i\hbar x \psi ^{\prime} + i\hbar x\psi^{\prime} = -i \hbar \psi = -i \hbar  $$

Igonoring the planck constant \\(\hbar\\) we yield the Heisenberg algebrba \\( \[ p, q \] = i\\). We move a step forward defining an operator \\(a, a^{\dagger}\\) from the Heisenberg algebra

$$ a = \frac{1}{\sqrt{2}}(q+ip), a^{\dagger} = \frac{1}{\sqrt{2}}(q-ip) $$

The communtation relation \\( \[a, a^{\dagger}\]\\) known as Dirac algebra. Defining the Hermitian operator \\(N = aa^{\dagger}\\). It could be diagonlized with eigenvalues of \\(n\\) and eigenvector \\(\left| n \right\rangle \\).

Consider the following communtation relation:

$$ \[a, N \] = aa^{\dagger}a - a^{\dagger}aa= (aa^{\dagger} - a^{\dagger}a)a = [a, a^{\dagger}]a$$

Hence,

$$ Na \left | n \right\rangle = (aN - a) \left | n \right\rangle = (n-1)a \left |n \right\rangle$$

Thus \\(a \left | n \right\rangle\\) is an eigenstate of \\( N \\) with eigenvalue equal to \\((n-1)\\).

Write the state \\( a\left | n \right\rangle = C_{n} \left | n-1 \right\rangle \\) with \\(C_{n}\\) some normalization factor. Hermitian conjuating both side yields \\( \left\langle n \right| a^{\dagger} = \left\langle n-1 \right| C_{n}^{\ast}\\). Squaring \\(a\left| n \right\rangle\\)

$$ \left\langle n \right| a^{\dagger}a \left | n \right\rangle = \left\langle n\right| N \left| n \right\rangle = n = \left\langle n-1 \right | |C_{n}^{2}| \left | n-1 \right\rangle$$

Hence, the normalization factor \\(C_{n} = \sqrt{n}\\) and the recursion relation 

$$ a \left | n \right\rangle = \sqrt{n-1} \left| n -1 \right\rangle$$

and for \\(a^{\dagger}\\), simiarly

$$ a^{\dagger} \left | n \right\rangle = \sqrt{n+1} \left| n + 1 \right\rangle $$

For \\(n\\) being a positive integer, it suggests there exists an eigenvector \\( a\left| 1 \right\rangle = \left| 0 \right\rangle \\) and unbounded upper eigenvector. There are two observation to be made from this creation and annihilation operators approach.

- __A inifinite dimension matrix: Hilbert space__

The Dirac algebra can be relaized in terms of an infinite-dimensional matrix \\(A\\) with element \\(A_{n-1, n} = \left\langle n-1 \right | a \left| n \right\rangle \\) above the diagonal. So, does the operators \\(p\\) and \\(q\\) in the Heisenerg algebra. The operators in quantum mechanics live in the infinite dimensional space which we call it the Hilbert space.

- __Top-down derivation of harmonics potential__

The eigenvalues of the harmonics potential is given by \\(\frac{1}{2}(N + 1)\\). Starting from here and assuming we do not know the functional structure of the harmonics potential,

$$ H = \frac{1}{2}(N + 1) = \frac{1}{2}a^{\dagger}a + \frac{1}{2} = \frac{1}{2}\left( (q-ip)(q+ip) + 1 \right) $$
$$ H = \frac{1}{2}(p^{2} + q^{2}) = -\frac{1}{2} \frac{d^{2}}{dx^{2}} + \frac{1}{2}x^{2}$$

Preciesely the Hamiltonian of the harmonic oscillator. 


Naturally, the next question we ask is if this method is general. Meaning that for any particular system with \\(k\\) degree of freedom, with matrix \\( q_{1},...,q_{k},p_{1},...,p_{k} \\) that satisfies the communitation rules. And for these matrices, we always find a matrix \\(H(q_{1},...,q_{k},p_{1},...,p_{k})\\) that could be diagonlized. In order to compare the Schrodinger wavefunction formalism and the matrix theory, this will be our starting point to transform these two distinct interpretation into one coherent quantum picture.


<!-- ## Dirac Feynman summing over all path

- break down unitary evolution into tiny time segment -->

{{<cite "Aitchison2004-iy">}}


## Equivalency of these two methods

- Solving the eigenvalue problem

- \\(F_{z}\\) and \\(F_{\Omega}\\) space and Hilbert space



In a nutshell, so far we have introduce the Schrodinger wavefunction interpretation of quantum system characterized by the Schrodinger equation

$$ \hat{H} \psi(q_{1},...,q_{k}, p_{1},...,p_{k}) = E \psi(q_{1},...,q_{k}, p_{1},...,p_{k})$$

And we demonstrate the matrix method first by how Heisenberg initiate its thought on promoting the classical theory to matrix and found out that the commutation relation between observables. By an example of the communtation relation \\([p, q] = i\\) and a diagonizable matrix \\(H(p, q)\\), we were able to find out the inifinite set of eigenvalues and eigenvector that agree nicely with the wavefunction methods.

To show how these two methods compare to each other, we first transform the matrix method into a equivalent math problem of solving eigenvalues and eigenvectors. Subsequently we compare formalism and their math representation.

### Matrix method? eigenvalues problem in disguise!

First, seek the matrices \\( q_{1},...,q_{k},p_{1},...,p_{k} \\) that satisfy the commutation rules. And combined to give a matrix

$$ \bar{H} = H(\bar{q_{1}},...,\bar{q_{k}},\bar{p_{1}},...,\bar{p_{k}}) $$

would not be a diagonal matrix. The diagonalized form could be obtained by similarity transformation

$$ q_{i} = S^{-1}\bar{q_{i}}S, \quad p_{i} = S^{-1}\bar{p_{i}}S $$

The communtation relation will carry over, to see this

$$ [q, p] = S^{-1}\bar{q}SS^{-1}\bar{p}S - S^{-1}\bar{p}SS^{-1}\bar{q}S = S^{-1} [\bar{q}, \bar{p}] S$$

Hence, \\(\bar{H}\\) goes over into \\( H \\) with \\(S^{-1}\bar{H}S = H\\)

The only requirement from the above relation on \\(S\\) is that \\( S^{-1}\bar{H}S \\) be a diagonal matrix where \\( \bar{H} \\) is given.

Let the matrix \\( \bar{H} \\) have the elements \\(h_{\mu \nu}\\). the desired matrix \\(S \\) has element \\(S_{\mu\nu}\\), and the diagonal matrix \\(H\\) has element \\(w_{\mu}\\), writing the matrix multiplication explicitly we got

$$ \sum_{\nu}{h_{\mu\nu} s_{\nu\rho}} = w_{\rho}\cdot s_{\nu\rho} $$

We recognize that \\(s_{\mu\rho} \\) is the column vector \\( s_{1\rho}, s_{2\rho},... \\). Hence, to specify the transformation \\(S\\) is equivalent in solving eigenvalues problem which runs as follows:

$$ \sum_{\nu}{h_{\mu\nu}x_{\nu}} = \lambda \cdot x_{\mu} \quad \quad (\mu = 1, 2, ...) $$

These set of eigenvalues and eigenvectors are essentially the only solutions. The knowledge of \\( S, H \\) determine all the solutions of the eigenvalue problem, but conversly, we can also determine \\( S, H \\) as soon as we have solved the eigenvalue problem completely. 

The fundamental problem of the matrix theory is then the solution of the eigenvalue equation

$$ \sum_{nu}{h_{\mu\nu}x_{\nu}} = E \cdot x_{\mu} \quad \quad (\mu = 1, 2, ...) $$

The remaining task for us is to check that how this transformation to eigenvalues problems matches with the wavefunction formulism.

### Wavefunction looking alike but not the same

The defining charactersitics of the wave equation is the following

$$ \hat{H}\psi(q_{1}, ..., q_{k}) = \lambda \psi(q_{1}, ..., q_{k}) $$

In which \\(H\\) is the Hamiltonian differential operator. We seek all solutions \\(\psi(q_{1},...,q_{k})\\) and \\( \lambda \\). At first sight, this is very similar to what was required in the eigenvalue equation, which we could regard it as a function \\(x_{\nu}\\) of the "discontinuous" variable \\(\nu\\) which ranges over \\(1, 2,...\\) corresponds to the function \\(\psi(q_{1}, ..., q_{k})\\) with the "continuous" variables \\(q_{1}, ..., q_{k}\\), with \\(\lambda\\) playing the same role each time. 

Upon further inspection on how these two objects transform, they do differ in a subtle way. The matrix method leads to a vector representation of the quantum state.

$$ x_{\mu} \rightarrow \sum_{\nu}{h_{\mu\nu}x_{\nu}} $$

But how does the wavefunction transform? We know probability is conserved in a closed quantum system and hence quantum state must undergo unitary transformation to conserve the probability.

To show, we first recall the norm is defined for the wavefunction

$$ \int{\psi^{\ast}(\vec{r})\psi(\vec{r})d(\vec{r})} = 1 $$

We expect that under transformation the norm is preserved or equivalently the total probability is conserved

$$ \int{\bar{\psi}^{\ast}(\vec{r})\bar{\psi}(\vec{r})d\vec{r}} = 1 $$

Let's define the one dimension representation of the \\(U(1)\\) be \\(e^{i\vec{r}\cdot\vec{p}}\\). Then, under unitary transformation, the norm becomes

$$ \int{\psi^{\ast}(\vec{r})e^{-i\vec{r}\cdot\vec{p}}e^{i\vec{r}\cdot\vec{p}}\psi(\vec{r})d\vec{r}} = 1 $$

Also we recall that \\(\psi(\vec{r}) \propto \int{\phi(\vec{p})e^{i\vec{r}\cdot\vec{p}}d\vec{p}}\\). The wavefunction transform into different basis by fourier method.

We can indeed draw a parallel between these function. The first being vector space with well defined norm. The Schrodinger picture could also be understood as a vector with orthogonality vector and its weight. These properties are known as the Hilbert space.

{{<cite "von1955mathematical">}}


## Final Remark

In the spirit of Feynnman, it will be a waste of time to put effort in making different interpretation of the quantum derivation. Nevertheless, it is still a great practice to be more thoroughly understand the historical context and mathematical motivation. Especially, when most quantum textbook often introduces these two concepts at its convience and yet never compare how these two methods differ. For it might be crucial in understanding what appraoch might be more appropriate in solving a particular quantum system.

To emphazie one more important aspect of such attempt to compare methods, it is that a new era of quamtum computation which heavily relies on the John Von Neumann density matrix representation of the quantum state. For this particular representation, operation of quantum mixed state and pure state is easily computed with mathematical convinence. And the ponding question of how the matrix thoery and wavefunction approach settle into one unify picture of microscopic phenomena is what drive Von Neumann to derive a representation that is irrevelent on how it's presented.

We neglect some eariler motivation from Schrodinger and Heisenberg because in the development stage of a brand new theory it often took a lot of guess work to keep pushing. 

Some aspects are being abbrivated such as Schrodinger's thought on the relevence of action principle to the formulation of quantum mechanics. But it was later developed by Dirac and Feynnman that the quantum version of the action principle could be devised starting from a notion of summing of all possible paths along the initial and final states but that's another topic. 

<!-- {{<cite "Feynman:100771">}} -->

## Revision (2026/)




## Biblography


{{< bibliography cited >}}
