---
title: "Group Theory Application in Quantum Mechanics"
date: "2024-10-04"
lastmod: "2025-01-09"
author: "Max"
weight: 1
showToc: true
TocOpen: false
bibfile: "./static/free_tight/citation.json"
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

This investigation started in the consideration of quantum solids which invariably have to solve for a __many-bodies quantum problem__. Many particles quantum mechanics, just like its classical counter parts, is desparately __intractable__. The exactly solvable problem, to name a few, are the free particle, harmonics oscilator and hydrogen atom. The question is then, to solve the many-particles quantum problem with the tools we have in these solvable models. All these solvable model has a potential energy term that is invariant under a __symmetrical transformation__, thus allowing for specifying the quantum system with integers labeling the irreducible representation. 

It was this observation that leads to group theoretic consideration of the quantum problem. Group theory has play an important role in quantum mechanics. __Wigner's theorem__ relate the symmetries of the Hamiltonian with the functional form of the states. For example, consider a crystalline structure consisting of \\(N\\) atoms where they are placed periodically and having the __translation invariant__. Without the symmetrical insight, this will be a intractable quantum problem of solving . But the translational invariant potential energy allow the solution of a Bloch function, making it a tractable quantum problem.

This blog mainly focus on the __symmetries in the quantum theory__, starting from the simplest solution of hydrogen atom, a case that respects the rotational symmetry. Then, to more complicated situation such as in the molecular case and spatially repeating lattice, a case that respects translational symmetry, emphazising the connection between the symmetries of the problem and the form of the solutions.


## Symmetries in Quantum Mechanics

1. __Symmetries of Hamiltonian__

Given a group \\(G\\) with element \\(g\\) that leaves the Hamiltonian \\(\mathcal{H}\\) invariant, regard \\(g\\) as an operator as well as a group element we have:

$$ g^{-1} \mathcal{H} g = \mathcal{H} $$

In a mathematical sense, the linear transformation by the group \\(g\\) leaves the Hamiltonian invariant, we will call the group \\(G\\) as the symmtry operation on the Hamiltonian.

2. __Symmetries of the states__

In quantum mechanics, the eigenfunction, or wavefunction has a well defined norm denoting probability density:

$$ \int_{\mathcal{V}}{\psi^{\ast}\psi dr^{3}} = 1$$

We could see that the representation of unitary \\(U(1)\\) will leave the proability unchanged:

$$ \psi^{\prime} = e^{i\phi}\psi  $$

To see this, \\( \int_{\mathcal{V}}{{\psi^{\ast}}^{\prime}\psi^{\prime} dr^{3}} = \int_{\mathcal{V}}{\psi^{\ast} e^{-i\phi} e^{i\phi}\psi dr^{3}} = 1\\)

Hence, the symmetric transform of the state is defined by a phase rotation.


3. __Wigner's theorem__

One observation to make by these observation on the symmetry of states and symmetry of the Hamiltonian is that, the states not necessarily follows the symmetry of the equation of the motion.

Consider the stationary Schrodinger's Equation:

$$ \mathcal{H} \left| \psi \right\rangle = E_{n} \left| \psi \right\rangle $$

Let \\(G\\) be the symmetry of the Hamiltonian, then \\(g\\) acting on the Hamiltonian would commute with the Hamiltonian:

$$ g\mathcal{H} \left| \psi \right\rangle = \mathcal{H} (g\left| \psi \right\rangle) = E_{n} (g\left| \psi \right\rangle )$$

Then the set of states \\(g_{i} \left | \psi \right\rangle\\) for \\(i\\) ranges from \\(1\\) to the order of the group \\(n\\), will also be an eigenstates of the energy \\(E_{n}\\).

Writing more explicitly the representation/operator of \\(g\\) as a matrix \\(D_{ij}(g)\\). Then, the set of states will transform as the irreducible representation of the group \\(G\\):

$$ D(g)(D(g)\left | \psi \right\rangle) = D(gg) \left | \psi \right\rangle = D(g) \left | \psi \right\rangle$$

This is the Wigner's theorem:

> _if the Hamiltonian operator, \\(\mathcal{H}\\), of a quantum-mechanical system possesses a group, \\(G\\), of symmetry operations, then each of the eigenfunctions \\(\psi\\) of \\(\mathcal{H}\\) must belong to (that is, must transform according to) one of the irreducible representations of \\(G\\)._

Wigner's theorem relates the symmetry of the Hamiltonian to the functional forms of the eigenfunctions, that the eigenfunction must transforms as the irreducible representation of the group \\(G\\). 

