---
title: "Fourier Transforms: A Group Theoretic Perspective"
date: "2024-03-27"
lastmod: "2024-10-04"
author: "Max"
weight: 5
showToc: true
TocOpen: false
bibfile: "./static/fourier/citation.json"
draft: false
hidemeta: false
comments: false
description: "Group theory is powerful in analysis problem with symmetry. This blog aims at giving an example on how Fourier Theorem could be derived on the ground of group theory."
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

## Fourier Methods could be derived entirely from Group theory!

As the title suggests, the entire concept of the Fourier transform can be derived if we understand some basic group theory. We start by introducing the group \\(Z_{N}\\) and its irreducible represenations. Using the orthogonality theorem, we will then derive the discrete Fourier transform (DFT) and the Fourier transform (FT).

Fourier analysis studies the periodicities of functions. Any continuous and differentiable function can be broken down into a linear combination of its frequency components, which is the foundation of Fourier series. The Fourier transform allows us to switch between real space and frequency space representations.

Approaching this from group theory, we recognize that an arbitrary function is a reducible representation of the group \\(Z_{N}\\), or the group of integers modulo \\(n\\). By framing the description in this way, we essentially abstracted the Fourier method as a representaion of the \\(Z_{n}\\) symmetries. 

\\(Z_{n}\\) is the abelian discrete group of order \\(n\\). It captures the group structure of the periodic pattern on a interval of \\( n \\). The reducibility of a periodical function  means that the representation could descompose into linear combination of the irreducible representation of the group \\(Z_{n}\\). 

- Taking a simple example to illustrate the idea of reducibility.

Consider an ar function \\(F(x)\\) in a real space that satisfies the periodic condition

$$ F(x) = \sum_{n} w_{n} f(x+na) = F(x) $$

for \\(n = 0, \pm1, \pm2, ...\\). 

A sinusoidal function as one of the fourier mode \\(f(x) = Asin(\frac{2\pi x}{a})\\) satisfies the above condition for \\(n = \pm 1\\) with weight \\(w_{1} = A\\). In group theory we consider \\(F(x)\\) as the reducible representation of \\(Z_{n}\\) with \\(f(x)\\) being the irreducible representation of \\(Z(n = \pm 1)\\). 

- A slight hint of universality

Light and sound waves, for example, can be broken down into Fourier components regardless of the difference in the microscopic details. For example, light is a form of electromagnetic wave with the underlying symmetry of continuous Lorentz group \\(SO(1, 3)\\).
As withh the propagation of sound wave, it relies on the homogenity medium such as air or solid that has a continuous translation symmetry. Perturbing the system in a certain direction we break the continuous symmetry by favouring  a direction, triggered the "soft mode" of the system causing a relaxation dynamics that leads to the a propagating Fourier wave. It will be interesting to investigate these symmetries breaking effect but that is another topics for another day.


In the next section, we’ll briefly touch on results from representation theory and use them to derive some key theorems related to the Fourier method.



## Representation Theory: The Core Tool
One of the most significant results in group theory is __Schur's lemma__. It states that if an operator \\(H\\) commutes with a group representation \\(D(g)\\), then \\(H\\) must be diagonal, with \\ \\(H = \lambda I\\). Using this lemma, we can derive some powerful theorems in group representation theory. (For a slow derivation, see chapter 2 on {{<cite zee2016group>}} or a get-to-the-point derivation see chapter 2 on {{<cite dresselhaus_group_theory_condensed_matter>}})

$$ \sum_{g}{D^{(r)\dagger} (g)_ {j}^{i}D^{(s)}(g)_ {k}^{l}} = \frac{N(G)}{d}\delta_{l}^{i}\delta_{j}^{k} $$

This relation holds when summing over group element \\(g\\) and representations \\((r)\\) and \\((s)\\) are orthogonal to each other.
Some important corollaries include:

- Dimensions of the irreducible representations:
$$ \sum_{r}{d_{r}^{2}} = N(G) $$

- Orthogonality of irreducible representations:
$$ \sum_{c}{n_{c}(\chi^{(r)}(c))^{\ast} \chi^{(s)}(c)} = N(G) \delta ^{rs} $$

- Orthogonality of classes:
$$ \sum_{r}{\chi^{(r)}(c)^{\ast} \chi^{(r)}(c^{\prime})} = \frac{N(G)}{n_{c}}\delta^{cc^{\prime}}$$

- Number of irreducible representation equal to the number of class in the group:

$$ N(C) = N(R) $$

- A test on reducibility:

$$ \sum_{c}{n_{c} \chi^{\ast(r)}\chi(c)} = N(G)n_{r} $$


<!-- Intuitively, how do we understand representation of the group. We note that group is defined how an element within the group multiply but without a way of representing these reltion its applicablity is limited. A representation preserves the multiplication structure of the group.

$$ D(g)D(g^{\prime}) = D(gg^{\prime}) $$

So, without any lost of generality, it will be easier to work with the representation of the group (such as matrices or tensors)instead of the abstract algebraic relation of the group multiplication. -->


## Symmetry and \\(Z_{N}\\)

Our first exposure to the Fourier transform is often linked to periodicity, a pattern repeating in time. However, group theory doesn't care if the pattern is in time or any other variable, as long as the symmetry holds. Consider partitioning a rotation of \\(2\pi\\) into \\( N \\) parts on the complex plane, represented as \\(e^{i\frac{2\pi}{N}j}\\) for \\(j = 0, 1, ..., N-1\\). This is the \\(Z_{N}\\) group where \\(g^{N} = I\\). Since \\(Z_{N}\\) is an abelian, each element forms its own class, and each irreducible representation has a dimension of 1.

