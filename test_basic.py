import solver
from tabulate import tabulate


puzzle = [
  [None, 5, None, None, None, None, None, 8, None],
  [None, None, None, None, 8, 6, None, None, None],
  [None, None, None, 2, None, 1, None, 7, None],
  [None, None, 9, None, 2, None, 6, None, 1],
  [2, 8, None, None, None, None, None, 5, 4],
  [7, None, 3, None, 6, None, 9, None, None],
  [None, 9, None, 6, None, 5, None, None, None],
  [None, None, None, 1, 7, None, None, None, None],
  [None, 3, None, None, None, None, None, 1, None]
]

def print_possibles(possibles):
  table = [[str(sorted(list(cell))) for cell in row] for row in possibles]
  print(tabulate(table, tablefmt="grid"))


possibles = solver.det_possibles(puzzle)
# print_possibles(possibles)
possibles = solver.obv_pairs(possibles)
print_possibles(possibles)
possibles = solver.y_wing(possibles)
print_possibles(possibles)
possibles = solver.hidden_singles(possibles)
print_possibles(possibles)
