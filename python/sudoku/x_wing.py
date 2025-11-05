"""
X-Wing wrapper.

Adapter over `solver.x_wing` following the same pattern as `hidden_singles.py`.
"""

from typing import List, Set

from . import solver


Board = List[List[Set[int]]]


def x_wing(possibles: Board) -> Board:
    return solver.x_wing(possibles)

