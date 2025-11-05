"""
Obvious (naked) pairs wrapper.

Adapter over `solver.obv_pairs`. Exposes both `obv_pairs` and an alias
`obvious_pairs` for readability.
"""

from typing import List, Set

from . import solver


Board = List[List[Set[int]]]


def obv_pairs(possibles: Board) -> Board:
    return solver.obv_pairs(possibles)


def obvious_pairs(possibles: Board) -> Board:
    return obv_pairs(possibles)

