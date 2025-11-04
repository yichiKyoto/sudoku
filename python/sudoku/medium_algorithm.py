"""
Medium strategies integration for Sudoku solver.

This wrapper exposes Hidden Singles passes (box/row/column) with an iterative
driver that repeats until stable. It delegates to `hiddleSingles.py`, which
reuses the underlying implementations from `solver.py` for consistency.

Usage:
    from mediumAlgorithm import hidden_singles
    possibles = hidden_singles(possibles)  # iterates until no changes

Functions:
    - hidden_singles: run box/row/col hidden singles (iterative by default)
    - hidden_singles_once: run a single combined pass
"""

from typing import List, Set

import python.sudoku.hidden_singles as HS


Board = List[List[Set[int]]]


def hidden_singles(possibles: Board, *, max_passes: int = 10) -> Board:
    """Run Hidden Singles iteratively (box/row/col) until stable or capped."""
    return HS.hidden_singles(possibles, iterate=True, max_passes=max_passes)


def hidden_singles_once(possibles: Board) -> Board:
    """Run a single combined Hidden Singles pass (box, then row, then col)."""
    return HS.hidden_singles(possibles, iterate=False)
