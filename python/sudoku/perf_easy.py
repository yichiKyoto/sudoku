from __future__ import annotations

from .performance_utils import print_report, run_performance_test


def main() -> None:
    result = run_performance_test("easy", samples=100)
    print_report(result)


if __name__ == "__main__":
    main()
