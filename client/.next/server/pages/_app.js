/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "__barrel_optimize__?names=FaUserCircle!=!../../../../node_modules/react-icons/fa/index.mjs":
/*!**************************************************************************************************!*\
  !*** __barrel_optimize__?names=FaUserCircle!=!../../../../node_modules/react-icons/fa/index.mjs ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_ksk76_node_modules_react_icons_fa_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/react-icons/fa/index.mjs */ "../../../../node_modules/react-icons/fa/index.mjs");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in C_Users_ksk76_node_modules_react_icons_fa_index_mjs__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => C_Users_ksk76_node_modules_react_icons_fa_index_mjs__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "__barrel_optimize__?names=MdDashboard!=!../../../../node_modules/react-icons/md/index.mjs":
/*!*************************************************************************************************!*\
  !*** __barrel_optimize__?names=MdDashboard!=!../../../../node_modules/react-icons/md/index.mjs ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_ksk76_node_modules_react_icons_md_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/react-icons/md/index.mjs */ "../../../../node_modules/react-icons/md/index.mjs");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in C_Users_ksk76_node_modules_react_icons_md_index_mjs__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => C_Users_ksk76_node_modules_react_icons_md_index_mjs__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "__barrel_optimize__?names=SiGoogleanalytics!=!../../../../node_modules/react-icons/si/index.mjs":
/*!*******************************************************************************************************!*\
  !*** __barrel_optimize__?names=SiGoogleanalytics!=!../../../../node_modules/react-icons/si/index.mjs ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_ksk76_node_modules_react_icons_si_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/react-icons/si/index.mjs */ "../../../../node_modules/react-icons/si/index.mjs");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in C_Users_ksk76_node_modules_react_icons_si_index_mjs__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => C_Users_ksk76_node_modules_react_icons_si_index_mjs__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_FaUserCircle_react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=FaUserCircle!=!react-icons/fa */ \"__barrel_optimize__?names=FaUserCircle!=!../../../../node_modules/react-icons/fa/index.mjs\");\n\n\n\nconst Header = ({ path })=>{\n    let title = \"\";\n    switch(path){\n        case \"/home\":\n            title = \"Dashboard\";\n            break;\n        case \"/analytics\":\n            title = \"Analytics\";\n            break;\n        default:\n            title = \"Dashboard\";\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-row p-4 bg-white shadow-md w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-1 flex items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-2xl font-bold\",\n                    children: title\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ksk76\\\\Downloads\\\\Current_WorkSpace\\\\JSTask\\\\client\\\\components\\\\Header.js\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ksk76\\\\Downloads\\\\Current_WorkSpace\\\\JSTask\\\\client\\\\components\\\\Header.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"mr-4\",\n                        children: \"Edward William\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ksk76\\\\Downloads\\\\Current_WorkSpace\\\\JSTask\\\\client\\\\components\\\\Header.js\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaUserCircle_react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaUserCircle, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ksk76\\\\Downloads\\\\Current_WorkSpace\\\\JSTask\\\\client\\\\components\\\\Header.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ksk76\\\\Downloads\\\\Current_WorkSpace\\\\JSTask\\\\client\\\\components\\\\Header.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ksk76\\\\Downloads\\\\Current_WorkSpace\\\\JSTask\\\\client\\\\components\\\\Header.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTBCO0FBQ29CO0FBRTlDLE1BQU1FLFNBQVMsQ0FBQyxFQUFFQyxJQUFJLEVBQUU7SUFDdEIsSUFBSUMsUUFBUTtJQUVaLE9BQVFEO1FBQ04sS0FBSztZQUNIQyxRQUFRO1lBQ1I7UUFDRixLQUFLO1lBQ0hBLFFBQVE7WUFDUjtRQUNGO1lBQ0VBLFFBQVE7SUFDWjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNDO29CQUFHRCxXQUFVOzhCQUFzQkY7Ozs7Ozs7Ozs7OzBCQUV0Qyw4REFBQ0M7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRTt3QkFBS0YsV0FBVTtrQ0FBTzs7Ozs7O2tDQUN2Qiw4REFBQ0wsNEZBQVlBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlyQjtBQUVBLGlFQUFlQyxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29tcG9uZW50cy9IZWFkZXIuanM/NGRiYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGYVVzZXJDaXJjbGUgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcclxuXHJcbmNvbnN0IEhlYWRlciA9ICh7IHBhdGggfSkgPT4ge1xyXG4gIGxldCB0aXRsZSA9ICcnO1xyXG5cclxuICBzd2l0Y2ggKHBhdGgpIHtcclxuICAgIGNhc2UgJy9ob21lJzpcclxuICAgICAgdGl0bGUgPSAnRGFzaGJvYXJkJztcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICcvYW5hbHl0aWNzJzpcclxuICAgICAgdGl0bGUgPSAnQW5hbHl0aWNzJztcclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICB0aXRsZSA9ICdEYXNoYm9hcmQnO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBwLTQgYmctd2hpdGUgc2hhZG93LW1kIHctZnVsbFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj57dGl0bGV9PC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtci00XCI+RWR3YXJkIFdpbGxpYW08L3NwYW4+XHJcbiAgICAgICAgPEZhVXNlckNpcmNsZSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkZhVXNlckNpcmNsZSIsIkhlYWRlciIsInBhdGgiLCJ0aXRsZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ }),

