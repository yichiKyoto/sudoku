import type { Difficulty, Grid } from '$lib/types';
import { shuffle } from './misc';

export function isValid(grid: Grid, r: number, c: number, val: number): boolean {
  if (val < 1 || val > 9) return false;
  for (let i = 0; i < 9; i++) {
    if (grid[r][i] === val) return false;
    if (grid[i][c] === val) return false;
  }
  const br = Math.floor(r / 3) * 3;
  const bc = Math.floor(c / 3) * 3;
  for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) {
    if (grid[br + i][bc + j] === val) return false;
  }
  return true;
}

export function findEmpty(grid: Grid): [number, number] | null {
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) if (grid[r][c] === 0) return [r, c];
  }
  return null;
}

export function solveSudoku(grid: Grid): Grid | null {
  const empty = findEmpty(grid);
  if (!empty) return grid;
  const [r, c] = empty;
  const nums = shuffle([1,2,3,4,5,6,7,8,9]);
  for (const v of nums) {
    if (isValid(grid, r, c, v)) {
      grid[r][c] = v;
      const solved = solveSudoku(grid);
      if (solved) return solved;
      grid[r][c] = 0;
    }
  }
  return null;
}

export function countSolutions(grid: Grid, limit = 2): number {
  const empty = findEmpty(grid);
  if (!empty) return 1;
  const [r, c] = empty;
  let count = 0;
  for (let v = 1; v <= 9; v++) {
    if (isValid(grid, r, c, v)) {
      grid[r][c] = v;
      count += countSolutions(grid, limit);
      if (count >= limit) {
        grid[r][c] = 0; // ensure cleanup before early exit
        return count;
      }
      grid[r][c] = 0;
    }
  }
  return count;
}

export function generateFull(): Grid {
  const grid: Grid = Array.from({ length: 9 }, () => Array(9).fill(0));
  function fillCell(idx: number): boolean {
    if (idx === 81) return true;
    const r = Math.floor(idx / 9), c = idx % 9;
    const nums = shuffle([1,2,3,4,5,6,7,8,9]);
    for (const v of nums) {
      if (isValid(grid, r, c, v)) {
        grid[r][c] = v;
        if (fillCell(idx + 1)) return true;
        grid[r][c] = 0;
      }
    }
    return false;
  }
  fillCell(0);
  return grid;
}

export function generatePuzzle(difficulty: Difficulty): Grid {
  const full = generateFull();
  const puzzle: Grid = full.map(row => row.slice());
  // target clues: simple heuristic
  const targetClues = {
    easy: 40,
    medium: 32,
    hard: 26,
    expert: 22,
  }[difficulty];

  let cells = shuffle(Array.from({ length: 81 }, (_, i) => i));
  let removed = 0;
  for (const idx of cells) {
    if (81 - removed <= targetClues) break;
    const r = Math.floor(idx / 9), c = idx % 9;
    const backup = puzzle[r][c];
    puzzle[r][c] = 0;
    // Check uniqueness
    const clone = puzzle.map(row => row.slice());
    const solutions = countSolutions(clone, 2);
    if (solutions !== 1) {
      puzzle[r][c] = backup;
    } else {
      removed++;
    }
  }
  return puzzle;
}

