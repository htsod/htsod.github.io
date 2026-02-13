# example.py
# Max Liang
# created 06/05/23
# Description:
# Numeric Calculation of two dimensional Ising Model



import random
import numpy as np
from numpy.random import rand


L = 20         # Size of the square lattice
mcstp = 2000   # Number of MC sweep
eqstp = 2000   # Number of MC sweep for equilibration
D = 2          # Lattice dimension
N = L ** D     # Number of spins
NN = 4         # Number of nearest-neighbors
T_0 = 0.5      # Initial temperature
T_f = 10.0     # Final temperature
dT = 0.005     # Temperature step


c = 0          # Counter
T = T_0        # Temperature initialization
norm = 1./(mcstp*N*NN)
nr2 = norm/mcstp


def INIT(L):
    """Generates initial configuration (cfg): all spins up"""
    cfg = np.random.randint(1, size=(L, L)) + 1
    return cfg


def METROPOLIS(spin, beta):
    """The Metropolis algorithm"""
    for i in range(L):
        for j in range(L):
            x = np.random.randint(0, L) # X coordinate
            y = np.random.randint(0, L) # Y coordinate
            s = spin[x, y]
            # Periodic boundary conditions
            R = spin[(x + 1)%L, y] + spin[x, (y + 1)%L] \
            + spin[(x - 1)%L, y] + spin[x, (y - 1)%L]

            dE = 2*s*R # Energy difference
            if dE < 0:
                s *= -1 # Flips the spin
            elif rand() < np.exp(-dE*beta): # Throws the die
                s *= -1 # Flips the spin
            spin[x, y] = s # Returns the spin without flipping
        return spin
    


def CALCULATE_ENERGY(spin):
    """Computes energy"""
    En = 0.
    for x in range(len(spin)):
        for y in range(len(spin)):
            S = spin[x, y]
            # Periodic boundary conditions
            R = spin[(x + 1)%L, y] + spin[x, (y + 1)%L] \
            + spin[(x - 1)%L, y] + spin[x, (y - 1)%L]
            En -= S*R
    return En


def CALCULATE_MAGNETIZATION(spin):
    """Computes magnetization"""
    mgnt = np.sum(spin) # Magnetization
    return mgnt


#  Opens the output file "output.txt"
#  containing beta (B = 1/k_{B}T),
#  Tempearture (T), and the mean values of energy (E),
#  magnetization (M), specific heat (C_v),
#  and susceptibility (Chi) of the system
#  at every tempearture step.
g = open('output1.csv', 'w')
g.write('T^{-1},T,E,M,C_v,Chi\n')


while T <= T_f: # Temperature loop (main loop)
    T += dT
    summ = [0, 0, 0, 0] # Accumulators
    spin = INIT(L)
    c = c + 1
    B = 1./T; B2 = B*B
    for sweep in range(eqstp): # Equilibration loop
        METROPOLIS(spin, B)

    for sweep in range(mcstp): # Main MC loop
        METROPOLIS(spin, B)
        E = CALCULATE_ENERGY(spin)
        M = CALCULATE_MAGNETIZATION(spin)

        summ[0] += E # E accumulator
        summ[1] += E*E # E^2 accumulator
        summ[2] += M # M accumulator
        summ[3] += M*M # M^2 accumulator

# Thermodynamic averages at each temperature step
    mean_E = summ[0]*norm # Mean E
    mean_M = summ[2]*norm # Mean M
    C_v = (norm*summ[1] - nr2*summ[0]*summ[0])*B2 # Specific heat (C_v)
    chi = (norm*summ[1] - nr2*summ[2]*summ[2])*B # Susceptibility (Chi)
    g.write('%f,%f,%f,%f,%f,%f\n' \
            %(B, T, mean_E, mean_M, C_v, chi))
    print('>>> Temperature step %d' %(c))




