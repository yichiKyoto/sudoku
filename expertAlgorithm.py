import sudokuHelper

def solve(puzzle, row, col):
    if row == 8 and col == 9:
        return True
    
    if col == 9:
        row += 1
        col = 0

    if puzzle[row][col] != 0:
        return solve(puzzle, row, col + 1)
    
    for num in range(1, 10):
        puzzle[row][col] = num
        if sudokuHelper.checkCell(puzzle, row, col):
            if solve(puzzle, row, col + 1):
                return True
            puzzle[row][col] = 0

    return False

def main():
    mat = [
        [3, 0, 6, 5, 0, 8, 4, 0, 0],
        [5, 2, 0, 0, 0, 0, 0, 0, 0],
        [0, 8, 7, 0, 0, 0, 0, 3, 1],
        [0, 0, 3, 0, 1, 0, 0, 8, 0],
        [9, 0, 0, 8, 6, 3, 0, 0, 5],
        [0, 5, 0, 0, 9, 0, 6, 0, 0],
        [1, 3, 0, 0, 0, 0, 2, 5, 0],
        [0, 0, 0, 0, 0, 0, 0, 7, 4],
        [0, 0, 5, 2, 0, 6, 3, 0, 0]
    ]

    solve(mat, 0, 0)

    for row in mat:
        print(" ".join(map(str, row)))

    print(sudokuHelper.checkSudoku(mat))


main()