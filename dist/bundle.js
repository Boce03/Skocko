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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gamestate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gamestate */ \"./src/gamestate.js\");\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic */ \"./src/logic.js\");\n/* harmony import */ var _symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./symbol */ \"./src/symbol.js\");\n\n\n\n\nconst add = function(e){\n    let key = e.target.id;\n\n    let index = _gamestate__WEBPACK_IMPORTED_MODULE_0__[\"default\"].filled.findIndex((a) => a === false);\n    if(index == -1){\n        return;\n    }\n    \n    _gamestate__WEBPACK_IMPORTED_MODULE_0__[\"default\"].komb[index] = _symbol__WEBPACK_IMPORTED_MODULE_2__[\"default\"].symbols.get(key);\n    _gamestate__WEBPACK_IMPORTED_MODULE_0__[\"default\"].filled[index] = true;\n    \n    let fldIndex = _gamestate__WEBPACK_IMPORTED_MODULE_0__[\"default\"].row*_gamestate__WEBPACK_IMPORTED_MODULE_0__[\"default\"].numOfFld + index;\n    let fld = document.getElementById(`${fldIndex}`);\n    fld.style.backgroundImage = `url(${_symbol__WEBPACK_IMPORTED_MODULE_2__[\"default\"].images[_symbol__WEBPACK_IMPORTED_MODULE_2__[\"default\"].symbols.get(key)]})`;\n    fld.style.backgroundSize = 'cover';\n    \n    console.log(_gamestate__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n}\n\nconst remove = function(e){\n    let fld = e.target;\n    let index = Number.parseInt(fld.id) % _gamestate__WEBPACK_IMPORTED_MODULE_0__[\"default\"].numOfFld;\n    _gamestate__WEBPACK_IMPORTED_MODULE_0__[\"default\"].filled[index] = false;\n    fld.style.backgroundImage = 'none';\n\n    console.log(_gamestate__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n}\n\nconst submit = function(e){\n    if(_logic__WEBPACK_IMPORTED_MODULE_1__[\"default\"].check()){\n        _gamestate__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameOver();\n    } else{\n        _gamestate__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nextRow();\n        if(_gamestate__WEBPACK_IMPORTED_MODULE_0__[\"default\"].row === _gamestate__WEBPACK_IMPORTED_MODULE_0__[\"default\"].numOfSym){\n            _gamestate__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameOver();\n        }\n    }\n\n    console.log(_gamestate__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    add,\n    remove,\n    submit\n});\n\n//# sourceURL=webpack://skocko/./src/actions.js?");

/***/ }),

/***/ "./src/event.js":
/*!**********************!*\
  !*** ./src/event.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst addEvent = function(getElements, foo, event){\n    let elements = getElements();\n    for(let elem of elements){\n        elem.addEventListener(event, foo);\n    }\n}\n\nconst removeEvent = function(getElements, foo,event){\n    let elements = getElements();\n    for(let elem of elements){\n        elem.removeEventListener(event, foo);\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    addEvent,\n    removeEvent\n});\n\n//# sourceURL=webpack://skocko/./src/event.js?");

/***/ }),

