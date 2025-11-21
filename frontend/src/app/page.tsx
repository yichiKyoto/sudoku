"use client";

import { useMemo, useState } from 'react';
import SudokuBoard from '@/components/SudokuBoard';
import { makeSudokuAPI } from '@/lib/api';
import type { Difficulty, Grid } from '@/lib/types';

export default function Page() {
  const api = useMemo(() => {
    // Always use real (worker) API; no mock or query override.
    return makeSudokuAPI();
  }, []);

  const [grid, setGrid] = useState<Grid>(
    Array.from({ length: 9 }, () => Array(9).fill(0))
  );
  const [givens, setGivens] = useState<boolean[][]>(
    Array.from({ length: 9 }, () => Array(9).fill(false))
  );
  const [busy, setBusy] = useState(false);
  const [difficulty, setDifficulty] = useState<Difficulty>('medium');
  const [message, setMessage] = useState('');
  const [classifiedDifficulty, setClassifiedDifficulty] = useState<Difficulty | null>(null);
  const [marks, setMarks] = useState<(null | 'correct' | 'wrong')[][]>(
    Array.from({ length: 9 }, () => Array(9).fill(null))
  );
  const [animatingCell, setAnimatingCell] = useState<[number, number] | null>(null);

  // Detect overlapping conflicts in the current grid (duplicates in any row/col/box, ignoring zeros)
  function computeConflicts(g: Grid): boolean[][] {
    const conflicts: boolean[][] = Array.from({ length: 9 }, () => Array(9).fill(false));

    // rows
    for (let r = 0; r < 9; r++) {
      const seen = new Map<number, number[]>();
      for (let c = 0; c < 9; c++) {
        const v = g[r][c];
        if (v === 0) continue;
        const arr = seen.get(v) ?? [];
        arr.push(c);
        seen.set(v, arr);
      }
      for (const [, cols] of seen) if (cols.length > 1) {
        for (const c of cols) conflicts[r][c] = true;
      }
    }

    // cols
    for (let c = 0; c < 9; c++) {
      const seen = new Map<number, number[]>();
      for (let r = 0; r < 9; r++) {
        const v = g[r][c];
        if (v === 0) continue;
        const arr = seen.get(v) ?? [];
        arr.push(r);
        seen.set(v, arr);
      }
      for (const [, rows] of seen) if (rows.length > 1) {
        for (const r of rows) conflicts[r][c] = true;
      }
    }

    // 3x3 boxes
    for (let br = 0; br < 9; br += 3) {
      for (let bc = 0; bc < 9; bc += 3) {
        const seen = new Map<number, [number, number][]>();
        for (let dr = 0; dr < 3; dr++) {
          for (let dc = 0; dc < 3; dc++) {
            const r = br + dr, c = bc + dc;
            const v = g[r][c];
            if (v === 0) continue;
            const arr = seen.get(v) ?? [];
            arr.push([r, c]);
            seen.set(v, arr);
          }
        }
        for (const [, coords] of seen) if (coords.length > 1) {
          for (const [r, c] of coords) conflicts[r][c] = true;
        }
      }
    }

    return conflicts;
  }

  async function onSolve() {
    setClassifiedDifficulty(null);
    // Check for overlaps in the current grid before solving
    const overlaps = computeConflicts(grid);
    const hasOverlap = overlaps.some(row => row.some(Boolean));
    if (hasOverlap) {
      // Highlight overlapped tiles in red and keep inputs editable
      const nextMarks: (null | 'correct' | 'wrong')[][] = Array.from({ length: 9 }, () => Array(9).fill(null));
      for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
          if (overlaps[r][c]) nextMarks[r][c] = 'wrong';
        }
      }
      setMarks(nextMarks);
      setMessage('Invalid puzzle: overlapping numbers in initial state.');
      return; // do not solve
    }

    setBusy(true); setMessage('Solving…');
    setAnimatingCell(null);
    try {
      // Solve from the original puzzle (givens only), so incorrect user entries don't block solving
      const puzzleOnly = grid.map((row, r) => row.map((v, c) => (givens[r]?.[c] ? v : 0)));
      const { grid: solved, steps: orderedSteps, difficulty: solvedDifficulty } = await api.solve(puzzleOnly);

      const clearedMarks: (null | 'correct' | 'wrong')[][] =
        Array.from({ length: 9 }, () => Array(9).fill(null));
      setMarks(clearedMarks);

      const originalGrid = grid.map((row) => row.slice());

      const progressiveGrid = originalGrid.map((row) => row.slice());
      const progressiveMarks = clearedMarks.map((row) => row.slice());

      if (orderedSteps.length === 0) {
        setGrid(solved.map((row) => row.slice()));
        setMarks(progressiveMarks);
        setMessage('Solved.');
        setClassifiedDifficulty(solvedDifficulty);
        return;
      }

      for (const { r, c, value } of orderedSteps) {
        if (value === 0) {
          progressiveGrid[r][c] = 0;
          if (!givens[r]?.[c]) progressiveMarks[r][c] = null;
        } else {
          progressiveGrid[r][c] = value;
          if (!givens[r]?.[c]) {
            const userVal = originalGrid[r]?.[c] ?? 0;
            let mark: null | 'correct' | 'wrong' = null;
            if (userVal !== 0 && value === solved[r][c]) {
              mark = userVal === value ? 'correct' : 'wrong';
            }
            progressiveMarks[r][c] = mark;
          }
        }

        setGrid(progressiveGrid.map((row) => row.slice()));
        setMarks(progressiveMarks.map((row) => row.slice()));
        setAnimatingCell([r, c]);

        await new Promise((resolve) => setTimeout(resolve, 200));
      }

      setAnimatingCell(null);
      setGrid(solved.map((row) => row.slice()));
      setMarks(progressiveMarks.map((row) => row.slice()));
      setMessage('Solved.');
      setClassifiedDifficulty(solvedDifficulty);
    } catch (e) {
      console.error(e);
      setMessage('No solution or error.');
      setClassifiedDifficulty(null);
    } finally {
      setBusy(false);
    }
  }

  async function onGenerate() {
    setBusy(true); setMessage(`Generating (${difficulty})…`);
    try {
      const puzzle = await api.generate(difficulty);
      setGrid(puzzle);
      // Mark initial clues as givens for styling
      const mask = puzzle.map(row => row.map((v) => v !== 0));
      setGivens(mask);
      // Clear any previous marks
      setMarks(Array.from({ length: 9 }, () => Array(9).fill(null)));
      setClassifiedDifficulty(null);
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
    setGivens(Array.from({ length: 9 }, () => Array(9).fill(false)));
    setMarks(Array.from({ length: 9 }, () => Array(9).fill(null)));
    setClassifiedDifficulty(null);
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
          <SudokuBoard
            grid={grid}
            onChange={setGrid}
            disabled={busy}
            givens={givens}
            marks={marks}
            animatingCell={animatingCell}
          />
        </div>
        <aside className="flex flex-col gap-3">
          <div className="p-3 rounded bg-blue-50 text-blue-800 border border-blue-200">
            <div className="text-sm">{message || 'Ready.'}</div>
          </div>
          <div className="p-3 rounded bg-emerald-50 text-emerald-900 border border-emerald-200">
            <div className="text-xs uppercase tracking-wide text-emerald-700">Classified difficulty</div>
            <div className="text-2xl font-semibold">
              {classifiedDifficulty
                ? classifiedDifficulty.charAt(0).toUpperCase() + classifiedDifficulty.slice(1)
                : '—'}
            </div>
            <p className="text-xs text-emerald-700 mt-1">Shown after solving the puzzle.</p>
          </div>
          <div className="p-3 rounded bg-slate-100 text-slate-700 text-sm">
            <p><b>API mode:</b> {api.mode}</p>
          </div>
        </aside>
      </section>
    </main>
  );
}
