/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "(app-pages-browser)/./src/lib/utils/misc.ts":
/*!*******************************!*\
  !*** ./src/lib/utils/misc.ts ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deepCopy: () => (/* binding */ deepCopy),\n/* harmony export */   shuffle: () => (/* binding */ shuffle)\n/* harmony export */ });\nfunction deepCopy(x) {\n    return JSON.parse(JSON.stringify(x));\n}\nfunction shuffle(a) {\n    for(let i = a.length - 1; i > 0; i--){\n        const j = Math.floor(Math.random() * (i + 1));\n        [a[i], a[j]] = [\n            a[j],\n            a[i]\n        ];\n    }\n    return a;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9saWIvdXRpbHMvbWlzYy50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUFPLFNBQVNBLFNBQVlDLENBQUk7SUFDOUIsT0FBT0MsS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxTQUFTLENBQUNIO0FBQ25DO0FBRU8sU0FBU0ksUUFBV0MsQ0FBTTtJQUMvQixJQUFLLElBQUlDLElBQUlELEVBQUVFLE1BQU0sR0FBRyxHQUFHRCxJQUFJLEdBQUdBLElBQUs7UUFDckMsTUFBTUUsSUFBSUMsS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxNQUFNLEtBQU1MLENBQUFBLElBQUk7UUFDMUMsQ0FBQ0QsQ0FBQyxDQUFDQyxFQUFFLEVBQUVELENBQUMsQ0FBQ0csRUFBRSxDQUFDLEdBQUc7WUFBQ0gsQ0FBQyxDQUFDRyxFQUFFO1lBQUVILENBQUMsQ0FBQ0MsRUFBRTtTQUFDO0lBQzdCO0lBQ0EsT0FBT0Q7QUFDVCIsInNvdXJjZXMiOlsiL1VzZXJzL3hpbnRpYW5odWFuZy9QeWNoYXJtUHJvamVjdHMvY29tcDM4MjEvZnJvbnRlbmQvc3JjL2xpYi91dGlscy9taXNjLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBkZWVwQ29weTxUPih4OiBUKTogVCB7XG4gIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHgpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNodWZmbGU8VD4oYTogVFtdKTogVFtdIHtcbiAgZm9yIChsZXQgaSA9IGEubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xuICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcbiAgICBbYVtpXSwgYVtqXV0gPSBbYVtqXSwgYVtpXV07XG4gIH1cbiAgcmV0dXJuIGE7XG59XG5cbiJdLCJuYW1lcyI6WyJkZWVwQ29weSIsIngiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJzaHVmZmxlIiwiYSIsImkiLCJsZW5ndGgiLCJqIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/lib/utils/misc.ts\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/lib/utils/sudoku.ts":
/*!*********************************!*\
  !*** ./src/lib/utils/sudoku.ts ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   countSolutions: () => (/* binding */ countSolutions),\n/* harmony export */   findEmpty: () => (/* binding */ findEmpty),\n/* harmony export */   generateFull: () => (/* binding */ generateFull),\n/* harmony export */   generatePuzzle: () => (/* binding */ generatePuzzle),\n/* harmony export */   isValid: () => (/* binding */ isValid),\n/* harmony export */   solveSudoku: () => (/* binding */ solveSudoku)\n/* harmony export */ });\n/* harmony import */ var _misc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./misc */ \"(app-pages-browser)/./src/lib/utils/misc.ts\");\n\nfunction isValid(grid, r, c, val) {\n    if (val < 1 || val > 9) return false;\n    for(let i = 0; i < 9; i++){\n        if (grid[r][i] === val) return false;\n        if (grid[i][c] === val) return false;\n    }\n    const br = Math.floor(r / 3) * 3;\n    const bc = Math.floor(c / 3) * 3;\n    for(let i = 0; i < 3; i++)for(let j = 0; j < 3; j++){\n        if (grid[br + i][bc + j] === val) return false;\n    }\n    return true;\n}\nfunction findEmpty(grid) {\n    for(let r = 0; r < 9; r++){\n        for(let c = 0; c < 9; c++)if (grid[r][c] === 0) return [\n            r,\n            c\n        ];\n    }\n    return null;\n}\nfunction solveSudoku(grid) {\n    const empty = findEmpty(grid);\n    if (!empty) return grid;\n    const [r, c] = empty;\n    const nums = (0,_misc__WEBPACK_IMPORTED_MODULE_0__.shuffle)([\n        1,\n        2,\n        3,\n        4,\n        5,\n        6,\n        7,\n        8,\n        9\n    ]);\n    for (const v of nums){\n        if (isValid(grid, r, c, v)) {\n            grid[r][c] = v;\n            const solved = solveSudoku(grid);\n            if (solved) return solved;\n            grid[r][c] = 0;\n        }\n    }\n    return null;\n}\nfunction countSolutions(grid) {\n    let limit = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;\n    const empty = findEmpty(grid);\n    if (!empty) return 1;\n    const [r, c] = empty;\n    let count = 0;\n    for(let v = 1; v <= 9; v++){\n        if (isValid(grid, r, c, v)) {\n            grid[r][c] = v;\n            count += countSolutions(grid, limit);\n            if (count >= limit) {\n                grid[r][c] = 0; // ensure cleanup before early exit\n                return count;\n            }\n            grid[r][c] = 0;\n        }\n    }\n    return count;\n}\nfunction generateFull() {\n    const grid = Array.from({\n        length: 9\n    }, ()=>Array(9).fill(0));\n    function fillCell(idx) {\n        if (idx === 81) return true;\n        const r = Math.floor(idx / 9), c = idx % 9;\n        const nums = (0,_misc__WEBPACK_IMPORTED_MODULE_0__.shuffle)([\n            1,\n            2,\n            3,\n            4,\n            5,\n            6,\n            7,\n            8,\n            9\n        ]);\n        for (const v of nums){\n            if (isValid(grid, r, c, v)) {\n                grid[r][c] = v;\n                if (fillCell(idx + 1)) return true;\n                grid[r][c] = 0;\n            }\n        }\n        return false;\n    }\n    fillCell(0);\n    return grid;\n}\nfunction generatePuzzle(difficulty) {\n    const full = generateFull();\n    const puzzle = full.map((row)=>row.slice());\n    // target clues: simple heuristic\n    const targetClues = {\n        easy: 40,\n        medium: 32,\n        hard: 26,\n        expert: 22\n    }[difficulty];\n    let cells = (0,_misc__WEBPACK_IMPORTED_MODULE_0__.shuffle)(Array.from({\n        length: 81\n    }, (_, i)=>i));\n    let removed = 0;\n    for (const idx of cells){\n        if (81 - removed <= targetClues) break;\n        const r = Math.floor(idx / 9), c = idx % 9;\n        const backup = puzzle[r][c];\n        puzzle[r][c] = 0;\n        // Check uniqueness\n        const clone = puzzle.map((row)=>row.slice());\n        const solutions = countSolutions(clone, 2);\n        if (solutions !== 1) {\n            puzzle[r][c] = backup;\n        } else {\n            removed++;\n        }\n    }\n    return puzzle;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9saWIvdXRpbHMvc3Vkb2t1LnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDaUM7QUFFMUIsU0FBU0MsUUFBUUMsSUFBVSxFQUFFQyxDQUFTLEVBQUVDLENBQVMsRUFBRUMsR0FBVztJQUNuRSxJQUFJQSxNQUFNLEtBQUtBLE1BQU0sR0FBRyxPQUFPO0lBQy9CLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJLEdBQUdBLElBQUs7UUFDMUIsSUFBSUosSUFBSSxDQUFDQyxFQUFFLENBQUNHLEVBQUUsS0FBS0QsS0FBSyxPQUFPO1FBQy9CLElBQUlILElBQUksQ0FBQ0ksRUFBRSxDQUFDRixFQUFFLEtBQUtDLEtBQUssT0FBTztJQUNqQztJQUNBLE1BQU1FLEtBQUtDLEtBQUtDLEtBQUssQ0FBQ04sSUFBSSxLQUFLO0lBQy9CLE1BQU1PLEtBQUtGLEtBQUtDLEtBQUssQ0FBQ0wsSUFBSSxLQUFLO0lBQy9CLElBQUssSUFBSUUsSUFBSSxHQUFHQSxJQUFJLEdBQUdBLElBQUssSUFBSyxJQUFJSyxJQUFJLEdBQUdBLElBQUksR0FBR0EsSUFBSztRQUN0RCxJQUFJVCxJQUFJLENBQUNLLEtBQUtELEVBQUUsQ0FBQ0ksS0FBS0MsRUFBRSxLQUFLTixLQUFLLE9BQU87SUFDM0M7SUFDQSxPQUFPO0FBQ1Q7QUFFTyxTQUFTTyxVQUFVVixJQUFVO0lBQ2xDLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJLEdBQUdBLElBQUs7UUFDMUIsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUksR0FBR0EsSUFBSyxJQUFJRixJQUFJLENBQUNDLEVBQUUsQ0FBQ0MsRUFBRSxLQUFLLEdBQUcsT0FBTztZQUFDRDtZQUFHQztTQUFFO0lBQ2pFO0lBQ0EsT0FBTztBQUNUO0FBRU8sU0FBU1MsWUFBWVgsSUFBVTtJQUNwQyxNQUFNWSxRQUFRRixVQUFVVjtJQUN4QixJQUFJLENBQUNZLE9BQU8sT0FBT1o7SUFDbkIsTUFBTSxDQUFDQyxHQUFHQyxFQUFFLEdBQUdVO0lBQ2YsTUFBTUMsT0FBT2YsOENBQU9BLENBQUM7UUFBQztRQUFFO1FBQUU7UUFBRTtRQUFFO1FBQUU7UUFBRTtRQUFFO1FBQUU7S0FBRTtJQUN4QyxLQUFLLE1BQU1nQixLQUFLRCxLQUFNO1FBQ3BCLElBQUlkLFFBQVFDLE1BQU1DLEdBQUdDLEdBQUdZLElBQUk7WUFDMUJkLElBQUksQ0FBQ0MsRUFBRSxDQUFDQyxFQUFFLEdBQUdZO1lBQ2IsTUFBTUMsU0FBU0osWUFBWVg7WUFDM0IsSUFBSWUsUUFBUSxPQUFPQTtZQUNuQmYsSUFBSSxDQUFDQyxFQUFFLENBQUNDLEVBQUUsR0FBRztRQUNmO0lBQ0Y7SUFDQSxPQUFPO0FBQ1Q7QUFFTyxTQUFTYyxlQUFlaEIsSUFBVTtRQUFFaUIsUUFBQUEsaUVBQVE7SUFDakQsTUFBTUwsUUFBUUYsVUFBVVY7SUFDeEIsSUFBSSxDQUFDWSxPQUFPLE9BQU87SUFDbkIsTUFBTSxDQUFDWCxHQUFHQyxFQUFFLEdBQUdVO0lBQ2YsSUFBSU0sUUFBUTtJQUNaLElBQUssSUFBSUosSUFBSSxHQUFHQSxLQUFLLEdBQUdBLElBQUs7UUFDM0IsSUFBSWYsUUFBUUMsTUFBTUMsR0FBR0MsR0FBR1ksSUFBSTtZQUMxQmQsSUFBSSxDQUFDQyxFQUFFLENBQUNDLEVBQUUsR0FBR1k7WUFDYkksU0FBU0YsZUFBZWhCLE1BQU1pQjtZQUM5QixJQUFJQyxTQUFTRCxPQUFPO2dCQUNsQmpCLElBQUksQ0FBQ0MsRUFBRSxDQUFDQyxFQUFFLEdBQUcsR0FBRyxtQ0FBbUM7Z0JBQ25ELE9BQU9nQjtZQUNUO1lBQ0FsQixJQUFJLENBQUNDLEVBQUUsQ0FBQ0MsRUFBRSxHQUFHO1FBQ2Y7SUFDRjtJQUNBLE9BQU9nQjtBQUNUO0FBRU8sU0FBU0M7SUFDZCxNQUFNbkIsT0FBYW9CLE1BQU1DLElBQUksQ0FBQztRQUFFQyxRQUFRO0lBQUUsR0FBRyxJQUFNRixNQUFNLEdBQUdHLElBQUksQ0FBQztJQUNqRSxTQUFTQyxTQUFTQyxHQUFXO1FBQzNCLElBQUlBLFFBQVEsSUFBSSxPQUFPO1FBQ3ZCLE1BQU14QixJQUFJSyxLQUFLQyxLQUFLLENBQUNrQixNQUFNLElBQUl2QixJQUFJdUIsTUFBTTtRQUN6QyxNQUFNWixPQUFPZiw4Q0FBT0EsQ0FBQztZQUFDO1lBQUU7WUFBRTtZQUFFO1lBQUU7WUFBRTtZQUFFO1lBQUU7WUFBRTtTQUFFO1FBQ3hDLEtBQUssTUFBTWdCLEtBQUtELEtBQU07WUFDcEIsSUFBSWQsUUFBUUMsTUFBTUMsR0FBR0MsR0FBR1ksSUFBSTtnQkFDMUJkLElBQUksQ0FBQ0MsRUFBRSxDQUFDQyxFQUFFLEdBQUdZO2dCQUNiLElBQUlVLFNBQVNDLE1BQU0sSUFBSSxPQUFPO2dCQUM5QnpCLElBQUksQ0FBQ0MsRUFBRSxDQUFDQyxFQUFFLEdBQUc7WUFDZjtRQUNGO1FBQ0EsT0FBTztJQUNUO0lBQ0FzQixTQUFTO0lBQ1QsT0FBT3hCO0FBQ1Q7QUFFTyxTQUFTMEIsZUFBZUMsVUFBc0I7SUFDbkQsTUFBTUMsT0FBT1Q7SUFDYixNQUFNVSxTQUFlRCxLQUFLRSxHQUFHLENBQUNDLENBQUFBLE1BQU9BLElBQUlDLEtBQUs7SUFDOUMsaUNBQWlDO0lBQ2pDLE1BQU1DLGNBQWM7UUFDbEJDLE1BQU07UUFDTkMsUUFBUTtRQUNSQyxNQUFNO1FBQ05DLFFBQVE7SUFDVixDQUFDLENBQUNWLFdBQVc7SUFFYixJQUFJVyxRQUFReEMsOENBQU9BLENBQUNzQixNQUFNQyxJQUFJLENBQUM7UUFBRUMsUUFBUTtJQUFHLEdBQUcsQ0FBQ2lCLEdBQUduQyxJQUFNQTtJQUN6RCxJQUFJb0MsVUFBVTtJQUNkLEtBQUssTUFBTWYsT0FBT2EsTUFBTztRQUN2QixJQUFJLEtBQUtFLFdBQVdQLGFBQWE7UUFDakMsTUFBTWhDLElBQUlLLEtBQUtDLEtBQUssQ0FBQ2tCLE1BQU0sSUFBSXZCLElBQUl1QixNQUFNO1FBQ3pDLE1BQU1nQixTQUFTWixNQUFNLENBQUM1QixFQUFFLENBQUNDLEVBQUU7UUFDM0IyQixNQUFNLENBQUM1QixFQUFFLENBQUNDLEVBQUUsR0FBRztRQUNmLG1CQUFtQjtRQUNuQixNQUFNd0MsUUFBUWIsT0FBT0MsR0FBRyxDQUFDQyxDQUFBQSxNQUFPQSxJQUFJQyxLQUFLO1FBQ3pDLE1BQU1XLFlBQVkzQixlQUFlMEIsT0FBTztRQUN4QyxJQUFJQyxjQUFjLEdBQUc7WUFDbkJkLE1BQU0sQ0FBQzVCLEVBQUUsQ0FBQ0MsRUFBRSxHQUFHdUM7UUFDakIsT0FBTztZQUNMRDtRQUNGO0lBQ0Y7SUFDQSxPQUFPWDtBQUNUIiwic291cmNlcyI6WyIvVXNlcnMveGludGlhbmh1YW5nL1B5Y2hhcm1Qcm9qZWN0cy9jb21wMzgyMS9mcm9udGVuZC9zcmMvbGliL3V0aWxzL3N1ZG9rdS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IERpZmZpY3VsdHksIEdyaWQgfSBmcm9tICckbGliL3R5cGVzJztcbmltcG9ydCB7IHNodWZmbGUgfSBmcm9tICcuL21pc2MnO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZChncmlkOiBHcmlkLCByOiBudW1iZXIsIGM6IG51bWJlciwgdmFsOiBudW1iZXIpOiBib29sZWFuIHtcbiAgaWYgKHZhbCA8IDEgfHwgdmFsID4gOSkgcmV0dXJuIGZhbHNlO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDk7IGkrKykge1xuICAgIGlmIChncmlkW3JdW2ldID09PSB2YWwpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoZ3JpZFtpXVtjXSA9PT0gdmFsKSByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgYnIgPSBNYXRoLmZsb29yKHIgLyAzKSAqIDM7XG4gIGNvbnN0IGJjID0gTWF0aC5mbG9vcihjIC8gMykgKiAzO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykgZm9yIChsZXQgaiA9IDA7IGogPCAzOyBqKyspIHtcbiAgICBpZiAoZ3JpZFticiArIGldW2JjICsgal0gPT09IHZhbCkgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZEVtcHR5KGdyaWQ6IEdyaWQpOiBbbnVtYmVyLCBudW1iZXJdIHwgbnVsbCB7XG4gIGZvciAobGV0IHIgPSAwOyByIDwgOTsgcisrKSB7XG4gICAgZm9yIChsZXQgYyA9IDA7IGMgPCA5OyBjKyspIGlmIChncmlkW3JdW2NdID09PSAwKSByZXR1cm4gW3IsIGNdO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc29sdmVTdWRva3UoZ3JpZDogR3JpZCk6IEdyaWQgfCBudWxsIHtcbiAgY29uc3QgZW1wdHkgPSBmaW5kRW1wdHkoZ3JpZCk7XG4gIGlmICghZW1wdHkpIHJldHVybiBncmlkO1xuICBjb25zdCBbciwgY10gPSBlbXB0eTtcbiAgY29uc3QgbnVtcyA9IHNodWZmbGUoWzEsMiwzLDQsNSw2LDcsOCw5XSk7XG4gIGZvciAoY29uc3QgdiBvZiBudW1zKSB7XG4gICAgaWYgKGlzVmFsaWQoZ3JpZCwgciwgYywgdikpIHtcbiAgICAgIGdyaWRbcl1bY10gPSB2O1xuICAgICAgY29uc3Qgc29sdmVkID0gc29sdmVTdWRva3UoZ3JpZCk7XG4gICAgICBpZiAoc29sdmVkKSByZXR1cm4gc29sdmVkO1xuICAgICAgZ3JpZFtyXVtjXSA9IDA7XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY291bnRTb2x1dGlvbnMoZ3JpZDogR3JpZCwgbGltaXQgPSAyKTogbnVtYmVyIHtcbiAgY29uc3QgZW1wdHkgPSBmaW5kRW1wdHkoZ3JpZCk7XG4gIGlmICghZW1wdHkpIHJldHVybiAxO1xuICBjb25zdCBbciwgY10gPSBlbXB0eTtcbiAgbGV0IGNvdW50ID0gMDtcbiAgZm9yIChsZXQgdiA9IDE7IHYgPD0gOTsgdisrKSB7XG4gICAgaWYgKGlzVmFsaWQoZ3JpZCwgciwgYywgdikpIHtcbiAgICAgIGdyaWRbcl1bY10gPSB2O1xuICAgICAgY291bnQgKz0gY291bnRTb2x1dGlvbnMoZ3JpZCwgbGltaXQpO1xuICAgICAgaWYgKGNvdW50ID49IGxpbWl0KSB7XG4gICAgICAgIGdyaWRbcl1bY10gPSAwOyAvLyBlbnN1cmUgY2xlYW51cCBiZWZvcmUgZWFybHkgZXhpdFxuICAgICAgICByZXR1cm4gY291bnQ7XG4gICAgICB9XG4gICAgICBncmlkW3JdW2NdID0gMDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNvdW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVGdWxsKCk6IEdyaWQge1xuICBjb25zdCBncmlkOiBHcmlkID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogOSB9LCAoKSA9PiBBcnJheSg5KS5maWxsKDApKTtcbiAgZnVuY3Rpb24gZmlsbENlbGwoaWR4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBpZiAoaWR4ID09PSA4MSkgcmV0dXJuIHRydWU7XG4gICAgY29uc3QgciA9IE1hdGguZmxvb3IoaWR4IC8gOSksIGMgPSBpZHggJSA5O1xuICAgIGNvbnN0IG51bXMgPSBzaHVmZmxlKFsxLDIsMyw0LDUsNiw3LDgsOV0pO1xuICAgIGZvciAoY29uc3QgdiBvZiBudW1zKSB7XG4gICAgICBpZiAoaXNWYWxpZChncmlkLCByLCBjLCB2KSkge1xuICAgICAgICBncmlkW3JdW2NdID0gdjtcbiAgICAgICAgaWYgKGZpbGxDZWxsKGlkeCArIDEpKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgZ3JpZFtyXVtjXSA9IDA7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBmaWxsQ2VsbCgwKTtcbiAgcmV0dXJuIGdyaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVB1enpsZShkaWZmaWN1bHR5OiBEaWZmaWN1bHR5KTogR3JpZCB7XG4gIGNvbnN0IGZ1bGwgPSBnZW5lcmF0ZUZ1bGwoKTtcbiAgY29uc3QgcHV6emxlOiBHcmlkID0gZnVsbC5tYXAocm93ID0+IHJvdy5zbGljZSgpKTtcbiAgLy8gdGFyZ2V0IGNsdWVzOiBzaW1wbGUgaGV1cmlzdGljXG4gIGNvbnN0IHRhcmdldENsdWVzID0ge1xuICAgIGVhc3k6IDQwLFxuICAgIG1lZGl1bTogMzIsXG4gICAgaGFyZDogMjYsXG4gICAgZXhwZXJ0OiAyMixcbiAgfVtkaWZmaWN1bHR5XTtcblxuICBsZXQgY2VsbHMgPSBzaHVmZmxlKEFycmF5LmZyb20oeyBsZW5ndGg6IDgxIH0sIChfLCBpKSA9PiBpKSk7XG4gIGxldCByZW1vdmVkID0gMDtcbiAgZm9yIChjb25zdCBpZHggb2YgY2VsbHMpIHtcbiAgICBpZiAoODEgLSByZW1vdmVkIDw9IHRhcmdldENsdWVzKSBicmVhaztcbiAgICBjb25zdCByID0gTWF0aC5mbG9vcihpZHggLyA5KSwgYyA9IGlkeCAlIDk7XG4gICAgY29uc3QgYmFja3VwID0gcHV6emxlW3JdW2NdO1xuICAgIHB1enpsZVtyXVtjXSA9IDA7XG4gICAgLy8gQ2hlY2sgdW5pcXVlbmVzc1xuICAgIGNvbnN0IGNsb25lID0gcHV6emxlLm1hcChyb3cgPT4gcm93LnNsaWNlKCkpO1xuICAgIGNvbnN0IHNvbHV0aW9ucyA9IGNvdW50U29sdXRpb25zKGNsb25lLCAyKTtcbiAgICBpZiAoc29sdXRpb25zICE9PSAxKSB7XG4gICAgICBwdXp6bGVbcl1bY10gPSBiYWNrdXA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZWQrKztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHB1enpsZTtcbn1cblxuIl0sIm5hbWVzIjpbInNodWZmbGUiLCJpc1ZhbGlkIiwiZ3JpZCIsInIiLCJjIiwidmFsIiwiaSIsImJyIiwiTWF0aCIsImZsb29yIiwiYmMiLCJqIiwiZmluZEVtcHR5Iiwic29sdmVTdWRva3UiLCJlbXB0eSIsIm51bXMiLCJ2Iiwic29sdmVkIiwiY291bnRTb2x1dGlvbnMiLCJsaW1pdCIsImNvdW50IiwiZ2VuZXJhdGVGdWxsIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiZmlsbCIsImZpbGxDZWxsIiwiaWR4IiwiZ2VuZXJhdGVQdXp6bGUiLCJkaWZmaWN1bHR5IiwiZnVsbCIsInB1enpsZSIsIm1hcCIsInJvdyIsInNsaWNlIiwidGFyZ2V0Q2x1ZXMiLCJlYXN5IiwibWVkaXVtIiwiaGFyZCIsImV4cGVydCIsImNlbGxzIiwiXyIsInJlbW92ZWQiLCJiYWNrdXAiLCJjbG9uZSIsInNvbHV0aW9ucyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/lib/utils/sudoku.ts\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/workers/solverWorker.ts":
