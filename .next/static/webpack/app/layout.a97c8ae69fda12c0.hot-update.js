"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"beb3e6578665\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzEyMDYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJiZWIzZTY1Nzg2NjVcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/Nav.tsx":
/*!****************************!*\
  !*** ./components/Nav.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/index */ \"(app-pages-browser)/./utils/index.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Nav = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const lang = (router === null || router === void 0 ? void 0 : router.slice(1)) === \"en\" ? \"en\" : \"es\";\n    // const [scrollY,setScrollY] = useState(0)\n    // const scrollALit = scrollY > 550 && scrollY < 1807\n    // const scrollEvenMore = scrollY >= 2430\n    // useEffect(()=>{\n    //   const handleScroll = ()=>{\n    //     setScrollY(window.scrollY)\n    //   }\n    //   addEventListener('scroll',handleScroll)\n    // },[])\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"w-full flex sm:flex-col flex-row justify-between px-4 pb-2 items-center absolute top-0 z-30 first:mx-auto bg-[#00000050]\",\n        id: \"nav\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"/\",\n                className: \" font-titleFont text-[3rem] font-normal cursor-pointer text-white text-center h-[74px]\",\n                id: \"logo_text\",\n                children: \"Puraluz\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\Diego\\\\Dev\\\\Next,React,Js,Astro\\\\ProjectosDev\\\\puraluz\\\\components\\\\Nav.tsx\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                xmlns: \"http://www.w3.org/2000/svg\",\n                viewBox: \"0 0 24 24\",\n                width: \"40\",\n                height: \"40\",\n                fill: \"none\",\n                className: \"flex sm:hidden cursor-pointer\",\n                color: \"#ffffff\",\n                onClick: ()=>{\n                    setIsOpen(true);\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                        d: \"M4 8.5L20 8.5\",\n                        stroke: \"currentColor\",\n                        \"stroke-width\": \"1.5\",\n                        \"stroke-linecap\": \"round\",\n                        \"stroke-linejoin\": \"round\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\Diego\\\\Dev\\\\Next,React,Js,Astro\\\\ProjectosDev\\\\puraluz\\\\components\\\\Nav.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                        d: \"M4 15.5L20 15.5\",\n                        stroke: \"currentColor\",\n                        \"stroke-width\": \"1.5\",\n                        \"stroke-linecap\": \"round\",\n                        \"stroke-linejoin\": \"round\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\Diego\\\\Dev\\\\Next,React,Js,Astro\\\\ProjectosDev\\\\puraluz\\\\components\\\\Nav.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\Diego\\\\Dev\\\\Next,React,Js,Astro\\\\ProjectosDev\\\\puraluz\\\\components\\\\Nav.tsx\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"hidden sm:flex [&>li>a]:px-8 [&>li>a]:font-subFont [&>li>a]:py-1 [&>li>a]:text-[15px] [&>li>a]:text-white hover:[&>li>a]:border-b-black hover:[&>li>a]:border-b-[2px]\",\n                id: \"anchors\",\n                children: _utils_index__WEBPACK_IMPORTED_MODULE_3__.navigations.map((navigation)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"\",\n                        id: \"black\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: navigation.path,\n                            className: \"font-bold\",\n                            children: navigation.name[lang]\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\Diego\\\\Dev\\\\Next,React,Js,Astro\\\\ProjectosDev\\\\puraluz\\\\components\\\\Nav.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 15\n                        }, undefined)\n                    }, navigation.name[lang], false, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\Diego\\\\Dev\\\\Next,React,Js,Astro\\\\ProjectosDev\\\\puraluz\\\\components\\\\Nav.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\Diego\\\\Dev\\\\Next,React,Js,Astro\\\\ProjectosDev\\\\puraluz\\\\components\\\\Nav.tsx\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, undefined),\n            isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[100vw] h-[100%] z-30 flex flex-col justify-start items-end fixed top-0 left-0 sm:hidden bg-[rgb(23,64,73)] overflow-y-hidden\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        viewBox: \"0 0 24 24\",\n                        width: \"40\",\n                        height: \"40\",\n                        color: \"#ffffff\",\n                        fill: \"none\",\n                        className: \" sm:hidden mt-[15px] mr-[15px] cursor-pointer\",\n                        onClick: ()=>{\n                            setIsOpen(false);\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                            d: \"M19 5L5 19M5 5L19 19\",\n                            stroke: \"currentColor\",\n                            \"stroke-width\": \"1.5\",\n                            \"stroke-linecap\": \"round\",\n                            \"stroke-linejoin\": \"round\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\Diego\\\\Dev\\\\Next,React,Js,Astro\\\\ProjectosDev\\\\puraluz\\\\components\\\\Nav.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 23\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\Diego\\\\Dev\\\\Next,React,Js,Astro\\\\ProjectosDev\\\\puraluz\\\\components\\\\Nav.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 19\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"w-full text-center\",\n                        children: _utils_index__WEBPACK_IMPORTED_MODULE_3__.navigations.map((navigation)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"py-[1.2rem] px-12 active:bg-[#ffffff30] duration-200\",\n                                id: \"black\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: navigation.path,\n                                    className: \"font-semibold text-[3rem]\",\n                                    onClick: ()=>{\n                                        setIsOpen(false);\n                                    },\n                                    children: navigation.name[lang]\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\Diego\\\\Dev\\\\Next,React,Js,Astro\\\\ProjectosDev\\\\puraluz\\\\components\\\\Nav.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 25\n                                }, undefined)\n                            }, navigation.name[lang], false, {\n                                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\Diego\\\\Dev\\\\Next,React,Js,Astro\\\\ProjectosDev\\\\puraluz\\\\components\\\\Nav.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 23\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\Diego\\\\Dev\\\\Next,React,Js,Astro\\\\ProjectosDev\\\\puraluz\\\\components\\\\Nav.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 19\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\Diego\\\\Dev\\\\Next,React,Js,Astro\\\\ProjectosDev\\\\puraluz\\\\components\\\\Nav.tsx\",\n                lineNumber: 38,\n                columnNumber: 15\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\diego\\\\Desktop\\\\Diego\\\\Dev\\\\Next,React,Js,Astro\\\\ProjectosDev\\\\puraluz\\\\components\\\\Nav.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Nav, \"S6u/tZypF77O71EORydhPM3dcJI=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname\n    ];\n});\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTmF2LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUU0QztBQUNFO0FBQ0Q7QUFFN0MsTUFBTUcsTUFBTTs7SUFDVixNQUFNQyxTQUFTSCw0REFBV0E7SUFDMUIsTUFBTSxDQUFDSSxRQUFPQyxVQUFVLEdBQUNOLCtDQUFRQSxDQUFDO0lBQ2xDLE1BQU1PLE9BQU9ILENBQUFBLG1CQUFBQSw2QkFBQUEsT0FBUUksS0FBSyxDQUFDLFFBQU8sT0FBTyxPQUFPO0lBQ2hELDJDQUEyQztJQUMzQyxxREFBcUQ7SUFDckQseUNBQXlDO0lBRXpDLGtCQUFrQjtJQUNsQiwrQkFBK0I7SUFDL0IsaUNBQWlDO0lBQ2pDLE1BQU07SUFFTiw0Q0FBNEM7SUFDNUMsUUFBUTtJQUVSLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO1FBQTJIQyxJQUFHOzswQkFDekksOERBQUNDO2dCQUFFQyxNQUFLO2dCQUFJSCxXQUFZO2dCQUF5RkMsSUFBRzswQkFBWTs7Ozs7OzBCQUNoSSw4REFBQ0c7Z0JBQUlDLE9BQU07Z0JBQTZCQyxTQUFRO2dCQUFZQyxPQUFNO2dCQUFLQyxRQUFPO2dCQUFLQyxNQUFLO2dCQUFPVCxXQUFVO2dCQUFnQ1UsT0FBTTtnQkFBVUMsU0FBUztvQkFBS2YsVUFBVTtnQkFBSzs7a0NBQ2xMLDhEQUFDZ0I7d0JBQUtDLEdBQUU7d0JBQWdCQyxRQUFPO3dCQUFlQyxnQkFBYTt3QkFBTUMsa0JBQWU7d0JBQVFDLG1CQUFnQjs7Ozs7O2tDQUN4Ryw4REFBQ0w7d0JBQUtDLEdBQUU7d0JBQWtCQyxRQUFPO3dCQUFlQyxnQkFBYTt3QkFBTUMsa0JBQWU7d0JBQVFDLG1CQUFnQjs7Ozs7Ozs7Ozs7OzBCQUU5Ryw4REFBQ0M7Z0JBQUdsQixXQUFZO2dCQUF3S0MsSUFBRzswQkFDeExULHFEQUFXQSxDQUFDMkIsR0FBRyxDQUFDLENBQUNDLDJCQUNoQiw4REFBQ0M7d0JBQUdyQixXQUFVO3dCQUFHQyxJQUFHO2tDQUNsQiw0RUFBQ0M7NEJBQUVDLE1BQU1pQixXQUFXUixJQUFJOzRCQUFFWixXQUFVO3NDQUFhb0IsV0FBV0UsSUFBSSxDQUFDekIsS0FBSzs7Ozs7O3VCQUR2Q3VCLFdBQVdFLElBQUksQ0FBQ3pCLEtBQUs7Ozs7Ozs7Ozs7WUFLekRGLHdCQUNLLDhEQUFDNEI7Z0JBQUl2QixXQUFVOztrQ0FDWCw4REFBQ0k7d0JBQUlDLE9BQU07d0JBQTZCQyxTQUFRO3dCQUFZQyxPQUFNO3dCQUFLQyxRQUFPO3dCQUFLRSxPQUFNO3dCQUFVRCxNQUFLO3dCQUFPVCxXQUFVO3dCQUFnRFcsU0FBUzs0QkFBS2YsVUFBVTt3QkFBTTtrQ0FDbk0sNEVBQUNnQjs0QkFBS0MsR0FBRTs0QkFBdUJDLFFBQU87NEJBQWVDLGdCQUFhOzRCQUFNQyxrQkFBZTs0QkFBUUMsbUJBQWdCOzs7Ozs7Ozs7OztrQ0FFbkgsOERBQUNDO3dCQUFHbEIsV0FBVTtrQ0FDWFIscURBQVdBLENBQUMyQixHQUFHLENBQUMsQ0FBQ0MsMkJBQ2hCLDhEQUFDQztnQ0FBR3JCLFdBQVU7Z0NBQXVEQyxJQUFHOzBDQUN0RSw0RUFBQ0M7b0NBQUVDLE1BQU1pQixXQUFXUixJQUFJO29DQUFFWixXQUFVO29DQUE0QlcsU0FBUzt3Q0FBS2YsVUFBVTtvQ0FBTTs4Q0FBSXdCLFdBQVdFLElBQUksQ0FBQ3pCLEtBQUs7Ozs7OzsrQkFEcEN1QixXQUFXRSxJQUFJLENBQUN6QixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU2hJO0dBOUNNSjs7UUFDV0Ysd0RBQVdBOzs7S0FEdEJFO0FBZ0ROLCtEQUFlQSxHQUFHQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2LnRzeD9lNjMyIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5cclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUGF0aG5hbWUgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xyXG5pbXBvcnQgeyBuYXZpZ2F0aW9ucyB9IGZyb20gJy4uL3V0aWxzL2luZGV4JztcclxuXHJcbmNvbnN0IE5hdiA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VQYXRobmFtZSgpO1xyXG4gIGNvbnN0IFtpc09wZW4sc2V0SXNPcGVuXT11c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgbGFuZyA9IHJvdXRlcj8uc2xpY2UoMSkgPT09ICdlbicgPyAnZW4nIDogJ2VzJztcclxuICAvLyBjb25zdCBbc2Nyb2xsWSxzZXRTY3JvbGxZXSA9IHVzZVN0YXRlKDApXHJcbiAgLy8gY29uc3Qgc2Nyb2xsQUxpdCA9IHNjcm9sbFkgPiA1NTAgJiYgc2Nyb2xsWSA8IDE4MDdcclxuICAvLyBjb25zdCBzY3JvbGxFdmVuTW9yZSA9IHNjcm9sbFkgPj0gMjQzMFxyXG5cclxuICAvLyB1c2VFZmZlY3QoKCk9PntcclxuICAvLyAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpPT57XHJcbiAgLy8gICAgIHNldFNjcm9sbFkod2luZG93LnNjcm9sbFkpXHJcbiAgLy8gICB9XHJcblxyXG4gIC8vICAgYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJyxoYW5kbGVTY3JvbGwpXHJcbiAgLy8gfSxbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPSd3LWZ1bGwgZmxleCBzbTpmbGV4LWNvbCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gcHgtNCBwYi0yIGl0ZW1zLWNlbnRlciBhYnNvbHV0ZSB0b3AtMCB6LTMwIGZpcnN0Om14LWF1dG8gYmctWyMwMDAwMDA1MF0nIGlkPVwibmF2XCI+XHJcbiAgICAgICAgPGEgaHJlZj0nLycgY2xhc3NOYW1lPXtgIGZvbnQtdGl0bGVGb250IHRleHQtWzNyZW1dIGZvbnQtbm9ybWFsIGN1cnNvci1wb2ludGVyIHRleHQtd2hpdGUgdGV4dC1jZW50ZXIgaC1bNzRweF1gfSBpZD1cImxvZ29fdGV4dFwiPlB1cmFsdXo8L2E+XHJcbiAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiNDBcIiBoZWlnaHQ9XCI0MFwiIGZpbGw9XCJub25lXCIgY2xhc3NOYW1lPSdmbGV4IHNtOmhpZGRlbiBjdXJzb3ItcG9pbnRlcicgY29sb3I9JyNmZmZmZmYnIG9uQ2xpY2s9eygpPT57c2V0SXNPcGVuKHRydWUpfX0+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNNCA4LjVMMjAgOC41XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgLz5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk00IDE1LjVMMjAgMTUuNVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjEuNVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIC8+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT17YGhpZGRlbiBzbTpmbGV4IFsmPmxpPmFdOnB4LTggWyY+bGk+YV06Zm9udC1zdWJGb250IFsmPmxpPmFdOnB5LTEgWyY+bGk+YV06dGV4dC1bMTVweF0gWyY+bGk+YV06dGV4dC13aGl0ZSBob3ZlcjpbJj5saT5hXTpib3JkZXItYi1ibGFjayBob3ZlcjpbJj5saT5hXTpib3JkZXItYi1bMnB4XWB9IGlkPVwiYW5jaG9yc1wiPlxyXG4gICAgICAgICAge25hdmlnYXRpb25zLm1hcCgobmF2aWdhdGlvbikgPT4gKFxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiXCIgaWQ9XCJibGFja1wiIGtleT17bmF2aWdhdGlvbi5uYW1lW2xhbmddfT5cclxuICAgICAgICAgICAgICA8YSBocmVmPXtuYXZpZ2F0aW9uLnBhdGh9IGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPntuYXZpZ2F0aW9uLm5hbWVbbGFuZ119PC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICB7aXNPcGVuICYmIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1bMTAwdnddIGgtWzEwMCVdIHotMzAgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWVuZCBmaXhlZCB0b3AtMCBsZWZ0LTAgc206aGlkZGVuIGJnLVtyZ2IoMjMsNjQsNzMpXSBvdmVyZmxvdy15LWhpZGRlbic+XHJcbiAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjQwXCIgaGVpZ2h0PVwiNDBcIiBjb2xvcj1cIiNmZmZmZmZcIiBmaWxsPVwibm9uZVwiIGNsYXNzTmFtZT0nIHNtOmhpZGRlbiBtdC1bMTVweF0gbXItWzE1cHhdIGN1cnNvci1wb2ludGVyJyBvbkNsaWNrPXsoKT0+e3NldElzT3BlbihmYWxzZSl9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTkgNUw1IDE5TTUgNUwxOSAxOVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjEuNVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSd3LWZ1bGwgdGV4dC1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIHtuYXZpZ2F0aW9ucy5tYXAoKG5hdmlnYXRpb24pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJweS1bMS4ycmVtXSBweC0xMiBhY3RpdmU6YmctWyNmZmZmZmYzMF0gZHVyYXRpb24tMjAwXCIgaWQ9XCJibGFja1wiIGtleT17bmF2aWdhdGlvbi5uYW1lW2xhbmddfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17bmF2aWdhdGlvbi5wYXRofSBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtWzNyZW1dXCIgb25DbGljaz17KCk9PntzZXRJc09wZW4oZmFsc2UpfX0+e25hdmlnYXRpb24ubmFtZVtsYW5nXX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2OyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVBhdGhuYW1lIiwibmF2aWdhdGlvbnMiLCJOYXYiLCJyb3V0ZXIiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJsYW5nIiwic2xpY2UiLCJuYXYiLCJjbGFzc05hbWUiLCJpZCIsImEiLCJocmVmIiwic3ZnIiwieG1sbnMiLCJ2aWV3Qm94Iiwid2lkdGgiLCJoZWlnaHQiLCJmaWxsIiwiY29sb3IiLCJvbkNsaWNrIiwicGF0aCIsImQiLCJzdHJva2UiLCJzdHJva2Utd2lkdGgiLCJzdHJva2UtbGluZWNhcCIsInN0cm9rZS1saW5lam9pbiIsInVsIiwibWFwIiwibmF2aWdhdGlvbiIsImxpIiwibmFtZSIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Nav.tsx\n"));

/***/ })

});