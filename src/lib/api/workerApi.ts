import type { Difficulty, Grid, ISudokuAPI } from '@/lib/types';

export function createWorkerAPI(): ISudokuAPI {
  const worker = new Worker(new URL('../../workers/solverWorker.ts', import.meta.url), { type: 'module' });

  function call<T>(type: string, payload: any): Promise<T> {
    return new Promise((resolve, reject) => {
      const id = Math.random().toString(36).slice(2);
      const handleMessage = (event: MessageEvent) => {
        const data = event.data;
        if (!data || data.id !== id) return;
        worker.removeEventListener('message', handleMessage);
        if (data.error) reject(data.error); else resolve(data.result);
      };
      worker.addEventListener('message', handleMessage);
      worker.postMessage({ id, type, payload });
    });
  }

  return {
    mode: 'worker',
    solve(grid: Grid) {
      return call<Grid>('solve', { grid });
    },
    generate(difficulty: Difficulty) {
      return call<Grid>('generate', { difficulty });
    }
  };
}
