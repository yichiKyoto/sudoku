"""
Y-Wing wrapper.

Adapter over `solver.y_wing` keeping strategy modules consistent.
"""

from typing import List, Set

from . import solver


Board = List[List[Set[int]]]


def y_wing(possibles: Board) -> Board:
    return solver.y_wing(possibles)

