import solver
import easy_algorithm
import medium_algorithm
import hard_algorithm
import expert_algorithm
import time
import puzzles

from tabulate import tabulate



def print_possibles(possibles):
  table = [[str(sorted(list(cell))) for cell in row] for row in possibles]
  print(tabulate(table, tablefmt="grid"))



puzzes = {"easy_puzzle": puzzles.easy_puzzle, "medium_puzzle": puzzles.medium_puzzle, "hard_puzzle": puzzles.hard_puzzle}

# Easy

for puzz in puzzes:

  start = time.perf_counter()
  possibles = easy_algorithm.run_easy(puzzes[puzz])
  end = time.perf_counter()
  print_possibles(possibles)
  easy = f"{end - start:.6f}"

  # Medium
  start = time.perf_counter()
  possibles = medium_algorithm.run_medium(puzzes[puzz])
  end = time.perf_counter()
  print_possibles(possibles)
  medium = f"{end - start:.6f}"

  # Hard
  start = time.perf_counter()
  possibles = hard_algorithm.run_hard(puzzes[puzz])
  end = time.perf_counter()
  print_possibles(possibles)
  hard = f"{end - start:.6f}"

  # Expert
  start = time.perf_counter()
  puzzle1 = expert_algorithm.run_expert(puzzes[puzz])
  print(puzzle1)
  end = time.perf_counter()
  expert = f"{end - start:.6f}"

  with open("performance.txt", "a") as out_file:
    out_file.write(f"{puzz}|{easy}|{medium}|{hard}|{expert}\n")

# possibles = medium_algorithm.run_medium(puzzles.medium_puzzle)
# print_possibles(possibles)