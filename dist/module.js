/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
define(["@grafana/data","react"], (__WEBPACK_EXTERNAL_MODULE__grafana_data__, __WEBPACK_EXTERNAL_MODULE_react__) => { return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./components/SimplePanel.tsx":
/*!************************************!*\
  !*** ./components/SimplePanel.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SimplePanel\": () => (/* binding */ SimplePanel)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst SimplePanel = ({ options , data , width , height  })=>{\n    const { text  } = options;\n    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"Text option value: \", text)));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpbXBsZVBhbmVsLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEI7QUFPbkIsTUFBTUMsY0FBK0IsQ0FBQyxFQUFFQyxRQUFPLEVBQUVDLEtBQUksRUFBRUMsTUFBSyxFQUFFQyxPQUFNLEVBQUUsR0FBSztJQUNoRixNQUFNLEVBQUVDLEtBQUksRUFBRSxHQUFHSjtJQUNqQixxQkFDRSwyREFBQ0ssMkJBQ0MsMkRBQUNBLDJCQUNDLDJEQUFDQSxhQUFJLHVCQUFvQkQ7QUFJakMsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2ltcGxlUGFuZWwudHN4PzIyMWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFBhbmVsUHJvcHMgfSBmcm9tICdAZ3JhZmFuYS9kYXRhJztcbmltcG9ydCB7IFNpbXBsZU9wdGlvbnMgfSBmcm9tICd0eXBlcyc7XG5cblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgUGFuZWxQcm9wczxTaW1wbGVPcHRpb25zPiB7fVxuXG5leHBvcnQgY29uc3QgU2ltcGxlUGFuZWw6IFJlYWN0LkZDPFByb3BzPiA9ICh7IG9wdGlvbnMsIGRhdGEsIHdpZHRoLCBoZWlnaHQgfSkgPT4geyAgXG4gIGNvbnN0IHsgdGV4dCB9ID0gb3B0aW9ucztcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdj4gICAgICAgXG4gICAgICAgIDxkaXY+VGV4dCBvcHRpb24gdmFsdWU6IHt0ZXh0fTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiU2ltcGxlUGFuZWwiLCJvcHRpb25zIiwiZGF0YSIsIndpZHRoIiwiaGVpZ2h0IiwidGV4dCIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SimplePanel.tsx\n");

/***/ }),

