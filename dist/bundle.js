/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fun__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fun */ \"./src/fun.js\");\n/* harmony import */ var _fun__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fun__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _test_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test.html */ \"./src/test.html\");\n/* harmony import */ var _test_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_test_html__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _test2_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test2.html */ \"./src/test2.html\");\n/* harmony import */ var _test2_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_test2_html__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n_fun__WEBPACK_IMPORTED_MODULE_0___default()();\r\n\r\ndocument.querySelector(\"#root\").innerHTML = _test_html__WEBPACK_IMPORTED_MODULE_1___default.a + _test2_html__WEBPACK_IMPORTED_MODULE_2___default.a;\r\n\r\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/fun.js":
/*!********************!*\
  !*** ./src/fun.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nconst sayHello = () => {\r\n    return \"Hello\";\r\n}\r\n\r\nmodule.exports = sayHello;\n\n//# sourceURL=webpack:///./src/fun.js?");

/***/ }),

/***/ "./src/test.html":
/*!***********************!*\
  !*** ./src/test.html ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<h1>This is a component</h1>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack:///./src/test.html?");

/***/ }),

/***/ "./src/test2.html":
/*!************************!*\
  !*** ./src/test2.html ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<h1>This is another component</h1>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack:///./src/test2.html?");

/***/ })

/******/ });