However, recall the symmetires of the states do not distinguish a phase rotation, the state under a phase rotation is equivalent and do not create a distinctive state \\(\psi \rightarrow \psi^{\prime} = e^{i\phi} \psi \\). 

We would like to remove the phase rotation from the group \\(G\\) to find all the distinctive states. Depending on the group, it is not possible to represent every group member as a phase rotation \\(e^{i\phi}\\). Thus, it leaves the cosset of the group \\(G\\) with subgroup \\(H = U(1)\\) acting on the state to form a distinctive eigenstates that does not transform invariantly as the Hamiltonian does.


4. __Symmetry breaking and restriction to the subgroup__

- _Reduction to subgroup_



- _Spontaneous Symmetry Breaking_

hypothetical Hamiltonian
$$  H = H_{k=0} + \sum{H_{int}} $$



## Rotation Symmetry and Hydrogen Atom

From the Hamiltonian, rotational symmetry. Rotation group. Predict 2l+1 irreducible representation.

The radial part remains unresolved and it is related to the integer labeling the 

SO(3) Rotation group. 


## Molecular Orbital Theory: Linear Combination of Atomic Orbitals


## Translation Symmetry and Crystal

<!-- Before we get into the crystal structure, one might stop and ponder the justification of the stability of the crytalline structure. Amongst those many solid states elements could consolidate into but why lattice in particular? There are two good reasons for it: -->



### Space group and characterize the Crystal with symmetry

Now we could define crystal structure as being translation invariant on a set of lattice. In addition, one could define a point group in a unit cell. These translations and rotation invariants combined will give us the space group, the operation of a space group could be expressed mathematically as:

$$ \\{ R_{\alpha} | \tau \\} $$

where \\(R_{\alpha}\\) denotes the point group operations such as rotation, reflections, improper rotations and inversion. And \\(\tau\\) representing the tranlsation operations.

When this space group operate on a vector, we yield the following algebraic expression:

$$ \\{ \alpha | \tau \\} \vec{r} = \overleftrightarrow{\alpha} \cdot \vec{r} + \vec{\tau}  $$

Hence, the group multiplication is expressed as:

$$ \\{\beta | \tau^{\prime}  \\} \\{\alpha | \tau  \\} = \overleftrightarrow{\beta}\left[ \overleftrightarrow{\alpha} \cdot \vec{r} + \vec{\tau} \right] + \tau^{\prime} = \\{ \beta \alpha | \beta \tau + \tau^{\prime} \\} $$

With well defined inverse and identity on either operation:

- inverse

$$ \\{ \alpha | \tau \\}^{-1}  = \\{ \alpha^{-1} | -\alpha^{-1}\tau  \\} $$

- identity

$$ \\{ \epsilon | 0 \\} $$

With pure rotation defined as  \\( \\{ \alpha | 0 \\} \\) and pure translation defined as \\(\\{ \epsilon | \tau \\} \\).

These space group \\(G\\) contains a translation subgroup that defines the translation invariant of the lattice. This can be stated as the following:

> All the elements of the space group \\(G\\) that are of the form \\( \\{ \epsilon | \tau \\} \\) constitute the translation group \\(T\\) that defines the __Bravais lattice__.

In 3-dimension, there are 14 Bravais lattice and a total of 230 space group. Of those 230 space group, we could further divide them into either a __symmorphic group__ or __non-symorphic group__. 

A symmorphic group could be expressed as:

$$ \\{ R_{\alpha} | \tau \\}  = \\{R_{\alpha}| R_{n}\\} = \\{ \epsilon | R_{n} \\} \\{ R_{\alpha} | 0 \\}  $$

Where \\(R_{n}\\) denotes the translation along the Bravais lattice vector. On the other hand, a non-symmorphic group is expressed as \\( \\{ \epsilon | R_{n} \\} \\{R_{\alpha} | \tau_{\alpha} \\} \\) for nonzero \\(\tau_{\alpha}\\).

This suggests for a symmorphic group, we could write the space group operation into the product of translation and point group operation. This is in general does not apply to all space group. There is also a good reason to partition the space group into these two forms. This will carry over to the wavefunction in a crystal and we want to learn the degeneracy in the k-space by only the point group opeartion along.



## Bloch Theorem to derive the realistic band structure (Free energy bands in accordance with symmetry restriction)



