---
title: "Fermi suface: A Geometry Interpretation of Conductors"
date: "2024-10-01"
lastmod: "2025-01-10"
author: "Max"
weight: 5
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



## Introduction


## Free Electron Model: Sommerfield Model

Bands structure tells us the availible states in a unit cell. The number of electrons in a unit cell determine the occupation of those bands. One way to evaluate these effect is through the examination of the Fermi surface, which determine the equal energy surface of the electrons. 


### Free electron surface

Sommerfeld free electron model describe \\( N \\) number of fermions without any interaction, not even the columbic interaction between those \\(N\\) electron. Therefore, the model is more like the study of fermions statistics without charge.


{{< cite "-simon2013oxford">}}

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



## Connection between bands structure and the Fermi surface

number of electrons distinguish metals non-metals. Overlapping with Broliou zone boundary. Experimental result related to the Fermi surface.




## Periodic Potential and Lattice


### Formation of Lattice

- __Transition to a energy favourable states__

In the high temperature limit \\(T\\) of the free energy with form \\(F = U - TS\\), the entropy \\( S\\), a quantity that gives measure to the disorder of the system, would tend to increase in order to minimize the free energy to a equilibrium state. In contrast, at the low temperature limit, the energy terms will be dominant which, a equilibrium state try to minimize. Hence, at low temperature state, a lowset energy state is favoured. 

- __Regular lattice as the lowest energy state__

Following this line of logic, from the transition from liquid to solid, the atoms will seek for the lowest energy state with pair interaction potential:

$$ V_{tot} = \sum_{ij}{(|r_{i}-r_{j}|)}$$

Which is the pair interaction between all combination of atoms. For all the possible configurations make up the sets:

$$ C = \\{ r_{1}, r_{2},...,r_{N} \\} $$

Assume a local minimum configuration of \\(C_{optimum}\\) for \\(n\\) particles where small displacement will lead to harmonic potential that restores it:

$$ V-V_{min} = \frac{1}{2} \sum_{ij}{V_{ij}^{\prime \prime} \delta r_{i} \delta r_{j}} $$

Hence, any displacement of atoms away from this minimum would have a increase of energy from the contribution of all the particles \\(n\\).

Now consider a larger array of atoms \\(N=mn\\). A low-energy configuratins might be constructed by stacking boxes of \\(n\\) atoms together and remving the interior walls. This removal of wall will lead to a readjustment of position only scales as a surface energy, of order \\(n^{2/3}\\). Whereas to to modify the interior in a substantial way will have energy scale as \\(\approx n\\), so there will be a cell size, \\(n\\), beyond which it will not pay to modify the internal configuratin; this then gives us a regular array.


### Space group, Star of k and Compatibility












## Thermodynamics properties and transport properties of metals

Justification to the semi-classical approach to the quasiparticles and measurement in general to tackle thermodynamics and transport property.



### Thermodynamics property

Density of state calculate from the fermi surface. With relation to the geometry.

Thermodynamics of conduction electrons

Quantun Oscillation and Oscillation in general (weak field, strong field)


### Transport property

Boltzemann equation with approximation from the fermi surface. With relation to the geometry.

Conductivity, thermo and electrical

Galvanomagnetic phenomena, open and closed trajectory

Skin effect





## Schemes to calculate fermi surface: theoretical and experimental

Intrinsically n body, can't predict the exact form of potential. Combination of theoretical and experimental tool.

### Introduce some general theoretical calculation methods

Free electron as first approximation

Several other methods

Green method.

Path Integral


Harison Model
### Experimental technique to probe the fermi surface

making use of quantum oscillation

Harison Model



### Approximation method ab inito. Result and illustration from this method.

Some analysis about the correlation between properties and fermi surface







## Geometrical interpretation of the fermi surface




### Geometry analysis. Points, lines and plane on fermi surface. Discontinuity in the fermi surface and breifly mention of ETT.

Effective mass. Plane selection. Close and open orbit in Magnetic field. Hall effect. 



### Example analysis of metals/conductors:

1. Bismuth

2. Transition metals

3. Graphene





Distingusih and scheme to classify materials and more accurate description to different metallic materials. To study materials in a lower dimensionality. 