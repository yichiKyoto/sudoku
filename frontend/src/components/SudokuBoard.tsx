import React from 'react';
import type { Grid } from '@/lib/types';

export default function SudokuBoard({
  grid,
  disabled = false,
  onChange,
  givens,
  marks,
}: {
  grid: Grid;
  disabled?: boolean;
  onChange: (grid: Grid) => void;
  givens?: boolean[][];
  marks?: (null | 'correct' | 'wrong')[][];
}) {
  function onInput(r: number, c: number, e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value.trim();
    const n = Number(val);
    const next = grid.map((row) => row.slice());
    if (!val) next[r][c] = 0;
    else if (!Number.isNaN(n) && n >= 1 && n <= 9) next[r][c] = n;
    onChange(next);
  }

  return (
    <div
      className="inline-grid"
      style={{
        gridTemplateColumns: 'repeat(9, var(--cell-size))',
        gridTemplateRows: 'repeat(9, var(--cell-size))',
        // cell size CSS var lives on page via Tailwind classes
      }}
    >
      {Array.from({ length: 9 }).map((_, r) => (
        Array.from({ length: 9 }).map((__, c) => {
          const isGiven = !!givens?.[r]?.[c];
          const hasUserVal = !isGiven && grid[r][c] !== 0;
          const mark = marks?.[r]?.[c] ?? null;
          const baseClass = isGiven ? 'cell-given' : (!mark && hasUserVal ? 'cell-user' : '');
          return (
            <input
              key={`${r}-${c}`}
              className={`cell text-center text-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400 ${baseClass} ${mark === 'correct' ? 'cell-correct' : mark === 'wrong' ? 'cell-wrong' : ''}`}
              style={{
                borderRightWidth: c % 3 === 2 ? '2px' : '1px',
                borderBottomWidth: r % 3 === 2 ? '2px' : '1px',
              }}
              type="text"
              maxLength={1}
              value={grid[r][c] === 0 ? '' : String(grid[r][c])}
              onChange={(e) => onInput(r, c, e)}
              disabled={disabled}
            />
          );
        })
      ))}
      <style jsx>{`
        .cell { width: var(--cell-size); height: var(--cell-size); }
        .cell:disabled { background: #f8fafc; }
        .cell-given { color: #0f172a; font-weight: 600; }
        .cell-user { color: #2563eb; }
        .cell-correct { color: #16a34a; } /* green-600 for correct tiles */
        .cell-wrong { color: #dc2626; }   /* red-600 for wrong tiles */
      `}</style>
    </div>
  );
}
