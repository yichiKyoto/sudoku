from sudoku.expert_algorithm import solve_copy, count_solutions
from sudoku import sudoku_helper


def test_expert_solve_copy_solves_standard_puzzle():
    puzzle = [
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
    solved = solve_copy(puzzle)
    assert solved is not None
    assert sudoku_helper.checkSudoku(solved)


def test_expert_count_solutions_limits_early():
    # An empty puzzle has many solutions; the function should stop at limit
    puzzle = [[0 for _ in range(9)] for _ in range(9)]
    cnt = count_solutions([row[:] for row in puzzle], limit=2)
    assert cnt == 2