By guessing an irreducible representation that satisfies the multiplication structure:
$$ D(e^{i\frac{2\pi}{N}j})D(e^{i\frac{2\pi}{N}j^{\prime}}) = D(e^{i\frac{2\pi}{N}(j+j^{\prime})}) $$

we propose:

$$ D(e^{i\frac{2\pi}{N}j}) = e^{i\frac{2\pi}{N}jk} \quad k = 0, 1, ..., N-1$$

Now, using orthogonality:

$$ \frac{1}{N}\sum_{j=0}^{N}{e^{-i\frac{2\pi}{N}jk} e^{i\frac{2\pi}{N}jk^{\prime}}} = \delta^{kk^{\prime}} $$

This gives us the discrete Fourier transform (DFT) and its inverse.


This is the same old discrete fourier transform and inverse discrete fourier transform but entirely from group theory along.

Okay, but how about the idea that for a given function that compose of different vibration mode. Recall that we could break down that function into weighted component of fourier parts. What do group theoretic approach has to do with this?

We recognize this given function as an reducible representation that contains various irreducible representation \\(n_{r}\\) times.

So, given the reducible representation \\(\chi(j)\\) applying the test of reducibility gives the weight of the fourier component \\( n_{k} \\)

$$ \frac{1}{N} \sum_{k=0}^{N-1}{e^{-i\frac{2\pi}{N}jk} \chi(j)}= n_{k} $$

Then, the reducible representation can be written as the sum of each of irreducible representation with weight \\( n_{k} \\)

$$ \chi(j) = \sum_{k=0}^{N-1}{n_{k}e^{i\frac{2\pi}{N}jk}} $$

Also known as the Fourier series.


## Continum limit: from \\(Z_{N}\\) to \\(U(1)\\) and from DFT to FT

To extend the DFT to the continuous Fourier transform (FT), we take the limit \\(N \rightarrow \infty\\). The discrete group \\(Z_{N}\\) becomes \\(U(1)\\), and the summation becomes integration:

$$\sum_{k=0}^{N-1} \rightarrow \int_{0}^{\infty}d\mu(g)$$

where \\(\mu(g)\\) is the group measure. 

To evaluate the orthogonality relation in the continuous case, one has to find the trace and the group measure as demonstrated as follow.

- finding the trace

\\(U(1)\\) group has the property that \\(U^{\dagger}U = I\\). For \\(U(1)\\), it furnishes one dimension representation only and hence the trace of the representation is just the representation itself. We propose that \\(D(\theta) = \chi(\theta, k) = e^{i\theta k}\\). It clearly satisfies the unitary condition and preserve the algebraic structure of the group multiplication. The only difference is that now \\(\theta\\) runs as continuous variable from \\(0 < \theta <2\pi\\).

- finding the group measure

The purpose of finding a group measure is to make the integral cover the group manifold. Hence, we could intepret the group measure \\(d\mu(g)\\) runs over the group manifold. In this trivial case of \\(U(1)\\), the group manifold is merely a cycle and hence to cover the manifold we propose the following integral \\(\int_{0}^{2\pi}{d\theta}\\).

Applying orthogonality, we obtain:

$$ \int_{U(1)}{\chi^{\ast}(k,g)\chi(k^{\prime},g)d\mu(g)} = \int_{0}^{2\pi}{e^{-i\theta k^{\prime}}e^{i\theta k}d\theta} =  2\pi \delta_{kk^{\prime}}$$

Thus, we arrive at the Fourier transform.

<!-- It also follows from our discussion on discrete group, we have the inverse Fourier transform that sum over the irreducible representation manifold

$$ \int_{U(1)}{\chi^{\ast}(k,g)\chi(k,g^{\prime})d\mu(k)} = \int_{-\infty}^{\infty}{e^{-i\theta^{\prime} k}e^{i\theta k}dk} =   \delta_{kk^{\prime}}$$ -->

<!-- 
- differential operator commute equivalent to eigenvalue problem -->


## Final Remark


To summarize, from group theory, we recover the following results:

__From Discrete Group__
- DFT:\\( \frac{1}{N}\sum_{j=0}^{N}{e^{-i\frac{2\pi}{N}jk} e^{i\frac{2\pi}{N}jk^{\prime}}} = \delta^{kk^{\prime}} \\)

- Inverse DFT:\\( \sum_{k=0}^{N}{e^{-i\frac{2\pi}{N}jk} e^{i\frac{2\pi}{N}j^{\prime}}} = \delta^{jj^{\prime}} \\)

- Fourier Series: \\( \chi(j) = \sum_{k=0}^{N-1}{n_{k}e^{i\frac{2\pi}{N}jk}} \\)

__From Continuous Group__

- Fourier Transform: \\( \int_{U(1)}{\chi^{\ast}(k,g)\chi(k^{\prime},g)d\mu(g)} = \int_{0}^{2\pi}{e^{-i\theta k^{\prime}}e^{i\theta k}d\theta} =  2\pi \delta_{kk^{\prime}} \\)

One advantage of viewing the Fourier method through the lens of group theory is that it reveals Fourier methods as simply a consequence of translational symmetry. This perspective allows for potential generalizations to other orthogonality theorems, such as those based on symmetries like \\(SU(3)\\) in particle physics, which underpins the Standard Model.

<!-- 
## Revision (2026/01/26)

Includes method of least squares by Gauss. Relate to solution of pDE. Solution with group theoretic perspective and its subsequent application on pde. -->

## Bibliography

{{< bibliography cited >}}