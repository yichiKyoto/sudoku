"""Sudoku algorithms package.

Convenience re-exports are provided for common modules:
    - solver
    - hidden_singles
    - medium_algorithm
    - hard_algorithm
    - expert_algorithm
    - human_solver
    - generator
"""

from . import solver
from . import hidden_singles
from . import medium_algorithm
from . import hard_algorithm
from . import expert_algorithm
from . import pointing
from . import box_line_reduction
from . import obvious_pairs
from . import x_wing
from . import y_wing
from . import human_solver
from . import generator

__all__ = [
    "solver",
    "hidden_singles",
    "medium_algorithm",
    "hard_algorithm",
    "expert_algorithm",
    "pointing",
    "box_line_reduction",
    "obvious_pairs",
    "x_wing",
    "y_wing",
    "human_solver",
    "generator",
]
