



# board is a 2D array
def rotate(board):
  new_board = [board_row[:] for board_row in board]

  for row in range(0, 9):
    new_row = 0
    new_col = 8 - row
    for col in range(0, 9):
      value = board[row][col]
      new_board[new_row][new_col] = value
      new_row += 1
  return new_board

# board = [
#     [1, 2, 3, 4, 5, 6, 7, 8, 9],
#     [10, 11, 12, 13, 14, 15, 16, 17, 18],
#     [19, 20, 21, 22, 23, 24, 25, 26, 27],
#     [28, 29, 30, 31, 32, 33, 34, 35, 36],
#     [37, 38, 39, 40, 41, 42, 43, 44, 45],
#     [46, 47, 48, 49, 50, 51, 52, 53, 54],
#     [55, 56, 57, 58, 59, 60, 61, 62, 63],
#     [64, 65, 66, 67, 68, 69, 70, 71, 72],
#     [73, 74, 75, 76, 77, 78, 79, 80, 81]
# ]

# print(rotate(board))