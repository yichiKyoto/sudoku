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




# Easy
start = time.perf_counter()
possibles = easy_algorithm.run_easy(puzzles.puzzle1)
end = time.perf_counter()
print_possibles(possibles)
print(f"Easy bot took {end - start:.6f} seconds\n")

# Medium
start = time.perf_counter()
possibles = medium_algorithm.run_medium(puzzles.puzzle1)
end = time.perf_counter()
print_possibles(possibles)
print(f"Medium bot took {end - start:.6f} seconds\n")

# Hard
start = time.perf_counter()
possibles = hard_algorithm.run_hard(puzzles.puzzle1)
end = time.perf_counter()
print_possibles(possibles)
print(f"Hard bot took {end - start:.6f} seconds\n")

# Expert
start = time.perf_counter()
puzzle1 = expert_algorithm.run_expert(puzzles.puzzle1)
end = time.perf_counter()
print(puzzle1)
print(f"Expert bot took {end - start:.6f} seconds\n")

