import solver
import easy_algorithm
from tabulate import tabulate

def print_possibles(possibles):
  table = [[str(sorted(list(cell))) for cell in row] for row in possibles]
  print(tabulate(table, tablefmt="grid"))

puzzle = [
  [9, None, 3, None, None, None, 4, 2, None],
  [None, 5, None, 1, 7, None, None, 8, None],
  [6, None, None, 3, None, None, None, None, 5],
  [None, None, 2, None, None, None, 5, 9, 8],
  [5, None, None, 2, 9, 1, 7, 6, None],
  [4, None, None, 6, 5, 8, None, None, None],
  [None, 4, None, None, None, None, None, 7, None],
  [None, 2, 6, None, None, 5, 3, 4, None],
  [8, 9, None, None, 3, 7, 2, 5, None]
]


possibles = easy_algorithm.run_easy(puzzle)
print_possibles(possibles)