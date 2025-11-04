"""
Hard strategies integration for Sudoku solver.

This module exposes an AIC (Alternating Inference Chains) wrapper that adapts
the existing implementation in `alternatingInferenceChain.py` to the solver's
possibility grid format (a 9x9 list of sets of candidate integers).

Usage:
    from hardAlgorithm import aic
    possibles = aic(possibles)

The function updates and returns `possibles` in-place style (mutates the sets
contained within the 9x9 list) to reflect eliminations found by AIC.
"""

from typing import List, Set, Dict, Tuple


def _list_to_dict(possibles: List[List[Set[int]]]) -> Dict[Tuple[int, int], Set[int]]:
    """Convert 9x9 list-of-sets possibles into dict keyed by (row, col)."""
    mapping: Dict[Tuple[int, int], Set[int]] = {}
    for r in range(9):
        for c in range(9):
            # copy the set to avoid aliasing
            mapping[(r, c)] = set(possibles[r][c])
    return mapping


def _dict_to_list(mapping: Dict[Tuple[int, int], Set[int]],
                  possibles: List[List[Set[int]]]) -> None:
    """Apply dict-of-sets state back into the 9x9 list-of-sets in place."""
    for r in range(9):
        for c in range(9):
            key = (r, c)
            if key in mapping:
                # replace contents of the existing set to preserve outer structure
                possibles[r][c].clear()
                possibles[r][c].update(mapping[key])


def aic(possibles: List[List[Set[int]]]) -> List[List[Set[int]]]:
    """Run Alternating Inference Chain eliminations on the given possibles grid.

    - Input/Output format: 9x9 list of sets of candidate ints (1..9).
    - Returns the same `possibles` reference after applying eliminations.
    """
    # Import here to avoid side effects during module import elsewhere
    import alternatingInferenceChain as AIC

    # Convert to the structure expected by AIC implementation
    as_dict = _list_to_dict(possibles)

    # Run AIC once. The implementation mutates and/or returns the mapping.
    updated = AIC.alternatingInferenceChain(as_dict)

    # Map back to the solver's list-of-sets structure
    _dict_to_list(updated, possibles)

    return possibles
