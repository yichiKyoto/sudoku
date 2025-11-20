def increase_average(puzzle):
    total = 0
    count = 0

    # Calculate amount to increase
    for row in range(9):
        for col in range(9):
            if puzzle[row][col] != 0:
                total += puzzle[row][col]
                count += 1

    if total == 0: # no filled cells
        return puzzle

    increase_amount = 9 - round(total/count)

    for i in range(9):
        for j in range(9):
            if puzzle[i][j] != 0:
                # add shift and wrap if needed
                new_val = puzzle[i][j] + increase_amount
                if new_val > 9:
                    new_val -= 9
                puzzle[i][j] = new_val

    return puzzle
