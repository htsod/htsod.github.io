---
title: "Study Notes on Group Theory"
date: "2023-06-11"
lastmod: "2024-05-04"
weight: 1
tags: ["Group Theory", "Review"]
author: ["Max"]
draft: true
bibfile: "./group_theory/citation.json"
katex: true
math: true
description: ""
showToc: true
ShowReadingTime: true
disableShare: false
hideSummary: false
ShowWordCount: true
searchHidden: false
draft: true
TocOpen: false
canonicalURL: "https://canonical.url/to/page"
disableHLJS: true # to disable highlightjs
disableHLJS: false
searchHidden: true
ShowBreadCrumbs: true
ShowPostNavLinks: true
ShowRssButtonInSectionTermList: true
UseHugoToc: true

cover:
    image: "" # image path/url
    alt: "<alt text>" # alt text
    caption: "<Group Theory in a Nutshell>" # display caption under cover
    relative: false # when using page bundles set this to true
editPost:
    URL: "https://github.com/<path_to_repo>/content"
    Text: "Suggest Changes" # edit text
    appendFilePath: true # to append file path to Edit link
---


## From permutation to group theory

Everyone knows permutation. Permutation counts the number of ways that we can exchange a set of element. Take a simple example of permutation of three objects naming it with integer (123). There are \\( 3!=6 \\) ways of rearranging these three elements into different orders. Let's list out all the six orders:

$$ (123), (132), (231), (213), (312), (321)$$

Looking at a different perspective, we can also treat each permutation of the element \\( (123) \\) as a transformation to \\( (123) \\). So, equivalently, the six permutations listed above can be rewritten in terms of transformation to \\( (123) \\) as the following:

$$ I, (23), (231), (12), (312), (13) $$

where the first element is the identity I which leaves \\( (123) \\) unchanged, \\( (23) \\) accounts to exchange the element of 2 and 3 leaving 1 unchanged, \\( (231) \\) means to exchange 1 with 2, 2 with 3 and 3 with 1.

Notice for the above six transformation, they demonstrate some interesting algebraic structure:

- Exchanging cyclically leaves the transformation unchanged; exchanging 1 to 2 is equal to exchanging 2 to 1. eg. \\( (231) = (312) = (123), (12) = (21)\\)

- three-exchanges \\( (231), (312) \\) can be decompoed into two two-exchanges and vice versa. eg.\\( (231) = (23)(31) \\) and \\( (31)(12) = (312)  \\)

- Exchange two elements twice yields back the identity. eg. \\( (12)(12) = I \\)

Knowing their algebraic property now we are able to investigate some of the group properties they have. Firstly, one can multiply any of these six transformation and still able to retrieve one of the six transformation. In other words, composition is closed. To see this, we write out the \\( 6 \times 6 \\) group multiplication table. In which the columns and rows represent each element of the permutation, and the intersection is the multiplication between these elements.

| |
|---|---|---|---|---|---|---|
|     | I   |(12) | (13)| (23) | (132) | (312) |
| I   | I   |(12) | (13)| (23) | (132) | (312) |
|(12) |(12) |I    |(213)|(123) | (32)  | (31)  |
|(13) |(13) |(132)|I    |(213) | (21)  | (23)  |
|(23) |(23) |(312)|(132)|   I  | (13)  | (12)  |
|(132)|(132)|(23) | (21)| (13) | (312) | I     |
|(312)|(312)|(13) | (23)| (12) | I     | (132) |

This is awasome! No matter how we transform one of these six elements they still belong to this group of six. In addition to the closure property, we notice there is the identity element in every columns and rows, which means there is an inverse for every member of the group. 
$$ (132)(312) = I \rightarrow (132) = (312)^{-1} $$

By studying the algebraic structure of the permutation \\( S_{3} \\), we discover a bunch of group features that lead us to the territorry of group theory. Now we ask the question: Are there any mathematical objects beside the permutation group that also forms a group?


## A Group is a bunch of transformations that's close, cover the identity, contains inverse


Randomly pick some numbers, most probably they do not form a group. A group must satisfy some rules to make them a group. From the permutation group example, we know that they must satisfy closure. Intuitively, like a teacher telling a class of student to form a group of 6, they will most likely to find a bunch of friends that share some similar features, right? One will not pick an enemy or a stranger to be their group member.

Denote \\(g_{i}\\) be a element of a set, where the subscript \\( i \\) ranges over the size of the set. Then, for the set to form a group, the following rules must be imposed:

- Group is closed under group multiplication. A friend's friend is also a friend of him. \\(g_{i} * g_{j} = g_{k} \\)

- Group multiplication are associative. \\(g_{i} * g_{j} * g_{k} = (g_{i} * g_{j}) * g_{k} = g_{i} * (g_{j} * g_{k})\\)

- Existence of identity. \\(g_{I} * g_{i} = g_{i}\\)

- Existence of inverse.  \\(g_{i} * g_{j} = I\\)

You can check from the multiplication table we worked out for the permutation group that it indeed satisfies these four requirements. The natural question to ask next is are there any other example of group.

_Starting with one simple example: An equilateral triangle._

Let's think of how many possible transformations on the equilateral triangle that do not change its geometrical property. Well, we have the identity, two clockwise rotations by \\( 60^{\circ}, 120^{\circ} \\), and three reflections about each vertexes \\( (123) \\).


Hence, there are in total six transformations. We can as well adopt the notation we have been using in studying the permutation group of order six. For example, the two rotations could just be representsed by three-exchanges of the three vertexes.

$$ R(\pi / 3) = (312) , R(2\pi / 3) = (231), R(2\pi) = I $$

The same with relfection, it accounts for exchanging any two of the vertexes and keeping one unchanged

$$ r_{1} = (23) , r_{2} = (12), r_{3} = (13) $$

Are these six transformations satisfy the rules of a group? Definitely yes. Any above transformations permute the three vertexes, so no matter how we transforms them, it is still some orders of the vertex. Hence, it is closed under multiplication. As for the rules of exitence of identity and inverse, the two rotations are the inverse of each other, and reflections are inverse of themselves. \\( R(\pi/3)R(2\pi/3) = I\\) and \\( r_{1}r_{1} = I \\).

It is easy to check the associative of rotations. \\(R_{i} (R_{j} R_{k}) = (R_{i} R_{j}) R_{k} \\) must be true because rotation is like adding water into a bucket: the final volume do not care about the order. However, things are bit tricky to work with multiplication between reflection and rotation because these operation no necessarily commute. eg.\\( r_{i}R(\pi/3) \neq R(\pi/3) r_{i} \\) We call the symmetrical transformations on equilateral triangle the Dihedral group \\( D_{3} \\).

The symmetric transformations on a geometrical object do indeed forms a group. And probably this is why group theory has its reputation on symmetry objects.

Are they the same group, \\( S_{3} \\) and \\( D_{3} \\). They do look similar: both have six members containing two three-exchanges and three two-exchanges. If one works out the multiplication table for \\( D_{3} \\), they are not the same.

| |
|---|---|---|---|---|---|---|
|     | I   |(12) | (13)| (23) | (132) | (312) |
| I   | I   |(12) | (13)| (23) | (132) | (312) |
|(12) |(12) |I    |(213)|(123) | (32)  | (31)  |
|(13) |(13) |(132)|I    |(213) | (21)  | (23)  |
|(23) |(23) |(312)|(132)|   I  | (13)  | (12)  |
|(132)|(132)|(23) | (21)| (13) | (312) | I     |
|(312)|(312)|(13) | (23)| (12) | I     | (132) |

Firstly, in the case of permutation, cyclically exchanging the index do not change the operation. Whereas in the case of \\(D_{3} \\), it accounts for two different rotations \\(R(\pi/3) \\) and \\( R(2\pi/3) \\). So, they must be two distinctive group of the same order!

_A glimspe of number theory and group theory: the modulus algebra_

Let's define the modulus addition of integer to be a group multiplication. Denote \\((m, n) mod G = (m + n) mod G\\) for m and n represent integer that is less than G but greater than 0. Taking G to be 6, that restrict m and n to be integer between 0 to 5. To illustrate the calculation: \\((1, 3) = 4\\), \\((2, 4) = 0\\), and so on. Clearly, it satisfies the group axioms given above.

Magically by answering the question of what could be presented by a group member we find a common language between the symmetry in geometry and number thoery. The gut is that, as long as the group axioms are satisfied, anything can be a group, so the axioms of group theory may not be as stringent as we had mentioned previously. Quite the opposite, group theory could be diverse in a sense that it could be apply to various fields as long as the axioms are satisfied.





## Group Theory Application to the Physics of Condensed Matter

## Basic Mathematics

### Basic Mathematical Background: Introduction