/***/ "./src/gamestate.js":
/*!**************************!*\
  !*** ./src/gamestate.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ \"./src/logic.js\");\n/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer */ \"./src/timer.js\");\n/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event */ \"./src/event.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ \"./src/actions.js\");\n\n\n\n\n\nconst numOfFld = 4;\nconst numOfSym = 6;\nconst gameDuration = 60; //in seconds\nlet komb = [];\nlet filled = [];\nlet row;\n\nconst resetFields = function(){\n    let fields = document.querySelectorAll(`div.fld-hover`);\n    for(let fld of fields){\n        fld.style.backgroundImage = 'none';\n    }\n\n    fields = document.querySelectorAll(`div.right-row .field`);\n    for(let fld of fields){\n        fld.style.backgroundColor = 'cornflowerblue';\n    }\n\n    fields = document.querySelectorAll(`div#answer .field`);\n    for(let fld of fields){\n        fld.style.backgroundImage = 'none';\n    }\n};\n\nconst resetState = function(){\n    resetFields();\n    komb = [];\n    filled = new Array(numOfFld).fill(false);\n    row = 0;\n    _logic__WEBPACK_IMPORTED_MODULE_0__[\"default\"].generate();\n    \n    \n    let timerDiv = document.querySelector('.timer-inner');\n    timerDiv.style.height = '0px';\n    _timer__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init(gameDuration, timerDiv);\n    _timer__WEBPACK_IMPORTED_MODULE_1__[\"default\"].start();\n\n    \n    _event__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addEvent(function(){\n        return document.querySelectorAll('div.right-bottom-container .btn');\n    }, _actions__WEBPACK_IMPORTED_MODULE_3__[\"default\"].add, 'click');\n\n    _event__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addEvent(function(){\n        return document.querySelectorAll('div#fld-0 div.fld-hover');\n    }, _actions__WEBPACK_IMPORTED_MODULE_3__[\"default\"].remove, 'click');\n\n    _event__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addEvent(function(){\n        return document.querySelectorAll('div#fld-0 .btn');\n    }, _actions__WEBPACK_IMPORTED_MODULE_3__[\"default\"].submit, 'click');\n\n    _event__WEBPACK_IMPORTED_MODULE_2__[\"default\"].removeEvent(function(){\n        return document.querySelectorAll('#start');\n    }, resetState, 'click');\n}\n\nconst nextRow = function(){\n    _event__WEBPACK_IMPORTED_MODULE_2__[\"default\"].removeEvent(function(){\n        return document.querySelectorAll(`div#fld-${row} div.fld-hover`);\n    }, _actions__WEBPACK_IMPORTED_MODULE_3__[\"default\"].remove, 'click');\n\n    _event__WEBPACK_IMPORTED_MODULE_2__[\"default\"].removeEvent(function(){\n        return document.querySelectorAll(`div#fld-${row} .btn`);\n    }, _actions__WEBPACK_IMPORTED_MODULE_3__[\"default\"].submit, 'click');\n    \n    row++;\n    filled.fill(false);\n\n    _event__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addEvent(function(){\n        return document.querySelectorAll(`div#fld-${row} div.fld-hover`);\n    }, _actions__WEBPACK_IMPORTED_MODULE_3__[\"default\"].remove, 'click');\n\n    _event__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addEvent(function(){\n        return document.querySelectorAll(`div#fld-${row} .btn`);\n    }, _actions__WEBPACK_IMPORTED_MODULE_3__[\"default\"].submit, 'click');\n}\n\nconst gameOver = function(){\n    _logic__WEBPACK_IMPORTED_MODULE_0__[\"default\"].showAnswer();\n    _timer__WEBPACK_IMPORTED_MODULE_1__[\"default\"].stop();\n\n    if(row < numOfSym){\n        _event__WEBPACK_IMPORTED_MODULE_2__[\"default\"].removeEvent(function(){\n            return document.querySelectorAll(`div#fld-${row} div.fld-hover`);\n        }, _actions__WEBPACK_IMPORTED_MODULE_3__[\"default\"].remove, 'click');\n    \n        _event__WEBPACK_IMPORTED_MODULE_2__[\"default\"].removeEvent(function(){\n            return document.querySelectorAll(`div#fld-${row} .btn`);\n        }, _actions__WEBPACK_IMPORTED_MODULE_3__[\"default\"].submit, 'click');\n    }\n\n    _event__WEBPACK_IMPORTED_MODULE_2__[\"default\"].removeEvent(function(){\n        return document.querySelectorAll('div.right-bottom-container .btn');\n    }, _actions__WEBPACK_IMPORTED_MODULE_3__[\"default\"].add, 'click');\n\n    _event__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addEvent(function(){\n        return document.querySelectorAll('#start');\n    }, resetState, 'click');\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n                numOfFld,\n                numOfSym,\n                gameDuration,\n                get filled() {return filled;},\n                get komb() {return komb;},\n                get row() {return row;},\n                resetState, \n                nextRow,\n                gameOver\n            });\n\n\n\n//# sourceURL=webpack://skocko/./src/gamestate.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gamestate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gamestate */ \"./src/gamestate.js\");\n\n\nconsole.log(\"uspesno ucitano\");\n\nlet btnStartGame = document.getElementById('start');\nbtnStartGame.addEventListener('click', _gamestate__WEBPACK_IMPORTED_MODULE_0__[\"default\"].resetState);\nconsole.log(_gamestate__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://skocko/./src/index.js?");

