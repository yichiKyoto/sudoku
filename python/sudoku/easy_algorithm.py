"""
Easy strategies integration for Sudoku solver.

This module exposes common Easy-level techniques with a consistent API:
  - Single Candidate (aka Naked Singles)
  - Hidden Singles (box/row/col)

Each technique provides both an iterative driver (repeats until stable or
`max_passes` is reached) and a single-pass function with a `_once` suffix.

Usage examples:
    from python.sudoku.easy_algorithm import (
        single_candidate, single_candidate_once,
        hidden_singles, hidden_singles_once,
    )

    # Iterates until stable (or max_passes)
    possibles = single_candidate(possibles)
    possibles = hidden_singles(possibles)

    # Single pass
    possibles = single_candidate_once(possibles)
    possibles = hidden_singles_once(possibles)
"""

from typing import List, Set, Tuple

import hidden_singles as HS
import solver


Board = List[List[Set[int]]]
Grid = List[List[int]]

def _snapshot(possibles: Board) -> Tuple[Tuple[Tuple[int, ...], ...], ...]:
    """Create a hashable snapshot of the candidates grid for change detection."""
    return tuple(tuple(tuple(sorted(cell)) for cell in row) for row in possibles)


def single_candidate_once(possibles: Board) -> Board:
    """Propagate all currently single-valued cells once.

    For every cell with exactly one candidate, remove that value from its
    row, column and subgrid using the shared helpers in `solver`.
    """
    for r in range(9):
        for c in range(9):
            if len(possibles[r][c]) == 1:
                # Extract the sole number in this cell
                number = next(iter(possibles[r][c]))
                # Propagate eliminations around this placement
                solver.rm_from_rows(possibles, r, c, number)
                solver.rm_from_cols(possibles, r, c, number)
                solver.rm_from_subgrid(possibles, r, c, number)
    return possibles

def single_candidate(grid: Grid, *, max_passes: int = 1000) -> Board:
    possibles = grid
    passes = 0
    while passes < max_passes:
        before = _snapshot(possibles)
        single_candidate_once(possibles)
        after = _snapshot(possibles)
        passes += 1
        if before == after:
            break
    return possibles



# Friendly aliases
naked_singles = single_candidate
naked_singles_once = single_candidate_once

def run_easy(grid: Grid):
    possibles = solver.det_possibles(grid) 
    return solver.possibles_to_int_array(single_candidate(possibles))
