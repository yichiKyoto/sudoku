def rm_from_subgrid(possibles, row, col, to_rm):
    # Find the top-left corner of the subgrid
    start_row = (row // 3) * 3
    start_col = (col // 3) * 3

    # Loop through the 3x3 subgrid
    for r in range(start_row, start_row + 3):
        for c in range(start_col, start_col + 3):
            if (r, c) != (row, col):
                possibles[r][c].discard(to_rm)  # safely remove if present

def rm_from_rows(possibles, row, col, to_rm):
    # Loop through all columns in the given row
    for c in range(9):
        if c != col:
            possibles[row][c].discard(to_rm)

def rm_from_cols(possibles, row, col, to_rm):
    # Loop through all rows in the given column
    for r in range(9):
        if r != row:
            possibles[r][col].discard(to_rm)

def det_possibles(puzzle):
  #2D 9 by 9 array each cell containing possible values
  possibles = [[{1, 2, 3, 4, 5, 6, 7, 8, 9} for _ in range(9)] for _ in range(9)]

  for row in range(9):
    for col in range(9):
      number = puzzle[row][col]
      if number:
          possibles[row][col] = {number}
          rm_from_rows(possibles, row, col, number)
          rm_from_cols(possibles, row, col, number)
          rm_from_subgrid(possibles, row, col, number)
  return possibles


def hidden_singles(possibles):
    for box_row in range(0, 9, 3):
        for box_col in range(0, 9, 3):

            # Initialise hash table for this subgrid
            H = {n: 0 for n in range(1, 10)}

            # Count numbers in subgrid
            for r in range(box_row, box_row + 3):
                for c in range(box_col, box_col + 3):
                    S = possibles[r][c] # for instance S = {1, 3, 4}
                    for val in S:
                      H[val] += H.get(val, 0) + 1


            # For each number that appears exactly once
            for x, count in H.items():
                if count == 1:
                    # Find its location and assign it in S
                    for r in range(box_row, box_row + 3):
                        for c in range(box_col, box_col + 3):
                            S = possibles[r][c]
                            if x in S:
                                S[r][c] = {x}
                            break



def get_row_wing(possibles, wing_col, pivot_col, a_val, c_val):
  for r in range(9):
      row_wing = possibles[r][pivot_col]
      if a_val in row_wing and c_val in row_wing:
          # remove c from the intersecting place
          possibles[r][wing_col].discard(c_val)

# Y wing
def get_col_wing(possibles, pivot_set, pivot_row, pivot_col):
    for c in range(9):
      col_wing = possibles[pivot_row][c]
      col_wing = tuple(col_wing)
      if len(col_wing) == 2 and col_wing[0] in pivot_set:
        a_val = None
        for pivot_val in pivot_set:
            if pivot_val != col_wing[0]:
              a_val = pivot_val
        c_val = col_wing[1]
        get_row_wing(possibles, c, pivot_col, a_val, c_val)
      elif len(col_wing) == 2 and col_wing[1] in pivot_set:
        a_val = None
        for pivot_val in pivot_set:
            if pivot_val != col_wing[1]:
              a_val = pivot_val
        c_val = col_wing[0]
        get_row_wing(possibles, c, pivot_col, a_val, c_val)

def y_wing(possibles):
    for row in range(9):
        for col in range(9):
            pivot_set = possibles[row][col]
            if len(pivot_set) == 2:
              get_col_wing(possibles, pivot_set, row, col)



