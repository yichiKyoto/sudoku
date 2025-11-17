"""
Pointing pairs/triples wrapper.

Provides a thin adapter over `solver.pointing` to keep strategy modules
consistent with `hidden_singles.py`.
"""

from typing import List, Set

import solver


Board = List[List[Set[int]]]


def pointing(possibles: Board) -> Board:
    """Apply pointing pairs/triples once and return `possibles`."""
    return solver.pointing(possibles)

