import signal
import time
import easy_algorithm
import medium_algorithm
import hard_algorithm
import expert_algorithm
import sudoku_helper
import cell_remover
import gridShift
import rotation
import increase_average

def handle_timeout(signum, frame):
    raise TimeoutError

# Function to get performance data for a solve function on a puzzle
# Times out the function after 5 seconds
#
# Adapted from
# https://testdriven.io/tips/34676c2c-927a-4256-8393-1df736ee7ce1/
def run_with_timeout(solve_func, puzzle):
    signal.signal(signal.SIGALRM, handle_timeout)
    signal.alarm(5)

    try:
        # Run solve function
        start = time.perf_counter()
        output = solve_func(puzzle)
        end = time.perf_counter()
        total_time = round(end - start, 6)

        if sudoku_helper.checkSudoku(output):
            print(total_time)
        else:
            print("Unsolved")
    except TimeoutError:
        print("Timeout")
    finally:
        signal.alarm(0)

def collect_performance(solve_func, puzzle):
    for unfill in range(1, 81):
        puzzle = cell_remover.unfill_cell(puzzle, unfill)
        run_with_timeout(solve_func, puzzle)

# --- Collect Performance Data (adjust puzzle num 1-5 to test) 

# collect_performance(easy_algorithm.run_easy, cell_remover.puzzle_5())
# collect_performance(medium_algorithm.run_medium, cell_remover.puzzle_5())
# collect_performance(hard_algorithm.run_hard, cell_remover.puzzle_5())
# collect_performance(expert_algorithm.run_expert, cell_remover.puzzle_5())

def collect_performance(solve_func, puzzle, perm_func):
    for unfill in range(1, 81):
        puzzle = perm_func(cell_remover.unfill_cell(puzzle, unfill))
        run_with_timeout(solve_func, puzzle)

# --- Collects Performance Date on Permuted Puzzle (adjust puzzle num and perm func to test)
# Permutation functions include:
#   gridShift.gridShiftRight
#   gridShift.gridShiftDown
#   rotation.rotate
#   increase_average.increase_average

# collect_performance(easy_algorithm.run_easy, cell_remover.puzzle_5(), increase_average.increase_average)
# collect_performance(medium_algorithm.run_medium, cell_remover.puzzle_5(), increase_average.increase_average)
# collect_performance(hard_algorithm.run_hard, cell_remover.puzzle_5(), increase_average.increase_average)
collect_performance(expert_algorithm.run_expert, cell_remover.puzzle_5(), increase_average.increase_average)