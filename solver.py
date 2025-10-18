def rm_from_subgrid(possibles, row, col, to_rm):
    # Find the top-left corner of the subgrid
    start_row = (row // 3) * 3
    start_col = (col // 3) * 3

    # Loop through the 3x3 subgrid
    for r in range(start_row, start_row + 3):
        for c in range(start_col, start_col + 3):
            if (r, c) != (row, col) and to_rm in possibles[r][c]:
                possibles[r][c].remove(to_rm)  # safely remove if present
                if len(possibles[r][c]) == 1:
                    next_rm = next(iter(possibles[r][c]))
                    rm_from_subgrid(possibles, r, c, next_rm)
                    rm_from_rows(possibles, r, c, next_rm)
                    rm_from_cols(possibles, r, c, next_rm)

def rm_from_rows(possibles, row, col, to_rm):
    # Loop through all columns in the given row
    for c in range(9):
        if c != col and to_rm in possibles[row][c]:
            possibles[row][c].remove(to_rm)
            if len(possibles[row][c]) == 1:
                next_rm = next(iter(possibles[row][c]))
                rm_from_subgrid(possibles, row, c, next_rm)
                rm_from_rows(possibles, row, c, next_rm)
                rm_from_cols(possibles, row, c, next_rm)

def rm_from_cols(possibles, row, col, to_rm):
    # Loop through all rows in the given column
    for r in range(9):
        if r != row and to_rm in possibles[r][col]:
            possibles[r][col].remove(to_rm)
            if len(possibles[r][col]) == 1:
                next_rm = next(iter(possibles[r][col]))
                rm_from_subgrid(possibles, r, col, next_rm)
                rm_from_rows(possibles, r, col, next_rm)
                rm_from_cols(possibles, r, col, next_rm)

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
                                rm_from_rows(possibles, r, c, x)
                                rm_from_cols(possibles, r, c, x)
                            break


# y wing
# def get_row_wing(possibles, wing_col, pivot_col, a_val, c_val):
#   for r in range(9):
#       row_wing = possibles[r][pivot_col]
#       if a_val in row_wing and c_val in row_wing:
#           # remove c from the intersecting place
#           possibles[r][wing_col].discard(c_val)

# def get_col_wing(possibles, pivot_set, pivot_row, pivot_col):
#     for c in range(9):
#       col_wing = possibles[pivot_row][c]
#       col_wing = tuple(col_wing)
#       if len(col_wing) == 2 and col_wing[0] in pivot_set:
#         a_val = None
#         for pivot_val in pivot_set:
#             if pivot_val != col_wing[0]:
#               a_val = pivot_val
#         c_val = col_wing[1]
#         get_row_wing(possibles, c, pivot_col, a_val, c_val)
#       elif len(col_wing) == 2 and col_wing[1] in pivot_set:
#         a_val = None
#         for pivot_val in pivot_set:
#             if pivot_val != col_wing[1]:
#               a_val = pivot_val
#         c_val = col_wing[0]
#         get_row_wing(possibles, c, pivot_col, a_val, c_val)

# def y_wing(possibles):
#     for row in range(9):
#         for col in range(9):
#             pivot_set = possibles[row][col]
#             if len(pivot_set) == 2:
#               get_col_wing(possibles, pivot_set, row, col)


# possibles[r][c] is a set of candidates, e.g. {2, 5}

def y_wing(possibles):
    changed = False

    # Iterate over every cell as the pivot (2 candidates)
    for pr in range(9):
        for pc in range(9):
            pivot = possibles[pr][pc]
            if len(pivot) != 2:
                continue
            a, b = tuple(pivot)

            # Find all potential wings that share one candidate with pivot
            wings = []
            for wr in range(9):
                for wc in range(9):
                    if (wr, wc) == (pr, pc):
                        continue
                    cell = possibles[wr][wc]
                    if len(cell) == 2 and len(cell & pivot) == 1:
                        wings.append((wr, wc, cell))

            # Try pairing wings to form a Y-Wing
            for i in range(len(wings)):
                wr1, wc1, wing1 = wings[i]
                for j in range(i + 1, len(wings)):
                    wr2, wc2, wing2 = wings[j]

                    # Both wings must share exactly one candidate with the pivot, and different ones
                    shared1 = pivot & wing1
                    shared2 = pivot & wing2
                    if shared1 == shared2:
                        continue  # both share the same one -> not a Y-Wing

                    # The non-shared candidates of wings should be equal
                    non_shared1 = list(wing1 - pivot)[0]
                    non_shared2 = list(wing2 - pivot)[0]
                    if non_shared1 != non_shared2:
                        continue

                    target_val = non_shared1  # the value to eliminate

                    # Wings must "see" each other — share a row, column, or box
                    if not sees(wr1, wc1, wr2, wc2):
                        continue

                    # Eliminate target_val from any cell that sees both wings
                    for r in range(9):
                        for c in range(9):
                            if (r, c) in [(pr, pc), (wr1, wc1), (wr2, wc2)]:
                                continue
                            if target_val in possibles[r][c]:
                                if sees(r, c, wr1, wc1) and sees(r, c, wr2, wc2):
                                    possibles[r][c].discard(target_val)
                                    changed = True
    return changed


def sees(r1, c1, r2, c2):
    """Return True if two cells share a row, column, or 3x3 box."""
    return (
        r1 == r2
        or c1 == c2
        or (r1 // 3 == r2 // 3 and c1 // 3 == c2 // 3)
    )



# x wing

# def x_wing_helper(possibles, pivot_set, col1, col2):
#    for row in range(9):


# def x_wing(possibles):
#    for row in range(9):
#       for i in range(9):
#          for j in range(i + 1, 9):
#             if possibles[row][i] == possibles[row][j] and len(possibles[row][i]) == 2:


# naked singles
def singles(possibles):
    for r in range(9):
        for c in range(9):
            if len(possibles[r][c]) == 1:
                number = None
                for n in possibles[r][c]:
                    number = n
                rm_from_rows(possibles, r, c, number)
                rm_from_cols(possibles, r, c, number)
                rm_from_subgrid(possibles, r, c, number)
    return possibles