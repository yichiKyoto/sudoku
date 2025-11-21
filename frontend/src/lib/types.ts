export type Grid = number[][]; // 9x9, 0 means empty
export type Difficulty = 'easy' | 'medium' | 'hard' | 'expert';

export interface SolveStep {
  r: number;
  c: number;
  value: number; // 0 indicates the solver cleared the cell during backtracking
}

export interface SolveResult {
  grid: Grid;
  steps: SolveStep[];
  difficulty: Difficulty;
}

export interface ISudokuAPI {
  mode: 'mock' | 'worker';
  solve(grid: Grid): Promise<SolveResult>;
  generate(difficulty: Difficulty): Promise<Grid>;
}
