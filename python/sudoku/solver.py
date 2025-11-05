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

def obv_pairs_helper_row(possibles, row, pivot_set):
    for c in range(9):
        if len(possibles[row][c]) != 1 and possibles[row][c] != pivot_set:
            possibles[row][c] = possibles[row][c] - pivot_set
        if len(possibles[row][c]) == 1:
            next_rm = next(iter(possibles[row][c]))
            rm_from_subgrid(possibles, row, c, next_rm)
            rm_from_rows(possibles, row, c, next_rm)
            rm_from_cols(possibles, row, c, next_rm)
    return possibles

def obv_pairs_helper_col(possibles, col, pivot_set):
    for r in range(9):
        if len(possibles[r][col]) != 1 and possibles[r][col] != pivot_set:
            possibles[r][col] = possibles[r][col] - pivot_set
        if len(possibles[r][col]) == 1:
            next_rm = next(iter(possibles[r][col]))
            rm_from_subgrid(possibles, r, col, next_rm)
            rm_from_rows(possibles, r, col, next_rm)
            rm_from_cols(possibles, r, col, next_rm)
    return possibles

def obv_pairs(possibles):
    # Check 3x3 subgrids
    for box_row in range(0, 9, 3):
        for box_col in range(0, 9, 3):
            hash_map = {}  # {pair: count}
            for r in range(box_row, box_row + 3):
                for c in range(box_col, box_col + 3):
                    if len(possibles[r][c]) == 2:
                        pair = tuple(sorted(possibles[r][c]))
                        hash_map[pair] = hash_map.get(pair, 0) + 1
            for pivot_tuple, cnt in hash_map.items():
                if cnt == 2:
                    possibles = obv_pairs_helper(possibles, box_row, box_col, set(pivot_tuple))

    # Check rows
    for r in range(9):
        hash_map = {}
        for c in range(9):
            if len(possibles[r][c]) == 2:
                pair = tuple(sorted(possibles[r][c]))
                hash_map[pair] = hash_map.get(pair, 0) + 1
        for pivot_tuple, cnt in hash_map.items():
            if cnt == 2:
                possibles = obv_pairs_helper_row(possibles, r, set(pivot_tuple))

    # Check columns
    for c in range(9):
        hash_map = {}
        for r in range(9):
            if len(possibles[r][c]) == 2:
                pair = tuple(sorted(possibles[r][c]))
                hash_map[pair] = hash_map.get(pair, 0) + 1
        for pivot_tuple, cnt in hash_map.items():
            if cnt == 2:
                possibles = obv_pairs_helper_col(possibles, c, set(pivot_tuple))
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


def col_hidden_singles(possibles):
    # hidden singles for columns
    # check every column
    for col in range(0, 9):
        H = {n: 0 for n in range(1, 10)}
        for row in range(0, 9):
            S = possibles[row][col]
            for num in S:
                H[num] += 1
        for row in range(0, 9):
            S = possibles[row][col]
            for num in S:
                if H[num] == 1 and len(S) != 1:
                    possibles[row][col] = {num}
                    rm_from_rows(possibles, row, col, num)
                    rm_from_cols(possibles, row, col, num)
                    rm_from_subgrid(possibles, row, col, num)
    return possibles

def row_hidden_singles(possibles):
    # hidden singles for columns
    # check every column
    for row in range(0, 9):
        H = {n: 0 for n in range(1, 10)}
        for col in range(0, 9):
            S = possibles[row][col]
            for num in S:
                H[num] += 1
        for col in range(0, 9):
            S = possibles[row][col]
            for num in S:
                if H[num] == 1 and len(S) != 1:
                    possibles[row][col] = {num}
                    rm_from_rows(possibles, row, col, num)
                    rm_from_cols(possibles, row, col, num)
                    rm_from_subgrid(possibles, row, col, num)
    return possibles

def y_wing_search(pr, pc):
    # same-column peers
    row_viewers = set()
    for r in range(9):
        if r != pr:
            row_viewers.add((r, pc))
    # print(row_viewers)
    # same-row peers
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


def y_wing(possibles):
    for pr in range(9):
        for pc in range(9):
            pivot = possibles[pr][pc]
            if len(pivot) != 2:
                continue

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
                                    if len(possibles[cell[0]][cell[1]]) == 1:
                                        next_rm = next(iter(possibles[cell[0]][cell[1]]))
                                        rm_from_subgrid(possibles, cell[0], cell[1], next_rm)
                                        rm_from_rows(possibles, cell[0], cell[1], next_rm)
                                        rm_from_cols(possibles, cell[0], cell[1], next_rm)
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
    if len(locs) != 2 and len(locs) != 3:
        return False

    srow, scol = locs[0]
    for (row, col) in locs:
        if col != scol:
            return False
    return scol

