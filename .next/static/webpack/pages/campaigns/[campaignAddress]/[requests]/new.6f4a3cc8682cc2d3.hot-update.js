"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/campaigns/[campaignAddress]/[requests]/new",{

/***/ "./pages/campaigns/[campaignAddress]/[requests]/new.js":
/*!*************************************************************!*\
  !*** ./pages/campaigns/[campaignAddress]/[requests]/new.js ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../ethereum/campaign */ \"./ethereum/campaign.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar RequestNew = function(param) {\n    var query = param.query;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), description = ref[0], setDescription = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), value = ref1[0], setValue = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), recipient = ref2[0], setRecipient = ref2[1];\n    var campaignAddress = query.campaignAddress;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form, {\n        __source: {\n            fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/[requests]/new.js\",\n            lineNumber: 15,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form.Field, {\n                __source: {\n                    fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/[requests]/new.js\",\n                    lineNumber: 16,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"label\", {\n                        __source: {\n                            fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/[requests]/new.js\",\n                            lineNumber: 17,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: \"Description\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                        value: description,\n                        onChange: function(e) {\n                            return setDescription(e.target.value);\n                        },\n                        __source: {\n                            fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/[requests]/new.js\",\n                            lineNumber: 18,\n                            columnNumber: 9\n                        },\n                        __self: _this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form.Field, {\n                __source: {\n                    fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/[requests]/new.js\",\n                    lineNumber: 23,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"label\", {\n                        __source: {\n                            fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/[requests]/new.js\",\n                            lineNumber: 24,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: \"Value in Ether\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                        value: value,\n                        onChange: function(e) {\n                            return setValue(e.target.value);\n                        },\n                        __source: {\n                            fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/[requests]/new.js\",\n                            lineNumber: 25,\n                            columnNumber: 9\n                        },\n                        __self: _this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form.Field, {\n                __source: {\n                    fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/[requests]/new.js\",\n                    lineNumber: 27,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"label\", {\n                        __source: {\n                            fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/[requests]/new.js\",\n                            lineNumber: 28,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: \"Recipient\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                        value: recipient,\n                        onChange: function(e) {\n                            return setRecipient(e.target.value);\n                        },\n                        __source: {\n                            fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/[requests]/new.js\",\n                            lineNumber: 29,\n                            columnNumber: 9\n                        },\n                        __self: _this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                primary: true,\n                __source: {\n                    fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/[requests]/new.js\",\n                    lineNumber: 35,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"Create!\"\n            })\n        ]\n    }));\n};\n_s(RequestNew, \"vbqcGr/6BaaK1ETmInB26GkyFIw=\");\n_c = RequestNew;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RequestNew);\nvar _c;\n$RefreshReg$(_c, \"RequestNew\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvW2NhbXBhaWduQWRkcmVzc10vW3JlcXVlc3RzXS9uZXcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDeUI7QUFDWjtBQUNSO0FBQ0w7QUFDWDs7O0FBRTVCLEdBQUssQ0FBQ1UsVUFBVSxHQUFHLFFBQVEsUUFBTyxDQUFDO1FBQWJDLEtBQUssU0FBTEEsS0FBSzs7SUFDekIsR0FBSyxDQUFpQ1YsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUUsSUFBMUNXLFdBQVcsR0FBb0JYLEdBQVksS0FBOUJZLGNBQWMsR0FBSVosR0FBWTtJQUNsRCxHQUFLLENBQXFCQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBRSxJQUE5QmEsS0FBSyxHQUFjYixJQUFZLEtBQXhCYyxRQUFRLEdBQUlkLElBQVk7SUFDdEMsR0FBSyxDQUE2QkEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUUsSUFBdENlLFNBQVMsR0FBa0JmLElBQVksS0FBNUJnQixZQUFZLEdBQUloQixJQUFZO0lBQzlDLEdBQUssQ0FBR2lCLGVBQWUsR0FBS1AsS0FBSyxDQUF6Qk8sZUFBZTtJQUV2QixNQUFNLHVFQUNIaEIsbURBQUk7Ozs7Ozs7O2tGQUNGQSx5REFBVTs7Ozs7Ozs7eUZBQ1JrQixDQUFLOzs7Ozs7O2tDQUFDLENBQVc7O3lGQUNqQmhCLG9EQUFLO3dCQUNKVSxLQUFLLEVBQUVGLFdBQVc7d0JBQ2xCUyxRQUFRLEVBQUUsUUFBUSxDQUFQQyxDQUFDOzRCQUFLVCxNQUFNLENBQU5BLGNBQWMsQ0FBQ1MsQ0FBQyxDQUFDQyxNQUFNLENBQUNULEtBQUs7Ozs7Ozs7Ozs7O2tGQUdqRFoseURBQVU7Ozs7Ozs7O3lGQUNSa0IsQ0FBSzs7Ozs7OztrQ0FBQyxDQUFjOzt5RkFDcEJoQixvREFBSzt3QkFBQ1UsS0FBSyxFQUFFQSxLQUFLO3dCQUFFTyxRQUFRLEVBQUUsUUFBUSxDQUFQQyxDQUFDOzRCQUFLUCxNQUFNLENBQU5BLFFBQVEsQ0FBQ08sQ0FBQyxDQUFDQyxNQUFNLENBQUNULEtBQUs7Ozs7Ozs7Ozs7O2tGQUU5RFoseURBQVU7Ozs7Ozs7O3lGQUNSa0IsQ0FBSzs7Ozs7OztrQ0FBQyxDQUFTOzt5RkFDZmhCLG9EQUFLO3dCQUNKVSxLQUFLLEVBQUVFLFNBQVM7d0JBQ2hCSyxRQUFRLEVBQUUsUUFBUSxDQUFQQyxDQUFDOzRCQUFLTCxNQUFNLENBQU5BLFlBQVksQ0FBQ0ssQ0FBQyxDQUFDQyxNQUFNLENBQUNULEtBQUs7Ozs7Ozs7Ozs7O2lGQUkvQ1QscURBQU07Z0JBQUNtQixPQUFPOzs7Ozs7OzBCQUFDLENBQU87Ozs7QUFHN0IsQ0FBQztHQTlCS2QsVUFBVTtLQUFWQSxVQUFVOztBQStCaEIsK0RBQWVBLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jYW1wYWlnbnMvW2NhbXBhaWduQWRkcmVzc10vW3JlcXVlc3RzXS9uZXcuanM/NzA1YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZvcm0sIE1lc3NhZ2UsIElucHV0LCBCdXR0b24gfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBDYW1wYWlnbiBmcm9tIFwiLi4vLi4vLi4vLi4vZXRoZXJldW0vY2FtcGFpZ25cIjtcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi8uLi8uLi8uLi9ldGhlcmV1bS93ZWIzXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgUmVxdWVzdE5ldyA9ICh7IHF1ZXJ5IH0pID0+IHtcbiAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3JlY2lwaWVudCwgc2V0UmVjaXBpZW50XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCB7IGNhbXBhaWduQWRkcmVzcyB9ID0gcXVlcnk7XG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybT5cbiAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICA8bGFiZWw+RGVzY3JpcHRpb248L2xhYmVsPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXREZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgPGxhYmVsPlZhbHVlIGluIEV0aGVyPC9sYWJlbD5cbiAgICAgICAgPElucHV0IHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgPGxhYmVsPlJlY2lwaWVudDwvbGFiZWw+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIHZhbHVlPXtyZWNpcGllbnR9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSZWNpcGllbnQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgPC9Gb3JtLkZpZWxkPlxuXG4gICAgICA8QnV0dG9uIHByaW1hcnk+Q3JlYXRlITwvQnV0dG9uPlxuICAgIDwvRm9ybT5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0TmV3O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbiAgcmV0dXJuIHsgcHJvcHM6IHsgcXVlcnk6IGNvbnRleHQucXVlcnkgfSB9O1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJGb3JtIiwiTWVzc2FnZSIsIklucHV0IiwiQnV0dG9uIiwiQ2FtcGFpZ24iLCJ3ZWIzIiwidXNlUm91dGVyIiwiTGluayIsIlJlcXVlc3ROZXciLCJxdWVyeSIsImRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJ2YWx1ZSIsInNldFZhbHVlIiwicmVjaXBpZW50Iiwic2V0UmVjaXBpZW50IiwiY2FtcGFpZ25BZGRyZXNzIiwiRmllbGQiLCJsYWJlbCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInByaW1hcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/campaigns/[campaignAddress]/[requests]/new.js\n");

/***/ })

});