Differed from the atomic case, in which the electron is under the spherical symmetric columbic potential, the electron in a crystal environment is under the influence of a periodic potential, which transform under the space group with translation subgroup. In this modified Hamiltonian, the energy level are labels by \\(k\\) and form a quasi-continuous bands in contrast to the energy level from the molecular solution.

From the translation symmetry, we could write down a general wavefunction that satisfies this condition, and labeled the states with \\(k\\). The value of k, which labeled the irreducible representation, ranging from the number of tranlsation operation allowed given by the periodic boundary condition. The set of real space vector \\(R_{m}\\) defined the real space. While the \\(k_{i}= m_{i}2\pi/  L\\) defined the reciprocal space.




### Reciprocal Space

For a plane wave solution that satisfies the periodical condition required by the given Bravais lattice, the sets of wave vectors \\(\pmb{K}_{m}\\) must satisfies the following codition:

$$ e^{i K_{m} \cdot r}= e^{i K_{m} \cdot r}  $$

holds for any \\(r\\), and for all \\(R_{n}\\) and \\(K_{m}\\) defining the real space and reciprocal space, respectively. For \\(R_{n} = \sum{n_{i} a_{i}}\\) and \\(K_{n} = \sum{n_{i}b_{i}}\\), it also suggests that

$$ b_{j} \cdot a_{i} = 2\pi \delta_{ij} $$


### Bloch theorem

For a electron being in a periodical lattice, this amounts to solving the following Schrodinger's equation:

$$  \left(\frac{\hat{p}^{2}}{{2m}} + V(r) \right) \left| \psi \right\rangle= E_{n} \left| \psi \right\rangle$$

With periodic potential

$$ V(r+ T_{n}) = V(r) $$

To give a general form of the wavefunction that satisfies the potential under a crystalline environment, we note that the a crystal potential will follow from a space group symmetry. Since we derive from the previous section that space group has a translation subgroup, thus we could write the wavefunction into product of two parts: the first parts being the irreducible representaiton of the translation group, the other parts being a periodic function that transform under the space group. 

From a group theoretic perspective, the translation group is Abelian, so the number of the irreducible representaiton labeled by \\(k\\) will be the same with the number of translation allowed in a periodic boundary with length \\(L\\).

$$ D^{k}(na) = e^{ikna/L} = e^{ik\tau} $$

With \\(a\\) define as a Bravais vector and \\(n/L\\) labels the transformation operation.

We could write the second part as \\(u_{k}(r)\\), that has the same symmetry as the potential, \\(u_{k}(r+R_{n}) = u_{k}(r)\\). Together, by symmetry requirements the form of the solution is written in the form we called Bloch theorem:

$$ \psi_{k}(r) = e^{ik \cdot r} u_{k}(r) $$

This is very different from the moelcular case, as in the molecular case we label the distinct states with three quantum number \\( (n, l, m)\\) while in this case crystalline case we labelled the states by the a quasi-continous variable \\(k\\) with a functional eigenvalues \\(E(k)\\) forming energy bands as we shall see in the next section.

### Continuous bands


One features immediate follows if we consider \\(L\\) to be large and the number of translation in a crystall will generally be the order \\(\sim 10^{23}\\) which furnish \\(\sim 10^{23}\\) irreducible representation and distinct eigenvalues \\(E(k)\\). 

This can be shown by expanding \\(k\\) to \\(k^{\prime} = k + x\\) where \\(x\\) is small on the Schrodinger equations. Substitute, the Bloch wavefunction with the modified \\(k^{\prime}\\) yields:

$$  \left(\frac{\hat{p}^{2}}{{2m}} + V(r) \right) u_{k}(r)= \left(E-\frac{\hbar^{2}x^{2}}{2m}\right) u_{k}(r)$$

Thus, the energy eigenvalues will form a continuous distributed bands structure forming a very different landscape as compared to the molecular case.

{{< cite "-cracknell1973fermi" >}}


### Symmetries of the r-space, k-space and the bloch wavefunction

The space group in the r-space, shows a complete description of the crystal spatial symmetry. These in general would have effects on the k-space and consequently affecting the bloch wavefunction.

To study these effects, we will investigate how the point group operation in space group carries over to the k-space and the wavefunction.

- __k-space__


$$ R_{n} \cdot K_{m} = 2\pi N_{N_{1}} $$

$$ P_{\alpha} R_{n} \cdot K_{m} = 2\pi N_{N_{2}} $$

$$ P_{\alpha}^{-1} R_{n} \cdot K_{m} = 2\pi N_{N_{3}} $$

Since constant do not transform, we could write:

