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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _components_ContributeForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ContributeForm */ \"./components/ContributeForm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar CampaignShow = function(props) {\n    var _this1 = _this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    var campaignAddress = props.campaignAddress;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.summary), summary = ref[0], setSummary = ref[1];\n    var renderCards = function() {\n        var minimumContribution = summary.minimumContribution, balance = summary.balance, requestsCount = summary.requestsCount, approversCount = summary.approversCount, manager = summary.manager;\n        var items = [\n            {\n                header: manager,\n                meta: \"Address of manager\",\n                description: \"The manager created this campaign and can create requests to withdraw money.\",\n                style: {\n                    overflowWrap: \"break-word\"\n                }\n            },\n            {\n                header: minimumContribution,\n                meta: \"Minimum Contribution (wei)\",\n                description: \"You must contribute at least this much wei to become an approver.\",\n                style: {\n                    overflowWrap: \"break-word\"\n                }\n            },\n            {\n                header: requestsCount,\n                meta: \"Number of Requests\",\n                description: \"A request tries to withdraw money from the contract. Requests must be approved by approvers.\",\n                style: {\n                    overflowWrap: \"break-word\"\n                }\n            },\n            {\n                header: approversCount,\n                meta: \"Number of Approvers\",\n                description: \"Number of people who already have donated to this campaign.\",\n                style: {\n                    overflowWrap: \"break-word\"\n                }\n            },\n            {\n                header: _ethereum_web3__WEBPACK_IMPORTED_MODULE_2__[\"default\"].utils.fromWei(balance, \"ether\"),\n                meta: \"Campaign Balance (ether)\",\n                description: \"The balance is how much money this campaign has left to spend.\",\n                style: {\n                    overflowWrap: \"break-word\"\n                }\n            }, \n        ];\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Card.Group, {\n            items: items,\n            __source: {\n                fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/index.js\",\n                lineNumber: 60,\n                columnNumber: 12\n            },\n            __self: _this1\n        }));\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/index.js\",\n            lineNumber: 64,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                __source: {\n                    fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/index.js\",\n                    lineNumber: 65,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"Campaign Details\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Grid, {\n                __source: {\n                    fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/index.js\",\n                    lineNumber: 66,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Grid.Row, {\n                        __source: {\n                            fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/index.js\",\n                            lineNumber: 67,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Grid.Column, {\n                                width: 10,\n                                __source: {\n                                    fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/index.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 11\n                                },\n                                __self: _this,\n                                children: renderCards()\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Grid.Column, {\n                                width: 6,\n                                __source: {\n                                    fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/index.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 11\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ContributeForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    campaignAddress: campaignAddress,\n                                    __source: {\n                                        fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/index.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 13\n                                    },\n                                    __self: _this\n                                })\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Grid.Row, {\n                        __source: {\n                            fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/index.js\",\n                            lineNumber: 73,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Grid.Column, {\n                            __source: {\n                                fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/index.js\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                href: \"/campaigns/\".concat(campaignAddress, \"/requests\"),\n                                __source: {\n                                    fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/index.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                    __source: {\n                                        fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/index.js\",\n                                        lineNumber: 76,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                        primary: true,\n                                        __source: {\n                                            fileName: \"/Users/christian/Desktop/Projects/kickstart/pages/campaigns/[campaignAddress]/index.js\",\n                                            lineNumber: 77,\n                                            columnNumber: 17\n                                        },\n                                        __self: _this,\n                                        children: \" View Requests \"\n                                    })\n                                })\n                            })\n                        })\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_s(CampaignShow, \"oe90q8E5WISToby8pq+wX9BWRvc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = CampaignShow;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CampaignShow);\nvar _c;\n$RefreshReg$(_c, \"CampaignShow\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvW2NhbXBhaWduQWRkcmVzc10vaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDSTtBQUViO0FBQ3NCO0FBQ25DO0FBQ1c7OztBQUV2QyxHQUFLLENBQUNVLFlBQVksR0FBRyxRQUFRLENBQVBDLEtBQUssRUFBSyxDQUFDOzs7SUFDL0IsR0FBSyxDQUFDQyxNQUFNLEdBQUdILHNEQUFTO0lBQ3hCLEdBQUssQ0FBQ0ksZUFBZSxHQUFHRixLQUFLLENBQUNFLGVBQWU7SUFDN0MsR0FBSyxDQUF5QlosR0FBdUIsR0FBdkJBLCtDQUFRLENBQUNVLEtBQUssQ0FBQ0csT0FBTyxHQUE3Q0EsT0FBTyxHQUFnQmIsR0FBdUIsS0FBckNjLFVBQVUsR0FBSWQsR0FBdUI7SUFFckQsR0FBSyxDQUFDZSxXQUFXLEdBQUcsUUFDdEIsR0FENEIsQ0FBQztRQUN6QixHQUFLLENBQ0hDLG1CQUFtQixHQUtqQkgsT0FBTyxDQUxURyxtQkFBbUIsRUFDbkJDLE9BQU8sR0FJTEosT0FBTyxDQUpUSSxPQUFPLEVBQ1BDLGFBQWEsR0FHWEwsT0FBTyxDQUhUSyxhQUFhLEVBQ2JDLGNBQWMsR0FFWk4sT0FBTyxDQUZUTSxjQUFjLEVBQ2RDLE9BQU8sR0FDTFAsT0FBTyxDQURUTyxPQUFPO1FBRVQsR0FBSyxDQUFDQyxLQUFLLEdBQUcsQ0FBQztZQUNiLENBQUM7Z0JBQ0NDLE1BQU0sRUFBRUYsT0FBTztnQkFDZkcsSUFBSSxFQUFFLENBQW9CO2dCQUMxQkMsV0FBVyxFQUNULENBQThFO2dCQUNoRkMsS0FBSyxFQUFFLENBQUM7b0JBQUNDLFlBQVksRUFBRSxDQUFZO2dCQUFDLENBQUM7WUFDdkMsQ0FBQztZQUNELENBQUM7Z0JBQ0NKLE1BQU0sRUFBRU4sbUJBQW1CO2dCQUMzQk8sSUFBSSxFQUFFLENBQTRCO2dCQUNsQ0MsV0FBVyxFQUNULENBQW1FO2dCQUNyRUMsS0FBSyxFQUFFLENBQUM7b0JBQUNDLFlBQVksRUFBRSxDQUFZO2dCQUFDLENBQUM7WUFDdkMsQ0FBQztZQUNELENBQUM7Z0JBQ0NKLE1BQU0sRUFBRUosYUFBYTtnQkFDckJLLElBQUksRUFBRSxDQUFvQjtnQkFDMUJDLFdBQVcsRUFDVCxDQUE4RjtnQkFDaEdDLEtBQUssRUFBRSxDQUFDO29CQUFDQyxZQUFZLEVBQUUsQ0FBWTtnQkFBQyxDQUFDO1lBQ3ZDLENBQUM7WUFDRCxDQUFDO2dCQUNDSixNQUFNLEVBQUVILGNBQWM7Z0JBQ3RCSSxJQUFJLEVBQUUsQ0FBcUI7Z0JBQzNCQyxXQUFXLEVBQ1QsQ0FBNkQ7Z0JBQy9EQyxLQUFLLEVBQUUsQ0FBQztvQkFBQ0MsWUFBWSxFQUFFLENBQVk7Z0JBQUMsQ0FBQztZQUN2QyxDQUFDO1lBQ0QsQ0FBQztnQkFDQ0osTUFBTSxFQUFFakIsb0VBQWtCLENBQUNZLE9BQU8sRUFBRSxDQUFPO2dCQUMzQ00sSUFBSSxFQUFFLENBQTBCO2dCQUNoQ0MsV0FBVyxFQUNULENBQWdFO2dCQUNsRUMsS0FBSyxFQUFFLENBQUM7b0JBQUNDLFlBQVksRUFBRSxDQUFZO2dCQUFDLENBQUM7WUFDdkMsQ0FBQztRQUNILENBQUM7UUFFRCxNQUFNLHNFQUFFeEIseURBQVU7WUFBQ21CLEtBQUssRUFBRUEsS0FBSzs7Ozs7Ozs7SUFDakMsQ0FBQztJQUVELE1BQU0sdUVBQ0hTLENBQUc7Ozs7Ozs7O2lGQUNEQyxDQUFFOzs7Ozs7OzBCQUFDLENBQWdCOztrRkFDbkI1QixtREFBSTs7Ozs7Ozs7MEZBQ0ZBLHVEQUFROzs7Ozs7OztpR0FDTkEsMERBQVc7Z0NBQUMrQixLQUFLLEVBQUUsRUFBRTs7Ozs7OzswQ0FBR25CLFdBQVc7O2lHQUNuQ1osMERBQVc7Z0NBQUMrQixLQUFLLEVBQUUsQ0FBQzs7Ozs7OzsrR0FDbEI1QixrRUFBYztvQ0FBQ00sZUFBZSxFQUFFQSxlQUFlOzs7Ozs7Ozs7Ozt5RkFHbkRULHVEQUFROzs7Ozs7O3VHQUNOQSwwREFBVzs7Ozs7OzsyR0FDVEksa0RBQUk7Z0NBQUM0QixJQUFJLEVBQUcsQ0FBVyxhQUFrQixNQUFTLENBQXpCdkIsZUFBZSxFQUFDLENBQVM7Ozs7Ozs7K0dBQ2hEd0IsQ0FBQzs7Ozs7OzttSEFDQ2hDLHFEQUFNO3dDQUFDaUMsT0FBTzs7Ozs7OztrREFBQyxDQUFlOzs7Ozs7Ozs7O0FBUS9DLENBQUM7R0E1RUs1QixZQUFZOztRQUNERCxrREFBUzs7O0tBRHBCQyxZQUFZOztBQThFbEIsK0RBQWVBLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jYW1wYWlnbnMvW2NhbXBhaWduQWRkcmVzc10vaW5kZXguanM/NmQ1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ2FyZCwgR3JpZCwgQnV0dG9uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSBcIi4uLy4uLy4uL2V0aGVyZXVtL2NhbXBhaWduXCI7XG5pbXBvcnQgd2ViMyBmcm9tIFwiLi4vLi4vLi4vZXRoZXJldW0vd2ViM1wiO1xuaW1wb3J0IENvbnRyaWJ1dGVGb3JtIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0NvbnRyaWJ1dGVGb3JtXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuY29uc3QgQ2FtcGFpZ25TaG93ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBjYW1wYWlnbkFkZHJlc3MgPSBwcm9wcy5jYW1wYWlnbkFkZHJlc3M7XG4gIGNvbnN0IFtzdW1tYXJ5LCBzZXRTdW1tYXJ5XSA9IHVzZVN0YXRlKHByb3BzLnN1bW1hcnkpO1xuXG4gIGNvbnN0IHJlbmRlckNhcmRzID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIG1pbmltdW1Db250cmlidXRpb24sXG4gICAgICBiYWxhbmNlLFxuICAgICAgcmVxdWVzdHNDb3VudCxcbiAgICAgIGFwcHJvdmVyc0NvdW50LFxuICAgICAgbWFuYWdlcixcbiAgICB9ID0gc3VtbWFyeTtcbiAgICBjb25zdCBpdGVtcyA9IFtcbiAgICAgIHtcbiAgICAgICAgaGVhZGVyOiBtYW5hZ2VyLFxuICAgICAgICBtZXRhOiBcIkFkZHJlc3Mgb2YgbWFuYWdlclwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIlRoZSBtYW5hZ2VyIGNyZWF0ZWQgdGhpcyBjYW1wYWlnbiBhbmQgY2FuIGNyZWF0ZSByZXF1ZXN0cyB0byB3aXRoZHJhdyBtb25leS5cIixcbiAgICAgICAgc3R5bGU6IHsgb3ZlcmZsb3dXcmFwOiBcImJyZWFrLXdvcmRcIiB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaGVhZGVyOiBtaW5pbXVtQ29udHJpYnV0aW9uLFxuICAgICAgICBtZXRhOiBcIk1pbmltdW0gQ29udHJpYnV0aW9uICh3ZWkpXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiWW91IG11c3QgY29udHJpYnV0ZSBhdCBsZWFzdCB0aGlzIG11Y2ggd2VpIHRvIGJlY29tZSBhbiBhcHByb3Zlci5cIixcbiAgICAgICAgc3R5bGU6IHsgb3ZlcmZsb3dXcmFwOiBcImJyZWFrLXdvcmRcIiB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaGVhZGVyOiByZXF1ZXN0c0NvdW50LFxuICAgICAgICBtZXRhOiBcIk51bWJlciBvZiBSZXF1ZXN0c1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIkEgcmVxdWVzdCB0cmllcyB0byB3aXRoZHJhdyBtb25leSBmcm9tIHRoZSBjb250cmFjdC4gUmVxdWVzdHMgbXVzdCBiZSBhcHByb3ZlZCBieSBhcHByb3ZlcnMuXCIsXG4gICAgICAgIHN0eWxlOiB7IG92ZXJmbG93V3JhcDogXCJicmVhay13b3JkXCIgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGhlYWRlcjogYXBwcm92ZXJzQ291bnQsXG4gICAgICAgIG1ldGE6IFwiTnVtYmVyIG9mIEFwcHJvdmVyc1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICBcIk51bWJlciBvZiBwZW9wbGUgd2hvIGFscmVhZHkgaGF2ZSBkb25hdGVkIHRvIHRoaXMgY2FtcGFpZ24uXCIsXG4gICAgICAgIHN0eWxlOiB7IG92ZXJmbG93V3JhcDogXCJicmVhay13b3JkXCIgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGhlYWRlcjogd2ViMy51dGlscy5mcm9tV2VpKGJhbGFuY2UsIFwiZXRoZXJcIiksXG4gICAgICAgIG1ldGE6IFwiQ2FtcGFpZ24gQmFsYW5jZSAoZXRoZXIpXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiVGhlIGJhbGFuY2UgaXMgaG93IG11Y2ggbW9uZXkgdGhpcyBjYW1wYWlnbiBoYXMgbGVmdCB0byBzcGVuZC5cIixcbiAgICAgICAgc3R5bGU6IHsgb3ZlcmZsb3dXcmFwOiBcImJyZWFrLXdvcmRcIiB9LFxuICAgICAgfSxcbiAgICBdO1xuXG4gICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz47XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPkNhbXBhaWduIERldGFpbHM8L2gxPlxuICAgICAgPEdyaWQ+XG4gICAgICAgIDxHcmlkLlJvdz5cbiAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezEwfT57cmVuZGVyQ2FyZHMoKX08L0dyaWQuQ29sdW1uPlxuICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17Nn0+XG4gICAgICAgICAgICA8Q29udHJpYnV0ZUZvcm0gY2FtcGFpZ25BZGRyZXNzPXtjYW1wYWlnbkFkZHJlc3N9IC8+XG4gICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgPC9HcmlkLlJvdz5cbiAgICAgICAgPEdyaWQuUm93PlxuICAgICAgICAgIDxHcmlkLkNvbHVtbj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvY2FtcGFpZ25zLyR7Y2FtcGFpZ25BZGRyZXNzfS9yZXF1ZXN0c2B9PlxuICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHByaW1hcnk+IFZpZXcgUmVxdWVzdHMgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICA8L0dyaWQuUm93PlxuICAgICAgPC9HcmlkPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FtcGFpZ25TaG93O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbiAgY29uc3QgY2FtcGFpZ25BZGRyZXNzID0gY29udGV4dC5xdWVyeS5jYW1wYWlnbkFkZHJlc3M7XG4gIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24oY2FtcGFpZ25BZGRyZXNzKTtcbiAgY29uc3Qgc3VtbWFyeSA9IGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuZ2V0U3VtbWFyeSgpLmNhbGwoKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgY2FtcGFpZ25BZGRyZXNzLFxuICAgICAgc3VtbWFyeToge1xuICAgICAgICBtaW5pbXVtQ29udHJpYnV0aW9uOiBzdW1tYXJ5WzBdLFxuICAgICAgICBiYWxhbmNlOiBzdW1tYXJ5WzFdLFxuICAgICAgICByZXF1ZXN0c0NvdW50OiBzdW1tYXJ5WzJdLFxuICAgICAgICBhcHByb3ZlcnNDb3VudDogc3VtbWFyeVszXSxcbiAgICAgICAgbWFuYWdlcjogc3VtbWFyeVs0XSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ2FyZCIsIkdyaWQiLCJCdXR0b24iLCJ3ZWIzIiwiQ29udHJpYnV0ZUZvcm0iLCJMaW5rIiwidXNlUm91dGVyIiwiQ2FtcGFpZ25TaG93IiwicHJvcHMiLCJyb3V0ZXIiLCJjYW1wYWlnbkFkZHJlc3MiLCJzdW1tYXJ5Iiwic2V0U3VtbWFyeSIsInJlbmRlckNhcmRzIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsImJhbGFuY2UiLCJyZXF1ZXN0c0NvdW50IiwiYXBwcm92ZXJzQ291bnQiLCJtYW5hZ2VyIiwiaXRlbXMiLCJoZWFkZXIiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsInV0aWxzIiwiZnJvbVdlaSIsIkdyb3VwIiwiZGl2IiwiaDEiLCJSb3ciLCJDb2x1bW4iLCJ3aWR0aCIsImhyZWYiLCJhIiwicHJpbWFyeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/campaigns/[campaignAddress]/index.js\n");

/***/ })

});