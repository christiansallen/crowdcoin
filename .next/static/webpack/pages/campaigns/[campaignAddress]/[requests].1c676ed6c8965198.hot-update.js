"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/campaigns/[campaignAddress]/[requests]",{

/***/ "./components/RequestRow.js":
/*!**********************************!*\
  !*** ./components/RequestRow.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar RequestRow = function(param) {\n    var request = param.request, address = param.address, id = param.id;\n    var approvalCount = request.approvalCount, complete = request.complete, description = request.description, recipient = request.recipient, value = request.value;\n    var Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table.Row, Cell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table.Cell;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Row, {\n        __source: {\n            fileName: \"/Users/christian/Desktop/Projects/kickstart/components/RequestRow.js\",\n            lineNumber: 10,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cell, {\n                __source: {\n                    fileName: \"/Users/christian/Desktop/Projects/kickstart/components/RequestRow.js\",\n                    lineNumber: 11,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: id\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cell, {\n                __source: {\n                    fileName: \"/Users/christian/Desktop/Projects/kickstart/components/RequestRow.js\",\n                    lineNumber: 12,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: description\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Cell, {\n                __source: {\n                    fileName: \"/Users/christian/Desktop/Projects/kickstart/components/RequestRow.js\",\n                    lineNumber: 13,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    _ethereum_web3__WEBPACK_IMPORTED_MODULE_2__[\"default\"].utils.fromWei(value, \"ether\"),\n                    \" ether\"\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cell, {\n                __source: {\n                    fileName: \"/Users/christian/Desktop/Projects/kickstart/components/RequestRow.js\",\n                    lineNumber: 14,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cell, {\n                __source: {\n                    fileName: \"/Users/christian/Desktop/Projects/kickstart/components/RequestRow.js\",\n                    lineNumber: 15,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cell, {\n                __source: {\n                    fileName: \"/Users/christian/Desktop/Projects/kickstart/components/RequestRow.js\",\n                    lineNumber: 16,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cell, {\n                __source: {\n                    fileName: \"/Users/christian/Desktop/Projects/kickstart/components/RequestRow.js\",\n                    lineNumber: 17,\n                    columnNumber: 7\n                },\n                __self: _this\n            })\n        ]\n    }));\n};\n_c = RequestRow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RequestRow);\nvar _c;\n$RefreshReg$(_c, \"RequestRow\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1JlcXVlc3RSb3cuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXlCO0FBQ2dCO0FBQ047O0FBRW5DLEdBQUssQ0FBQ0csVUFBVSxHQUFHLFFBQVEsUUFBc0IsQ0FBQztRQUE1QkMsT0FBTyxTQUFQQSxPQUFPLEVBQUVDLE9BQU8sU0FBUEEsT0FBTyxFQUFFQyxFQUFFLFNBQUZBLEVBQUU7SUFDeEMsR0FBSyxDQUFHQyxhQUFhLEdBQThDSCxPQUFPLENBQWxFRyxhQUFhLEVBQUVDLFFBQVEsR0FBb0NKLE9BQU8sQ0FBbkRJLFFBQVEsRUFBRUMsV0FBVyxHQUF1QkwsT0FBTyxDQUF6Q0ssV0FBVyxFQUFFQyxTQUFTLEdBQVlOLE9BQU8sQ0FBNUJNLFNBQVMsRUFBRUMsS0FBSyxHQUFLUCxPQUFPLENBQWpCTyxLQUFLO0lBQzlELEdBQUssQ0FBR0MsR0FBRyxHQUFXWCx3REFBWCxFQUFFWSxJQUFJLEdBQUtaLHlEQUFMO0lBRWpCLE1BQU0sdUVBQ0hXLEdBQUc7Ozs7Ozs7O2lGQUNEQyxJQUFJOzs7Ozs7OzBCQUFFUCxFQUFFOztpRkFDUk8sSUFBSTs7Ozs7OzswQkFBRUosV0FBVzs7a0ZBQ2pCSSxJQUFJOzs7Ozs7OztvQkFBRVgsb0VBQWtCLENBQUNTLEtBQUssRUFBRSxDQUFPO29CQUFFLENBQU07OztpRkFDL0NFLElBQUk7Ozs7Ozs7O2lGQUNKQSxJQUFJOzs7Ozs7OztpRkFDSkEsSUFBSTs7Ozs7Ozs7aUZBQ0pBLElBQUk7Ozs7Ozs7Ozs7QUFHWCxDQUFDO0tBZktWLFVBQVU7QUFpQmhCLCtEQUFlQSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXF1ZXN0Um93LmpzP2NhMzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVGFibGUgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi9ldGhlcmV1bS93ZWIzXCI7XG5cbmNvbnN0IFJlcXVlc3RSb3cgPSAoeyByZXF1ZXN0LCBhZGRyZXNzLCBpZCB9KSA9PiB7XG4gIGNvbnN0IHsgYXBwcm92YWxDb3VudCwgY29tcGxldGUsIGRlc2NyaXB0aW9uLCByZWNpcGllbnQsIHZhbHVlIH0gPSByZXF1ZXN0O1xuICBjb25zdCB7IFJvdywgQ2VsbCB9ID0gVGFibGU7XG5cbiAgcmV0dXJuIChcbiAgICA8Um93PlxuICAgICAgPENlbGw+e2lkfTwvQ2VsbD5cbiAgICAgIDxDZWxsPntkZXNjcmlwdGlvbn08L0NlbGw+XG4gICAgICA8Q2VsbD57d2ViMy51dGlscy5mcm9tV2VpKHZhbHVlLCBcImV0aGVyXCIpfSBldGhlcjwvQ2VsbD5cbiAgICAgIDxDZWxsPjwvQ2VsbD5cbiAgICAgIDxDZWxsPjwvQ2VsbD5cbiAgICAgIDxDZWxsPjwvQ2VsbD5cbiAgICAgIDxDZWxsPjwvQ2VsbD5cbiAgICA8L1Jvdz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RSb3c7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJUYWJsZSIsIndlYjMiLCJSZXF1ZXN0Um93IiwicmVxdWVzdCIsImFkZHJlc3MiLCJpZCIsImFwcHJvdmFsQ291bnQiLCJjb21wbGV0ZSIsImRlc2NyaXB0aW9uIiwicmVjaXBpZW50IiwidmFsdWUiLCJSb3ciLCJDZWxsIiwidXRpbHMiLCJmcm9tV2VpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/RequestRow.js\n");

/***/ })

});