$$  P_{\alpha} P_{\alpha}^{-1} R_{n} \cdot  P_{\alpha} K_{m} = 2\pi N_{3} $$

Hence, it follows that opeartion \\(P_{\alpha}\\) on r-space is equivalent to the operation of \\(P_{\alpha}^{-1}\\) to the k-space:

$$ P_{\alpha}^{-1} R_{n} \cdot K_{m} =  R_{n} \cdot P_{\alpha} K_{m}$$


- __group of k-vector__

The group of k-vector refer to all the point group operations acting on a single \\(k\\) vector yielding the set of \\(k\\) that transform to \\(k + K_{m}\\). For \\(k = 0\\), it has the enire symmetry of the point group. On the other extreme case, the point group operation of a general \\(k\\) vector will take to another distinctive \\(k\\) vector except for the idenity transformation. In this case the \\(k\\) vector only sees the translational symmetry.

The point group symmetry only takes effect on the \\(k\\) vector that resides on the symmetrical axis, then there will be more than one point group symmetrical operation that takes \\(k\\) to \\(k + K_{M}\\).


- __Bloch wavefunction__

For arbitrary \\(k\\) vector, the point group opeartion that acts on the wavefunction with \\(k\\) vector will take it to another distinct wavefunction.

$$ P_{\\{R_\alpha | 0 \\}} \psi_{k}(r) = e^{iR_{\alpha}k \cdot r} u_{R_{\alpha }k} (r) = \psi_{R_{\alpha }k}(r) $$

From the relationship we derive earlier, \\(r \cdot R_{\alpha}k = R_{\alpha}^{-1} r \cdot k  \\), we can prove that:

$$ P_{\\{R_{\alpha} | \tau \\}} \psi_{k}(r) = e^{iR_{\alpha} k \cdot \tau} \psi_{R_{\alpha}k}(r) $$

$$ P_{\\{R_{\beta} | \tau \\}} \psi_{R_{\alpha}k}(r)  = e^{iR_{\beta} R_{\alpha} k \cdot \tau} \psi_{R_{\beta} R_{\alpha}k}(r)  $$

Thus, the set of eigenfunction \\( \psi_{R_{\alpha}k(r)} \\) obtained by taking the star of \\(k\\) spans the invariant subspace of the point group \\(g\\) since the product operation \\(R_{\alpha}R_{\beta}\\) is contained in \\(g\\).

Although they the set of wavefunction will have the same energy eigenvalue, we do not consider them as degenerate. Instead, we write the function in the set, and consider the extra point group symetry to yield the relation \\(E(k) = E(R_{\alpha}k)\\) for all \\(R_{\alpha}\\). In this way, we guarantee that the energy \\( E(k) \\) will show the full point group symmetry of the reciprocal lattice. 

The high symmetry point in the Brillouin zone are those \\(k\\) points that satisfy:

$$ R_{\alpha} k = k + K_{m} $$

where \\(K_{m}\\) is the reciprocal lattice vector. At these points, the energy bands are tight together. As we move away from these high symmetry points, the band degeneracies are lifted to a general point in the Brillouin zone. This follows from a reduction in symmetry from a large group to its subgroup. The lifting of these degeneracies are called compatibility relations. We will introduce the concept of symmetry breaking and the calculation of reduction as a foundation to learn the compatibility relations.


## Lifting of degeneracies from symmetry breaking

When the group of the original Hamiltonian \\(G\\) is lowered by perturbation, the modified Hamiltonian will have a lower symmetry subgroup \\(G^{\prime} \in G\\). The effect, as we mentioned, will lift the degeneracies of the \\(G\\) by Wigner theorem. Since the wavefunction satisfies \\(H\\) will be the irreducible representation of the group \\(G\\). Then the irreducible representation will generally be a reducible representation of group \\(G^{\prime}\\) and each irreducible representation in group \\(G\\) could be written as the linear combination of the irreducible representation of group \\(G^{\prime}\\) hence the name reducible. This theme of group theoretic application in reduction in symmetry will be a recursive methodology in the study of quantum solids.

- Spherical symmetry to crystal space group

For example, when atoms bond to form crystal, the rotational symmetry is broken. In exchange, the potential and the modified Hamiltonian will follow a space group symmetry which is a subgroup of the full rotation group. To relate the representaitons between these two groups, the irreducible representaiton of group \\(G\\) will be a reducible representations in \\(G^{\prime}\\). And we could decompose the irreducible representation by character orthogonality required by group theory.

- Real space to the wavefunction

