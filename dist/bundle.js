/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/actions.js":
/*!************************!*\
  !*** ./src/actions.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gamestate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gamestate */ \"./src/gamestate.js\");\n\n\nconst images = ['../images/Pik.png', '../images/Karo.png', '../images/Skocko.png', \n    '../images/Tref.png', '../images/Herc.png', '../images/Zvezda.png'];\n\nconst symbols = new Map();\nsymbols.set('pik', 0);\nsymbols.set('karo', 1);\nsymbols.set('skocko', 2);\nsymbols.set('tref', 3);\nsymbols.set('herc', 4);\nsymbols.set('zvezda', 5);\n\n\n\nconst add = function(e){\n    let key = e.target.id;\n\n    let index = _gamestate__WEBPACK_IMPORTED_MODULE_0__[\"default\"].filled.findIndex((a) => a === false);\n    if(index == -1){\n        return;\n    }\n    \n    _gamestate__WEBPACK_IMPORTED_MODULE_0__[\"default\"].komb[index] = symbols.get(key);\n    _gamestate__WEBPACK_IMPORTED_MODULE_0__[\"default\"].filled[index] = true;\n    \n    let fldIndex = _gamestate__WEBPACK_IMPORTED_MODULE_0__[\"default\"].row*_gamestate__WEBPACK_IMPORTED_MODULE_0__[\"default\"].numOfFld + index;\n    let fld = document.getElementById(`${fldIndex}`);\n    fld.style.backgroundImage = `url(${images[symbols.get(key)]})`;\n    fld.style.backgroundSize = 'cover';\n    \n    console.log(_gamestate__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n}\n\nconst remove = function(e){\n    let fld = e.target;\n    let index = Number.parseInt(fld.id) % _gamestate__WEBPACK_IMPORTED_MODULE_0__[\"default\"].numOfFld;\n    _gamestate__WEBPACK_IMPORTED_MODULE_0__[\"default\"].filled[index] = false;\n    fld.style.backgroundImage = 'none';\n\n    console.log(_gamestate__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n}\n\n/* just testing add and remove on more rows */\nconst submit = function(e){\n    /*need to add check and result of check*/\n    _gamestate__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nextRow();\n    console.log(_gamestate__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    add,\n    remove,\n    submit\n});\n\n//# sourceURL=webpack://skocko/./src/actions.js?");

/***/ }),

/***/ "./src/gamestate.js":
/*!**************************!*\
  !*** ./src/gamestate.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst numOfFld = 4;\nlet komb = [];\nlet filled = [];\nlet row;\n\nconst resetState = function(){\n    komb = [];\n    filled = new Array(numOfFld).fill(false);\n    row = 0;\n}\n\nconst nextRow = function(){\n    row++;\n    filled.fill(false);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n                numOfFld,\n                get filled() {return filled;},\n                get komb() {return komb},\n                get row() {return row},\n                resetState, \n                nextRow\n            });\n\n\n\n//# sourceURL=webpack://skocko/./src/gamestate.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gamestate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gamestate */ \"./src/gamestate.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ \"./src/actions.js\");\n\n\n\nconsole.log(\"uspesno ucitano\");\n\n\n/*\n    refactoring addEvent and removeEvent, first idea just one funciton and new module for initialise;\n    this is just for testing add and remove functionality\n*/\nconst addEvent = function(getElements, foo){\n    let btnSymbols = getElements();\n    for(let btn of btnSymbols){\n        btn.addEventListener('click', foo);\n    }\n}\n\n/*document.querySelectorAll('div.right-bottom-container .btn');\nconst removeEvent = function(foo){\n    let btnSymbols = document.querySelectorAll('div.left-container div.fld-hover');\n    for(let btn of btnSymbols){\n        btn.addEventListener('click', foo);\n    }\n}*/\n\n_gamestate__WEBPACK_IMPORTED_MODULE_0__[\"default\"].resetState();\nconsole.log(_gamestate__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\naddEvent(function(){\n    return document.querySelectorAll('div.right-bottom-container .btn');\n}, _actions__WEBPACK_IMPORTED_MODULE_1__[\"default\"].add);\n\naddEvent(function(){\n    return document.querySelectorAll('div.left-container div.fld-hover');\n}, _actions__WEBPACK_IMPORTED_MODULE_1__[\"default\"].remove);\n\naddEvent(function(){\n    return document.querySelectorAll('div.left-row .btn');\n}, _actions__WEBPACK_IMPORTED_MODULE_1__[\"default\"].submit);\n\n//# sourceURL=webpack://skocko/./src/index.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;