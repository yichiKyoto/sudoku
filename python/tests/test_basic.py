from sudoku import solver
from tabulate import tabulate


# puzzle = [
#   [None, 5, None, None, None, None, None, 8, None],
#   [None, None, None, None, 8, 6, None, None, None],
#   [None, None, None, 2, None, 1, None, 7, None],
#   [None, None, 9, None, 2, None, 6, None, 1],
#   [2, 8, None, None, None, None, None, 5, 4],
#   [7, None, 3, None, 6, None, 9, None, None],
#   [None, 9, None, 6, None, 5, None, None, None],
#   [None, None, None, 1, 7, None, None, None, None],
#   [None, 3, None, None, None, None, None, 1, None]
# ]

def print_possibles(possibles):
  table = [[str(sorted(list(cell))) for cell in row] for row in possibles]
  print(tabulate(table, tablefmt="grid"))


# possibles = solver.det_possibles(puzzle)
# print_possibles(possibles)

# possibles = solver.hidden_singles(possibles)
# print_possibles(possibles)

# possibles = solver.y_wing(possibles)
# print_possibles(possibles)

# possibles = solver.hidden_singles(possibles)
# print_possibles(possibles)


# gset = {(8, 8), (7, 7), (6, 7), (7, 6), (6, 8), (6, 6), (8, 7)}
# solver.y_wing_rm(possibles, gset, 5, {(5,7)})
# print_possibles(possibles)

# possibles = solver.pointing(possibles)
# print_possibles(possibles)
# possibles = solver.y_wing(possibles)
# print_possibles(possibles)
# possibles = solver.hidden_singles(possibles)
# print_possibles(possibles)
# possibles = solver.y_wing(possibles)
# print_possibles(possibles)

puzzle = [
  [2, None, None, 3, None, 5, None, None, None],
  [None, None, 8, 2, 4, None, 3, None, None],
  [7, None, None, None, None, None, None, None, 2],
  [5, None, None, 4, None, None, None, 8, None],
  [None, None, 3, None, 2, None, 9, None, None],
  [None, 2, None, None, None, 8, None, None, 1],
  [8, None, None, None, None, None, None, None, 9],
  [None, None, 7, None, 8, 2, 1, None, None],
  [None, None, None, 5, None, 1, None, None, 4]
]

possibles = solver.det_possibles(puzzle)
print_possibles(possibles)
possibles = solver.hidden_singles(possibles)
print_possibles(possibles)
possibles = solver.col_hidden_singles(possibles)
print_possibles(possibles)
possibles = solver.row_hidden_singles(possibles)
print_possibles(possibles)
possibles = solver.hidden_singles(possibles)
print_possibles(possibles)
possibles = solver.col_hidden_singles(possibles)
print_possibles(possibles)
possibles = solver.x_wing(possibles)
print_possibles(possibles)
