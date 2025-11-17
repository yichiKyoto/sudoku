"""
Backtracking solver (expert-level fallback).

Exposes utility functions for backtracking-based solving and counting
solutions. Keeps import side-effects minimal (no top-level execution).
"""

from typing import List, Optional

import sudoku_helper

Grid = List[List[int]]


# https://www.geeksforgeeks.org/dsa/sudoku-backtracking-7/
def _solve_inplace(puzzle: Grid, row: int, col: int) -> bool:
    if row == 8 and col == 9:
        return True

    if col == 9:
        row += 1
        col = 0

    if puzzle[row][col]:
        return _solve_inplace(puzzle, row, col + 1)

    for num in range(1, 10):
        puzzle[row][col] = num
        if sudoku_helper.checkCell(puzzle, row, col):
            if _solve_inplace(puzzle, row, col + 1):
                return True
        puzzle[row][col] = None

    return False


def solve_copy(puzzle: Grid) -> Optional[Grid]:
    """Return a solved copy using backtracking, or None if unsolvable."""
    clone = [row[:] for row in puzzle]
    ok = _solve_inplace(clone, 0, 0)
    return clone if ok else None


def count_solutions(puzzle: Grid, limit: int = 2) -> int:
    """Count solutions up to `limit` using backtracking with early exit."""
    count = 0

    def dfs() -> bool:
        nonlocal count
        # Find next empty
        for r in range(9):
            for c in range(9):
                if puzzle[r][c] == 0:
                    for n in range(1, 10):
                        puzzle[r][c] = n
                        if sudoku_helper.checkCell(puzzle, r, c):
                            if dfs():
                                return True
                        puzzle[r][c] = 0
                    return False
        # No empty: one solution found
        count += 1
        return count >= limit

    # Work on a copy to avoid modifying input
    board = [row[:] for row in puzzle]
    puzzle[:] = board  # rebind local name for dfs closure
    dfs()
    return count


if __name__ == "__main__":
    # Simple manual test
    mat: Grid = [
        [3, 0, 6, 5, 0, 8, 4, 0, 0],
        [5, 2, 0, 0, 0, 0, 0, 0, 0],
        [0, 8, 7, 0, 0, 0, 0, 3, 1],
        [0, 0, 3, 0, 1, 0, 0, 8, 0],
        [9, 0, 0, 8, 6, 3, 0, 0, 5],
        [0, 5, 0, 0, 9, 0, 6, 0, 0],
        [1, 3, 0, 0, 0, 0, 2, 5, 0],
        [0, 0, 0, 0, 0, 0, 0, 7, 4],
        [0, 0, 5, 2, 0, 6, 3, 0, 0],
    ]

    solved = solve_copy(mat)
    if solved:
        for row in solved:
            print(" ".join(map(str, row)))
        print("valid:", sudoku_helper.checkSudoku(solved))
    else:
        print("unsolvable")

def run_expert(grid: Grid):
    _solve_inplace(grid, 0, 0)
    return grid