This very first chapter gives a densed introduction to group theory. A group is a set with contraint that tie each set member. For instance, the requirement that closure of multiplication of the group ensure that we could get from any group member to another group element, which is precisely what bounds the group together. Following this line of logic, we would like to see how this mathematical definition naturally extend to. To do so, we simply expand the group size and examine what it looks like. It turns out that group closure suggests the rearrangement theorem.

$$ A_{k}G \in G$$

Multiplication with the group remains in the group.

One way of characterize the group structure is to write down the \\(N \times N\\) group multiplication table. As the size of the group extends, it opens up to much more possibilities of filling the group table. Then, how do we better organize this freedom of choice and categorize groups. 

One derivation I like about this book is how it present the derivation of Legrange Theorem from the definition of subgroup which I shall recast it in here. 

First, a larger group \\(G\\) could contain a subgroup \\(S\\). Take a group member \\(A_{g}\\) from \\(G\\) but not from \\(S\\), and multiplying that with \\(S\\) forms a unique partition of the group by the rearrangement theorem called cosets. Since any multiplication of \\(A_{g}\\) with \\(S\\) is unique, the order of the group must be a integer factor of the subgroup order.

One way to subdivide a group is to define the method of conjugation to segregate the group. For example, if group element \\(A\\) and \\(B\\) is related by \\(A = X^{-1}BX\\) then we say \\(A\\) and \\(B\\) are conjugate of each other. 

The motivation of this definition of group relation is manifest in its trace invariant and determinant invariant. For example, if there is a set of group member that do not change under conjugation that would suggest that there exist a part of group that have a identifiable trace and determinant. This methods partition a larger group into what we call a class. 

Building on top of these definition: the concept of subgroup and conjugation, we further define a factor group, which consist of multiples of self-conjugate subgroup, or conventionally known as the normal subgroup.

Sort of like giving a appetize to applying group theory, the author gives a brief view of relating symmetry with quantum mechanics. Provided that there exist a set of operation that commute with the Hamiltonian, that suggests there is a degeneracies of eigenstates sharing the same energy eigenvalues.

### Representation Theory and Basic Theorems

To make concepts useful we need a mapping that relate reality and the math, that's probably why represenation theory is so essential. It is also very inconvenient to walk around with a group multiplication table looking for application. Group multiplication table is complete information of the group but tedious and contains redundant information. We definitely need a better representation. For a heads up, this chapter contains proof to the orthogonality theorem and Shur's lemma which might by quite lengthy if we recast it here. Thus, it is more economical to rip those math out but saving the understandings and motivation behind.

A representation is a mapping that preserves the multiplicative structure of the group.

$$D(A)D(B) = D(AB)$$

When it comes to representing a entity, it often come in the freedom of choosing how it could be represented under similarity transformation. For example, a matrix could be used to represent group. If we stack up smaller matrix into a big one, it would be a reducible representation that could be reduced into smaller dimensionality but still representing a specific group member. 

To overcome the difficulty of non-uniqueness, we propose a irreducible representaiton of a group that cannot be reduced in dimensionality. The irreducible representation of the group is in some sense orthogonal to each other and unique; A result from the Great Orthogonality Theorem of group. Deriving this orthogonality relation requires knowing the unitary representaiton of group and the Shur's Lemma which will not be go through.

The orthogonality states that when sum over all the group element for the product of two different irreducible representation leads to a constant factor times a bunch of Dirac delta. Recall from studying the pure group properties, such orthogonality is not obvious but probably hidden. So, it does not create new information going from group theory to representation theory. But instead we condensed our information of the group by summing over all group member; one seek the global property of the group in going to representation theory.

$$\sum_{R}{D^{(\Gamma_{j})}_{\mu\nu}(R)D^{(\Gamma_{j^{\prime}})\ast}_{\mu^{\prime}\nu^{\prime}}(R^)}= \frac{h}{l_{j}}\delta_{\Gamma_{j}\Gamma_{j^{\prime}}}\delta_{\Gamma_{mu}\Gamma_{mu^{\prime}}}\delta_{\Gamma_{nu}\Gamma_{nu^{\prime}}}$$

where \\(h\\) here is the order of the group and \\(l_{j}\\) is the dimensionality of the irreducible represention.

One view that the author gives is the orthogonality relation hints a \\(h\\)dimensional vector space in which cap the maximum of total number of free indices \\(\sum_{j}{l^{2}_{j}}\\).


### Character of a Representation

#### Character is a function of class
Given a group, how can we come up with the form of the irreducible representation. Clearly only by the orthogonality theorem is not restrictive enough because any irreducible represenation could have its similarity transformation freedom. To get rid of this freedom, one define the character of a represenation as the trace of the representation. Since trace of the representation is invariant under similarity transformation.

