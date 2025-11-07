import type { Difficulty, Grid, ISudokuAPI, SolveResult } from '@/lib/types';
import { deepCopy } from '@/lib/utils/misc';
import { solveSudokuWithSteps } from '@/lib/utils/sudoku';
import tests from '@/lib/data/puzzles';

export function createMockAPI(): ISudokuAPI {
  return {
    mode: 'mock',
    async solve(grid: Grid): Promise<SolveResult> {
      const copy = deepCopy(grid);
      const solved = solveSudokuWithSteps(copy);
      if (!solved) throw new Error('Unsolvable');
      return solved;
    },
    async generate(difficulty: Difficulty) {
      const list = tests[difficulty];
      // rotate through tests deterministically
      const idx = Math.floor(Date.now() / 1000) % list.length;
      return deepCopy(list[idx]);
    }
  }
}