def col_check(locs):
    if len(locs) != 2 and len(locs) != 3:
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
                if fixed_col is not False:
                    row_elim(possibles, fixed_col, locs, n)
                if fixed_row is not False:
                    col_elim(possibles, fixed_row, locs, n)
    return possibles



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




def x_wing(possibles):
    size = 9
    # Row-based X-Wing
    for candidate in range(1, 10):
        for r1 in range(size):
            cols_r1 = [c for c in range(size) if candidate in possibles[r1][c]]
            if len(cols_r1) != 2:
                continue
            for r2 in range(r1 + 1, size):
                cols_r2 = [c for c in range(size) if candidate in possibles[r2][c]]
                if len(cols_r2) == 2 and set(cols_r1) == set(cols_r2):
                    for col in cols_r1:
                        for r in range(size):
                            if r != r1 and r != r2 and candidate in possibles[r][col]:
                                possibles[r][col].remove(candidate)
                                if len(possibles[r][col]) == 1:
                                    next_rm = next(iter(possibles[r][col]))
                                    rm_from_subgrid(possibles, r, col, next_rm)
                                    rm_from_rows(possibles, r, col, next_rm)
                                    rm_from_cols(possibles, r, col, next_rm)

    # Column-based X-Wing
    for candidate in range(1, 10):
        for c1 in range(size):
            rows_c1 = [r for r in range(size) if candidate in possibles[r][c1]]
            if len(rows_c1) != 2:
                continue
            for c2 in range(c1 + 1, size):
                rows_c2 = [r for r in range(size) if candidate in possibles[r][c2]]
                if len(rows_c2) == 2 and set(rows_c1) == set(rows_c2):
                    for row in rows_c1:
                        for c in range(size):
                            if c != c1 and c != c2 and candidate in possibles[row][c]:
                                possibles[row][c].remove(candidate)
                                if len(possibles[row][c]) == 1:
                                    next_rm = next(iter(possibles[row][c]))
                                    rm_from_subgrid(possibles, row, c, next_rm)
                                    rm_from_rows(possibles, row, c, next_rm)
                                    rm_from_cols(possibles, row, c, next_rm)
    return possibles


def box_line_reduction(board):
    # Row-wise box-line reduction
    for row in range(9):
        for num in range(1, 10):
            # Find columns in this row where num is a candidate
            cols_with_num = [col for col in range(9) if num in board[row][col]]
            if not cols_with_num:
                continue
            # Check if all these columns are in the same box
            box_cols = {col // 3 for col in cols_with_num}
            if len(box_cols) == 1:
                box_col_start = box_cols.pop() * 3
                box_row_start = (row // 3) * 3
                # Remove num from other rows in the same box columns
                for r in range(box_row_start, box_row_start + 3):
                    if r == row:
                        continue
                    for c in range(box_col_start, box_col_start + 3):
                        if num in board[r][c]:
                            board[r][c].remove(num)
                            if len(board[r][c]) == 1:
                                next_rm = next(iter(board[r][c]))
                                rm_from_subgrid(board, r, c, next_rm)
                                rm_from_rows(board, r, c, next_rm)
                                rm_from_cols(board, r, c, next_rm)
    # Column-wise box-line reduction
    for col in range(9):
        for num in range(1, 10):
            # Find rows in this column where num is a candidate
            rows_with_num = [row for row in range(9) if num in board[row][col]]
            if not rows_with_num:
                continue
            # Check if all these rows are in the same box
            box_rows = {row // 3 for row in rows_with_num}
            if len(box_rows) == 1:
                box_row_start = box_rows.pop() * 3
                box_col_start = (col // 3) * 3
                # Remove num from other columns in the same box rows
                for c in range(box_col_start, box_col_start + 3):
                    if c == col:
                        continue
                    for r in range(box_row_start, box_row_start + 3):
                        if num in board[r][c]:
                            board[r][c].remove(num)
                            if len(board[r][c]) == 1:
                                next_rm = next(iter(board[r][c]))
                                rm_from_subgrid(board, r, c, next_rm)
                                rm_from_rows(board, r, c, next_rm)
                                rm_from_cols(board, r, c, next_rm)
    return board
