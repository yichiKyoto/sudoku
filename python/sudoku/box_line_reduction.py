"""
Box-Line Reduction wrapper.

Thin adapter over `solver.box_line_reduction`.
"""

from typing import List, Set

from . import solver


Board = List[List[Set[int]]]


def box_line_reduction(possibles: Board) -> Board:
    return solver.box_line_reduction(possibles)

