import type { Difficulty, Grid, ISudokuAPI } from '@/lib/types';
import { createWorkerAPI } from './workerApi';

// Always use the real worker-based API. No mock or overrides.
export function makeSudokuAPI(_override?: 'mock' | 'worker'): ISudokuAPI {
  return createWorkerAPI();
}

export type { Difficulty, Grid, ISudokuAPI };
