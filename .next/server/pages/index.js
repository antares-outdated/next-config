"use strict";
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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ IndexPage),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_stitches_config_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/stitches.config.ts */ \"./styles/stitches.config.ts.ts\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-themes */ \"next-themes\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-i18next */ \"next-i18next\");\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-i18next/serverSideTranslations */ \"next-i18next/serverSideTranslations\");\n/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_styles_stitches_config_ts__WEBPACK_IMPORTED_MODULE_1__]);\n_styles_stitches_config_ts__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nconst Button = (0,_styles_stitches_config_ts__WEBPACK_IMPORTED_MODULE_1__.styled)(\"button\", {});\nfunction IndexPage() {\n    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)(\"common\");\n    const { theme , setTheme  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const toggleTheme = ()=>setTheme(theme === \"light\" ? \"dark\" : \"light\");\n    const onToggleLanguageClick = (newLocale)=>{\n        const { pathname , asPath , query  } = router;\n        router.push({\n            pathname,\n            query\n        }, asPath, {\n            locale: newLocale\n        });\n    };\n    const changeTo = router.locale === \"en\" ? \"ru\" : \"en\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: t(\"h1\")\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\antares\\\\Desktop\\\\portfolhub\\\\pages\\\\index.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                onClick: toggleTheme,\n                children: t(\"change-theme\")\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\antares\\\\Desktop\\\\portfolhub\\\\pages\\\\index.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>onToggleLanguageClick(changeTo),\n                children: t(\"change-locale\", {\n                    changeTo\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\antares\\\\Desktop\\\\portfolhub\\\\pages\\\\index.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\antares\\\\Desktop\\\\portfolhub\\\\pages\\\\index.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n};\nconst getServerSideProps = async ({ locale  })=>({\n        props: {\n            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_5__.serverSideTranslations)(locale, [\n                \"common\"\n            ])\n        }\n    });\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQXNEO0FBQ2Y7QUFDTztBQUNOO0FBQ3FDO0FBRTdFLE1BQU1LLE1BQU0sR0FBR0wsa0VBQU0sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDO0FBRXBCLFNBQVNNLFNBQVMsR0FBRztJQUNsQyxNQUFNLEVBQUVDLENBQUMsR0FBRSxHQUFHTCw0REFBYyxDQUFDLFFBQVEsQ0FBQztJQUV0QyxNQUFNLEVBQUVNLEtBQUssR0FBRUMsUUFBUSxHQUFFLEdBQUdSLHFEQUFRLEVBQUU7SUFDdEMsTUFBTVMsTUFBTSxHQUFHUCxzREFBUyxFQUFFO0lBRTFCLE1BQU1RLFdBQVcsR0FBRyxJQUFNRixRQUFRLENBQUNELEtBQUssS0FBSyxPQUFPLEdBQUcsTUFBTSxHQUFHLE9BQU8sQ0FBQztJQUV4RSxNQUFNSSxxQkFBcUIsR0FBRyxDQUFDQyxTQUFpQixHQUFLO1FBQ25ELE1BQU0sRUFBRUMsUUFBUSxHQUFFQyxNQUFNLEdBQUVDLEtBQUssR0FBRSxHQUFHTixNQUFNO1FBQzFDQSxNQUFNLENBQUNPLElBQUksQ0FBQztZQUFFSCxRQUFRO1lBQUVFLEtBQUs7U0FBRSxFQUFFRCxNQUFNLEVBQUU7WUFBRUcsTUFBTSxFQUFFTCxTQUFTO1NBQUUsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRCxNQUFNTSxRQUFRLEdBQUdULE1BQU0sQ0FBQ1EsTUFBTSxLQUFLLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSTtJQUVyRCxxQkFDRSw4REFBQ0UsS0FBRzs7MEJBQ0YsOERBQUNDLElBQUU7MEJBQUVkLENBQUMsQ0FBQyxJQUFJLENBQUM7Ozs7O29CQUFNOzBCQUNsQiw4REFBQ0YsTUFBTTtnQkFBQ2lCLE9BQU8sRUFBRVgsV0FBVzswQkFBR0osQ0FBQyxDQUFDLGNBQWMsQ0FBQzs7Ozs7b0JBQVU7MEJBQzFELDhEQUFDZ0IsUUFBTTtnQkFBQ0QsT0FBTyxFQUFFLElBQU1WLHFCQUFxQixDQUFDTyxRQUFRLENBQUM7MEJBQ25EWixDQUFDLENBQUMsZUFBZSxFQUFFO29CQUFFWSxRQUFRO2lCQUFFLENBQUM7Ozs7O29CQUMxQjs7Ozs7O1lBQ0wsQ0FDTjtBQUNKLENBQUM7QUFFTSxNQUFNSyxrQkFBa0IsR0FBRyxPQUFPLEVBQUVOLE1BQU0sR0FBc0IsR0FBSyxDQUFDO1FBQzNFTyxLQUFLLEVBQUU7WUFDTCxHQUFJLE1BQU1yQiwyRkFBc0IsQ0FBQ2MsTUFBTSxFQUFFO2dCQUFDLFFBQVE7YUFBQyxDQUFDO1NBQ3JEO0tBQ0YsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGh1Yi8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0eWxlZCB9IGZyb20gXCIuLi9zdHlsZXMvc3RpdGNoZXMuY29uZmlnLnRzXCI7XG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gXCJuZXh0LXRoZW1lc1wiO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tIFwibmV4dC1pMThuZXh0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHNlcnZlclNpZGVUcmFuc2xhdGlvbnMgfSBmcm9tIFwibmV4dC1pMThuZXh0L3NlcnZlclNpZGVUcmFuc2xhdGlvbnNcIjtcblxuY29uc3QgQnV0dG9uID0gc3R5bGVkKFwiYnV0dG9uXCIsIHt9KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXhQYWdlKCkge1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKFwiY29tbW9uXCIpO1xuXG4gIGNvbnN0IHsgdGhlbWUsIHNldFRoZW1lIH0gPSB1c2VUaGVtZSgpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCB0b2dnbGVUaGVtZSA9ICgpID0+IHNldFRoZW1lKHRoZW1lID09PSBcImxpZ2h0XCIgPyBcImRhcmtcIiA6IFwibGlnaHRcIik7XG5cbiAgY29uc3Qgb25Ub2dnbGVMYW5ndWFnZUNsaWNrID0gKG5ld0xvY2FsZTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgeyBwYXRobmFtZSwgYXNQYXRoLCBxdWVyeSB9ID0gcm91dGVyO1xuICAgIHJvdXRlci5wdXNoKHsgcGF0aG5hbWUsIHF1ZXJ5IH0sIGFzUGF0aCwgeyBsb2NhbGU6IG5ld0xvY2FsZSB9KTtcbiAgfTtcblxuICBjb25zdCBjaGFuZ2VUbyA9IHJvdXRlci5sb2NhbGUgPT09IFwiZW5cIiA/IFwicnVcIiA6IFwiZW5cIjtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+e3QoXCJoMVwiKX08L2gxPlxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVUaGVtZX0+e3QoXCJjaGFuZ2UtdGhlbWVcIil9PC9CdXR0b24+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uVG9nZ2xlTGFuZ3VhZ2VDbGljayhjaGFuZ2VUbyl9PlxuICAgICAgICB7dChcImNoYW5nZS1sb2NhbGVcIiwgeyBjaGFuZ2VUbyB9KX1cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKHsgbG9jYWxlIH06IHsgbG9jYWxlOiBzdHJpbmcgfSkgPT4gKHtcbiAgcHJvcHM6IHtcbiAgICAuLi4oYXdhaXQgc2VydmVyU2lkZVRyYW5zbGF0aW9ucyhsb2NhbGUsIFtcImNvbW1vblwiXSkpLFxuICB9LFxufSk7XG4iXSwibmFtZXMiOlsic3R5bGVkIiwidXNlVGhlbWUiLCJ1c2VUcmFuc2xhdGlvbiIsInVzZVJvdXRlciIsInNlcnZlclNpZGVUcmFuc2xhdGlvbnMiLCJCdXR0b24iLCJJbmRleFBhZ2UiLCJ0IiwidGhlbWUiLCJzZXRUaGVtZSIsInJvdXRlciIsInRvZ2dsZVRoZW1lIiwib25Ub2dnbGVMYW5ndWFnZUNsaWNrIiwibmV3TG9jYWxlIiwicGF0aG5hbWUiLCJhc1BhdGgiLCJxdWVyeSIsInB1c2giLCJsb2NhbGUiLCJjaGFuZ2VUbyIsImRpdiIsImgxIiwib25DbGljayIsImJ1dHRvbiIsImdldFNlcnZlclNpZGVQcm9wcyIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./styles/stitches.config.ts.ts":
/*!**************************************!*\
  !*** ./styles/stitches.config.ts.ts ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTheme\": () => (/* binding */ createTheme),\n/* harmony export */   \"darkTheme\": () => (/* binding */ darkTheme),\n/* harmony export */   \"getCssText\": () => (/* binding */ getCssText),\n/* harmony export */   \"globalCss\": () => (/* binding */ globalCss),\n/* harmony export */   \"styled\": () => (/* binding */ styled)\n/* harmony export */ });\n/* harmony import */ var _stitches_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stitches/react */ \"@stitches/react\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_stitches_react__WEBPACK_IMPORTED_MODULE_0__]);\n_stitches_react__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst { styled , getCssText , createTheme , globalCss  } = (0,_stitches_react__WEBPACK_IMPORTED_MODULE_0__.createStitches)({\n    theme: {\n        /* ... other tokens */ colors: {\n            text: \"black\",\n            background: \"white\"\n        }\n    }\n});\n// define the dark theme using the de-constructed function\nconst darkTheme = createTheme({\n    colors: {\n        text: \"white\",\n        background: \"black\"\n    }\n});\nconst GlobalStyles = globalCss({\n    body: {\n        //we can call the color token values with the\n        //$ prefix in a string\n        background: \"$background\",\n        color: \"$text\",\n        fontFamily: \"Roboto Mono\"\n    }\n});\n//we can declare the styles here or in pages/_app.tsx\nGlobalStyles();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvc3RpdGNoZXMuY29uZmlnLnRzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFpRDtBQUUxQyxNQUFNLEVBQUVDLE1BQU0sR0FBRUMsVUFBVSxHQUFFQyxXQUFXLEdBQUVDLFNBQVMsR0FBRSxHQUFHSiwrREFBYyxDQUFDO0lBQzNFSyxLQUFLLEVBQUU7UUFDTCxvQkFBb0IsR0FDcEJDLE1BQU0sRUFBRTtZQUNOQyxJQUFJLEVBQUUsT0FBTztZQUNiQyxVQUFVLEVBQUUsT0FBTztTQUNwQjtLQUNGO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsMERBQTBEO0FBQ25ELE1BQU1DLFNBQVMsR0FBR04sV0FBVyxDQUFDO0lBQ25DRyxNQUFNLEVBQUU7UUFDTkMsSUFBSSxFQUFFLE9BQU87UUFDYkMsVUFBVSxFQUFFLE9BQU87S0FDcEI7Q0FDRixDQUFDLENBQUM7QUFFSCxNQUFNRSxZQUFZLEdBQUdOLFNBQVMsQ0FBQztJQUM3Qk8sSUFBSSxFQUFFO1FBQ0osNkNBQTZDO1FBQzdDLHNCQUFzQjtRQUN0QkgsVUFBVSxFQUFFLGFBQWE7UUFDekJJLEtBQUssRUFBRSxPQUFPO1FBQ2RDLFVBQVUsRUFBRSxhQUFhO0tBQzFCO0NBQ0YsQ0FBQztBQUVGLHFEQUFxRDtBQUNyREgsWUFBWSxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saHViLy4vc3R5bGVzL3N0aXRjaGVzLmNvbmZpZy50cy50cz9jODU1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0aXRjaGVzIH0gZnJvbSBcIkBzdGl0Y2hlcy9yZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgeyBzdHlsZWQsIGdldENzc1RleHQsIGNyZWF0ZVRoZW1lLCBnbG9iYWxDc3MgfSA9IGNyZWF0ZVN0aXRjaGVzKHtcbiAgdGhlbWU6IHtcbiAgICAvKiAuLi4gb3RoZXIgdG9rZW5zICovXG4gICAgY29sb3JzOiB7XG4gICAgICB0ZXh0OiBcImJsYWNrXCIsXG4gICAgICBiYWNrZ3JvdW5kOiBcIndoaXRlXCIsXG4gICAgfSxcbiAgfSxcbn0pO1xuXG4vLyBkZWZpbmUgdGhlIGRhcmsgdGhlbWUgdXNpbmcgdGhlIGRlLWNvbnN0cnVjdGVkIGZ1bmN0aW9uXG5leHBvcnQgY29uc3QgZGFya1RoZW1lID0gY3JlYXRlVGhlbWUoe1xuICBjb2xvcnM6IHtcbiAgICB0ZXh0OiBcIndoaXRlXCIsXG4gICAgYmFja2dyb3VuZDogXCJibGFja1wiLFxuICB9LFxufSk7XG5cbmNvbnN0IEdsb2JhbFN0eWxlcyA9IGdsb2JhbENzcyh7XG4gIGJvZHk6IHtcbiAgICAvL3dlIGNhbiBjYWxsIHRoZSBjb2xvciB0b2tlbiB2YWx1ZXMgd2l0aCB0aGVcbiAgICAvLyQgcHJlZml4IGluIGEgc3RyaW5nXG4gICAgYmFja2dyb3VuZDogXCIkYmFja2dyb3VuZFwiLFxuICAgIGNvbG9yOiBcIiR0ZXh0XCIsXG4gICAgZm9udEZhbWlseTogXCJSb2JvdG8gTW9ub1wiLFxuICB9LFxufSk7XG5cbi8vd2UgY2FuIGRlY2xhcmUgdGhlIHN0eWxlcyBoZXJlIG9yIGluIHBhZ2VzL19hcHAudHN4XG5HbG9iYWxTdHlsZXMoKTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVTdGl0Y2hlcyIsInN0eWxlZCIsImdldENzc1RleHQiLCJjcmVhdGVUaGVtZSIsImdsb2JhbENzcyIsInRoZW1lIiwiY29sb3JzIiwidGV4dCIsImJhY2tncm91bmQiLCJkYXJrVGhlbWUiLCJHbG9iYWxTdHlsZXMiLCJib2R5IiwiY29sb3IiLCJmb250RmFtaWx5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/stitches.config.ts.ts\n");

/***/ }),

/***/ "next-i18next":
/*!*******************************!*\
  !*** external "next-i18next" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ "next-i18next/serverSideTranslations":
/*!******************************************************!*\
  !*** external "next-i18next/serverSideTranslations" ***!
  \******************************************************/
/***/ ((module) => {

module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ "next-themes":
/*!******************************!*\
  !*** external "next-themes" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@stitches/react":
/*!**********************************!*\
  !*** external "@stitches/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = import("@stitches/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();