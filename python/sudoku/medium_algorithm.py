"""
Medium strategies integration for Sudoku solver.

This module exposes common Medium-level techniques with a consistent API:
  - Hidden Singles (box/row/col) — iterative driver via `hidden_singles.py`
  - Pointing Pairs/Triples
  - Box-Line Reduction

For pointing and box-line reduction, both iterative and single-pass wrappers
are provided to match Hidden Singles ergonomics.

Usage examples:
    from python.sudoku.medium_algorithm import (
        hidden_singles, hidden_singles_once,
        pointing, pointing_once,
        box_line_reduction, box_line_reduction_once,
    )

    # Iterates until stable (or max_passes)
    possibles = hidden_singles(possibles)
    possibles = pointing(possibles)
    possibles = box_line_reduction(possibles)

    # Single pass
    possibles = hidden_singles_once(possibles)
    possibles = pointing_once(possibles)
    possibles = box_line_reduction_once(possibles)
"""

from typing import List, Set, Tuple

import python.sudoku.hidden_singles as HS
import python.sudoku.pointing as PP
import python.sudoku.box_line_reduction as BLR


Board = List[List[Set[int]]]


def hidden_singles(possibles: Board, *, max_passes: int = 10) -> Board:
    """Run Hidden Singles iteratively (box/row/col) until stable or capped."""
    return HS.hidden_singles(possibles, iterate=True, max_passes=max_passes)


def hidden_singles_once(possibles: Board) -> Board:
    """Run a single combined Hidden Singles pass (box, then row, then col)."""
    return HS.hidden_singles(possibles, iterate=False)


def _snapshot(possibles: Board) -> Tuple[Tuple[Tuple[int, ...], ...], ...]:
    """Create a hashable snapshot of the candidates grid for change detection."""
    return tuple(tuple(tuple(sorted(cell)) for cell in row) for row in possibles)


def pointing(possibles: Board, *, max_passes: int = 10) -> Board:
    """Run Pointing Pairs/Triples iteratively until stable or capped."""
    passes = 0
    while passes < max_passes:
        before = _snapshot(possibles)
        PP.pointing(possibles)
        after = _snapshot(possibles)
        passes += 1
        if before == after:
            break
    return possibles


def pointing_once(possibles: Board) -> Board:
    """Run a single Pointing Pairs/Triples pass."""
    return PP.pointing(possibles)


def box_line_reduction(possibles: Board, *, max_passes: int = 10) -> Board:
    """Run Box-Line Reduction iteratively until stable or capped."""
    passes = 0
    while passes < max_passes:
        before = _snapshot(possibles)
        BLR.box_line_reduction(possibles)
        after = _snapshot(possibles)
        passes += 1
        if before == after:
            break
    return possibles


def box_line_reduction_once(possibles: Board) -> Board:
    """Run a single Box-Line Reduction pass."""
    return BLR.box_line_reduction(possibles)
