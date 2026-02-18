---
title: "Operational Amplifier Basics"
date: "2026-01-30"
lastmod: "2026-01-30"
author: "Max"
weight: 4
showToc: true
TocOpen: false
bibfile: "./static/ee_basic/citation.json"
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



## 6. Ideal Op-Amp

### Op-Amp Basic

Basic rules of Op-Amp (refer back to JFET Op-Amp, CMRR)

$$ V_{out} = A(V_{+in} - V_{-in}) $$

1. No current flow

2. \\(V_{+in}  - V_{-in} = \\frac{V_{out}}{A} \approx 0\\). \\(V_{+in} = V_{-in}\\)

### Negative Feedback loop
((Unity gain Buffer/Follower))

((Inverting Amplifier))

((Non-inverting Amplifier))

Finite-Gain analysis answer the why to have large gain and feedback loop.



((Summing Amplifier))

((Differential Amplifier))

- Op-Amp Filters

((Differentiator))

((Integrator))


### Non-ideal Op-Amp

- Deviation from the ideal

input-biase current

impedance balancing

input offset current

Power-supply rejection

## 7. Noise Analysis

- Voltage-noise spectral density

- Johnson-Nyquist Noise

- Shot Noise 

- 1/f Noise

### Example: Instrumental Operation Amplifier

## 8. Oscillator

### Positive feedback loop

Comparator

((RC relaxation oscillator))

((Sine oscillator: Wien bridge))

((Schmit trigger))

((Monostable Oscillator))

((Bistable Oscillator))

((Parasitic Oscillation))