/*!*************************************!*\
  !*** ./src/workers/solverWorker.ts ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_utils_sudoku__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/utils/sudoku */ \"(app-pages-browser)/./src/lib/utils/sudoku.ts\");\n\nself.addEventListener('message', (ev)=>{\n    const { id, type, payload } = ev.data;\n    try {\n        if (type === 'solve') {\n            const grid = payload.grid;\n            const copy = grid.map((r)=>r.slice());\n            const result = (0,_lib_utils_sudoku__WEBPACK_IMPORTED_MODULE_0__.solveSudoku)(copy);\n            if (!result) throw new Error('Unsolvable');\n            // @ts-ignore\n            self.postMessage({\n                id,\n                result\n            });\n            return;\n        }\n        if (type === 'generate') {\n            const difficulty = payload.difficulty;\n            const result = (0,_lib_utils_sudoku__WEBPACK_IMPORTED_MODULE_0__.generatePuzzle)(difficulty);\n            // @ts-ignore\n            self.postMessage({\n                id,\n                result\n            });\n            return;\n        }\n        throw new Error('Unknown request type');\n    } catch (error) {\n        // @ts-ignore\n        self.postMessage({\n            id,\n            error: String((error === null || error === void 0 ? void 0 : error.message) || error)\n        });\n    }\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy93b3JrZXJzL3NvbHZlcldvcmtlci50cyIsIm1hcHBpbmdzIjoiOztBQUFpRTtBQUtqRUUsS0FBS0MsZ0JBQWdCLENBQUMsV0FBVyxDQUFDQztJQUNoQyxNQUFNLEVBQUVDLEVBQUUsRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEVBQUUsR0FBR0gsR0FBR0ksSUFBSTtJQUNyQyxJQUFJO1FBQ0YsSUFBSUYsU0FBUyxTQUFTO1lBQ3BCLE1BQU1HLE9BQWFGLFFBQVFFLElBQUk7WUFDL0IsTUFBTUMsT0FBT0QsS0FBS0UsR0FBRyxDQUFDQyxDQUFBQSxJQUFLQSxFQUFFQyxLQUFLO1lBQ2xDLE1BQU1DLFNBQVNiLDhEQUFXQSxDQUFDUztZQUMzQixJQUFJLENBQUNJLFFBQVEsTUFBTSxJQUFJQyxNQUFNO1lBQzdCLGFBQWE7WUFDYmIsS0FBS2MsV0FBVyxDQUFDO2dCQUFFWDtnQkFBSVM7WUFBTztZQUM5QjtRQUNGO1FBQ0EsSUFBSVIsU0FBUyxZQUFZO1lBQ3ZCLE1BQU1XLGFBQXlCVixRQUFRVSxVQUFVO1lBQ2pELE1BQU1ILFNBQVNkLGlFQUFjQSxDQUFDaUI7WUFDOUIsYUFBYTtZQUNiZixLQUFLYyxXQUFXLENBQUM7Z0JBQUVYO2dCQUFJUztZQUFPO1lBQzlCO1FBQ0Y7UUFDQSxNQUFNLElBQUlDLE1BQU07SUFDbEIsRUFBRSxPQUFPRyxPQUFZO1FBQ25CLGFBQWE7UUFDYmhCLEtBQUtjLFdBQVcsQ0FBQztZQUFFWDtZQUFJYSxPQUFPQyxPQUFPRCxDQUFBQSxrQkFBQUEsNEJBQUFBLE1BQU9FLE9BQU8sS0FBSUY7UUFBTztJQUNoRTtBQUNGIiwic291cmNlcyI6WyIvVXNlcnMveGludGlhbmh1YW5nL1B5Y2hhcm1Qcm9qZWN0cy9jb21wMzgyMS9mcm9udGVuZC9zcmMvd29ya2Vycy9zb2x2ZXJXb3JrZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2VuZXJhdGVQdXp6bGUsIHNvbHZlU3Vkb2t1IH0gZnJvbSAnQC9saWIvdXRpbHMvc3Vkb2t1JztcbmltcG9ydCB0eXBlIHsgRGlmZmljdWx0eSwgR3JpZCB9IGZyb20gJ0AvbGliL3R5cGVzJztcblxudHlwZSBSZXEgPSB7IGlkOiBzdHJpbmc7IHR5cGU6ICdzb2x2ZScgfCAnZ2VuZXJhdGUnOyBwYXlsb2FkOiBhbnkgfTtcblxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKGV2OiBNZXNzYWdlRXZlbnQ8UmVxPikgPT4ge1xuICBjb25zdCB7IGlkLCB0eXBlLCBwYXlsb2FkIH0gPSBldi5kYXRhO1xuICB0cnkge1xuICAgIGlmICh0eXBlID09PSAnc29sdmUnKSB7XG4gICAgICBjb25zdCBncmlkOiBHcmlkID0gcGF5bG9hZC5ncmlkO1xuICAgICAgY29uc3QgY29weSA9IGdyaWQubWFwKHIgPT4gci5zbGljZSgpKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHNvbHZlU3Vkb2t1KGNvcHkpO1xuICAgICAgaWYgKCFyZXN1bHQpIHRocm93IG5ldyBFcnJvcignVW5zb2x2YWJsZScpO1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgc2VsZi5wb3N0TWVzc2FnZSh7IGlkLCByZXN1bHQgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAnZ2VuZXJhdGUnKSB7XG4gICAgICBjb25zdCBkaWZmaWN1bHR5OiBEaWZmaWN1bHR5ID0gcGF5bG9hZC5kaWZmaWN1bHR5O1xuICAgICAgY29uc3QgcmVzdWx0ID0gZ2VuZXJhdGVQdXp6bGUoZGlmZmljdWx0eSk7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBzZWxmLnBvc3RNZXNzYWdlKHsgaWQsIHJlc3VsdCB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIHJlcXVlc3QgdHlwZScpO1xuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHNlbGYucG9zdE1lc3NhZ2UoeyBpZCwgZXJyb3I6IFN0cmluZyhlcnJvcj8ubWVzc2FnZSB8fCBlcnJvcikgfSk7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImdlbmVyYXRlUHV6emxlIiwic29sdmVTdWRva3UiLCJzZWxmIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2IiwiaWQiLCJ0eXBlIiwicGF5bG9hZCIsImRhdGEiLCJncmlkIiwiY29weSIsIm1hcCIsInIiLCJzbGljZSIsInJlc3VsdCIsIkVycm9yIiwicG9zdE1lc3NhZ2UiLCJkaWZmaWN1bHR5IiwiZXJyb3IiLCJTdHJpbmciLCJtZXNzYWdlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/workers/solverWorker.ts\n"));

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "static/webpack/" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("static/webpack/" + __webpack_require__.h() + ".48c014678b0e8deb.hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("3cce926615a8ca97")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/trusted types policy */
/******/ 	(() => {
/******/ 		var policy;
/******/ 		__webpack_require__.tt = () => {
/******/ 			// Create Trusted Type policy if Trusted Types are available and the policy doesn't exist yet.
/******/ 			if (policy === undefined) {
/******/ 				policy = {
/******/ 					createScript: (script) => (script),
/******/ 					createScriptURL: (url) => (url)
/******/ 				};
/******/ 				if (typeof trustedTypes !== "undefined" && trustedTypes.createPolicy) {
/******/ 					policy = trustedTypes.createPolicy("nextjs#bundler", policy);
/******/ 				}
/******/ 			}
/******/ 			return policy;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/trusted types script */
/******/ 	(() => {
/******/ 		__webpack_require__.ts = (script) => (__webpack_require__.tt().createScript(script));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/trusted types script url */
/******/ 	(() => {
/******/ 		__webpack_require__.tu = (url) => (__webpack_require__.tt().createScriptURL(url));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId, fetchPriority) {
/******/ 				return trackBlockingPromise(require.e(chunkId, fetchPriority));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				// inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results).then(function () {});
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							}, [])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								}
/******/ 								return setStatus("ready").then(function () {
/******/ 									return updatedModules;
/******/ 								});
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/_next/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/react refresh */
/******/ 	(() => {
/******/ 		if (__webpack_require__.i) {
/******/ 		__webpack_require__.i.push((options) => {
/******/ 			const originalFactory = options.factory;
/******/ 			options.factory = (moduleObject, moduleExports, webpackRequire) => {
/******/ 				const hasRefresh = typeof self !== "undefined" && !!self.$RefreshInterceptModuleExecution$;
/******/ 				const cleanup = hasRefresh ? self.$RefreshInterceptModuleExecution$(moduleObject.id) : () => {};
/******/ 				try {
/******/ 					originalFactory.call(this, moduleObject, moduleExports, webpackRequire);
/******/ 				} finally {
/******/ 					cleanup();
/******/ 				}
/******/ 			}
/******/ 		})
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	
/******/ 	// noop fns to prevent runtime errors during initialization
/******/ 	if (typeof self !== "undefined") {
/******/ 		self.$RefreshReg$ = function () {};
/******/ 		self.$RefreshSig$ = function () {
/******/ 			return function (type) {
/******/ 				return type;
/******/ 			};
/******/ 		};
/******/ 	}
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		var createStylesheet = (chunkId, fullhref, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			(function(linkTag) {
/******/ 			                if (typeof _N_E_STYLE_LOAD === 'function') {
/******/ 			                    const { href, onload, onerror } = linkTag;
/******/ 			                    _N_E_STYLE_LOAD(href.indexOf(window.location.origin) === 0 ? new URL(href).pathname : href).then(()=>onload == null ? void 0 : onload.call(linkTag, {
/******/ 			                            type: 'load'
/******/ 			                        }), ()=>onerror == null ? void 0 : onerror.call(linkTag, {}));
/******/ 			                } else {
/******/ 			                    document.head.appendChild(linkTag);
/******/ 			                }
/******/ 			            })(linkTag)
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// no chunk loading
/******/ 		
/******/ 		var oldTags = [];
/******/ 		var newTags = [];
/******/ 		var applyHandler = (options) => {
/******/ 			return { dispose: () => {
/******/ 				for(var i = 0; i < oldTags.length; i++) {
/******/ 					var oldTag = oldTags[i];
/******/ 					if(oldTag.parentNode) oldTag.parentNode.removeChild(oldTag);
/******/ 				}
/******/ 				oldTags.length = 0;
/******/ 			}, apply: () => {
/******/ 				for(var i = 0; i < newTags.length; i++) newTags[i].rel = "stylesheet";
/******/ 				newTags.length = 0;
/******/ 			} };
/******/ 		}
/******/ 		__webpack_require__.hmrC.miniCss = (chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList) => {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			chunkIds.forEach((chunkId) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var oldTag = findStylesheet(href, fullhref);
/******/ 				if(!oldTag) return;
/******/ 				promises.push(new Promise((resolve, reject) => {
/******/ 					var tag = createStylesheet(chunkId, fullhref, () => {
/******/ 						tag.as = "style";
/******/ 						tag.rel = "preload";
/******/ 						resolve();
/******/ 					}, reject);
/******/ 					oldTags.push(oldTag);
/******/ 					newTags.push(tag);
/******/ 				}));
/******/ 			});
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/importScripts chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "already loaded"
/******/ 		var installedChunks = __webpack_require__.hmrS_importScripts = __webpack_require__.hmrS_importScripts || {
/******/ 			"_app-pages-browser_src_workers_solverWorker_ts": 1
/******/ 		};
/******/ 		
/******/ 		// no chunk install function needed
/******/ 		// no chunk loading
/******/ 		
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			var success = false;
/******/ 			self["webpackHotUpdate_N_E"] = (_, moreModules, runtime) => {
/******/ 				for(var moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						currentUpdate[moduleId] = moreModules[moduleId];
/******/ 						if(updatedModulesList) updatedModulesList.push(moduleId);
/******/ 					}
/******/ 				}
/******/ 				if(runtime) currentUpdateRuntime.push(runtime);
/******/ 				success = true;
/******/ 			};
/******/ 			// start update chunk loading
/******/ 			importScripts(__webpack_require__.tu(__webpack_require__.p + __webpack_require__.hu(chunkId)));
/******/ 			if(!success) throw new Error("Loading update chunk failed for unknown reason");
/******/ 		}
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.importScriptsHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result = newModuleFactory
/******/ 						? getAffectedModuleEffects(moduleId)
/******/ 						: {
/******/ 								type: "disposed",
/******/ 								moduleId: moduleId
/******/ 							};
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err1) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err1,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err1);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.importScripts = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.importScripts = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.importScriptsHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("(app-pages-browser)/./src/workers/solverWorker.ts");
/******/ 	_N_E = __webpack_exports__;
/******/ 	
/******/ })()
;