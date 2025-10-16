# Given a puzzle (2D integer array), checks whether it is correctly solved
def checkSudoku(puzzle): 
    for x in range(9):
        for y in range(9):
            if checkCell(puzzle, x, y) != True:
                return False
    return True

# Given a puzzle and a coordinate, checks if the value at the cell is valid
def checkCell(puzzle, x, y):
    if (puzzle[x][y] < 1 or puzzle[x][y] > 9):
        return False

    return checkRow(puzzle, x, y) and checkCol(puzzle, x, y) and checkGrid(puzzle, x, y)

def checkRow(puzzle, x, y):
    for i in range(9):
        if puzzle[x][i] == puzzle[x][y] and i != y:
            return False
    return True

def checkCol(puzzle, x, y):
    for i in range(9):
        if puzzle[i][y] == puzzle[x][y] and i != x:
            return False
    return True

def checkGrid(puzzle, x, y):
    xGrid = (x // 3) * 3
    yGrid = (y // 3) * 3

    for i in range(xGrid, xGrid + 3):
        for j in range(yGrid, yGrid + 3):
            if puzzle[i][j] == puzzle[x][y] and (i != x or j != y):
                return False
    return True
