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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar RequestRow = function(param) {\n    var request = param.request, address = param.address, id = param.id, approversCount = param.approversCount;\n    var approvalCount = request.approvalCount, complete = request.complete, description = request.description, recipient = request.recipient, value = request.value;\n    var Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table.Row, Cell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table.Cell;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Row, {\n        __source: {\n            fileName: \"/Users/christian/Desktop/Projects/kickstart/components/RequestRow.js\",\n            lineNumber: 10,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cell, {\n                __source: {\n                    fileName: \"/Users/christian/Desktop/Projects/kickstart/components/RequestRow.js\",\n                    lineNumber: 11,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: id\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cell, {\n                __source: {\n                    fileName: \"/Users/christian/Desktop/Projects/kickstart/components/RequestRow.js\",\n                    lineNumber: 12,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: description\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cell, {\n                __source: {\n                    fileName: \"/Users/christian/Desktop/Projects/kickstart/components/RequestRow.js\",\n                    lineNumber: 13,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: _ethereum_web3__WEBPACK_IMPORTED_MODULE_2__[\"default\"].utils.fromWei(value, \"ether\")\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cell, {\n                __source: {\n                    fileName: \"/Users/christian/Desktop/Projects/kickstart/components/RequestRow.js\",\n                    lineNumber: 14,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: recipient\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Cell, {\n                __source: {\n                    fileName: \"/Users/christian/Desktop/Projects/kickstart/components/RequestRow.js\",\n                    lineNumber: 15,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    approvalCount,\n                    \" / \",\n                    approversCount\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cell, {\n                __source: {\n                    fileName: \"/Users/christian/Desktop/Projects/kickstart/components/RequestRow.js\",\n                    lineNumber: 18,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cell, {\n                __source: {\n                    fileName: \"/Users/christian/Desktop/Projects/kickstart/components/RequestRow.js\",\n                    lineNumber: 19,\n                    columnNumber: 7\n                },\n                __self: _this\n            })\n        ]\n    }));\n};\n_c = RequestRow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RequestRow);\nvar _c;\n$RefreshReg$(_c, \"RequestRow\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1JlcXVlc3RSb3cuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXlCO0FBQ2dCO0FBQ047O0FBRW5DLEdBQUssQ0FBQ0csVUFBVSxHQUFHLFFBQVEsUUFBc0MsQ0FBQztRQUE1Q0MsT0FBTyxTQUFQQSxPQUFPLEVBQUVDLE9BQU8sU0FBUEEsT0FBTyxFQUFFQyxFQUFFLFNBQUZBLEVBQUUsRUFBRUMsY0FBYyxTQUFkQSxjQUFjO0lBQ3hELEdBQUssQ0FBR0MsYUFBYSxHQUE4Q0osT0FBTyxDQUFsRUksYUFBYSxFQUFFQyxRQUFRLEdBQW9DTCxPQUFPLENBQW5ESyxRQUFRLEVBQUVDLFdBQVcsR0FBdUJOLE9BQU8sQ0FBekNNLFdBQVcsRUFBRUMsU0FBUyxHQUFZUCxPQUFPLENBQTVCTyxTQUFTLEVBQUVDLEtBQUssR0FBS1IsT0FBTyxDQUFqQlEsS0FBSztJQUM5RCxHQUFLLENBQUdDLEdBQUcsR0FBV1osd0RBQVgsRUFBRWEsSUFBSSxHQUFLYix5REFBTDtJQUVqQixNQUFNLHVFQUNIWSxHQUFHOzs7Ozs7OztpRkFDREMsSUFBSTs7Ozs7OzswQkFBRVIsRUFBRTs7aUZBQ1JRLElBQUk7Ozs7Ozs7MEJBQUVKLFdBQVc7O2lGQUNqQkksSUFBSTs7Ozs7OzswQkFBRVosb0VBQWtCLENBQUNVLEtBQUssRUFBRSxDQUFPOztpRkFDdkNFLElBQUk7Ozs7Ozs7MEJBQUVILFNBQVM7O2tGQUNmRyxJQUFJOzs7Ozs7OztvQkFDRk4sYUFBYTtvQkFBQyxDQUFHO29CQUFDRCxjQUFjOzs7aUZBRWxDTyxJQUFJOzs7Ozs7OztpRkFDSkEsSUFBSTs7Ozs7Ozs7OztBQUdYLENBQUM7S0FqQktYLFVBQVU7QUFtQmhCLCtEQUFlQSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXF1ZXN0Um93LmpzP2NhMzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVGFibGUgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi9ldGhlcmV1bS93ZWIzXCI7XG5cbmNvbnN0IFJlcXVlc3RSb3cgPSAoeyByZXF1ZXN0LCBhZGRyZXNzLCBpZCwgYXBwcm92ZXJzQ291bnQgfSkgPT4ge1xuICBjb25zdCB7IGFwcHJvdmFsQ291bnQsIGNvbXBsZXRlLCBkZXNjcmlwdGlvbiwgcmVjaXBpZW50LCB2YWx1ZSB9ID0gcmVxdWVzdDtcbiAgY29uc3QgeyBSb3csIENlbGwgfSA9IFRhYmxlO1xuXG4gIHJldHVybiAoXG4gICAgPFJvdz5cbiAgICAgIDxDZWxsPntpZH08L0NlbGw+XG4gICAgICA8Q2VsbD57ZGVzY3JpcHRpb259PC9DZWxsPlxuICAgICAgPENlbGw+e3dlYjMudXRpbHMuZnJvbVdlaSh2YWx1ZSwgXCJldGhlclwiKX08L0NlbGw+XG4gICAgICA8Q2VsbD57cmVjaXBpZW50fTwvQ2VsbD5cbiAgICAgIDxDZWxsPlxuICAgICAgICB7YXBwcm92YWxDb3VudH0gLyB7YXBwcm92ZXJzQ291bnR9XG4gICAgICA8L0NlbGw+XG4gICAgICA8Q2VsbD48L0NlbGw+XG4gICAgICA8Q2VsbD48L0NlbGw+XG4gICAgPC9Sb3c+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0Um93O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVGFibGUiLCJ3ZWIzIiwiUmVxdWVzdFJvdyIsInJlcXVlc3QiLCJhZGRyZXNzIiwiaWQiLCJhcHByb3ZlcnNDb3VudCIsImFwcHJvdmFsQ291bnQiLCJjb21wbGV0ZSIsImRlc2NyaXB0aW9uIiwicmVjaXBpZW50IiwidmFsdWUiLCJSb3ciLCJDZWxsIiwidXRpbHMiLCJmcm9tV2VpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/RequestRow.js\n");

/***/ })

});