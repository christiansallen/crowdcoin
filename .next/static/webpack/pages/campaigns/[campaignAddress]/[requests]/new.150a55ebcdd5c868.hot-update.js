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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _Users_christian_Desktop_Projects_kickstart_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/regenerator-runtime/runtime.js */ \"./node_modules/next/node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_christian_Desktop_Projects_kickstart_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_christian_Desktop_Projects_kickstart_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../ethereum/campaign */ \"./ethereum/campaign.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar RequestNew = function(param) {\n    var query = param.query;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), description = ref[0], setDescription = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), value = ref1[0], setValue = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), recipient = ref2[0], setRecipient = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), errorMessage = ref3[0], setErrorMessage = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), loading = ref4[0], setLoading = ref4[1];\n    var campaignAddress = query.campaignAddress;\n    var onSubmit = _asyncToGenerator(_Users_christian_Desktop_Projects_kickstart_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n        var campaign, accounts;\n        return _Users_christian_Desktop_Projects_kickstart_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    e.preventDefault();\n                    campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(campaignAddress);\n                    _ctx.prev = 2;\n                    _ctx.next = 5;\n                    return _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__[\"default\"].eth.getAccounts();\n                case 5:\n                    accounts = _ctx.sent;\n                    _ctx.next = 8;\n                    return campaign.methods.createRequest(description, _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__[\"default\"].utils.toWei(value, \"ether\"), recipient).send({\n                        from: accounts[0]\n                    });\n                case 8:\n                    _ctx.next = 12;\n                    break;\n                case 10:\n                    _ctx.prev = 10;\n                    _ctx.t0 = _ctx[\"catch\"](2);\n                case 12:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                2,\n                10\n            ]\n        ]);\n    }));\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/[requests]/new.js\",\n            lineNumber: 30,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h3\", {\n                __source: {\n                    fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/[requests]/new.js\",\n                    lineNumber: 31,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"Create a Request\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Form, {\n                onSubmit: onSubmit,\n                __source: {\n                    fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/[requests]/new.js\",\n                    lineNumber: 32,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Form.Field, {\n                        __source: {\n                            fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/[requests]/new.js\",\n                            lineNumber: 33,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"label\", {\n                                __source: {\n                                    fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/[requests]/new.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 11\n                                },\n                                __self: _this,\n                                children: \"Description\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                                value: description,\n                                onChange: function(e) {\n                                    return setDescription(e.target.value);\n                                },\n                                __source: {\n                                    fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/[requests]/new.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 11\n                                },\n                                __self: _this\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Form.Field, {\n                        __source: {\n                            fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/[requests]/new.js\",\n                            lineNumber: 40,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"label\", {\n                                __source: {\n                                    fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/[requests]/new.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 11\n                                },\n                                __self: _this,\n                                children: \"Value in Ether\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                                value: value,\n                                onChange: function(e) {\n                                    return setValue(e.target.value);\n                                },\n                                __source: {\n                                    fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/[requests]/new.js\",\n                                    lineNumber: 42,\n                                    columnNumber: 11\n                                },\n                                __self: _this\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Form.Field, {\n                        __source: {\n                            fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/[requests]/new.js\",\n                            lineNumber: 44,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"label\", {\n                                __source: {\n                                    fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/[requests]/new.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 11\n                                },\n                                __self: _this,\n                                children: \"Recipient\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                                value: recipient,\n                                onChange: function(e) {\n                                    return setRecipient(e.target.value);\n                                },\n                                __source: {\n                                    fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/[requests]/new.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 11\n                                },\n                                __self: _this\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                        primary: true,\n                        __source: {\n                            fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/[requests]/new.js\",\n                            lineNumber: 52,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: \"Create!\"\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_s(RequestNew, \"m54akTrsXMBfn6yNj3EmRHxI4wU=\");\n_c = RequestNew;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RequestNew);\nvar _c;\n$RefreshReg$(_c, \"RequestNew\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvW2NhbXBhaWduQWRkcmVzc10vW3JlcXVlc3RzXS9uZXcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDeUI7QUFDWjtBQUNSO0FBQ0w7QUFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUIsR0FBSyxDQUFDVSxVQUFVLEdBQUcsUUFBUSxRQUFPLENBQUM7UUFBYkMsS0FBSyxTQUFMQSxLQUFLOztJQUN6QixHQUFLLENBQWlDVixHQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBRSxJQUExQ1csV0FBVyxHQUFvQlgsR0FBWSxLQUE5QlksY0FBYyxHQUFJWixHQUFZO0lBQ2xELEdBQUssQ0FBcUJBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFFLElBQTlCYSxLQUFLLEdBQWNiLElBQVksS0FBeEJjLFFBQVEsR0FBSWQsSUFBWTtJQUN0QyxHQUFLLENBQTZCQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBRSxJQUF0Q2UsU0FBUyxHQUFrQmYsSUFBWSxLQUE1QmdCLFlBQVksR0FBSWhCLElBQVk7SUFDOUMsR0FBSyxDQUFtQ0EsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUUsSUFBNUNpQixZQUFZLEdBQXFCakIsSUFBWSxLQUEvQmtCLGVBQWUsR0FBSWxCLElBQVk7SUFDcEQsR0FBSyxDQUF5QkEsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssR0FBckNtQixPQUFPLEdBQWdCbkIsSUFBZSxLQUE3Qm9CLFVBQVUsR0FBSXBCLElBQWU7SUFDN0MsR0FBSyxDQUFHcUIsZUFBZSxHQUFLWCxLQUFLLENBQXpCVyxlQUFlO0lBRXZCLEdBQUssQ0FBQ0MsUUFBUSwyS0FBRyxRQUFRLFNBQURDLENBQUMsRUFBSyxDQUFDO1lBRXZCQyxRQUFRLEVBRU5DLFFBQVE7Ozs7b0JBSGhCRixDQUFDLENBQUNHLGNBQWM7b0JBQ1ZGLFFBQVEsR0FBR25CLDhEQUFRLENBQUNnQixlQUFlOzs7MkJBRWhCZixzRUFBb0I7O29CQUFyQ21CLFFBQVE7OzJCQUNSRCxRQUFRLENBQUNLLE9BQU8sQ0FDbkJDLGFBQWEsQ0FBQ25CLFdBQVcsRUFBRUwsa0VBQWdCLENBQUNPLEtBQUssRUFBRSxDQUFPLFNBQUdFLFNBQVMsRUFDdEVrQixJQUFJLENBQUMsQ0FBQzt3QkFDTEMsSUFBSSxFQUFFVCxRQUFRLENBQUMsQ0FBQztvQkFDbEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFUCxDQUFDO0lBRUQsTUFBTSx1RUFDSFUsQ0FBRzs7Ozs7Ozs7aUZBQ0RDLENBQUU7Ozs7Ozs7MEJBQUMsQ0FBZ0I7O2tGQUNuQm5DLG1EQUFJO2dCQUFDcUIsUUFBUSxFQUFFQSxRQUFROzs7Ozs7OzswRkFDckJyQix5REFBVTs7Ozs7Ozs7aUdBQ1JxQyxDQUFLOzs7Ozs7OzBDQUFDLENBQVc7O2lHQUNqQm5DLG9EQUFLO2dDQUNKVSxLQUFLLEVBQUVGLFdBQVc7Z0NBQ2xCNEIsUUFBUSxFQUFFLFFBQVEsQ0FBUGhCLENBQUM7b0NBQUtYLE1BQU0sQ0FBTkEsY0FBYyxDQUFDVyxDQUFDLENBQUNpQixNQUFNLENBQUMzQixLQUFLOzs7Ozs7Ozs7OzswRkFHakRaLHlEQUFVOzs7Ozs7OztpR0FDUnFDLENBQUs7Ozs7Ozs7MENBQUMsQ0FBYzs7aUdBQ3BCbkMsb0RBQUs7Z0NBQUNVLEtBQUssRUFBRUEsS0FBSztnQ0FBRTBCLFFBQVEsRUFBRSxRQUFRLENBQVBoQixDQUFDO29DQUFLVCxNQUFNLENBQU5BLFFBQVEsQ0FBQ1MsQ0FBQyxDQUFDaUIsTUFBTSxDQUFDM0IsS0FBSzs7Ozs7Ozs7Ozs7MEZBRTlEWix5REFBVTs7Ozs7Ozs7aUdBQ1JxQyxDQUFLOzs7Ozs7OzBDQUFDLENBQVM7O2lHQUNmbkMsb0RBQUs7Z0NBQ0pVLEtBQUssRUFBRUUsU0FBUztnQ0FDaEJ3QixRQUFRLEVBQUUsUUFBUSxDQUFQaEIsQ0FBQztvQ0FBS1AsTUFBTSxDQUFOQSxZQUFZLENBQUNPLENBQUMsQ0FBQ2lCLE1BQU0sQ0FBQzNCLEtBQUs7Ozs7Ozs7Ozs7O3lGQUkvQ1QscURBQU07d0JBQUNxQyxPQUFPOzs7Ozs7O2tDQUFDLENBQU87Ozs7OztBQUkvQixDQUFDO0dBaERLaEMsVUFBVTtLQUFWQSxVQUFVOztBQWlEaEIsK0RBQWVBLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jYW1wYWlnbnMvW2NhbXBhaWduQWRkcmVzc10vW3JlcXVlc3RzXS9uZXcuanM/NzA1YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZvcm0sIE1lc3NhZ2UsIElucHV0LCBCdXR0b24gfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBDYW1wYWlnbiBmcm9tIFwiLi4vLi4vLi4vLi4vZXRoZXJldW0vY2FtcGFpZ25cIjtcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi8uLi8uLi8uLi9ldGhlcmV1bS93ZWIzXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgUmVxdWVzdE5ldyA9ICh7IHF1ZXJ5IH0pID0+IHtcbiAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3JlY2lwaWVudCwgc2V0UmVjaXBpZW50XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyBjYW1wYWlnbkFkZHJlc3MgfSA9IHF1ZXJ5O1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbihjYW1wYWlnbkFkZHJlc3MpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG4gICAgICBhd2FpdCBjYW1wYWlnbi5tZXRob2RzXG4gICAgICAgIC5jcmVhdGVSZXF1ZXN0KGRlc2NyaXB0aW9uLCB3ZWIzLnV0aWxzLnRvV2VpKHZhbHVlLCBcImV0aGVyXCIpLCByZWNpcGllbnQpXG4gICAgICAgIC5zZW5kKHtcbiAgICAgICAgICBmcm9tOiBhY2NvdW50c1swXSxcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7fVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMz5DcmVhdGUgYSBSZXF1ZXN0PC9oMz5cbiAgICAgIDxGb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XG4gICAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICAgIDxsYWJlbD5EZXNjcmlwdGlvbjwvbGFiZWw+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICAgIDxsYWJlbD5WYWx1ZSBpbiBFdGhlcjwvbGFiZWw+XG4gICAgICAgICAgPElucHV0IHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgPEZvcm0uRmllbGQ+XG4gICAgICAgICAgPGxhYmVsPlJlY2lwaWVudDwvbGFiZWw+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICB2YWx1ZT17cmVjaXBpZW50fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSZWNpcGllbnQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRm9ybS5GaWVsZD5cblxuICAgICAgICA8QnV0dG9uIHByaW1hcnk+Q3JlYXRlITwvQnV0dG9uPlxuICAgICAgPC9Gb3JtPlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3ROZXc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICByZXR1cm4geyBwcm9wczogeyBxdWVyeTogY29udGV4dC5xdWVyeSB9IH07XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkZvcm0iLCJNZXNzYWdlIiwiSW5wdXQiLCJCdXR0b24iLCJDYW1wYWlnbiIsIndlYjMiLCJ1c2VSb3V0ZXIiLCJMaW5rIiwiUmVxdWVzdE5ldyIsInF1ZXJ5IiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsInZhbHVlIiwic2V0VmFsdWUiLCJyZWNpcGllbnQiLCJzZXRSZWNpcGllbnQiLCJlcnJvck1lc3NhZ2UiLCJzZXRFcnJvck1lc3NhZ2UiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImNhbXBhaWduQWRkcmVzcyIsIm9uU3VibWl0IiwiZSIsImNhbXBhaWduIiwiYWNjb3VudHMiLCJwcmV2ZW50RGVmYXVsdCIsImV0aCIsImdldEFjY291bnRzIiwibWV0aG9kcyIsImNyZWF0ZVJlcXVlc3QiLCJ1dGlscyIsInRvV2VpIiwic2VuZCIsImZyb20iLCJkaXYiLCJoMyIsIkZpZWxkIiwibGFiZWwiLCJvbkNoYW5nZSIsInRhcmdldCIsInByaW1hcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/campaigns/[campaignAddress]/[requests]/new.js\n");

/***/ })

});