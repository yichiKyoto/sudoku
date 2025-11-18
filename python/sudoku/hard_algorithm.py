"""
Hard strategies integration for Sudoku solver.

This module exposes wrappers for hard-level techniques with a consistent API:
  - X-Wing (single-pass and iterative)
  - Y-Wing (single-pass and iterative)
  - AIC (Alternating Inference Chains) — adapter to dict-based impl

Usage examples:
    from python.sudoku.hard_algorithm import (
        x_wing, x_wing_once,
        y_wing, y_wing_once,
        aic,
    )

All functions mutate the provided 9x9 list-of-sets grid in place and also
return it for convenience.
"""

from typing import List, Set, Dict, Tuple
import easy_algorithm
import medium_algorithm
import solver

Board = List[List[Set[int]]]


def _snapshot(possibles: Board) -> Tuple[Tuple[Tuple[int, ...], ...], ...]:
    """Create a hashable snapshot of the candidates grid for change detection."""
    return tuple(tuple(tuple(sorted(cell)) for cell in row) for row in possibles)


def _list_to_dict(possibles: Board) -> Dict[Tuple[int, int], Set[int]]:
    """Convert 9x9 list-of-sets possibles into dict keyed by (row, col)."""
    mapping: Dict[Tuple[int, int], Set[int]] = {}
    for r in range(9):
        for c in range(9):
            # copy the set to avoid aliasing
            mapping[(r, c)] = set(possibles[r][c])
    return mapping


def _dict_to_list(mapping: Dict[Tuple[int, int], Set[int]],
                  possibles: Board) -> None:
    """Apply dict-of-sets state back into the 9x9 list-of-sets in place."""
    for r in range(9):
        for c in range(9):
            key = (r, c)
            if key in mapping:
                # replace contents of the existing set to preserve outer structure
                possibles[r][c].clear()
                possibles[r][c].update(mapping[key])


def aic(possibles: Board) -> Board:
    """Run Alternating Inference Chain eliminations on the given possibles grid.

    - Input/Output format: 9x9 list of sets of candidate ints (1..9).
    - Returns the same `possibles` reference after applying eliminations.
    """
    # Import here to avoid side effects during module import elsewhere
    import alternating_inference_chain as AIC

    # Convert to the structure expected by AIC implementation
    as_dict = _list_to_dict(possibles)

    # Run AIC once. The implementation mutates and/or returns the mapping.
    updated = AIC.alternatingInferenceChain(as_dict)

    # Map back to the solver's list-of-sets structure
    _dict_to_list(updated, possibles)

    return possibles


def x_wing(possibles: Board, *, max_passes: int = 10) -> Board:
    """Run X-Wing iteratively until stable or capped."""
    passes = 0
    while passes < max_passes:
        before = _snapshot(possibles)
        possibles = solver.x_wing(possibles)
        after = _snapshot(possibles)
        passes += 1
        if before == after:
            break
    return possibles


def y_wing(possibles: Board, *, max_passes: int = 10) -> Board:
    """Run Y-Wing iteratively until stable or capped."""
    passes = 0
    while passes < max_passes:
        before = _snapshot(possibles)
        possibles = solver.y_wing(possibles)
        after = _snapshot(possibles)
        passes += 1
        if before == after:
            break
    return possibles

Grid = List[List[int]]
def run_hard(grid: Grid, *, max_passes: int = 1000) -> Board:
    possibles = solver.det_possibles(grid)
    passes = 0
    while passes < max_passes:
        before = _snapshot(possibles)
        # possibles = easy_algorithm.single_candidate(grid)
        possibles = medium_algorithm.hidden_singles(possibles)
        possibles = medium_algorithm.pointing(possibles)
        possibles = medium_algorithm.box_line_reduction(possibles)
        possibles = medium_algorithm.obvious_pairs(possibles)
        possibles = y_wing(possibles)
        possibles = x_wing(possibles)
        possibles = aic(possibles)
        after = _snapshot(possibles)
        passes += 1
        if before == after:
            break
    return possibles