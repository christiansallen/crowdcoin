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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _Users_christian_Desktop_Projects_kickstart_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/regenerator-runtime/runtime.js */ \"./node_modules/next/node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_christian_Desktop_Projects_kickstart_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_christian_Desktop_Projects_kickstart_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../ethereum/campaign */ \"./ethereum/campaign.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar RequestNew = function(param) {\n    var query = param.query;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), description = ref[0], setDescription = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), value = ref1[0], setValue = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), recipient = ref2[0], setRecipient = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), errorMessage = ref3[0], setErrorMessage = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), loading = ref4[0], setLoading = ref4[1];\n    var campaignAddress = query.campaignAddress;\n    var onSubmit = _asyncToGenerator(_Users_christian_Desktop_Projects_kickstart_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n        var campaign, accounts;\n        return _Users_christian_Desktop_Projects_kickstart_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    e.preventDefault();\n                    setLoading(true);\n                    setErrorMessage(\"\");\n                    campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(campaignAddress);\n                    _ctx.prev = 4;\n                    _ctx.next = 7;\n                    return _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__[\"default\"].eth.getAccounts();\n                case 7:\n                    accounts = _ctx.sent;\n                    _ctx.next = 10;\n                    return campaign.methods.createRequest(description, _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__[\"default\"].utils.toWei(value, \"ether\"), recipient).send({\n                        from: accounts[0]\n                    });\n                case 10:\n                    router.push(\"/campaigns/\".concat(campaignAddress, \"/requests\"));\n                    _ctx.next = 16;\n                    break;\n                case 13:\n                    _ctx.prev = 13;\n                    _ctx.t0 = _ctx[\"catch\"](4);\n                    setErrorMessage(_ctx.t0.message);\n                case 16:\n                    setLoading(false);\n                case 17:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                4,\n                13\n            ]\n        ]);\n    }));\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/[requests]/new.js\",\n            lineNumber: 37,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                __source: {\n                    fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/[requests]/new.js\",\n                    lineNumber: 38,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"a\", {\n                    __source: {\n                        fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/[requests]/new.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                        primary: true,\n                        __source: {\n                            fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/[requests]/new.js\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: \"Back\"\n                    })\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h3\", {\n                __source: {\n                    fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/[requests]/new.js\",\n                    lineNumber: 43,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"Create a Request\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Form, {\n                onSubmit: onSubmit,\n                error: !!errorMessage,\n                __source: {\n                    fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/[requests]/new.js\",\n                    lineNumber: 44,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Form.Field, {\n                        __source: {\n                            fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/[requests]/new.js\",\n                            lineNumber: 45,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"label\", {\n                                __source: {\n                                    fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/[requests]/new.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 11\n                                },\n                                __self: _this,\n                                children: \"Description\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                                value: description,\n                                onChange: function(e) {\n                                    return setDescription(e.target.value);\n                                },\n                                __source: {\n                                    fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/[requests]/new.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 11\n                                },\n                                __self: _this\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Form.Field, {\n                        __source: {\n                            fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/[requests]/new.js\",\n                            lineNumber: 52,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"label\", {\n                                __source: {\n                                    fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/[requests]/new.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 11\n                                },\n                                __self: _this,\n                                children: \"Value in Ether\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                                value: value,\n                                onChange: function(e) {\n                                    return setValue(e.target.value);\n                                },\n                                __source: {\n                                    fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/[requests]/new.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 11\n                                },\n                                __self: _this\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Form.Field, {\n                        __source: {\n                            fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/[requests]/new.js\",\n                            lineNumber: 56,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"label\", {\n                                __source: {\n                                    fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/[requests]/new.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 11\n                                },\n                                __self: _this,\n                                children: \"Recipient\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                                value: recipient,\n                                onChange: function(e) {\n                                    return setRecipient(e.target.value);\n                                },\n                                __source: {\n                                    fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/[requests]/new.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 11\n                                },\n                                __self: _this\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Message, {\n                        error: true,\n                        content: errorMessage,\n                        header: \"Oops!\",\n                        __source: {\n                            fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/[requests]/new.js\",\n                            lineNumber: 63,\n                            columnNumber: 9\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                        primary: true,\n                        loading: !!loading,\n                        __source: {\n                            fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/[requests]/new.js\",\n                            lineNumber: 64,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: \"Create!\"\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_s(RequestNew, \"PTXyKb3m1t4Q9n+xSGSQFTQ+XE8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = RequestNew;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RequestNew);\nvar _c;\n$RefreshReg$(_c, \"RequestNew\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvW2NhbXBhaWduQWRkcmVzc10vW3JlcXVlc3RzXS9uZXcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDeUI7QUFDWjtBQUNSO0FBQ0w7QUFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUIsR0FBSyxDQUFDVSxVQUFVLEdBQUcsUUFBUSxRQUFPLENBQUM7UUFBYkMsS0FBSyxTQUFMQSxLQUFLOztJQUN6QixHQUFLLENBQUNDLE1BQU0sR0FBR0osc0RBQVM7SUFDeEIsR0FBSyxDQUFpQ1AsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUUsSUFBMUNZLFdBQVcsR0FBb0JaLEdBQVksS0FBOUJhLGNBQWMsR0FBSWIsR0FBWTtJQUNsRCxHQUFLLENBQXFCQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBRSxJQUE5QmMsS0FBSyxHQUFjZCxJQUFZLEtBQXhCZSxRQUFRLEdBQUlmLElBQVk7SUFDdEMsR0FBSyxDQUE2QkEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUUsSUFBdENnQixTQUFTLEdBQWtCaEIsSUFBWSxLQUE1QmlCLFlBQVksR0FBSWpCLElBQVk7SUFDOUMsR0FBSyxDQUFtQ0EsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUUsSUFBNUNrQixZQUFZLEdBQXFCbEIsSUFBWSxLQUEvQm1CLGVBQWUsR0FBSW5CLElBQVk7SUFDcEQsR0FBSyxDQUF5QkEsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssR0FBckNvQixPQUFPLEdBQWdCcEIsSUFBZSxLQUE3QnFCLFVBQVUsR0FBSXJCLElBQWU7SUFDN0MsR0FBSyxDQUFHc0IsZUFBZSxHQUFLWixLQUFLLENBQXpCWSxlQUFlO0lBRXZCLEdBQUssQ0FBQ0MsUUFBUSwyS0FBRyxRQUFRLFNBQURDLENBQUMsRUFBSyxDQUFDO1lBSXZCQyxRQUFRLEVBRU5DLFFBQVE7Ozs7b0JBTGhCRixDQUFDLENBQUNHLGNBQWM7b0JBQ2hCTixVQUFVLENBQUMsSUFBSTtvQkFDZkYsZUFBZSxDQUFDLENBQUU7b0JBQ1pNLFFBQVEsR0FBR3BCLDhEQUFRLENBQUNpQixlQUFlOzs7MkJBRWhCaEIsc0VBQW9COztvQkFBckNvQixRQUFROzsyQkFDUkQsUUFBUSxDQUFDSyxPQUFPLENBQ25CQyxhQUFhLENBQUNuQixXQUFXLEVBQUVOLGtFQUFnQixDQUFDUSxLQUFLLEVBQUUsQ0FBTyxTQUFHRSxTQUFTLEVBQ3RFa0IsSUFBSSxDQUFDLENBQUM7d0JBQ0xDLElBQUksRUFBRVQsUUFBUSxDQUFDLENBQUM7b0JBQ2xCLENBQUM7O29CQUNIZixNQUFNLENBQUN5QixJQUFJLENBQUUsQ0FBVyxhQUFrQixNQUFTLENBQXpCZCxlQUFlLEVBQUMsQ0FBUzs7Ozs7O29CQUVuREgsZUFBZSxTQUFLa0IsT0FBTzs7b0JBRTdCaEIsVUFBVSxDQUFDLEtBQUs7Ozs7Ozs7Ozs7O0lBQ2xCLENBQUM7SUFFRCxNQUFNLHVFQUNIaUIsQ0FBRzs7Ozs7Ozs7aUZBQ0Q5QixrREFBSTs7Ozs7OzsrRkFDRitCLENBQUM7Ozs7Ozs7bUdBQ0NuQyxxREFBTTt3QkFBQ29DLE9BQU87Ozs7Ozs7a0NBQUMsQ0FBSTs7OztpRkFHdkJDLENBQUU7Ozs7Ozs7MEJBQUMsQ0FBZ0I7O2tGQUNuQnhDLG1EQUFJO2dCQUFDc0IsUUFBUSxFQUFFQSxRQUFRO2dCQUFFbUIsS0FBSyxJQUFJeEIsWUFBWTs7Ozs7Ozs7MEZBQzVDakIseURBQVU7Ozs7Ozs7O2lHQUNSMkMsQ0FBSzs7Ozs7OzswQ0FBQyxDQUFXOztpR0FDakJ6QyxvREFBSztnQ0FDSlcsS0FBSyxFQUFFRixXQUFXO2dDQUNsQmlDLFFBQVEsRUFBRSxRQUFRLENBQVByQixDQUFDO29DQUFLWCxNQUFNLENBQU5BLGNBQWMsQ0FBQ1csQ0FBQyxDQUFDc0IsTUFBTSxDQUFDaEMsS0FBSzs7Ozs7Ozs7Ozs7MEZBR2pEYix5REFBVTs7Ozs7Ozs7aUdBQ1IyQyxDQUFLOzs7Ozs7OzBDQUFDLENBQWM7O2lHQUNwQnpDLG9EQUFLO2dDQUFDVyxLQUFLLEVBQUVBLEtBQUs7Z0NBQUUrQixRQUFRLEVBQUUsUUFBUSxDQUFQckIsQ0FBQztvQ0FBS1QsTUFBTSxDQUFOQSxRQUFRLENBQUNTLENBQUMsQ0FBQ3NCLE1BQU0sQ0FBQ2hDLEtBQUs7Ozs7Ozs7Ozs7OzBGQUU5RGIseURBQVU7Ozs7Ozs7O2lHQUNSMkMsQ0FBSzs7Ozs7OzswQ0FBQyxDQUFTOztpR0FDZnpDLG9EQUFLO2dDQUNKVyxLQUFLLEVBQUVFLFNBQVM7Z0NBQ2hCNkIsUUFBUSxFQUFFLFFBQVEsQ0FBUHJCLENBQUM7b0NBQUtQLE1BQU0sQ0FBTkEsWUFBWSxDQUFDTyxDQUFDLENBQUNzQixNQUFNLENBQUNoQyxLQUFLOzs7Ozs7Ozs7Ozt5RkFHL0NaLHNEQUFPO3dCQUFDd0MsS0FBSzt3QkFBQ0ssT0FBTyxFQUFFN0IsWUFBWTt3QkFBRThCLE1BQU0sRUFBQyxDQUFPOzs7Ozs7Ozt5RkFDbkQ1QyxxREFBTTt3QkFBQ29DLE9BQU87d0JBQUNwQixPQUFPLElBQUlBLE9BQU87Ozs7Ozs7a0NBQUUsQ0FFcEM7Ozs7OztBQUlSLENBQUM7R0E5REtYLFVBQVU7O1FBQ0NGLGtEQUFTOzs7S0FEcEJFLFVBQVU7O0FBK0RoQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NhbXBhaWducy9bY2FtcGFpZ25BZGRyZXNzXS9bcmVxdWVzdHNdL25ldy5qcz83MDVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9ybSwgTWVzc2FnZSwgSW5wdXQsIEJ1dHRvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IENhbXBhaWduIGZyb20gXCIuLi8uLi8uLi8uLi9ldGhlcmV1bS9jYW1wYWlnblwiO1xuaW1wb3J0IHdlYjMgZnJvbSBcIi4uLy4uLy4uLy4uL2V0aGVyZXVtL3dlYjNcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBSZXF1ZXN0TmV3ID0gKHsgcXVlcnkgfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3JlY2lwaWVudCwgc2V0UmVjaXBpZW50XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyBjYW1wYWlnbkFkZHJlc3MgfSA9IHF1ZXJ5O1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBzZXRFcnJvck1lc3NhZ2UoXCJcIik7XG4gICAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbihjYW1wYWlnbkFkZHJlc3MpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG4gICAgICBhd2FpdCBjYW1wYWlnbi5tZXRob2RzXG4gICAgICAgIC5jcmVhdGVSZXF1ZXN0KGRlc2NyaXB0aW9uLCB3ZWIzLnV0aWxzLnRvV2VpKHZhbHVlLCBcImV0aGVyXCIpLCByZWNpcGllbnQpXG4gICAgICAgIC5zZW5kKHtcbiAgICAgICAgICBmcm9tOiBhY2NvdW50c1swXSxcbiAgICAgICAgfSk7XG4gICAgICByb3V0ZXIucHVzaChgL2NhbXBhaWducy8ke2NhbXBhaWduQWRkcmVzc30vcmVxdWVzdHNgKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHNldEVycm9yTWVzc2FnZShlcnIubWVzc2FnZSk7XG4gICAgfVxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxMaW5rPlxuICAgICAgICA8YT5cbiAgICAgICAgICA8QnV0dG9uIHByaW1hcnk+QmFjazwvQnV0dG9uPlxuICAgICAgICA8L2E+XG4gICAgICA8L0xpbms+XG4gICAgICA8aDM+Q3JlYXRlIGEgUmVxdWVzdDwvaDM+XG4gICAgICA8Rm9ybSBvblN1Ym1pdD17b25TdWJtaXR9IGVycm9yPXshIWVycm9yTWVzc2FnZX0+XG4gICAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICAgIDxsYWJlbD5EZXNjcmlwdGlvbjwvbGFiZWw+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICAgIDxsYWJlbD5WYWx1ZSBpbiBFdGhlcjwvbGFiZWw+XG4gICAgICAgICAgPElucHV0IHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgPEZvcm0uRmllbGQ+XG4gICAgICAgICAgPGxhYmVsPlJlY2lwaWVudDwvbGFiZWw+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICB2YWx1ZT17cmVjaXBpZW50fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSZWNpcGllbnQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgPE1lc3NhZ2UgZXJyb3IgY29udGVudD17ZXJyb3JNZXNzYWdlfSBoZWFkZXI9XCJPb3BzIVwiIC8+XG4gICAgICAgIDxCdXR0b24gcHJpbWFyeSBsb2FkaW5nPXshIWxvYWRpbmd9PlxuICAgICAgICAgIENyZWF0ZSFcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdE5ldztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gIHJldHVybiB7IHByb3BzOiB7IHF1ZXJ5OiBjb250ZXh0LnF1ZXJ5IH0gfTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiRm9ybSIsIk1lc3NhZ2UiLCJJbnB1dCIsIkJ1dHRvbiIsIkNhbXBhaWduIiwid2ViMyIsInVzZVJvdXRlciIsIkxpbmsiLCJSZXF1ZXN0TmV3IiwicXVlcnkiLCJyb3V0ZXIiLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwidmFsdWUiLCJzZXRWYWx1ZSIsInJlY2lwaWVudCIsInNldFJlY2lwaWVudCIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiY2FtcGFpZ25BZGRyZXNzIiwib25TdWJtaXQiLCJlIiwiY2FtcGFpZ24iLCJhY2NvdW50cyIsInByZXZlbnREZWZhdWx0IiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJtZXRob2RzIiwiY3JlYXRlUmVxdWVzdCIsInV0aWxzIiwidG9XZWkiLCJzZW5kIiwiZnJvbSIsInB1c2giLCJtZXNzYWdlIiwiZGl2IiwiYSIsInByaW1hcnkiLCJoMyIsImVycm9yIiwiRmllbGQiLCJsYWJlbCIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiY29udGVudCIsImhlYWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/campaigns/[campaignAddress]/[requests]/new.js\n");

/***/ })

});