"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/Between.tsx":
/*!********************************!*\
  !*** ./components/Between.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/index */ \"(app-pages-browser)/./utils/index.ts\");\n/* harmony import */ var _components_ui_infinite_moving_cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/infinite-moving-cards */ \"(app-pages-browser)/./components/ui/infinite-moving-cards.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nconst Between = (param)=>{\n    let { frase } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"h-[100dvh] w-full flex justify-center items-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"sm:pt-[1rem] pt-[1rem] pb-[2rem] px-[2rem] flex flex-col justify-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-[#174049] font-yellowtail font-bold text-[2rem] mb-[2.5rem]\",\n                    children: frase\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\Diego\\\\Dev\\\\Next,React,Js,Astro\\\\ProjectosDev\\\\puraluz\\\\components\\\\Between.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_infinite_moving_cards__WEBPACK_IMPORTED_MODULE_2__.InfiniteMovingCards, {\n                    items: _utils_index__WEBPACK_IMPORTED_MODULE_1__.yogaImages,\n                    direction: \"right\",\n                    speed: \"normal\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\Diego\\\\Dev\\\\Next,React,Js,Astro\\\\ProjectosDev\\\\puraluz\\\\components\\\\Between.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\Diego\\\\Dev\\\\Next,React,Js,Astro\\\\ProjectosDev\\\\puraluz\\\\components\\\\Between.tsx\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\Diego\\\\Dev\\\\Next,React,Js,Astro\\\\ProjectosDev\\\\puraluz\\\\components\\\\Between.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Between;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Between);\nvar _c;\n$RefreshReg$(_c, \"Between\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQmV0d2Vlbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHeUM7QUFDbUM7QUFFNUUsTUFBTUUsVUFBVTtRQUFDLEVBQUNDLEtBQUssRUFBZ0I7SUFFckMscUJBQ0UsOERBQUNDO1FBQVFDLFdBQVU7a0JBQ2pCLDRFQUFDQztZQUFJRCxXQUFVOzs4QkFDYiw4REFBQ0U7b0JBQUdGLFdBQVU7OEJBQW9FRjs7Ozs7OzhCQUNsRiw4REFBQ0YscUZBQW1CQTtvQkFDbEJPLE9BQU9SLG9EQUFVQTtvQkFDakJTLFdBQVU7b0JBQ1ZDLE9BQU07Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2hCO0tBZE1SO0FBZ0JOLCtEQUFlQSxPQUFPQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQmV0d2Vlbi50c3g/NWI1MiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQge3lvZ2FJbWFnZXN9IGZyb20gJy4uL3V0aWxzL2luZGV4J1xyXG5pbXBvcnQgeyBJbmZpbml0ZU1vdmluZ0NhcmRzIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9pbmZpbml0ZS1tb3ZpbmctY2FyZHNcIjtcclxuXHJcbmNvbnN0IEJldHdlZW4gPSAoe2ZyYXNlfTp7ZnJhc2U6c3RyaW5nfSkgPT4ge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaC1bMTAwZHZoXSB3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbTpwdC1bMXJlbV0gcHQtWzFyZW1dIHBiLVsycmVtXSBweC1bMnJlbV0gZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LVsjMTc0MDQ5XSBmb250LXllbGxvd3RhaWwgZm9udC1ib2xkIHRleHQtWzJyZW1dIG1iLVsyLjVyZW1dXCI+e2ZyYXNlfTwvaDI+XHJcbiAgICAgICAgPEluZmluaXRlTW92aW5nQ2FyZHNcclxuICAgICAgICAgIGl0ZW1zPXt5b2dhSW1hZ2VzfVxyXG4gICAgICAgICAgZGlyZWN0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgc3BlZWQ9XCJub3JtYWxcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmV0d2VlblxyXG4iXSwibmFtZXMiOlsieW9nYUltYWdlcyIsIkluZmluaXRlTW92aW5nQ2FyZHMiLCJCZXR3ZWVuIiwiZnJhc2UiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDIiLCJpdGVtcyIsImRpcmVjdGlvbiIsInNwZWVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Between.tsx\n"));

/***/ })

});