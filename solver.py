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

def obv_pairs_helper(possibles, box_row, box_col, pivot_set):
    for r in range(box_row, box_row + 3):
        for c in range(box_col, box_col + 3):
            if len(possibles[r][c]) != 1 and possibles[r][c] != pivot_set:
                possibles[r][c] = possibles[r][c] - pivot_set
            if len(possibles[r][c]) == 1:
                next_rm = next(iter(possibles[r][c]))
                rm_from_subgrid(possibles, r, c, next_rm)
                rm_from_rows(possibles, r, c, next_rm)
                rm_from_cols(possibles, r, c, next_rm)
    return possibles

def obv_pairs(possibles):
    for box_row in range(0, 9, 3):
        for box_col in range(0, 9, 3):
            hash_map = {} # {pair: count}
            for r in range(box_row, box_row + 3):
                for c in range(box_col, box_col + 3):
                    if len(possibles[r][c]) == 2:
                        pair = tuple(sorted(possibles[r][c]))
                        hash_map[pair] = hash_map.get(pair, 0) + 1
            for pivot_tuple in hash_map:
                if hash_map[pivot_tuple] == 2:
                    possibles = obv_pairs_helper(possibles, box_row, box_col, set(pivot_tuple))
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
                    # print(S)
                    for val in S:
                      H[val] += 1
            # print(H)

            # For each number that appears exactly once
            for x, count in H.items():
                if count == 1:
                    # Find its location and assign it in S
                    for r in range(box_row, box_row + 3):
                        for c in range(box_col, box_col + 3):
                            S = possibles[r][c]
                            if x in S and len(S) != 1:
                                possibles[r][c] = {x}
                                rm_from_rows(possibles, r, c, x)
                                rm_from_cols(possibles, r, c, x)
                                rm_from_subgrid(possibles, r, c, x)
    return possibles

