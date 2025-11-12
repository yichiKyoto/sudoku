



# board is a 2D array
def rotate(board):
  new_board = [[], [], [], [], [], [], [], [], []]

  for row in range(0, 9):
    new_row = 0
    new_col = 8 - row
    for col in range(0, 9):
      value = board[row][col]
      new_board[new_row][new_col] = value
      new_row += 1
  return new_board

