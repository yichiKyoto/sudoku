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

import hidden_singles as HS
import pointing as PP
import box_line_reduction as BLR
import solver
import easy_algorithm

Board = List[List[Set[int]]]
Grid = List[List[int]]

def hidden_singles(possibles: Board, *, max_passes: int = 10) -> Board:
    """Run Hidden Singles iteratively (box/row/col) until stable or capped."""
    return HS.hidden_singles(possibles, iterate=True, max_passes=max_passes)


def _snapshot(possibles: Board) -> Tuple[Tuple[Tuple[int, ...], ...], ...]:
    """Create a hashable snapshot of the candidates grid for change detection."""
    return tuple(tuple(tuple(sorted(cell)) for cell in row) for row in possibles)


def pointing(possibles: Board, *, max_passes: int = 10) -> Board:
    """Run Pointing Pairs/Triples iteratively until stable or capped."""
    passes = 0
    while passes < max_passes:
        before = _snapshot(possibles)
        possibles = solver.pointing(possibles)
        after = _snapshot(possibles)
        passes += 1
        if before == after:
            break
    return possibles


def box_line_reduction(possibles: Board, *, max_passes: int = 10) -> Board:
    """Run Box-Line Reduction iteratively until stable or capped."""
    passes = 0
    while passes < max_passes:
        before = _snapshot(possibles)
        possibles = solver.box_line_reduction(possibles)
        after = _snapshot(possibles)
        passes += 1
        if before == after:
            break
    return possibles


def obvious_pairs(possibles: Board, *, max_passes: int = 10) -> Board:
    passes = 0
    while passes < max_passes:
        before = _snapshot(possibles)
        possibles = solver.obv_pairs(possibles)
        after = _snapshot(possibles)
        passes += 1
        if before == after:
            break
    return possibles

def run_medium(grid: Grid, *, max_passes: int = 1000):
    possibles = solver.det_possibles(grid)
    passes = 0
    while passes < max_passes:
        before = _snapshot(possibles)
        # possibles = easy_algorithm.single_candidate(grid)
        possibles = solver.hidden_singles(possibles)
        possibles = solver.col_hidden_singles(possibles)
        possibles = solver.row_hidden_singles(possibles)
        possibles = pointing(possibles)
        possibles = box_line_reduction(possibles)
        possibles = obvious_pairs(possibles)
        after = _snapshot(possibles)
        passes += 1
        if before == after:
            break
    return possibles