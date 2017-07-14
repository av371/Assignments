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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

const a = document.getElementById("button1");
a.addEventListener("click", decodeSequence);

function decodeSequence() {

  const num = document.getElementById('decode').value.split('');

  let counter = 0;
  let initial = parseInt(num[0]);
  const array = [];
  let i;
  let new_num = 0;
  let check = 0;
  while (counter < num.length) {
    new_num = decode(counter, initial);
    counter += initial + 1;
    initial = parseInt(num[counter]);
    array.push(new_num);
    check += new_num;
  }

  function decode(a, b) {
    const value = [];
    let val = 0;
    if (a + 1 + b <= num.length) {
      for (i = a + 1; i < a + 1 + b; i++) {
        value.push(parseInt(num[i]));
      }
      val = value.join("");
    } else {
      for (i = a + 1; i < num.length; i++) {
        value.push(parseInt(num[i]));
      }
      val = value.join("");
    }
    return val;
  }
  if (check % 2 === 0) {
    document.getElementById('result').innerHTML = "even";
  } else {
    document.getElementById('result').innerHTML = "odd";
  }
}

/***/ })
/******/ ]);