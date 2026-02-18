---
title: "Nonlinear Devices"
date: "2026-01-30"
lastmod: "2026-01-30"
author: "Max"
weight: 3
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

A nonlinear devices are made out of non-ohmic materials. The voltage and current across the component no longer linear but can be modelled mathematically as a function of the another variables:

$$ I = f(V) $$

This section primarily focus on nonlinear components that are built from __semiconductor__.

## 3. Diode

- Physical behavior of Diode

Diodes are built from connecting a __n-doped__ material with a __p-doped__ material. Both are semiconductor materials; they are neither conductor or insultor, something in between. A n-doped material refers to adding a few more negatively charged atom in the semiconductor thus granting a slight net negatively charge and vice versa for a p-doped material.

Attaching the n-doped with the p-doped will form a depletion region at the interface of the two. A depletion is a result of the movement of postive and negative doping; they fuse together to form a region of neutral region. This creates a separation of the n-type and p-type material.

1. Forward biased.

2. Reverse leakage

3. Reverse breakdown


- Ideal Diode behavior

$$ I = I_{s} \left( e^{V/nV_{T}} -1  \right)$$

$$ V_{T} = \frac{k_{B} T}{e}$$


These behaviors give rise to a variant of designs. 

1. Rectifier

2. Power regulation

3. Switching


### Rectifier

- half-wave


{{< figure src="/ee_basic/figures/nonlinear_devices/half_wave_rectifier.png" 
           alt="" 
           caption="" 
           target="_blank" 
           width="380" 
           height="300" 
           align="center" 
           class="custom-class">}}

{{< figure src="/ee_basic/figures/nonlinear_devices/half_wave_rectifier_plt.png" 
           alt="" 
           caption="" 
           target="_blank" 
           width="380" 
           height="300" 
           align="center" 
           class="custom-class">}}


- full-wave

{{< figure src="/ee_basic/figures/nonlinear_devices/full_wave_rectifier.png" 
           alt="" 
           caption="" 
           target="_blank" 
           width="380" 
           height="300" 
           align="center" 
           class="custom-class">}}

{{< figure src="/ee_basic/figures/nonlinear_devices/full_wave_rectifier_plt.png" 
           alt="" 
           caption="" 
           target="_blank" 
           width="380" 
           height="300" 
           align="center" 
           class="custom-class">}}

### Zener diode

((Zener diode for power regulation))

{{< figure src="/ee_basic/figures/nonlinear_devices/zener_diode_regulator.png" 
           alt="" 
           caption="" 
           target="_blank" 
           width="380" 
           height="300" 
           align="center" 
           class="custom-class">}}

### Schottky Diodes

Switching circuit.


### Example: Radio: AM Demodulation


Radio Signal

AM modulation

Modelling the signal.

Design the circuitry.

Analytical analysis. (load, response, bandwidth)

Numerical verification.

(better as different blog and here just briefly mention the basic)



## 4. Simple Model of Bipolar Junction Transistor (BJT)

### Ideal behavior

Semiconductor understanding of BJT. Characteristic of BJT and region of behavior. Simple model of BJT (beta). Graph of BJT.

Amplifier and switching circuit.

### Voltage follower: Input and output impedence

((follower))


{{< figure src="/ee_basic/figures/nonlinear_devices/bjt_follower.png" 
           alt="" 
           caption="" 
           target="_blank" 
           width="380" 
           height="380" 
           align="center" 
           class="custom-class">}}




### Common-mode amplifier

((common-mode amplifier))


{{< figure src="/ee_basic/figures/nonlinear_devices/bjt_invt_amplifier.png" 
           alt="" 
           caption="" 
           target="_blank" 
           width="380" 
           height="380" 
           align="center" 
           class="custom-class">}}


- ac input imepedence

- high-pass input

- loading condition

- gain

- output impedance


### Transistor Differential Amplifier

- common-mode signal

- differential signal

- CMRR

## 5. Mathematical Model of BJT

Mathematical Modeling of DC BJT Behavior

Input impedance and output impedance consideration of transistor

### Ebers-Moll-Early Model

- Voltage control

Ebers-Moll model

temperature dependence

intrinsic resistance

((curent mirror))


{{< figure src="/ee_basic/figures/nonlinear_devices/bjt_current_mirror.png" 
           alt="" 
           caption="" 
           target="_blank" 
           width="350" 
           height="420" 
           align="center" 
           class="custom-class">}}


- application to differential amplifier

- Early effect


### Gummel-Poon Model

- non-ideal behavior (temperature, high gain)

- little 'h' parameters evaluation


## 6. Field-Effect Transistor

### FET behavior

- Simple model

- Quantitative behavior
Region of behavior

((JFET Current Source))


{{< figure src="/ee_basic/figures/nonlinear_devices/jft_current_source.png" 
           alt="" 
           caption="" 
           target="_blank" 
           width="270" 
           height="430" 
           align="center" 
           class="custom-class">}}



((JFET Source Follower))


{{< figure src="/ee_basic/figures/nonlinear_devices/jft_follower.png" 
           alt="" 
           caption="" 
           target="_blank" 
           width="380" 
           height="380" 
           align="center" 
           class="custom-class">}}


((JFET Common-Source Amplifier))

{{< figure src="/ee_basic/figures/nonlinear_devices/jft_invt_amplifier.png" 
           alt="" 
           caption="" 
           target="_blank" 
           width="380" 
           height="380" 
           align="center" 
           class="custom-class">}}



- JFET Differential Amplifier

((Differential Amplifier))


{{< figure src="/ee_basic/figures/nonlinear_devices/jft_diff_amplifier.png" 
           alt="" 
           caption="" 
           target="_blank" 
           width="380" 
           height="380" 
           align="center" 
           class="custom-class">}}


common-mode, differential signal

CMRR

### Other FET Model

- MOSFET

((Analog Switch))

{{< figure src="/ee_basic/figures/nonlinear_devices/mft_analog_switch.png" 
           alt="" 
           caption="" 
           target="_blank" 
           width="380" 
           height="300" 
           align="center" 
           class="custom-class">}}


- DIAC and TRIAC

((dimmer circuit))

- IGBTs

((Switching large voltage and current))



### Example: Power regulation

## Bibliography

{{< bibliography cited>}}