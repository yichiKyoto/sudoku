"""
Human-like Sudoku generator with difficulty classification.

Algorithm:
  1) Generate a full valid solution grid using backtracking.
  2) Greedily remove one clue at a time (random order), keeping removals only
     if the puzzle remains uniquely solvable and the human-like solver can
     solve it. Track the hardest technique used during solve.
  3) Optionally constrain removals to not exceed a requested difficulty tier.

Exports:
  - generate_full() -> Board
  - generate_puzzle(difficulty: str | None = None) -> (Board, str)
    Returns puzzle and its classified difficulty ('easy'|'medium'|'hard'|'expert').
"""

from __future__ import annotations

from typing import List, Tuple, Optional
import random

from .human_solver import solve_human, classify_difficulty
from .expert_algorithm import count_solutions
from . import sudoku_helper


Board = List[List[int]]


def generate_full(seed: Optional[int] = None) -> Board:
    if seed is not None:
        random.seed(seed)
    grid: Board = [[0 for _ in range(9)] for _ in range(9)]

    def candidates(r: int, c: int) -> List[int]:
        nums = list(range(1, 10))
        random.shuffle(nums)
        return [n for n in nums if valid(grid, r, c, n)]

    def valid(g: Board, r: int, c: int, v: int) -> bool:
        for i in range(9):
            if g[r][i] == v or g[i][c] == v:
                return False
        br, bc = (r // 3) * 3, (c // 3) * 3
        for i in range(3):
            for j in range(3):
                if g[br + i][bc + j] == v:
                    return False
        return True

    def fill(idx: int = 0) -> bool:
        if idx == 81:
            return True
        r, c = divmod(idx, 9)
        for v in candidates(r, c):
            grid[r][c] = v
            if fill(idx + 1):
                return True
            grid[r][c] = 0
        return False

    fill(0)
    return grid


_ORDER = {"easy": 0, "medium": 1, "hard": 2, "expert": 3}


def generate_puzzle(difficulty: Optional[str] = None, seed: Optional[int] = None) -> Tuple[Board, str]:
    """Generate a uniquely solvable puzzle using human-like gating.

    If `difficulty` is provided, removals are only accepted if the human-like
    classification does not exceed that tier. Returns (puzzle, actual_difficulty).
    """
    if seed is not None:
        random.seed(seed)
    full = generate_full()
    puzzle: Board = [row[:] for row in full]

    indices = list(range(81))
    random.shuffle(indices)

    for idx in indices:
        r, c = divmod(idx, 9)
        if puzzle[r][c] == 0:
            continue
        backup = puzzle[r][c]
        puzzle[r][c] = 0

        # Uniqueness check via bounded backtracking count
        try_board = [row[:] for row in puzzle]
        if count_solutions(try_board, limit=2) != 1:
            puzzle[r][c] = backup
            continue

        # Human-like solvability and classification constraint
        solved, hardest = solve_human(puzzle)
        if solved is None:
            # Requires expert/backtracking -> only keep if target is expert
            if difficulty is None or _ORDER.get(difficulty, 3) >= _ORDER["expert"]:
                # Accept removal; classification will be expert
                continue
            else:
                puzzle[r][c] = backup
                continue

        # Human techniques suffice; compute tier
        tier = classify_difficulty(puzzle)
        if difficulty is None or _ORDER[tier] <= _ORDER.get(difficulty, 3):
            # Keep removal
            continue
        else:
            # Too hard vs requested tier
            puzzle[r][c] = backup

    # Finalize classification
    final_tier = classify_difficulty(puzzle)
    return puzzle, final_tier

