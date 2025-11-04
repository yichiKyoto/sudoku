import type { Difficulty, Grid, ISudokuAPI } from '@/lib/types';
import { createWorkerAPI } from './workerApi';
import { createMockAPI } from './mockApi';

export function makeSudokuAPI(override?: 'mock' | 'worker'): ISudokuAPI {
  const envMode = (typeof process !== 'undefined' ? (process.env.NEXT_PUBLIC_API_MODE as any) : undefined);
  const mode = override ?? envMode ?? 'worker';
  if (mode === 'mock') return createMockAPI();
  try {
    return createWorkerAPI();
  } catch (e) {
    console.error('[sudoku] Worker API failed to initialize, falling back to mock API:', e);
    return createMockAPI();
  }
}

export type { Difficulty, Grid, ISudokuAPI };
