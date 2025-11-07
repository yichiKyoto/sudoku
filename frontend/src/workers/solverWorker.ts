import { generatePuzzle, solveSudokuWithSteps } from '@/lib/utils/sudoku';
import type { Difficulty, Grid } from '@/lib/types';

type Req = { id: string; type: 'solve' | 'generate'; payload: any };

self.addEventListener('message', (ev: MessageEvent<Req>) => {
  const { id, type, payload } = ev.data;
  try {
    if (type === 'solve') {
      const grid: Grid = payload.grid;
      const copy = grid.map(r => r.slice());
      const result = solveSudokuWithSteps(copy);
      if (!result) throw new Error('Unsolvable');
      // @ts-ignore
      self.postMessage({ id, result });
      return;
    }
    if (type === 'generate') {
      const difficulty: Difficulty = payload.difficulty;
      const result = generatePuzzle(difficulty);
      // @ts-ignore
      self.postMessage({ id, result });
      return;
    }
    throw new Error('Unknown request type');
  } catch (error: any) {
    // @ts-ignore
    self.postMessage({ id, error: String(error?.message || error) });
  }
});
