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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _Users_christian_Desktop_Projects_kickstart_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/regenerator-runtime/runtime.js */ \"./node_modules/next/node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_christian_Desktop_Projects_kickstart_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_christian_Desktop_Projects_kickstart_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../ethereum/campaign */ \"./ethereum/campaign.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar RequestNew = function(param) {\n    var query = param.query;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), description = ref[0], setDescription = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), value = ref1[0], setValue = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), recipient = ref2[0], setRecipient = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), errorMessage = ref3[0], setErrorMessage = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), loading = ref4[0], setLoading = ref4[1];\n    var campaignAddress = query.campaignAddress;\n    var onSubmit = _asyncToGenerator(_Users_christian_Desktop_Projects_kickstart_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n        var campaign, accounts;\n        return _Users_christian_Desktop_Projects_kickstart_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    e.preventDefault();\n                    setLoading(true);\n                    setErrorMessage(\"\");\n                    campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(campaignAddress);\n                    _ctx.prev = 4;\n                    _ctx.next = 7;\n                    return _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__[\"default\"].eth.getAccounts();\n                case 7:\n                    accounts = _ctx.sent;\n                    _ctx.next = 10;\n                    return campaign.methods.createRequest(description, _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__[\"default\"].utils.toWei(value, \"ether\"), recipient).send({\n                        from: accounts[0]\n                    });\n                case 10:\n                    router.push(\"/campaigns/\".concat(campaignAddress, \"/requests\"));\n                    _ctx.next = 16;\n                    break;\n                case 13:\n                    _ctx.prev = 13;\n                    _ctx.t0 = _ctx[\"catch\"](4);\n                    setErrorMessage(_ctx.t0.message);\n                case 16:\n                    setLoading(false);\n                case 17:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                4,\n                13\n            ]\n        ]);\n    }));\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/[requests]/new.js\",\n            lineNumber: 37,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                href: \"/campaigns/\".concat(campaignAddress, \"/requests\"),\n                __source: {\n                    fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/[requests]/new.js\",\n                    lineNumber: 38,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"a\", {\n                    __source: {\n                        fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/[requests]/new.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: \"Back\"\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h3\", {\n                __source: {\n                    fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/[requests]/new.js\",\n                    lineNumber: 41,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"Create a Request\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Form, {\n                onSubmit: onSubmit,\n                error: !!errorMessage,\n                __source: {\n                    fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/[requests]/new.js\",\n                    lineNumber: 42,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Form.Field, {\n                        __source: {\n                            fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/[requests]/new.js\",\n                            lineNumber: 43,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"label\", {\n                                __source: {\n                                    fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/[requests]/new.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 11\n                                },\n                                __self: _this,\n                                children: \"Description\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                                value: description,\n                                onChange: function(e) {\n                                    return setDescription(e.target.value);\n                                },\n                                __source: {\n                                    fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/[requests]/new.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 11\n                                },\n                                __self: _this\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Form.Field, {\n                        __source: {\n                            fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/[requests]/new.js\",\n                            lineNumber: 50,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"label\", {\n                                __source: {\n                                    fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/[requests]/new.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 11\n                                },\n                                __self: _this,\n                                children: \"Value in Ether\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                                value: value,\n                                onChange: function(e) {\n                                    return setValue(e.target.value);\n                                },\n                                __source: {\n                                    fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/[requests]/new.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 11\n                                },\n                                __self: _this\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Form.Field, {\n                        __source: {\n                            fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/[requests]/new.js\",\n                            lineNumber: 54,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"label\", {\n                                __source: {\n                                    fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/[requests]/new.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 11\n                                },\n                                __self: _this,\n                                children: \"Recipient\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                                value: recipient,\n                                onChange: function(e) {\n                                    return setRecipient(e.target.value);\n                                },\n                                __source: {\n                                    fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/[requests]/new.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 11\n                                },\n                                __self: _this\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Message, {\n                        error: true,\n                        content: errorMessage,\n                        header: \"Oops!\",\n                        __source: {\n                            fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/[requests]/new.js\",\n                            lineNumber: 61,\n                            columnNumber: 9\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                        primary: true,\n                        loading: !!loading,\n                        __source: {\n                            fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/[requests]/new.js\",\n                            lineNumber: 62,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: \"Create!\"\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_s(RequestNew, \"PTXyKb3m1t4Q9n+xSGSQFTQ+XE8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = RequestNew;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RequestNew);\nvar _c;\n$RefreshReg$(_c, \"RequestNew\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvW2NhbXBhaWduQWRkcmVzc10vW3JlcXVlc3RzXS9uZXcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDeUI7QUFDWjtBQUNSO0FBQ0w7QUFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUIsR0FBSyxDQUFDVSxVQUFVLEdBQUcsUUFBUSxRQUFPLENBQUM7UUFBYkMsS0FBSyxTQUFMQSxLQUFLOztJQUN6QixHQUFLLENBQUNDLE1BQU0sR0FBR0osc0RBQVM7SUFDeEIsR0FBSyxDQUFpQ1AsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUUsSUFBMUNZLFdBQVcsR0FBb0JaLEdBQVksS0FBOUJhLGNBQWMsR0FBSWIsR0FBWTtJQUNsRCxHQUFLLENBQXFCQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBRSxJQUE5QmMsS0FBSyxHQUFjZCxJQUFZLEtBQXhCZSxRQUFRLEdBQUlmLElBQVk7SUFDdEMsR0FBSyxDQUE2QkEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUUsSUFBdENnQixTQUFTLEdBQWtCaEIsSUFBWSxLQUE1QmlCLFlBQVksR0FBSWpCLElBQVk7SUFDOUMsR0FBSyxDQUFtQ0EsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUUsSUFBNUNrQixZQUFZLEdBQXFCbEIsSUFBWSxLQUEvQm1CLGVBQWUsR0FBSW5CLElBQVk7SUFDcEQsR0FBSyxDQUF5QkEsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssR0FBckNvQixPQUFPLEdBQWdCcEIsSUFBZSxLQUE3QnFCLFVBQVUsR0FBSXJCLElBQWU7SUFDN0MsR0FBSyxDQUFHc0IsZUFBZSxHQUFLWixLQUFLLENBQXpCWSxlQUFlO0lBRXZCLEdBQUssQ0FBQ0MsUUFBUSwyS0FBRyxRQUFRLFNBQURDLENBQUMsRUFBSyxDQUFDO1lBSXZCQyxRQUFRLEVBRU5DLFFBQVE7Ozs7b0JBTGhCRixDQUFDLENBQUNHLGNBQWM7b0JBQ2hCTixVQUFVLENBQUMsSUFBSTtvQkFDZkYsZUFBZSxDQUFDLENBQUU7b0JBQ1pNLFFBQVEsR0FBR3BCLDhEQUFRLENBQUNpQixlQUFlOzs7MkJBRWhCaEIsc0VBQW9COztvQkFBckNvQixRQUFROzsyQkFDUkQsUUFBUSxDQUFDSyxPQUFPLENBQ25CQyxhQUFhLENBQUNuQixXQUFXLEVBQUVOLGtFQUFnQixDQUFDUSxLQUFLLEVBQUUsQ0FBTyxTQUFHRSxTQUFTLEVBQ3RFa0IsSUFBSSxDQUFDLENBQUM7d0JBQ0xDLElBQUksRUFBRVQsUUFBUSxDQUFDLENBQUM7b0JBQ2xCLENBQUM7O29CQUNIZixNQUFNLENBQUN5QixJQUFJLENBQUUsQ0FBVyxhQUFrQixNQUFTLENBQXpCZCxlQUFlLEVBQUMsQ0FBUzs7Ozs7O29CQUVuREgsZUFBZSxTQUFLa0IsT0FBTzs7b0JBRTdCaEIsVUFBVSxDQUFDLEtBQUs7Ozs7Ozs7Ozs7O0lBQ2xCLENBQUM7SUFFRCxNQUFNLHVFQUNIaUIsQ0FBRzs7Ozs7Ozs7aUZBQ0Q5QixrREFBSTtnQkFBQytCLElBQUksRUFBRyxDQUFXLGFBQWtCLE1BQVMsQ0FBekJqQixlQUFlLEVBQUMsQ0FBUzs7Ozs7OzsrRkFDaERrQixDQUFDOzs7Ozs7OzhCQUFDLENBQUk7OztpRkFFUkMsQ0FBRTs7Ozs7OzswQkFBQyxDQUFnQjs7a0ZBQ25CeEMsbURBQUk7Z0JBQUNzQixRQUFRLEVBQUVBLFFBQVE7Z0JBQUVtQixLQUFLLElBQUl4QixZQUFZOzs7Ozs7OzswRkFDNUNqQix5REFBVTs7Ozs7Ozs7aUdBQ1IyQyxDQUFLOzs7Ozs7OzBDQUFDLENBQVc7O2lHQUNqQnpDLG9EQUFLO2dDQUNKVyxLQUFLLEVBQUVGLFdBQVc7Z0NBQ2xCaUMsUUFBUSxFQUFFLFFBQVEsQ0FBUHJCLENBQUM7b0NBQUtYLE1BQU0sQ0FBTkEsY0FBYyxDQUFDVyxDQUFDLENBQUNzQixNQUFNLENBQUNoQyxLQUFLOzs7Ozs7Ozs7OzswRkFHakRiLHlEQUFVOzs7Ozs7OztpR0FDUjJDLENBQUs7Ozs7Ozs7MENBQUMsQ0FBYzs7aUdBQ3BCekMsb0RBQUs7Z0NBQUNXLEtBQUssRUFBRUEsS0FBSztnQ0FBRStCLFFBQVEsRUFBRSxRQUFRLENBQVByQixDQUFDO29DQUFLVCxNQUFNLENBQU5BLFFBQVEsQ0FBQ1MsQ0FBQyxDQUFDc0IsTUFBTSxDQUFDaEMsS0FBSzs7Ozs7Ozs7Ozs7MEZBRTlEYix5REFBVTs7Ozs7Ozs7aUdBQ1IyQyxDQUFLOzs7Ozs7OzBDQUFDLENBQVM7O2lHQUNmekMsb0RBQUs7Z0NBQ0pXLEtBQUssRUFBRUUsU0FBUztnQ0FDaEI2QixRQUFRLEVBQUUsUUFBUSxDQUFQckIsQ0FBQztvQ0FBS1AsTUFBTSxDQUFOQSxZQUFZLENBQUNPLENBQUMsQ0FBQ3NCLE1BQU0sQ0FBQ2hDLEtBQUs7Ozs7Ozs7Ozs7O3lGQUcvQ1osc0RBQU87d0JBQUN3QyxLQUFLO3dCQUFDSyxPQUFPLEVBQUU3QixZQUFZO3dCQUFFOEIsTUFBTSxFQUFDLENBQU87Ozs7Ozs7O3lGQUNuRDVDLHFEQUFNO3dCQUFDNkMsT0FBTzt3QkFBQzdCLE9BQU8sSUFBSUEsT0FBTzs7Ozs7OztrQ0FBRSxDQUVwQzs7Ozs7O0FBSVIsQ0FBQztHQTVES1gsVUFBVTs7UUFDQ0Ysa0RBQVM7OztLQURwQkUsVUFBVTs7QUE2RGhCLCtEQUFlQSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL1tjYW1wYWlnbkFkZHJlc3NdL1tyZXF1ZXN0c10vbmV3LmpzPzcwNWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb3JtLCBNZXNzYWdlLCBJbnB1dCwgQnV0dG9uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSBcIi4uLy4uLy4uLy4uL2V0aGVyZXVtL2NhbXBhaWduXCI7XG5pbXBvcnQgd2ViMyBmcm9tIFwiLi4vLi4vLi4vLi4vZXRoZXJldW0vd2ViM1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IFJlcXVlc3ROZXcgPSAoeyBxdWVyeSB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcmVjaXBpZW50LCBzZXRSZWNpcGllbnRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB7IGNhbXBhaWduQWRkcmVzcyB9ID0gcXVlcnk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIHNldEVycm9yTWVzc2FnZShcIlwiKTtcbiAgICBjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKGNhbXBhaWduQWRkcmVzcyk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbiAgICAgIGF3YWl0IGNhbXBhaWduLm1ldGhvZHNcbiAgICAgICAgLmNyZWF0ZVJlcXVlc3QoZGVzY3JpcHRpb24sIHdlYjMudXRpbHMudG9XZWkodmFsdWUsIFwiZXRoZXJcIiksIHJlY2lwaWVudClcbiAgICAgICAgLnNlbmQoe1xuICAgICAgICAgIGZyb206IGFjY291bnRzWzBdLFxuICAgICAgICB9KTtcbiAgICAgIHJvdXRlci5wdXNoKGAvY2FtcGFpZ25zLyR7Y2FtcGFpZ25BZGRyZXNzfS9yZXF1ZXN0c2ApO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgc2V0RXJyb3JNZXNzYWdlKGVyci5tZXNzYWdlKTtcbiAgICB9XG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPExpbmsgaHJlZj17YC9jYW1wYWlnbnMvJHtjYW1wYWlnbkFkZHJlc3N9L3JlcXVlc3RzYH0+XG4gICAgICAgIDxhPkJhY2s8L2E+XG4gICAgICA8L0xpbms+XG4gICAgICA8aDM+Q3JlYXRlIGEgUmVxdWVzdDwvaDM+XG4gICAgICA8Rm9ybSBvblN1Ym1pdD17b25TdWJtaXR9IGVycm9yPXshIWVycm9yTWVzc2FnZX0+XG4gICAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICAgIDxsYWJlbD5EZXNjcmlwdGlvbjwvbGFiZWw+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICAgIDxsYWJlbD5WYWx1ZSBpbiBFdGhlcjwvbGFiZWw+XG4gICAgICAgICAgPElucHV0IHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgPEZvcm0uRmllbGQ+XG4gICAgICAgICAgPGxhYmVsPlJlY2lwaWVudDwvbGFiZWw+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICB2YWx1ZT17cmVjaXBpZW50fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSZWNpcGllbnQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgPE1lc3NhZ2UgZXJyb3IgY29udGVudD17ZXJyb3JNZXNzYWdlfSBoZWFkZXI9XCJPb3BzIVwiIC8+XG4gICAgICAgIDxCdXR0b24gcHJpbWFyeSBsb2FkaW5nPXshIWxvYWRpbmd9PlxuICAgICAgICAgIENyZWF0ZSFcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdE5ldztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gIHJldHVybiB7IHByb3BzOiB7IHF1ZXJ5OiBjb250ZXh0LnF1ZXJ5IH0gfTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiRm9ybSIsIk1lc3NhZ2UiLCJJbnB1dCIsIkJ1dHRvbiIsIkNhbXBhaWduIiwid2ViMyIsInVzZVJvdXRlciIsIkxpbmsiLCJSZXF1ZXN0TmV3IiwicXVlcnkiLCJyb3V0ZXIiLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwidmFsdWUiLCJzZXRWYWx1ZSIsInJlY2lwaWVudCIsInNldFJlY2lwaWVudCIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiY2FtcGFpZ25BZGRyZXNzIiwib25TdWJtaXQiLCJlIiwiY2FtcGFpZ24iLCJhY2NvdW50cyIsInByZXZlbnREZWZhdWx0IiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJtZXRob2RzIiwiY3JlYXRlUmVxdWVzdCIsInV0aWxzIiwidG9XZWkiLCJzZW5kIiwiZnJvbSIsInB1c2giLCJtZXNzYWdlIiwiZGl2IiwiaHJlZiIsImEiLCJoMyIsImVycm9yIiwiRmllbGQiLCJsYWJlbCIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiY29udGVudCIsImhlYWRlciIsInByaW1hcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/campaigns/[campaignAddress]/[requests]/new.js\n");

/***/ })

});