/***/ "./module.ts":
/*!*******************!*\
  !*** ./module.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"plugin\": () => (/* binding */ plugin)\n/* harmony export */ });\n/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/data */ \"@grafana/data\");\n/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_SimplePanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/SimplePanel */ \"./components/SimplePanel.tsx\");\n\n\nconst plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__.PanelPlugin(_components_SimplePanel__WEBPACK_IMPORTED_MODULE_1__.SimplePanel).setPanelOptions((builder)=>{\n    return builder.addTextInput({\n        path: 'text',\n        name: 'Simple text option',\n        description: 'Description of panel option',\n        defaultValue: 'Default value of text input option'\n    }).addBooleanSwitch({\n        path: 'showSeriesCount',\n        name: 'Show series counter',\n        defaultValue: false\n    }).addRadio({\n        path: 'seriesCountSize',\n        defaultValue: 'sm',\n        name: 'Series counter size',\n        settings: {\n            options: [\n                {\n                    value: 'sm',\n                    label: 'Small'\n                },\n                {\n                    value: 'md',\n                    label: 'Medium'\n                },\n                {\n                    value: 'lg',\n                    label: 'Large'\n                }\n            ]\n        },\n        showIf: (config)=>config.showSeriesCount\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb2R1bGUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE0QztBQUVXO0FBRWhELE1BQU1FLFNBQVMsSUFBSUYsc0RBQVdBLENBQWdCQyxnRUFBV0EsRUFBRUUsZUFBZSxDQUFDLENBQUNDLFVBQVk7SUFDN0YsT0FBT0EsUUFDSkMsWUFBWSxDQUFDO1FBQ1pDLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxhQUFhO1FBQ2JDLGNBQWM7SUFDaEIsR0FDQ0MsZ0JBQWdCLENBQUM7UUFDaEJKLE1BQU07UUFDTkMsTUFBTTtRQUNORSxjQUFjLEtBQUs7SUFDckIsR0FDQ0UsUUFBUSxDQUFDO1FBQ1JMLE1BQU07UUFDTkcsY0FBYztRQUNkRixNQUFNO1FBQ05LLFVBQVU7WUFDUkMsU0FBUztnQkFDUDtvQkFDRUMsT0FBTztvQkFDUEMsT0FBTztnQkFDVDtnQkFDQTtvQkFDRUQsT0FBTztvQkFDUEMsT0FBTztnQkFDVDtnQkFDQTtvQkFDRUQsT0FBTztvQkFDUEMsT0FBTztnQkFDVDthQUNEO1FBQ0g7UUFDQUMsUUFBUSxDQUFDQyxTQUFXQSxPQUFPQyxlQUFlO0lBQzVDO0FBQ0osR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL21vZHVsZS50cz9jMjE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhbmVsUGx1Z2luIH0gZnJvbSAnQGdyYWZhbmEvZGF0YSc7XG5pbXBvcnQgeyBTaW1wbGVPcHRpb25zIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBTaW1wbGVQYW5lbCB9IGZyb20gJy4vY29tcG9uZW50cy9TaW1wbGVQYW5lbCc7XG5cbmV4cG9ydCBjb25zdCBwbHVnaW4gPSBuZXcgUGFuZWxQbHVnaW48U2ltcGxlT3B0aW9ucz4oU2ltcGxlUGFuZWwpLnNldFBhbmVsT3B0aW9ucygoYnVpbGRlcikgPT4ge1xuICByZXR1cm4gYnVpbGRlclxuICAgIC5hZGRUZXh0SW5wdXQoe1xuICAgICAgcGF0aDogJ3RleHQnLFxuICAgICAgbmFtZTogJ1NpbXBsZSB0ZXh0IG9wdGlvbicsXG4gICAgICBkZXNjcmlwdGlvbjogJ0Rlc2NyaXB0aW9uIG9mIHBhbmVsIG9wdGlvbicsXG4gICAgICBkZWZhdWx0VmFsdWU6ICdEZWZhdWx0IHZhbHVlIG9mIHRleHQgaW5wdXQgb3B0aW9uJyxcbiAgICB9KVxuICAgIC5hZGRCb29sZWFuU3dpdGNoKHtcbiAgICAgIHBhdGg6ICdzaG93U2VyaWVzQ291bnQnLFxuICAgICAgbmFtZTogJ1Nob3cgc2VyaWVzIGNvdW50ZXInLFxuICAgICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgICB9KVxuICAgIC5hZGRSYWRpbyh7XG4gICAgICBwYXRoOiAnc2VyaWVzQ291bnRTaXplJyxcbiAgICAgIGRlZmF1bHRWYWx1ZTogJ3NtJyxcbiAgICAgIG5hbWU6ICdTZXJpZXMgY291bnRlciBzaXplJyxcbiAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB2YWx1ZTogJ3NtJyxcbiAgICAgICAgICAgIGxhYmVsOiAnU21hbGwnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFsdWU6ICdtZCcsXG4gICAgICAgICAgICBsYWJlbDogJ01lZGl1bScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB2YWx1ZTogJ2xnJyxcbiAgICAgICAgICAgIGxhYmVsOiAnTGFyZ2UnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgc2hvd0lmOiAoY29uZmlnKSA9PiBjb25maWcuc2hvd1Nlcmllc0NvdW50LFxuICAgIH0pO1xufSk7XG4iXSwibmFtZXMiOlsiUGFuZWxQbHVnaW4iLCJTaW1wbGVQYW5lbCIsInBsdWdpbiIsInNldFBhbmVsT3B0aW9ucyIsImJ1aWxkZXIiLCJhZGRUZXh0SW5wdXQiLCJwYXRoIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiZGVmYXVsdFZhbHVlIiwiYWRkQm9vbGVhblN3aXRjaCIsImFkZFJhZGlvIiwic2V0dGluZ3MiLCJvcHRpb25zIiwidmFsdWUiLCJsYWJlbCIsInNob3dJZiIsImNvbmZpZyIsInNob3dTZXJpZXNDb3VudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./module.ts\n");

/***/ }),

/***/ "@grafana/data":
/*!********************************!*\
  !*** external "@grafana/data" ***!
  \********************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_data__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./module.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});;