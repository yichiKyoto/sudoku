# Sudoku
**Backend Algorithm Contact**\
Input into algorithm function: 
- Unsolved puzzle - 2D Integer array as a list of list (Each element will either be a filled cell, represented by an Integer between 1-9, or an empty cell, represented by a 0)\

Output of the algorithm function:
- Attempted puzzle - 2D Integer array as a list of list (This can be incomplete if the difficulty is too low)

**Frontend contract**\
Ranker
- The website should display a 9 by 9 grid, where users are able to input numbers into the grid
- When ready, the user will press a solve/rank button, the puzzle on screen should then be sent to the backend as a JSON string (1-9 for filled cell, 0 for empty cell)
- The backend will return a JSON string representing the solved puzzle and the difficulty
- User should be able to clear the sudoku puzzle

**Potential Areas of Exploration**\
Explore what puzzles are easily solvable by computer, and how operations to unsolved puzzles can impact computation time. Exampes of operations include:
- Permuting Whole rows/columns
- Permuting numbers
- Rotate puzzle
- Permutation from a trivial sudoku to any other sudoku?

---

## Web Demo (Next.js + React + Tailwind + Worker)

The repository includes a web demonstrator built with Next.js (App Router), React, Tailwind, and a Web Worker for compute-heavy tasks.

- Features:
  - Interactive 9×9 board to input/play Sudoku
  - Solve the current board (worker-backed solver)
  - Generate a puzzle by difficulty (easy/medium/hard/expert)
  - API mode switch between a mock dataset and real worker logic

- Commands:
  - `npm install`
  - `npm run dev` (Next.js dev server)
  - `npm run build` (Next.js production build)
  - `npm start` (run production server)

- API mode switch:
  - Default mode is `worker`. Set env var `NEXT_PUBLIC_API_MODE=mock` to use static test puzzles instead.
  - You can override at runtime with query param: `?api=mock` or `?api=worker`.

Key files:
- `src/app/page.tsx` – Main page shell and actions
- `src/components/SudokuBoard.tsx` – Interactive grid (React)
- `src/workers/solverWorker.ts` – Web Worker (solve/generate)
- `src/lib/utils/sudoku.ts` – Solver/generator implementation
- `src/lib/api` – API abstraction with `mock` and `worker` implementations
