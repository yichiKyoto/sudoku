# Sudoku Web + Python Algorithms

An interactive Sudoku web app (Next.js + React + Tailwind) with an in-browser solver/generator, plus Python algorithms used to analyze puzzles and curate category-based puzzle sets.

The website runs entirely client-side by default using a Web Worker. Python code is used offline to validate solutions and prepare difficulty-labeled puzzles that the site can serve by category.

**Categories:** `easy`, `medium`, `hard`, `expert`.

**Puzzle format:** 9×9 grid as `number[][]` with `0` for empty cells, `1..9` for givens.

## How The Website Solves And Generates

- **Runtime (browser):**
  - Solver: In-browser backtracking solver implemented in TypeScript (`src/lib/utils/sudoku.ts`) and executed in a Web Worker (`src/workers/solverWorker.ts`).
  - Generator: In-browser puzzle generator with uniqueness checks (`generatePuzzle` in `src/lib/utils/sudoku.ts`).
  - API: The UI talks to a worker-based API (`src/lib/api`).

- **Python programs (offline workflow):**
  - Python modules implement advanced techniques (Hidden Singles, Pointing, X-Wing, Y-Wing, AIC) for analysis and difficulty vetting:
    - `solver.py`, `sudokuHelper.py`, `hardAlgorithm.py`, `alternatingInferenceChain.py`.
  - Use these scripts to verify solutions and curate puzzles into categories. Export curated puzzles into the frontend dataset (`src/lib/data/puzzles.ts`) for the site to serve by category.
  - This provides predictable, human-like challenge levels, while the site still supports on-the-fly generation via the worker.

## Running The Web App

- Commands:
  - `npm install`
  - `npm run dev` (start Next.js dev server)
  - `npm run build` (production build)
  - `npm start` (serve production build)

The app always uses the real (worker-backed) solver/generator. There is no mock mode at runtime.

- Key files:
  - `src/app/page.tsx` – App UI and actions
  - `src/components/SudokuBoard.tsx` – Interactive grid
  - `src/workers/solverWorker.ts` – Worker glue for solve/generate
  - `src/lib/utils/sudoku.ts` – TypeScript solver/generator
  - `src/lib/api` – API abstraction (worker mode)
  - `src/lib/data/puzzles.ts` – Category-based demo puzzles (for curation/testing)

## Using Python To Curate Category Puzzles

Python is used to analyze/validate puzzles and group them into categories for the site to serve.

- Solve/validate and analyze difficulty locally:
  - `solver.py` provides candidate-elimination strategies (Hidden Singles, Pointing, X-Wing, Y-Wing) you can apply iteratively to a puzzle.
  - `hardAlgorithm.py` wraps `alternatingInferenceChain.py` (AIC) for tougher eliminations.
  - `sudokuHelper.py` contains correctness checks for final solutions.

- Example workflow (manual curation):
  - Start from a set of candidate puzzles (as 9×9 lists with `None`/ints).
  - Use `solver.det_possibles(...)` and the provided strategies to progress and assess technique requirements.
  - Validate with `sudokuHelper.checkSudoku(...)` once solved.
  - Place curated puzzles into `src/lib/data/puzzles.ts` under the matching category export:
    - `easy`, `medium`, `hard`, `expert` each hold a list of 9×9 grids using `0` for blanks.

Curated sets:
  - `src/lib/data/puzzles.ts` includes category-based examples that can support curation and testing.

Note: The site does not execute Python at runtime. Python is for offline analysis and content preparation; the browser uses the TypeScript implementation for solving/generating.

## Data Contracts

- Input to solvers: `number[9][9]` with `0` as empty.
- Output from solvers: `number[9][9]` fully solved grid (when solvable).
- Difficulty/category: one of `easy | medium | hard | expert`.

## Project Structure

- Web (Next.js): `src/app`, `src/components`, `src/lib`, `src/workers`.
- Puzzles dataset: `src/lib/data/puzzles.ts` (category-based arrays for curated examples).
- Python algorithms: `solver.py`, `sudokuHelper.py`, `hardAlgorithm.py`, `alternatingInferenceChain.py`.
- Tests/examples: `test_basic.py`, `test/y_wing_data.py`.

## Future Extensions

- Optional server mode to call Python solvers for explanation-grade steps or server-side generation.
- Export script to produce JSON from Python and auto-sync into the web dataset.