So, to connect back to our conversation on the reciprocal space and wavefunction. We would like to know how the symmetry constrain acts on the reciprocal space and the Bloch wavefunction. The group of \\(k\\) vector will be the subgroup of the space group of the crystal lattice \\(G_{k} \in G\\) and so we could parallel the method on we used previously to obtained how symmetry restrict the energy bands for different \\(k\\) values.

In a given Brioullion zone, we label the \\(k\\) points that have a high symmetry. For example, at \\(k=0\\), it has the highest symmetrical properties. As we move away from the symmetry points to some point with lower symmetry, that reduce the higher symmetry group to a lower symmetry group. This essentially will lift the energy degeneracy that was originally present in the high symmetry \\(k\\) points.



### Method of crystal field splitting

 

Before: n energy level and 2l+1 degenerate states. 2l+1 degenerate states becomes reducible representation of the space group, which is the combination of point group and translation group. In general, when a original Hamiltonian that follows a \\(G\\) symmetry reduces to a less symmetrical Hamiltonian with \\(G^{\prime}\\) symmetry, the irreducible representation of \\(G\\) will be a reducible representation of \\(G^{\prime}\\), lifting the degeneracy. (cite)

In a less rigorous fashion, assume a quantum system with Hamiltonian that has the symmetry of group \\(G\\), that would suggest:

$$ G H \left\langle \psi \right\rangle = E   G \left\langle \psi \right\rangle $$


Show a procedure of how rotational group break into points group or space group. (work)

For example, consider the orthonomral group \\(O_{h}\\) with the following character table.

(include table here)

These symmetrical operation, such as rotation and reflection, are the members of the \\(SO(3)\\) group. From the character of the full rotation group, we could calculate the characters for these symmetrical operation for the full rotation group:

$$ \frac{sin[(l+1/2)\alpha]}{\alpha/2} $$

For, \\(l = 2\\) and \\(\alpha = 0\\), the character of the irreducible representation will be:

$$ \chi^{(2)}(\alpha = 0) = 5 $$

These irreducible representation will generally be reducible in the \\(O_{h}\\) point group, partially lifting the \\(2l+1 = 5\\) degeneracies. To compute the corresponding weighting of each irreducible representation in the reducible representation, we make use the class orthogonality theorem and decompose them with the following:

$$ a_{j} = \frac{1}{h}\sum_{k}{N_{k}\chi^{\Gamma_{j}} (C_{k})^{\ast} \chi^{reducible}(C_{k})} $$

Consequently, for \\(A_{1}\\)

$$ a_{A_{i}}= \frac{1}{24}[5-8+3+6-6] = 0 $$

So, it does not decompose into the \\(A_{i}\\) representaiton. The non-zero summation suggests that the degeneracies that the broken symmetry has lift into. In this case of \\(l = 2\\), it was two-fold degeneracies of \\(E\\) and three-fold degeneracies \\(T_{2} \\) that the reducible representation breaks into.


### Compatibility

How this group theory consideration carry over to the k space?

(include an example and illustration)

For example, \\(Fm3m(O_{h})\\).

(figure show first Brillion zone and corresponding symmetrical k points)

(character table each k points symmetry)

(example calculation)

(graph of energy bands)




To explain the difference in the metals by the microscopic features of the metals. Differences including E.M. response, heat capacity, transport, superconductor transition. From a simplified model and spotting the important degree of freedom that correlates with the macroscopic observables. 

From simplified calculation yields the fermi surface. Then we say the fermi surface is a abstract representation of the active part of the materials. The question is, is the fermi surface a one to one correspondence to the properties of the metals. If that is the case, then the fermi surface does indeed reflect the faithful properties of the metal. Can we show that the relation is one to one? Microscopic information: number of electrons, the crystalline structure,

Under certain limit that don't lead to , the external fields will change this representation of the metals. External simulus will alter the geometry of the fermi surface. Is it possible that by studying the fermi surface alone, we could infer the qualitative features of the metal. In addition, could we predict the change of the fermi surface by the external simulus, so we know the limit of the external field that would leads to a qualitative change of the metals.

Information of the fermi surface. Geometrical concepts. Information of a geometry. first is their distribution p(x, y, z) and their distribution relative to the first Brilloun zone. Closed or open surface. Discontinuity in the distribution. The derivative of the distribution. The discontinuity in the derivative of the distribution. The second derivative... Curvature. Is there a general way to relate the physical properties to the geometrical content?







## Conclusion





## References: 


{{< bibliography cited >}}







