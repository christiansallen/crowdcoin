"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/campaigns/[campaignAddress]",{

/***/ "./pages/campaigns/[campaignAddress]/index.js":
/*!****************************************************!*\
  !*** ./pages/campaigns/[campaignAddress]/index.js ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _components_ContributeForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ContributeForm */ \"./components/ContributeForm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar CampaignShow = function(param) {\n    var query = param.query;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), summary = ref[0], setSummary = ref[1];\n    var renderCards = function() {\n        var minimumContribution = summary.minimumContribution, balance = summary.balance, requestsCount = summary.requestsCount, approversCount = summary.approversCount, manager = summary.manager;\n        var items = [\n            {\n                header: manager,\n                meta: \"Address of manager\",\n                description: \"The manager created this campaign and can create requests to withdraw money.\",\n                style: {\n                    overflowWrap: \"break-word\"\n                }\n            },\n            {\n                header: minimumContribution,\n                meta: \"Minimum Contribution (wei)\",\n                description: \"You must contribute at least this much wei to become an approver.\",\n                style: {\n                    overflowWrap: \"break-word\"\n                }\n            },\n            {\n                header: requestsCount,\n                meta: \"Number of Requests\",\n                description: \"A request tries to withdraw money from the contract. Requests must be approved by approvers.\",\n                style: {\n                    overflowWrap: \"break-word\"\n                }\n            },\n            {\n                header: approversCount,\n                meta: \"Number of Approvers\",\n                description: \"Number of people who already have donated to this campaign.\",\n                style: {\n                    overflowWrap: \"break-word\"\n                }\n            },\n            {\n                header: _ethereum_web3__WEBPACK_IMPORTED_MODULE_2__[\"default\"].utils.fromWei(balance, \"ether\"),\n                meta: \"Campaign Balance (ether)\",\n                description: \"The balance is how much money this campaign has left to spend.\",\n                style: {\n                    overflowWrap: \"break-word\"\n                }\n            }, \n        ];\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Card.Group, {\n            items: items,\n            __source: {\n                fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/index.js\",\n                lineNumber: 57,\n                columnNumber: 12\n            },\n            __self: _this1\n        }));\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/index.js\",\n            lineNumber: 61,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                __source: {\n                    fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/index.js\",\n                    lineNumber: 62,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"Campaign Details\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Grid, {\n                __source: {\n                    fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/index.js\",\n                    lineNumber: 63,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Grid.Row, {\n                        __source: {\n                            fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/index.js\",\n                            lineNumber: 64,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Grid.Column, {\n                                width: 10,\n                                __source: {\n                                    fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/index.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 11\n                                },\n                                __self: _this,\n                                children: renderCards()\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Grid.Column, {\n                                width: 6,\n                                __source: {\n                                    fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/index.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 11\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ContributeForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    campaignAddress: campaignAddress,\n                                    __source: {\n                                        fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/index.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 13\n                                    },\n                                    __self: _this\n                                })\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Grid.Row, {\n                        __source: {\n                            fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/index.js\",\n                            lineNumber: 70,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Grid.Column, {\n                            __source: {\n                                fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/index.js\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                href: \"/campaigns/\".concat(campaignAddress, \"/requests\"),\n                                __source: {\n                                    fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/index.js\",\n                                    lineNumber: 72,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                    __source: {\n                                        fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/index.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                        primary: true,\n                                        __source: {\n                                            fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/index.js\",\n                                            lineNumber: 74,\n                                            columnNumber: 17\n                                        },\n                                        __self: _this,\n                                        children: \" View Requests \"\n                                    })\n                                })\n                            })\n                        })\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_s(CampaignShow, \"VhlnxxH3xh7Qs17KADUJ8wvRSZs=\");\n_c = CampaignShow;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CampaignShow);\nvar _c;\n$RefreshReg$(_c, \"CampaignShow\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvW2NhbXBhaWduQWRkcmVzc10vaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ0k7QUFFYjtBQUNzQjtBQUNuQzs7O0FBRTVCLEdBQUssQ0FBQ1MsWUFBWSxHQUFHLFFBQVEsUUFBTyxDQUFDO1FBQWJDLEtBQUssU0FBTEEsS0FBSzs7O0lBQzNCLEdBQUssQ0FBeUJULEdBQVUsR0FBVkEsK0NBQVEsSUFBL0JVLE9BQU8sR0FBZ0JWLEdBQVUsS0FBeEJXLFVBQVUsR0FBSVgsR0FBVTtJQUV4QyxHQUFLLENBQUNZLFdBQVcsR0FBRyxRQUN0QixHQUQ0QixDQUFDO1FBQ3pCLEdBQUssQ0FDSEMsbUJBQW1CLEdBS2pCSCxPQUFPLENBTFRHLG1CQUFtQixFQUNuQkMsT0FBTyxHQUlMSixPQUFPLENBSlRJLE9BQU8sRUFDUEMsYUFBYSxHQUdYTCxPQUFPLENBSFRLLGFBQWEsRUFDYkMsY0FBYyxHQUVaTixPQUFPLENBRlRNLGNBQWMsRUFDZEMsT0FBTyxHQUNMUCxPQUFPLENBRFRPLE9BQU87UUFFVCxHQUFLLENBQUNDLEtBQUssR0FBRyxDQUFDO1lBQ2IsQ0FBQztnQkFDQ0MsTUFBTSxFQUFFRixPQUFPO2dCQUNmRyxJQUFJLEVBQUUsQ0FBb0I7Z0JBQzFCQyxXQUFXLEVBQ1QsQ0FBOEU7Z0JBQ2hGQyxLQUFLLEVBQUUsQ0FBQztvQkFBQ0MsWUFBWSxFQUFFLENBQVk7Z0JBQUMsQ0FBQztZQUN2QyxDQUFDO1lBQ0QsQ0FBQztnQkFDQ0osTUFBTSxFQUFFTixtQkFBbUI7Z0JBQzNCTyxJQUFJLEVBQUUsQ0FBNEI7Z0JBQ2xDQyxXQUFXLEVBQ1QsQ0FBbUU7Z0JBQ3JFQyxLQUFLLEVBQUUsQ0FBQztvQkFBQ0MsWUFBWSxFQUFFLENBQVk7Z0JBQUMsQ0FBQztZQUN2QyxDQUFDO1lBQ0QsQ0FBQztnQkFDQ0osTUFBTSxFQUFFSixhQUFhO2dCQUNyQkssSUFBSSxFQUFFLENBQW9CO2dCQUMxQkMsV0FBVyxFQUNULENBQThGO2dCQUNoR0MsS0FBSyxFQUFFLENBQUM7b0JBQUNDLFlBQVksRUFBRSxDQUFZO2dCQUFDLENBQUM7WUFDdkMsQ0FBQztZQUNELENBQUM7Z0JBQ0NKLE1BQU0sRUFBRUgsY0FBYztnQkFDdEJJLElBQUksRUFBRSxDQUFxQjtnQkFDM0JDLFdBQVcsRUFDVCxDQUE2RDtnQkFDL0RDLEtBQUssRUFBRSxDQUFDO29CQUFDQyxZQUFZLEVBQUUsQ0FBWTtnQkFBQyxDQUFDO1lBQ3ZDLENBQUM7WUFDRCxDQUFDO2dCQUNDSixNQUFNLEVBQUVkLG9FQUFrQixDQUFDUyxPQUFPLEVBQUUsQ0FBTztnQkFDM0NNLElBQUksRUFBRSxDQUEwQjtnQkFDaENDLFdBQVcsRUFDVCxDQUFnRTtnQkFDbEVDLEtBQUssRUFBRSxDQUFDO29CQUFDQyxZQUFZLEVBQUUsQ0FBWTtnQkFBQyxDQUFDO1lBQ3ZDLENBQUM7UUFDSCxDQUFDO1FBRUQsTUFBTSxzRUFBRXJCLHlEQUFVO1lBQUNnQixLQUFLLEVBQUVBLEtBQUs7Ozs7Ozs7O0lBQ2pDLENBQUM7SUFFRCxNQUFNLHVFQUNIUyxDQUFHOzs7Ozs7OztpRkFDREMsQ0FBRTs7Ozs7OzswQkFBQyxDQUFnQjs7a0ZBQ25CekIsbURBQUk7Ozs7Ozs7OzBGQUNGQSx1REFBUTs7Ozs7Ozs7aUdBQ05BLDBEQUFXO2dDQUFDNEIsS0FBSyxFQUFFLEVBQUU7Ozs7Ozs7MENBQUduQixXQUFXOztpR0FDbkNULDBEQUFXO2dDQUFDNEIsS0FBSyxFQUFFLENBQUM7Ozs7Ozs7K0dBQ2xCekIsa0VBQWM7b0NBQUMwQixlQUFlLEVBQUVBLGVBQWU7Ozs7Ozs7Ozs7O3lGQUduRDdCLHVEQUFROzs7Ozs7O3VHQUNOQSwwREFBVzs7Ozs7OzsyR0FDVEksa0RBQUk7Z0NBQUMwQixJQUFJLEVBQUcsQ0FBVyxhQUFrQixNQUFTLENBQXpCRCxlQUFlLEVBQUMsQ0FBUzs7Ozs7OzsrR0FDaERFLENBQUM7Ozs7Ozs7bUhBQ0M5QixxREFBTTt3Q0FBQytCLE9BQU87Ozs7Ozs7a0RBQUMsQ0FBZTs7Ozs7Ozs7OztBQVEvQyxDQUFDO0dBMUVLM0IsWUFBWTtLQUFaQSxZQUFZOztBQTRFbEIsK0RBQWVBLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jYW1wYWlnbnMvW2NhbXBhaWduQWRkcmVzc10vaW5kZXguanM/NmQ1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ2FyZCwgR3JpZCwgQnV0dG9uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSBcIi4uLy4uLy4uL2V0aGVyZXVtL2NhbXBhaWduXCI7XG5pbXBvcnQgd2ViMyBmcm9tIFwiLi4vLi4vLi4vZXRoZXJldW0vd2ViM1wiO1xuaW1wb3J0IENvbnRyaWJ1dGVGb3JtIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0NvbnRyaWJ1dGVGb3JtXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IENhbXBhaWduU2hvdyA9ICh7IHF1ZXJ5IH0pID0+IHtcbiAgY29uc3QgW3N1bW1hcnksIHNldFN1bW1hcnldID0gdXNlU3RhdGUoKTtcblxuICBjb25zdCByZW5kZXJDYXJkcyA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBtaW5pbXVtQ29udHJpYnV0aW9uLFxuICAgICAgYmFsYW5jZSxcbiAgICAgIHJlcXVlc3RzQ291bnQsXG4gICAgICBhcHByb3ZlcnNDb3VudCxcbiAgICAgIG1hbmFnZXIsXG4gICAgfSA9IHN1bW1hcnk7XG4gICAgY29uc3QgaXRlbXMgPSBbXG4gICAgICB7XG4gICAgICAgIGhlYWRlcjogbWFuYWdlcixcbiAgICAgICAgbWV0YTogXCJBZGRyZXNzIG9mIG1hbmFnZXJcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJUaGUgbWFuYWdlciBjcmVhdGVkIHRoaXMgY2FtcGFpZ24gYW5kIGNhbiBjcmVhdGUgcmVxdWVzdHMgdG8gd2l0aGRyYXcgbW9uZXkuXCIsXG4gICAgICAgIHN0eWxlOiB7IG92ZXJmbG93V3JhcDogXCJicmVhay13b3JkXCIgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGhlYWRlcjogbWluaW11bUNvbnRyaWJ1dGlvbixcbiAgICAgICAgbWV0YTogXCJNaW5pbXVtIENvbnRyaWJ1dGlvbiAod2VpKVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIllvdSBtdXN0IGNvbnRyaWJ1dGUgYXQgbGVhc3QgdGhpcyBtdWNoIHdlaSB0byBiZWNvbWUgYW4gYXBwcm92ZXIuXCIsXG4gICAgICAgIHN0eWxlOiB7IG92ZXJmbG93V3JhcDogXCJicmVhay13b3JkXCIgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGhlYWRlcjogcmVxdWVzdHNDb3VudCxcbiAgICAgICAgbWV0YTogXCJOdW1iZXIgb2YgUmVxdWVzdHNcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJBIHJlcXVlc3QgdHJpZXMgdG8gd2l0aGRyYXcgbW9uZXkgZnJvbSB0aGUgY29udHJhY3QuIFJlcXVlc3RzIG11c3QgYmUgYXBwcm92ZWQgYnkgYXBwcm92ZXJzLlwiLFxuICAgICAgICBzdHlsZTogeyBvdmVyZmxvd1dyYXA6IFwiYnJlYWstd29yZFwiIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBoZWFkZXI6IGFwcHJvdmVyc0NvdW50LFxuICAgICAgICBtZXRhOiBcIk51bWJlciBvZiBBcHByb3ZlcnNcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJOdW1iZXIgb2YgcGVvcGxlIHdobyBhbHJlYWR5IGhhdmUgZG9uYXRlZCB0byB0aGlzIGNhbXBhaWduLlwiLFxuICAgICAgICBzdHlsZTogeyBvdmVyZmxvd1dyYXA6IFwiYnJlYWstd29yZFwiIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBoZWFkZXI6IHdlYjMudXRpbHMuZnJvbVdlaShiYWxhbmNlLCBcImV0aGVyXCIpLFxuICAgICAgICBtZXRhOiBcIkNhbXBhaWduIEJhbGFuY2UgKGV0aGVyKVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIlRoZSBiYWxhbmNlIGlzIGhvdyBtdWNoIG1vbmV5IHRoaXMgY2FtcGFpZ24gaGFzIGxlZnQgdG8gc3BlbmQuXCIsXG4gICAgICAgIHN0eWxlOiB7IG92ZXJmbG93V3JhcDogXCJicmVhay13b3JkXCIgfSxcbiAgICAgIH0sXG4gICAgXTtcblxuICAgIHJldHVybiA8Q2FyZC5Hcm91cCBpdGVtcz17aXRlbXN9IC8+O1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5DYW1wYWlnbiBEZXRhaWxzPC9oMT5cbiAgICAgIDxHcmlkPlxuICAgICAgICA8R3JpZC5Sb3c+XG4gICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXsxMH0+e3JlbmRlckNhcmRzKCl9PC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezZ9PlxuICAgICAgICAgICAgPENvbnRyaWJ1dGVGb3JtIGNhbXBhaWduQWRkcmVzcz17Y2FtcGFpZ25BZGRyZXNzfSAvPlxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgIDwvR3JpZC5Sb3c+XG4gICAgICAgIDxHcmlkLlJvdz5cbiAgICAgICAgICA8R3JpZC5Db2x1bW4+XG4gICAgICAgICAgICA8TGluayBocmVmPXtgL2NhbXBhaWducy8ke2NhbXBhaWduQWRkcmVzc30vcmVxdWVzdHNgfT5cbiAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5PiBWaWV3IFJlcXVlc3RzIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgPC9HcmlkLlJvdz5cbiAgICAgIDwvR3JpZD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhbXBhaWduU2hvdztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnN0IGNhbXBhaWduQWRkcmVzcyA9IGNvbnRleHQucXVlcnkuY2FtcGFpZ25BZGRyZXNzO1xuICBjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKGNhbXBhaWduQWRkcmVzcyk7XG4gIGNvbnN0IHN1bW1hcnkgPSBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmdldFN1bW1hcnkoKS5jYWxsKCk7XG4gIHNldFN1bW1hcnkoe1xuICAgIG1pbmltdW1Db250cmlidXRpb246IHN1bW1hcnlbMF0sXG4gICAgYmFsYW5jZTogc3VtbWFyeVsxXSxcbiAgICByZXF1ZXN0c0NvdW50OiBzdW1tYXJ5WzJdLFxuICAgIGFwcHJvdmVyc0NvdW50OiBzdW1tYXJ5WzNdLFxuICAgIG1hbmFnZXI6IHN1bW1hcnlbNF0sXG4gIH0pO1xuICByZXR1cm4geyBwcm9wczogeyBxdWVyeTogY29udGV4dC5xdWVyeSB9IH07XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkNhcmQiLCJHcmlkIiwiQnV0dG9uIiwid2ViMyIsIkNvbnRyaWJ1dGVGb3JtIiwiTGluayIsIkNhbXBhaWduU2hvdyIsInF1ZXJ5Iiwic3VtbWFyeSIsInNldFN1bW1hcnkiLCJyZW5kZXJDYXJkcyIsIm1pbmltdW1Db250cmlidXRpb24iLCJiYWxhbmNlIiwicmVxdWVzdHNDb3VudCIsImFwcHJvdmVyc0NvdW50IiwibWFuYWdlciIsIml0ZW1zIiwiaGVhZGVyIiwibWV0YSIsImRlc2NyaXB0aW9uIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJ1dGlscyIsImZyb21XZWkiLCJHcm91cCIsImRpdiIsImgxIiwiUm93IiwiQ29sdW1uIiwid2lkdGgiLCJjYW1wYWlnbkFkZHJlc3MiLCJocmVmIiwiYSIsInByaW1hcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/campaigns/[campaignAddress]/index.js\n");

/***/ })

});