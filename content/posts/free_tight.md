---
title: "Comparative Study on Tight-binding and Free electron Model"
date: "2024-10-04"
lastmod: "2024-10-04"
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





## Sommerfeld free electron model


Sommerfeld free electron model describe \\( N \\) number of fermions without any interaction, not even the columbic interaction between those \\(N\\) electron. Therefore, the model is more like the study of fermions statistics without charge.

### Theory

The statistical properties of fermions with a occupation function of

$$n_{F}(\beta (E-\mu))= \frac{1}{e^{\beta (E-\mu)}+1}$$

Also meaning the number of electrons allowed at energy \\( E \\) and chemical potential \\( \mu \\). 

For free fermions, the energy is characterized by

$$\epsilon (\vec{k}) = \frac{\hbar^{2}|\vec{k}|^{2}}{2m}$$

where \\(\vec{k}\\) representing the wavevectors.

Summing all the fermions at dffierent energy or equilvalently different wavevector \\( \vec{k} \\)yields the total number of fermions

$$ N = 2 \sum_{\vec{j}}{n_{F}(\beta (\epsilon (\vec{k}))-\mu)} $$

Notice the multiple of two take the two spin states into account. Subsequently, we take the continuum limit of the summation \\( \sum_{\vec{k}} \rightarrow \frac{V}{(2\pi)^{3}\int{}} \\) and we get:

$$ N = 2 \frac{V}{(2\pi)^{3}} \int{d\vec{k} n_{F}(\beta (\epsilon (\vec{k})) - \mu)} $$

The tricky part in evaulating this equation is that the temperature dependence of \\( \mu \\) changes the qualitative feature of the occupation function, thus changing the numerical result of the integral. 

Include graph here.

To simplify the anaysis, we evaulaute the limit of zero temperature. The resulting integral leads to step function:

$$ N = 2\frac{V}{(2\pi)^{3}}\int{d\vec{k} (E_{F}- \epsilon (\vec{k}))}= 2\frac{V}{(2\pi)^{3}}\int^{|\vec{k}|<k_{F}}{d\vec{k}} $$

Summing over the \\(k\\) sphere yield the number of fermion in a low temperature limit:

$$ N=2\frac{V}{(2\pi)^{3}}\left( \frac{4}{3}\pi k^{3}_{F} \right) $$

This is saying that in a universe that is only filled by a fixed number of fermions without interaction will share states in a spherical k-space ball with radius \\( k_{F} = (3\pi^{2}n)^{1/3} \\) where \\(n= N/V\\) is the density.

The corresponding Fermi Energy \\(E_{F}= \frac{\hbar k_{F}^{2}}{2m}\\) is the energy on the Fermi surface.






### Some flying questions










## Tight Binding Model

Tight binding model is a theoretical framework that is tightly related to the Linear Combination of Atomic Orbitals(LCAO) view of material structure. 

Briefly summerize, LCAO takes the free electron in the valence shell of an atom to coupled with another atom. It assumes that the number of the orbitals number before the coupling and after the coupling are the same which is a reasonable assumption to make in a close quantum system. The consequence is that the coupled wavefunction is a linear combination of the individual orbital splitting into bonding orbital (lower in energy) and antibonding orbital (higher in energy). Tight binding model takes a step further and consider \\(N\\) particles solid. Though it also assumes that atoms far apart from each other and slowly letting the columbic interaction to pull them close enough to form a structure of periodical lattice. That's also a reasonable assumption to make from a entropic and free energy argument that material forming periodical lattice no matter how the initial configuration will be. (For a mode detailde qualitative argument of justification of periodical lattice, see (citation))

So in the tight binding model, these electrons are fixed in their spatial orbital and weakly interacting with its nearest neighbor.

### theory

