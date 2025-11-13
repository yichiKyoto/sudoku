from __future__ import annotations

from dataclasses import dataclass
import statistics
import time
from typing import List

from . import sudoku_helper
from .expert_algorithm import solve_copy
from .generator import generate_puzzle


@dataclass(frozen=True)
class PerformanceResult:
    difficulty: str
    samples: int
    attempts: int
    total_time: float
    min_time: float
    max_time: float
    mean_time: float
    median_time: float


def _solve_with_timer(puzzle) -> float:
    """Return elapsed seconds for solving `puzzle` with the expert solver."""
    start = time.perf_counter()
    solution = solve_copy([row[:] for row in puzzle])
    elapsed = time.perf_counter() - start
    if solution is None or not sudoku_helper.checkSudoku(solution):
        raise RuntimeError("Expert solver failed to produce a valid solution.")
    return elapsed


def run_performance_test(
    difficulty: str,
    samples: int = 100,
    require_exact_tier: bool = True,
) -> PerformanceResult:
    """Generate `samples` puzzles and record solver timings."""
    durations: List[float] = []
    attempts = 0

    while len(durations) < samples:
        attempts += 1
        puzzle, tier = generate_puzzle(difficulty=difficulty)
        if require_exact_tier and tier != difficulty:
            continue
        durations.append(_solve_with_timer(puzzle))

    total_time = sum(durations)
    return PerformanceResult(
        difficulty=difficulty,
        samples=samples,
        attempts=attempts,
        total_time=total_time,
        min_time=min(durations),
        max_time=max(durations),
        mean_time=statistics.mean(durations),
        median_time=statistics.median(durations),
    )


def print_report(result: PerformanceResult) -> None:
    """Pretty-print the aggregated metrics."""
    print(f"Difficulty     : {result.difficulty}")
    print(f"Samples        : {result.samples} (generated in {result.attempts} attempts)")
    print(f"Total time     : {result.total_time:.4f}s")
    print(f"Average time   : {result.mean_time:.4f}s")
    print(f"Median time    : {result.median_time:.4f}s")
    print(f"Fastest solve  : {result.min_time:.4f}s")
    print(f"Slowest solve  : {result.max_time:.4f}s")