/***/ "./components/Sidebar.js":
/*!*******************************!*\
  !*** ./components/Sidebar.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_MdDashboard_react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=MdDashboard!=!react-icons/md */ \"__barrel_optimize__?names=MdDashboard!=!../../../../node_modules/react-icons/md/index.mjs\");\n/* harmony import */ var _barrel_optimize_names_SiGoogleanalytics_react_icons_si__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=SiGoogleanalytics!=!react-icons/si */ \"__barrel_optimize__?names=SiGoogleanalytics!=!../../../../node_modules/react-icons/si/index.mjs\");\n\n\n\n\n\nconst Sidebar = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-[#6B120A] rounded-r-[2rem] w-[17%] h-screen\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: \"list-none text-white m-5 mt-10\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"flex gap-2 items-center hover:bg-[#7D2F28] cursor-pointer rounded p-3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/home\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex gap-2 items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MdDashboard_react_icons_md__WEBPACK_IMPORTED_MODULE_3__.MdDashboard, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ksk76\\\\Downloads\\\\Current_WorkSpace\\\\JSTask\\\\client\\\\components\\\\Sidebar.js\",\n                                    lineNumber: 13,\n                                    columnNumber: 15\n                                }, undefined),\n                                \"Dashboard\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ksk76\\\\Downloads\\\\Current_WorkSpace\\\\JSTask\\\\client\\\\components\\\\Sidebar.js\",\n                            lineNumber: 12,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ksk76\\\\Downloads\\\\Current_WorkSpace\\\\JSTask\\\\client\\\\components\\\\Sidebar.js\",\n                        lineNumber: 11,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ksk76\\\\Downloads\\\\Current_WorkSpace\\\\JSTask\\\\client\\\\components\\\\Sidebar.js\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"flex gap-2 items-center hover:bg-[#7D2F28] cursor-pointer rounded p-3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/analytics\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex gap-2 items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_SiGoogleanalytics_react_icons_si__WEBPACK_IMPORTED_MODULE_4__.SiGoogleanalytics, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ksk76\\\\Downloads\\\\Current_WorkSpace\\\\JSTask\\\\client\\\\components\\\\Sidebar.js\",\n                                    lineNumber: 20,\n                                    columnNumber: 15\n                                }, undefined),\n                                \"Analytics\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ksk76\\\\Downloads\\\\Current_WorkSpace\\\\JSTask\\\\client\\\\components\\\\Sidebar.js\",\n                            lineNumber: 19,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ksk76\\\\Downloads\\\\Current_WorkSpace\\\\JSTask\\\\client\\\\components\\\\Sidebar.js\",\n                        lineNumber: 18,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ksk76\\\\Downloads\\\\Current_WorkSpace\\\\JSTask\\\\client\\\\components\\\\Sidebar.js\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"flex gap-2 items-center hover:bg-[#7D2F28] cursor-pointer rounded p-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_SiGoogleanalytics_react_icons_si__WEBPACK_IMPORTED_MODULE_4__.SiGoogleanalytics, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ksk76\\\\Downloads\\\\Current_WorkSpace\\\\JSTask\\\\client\\\\components\\\\Sidebar.js\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, undefined),\n                        \"Rate Request\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ksk76\\\\Downloads\\\\Current_WorkSpace\\\\JSTask\\\\client\\\\components\\\\Sidebar.js\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ksk76\\\\Downloads\\\\Current_WorkSpace\\\\JSTask\\\\client\\\\components\\\\Sidebar.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ksk76\\\\Downloads\\\\Current_WorkSpace\\\\JSTask\\\\client\\\\components\\\\Sidebar.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZGViYXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNHO0FBQ2dCO0FBQ007QUFFbkQsTUFBTUksVUFBVTtJQUNkLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDQztZQUFHRCxXQUFVOzs4QkFDWiw4REFBQ0U7b0JBQUdGLFdBQVU7OEJBQ1osNEVBQUNMLGtEQUFJQTt3QkFBQ1EsTUFBSztrQ0FDVCw0RUFBQ0o7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDSiwwRkFBV0E7Ozs7O2dDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFJckIsOERBQUNNO29CQUFHRixXQUFVOzhCQUNaLDRFQUFDTCxrREFBSUE7d0JBQUNRLE1BQUs7a0NBQ1QsNEVBQUNKOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ0gsc0dBQWlCQTs7Ozs7Z0NBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUkzQiw4REFBQ0s7b0JBQUdGLFdBQVU7O3NDQUNaLDhEQUFDSCxzR0FBaUJBOzs7Ozt3QkFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSy9CO0FBRUEsaUVBQWVDLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL1NpZGViYXIuanM/M2RhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBNZERhc2hib2FyZCB9IGZyb20gJ3JlYWN0LWljb25zL21kJztcclxuaW1wb3J0IHsgU2lHb29nbGVhbmFseXRpY3MgfSBmcm9tICdyZWFjdC1pY29ucy9zaSc7XHJcblxyXG5jb25zdCBTaWRlYmFyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nYmctWyM2QjEyMEFdIHJvdW5kZWQtci1bMnJlbV0gdy1bMTclXSBoLXNjcmVlbic+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9J2xpc3Qtbm9uZSB0ZXh0LXdoaXRlIG0tNSBtdC0xMCc+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT0nZmxleCBnYXAtMiBpdGVtcy1jZW50ZXIgaG92ZXI6YmctWyM3RDJGMjhdIGN1cnNvci1wb2ludGVyIHJvdW5kZWQgcC0zJz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaG9tZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTIgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPE1kRGFzaGJvYXJkIC8+RGFzaGJvYXJkXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT0nZmxleCBnYXAtMiBpdGVtcy1jZW50ZXIgaG92ZXI6YmctWyM3RDJGMjhdIGN1cnNvci1wb2ludGVyIHJvdW5kZWQgcC0zJz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYW5hbHl0aWNzXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMiBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8U2lHb29nbGVhbmFseXRpY3MgLz5BbmFseXRpY3NcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPSdmbGV4IGdhcC0yIGl0ZW1zLWNlbnRlciBob3ZlcjpiZy1bIzdEMkYyOF0gY3Vyc29yLXBvaW50ZXIgcm91bmRlZCBwLTMnPlxyXG4gICAgICAgICAgPFNpR29vZ2xlYW5hbHl0aWNzIC8+UmF0ZSBSZXF1ZXN0XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xyXG4gICAgICJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJNZERhc2hib2FyZCIsIlNpR29vZ2xlYW5hbHl0aWNzIiwiU2lkZWJhciIsImRpdiIsImNsYXNzTmFtZSIsInVsIiwibGkiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Sidebar.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_font_google_target_css_path_pages_app_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"pages\\\\_app.js\",\"import\":\"Inter\",\"arguments\":[{\"subsets\":[\"latin\"]}],\"variableName\":\"inter\"} */ \"./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"pages\\\\\\\\_app.js\\\",\\\"import\\\":\\\"Inter\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"inter\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_pages_app_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_pages_app_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../App.css */ \"./App.css\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Sidebar */ \"./components/Sidebar.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var _util_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/store */ \"./util/store.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_redux__WEBPACK_IMPORTED_MODULE_5__, _util_store__WEBPACK_IMPORTED_MODULE_6__]);\n([react_redux__WEBPACK_IMPORTED_MODULE_5__, _util_store__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\nfunction App({ Component, pageProps }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_5__.Provider, {\n        store: _util_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: (next_font_google_target_css_path_pages_app_js_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_7___default().className),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ksk76\\\\Downloads\\\\Current_WorkSpace\\\\JSTask\\\\client\\\\pages\\\\_app.js\",\n                        lineNumber: 18,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col w-[83%]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                path: router.pathname\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ksk76\\\\Downloads\\\\Current_WorkSpace\\\\JSTask\\\\client\\\\pages\\\\_app.js\",\n                                lineNumber: 20,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                                ...pageProps\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ksk76\\\\Downloads\\\\Current_WorkSpace\\\\JSTask\\\\client\\\\pages\\\\_app.js\",\n                                lineNumber: 21,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ksk76\\\\Downloads\\\\Current_WorkSpace\\\\JSTask\\\\client\\\\pages\\\\_app.js\",\n                        lineNumber: 19,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ksk76\\\\Downloads\\\\Current_WorkSpace\\\\JSTask\\\\client\\\\pages\\\\_app.js\",\n                lineNumber: 17,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ksk76\\\\Downloads\\\\Current_WorkSpace\\\\JSTask\\\\client\\\\pages\\\\_app.js\",\n            lineNumber: 16,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ksk76\\\\Downloads\\\\Current_WorkSpace\\\\JSTask\\\\client\\\\pages\\\\_app.js\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUU1BO0FBUmE7QUFFd0I7QUFDRjtBQUNGO0FBQ0Q7QUFDTDtBQUlsQixTQUFTTSxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ2hELE1BQU1DLFNBQVNOLHNEQUFTQTtJQUV4QixxQkFDSSw4REFBQ0MsaURBQVFBO1FBQUNDLE9BQU9BLG1EQUFLQTtrQkFDbEIsNEVBQUNLO1lBQUtDLFdBQVdYLHlKQUFlO3NCQUM1Qiw0RUFBQ1k7Z0JBQUlELFdBQVU7O2tDQUNmLDhEQUFDViwyREFBT0E7Ozs7O2tDQUNSLDhEQUFDVzt3QkFBSUQsV0FBVTs7MENBQ1gsOERBQUNULDBEQUFNQTtnQ0FBQ1csTUFBTUosT0FBT0ssUUFBUTs7Ozs7OzBDQUM3Qiw4REFBQ1A7Z0NBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU01QyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL0FwcC5jc3MnXHJcbmltcG9ydCB7IEludGVyIH0gZnJvbSAnbmV4dC9mb250L2dvb2dsZSdcclxuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi4vY29tcG9uZW50cy9TaWRlYmFyJ1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHN0b3JlIGZyb20gJy4uL3V0aWwvc3RvcmUnXHJcblxyXG5jb25zdCBpbnRlciA9IEludGVyKHsgc3Vic2V0czogWydsYXRpbiddIH0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT17aW50ZXIuY2xhc3NOYW1lfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMlwiPlxyXG4gICAgICAgICAgICAgICAgPFNpZGViYXIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LVs4MyVdXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlciBwYXRoPXtyb3V0ZXIucGF0aG5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbImludGVyIiwiU2lkZWJhciIsIkhlYWRlciIsInVzZVJvdXRlciIsIlByb3ZpZGVyIiwic3RvcmUiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwicGF0aCIsInBhdGhuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./util/store.js":
/*!***********************!*\
  !*** ./util/store.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _util_toggleSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/toggleSlice */ \"./util/toggleSlice.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__, _util_toggleSlice__WEBPACK_IMPORTED_MODULE_1__]);\n([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__, _util_toggleSlice__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        toggle: _util_toggleSlice__WEBPACK_IMPORTED_MODULE_1__.toggleReducer\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlsL3N0b3JlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFrRDtBQUNDO0FBRW5ELE1BQU1FLFFBQVFGLGdFQUFjQSxDQUFDO0lBQ3pCRyxTQUFTO1FBQ0xDLFFBQVFILDREQUFhQTtJQUN6QjtBQUNKO0FBRUEsaUVBQWVDLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi91dGlsL3N0b3JlLmpzP2U2YjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgeyB0b2dnbGVSZWR1Y2VyIH0gZnJvbSAnLi4vdXRpbC90b2dnbGVTbGljZSdcclxuXHJcbmNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xyXG4gICAgcmVkdWNlcjoge1xyXG4gICAgICAgIHRvZ2dsZTogdG9nZ2xlUmVkdWNlclxyXG4gICAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7Il0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwidG9nZ2xlUmVkdWNlciIsInN0b3JlIiwicmVkdWNlciIsInRvZ2dsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./util/store.js\n");

