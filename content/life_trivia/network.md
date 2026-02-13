---
title: "Study Notes on Network Theory"
date: "2024-06-18"
lastmod: "2024-10-06"
# weight: 1
# aliases: ["/first"]
tags: ["Statistical Mechanics", "Review", "Network"]
author: "Max"
bibfile: ./static/network/citation.json

# author: ["Me", "You"]
showToc: true
TocOpen: false
draft: true
hidemeta: false
comments: false
description: "This blog aims to summerize the essential theory and method of network study."
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
    image: "<image path/url>" # image path/url
    alt: "<alt text>" # alt text
    caption: "<text>" # display caption under cover
    relative: false # when using page bundles set this to true
    hidden: true # only hide on current single page
editPost:
    URL: "https://github.com/<path_to_repo>/content"
    Text: "Suggest Changes" # edit text
    appendFilePath: true # to append file path to Edit link
---


__Network Theory (or Graph Theory in computer science)__ is the study of nodes connected by edges. At first glance, this simple framework may not seem physically insightful. However, historically, this abstraction has found wide-ranging applications across fields like social science, biology, and physics. Why can such a simplified model be physically useful? To understand this, let's first explore how physical events are understood.

Physics seeks to reveal the fundamental interactions between matter. Yet, as matter interacts in complex systems, emergent behaviors arise—phenomena that are unpredictable from knowledge of fundamental interactions alone. Even if we had perfect mastery over quantum mechanics, predicting collective behaviors in social sciences, for instance, would remain a formidable challenge. Could a supercomputer, encoding every physical detail, simulate the world precisely? Such an idea is not just impractical, but impossible, due to the overwhelming complexity involved.

The key insight is that not every microscopic interaction contributes to observable macroscopic behavior. Much of the detail is irrelevant, allowing us to "coarse-grain" reality into a simpler model that captures its essential features. This is where network theory proves invaluable. By drastically simplifying the system in question, we represent its components as indistinguishable entities—nodes—and focus on their connectivity with one another, ignoring unnecessary details.

With this basic framework, the study of networks unfolds in several key directions:

__Adding Complexity to Simple Networks:__

To account for relevant degrees of freedom, concepts like weighted and directed networks are introduced, representing more intricate interactions.


__Quantifying Network Structures:__

Techniques like clustering coefficients, centrality measures, and shortest-path algorithms help analyze the structure of networks.


__Modeling Collective Dynamics:__

Network theory is used to understand how systems behave dynamically, with examples like synchronization in many-body systems.


__Studying Ensembles of Networks:__


Various models, such as random and scale-free networks, explore how networks evolve under structural constraints.



## Simple networks

The most basis network contains \\(n\\) nodes and edges connecting the nodes. The connection could be represented by a \\( n \times n \\) matrix with entries \\( a_{ij} = 0\\) or \\(1\\) depending on the conection is on or off. We call this matrix to be the adjacency matrix \\(A\\).

### The adjacency matrix

### Components

### Independent paths, connectivity and cuts sets


### Graph laplacian




## 1. Adding complexity to simple networks

There are few ways we could add in complexity to the simplest network. We could add in either direction or weight to give a more detail information of the connection.

In addition, we could add in more layers of network.



### Weighted networks

$$ a_{ij} \subset [0, 1] $$


### Directed networks

$$ a_{ij} = 0, 1, -1$$

### Hypergraphs

$$ a^{\alpha \beta}_{ij} $$


### Bipartite networks


### Trees



### Planner networks





## 2. Quantifying network structure

### Centrality

### Groups of nodes


### Transitivity and the clustering coefficient

### Reciprocity

### Signed edges and structural balance

### Similarity

### Homophily and assortative mixing

### Cyclicity




## 3. Modelling collective dynamics





## 4. Ensembles of networks


### Small-world effect

### Scale-free networks






{{< bibliography cited >}}