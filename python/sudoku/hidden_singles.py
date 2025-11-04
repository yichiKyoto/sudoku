"""
Hidden Singles strategies for Sudoku.

This module provides row, column, and subgrid hidden single passes, plus a
convenience function that iterates these passes until no further changes
occur (or a max pass cap is reached).

It reuses the underlying implementations in `solver.py` to ensure consistent
elimination behavior and propagation via `rm_from_*` helpers.
"""

from typing import List, Set, Tuple

from . import solver


Board = List[List[Set[int]]]


def subgrid_hidden_singles(possibles: Board) -> Board:
    """Apply subgrid (3x3 box) hidden singles once."""
    return solver.hidden_singles(possibles)


def row_hidden_singles(possibles: Board) -> Board:
    """Apply row-based hidden singles once."""
    return solver.row_hidden_singles(possibles)


def col_hidden_singles(possibles: Board) -> Board:
    """Apply column-based hidden singles once."""
    return solver.col_hidden_singles(possibles)


def _snapshot(possibles: Board) -> Tuple[Tuple[Tuple[int, ...], ...], ...]:
    """Create a hashable snapshot of the candidates grid for change detection."""
    return tuple(
        tuple(tuple(sorted(cell)) for cell in row)
        for row in possibles
    )


def hidden_singles(possibles: Board, iterate: bool = True, max_passes: int = 10) -> Board:
    """Run hidden singles across boxes, rows, and columns.

    - If `iterate` is True, repeats passes until no change or `max_passes` reached.
    - Returns the same `possibles` reference after applying eliminations.
    """
    if not iterate:
        subgrid_hidden_singles(possibles)
        row_hidden_singles(possibles)
        col_hidden_singles(possibles)
        return possibles

    passes = 0
    while passes < max_passes:
        before = _snapshot(possibles)
        subgrid_hidden_singles(possibles)
        row_hidden_singles(possibles)
        col_hidden_singles(possibles)
        after = _snapshot(possibles)
        passes += 1
        if before == after:
            break
    return possibles