/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gamestate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gamestate */ \"./src/gamestate.js\");\n/* harmony import */ var _symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./symbol */ \"./src/symbol.js\");\n\n\n\nlet target = [\n    {\n        used: false,\n        symbol: -1\n    },\n    {\n        used: false,\n        symbol: -1\n    },\n    {\n        used: false,\n        symbol: -1\n    },\n    {\n        used: false,\n        symbol: -1\n    }\n];\n\nconst generate = function(){\n    for(let i = 0; i < target.length; i++){\n        target[i].symbol = Math.floor(Math.random() * _gamestate__WEBPACK_IMPORTED_MODULE_0__[\"default\"].numOfSym);\n    }\n\n    console.log(target);\n}\n\nconst check = function(){\n    let red = 0;\n    let yellow = 0;\n\n    for(let i = 0; i < target.length; i++){\n        target[i].used = false;\n    }\n\n    console.log('provera');\n    console.log(_gamestate__WEBPACK_IMPORTED_MODULE_0__[\"default\"].komb);\n\n    for(let i = 0; i < target.length; i++){\n        if(target[i].symbol === _gamestate__WEBPACK_IMPORTED_MODULE_0__[\"default\"].komb[i]){\n            red++;\n            target[i].used = true;\n        }\n    }\n\n    for(let i = 0; i < target.length; i++){\n        if(target[i].symbol !== _gamestate__WEBPACK_IMPORTED_MODULE_0__[\"default\"].komb[i]){\n            let index = target.findIndex(a => ((a.symbol === _gamestate__WEBPACK_IMPORTED_MODULE_0__[\"default\"].komb[i]) && !a.used));\n            if(index !== -1){\n                yellow++;\n                target[index].used = true;\n            }\n        }\n    }\n\n    let isWin = red === _gamestate__WEBPACK_IMPORTED_MODULE_0__[\"default\"].numOfFld;\n    \n    let fields = document.getElementById(`rez-${_gamestate__WEBPACK_IMPORTED_MODULE_0__[\"default\"].row}`).children;\n    for(let fld of fields){\n        if(red > 0){\n            fld.style.backgroundColor = 'red';\n            red--;\n        } else if(yellow > 0){\n            fld.style.backgroundColor = 'yellow';\n            yellow--;\n        }\n    }\n\n    return isWin;\n};\n\nconst showAnswer = function(){\n    for(let i = 0; i < target.length; i++){\n        let fld = document.getElementById(`answer-${i}`);\n        fld.style.backgroundImage = `url(${_symbol__WEBPACK_IMPORTED_MODULE_1__[\"default\"].images[target[i].symbol]})`;\n        fld.style.backgroundSize = 'cover';\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    generate,\n    check,\n    showAnswer\n});\n\n//# sourceURL=webpack://skocko/./src/logic.js?");

/***/ }),

/***/ "./src/symbol.js":
/*!***********************!*\
  !*** ./src/symbol.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst images = ['../images/Pik.png', '../images/Karo.png', '../images/Skocko.png', \n    '../images/Tref.png', '../images/Herc.png', '../images/Zvezda.png'];\n\nconst symbols = new Map();\nsymbols.set('pik', 0);\nsymbols.set('karo', 1);\nsymbols.set('skocko', 2);\nsymbols.set('tref', 3);\nsymbols.set('herc', 4);\nsymbols.set('zvezda', 5);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    images,\n    symbols\n});\n\n//# sourceURL=webpack://skocko/./src/symbol.js?");

/***/ }),

/***/ "./src/timer.js":
/*!**********************!*\
  !*** ./src/timer.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gamestate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gamestate */ \"./src/gamestate.js\");\n\n\nlet timerWidthNumerator;\nlet timerWidthDenumerator;\n\nlet timer = null;\nlet timerDiv;\n\n//add colors based on time left\nfunction update(){\n    if(timerWidthNumerator <= timerWidthDenumerator){\n        timerWidthNumerator += 10;\n        const tmpTimerWidth = timerWidthNumerator / timerWidthDenumerator;\n        timerDiv.style.height = (tmpTimerWidth*100) + \"%\";\n    } else{\n        _gamestate__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameOver();\n    }\n}\n\nconst init = function(gameDuration, div){\n    timerDiv = div;\n    timerWidthNumerator = 0;\n    timerWidthDenumerator = gameDuration * 1000;\n}\n\nconst start = function(){\n    timer = setInterval(update, 10);\n}\n\nconst stop = function(){\n    if(timer !== null){\n        clearInterval(timer);\n        timer = null;\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    init,\n    start,\n    stop\n});\n\n//# sourceURL=webpack://skocko/./src/timer.js?");

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