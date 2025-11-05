"""
Human-like solver driver and difficulty classification.

Core idea (difficulty ranking):
  - Evaluate a puzzle by attempting to solve it in "modes" that gate which
    strategies are allowed. Start with Easy (only easy strategies). If it
    cannot be solved, advance to Medium (easy+medium), then Hard (easy+medium+hard).
    If none of those modes can solve it, label as Expert (requires backtracking).

Techniques per mode:
  - easy: hidden singles (box/row/col)
  - medium: + pointing, box-line reduction, obvious pairs
  - hard: + x-wing, y-wing, AIC (alternating inference chains)

Implementation details:
  - A greedy driver applies the allowed techniques in increasing difficulty
    order, restarting from the easiest allowed technique whenever progress is made.
  - For full human solve attempts, we also track the hardest technique used.
"""

from __future__ import annotations

from typing import List, Set, Tuple, Optional, Dict, Callable, Iterable

from . import solver
from .medium_algorithm import hidden_singles as hidden_singles_medium
from .hard_algorithm import aic as aic_hard
from .pointing import pointing as pointing_once
from .box_line_reduction import box_line_reduction as box_line_once
from .obvious_pairs import obv_pairs as obv_pairs_once
from .x_wing import x_wing as x_wing_once
from .y_wing import y_wing as y_wing_once


Board = List[List[int]]
Possibles = List[List[Set[int]]]


def _snapshot(possibles: Possibles) -> Tuple[Tuple[Tuple[int, ...], ...], ...]:
    return tuple(tuple(tuple(sorted(cell)) for cell in row) for row in possibles)


def _is_solved(possibles: Possibles) -> bool:
    return all(len(cell) == 1 for row in possibles for cell in row)


def _possibles_to_board(possibles: Possibles) -> Board:
    out: Board = [[0 for _ in range(9)] for _ in range(9)]
    for r in range(9):
        for c in range(9):
            out[r][c] = next(iter(possibles[r][c])) if len(possibles[r][c]) == 1 else 0
    return out


Technique = str


def _all_techniques() -> List[Tuple[Technique, Callable[[Possibles], Possibles]]]:
    """Master ordered list of techniques from easiest to hardest."""
    return [
        ("hidden_singles", lambda p: hidden_singles_medium(p, max_passes=1)),
        ("row_hidden_singles", solver.row_hidden_singles),
        ("col_hidden_singles", solver.col_hidden_singles),
        ("pointing", pointing_once),
        ("box_line_reduction", box_line_once),
        ("obvious_pairs", obv_pairs_once),
        ("x_wing", x_wing_once),
        ("y_wing", y_wing_once),
        ("aic", aic_hard),
    ]


def _solve_with_allowed(puzzle: Board,
                        allowed_names: Iterable[Technique],
                        max_passes: int = 200) -> Tuple[Optional[Board], Optional[Technique]]:
    """Solve using only techniques whose names are in `allowed_names`.

    Returns (solved_board, hardest_technique_used) or (None, hardest_used).
    """
    possibles: Possibles = solver.det_possibles(puzzle)
    all_ts = _all_techniques()
    name_to_idx: Dict[Technique, int] = {name: i for i, (name, _) in enumerate(all_ts)}
    allowed_set = set(allowed_names)
    techniques = [(name, fn) for name, fn in all_ts if name in allowed_set]

    hardest_used: Optional[Technique] = None

    passes = 0
    while passes < max_passes:
        passes += 1
        made_progress = False
        for name, fn in techniques:
            before = _snapshot(possibles)
            fn(possibles)
            after = _snapshot(possibles)
            if after != before:
                made_progress = True
                if hardest_used is None or name_to_idx[name] > name_to_idx[hardest_used]:
                    hardest_used = name
                break
        if _is_solved(possibles):
            return _possibles_to_board(possibles), hardest_used
        if not made_progress:
            break
    return None, hardest_used


def solve_human(puzzle: Board, max_passes: int = 200) -> Tuple[Optional[Board], Optional[Technique]]:
    """Attempt to solve `puzzle` using the full set of human-like techniques.

    Returns (solved_board, hardest_technique) or (None, hardest_technique) if stuck.
    """
    all_names = [name for name, _ in _all_techniques()]
    return _solve_with_allowed(puzzle, all_names, max_passes=max_passes)


def classify_difficulty(puzzle: Board) -> str:
    """Classify by the lowest mode that can solve the puzzle.

    Modes are cumulative: easy ⊂ medium ⊂ hard. If none can solve, returns 'expert'.
    """
    easy_names = ["hidden_singles", "row_hidden_singles", "col_hidden_singles"]
    medium_names = easy_names + ["pointing", "box_line_reduction", "obvious_pairs"]
    hard_names = medium_names + ["x_wing", "y_wing", "aic"]

    solved, _ = _solve_with_allowed(puzzle, easy_names)
    if solved is not None:
        return "easy"

    solved, _ = _solve_with_allowed(puzzle, medium_names)
    if solved is not None:
        return "medium"

    solved, _ = _solve_with_allowed(puzzle, hard_names)
    if solved is not None:
        return "hard"

    return "expert"
