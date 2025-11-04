"use client";

import { useMemo, useState } from 'react';
import SudokuBoard from '@/components/SudokuBoard';
import { makeSudokuAPI } from '@/lib/api';
import type { Difficulty, Grid } from '@/lib/types';

export default function Page() {
  const api = useMemo(() => {
    // Support query override like ?api=mock
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      const override = url.searchParams.get('api') as 'mock' | 'worker' | null;
      return makeSudokuAPI(override ?? undefined);
    }
    return makeSudokuAPI();
  }, []);

  const [grid, setGrid] = useState<Grid>(
    Array.from({ length: 9 }, () => Array(9).fill(0))
  );
  const [busy, setBusy] = useState(false);
  const [difficulty, setDifficulty] = useState<Difficulty>('medium');
  const [message, setMessage] = useState('');

  async function onSolve() {
    setBusy(true); setMessage('Solving…');
    try {
      const solved = await api.solve(grid);
      setGrid(solved);
      setMessage('Solved.');
    } catch (e) {
      console.error(e);
      setMessage('No solution or error.');
    } finally {
      setBusy(false);
    }
  }

  async function onGenerate() {
    setBusy(true); setMessage(`Generating (${difficulty})…`);
    try {
      const puzzle = await api.generate(difficulty);
      setGrid(puzzle);
      setMessage('Puzzle ready.');
    } catch (e) {
      console.error(e);
      setMessage('Generation error.');
    } finally {
      setBusy(false);
    }
  }

  function onClear() {
    setGrid(Array.from({ length: 9 }, () => Array(9).fill(0)));
    setMessage('');
  }

  return (
    <main className="min-h-screen max-w-5xl mx-auto p-4 sm:p-6">
      <header className="mb-6 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
        <h1 className="text-2xl font-semibold">Sudoku Demo</h1>
        <div className="flex gap-2 items-center">
          <label className="text-sm text-slate-600" htmlFor="difficulty">Difficulty</label>
          <select
            id="difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value as Difficulty)}
            className="border rounded px-2 py-1"
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
            <option value="expert">Expert</option>
          </select>
          <button className="btn-secondary" onClick={onGenerate} disabled={busy}>Generate</button>
          <button onClick={onSolve} disabled={busy}>Solve</button>
          <button className="btn-secondary" onClick={onClear} disabled={busy}>Clear</button>
        </div>
      </header>

      <section className="grid md:grid-cols-[1fr_320px] gap-6 items-start">
        <div className="bg-white rounded-lg shadow p-3">
          <SudokuBoard grid={grid} onChange={setGrid} disabled={busy} />
        </div>
        <aside className="flex flex-col gap-3">
          <div className="p-3 rounded bg-blue-50 text-blue-800 border border-blue-200">
            <div className="text-sm">{message || 'Ready.'}</div>
          </div>
          <div className="p-3 rounded bg-slate-100 text-slate-700 text-sm">
            <p><b>API mode:</b> {api.mode}</p>
            <p>Switch via query: <code>?api=mock</code> or <code>?api=worker</code></p>
          </div>
        </aside>
      </section>
    </main>
  );
}

