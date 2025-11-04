export type Grid = number[][]; // 9x9, 0 means empty
export type Difficulty = 'easy' | 'medium' | 'hard' | 'expert';

export interface ISudokuAPI {
  mode: 'mock' | 'worker';
  solve(grid: Grid): Promise<Grid>;
  generate(difficulty: Difficulty): Promise<Grid>;
}
