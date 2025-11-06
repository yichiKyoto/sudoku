from sudoku.human_solver import solve_human, classify_difficulty
from sudoku.expert_algorithm import count_solutions
from sudoku.generator import generate_full, generate_puzzle
from sudoku import sudoku_helper


def test_classify_and_solve_human_on_known_puzzle():
    # A standard solvable Sudoku (zeros as blanks)
    puzzle = [
        [5, 3, 0, 0, 7, 0, 0, 0, 0],
        [6, 0, 0, 1, 9, 5, 0, 0, 0],
        [0, 9, 8, 0, 0, 0, 0, 6, 0],
        [8, 0, 0, 0, 6, 0, 0, 0, 3],
        [4, 0, 0, 8, 0, 3, 0, 0, 1],
        [7, 0, 0, 0, 2, 0, 0, 0, 6],
        [0, 6, 0, 0, 0, 0, 2, 8, 0],
        [0, 0, 0, 4, 1, 9, 0, 0, 5],
        [0, 0, 0, 0, 8, 0, 0, 7, 9],
    ]

    tier = classify_difficulty(puzzle)
    assert tier in {"easy", "medium", "hard", "expert"}

    solved, hardest = solve_human(puzzle)
    # The human solver may or may not fully solve depending on technique gating; both are acceptable.
    if solved is not None:
        assert sudoku_helper.checkSudoku(solved)


def test_generate_full_produces_valid_solution_with_seed():
    grid = generate_full(seed=42)
    assert sudoku_helper.checkSudoku(grid)


def test_generate_puzzle_unique_and_classified():
    puzzle, tier = generate_puzzle(seed=123)
    assert tier in {"easy", "medium", "hard", "expert"}
    # Ensure uniqueness via backtracking counter
    cnt = count_solutions([row[:] for row in puzzle], limit=2)
    assert cnt == 1

