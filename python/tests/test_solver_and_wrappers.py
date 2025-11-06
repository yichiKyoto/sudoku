import copy

import pytest

from sudoku import solver
from sudoku import hidden_singles as HS
from sudoku import pointing as PP
from sudoku import box_line_reduction as BLR
from sudoku import x_wing as XW
from sudoku import y_wing as YW
from sudoku.easy_algorithm import hidden_singles as hs_easy
from sudoku.medium_algorithm import (
    hidden_singles as hs_medium,
    pointing as pointing_iter,
    box_line_reduction as blr_iter,
)
from sudoku.hard_algorithm import (
    x_wing as xw_iter,
    y_wing as yw_iter,
    aic as aic_run,
)


def _as_possibles(puzzle):
    """Helper: build 9x9 list-of-sets from int/None grid via solver.det_possibles."""
    return solver.det_possibles(puzzle)


def test_det_possibles_propagates_given_numbers():
    # Simple puzzle with a few givens to check propagation of exclusions
    puzzle = [
        [1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]
    poss = _as_possibles(puzzle)

    # Given value is a singleton set
    assert poss[0][0] == {1}

    # Check row and column peers do not contain 1 as a candidate
    for c in range(1, 9):
        assert 1 not in poss[0][c]
    for r in range(1, 9):
        assert 1 not in poss[r][0]

    # Check subgrid peers do not contain 1
    for r in range(0, 3):
        for c in range(0, 3):
            if (r, c) != (0, 0):
                assert 1 not in poss[r][c]


def _is_subset_grid(a, b):
    """Return True if for every cell, a[r][c] is a subset of b[r][c]."""
    for r in range(9):
        for c in range(9):
            if not a[r][c].issubset(b[r][c]):
                return False
    return True


@pytest.mark.parametrize(
    "strategy",
    [
        lambda p: HS.hidden_singles(p, iterate=False),  # single-pass HS (box/row/col)
        hs_easy,                                        # iterative HS via easy API
        hs_medium,                                      # iterative HS via medium API
        PP.pointing,                                    # pointing once
        pointing_iter,                                  # pointing iterative
        BLR.box_line_reduction,                         # box-line once
        blr_iter,                                       # box-line iterative
        XW.x_wing,                                      # x-wing once
        xw_iter,                                        # x-wing iterative
        YW.y_wing,                                      # y-wing once
        yw_iter,                                        # y-wing iterative
    ],
)
def test_strategies_are_monotonic(strategy):
    # A moderate puzzle; strategies should only remove candidates, never add
    puzzle = [
        [2, 0, 0, 3, 0, 5, 0, 0, 0],
        [0, 0, 8, 2, 4, 0, 3, 0, 0],
        [7, 0, 0, 0, 0, 0, 0, 0, 2],
        [5, 0, 0, 4, 0, 0, 0, 8, 0],
        [0, 0, 3, 0, 2, 0, 9, 0, 0],
        [0, 2, 0, 0, 0, 8, 0, 0, 1],
        [8, 0, 0, 0, 0, 0, 0, 0, 9],
        [0, 0, 7, 0, 8, 2, 1, 0, 0],
        [0, 0, 0, 5, 0, 1, 0, 0, 4],
    ]
    poss_before = _as_possibles(puzzle)
    # Deep copy snapshot for set comparisons
    before_copy = [[set(cell) for cell in row] for row in poss_before]

    strategy(poss_before)

    # After must be a subset per cell (no candidate additions)
    assert _is_subset_grid(poss_before, before_copy)


def test_aic_adapter_roundtrip_and_monotonic():
    puzzle = [
        [2, 0, 0, 3, 0, 5, 0, 0, 0],
        [0, 0, 8, 2, 4, 0, 3, 0, 0],
        [7, 0, 0, 0, 0, 0, 0, 0, 2],
        [5, 0, 0, 4, 0, 0, 0, 8, 0],
        [0, 0, 3, 0, 2, 0, 9, 0, 0],
        [0, 2, 0, 0, 0, 8, 0, 0, 1],
        [8, 0, 0, 0, 0, 0, 0, 0, 9],
        [0, 0, 7, 0, 8, 2, 1, 0, 0],
        [0, 0, 0, 5, 0, 1, 0, 0, 4],
    ]
    poss = _as_possibles(puzzle)
    before = [[set(cell) for cell in row] for row in poss]

    # Run the AIC adapter; should not raise and should only eliminate candidates
    aic_run(poss)

    assert _is_subset_grid(poss, before)

