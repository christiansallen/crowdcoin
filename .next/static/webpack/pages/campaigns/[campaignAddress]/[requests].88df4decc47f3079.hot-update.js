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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar RequestRow = function(param) {\n    var request = param.request, address = param.address, id = param.id, approversCount = param.approversCount;\n    var approvalCount = request.approvalCount, complete = request.complete, description = request.description, recipient = request.recipient, value = request.value;\n    var Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table.Row, Cell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table.Cell;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Row, {\n        __source: {\n            fileName: \"/Users/christian/Desktop/Projects/kickstart/components/RequestRow.js\",\n            lineNumber: 10,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cell, {\n                __source: {\n                    fileName: \"/Users/christian/Desktop/Projects/kickstart/components/RequestRow.js\",\n                    lineNumber: 11,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: id\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cell, {\n                __source: {\n                    fileName: \"/Users/christian/Desktop/Projects/kickstart/components/RequestRow.js\",\n                    lineNumber: 12,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: description\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cell, {\n                __source: {\n                    fileName: \"/Users/christian/Desktop/Projects/kickstart/components/RequestRow.js\",\n                    lineNumber: 13,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: _ethereum_web3__WEBPACK_IMPORTED_MODULE_2__[\"default\"].utils.fromWei(value, \"ether\")\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cell, {\n                __source: {\n                    fileName: \"/Users/christian/Desktop/Projects/kickstart/components/RequestRow.js\",\n                    lineNumber: 14,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: recipient\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Cell, {\n                __source: {\n                    fileName: \"/Users/christian/Desktop/Projects/kickstart/components/RequestRow.js\",\n                    lineNumber: 15,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    approvalCount,\n                    \" / \",\n                    approversCount\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                primary: true,\n                __source: {\n                    fileName: \"/Users/christian/Desktop/Projects/kickstart/components/RequestRow.js\",\n                    lineNumber: 18,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \" Approve \"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Cell, {\n                __source: {\n                    fileName: \"/Users/christian/Desktop/Projects/kickstart/components/RequestRow.js\",\n                    lineNumber: 19,\n                    columnNumber: 7\n                },\n                __self: _this\n            })\n        ]\n    }));\n};\n_c = RequestRow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RequestRow);\nvar _c;\n$RefreshReg$(_c, \"RequestRow\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1JlcXVlc3RSb3cuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXlCO0FBQ3dCO0FBQ2Q7O0FBRW5DLEdBQUssQ0FBQ0ksVUFBVSxHQUFHLFFBQVEsUUFBc0MsQ0FBQztRQUE1Q0MsT0FBTyxTQUFQQSxPQUFPLEVBQUVDLE9BQU8sU0FBUEEsT0FBTyxFQUFFQyxFQUFFLFNBQUZBLEVBQUUsRUFBRUMsY0FBYyxTQUFkQSxjQUFjO0lBQ3hELEdBQUssQ0FBR0MsYUFBYSxHQUE4Q0osT0FBTyxDQUFsRUksYUFBYSxFQUFFQyxRQUFRLEdBQW9DTCxPQUFPLENBQW5ESyxRQUFRLEVBQUVDLFdBQVcsR0FBdUJOLE9BQU8sQ0FBekNNLFdBQVcsRUFBRUMsU0FBUyxHQUFZUCxPQUFPLENBQTVCTyxTQUFTLEVBQUVDLEtBQUssR0FBS1IsT0FBTyxDQUFqQlEsS0FBSztJQUM5RCxHQUFLLENBQUdDLEdBQUcsR0FBV2Isd0RBQVgsRUFBRWMsSUFBSSxHQUFLZCx5REFBTDtJQUVqQixNQUFNLHVFQUNIYSxHQUFHOzs7Ozs7OztpRkFDREMsSUFBSTs7Ozs7OzswQkFBRVIsRUFBRTs7aUZBQ1JRLElBQUk7Ozs7Ozs7MEJBQUVKLFdBQVc7O2lGQUNqQkksSUFBSTs7Ozs7OzswQkFBRVosb0VBQWtCLENBQUNVLEtBQUssRUFBRSxDQUFPOztpRkFDdkNFLElBQUk7Ozs7Ozs7MEJBQUVILFNBQVM7O2tGQUNmRyxJQUFJOzs7Ozs7OztvQkFDRk4sYUFBYTtvQkFBQyxDQUFHO29CQUFDRCxjQUFjOzs7aUZBRWxDTixxREFBTTtnQkFBQ2dCLE9BQU87Ozs7Ozs7MEJBQUMsQ0FBUzs7aUZBQ3hCSCxJQUFJOzs7Ozs7Ozs7O0FBR1gsQ0FBQztLQWpCS1gsVUFBVTtBQW1CaEIsK0RBQWVBLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1JlcXVlc3RSb3cuanM/Y2EzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUYWJsZSwgQnV0dG9uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgd2ViMyBmcm9tIFwiLi4vZXRoZXJldW0vd2ViM1wiO1xuXG5jb25zdCBSZXF1ZXN0Um93ID0gKHsgcmVxdWVzdCwgYWRkcmVzcywgaWQsIGFwcHJvdmVyc0NvdW50IH0pID0+IHtcbiAgY29uc3QgeyBhcHByb3ZhbENvdW50LCBjb21wbGV0ZSwgZGVzY3JpcHRpb24sIHJlY2lwaWVudCwgdmFsdWUgfSA9IHJlcXVlc3Q7XG4gIGNvbnN0IHsgUm93LCBDZWxsIH0gPSBUYWJsZTtcblxuICByZXR1cm4gKFxuICAgIDxSb3c+XG4gICAgICA8Q2VsbD57aWR9PC9DZWxsPlxuICAgICAgPENlbGw+e2Rlc2NyaXB0aW9ufTwvQ2VsbD5cbiAgICAgIDxDZWxsPnt3ZWIzLnV0aWxzLmZyb21XZWkodmFsdWUsIFwiZXRoZXJcIil9PC9DZWxsPlxuICAgICAgPENlbGw+e3JlY2lwaWVudH08L0NlbGw+XG4gICAgICA8Q2VsbD5cbiAgICAgICAge2FwcHJvdmFsQ291bnR9IC8ge2FwcHJvdmVyc0NvdW50fVxuICAgICAgPC9DZWxsPlxuICAgICAgPEJ1dHRvbiBwcmltYXJ5PiBBcHByb3ZlIDwvQnV0dG9uPlxuICAgICAgPENlbGw+PC9DZWxsPlxuICAgIDwvUm93PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdFJvdztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlRhYmxlIiwiQnV0dG9uIiwid2ViMyIsIlJlcXVlc3RSb3ciLCJyZXF1ZXN0IiwiYWRkcmVzcyIsImlkIiwiYXBwcm92ZXJzQ291bnQiLCJhcHByb3ZhbENvdW50IiwiY29tcGxldGUiLCJkZXNjcmlwdGlvbiIsInJlY2lwaWVudCIsInZhbHVlIiwiUm93IiwiQ2VsbCIsInV0aWxzIiwiZnJvbVdlaSIsInByaW1hcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/RequestRow.js\n");

/***/ })

});