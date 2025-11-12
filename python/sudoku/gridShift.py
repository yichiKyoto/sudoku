def gridShiftRight(puzzle):
    for colStart in range(0, 3):
        for row in range(0, 9):
            temp = puzzle[row][colStart * 3 + 2]
            puzzle[row][colStart * 3 + 2] = puzzle[row][colStart * 3 + 1]
            puzzle[row][colStart * 3 + 1] = puzzle[row][colStart * 3]
            puzzle[row][colStart * 3] = temp

def gridShiftDown(puzzle):
    for rowStart in range(0, 3):
        for col in range(0, 9):
            temp = puzzle[rowStart * 3 + 2][col]
            puzzle[rowStart * 3 + 2][col] = puzzle[rowStart * 3 + 1][col]
            puzzle[rowStart * 3 + 1][col] = puzzle[rowStart * 3][col]
            puzzle[rowStart * 3][col] = temp

