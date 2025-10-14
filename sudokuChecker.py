import numpy as np

def checkSudoku(solvedPuzzle): 
    for x in range(9):
        for y in range(9):
            if checkCell(solvedPuzzle, x, y) != True:
                return False
    return True


def checkCell(solvedPuzzle, x, y):
    return checkRow(x, y) and checkCol(x, y) and checkGrid(x, y)

def checkRow(solvedPuzzle, x, y):
    for i in range(9):
        if solvedPuzzle[x][i] == solvedPuzzle[x][y] and i != y:
            return False
    return True;

def checkCol(solvedPuzzle, x, y):
    for i in range(9):
        if solvedPuzzle[i][y] == solvedPuzzle[x][y] and i != x:
            return False
    return True;

# def checkGrid(solvedPuzzle, x, y):
#     xGrid = x // 3
#     yGrid = y // 3

#     for i in range(3):
#         if solvedPuzzle[i][y] == solvedPuzzle[x][y]:
#             return False
#     return True;