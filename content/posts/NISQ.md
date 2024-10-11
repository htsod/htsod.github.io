---
title: "Variational Method as Approximation to Simplify Quantum Circuit"
date: "2024-07-17"
lastmod: "2024-10-07"
weight: 0.5
# aliases: ["/first"]
# tags: ["first"]
author: "Max"
bibfile: "./nisq_algorithm/citation.json"
# author: ["Me", "You"]
showToc: true
TocOpen: false
draft: true
hidemeta: false
comments: false
math: true
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

## Preview

This blog provides a concise overview of some key noise-resilient, intermediate-scale quantum algorithms, designed for a general audience. We'll first explore the core mechanics of these algorithms, followed by their applicability to existing classical counterparts. Lastly, we'll discuss the hardware requirements necessary to implement these algorithms, with a focus on managing noise in quantum systems.

## Variational Quantum Eigenvalue (VQE)
With the quantum hardware progressing, promising quantum algorithm has been devised to harness the exotic nature of quantum computer. Notably the Shor's algorithm and Grover search algorthm which demonstrate significant improvement over classical computer. However, those algorithms require quantum resources that are far-fetching in today quantum hardware standard. Therefore, there are several quantum algorithms that have been devised to be sufficiently useful in the noise Intermediate-scale quantum(nisq) stage of quantum information industry. One prominent algorithm is variational quantum eigensolver. It is based on the variational principle which says that an approximation quantum state that is close to the ground state of a quantum system yields a sufficiently close solution to the eigenvalues of the ground state.

$$ \left \langle \psi(\theta) \right | H \left | \psi(\theta)\right\rangle = \lambda_{approx} \ge \lambda_{g} = \left \langle \psi_{g} \right | H \left | \psi_{g} \right\rangle$$

Here we parameterized the state $\psi(\theta)$ to be trained on a classical computation iteratively by measuring the eigenvalue using a quantum circuit. By doing so we expect the eigenvalue would close up the gap with the true ground state of the Hamiltonian. Gearing with the general idea of how it works, here we list the motivation to develop VQE:

1. Is it theoretically faster than classical computer?

2. What kind of realistic problem can it solve?

We don't know yet it is faster or not but solving for the ground state for a state vector is a difficult task for a classical computer. 

As for the second question, it was said that chemical interaction happens quantum mechanical and hence the simulation must also be done quantum mechanically. VQE so far has been apply for solving the ground state energy or excited of a molecular configuration. Though it does not limit to simulation problem, for problem that could map to this structure could be used equally well.

Here are the steps to implement

1. Encode the problem Hamiltonian into circuit element

2. Mapping the problem state vector to a parameterized state living in the \\(2^{n}\\) computational basis 

3. Measure the energy eigenvalue

4. Use classical optimizer to minimize the eigenvalue by varying the parameters.

5. repeat step 1 to step 5 until it saturates


In the case of molecular simulation where the system in interest is based on fermions, the encoding could done by Jordan-Wigner or Brivate-






{{< bibliography cited>}}


