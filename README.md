# Sudoku
**Backend Algorithm Contact**\
Input into algorithm function: 
  Unsolved puzzle - 2D array as a list of list
Output of the algorithm function:
  Attempted puzzle - 2D array as a list of list
  (This can be incomplete if the difficulty is too low)

**Frontend contract**\
Ranker
- The website should display a 9 by 9 grid, where users are able to input numbers into the grid
- When ready, the user will press a solve/rank button, the puzzle on screen should then be sent to the backend as a JSON string
- The backend will return a JSON string representing the solved puzzle and the difficulty
- User should be able to clear the sudoku puzzle

**Potential Areas of Exploration**\
Explore what puzzles are easily solvable by computer, and how operations can impact computation time
Permutation impacting solving time
- Permuting Whole rows/columns
- Permuting numbers
- Rotate puzzle
- Permutation from a trivial sudoku to any other sudoku?