$$ \chi^{\Gamma_{j}}(R) = Tr D^{\Gamma_{j}}(R)= \sum_{\mu=1}^{l_{h}}{D^{\Gamma_{j}}(R)_{\mu\mu}} $$

Recall, not only the trace of the representation is invariant under similairty transformation, so does the class of the group. That provides a link between the character of the irreducible representation to the class fo the group which is a known.

Playing around with the orthogonality theorem some important result for the orthogonality for the character could be derived. For example, summing over all the class is orthogonal in the product of irreducible representations. 

$$\sum_{k}{\left[ \chi^{\Gamma_{i}(C_{k})} \right]^{\ast} \chi^{\Gamma_{j}(C_{k})} N_{k} } = h\delta_{\Gamma_{i}, \Gamma_{j}}$$

Summing over all the irreducible representations is orthogonal in the product of classes. 

$$\sum_{\Gamma_{i}}{\left[ \chi^{\Gamma_{i}(C_{k})} \right]^{\ast} \chi^{\Gamma_{i}(C_{k^{\prime}})} } = h\delta_{k, k^{\prime}}$$

Applying these to the regular expression which is defined as representation that has the same dimension as the group order, we find that the sum of dimensionality square of the representation equal to the order of the group.

$$ \sum_{j}{l^{2}_{j}}= h$$

#### point groups and convention notation

One of the most straightforward application of group characters is geometry. Given a geometry object, what kind of symmetry operation would bring back to itself. In here, we particularly interested in the point group, where we are fixing a point of that given object and study the possible transformation. In addition to point group, there is space group that include translation which will not be included here.

The most qualitative picture of point group is the Schoenflies Symmetry Notation. It has the identity, rotation about an axis, reflection about an plane, inversion, improper rotation which consists of rotation follow by relfection, and lastly compound rotation-inversion.

The other more densed notation is the Hermann-Mauguin Symmetry Notation which is a equilvanet correspondent to the Schoenflies symmetry except that it is more simply encoded. There are in total 32 crstallographic point groups.

There is no five-fold symmetry for point groups from a geometrical and group theoretic argument. However, with the newly discovered carbon 60, which demonstrate a five fold symmetry showing a contradiction. Unlike simple crystal, carbon 60 is a large molecules contrast to some simple crystal that group theory works the best at.

By applying the character orthogonaliity to the point group, one could derive the matrix representation of the symmetry operation as well as categorizing the different class of symmetry operation for a given geometry.

#### Basis Functions

Knowing the trace of the irreducible representation along does not tell the whole story of the representing matrix as it only restrict the sum of the diagonal element. One way to get around this is to define the basis function. 

$$ \hat{P}_{R} | \Gamma_{n} \alpha \left\rangle = \sum_{j}{D^{\Gamma_{n}}(R)_{j\alpha} | \Gamma_{n}j \right\rangle} $$

where \\( | \Gamma_{n}\alpha \rangle\\) denotes the irreducible representation \\( n \\) of dimensionality  \\(alpha \le l_{n} \\).


Basis function encodes the orthogonality information of the representation as well as the weighting of the off-diagonal terms. For example, taking the inner product yields the entries of the representing matrix

$$ \langle \Gmma_{n^{\prime}}j^{\prime} | \hat{P_{R}} | \Gamma_{n}\alpha \rangle = \sum_{j} D^{\Gamma_{n}}(R)_{j\alpha} \langle \Gamma_{n^{\prime}j^{\prime}}| \Gamma_{n}j\rangle = D^{\Gamma_{n^{\prime}}}(R)_{j\alpha}\delta_{nn^{\prime}}$$

Therefore, as long as we know how each basis function transform under a particular group operation \\( \hat{P} \\), we could calculate the representing matrix.

Yet, we still need to guess the basis function for a particular group and use the projection operator to check. The procedure goes as

1. find arbitrary function F to start with

2. then use the projection operator \\( \hat{P}^{\Gamma_{n}}_{kk} \\) to project out one basis function  \\( \Gamma_{n} k \rangle\\)

3. We can then use \\( \hat{P}^{\Gamma_{n}}_{kl} \\) project out the rest. Or use \\( \hat{P}^{\Gamma_{n}}_{ll} \\) for each partner of the representation.

The author also gives insight into determining the basis function by identityfying the radial or the roational vector.







## Bibliography

{{< bibliography >}}