def y_wing_search(pr, pc):
    # row search
    row_viewers = set()
    for r in range(9):
        if r != pr:
            row_viewers.add((r, pc))
    # print(row_viewers)
    # column search
    col_viewers = set()
    for c in range(9):
        if c != pc:
            col_viewers.add((pr, c))

    # subgrid search
    subgrid_viewers = set()
    start_r, start_c = 3 * (pr // 3), 3 * (pc // 3)
    for r in range(start_r, start_r + 3):
        for c in range(start_c, start_c + 3):
            if (r, c) != (pr, pc):
                subgrid_viewers.add((r, c))
    # print(subgrid_viewers)
    return row_viewers | col_viewers | subgrid_viewers

def y_wing_rm(possibles, sees_both, to_rm, exclusions):
    for b_row, b_col in sees_both:
        if (b_row, b_col) in exclusions:
            continue

        if sees_both == {(8, 4), (7, 7), (8, 3), (7, 6), (8, 5), (7, 8)}:
            print(possibles[b_row][b_col], end = ",")
            # print(to_rm)
        if to_rm & possibles[b_row][b_col] and len(possibles[b_row][b_col]) != 1:

            # print(possibles[b_row][b_col])
            print(to_rm)
            possibles[b_row][b_col] = possibles[b_row][b_col] - to_rm
            # print(possibles[b_row][b_col])
            if len(possibles[b_row][b_col]) == 1:
                next_rm = next(iter(possibles[b_row][b_col]))
                rm_from_subgrid(possibles, b_row, b_col, next_rm)
                rm_from_rows(possibles, b_row, b_col, next_rm)
                rm_from_cols(possibles, b_row, b_col, next_rm)
    # return possibles
# def y_wing(possibles):
#     # Iterate over every cell as the pivot (2 candidates)
#     for pr in range(9):
#         for pc in range(9):
#             pivot = possibles[pr][pc]
#             if len(pivot) != 2:
#                 continue
#             # print(pivot)

#                 # print(j_shared)
#             wings = list(y_wing_search(pr, pc))
#             # if (pr, pc) == (7, 8):
#             #     print([possibles[r][c] for r, c in wings])
#             for i in range(0, len(wings)):
#                 for j in range(i + 1, len(wings)):
#                     i_row, i_col = wings[i]
#                     i_wing = possibles[i_row][i_col]
#                     j_row, j_col = wings[j]
#                     j_wing = possibles[j_row][j_col]
#                     if len(i_wing) != 2 or len(j_wing) != 2:
#                         # print(f"{str(i_wing)}, +  {str(j_wing)}")
#                         continue
#                     i_shared = i_wing & pivot
#                     j_shared = j_wing & (pivot - i_shared)
#                     # if i_wing == {5, 8} and j_wing == {8, 9}:
#                     #     print(i_shared)
#                     #     print(j_shared)
#                     if len(i_shared) == 1 and len(j_shared) == 1:
#                         sees_both = y_wing_search(i_row, i_col) & y_wing_search(j_row, j_col)

#                         to_rm = i_wing & j_wing
#                         # if i_wing == {5, 8} and j_wing == {8, 9}:
#                         #     print(sees_both)
#                         #     print(to_rm)
#                         print(f"{str(i_wing)}, +  {str(j_wing)}")
#                         y_wing_rm(possibles, sees_both, to_rm, {(pr, pc)})
#     return possibles

def y_wing(possibles):
    for pr in range(9):
        for pc in range(9):
            pivot = possibles[pr][pc]
            if len(pivot) != 2:
                continue

            A, B = sorted(pivot)
            pivot_view = y_wing_search(pr, pc)

            # Find wings that form the Y-Wing pattern
            for (r1, c1) in pivot_view:
                wing1 = possibles[r1][c1]
                if len(wing1) != 2 or len(wing1 & pivot) != 1:
                    continue

                # Wing1 should have (A, C) or (B, C) pattern
                shared_with_pivot = wing1 & pivot
                C_candidates = wing1 - pivot
                if len(C_candidates) != 1:
                    continue
                C = next(iter(C_candidates))

                # Look for second wing that completes the pattern
                for (r2, c2) in pivot_view:
                    if (r2, c2) == (r1, c1):
                        continue
                    wing2 = possibles[r2][c2]
                    if len(wing2) != 2 or len(wing2 & pivot) != 1:
                        continue

                    # Wing2 should have the other pivot candidate + C
                    if wing2 == {next(iter(pivot - shared_with_pivot)), C}:
                        # Find cells visible to both wings
                        wing1_view = y_wing_search(r1, c1)
                        wing2_view = y_wing_search(r2, c2)
                        sees_both = wing1_view & wing2_view

                        # Remove C from cells seen by both wings
                        for cell in sees_both:
                            if cell not in [(pr, pc), (r1, c1), (r2, c2)]:
                                if C in possibles[cell[0]][cell[1]]:
                                    possibles[cell[0]][cell[1]].remove(C)
    return possibles


def row_elim(possibles, col, exclusions, to_rm):
    for row in range(0, 9):
        if to_rm in possibles[row][col] and (row, col) not in exclusions:
            possibles[row][col].remove(to_rm)
            if len(possibles[row][col]) == 1:
                next_rm = next(iter(possibles[row][col]))
                rm_from_subgrid(possibles, row, col, next_rm)
                rm_from_rows(possibles, row, col, next_rm)
                rm_from_cols(possibles, row, col, next_rm)

def col_elim(possibles, row, exclusions, to_rm):
    for col in range(0, 9):
        if to_rm in possibles[row][col] and (row, col) not in exclusions:
            possibles[row][col].remove(to_rm)
            if len(possibles[row][col]) == 1:
                next_rm = next(iter(possibles[row][col]))
                rm_from_subgrid(possibles, row, col, next_rm)
                rm_from_rows(possibles, row, col, next_rm)
                rm_from_cols(possibles, row, col, next_rm)

def row_check(locs):
    if len(locs) != 2 or len(locs) != 3:
        return False

    srow, scol = locs[0]
    for (row, col) in locs:
        if col != scol:
            return False
    return scol

def col_check(locs):
    if len(locs) != 2 or len(locs) != 3:
        return False

    srow, scol = locs[0]
    for (row, col) in locs:
        if row != srow:
            return False
    return srow

def pointing(possibles):
    for box_row in range(0, 9, 3):
        for box_col in range(0, 9, 3):
            h_map = {1:[], 2:[], 3:[], 4:[], 5:[], 6:[], 7:[], 8:[], 9:[]}
            for r in range(box_row, box_row + 3):
                for c in range(box_col, box_col + 3):
                    for num in possibles[r][c]:
                        h_map[num].append((r, c))
            for n in range(1, 10):
                locs = h_map[n]
                fixed_col = row_check(locs)
                fixed_row = col_check(locs)
                if fixed_col != False:
                    row_elim(possibles, fixed_col, locs, n)
                if fixed_row != False:
                    col_elim(possibles, fixed_row, locs, n)
    return possibles



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
# def y_wing_search(pr, pc):
#     # row search
#     row_viewers = set()
#     for r in range(9):
#         if r != pr:
#             row_viewers.add((r, pc))

#     # column search
#     col_viewers = set()
#     for c in range(9):
#         if c != pc:
#             row_viewers.add((pr, c))

#     # subgrid search
#     subgrid_viewers = set()
#     start_r, start_c = 3 * (pr // 3), 3 * (pc // 3)
#     for r in range(start_r, start_r + 3):
#         for c in range(start_c, start_c + 3):
#             if (r, c) != (pr, pc):
#                 subgrid_viewers.add((r, c))

#     return row_viewers | col_viewers | subgrid_viewers

# def y_wing(possibles):
#     # Iterate over every cell as the pivot (2 candidates)
#     for pr in range(9):
#         for pc in range(9):
#             pivot = possibles[pr][pc]
#             if len(pivot) != 2:
#                 continue

#             # Find all potential wings that share one candidate with pivot
#             wings = []
#             for wr in range(9):
#                 row_wing = possibles[wr][pc]
#                 if len(row_wing) == 2 and len(row_wing & pivot) == 1:
#                     wings.append((wr, pc))

#             for wc in range(9):
#                 col_wing = possibles[pr][wc]
#                 if len(col_wing) == 2 and len(col_wing & pivot) == 1:
#                     wings.append((pr, wc))

#             start_r, start_c = 3 * (pr // 3), 3 * (pc // 3)
#             print(pivot)
#             for r in range(start_r, start_r + 3):
#                 for c in range(start_c, start_c + 3):
#                     subgrid_wing = possibles[r][c]
#                     if len(subgrid_wing) == 2 and len(subgrid_wing & pivot) == 1:
#                         wings.append((r, c))

#             # Try pairing wings to form a Y-Wing
#             for i in range(len(wings)):
#                 wing1_row, wing1_col = wings[i]
#                 wing1 = possibles[wing1_row][wing1_col]

#                 for j in range(i + 1, len(wings)):
#                     wing2_row, wing2_col = wings[j]
#                     wing2 = possibles[wing2_row][wing2_col]
#                     print(wing1)
#                     print(wing2)
#                     # Both wings must share exactly one candidate with the pivot, and different ones
#                     shared = wing1 & wing2
#                     viewers = y_wing_search(wing1_row, wing1_col) & y_wing_search(wing2_row, wing2_col)

#                     for v_row, v_col in viewers:
#                         old_len = len(possibles[v_row][v_col])
#                         possibles[v_row][v_col] = possibles[v_row][v_col] - shared
#                         print(possibles[v_row][v_col])
#                         new_len = len(possibles[v_row][v_col])
#                         if len(possibles[v_row][v_col]) == 1 and old_len != new_len: # might be a problem
#                             next_rm = next(iter(possibles[v_row][v_col]))
#                             rm_from_subgrid(possibles, v_row, v_col, next_rm)
#                             rm_from_rows(possibles, v_row, v_col, next_rm)
#                             rm_from_cols(possibles, v_row, v_col, next_rm)
#     return possibles






# x wing

# def x_wing_helper(possibles, pivot_set, col1, col2):
#    for row in range(9):


# def x_wing(possibles):
#    for row in range(9):
#       for i in range(9):
#          for j in range(i + 1, 9):
#             if possibles[row][i] == possibles[row][j] and len(possibles[row][i]) == 2:


# naked singles
# def singles(possibles):
#     for r in range(9):
#         for c in range(9):
#             if len(possibles[r][c]) == 1:
#                 number = None
#                 for n in possibles[r][c]:
#                     number = n
#                 rm_from_rows(possibles, r, c, number)
#                 rm_from_cols(possibles, r, c, number)
#                 rm_from_subgrid(possibles, r, c, number)
#     return possibles