/***/ }),

/***/ "./util/toggleSlice.js":
/*!*****************************!*\
  !*** ./util/toggleSlice.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   revertFilter: () => (/* binding */ revertFilter),\n/* harmony export */   toggleFilter: () => (/* binding */ toggleFilter),\n/* harmony export */   toggleReducer: () => (/* binding */ toggleReducer)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__]);\n_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst toggleSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"toggle\",\n    initialState: {\n        toggler: false\n    },\n    reducers: {\n        toggleFilter: (state)=>{\n            state.toggler = true;\n        },\n        revertFilter: (state)=>{\n            state.toggler = false;\n        }\n    }\n});\nconst { toggleFilter, revertFilter } = toggleSlice.actions;\nconst toggleReducer = toggleSlice.reducer;\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlsL3RvZ2dsZVNsaWNlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBK0M7QUFFL0MsTUFBTUMsY0FBY0QsNkRBQVdBLENBQUM7SUFDNUJFLE1BQU07SUFDTkMsY0FBYztRQUNWQyxTQUFTO0lBQ2I7SUFDQUMsVUFBUztRQUNMQyxjQUFjLENBQUNDO1lBQ1hBLE1BQU1ILE9BQU8sR0FBRztRQUVwQjtRQUNBSSxjQUFjLENBQUNEO1lBQ1hBLE1BQU1ILE9BQU8sR0FBRztRQUVwQjtJQUNKO0FBQ0o7QUFFTyxNQUFNLEVBQUVFLFlBQVksRUFBRUUsWUFBWSxFQUFFLEdBQUdQLFlBQVlRLE9BQU8sQ0FBQztBQUMzRCxNQUFNQyxnQkFBZ0JULFlBQVlVLE9BQU8sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3V0aWwvdG9nZ2xlU2xpY2UuanM/MmViZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcblxyXG5jb25zdCB0b2dnbGVTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6IFwidG9nZ2xlXCIsXHJcbiAgICBpbml0aWFsU3RhdGU6IHtcclxuICAgICAgICB0b2dnbGVyOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHJlZHVjZXJzOntcclxuICAgICAgICB0b2dnbGVGaWx0ZXI6IChzdGF0ZSk9PntcclxuICAgICAgICAgICAgc3RhdGUudG9nZ2xlciA9IHRydWU7XHJcblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmV2ZXJ0RmlsdGVyOiAoc3RhdGUpPT57XHJcbiAgICAgICAgICAgIHN0YXRlLnRvZ2dsZXIgPSBmYWxzZVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgeyB0b2dnbGVGaWx0ZXIsIHJldmVydEZpbHRlciB9ID0gdG9nZ2xlU2xpY2UuYWN0aW9ucztcclxuZXhwb3J0IGNvbnN0IHRvZ2dsZVJlZHVjZXIgPSB0b2dnbGVTbGljZS5yZWR1Y2VyOyJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsInRvZ2dsZVNsaWNlIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsInRvZ2dsZXIiLCJyZWR1Y2VycyIsInRvZ2dsZUZpbHRlciIsInN0YXRlIiwicmV2ZXJ0RmlsdGVyIiwiYWN0aW9ucyIsInRvZ2dsZVJlZHVjZXIiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./util/toggleSlice.js\n");

/***/ }),

/***/ "./App.css":
/*!*****************!*\
  !*** ./App.css ***!
  \*****************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@reduxjs/toolkit");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-redux");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/react-icons"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();