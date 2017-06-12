(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require(undefined));
	else if(typeof define === 'function' && define.amd)
		define("Visible", [], factory);
	else if(typeof exports === 'object')
		exports["Visible"] = factory(require(undefined));
	else
		root["eg"] = root["eg"] || {}, root["eg"]["Visible"] = factory(root["eg"]["Component"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__egjs_component__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__egjs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__egjs_component__);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Copyright (c) NAVER Corp.
 * egjs-visible projects are licensed under the MIT license
 */


var EVENTS = {
	"change": "change"
};

/**
 * A Class used to check whether an element is visible in the base element or viewport.
 * @ko 엘리먼트가 기준 엘리먼트나 뷰포트 안에 보이는지 확인하는 클래스
 * @alias eg.Visible
 * @extends eg.Component
 *
 * @support {"ie": "7+", "ch" : "latest", "ff" : "latest",  "sf" : "latest", "edge" : "latest", "ios" : "7+", "an" : "2.1+ (except 3.x)"}
 * @codepen {"id":"WbWzqq", "ko":"Visible 기본 예제", "en":"Visible basic example", "collectionId":"Ayrabj", "height" : 403}
 */

var Visible = function (_Component) {
	_inherits(Visible, _Component);

	/**
  * @param {HTMLElement|String|jQuery} [element=document] A base element that detects if another element is visible<ko>엘리먼트가 보이는 기준 엘리먼트</ko>
  * @param {Object} options The option object of the Visible module<ko>Visible 모듈의 옵션 객체</ko>
  * @param {String} [options.targetClass="check_visible"] The class name of the element to be checked<ko>보이는지 확인할 엘리먼트의 클래스 이름</ko>
  * @param {Number} [options.expandSize=0] The size of the expanded area to be checked whether an element is visible. If this value is less than zero, the size of the area is smaller than that of the base element. <ko>기준 엘리먼트의 경계를 넘어 엘리먼트가 보이는지 확인할 영역의 크기. 값이 0보다 작으면 엘리먼트가 보이는지 확인할 영역의 크기가 기준 엘리먼트보다 작아진다</ko>
  */
	function Visible(element, options, _prefix) {
		_classCallCheck(this, Visible);

		var _this = _possibleConstructorReturn(this, (Visible.__proto__ || Object.getPrototypeOf(Visible)).call(this));

		_this._prefix = _prefix || "";
		_this.options = {
			targetClass: "check_visible",
			expandSize: 0
		};
		Object.assign(_this.options, options);

		if (element === undefined) {
			_this._wrapper = document;
		}if ((typeof element === "undefined" ? "undefined" : _typeof(element)) === "object") {
			_this._wrapper = element;
		} else if (typeof element === "string") {
			_this._wrapper = document.querySelector(element);
		}

		// this._wrapper is Element, or may be Window
		if (_this._wrapper.nodeType && _this._wrapper.nodeType === 1) {
			_this._getAreaRect = _this._getWrapperRect;
		} else {
			_this._getAreaRect = Visible._getWindowRect;
		}

		_this._targets = [];
		_this._timer = null;
		_this._supportElementsByClassName = function () {
			var dummy = document.createElement("div");

			if (!dummy.getElementsByClassName) {
				return false;
			}

			var dummies = dummy.getElementsByClassName("dummy");

			dummy.innerHTML = "<span class='dummy'></span>";
			return dummies.length === 1;
		}();

		_this.refresh();
		return _this;
	}

	_createClass(Visible, [{
		key: "refresh",


		/**
   * Updates the list of elements where the visibility property is to be checked
   * @ko visibility 속성을 검사할 엘리먼트의 목록을 갱신한다
   * @return {eg.Visible} An instance of a module itself<ko>모듈 자신의 인스턴스</ko>
   *
   * @remark
   * If targets was added or removed from DOM tree, must call refresh method to update internal target list.
   * <ko>확인 대상이 영역 안에 추가되거나 삭제된 경우, 모듈내부에서 사용하는 확인 대상 목록을 이 메소드를 호출하여 갱신해야한다.<ko>
   */
		value: function refresh() {
			var _this2 = this;

			if (this._supportElementsByClassName) {
				this._targets = this._wrapper.getElementsByClassName(this.options.targetClass);
				this.refresh = function () {
					return _this2;
				};
			} else {
				this.refresh = function () {
					_this2._targets = _this2._wrapper.querySelector(_this2.option.targetClass);
					return _this2;
				};
			}
			return this.refresh();
		}

		/**
   * Checks whether the visible of the target elements has changed. It trigger that change event on a component.
   * @ko 대상 엘리먼트의 가시성이 변경됐는지 체크한다. change 이벤트를 발생한다.
   * @param {Number} [delay=-1] Delay time. It delay that change event trigger.<ko>지연시간. change 이벤트 발생을 지연한다.</ko>
   * @param {Boolean} [containment=false] Whether to check only elements that are completely contained within the reference area.<ko>기준 영역 안에 완전히 포함된 엘리먼트만 체크할지 여부.</ko>
   * @return {eg.Visible} An instance of a module itself<ko>모듈 자신의 인스턴스</ko>
   */

	}, {
		key: "check",
		value: function check() {
			var _this3 = this;

			var delay = arguments.length <= 0 ? undefined : arguments[0];
			var containment = arguments.length <= 1 ? undefined : arguments[1];

			if (typeof delay !== "number") {
				containment = delay;
				delay = -1;
			}

			if (typeof delay === "undefined") {
				delay = -1;
			}

			if (typeof containment === "undefined") {
				containment = false;
			}

			clearTimeout(this._timer);
			if (delay < 0) {
				this._check(containment);
			} else {
				this._timer = setTimeout(function () {
					_this3._check(containment);
					_this3._timer = null;
				}, delay);
			}
			return this;
		}
	}, {
		key: "_getWrapperRect",
		value: function _getWrapperRect() {
			return this._wrapper.getBoundingClientRect();
		}
	}, {
		key: "_reviseElements",
		value: function _reviseElements() {
			var _this4 = this;

			for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
				params[_key] = arguments[_key];
			}

			if (this._supportElementsByClassName) {
				this._reviseElements = function () {
					return true;
				};
			} else {
				this._reviseElements = function (target, i) {
					if (Visible._hasClass(params[0], _this4.options.targetClass)) {
						target.__VISIBLE__ = null;
						_this4._targets.splice(i, 1);
						return false;
					}
					return true;
				};
			}
			return this._reviseElements.apply(this, params);
		}
	}, {
		key: "_check",
		value: function _check(containment) {
			var expandSize = parseInt(this.options.expandSize, 10);
			var visibles = [];
			var invisibles = [];

			var i = void 0;
			var target = void 0;
			var targetArea = void 0;
			var before = void 0;
			var after = void 0;

			// Error Fix: Cannot set property top of #<ClientRect> which has only a getter
			var rect = this._getAreaRect();
			var area = {
				top: rect.top - expandSize,
				left: rect.left - expandSize,
				bottom: rect.bottom + expandSize,
				right: rect.right + expandSize
			};

			for (i = this._targets.length - 1; target = this._targets[i]; i--) {
				targetArea = target.getBoundingClientRect();

				if (targetArea.width === 0 && targetArea.height === 0) {
					continue;
				}

				if (this._reviseElements(target, i)) {
					before = !!target.__VISIBLE__;

					if (containment) {
						after = !(targetArea.top < area.top || targetArea.bottom > area.bottom || targetArea.right > area.right || targetArea.left < area.left);
						target.__VISIBLE__ = after;
					} else {
						after = !(targetArea.bottom < area.top || area.bottom < targetArea.top || targetArea.right < area.left || area.right < targetArea.left);
						target.__VISIBLE__ = after;
					}

					if (before !== after) {
						if (after) {
							visibles.unshift(target);
						} else {
							invisibles.unshift(target);
						}
					}
				}
			}
			/**
    * This event is fired when the event is compared with the last verified one and there is an element of which the visibility property has changed.
    * @ko 마지막으로 확인한 결과와 비교해 visibility 속성이 변경된 엘리먼트가 있을 때 발생하는 이벤트
    * @event eg.Visible#change
    * @param {Array} visible Visible elements  (the element type is `HTMLElement`) <ko>보이게 된 엘리먼트들</ko>
    * @param {Array} invisible Invisible elements  (the element type is `HTMLElement`) <ko>안 보이게 된 엘리먼트들</ko>
    */
			this.trigger(this._prefix + EVENTS.change, {
				visible: visibles,
				invisible: invisibles
			});
		}
	}, {
		key: "destroy",
		value: function destroy() {
			this.off();
			this._targets = [];
			this._wrapper = null;
			this._timer = null;
		}

		/**
   * A jQuery custom event of the Visible module. This event is fired when the event is compared with the last verified one and there is an element of which the visibility property has changed.
   *
   * @ko Visible 모듈의 jQuery 커스텀 이벤트. 마지막으로 확인한 결과와 비교해 visibility 속성이 변경된 엘리먼트가 있을 때 발생한다
   * @name jQuery#visible:change
   * @event
   * @example
   // create
   $("body").visible();
   // event
   $("body").on("visible:change",callback);
   $("body").off("visible:change",callback);
   $("body").trigger("visible:change",callback);
   * @see Visble
   */
		/**
   * A jQuery plugin available in the Visible module.
   * @ko Visible 모듈의 jQuery 플러그인
   * @method jQuery.visible
   * @example
   // create
   $("body").visible();
   // event
   $("body").on("visible:change",callback);
   $("body").off("visible:change",callback);
   $("body").trigger("visible:change",callback);
   // method
   $("body").visible("option","circular",true); //Set option
   $("body").visible("instance"); // Return flicking instance
   $("body").visible("check",10); // Check to change target elements.
   * @see Visble#event:change
   */

	}], [{
		key: "_hasClass",
		value: function _hasClass(el, className) {
			if (el.classList) {
				return el.classList.contains(className);
			} else {
				return new RegExp("(^| )" + className + "( |$)", "gi").test(el.className);
			}
		}
	}, {
		key: "_getWindowRect",
		value: function _getWindowRect() {
			// [IE7] document.documentElement.clientHeight has always value 0 (bug)
			return {
				top: 0,
				left: 0,
				bottom: document.documentElement.clientHeight || document.body.clientHeight,
				right: document.documentElement.clientWidth || document.body.clientWidth
			};
		}
	}]);

	return Visible;
}(__WEBPACK_IMPORTED_MODULE_0__egjs_component___default.a);

/* harmony default export */ __webpack_exports__["a"] = (Visible);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__visible__ = __webpack_require__(0);


__WEBPACK_IMPORTED_MODULE_0__visible__["a" /* default */].VERSION = "2.0.0-rc.2";
module.exports = __WEBPACK_IMPORTED_MODULE_0__visible__["a" /* default */];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)(module)))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA0MjJjMTk5ZjYwMjM2OTQyMWM5ZCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlzaWJsZS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vaGFybW9ueS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6W1wiZWdcIixcIkNvbXBvbmVudFwiXX0iXSwibmFtZXMiOlsiRVZFTlRTIiwiVmlzaWJsZSIsImVsZW1lbnQiLCJvcHRpb25zIiwiX3ByZWZpeCIsInRhcmdldENsYXNzIiwiZXhwYW5kU2l6ZSIsIk9iamVjdCIsImFzc2lnbiIsInVuZGVmaW5lZCIsIl93cmFwcGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibm9kZVR5cGUiLCJfZ2V0QXJlYVJlY3QiLCJfZ2V0V3JhcHBlclJlY3QiLCJfZ2V0V2luZG93UmVjdCIsIl90YXJnZXRzIiwiX3RpbWVyIiwiX3N1cHBvcnRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZHVtbXkiLCJjcmVhdGVFbGVtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImR1bW1pZXMiLCJpbm5lckhUTUwiLCJsZW5ndGgiLCJyZWZyZXNoIiwib3B0aW9uIiwiZGVsYXkiLCJjb250YWlubWVudCIsImNsZWFyVGltZW91dCIsIl9jaGVjayIsInNldFRpbWVvdXQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwYXJhbXMiLCJfcmV2aXNlRWxlbWVudHMiLCJ0YXJnZXQiLCJpIiwiX2hhc0NsYXNzIiwiX19WSVNJQkxFX18iLCJzcGxpY2UiLCJwYXJzZUludCIsInZpc2libGVzIiwiaW52aXNpYmxlcyIsInRhcmdldEFyZWEiLCJiZWZvcmUiLCJhZnRlciIsInJlY3QiLCJhcmVhIiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJ1bnNoaWZ0IiwidHJpZ2dlciIsImNoYW5nZSIsInZpc2libGUiLCJpbnZpc2libGUiLCJvZmYiLCJlbCIsImNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiUmVnRXhwIiwidGVzdCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudEhlaWdodCIsImJvZHkiLCJjbGllbnRXaWR0aCIsIlZFUlNJT04iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVBOzs7O0FBSUE7O0FBRUEsSUFBTUEsU0FBUztBQUNkLFdBQVU7QUFESSxDQUFmOztBQUlBOzs7Ozs7Ozs7O0lBU01DLE87OztBQUNMOzs7Ozs7QUFNQSxrQkFBWUMsT0FBWixFQUFxQkMsT0FBckIsRUFBOEJDLE9BQTlCLEVBQXVDO0FBQUE7O0FBQUE7O0FBRXRDLFFBQUtBLE9BQUwsR0FBZUEsV0FBVyxFQUExQjtBQUNBLFFBQUtELE9BQUwsR0FBZTtBQUNkRSxnQkFBYSxlQURDO0FBRWRDLGVBQVk7QUFG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Iiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKHVuZGVmaW5lZCkpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJWaXNpYmxlXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlZpc2libGVcIl0gPSBmYWN0b3J5KHJlcXVpcmUodW5kZWZpbmVkKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiZWdcIl0gPSByb290W1wiZWdcIl0gfHwge30sIHJvb3RbXCJlZ1wiXVtcIlZpc2libGVcIl0gPSBmYWN0b3J5KHJvb3RbXCJlZ1wiXVtcIkNvbXBvbmVudFwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDQyMmMxOTlmNjAyMzY5NDIxYzlkIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIE5BVkVSIENvcnAuXG4gKiBlZ2pzLXZpc2libGUgcHJvamVjdHMgYXJlIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICovXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCJAZWdqcy9jb21wb25lbnRcIjtcblxuY29uc3QgRVZFTlRTID0ge1xuXHRcImNoYW5nZVwiOiBcImNoYW5nZVwiLFxufTtcblxuLyoqXG4gKiBBIENsYXNzIHVzZWQgdG8gY2hlY2sgd2hldGhlciBhbiBlbGVtZW50IGlzIHZpc2libGUgaW4gdGhlIGJhc2UgZWxlbWVudCBvciB2aWV3cG9ydC5cbiAqIEBrbyDsl5jrpqzrqLztirjqsIAg6riw7KSAIOyXmOumrOuovO2KuOuCmCDrt7Dtj6ztirgg7JWI7JeQIOuztOydtOuKlOyngCDtmZXsnbjtlZjripQg7YG0656Y7IqkXG4gKiBAYWxpYXMgZWcuVmlzaWJsZVxuICogQGV4dGVuZHMgZWcuQ29tcG9uZW50XG4gKlxuICogQHN1cHBvcnQge1wiaWVcIjogXCI3K1wiLCBcImNoXCIgOiBcImxhdGVzdFwiLCBcImZmXCIgOiBcImxhdGVzdFwiLCAgXCJzZlwiIDogXCJsYXRlc3RcIiwgXCJlZGdlXCIgOiBcImxhdGVzdFwiLCBcImlvc1wiIDogXCI3K1wiLCBcImFuXCIgOiBcIjIuMSsgKGV4Y2VwdCAzLngpXCJ9XG4gKiBAY29kZXBlbiB7XCJpZFwiOlwiV2JXenFxXCIsIFwia29cIjpcIlZpc2libGUg6riw67O4IOyYiOygnFwiLCBcImVuXCI6XCJWaXNpYmxlIGJhc2ljIGV4YW1wbGVcIiwgXCJjb2xsZWN0aW9uSWRcIjpcIkF5cmFialwiLCBcImhlaWdodFwiIDogNDAzfVxuICovXG5jbGFzcyBWaXNpYmxlIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0LyoqXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR8U3RyaW5nfGpRdWVyeX0gW2VsZW1lbnQ9ZG9jdW1lbnRdIEEgYmFzZSBlbGVtZW50IHRoYXQgZGV0ZWN0cyBpZiBhbm90aGVyIGVsZW1lbnQgaXMgdmlzaWJsZTxrbz7sl5jrpqzrqLztirjqsIAg67O07J2064qUIOq4sOykgCDsl5jrpqzrqLztirg8L2tvPlxuXHQgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBUaGUgb3B0aW9uIG9iamVjdCBvZiB0aGUgVmlzaWJsZSBtb2R1bGU8a28+VmlzaWJsZSDrqqjrk4jsnZgg7Ji17IWYIOqwneyytDwva28+XG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy50YXJnZXRDbGFzcz1cImNoZWNrX3Zpc2libGVcIl0gVGhlIGNsYXNzIG5hbWUgb2YgdGhlIGVsZW1lbnQgdG8gYmUgY2hlY2tlZDxrbz7rs7TsnbTripTsp4Ag7ZmV7J247ZWgIOyXmOumrOuovO2KuOydmCDtgbTrnpjsiqQg7J2066aEPC9rbz5cblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmV4cGFuZFNpemU9MF0gVGhlIHNpemUgb2YgdGhlIGV4cGFuZGVkIGFyZWEgdG8gYmUgY2hlY2tlZCB3aGV0aGVyIGFuIGVsZW1lbnQgaXMgdmlzaWJsZS4gSWYgdGhpcyB2YWx1ZSBpcyBsZXNzIHRoYW4gemVybywgdGhlIHNpemUgb2YgdGhlIGFyZWEgaXMgc21hbGxlciB0aGFuIHRoYXQgb2YgdGhlIGJhc2UgZWxlbWVudC4gPGtvPuq4sOykgCDsl5jrpqzrqLztirjsnZgg6rK96rOE66W8IOuEmOyWtCDsl5jrpqzrqLztirjqsIAg67O07J2064qU7KeAIO2ZleyduO2VoCDsmIHsl63snZgg7YGs6riwLiDqsJLsnbQgMOuztOuLpCDsnpHsnLzrqbQg7JeY66as66i87Yq46rCAIOuztOydtOuKlOyngCDtmZXsnbjtlaAg7JiB7Jet7J2YIO2BrOq4sOqwgCDquLDspIAg7JeY66as66i87Yq467O064ukIOyekeyVhOynhOuLpDwva28+XG5cdCAqL1xuXHRjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zLCBfcHJlZml4KSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLl9wcmVmaXggPSBfcHJlZml4IHx8IFwiXCI7XG5cdFx0dGhpcy5vcHRpb25zID0ge1xuXHRcdFx0dGFyZ2V0Q2xhc3M6IFwiY2hlY2tfdmlzaWJsZVwiLFxuXHRcdFx0ZXhwYW5kU2l6ZTogMCxcblx0XHR9O1xuXHRcdE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLCBvcHRpb25zKTtcblxuXHRcdGlmIChlbGVtZW50ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuX3dyYXBwZXIgPSBkb2N1bWVudDtcblx0XHR9IGlmICh0eXBlb2YgZWxlbWVudCA9PT0gXCJvYmplY3RcIikge1xuXHRcdFx0dGhpcy5fd3JhcHBlciA9IGVsZW1lbnQ7XG5cdFx0fSBlbHNlIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0dGhpcy5fd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudCk7XG5cdFx0fVxuXG5cdFx0Ly8gdGhpcy5fd3JhcHBlciBpcyBFbGVtZW50LCBvciBtYXkgYmUgV2luZG93XG5cdFx0aWYgKHRoaXMuX3dyYXBwZXIubm9kZVR5cGUgJiYgdGhpcy5fd3JhcHBlci5ub2RlVHlwZSA9PT0gMSkge1xuXHRcdFx0dGhpcy5fZ2V0QXJlYVJlY3QgPSB0aGlzLl9nZXRXcmFwcGVyUmVjdDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5fZ2V0QXJlYVJlY3QgPSBWaXNpYmxlLl9nZXRXaW5kb3dSZWN0O1xuXHRcdH1cblxuXHRcdHRoaXMuX3RhcmdldHMgPSBbXTtcblx0XHR0aGlzLl90aW1lciA9IG51bGw7XG5cdFx0dGhpcy5fc3VwcG9ydEVsZW1lbnRzQnlDbGFzc05hbWUgPSAoKCkgPT4ge1xuXHRcdFx0Y29uc3QgZHVtbXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG5cdFx0XHRpZiAoIWR1bW15LmdldEVsZW1lbnRzQnlDbGFzc05hbWUpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBkdW1taWVzID0gZHVtbXkuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImR1bW15XCIpO1xuXG5cdFx0XHRkdW1teS5pbm5lckhUTUwgPSBcIjxzcGFuIGNsYXNzPSdkdW1teSc+PC9zcGFuPlwiO1xuXHRcdFx0cmV0dXJuIGR1bW1pZXMubGVuZ3RoID09PSAxO1xuXHRcdH0pKCk7XG5cblx0XHR0aGlzLnJlZnJlc2goKTtcblx0fVxuXG5cdHN0YXRpYyBfaGFzQ2xhc3MoZWwsIGNsYXNzTmFtZSkge1xuXHRcdGlmIChlbC5jbGFzc0xpc3QpIHtcblx0XHRcdHJldHVybiBlbC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIG5ldyBSZWdFeHAoYChefCApJHtjbGFzc05hbWV9KCB8JClgLCBcImdpXCIpLnRlc3QoZWwuY2xhc3NOYW1lKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogVXBkYXRlcyB0aGUgbGlzdCBvZiBlbGVtZW50cyB3aGVyZSB0aGUgdmlzaWJpbGl0eSBwcm9wZXJ0eSBpcyB0byBiZSBjaGVja2VkXG5cdCAqIEBrbyB2aXNpYmlsaXR5IOyGjeyEseydhCDqsoDsgqztlaAg7JeY66as66i87Yq47J2YIOuqqeuhneydhCDqsLHsi6DtlZzri6Rcblx0ICogQHJldHVybiB7ZWcuVmlzaWJsZX0gQW4gaW5zdGFuY2Ugb2YgYSBtb2R1bGUgaXRzZWxmPGtvPuuqqOuTiCDsnpDsi6DsnZgg7J247Iqk7YS07IqkPC9rbz5cblx0ICpcblx0ICogQHJlbWFya1xuXHQgKiBJZiB0YXJnZXRzIHdhcyBhZGRlZCBvciByZW1vdmVkIGZyb20gRE9NIHRyZWUsIG11c3QgY2FsbCByZWZyZXNoIG1ldGhvZCB0byB1cGRhdGUgaW50ZXJuYWwgdGFyZ2V0IGxpc3QuXG5cdCAqIDxrbz7tmZXsnbgg64yA7IOB7J20IOyYgeyXrSDslYjsl5Ag7LaU6rCA65CY6rGw64KYIOyCreygnOuQnCDqsr3smrAsIOuqqOuTiOuCtOu2gOyXkOyEnCDsgqzsmqntlZjripQg7ZmV7J24IOuMgOyDgSDrqqnroZ3snYQg7J20IOuplOyGjOuTnOulvCDtmLjstpztlZjsl6wg6rCx7Iug7ZW07JW87ZWc64ukLjxrbz5cblx0ICovXG5cdHJlZnJlc2goKSB7XG5cdFx0aWYgKHRoaXMuX3N1cHBvcnRFbGVtZW50c0J5Q2xhc3NOYW1lKSB7XG5cdFx0XHR0aGlzLl90YXJnZXRzID0gdGhpcy5fd3JhcHBlclxuXHRcdFx0XHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSh0aGlzLm9wdGlvbnMudGFyZ2V0Q2xhc3MpO1xuXHRcdFx0dGhpcy5yZWZyZXNoID0gKCkgPT4gdGhpcztcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5yZWZyZXNoID0gKCkgPT4ge1xuXHRcdFx0XHR0aGlzLl90YXJnZXRzID1cblx0XHRcdFx0XHR0aGlzLl93cmFwcGVyLnF1ZXJ5U2VsZWN0b3IodGhpcy5vcHRpb24udGFyZ2V0Q2xhc3MpO1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH07XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLnJlZnJlc2goKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDaGVja3Mgd2hldGhlciB0aGUgdmlzaWJsZSBvZiB0aGUgdGFyZ2V0IGVsZW1lbnRzIGhhcyBjaGFuZ2VkLiBJdCB0cmlnZ2VyIHRoYXQgY2hhbmdlIGV2ZW50IG9uIGEgY29tcG9uZW50LlxuXHQgKiBAa28g64yA7IOBIOyXmOumrOuovO2KuOydmCDqsIDsi5zshLHsnbQg67OA6rK965CQ64qU7KeAIOyytO2BrO2VnOuLpC4gY2hhbmdlIOydtOuypO2KuOulvCDrsJzsg53tlZzri6QuXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbZGVsYXk9LTFdIERlbGF5IHRpbWUuIEl0IGRlbGF5IHRoYXQgY2hhbmdlIGV2ZW50IHRyaWdnZXIuPGtvPuyngOyXsOyLnOqwhC4gY2hhbmdlIOydtOuypO2KuCDrsJzsg53snYQg7KeA7Jew7ZWc64ukLjwva28+XG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gW2NvbnRhaW5tZW50PWZhbHNlXSBXaGV0aGVyIHRvIGNoZWNrIG9ubHkgZWxlbWVudHMgdGhhdCBhcmUgY29tcGxldGVseSBjb250YWluZWQgd2l0aGluIHRoZSByZWZlcmVuY2UgYXJlYS48a28+6riw7KSAIOyYgeyXrSDslYjsl5Ag7JmE7KCE7Z6IIO2PrO2VqOuQnCDsl5jrpqzrqLztirjrp4wg7LK07YGs7ZWg7KeAIOyXrOu2gC48L2tvPlxuXHQgKiBAcmV0dXJuIHtlZy5WaXNpYmxlfSBBbiBpbnN0YW5jZSBvZiBhIG1vZHVsZSBpdHNlbGY8a28+66qo65OIIOyekOyLoOydmCDsnbjsiqTthLTsiqQ8L2tvPlxuXHQgKi9cblx0Y2hlY2soLi4ucGFyYW1zKSB7XG5cdFx0bGV0IGRlbGF5ID0gcGFyYW1zWzBdO1xuXHRcdGxldCBjb250YWlubWVudCA9IHBhcmFtc1sxXTtcblxuXHRcdGlmICh0eXBlb2YgZGVsYXkgIT09IFwibnVtYmVyXCIpIHtcblx0XHRcdGNvbnRhaW5tZW50ID0gZGVsYXk7XG5cdFx0XHRkZWxheSA9IC0xO1xuXHRcdH1cblxuXHRcdGlmICh0eXBlb2YgZGVsYXkgPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdGRlbGF5ID0gLTE7XG5cdFx0fVxuXG5cdFx0aWYgKHR5cGVvZiBjb250YWlubWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0Y29udGFpbm1lbnQgPSBmYWxzZTtcblx0XHR9XG5cblx0XHRjbGVhclRpbWVvdXQodGhpcy5fdGltZXIpO1xuXHRcdGlmIChkZWxheSA8IDApIHtcblx0XHRcdHRoaXMuX2NoZWNrKGNvbnRhaW5tZW50KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5fdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0dGhpcy5fY2hlY2soY29udGFpbm1lbnQpO1xuXHRcdFx0XHR0aGlzLl90aW1lciA9IG51bGw7XG5cdFx0XHR9LCBkZWxheSk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0X2dldFdyYXBwZXJSZWN0KCkge1xuXHRcdHJldHVybiB0aGlzLl93cmFwcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHR9XG5cblx0c3RhdGljIF9nZXRXaW5kb3dSZWN0KCkge1xuXHRcdC8vIFtJRTddIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgaGFzIGFsd2F5cyB2YWx1ZSAwIChidWcpXG5cdFx0cmV0dXJuIHtcblx0XHRcdHRvcDogMCxcblx0XHRcdGxlZnQ6IDAsXG5cdFx0XHRib3R0b206IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgfHxcblx0XHRcdFx0ZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQsXG5cdFx0XHRyaWdodDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIHx8XG5cdFx0XHRcdGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgsXG5cdFx0fTtcblx0fVxuXG5cdF9yZXZpc2VFbGVtZW50cyguLi5wYXJhbXMpIHtcblx0XHRpZiAodGhpcy5fc3VwcG9ydEVsZW1lbnRzQnlDbGFzc05hbWUpIHtcblx0XHRcdHRoaXMuX3JldmlzZUVsZW1lbnRzID0gKCkgPT4gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5fcmV2aXNlRWxlbWVudHMgPSAodGFyZ2V0LCBpKSA9PiB7XG5cdFx0XHRcdGlmIChWaXNpYmxlLl9oYXNDbGFzcyhwYXJhbXNbMF0sIHRoaXMub3B0aW9ucy50YXJnZXRDbGFzcykpIHtcblx0XHRcdFx0XHR0YXJnZXQuX19WSVNJQkxFX18gPSBudWxsO1xuXHRcdFx0XHRcdHRoaXMuX3RhcmdldHMuc3BsaWNlKGksIDEpO1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH07XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLl9yZXZpc2VFbGVtZW50cyguLi5wYXJhbXMpO1xuXHR9XG5cblx0X2NoZWNrKGNvbnRhaW5tZW50KSB7XG5cdFx0Y29uc3QgZXhwYW5kU2l6ZSA9IHBhcnNlSW50KHRoaXMub3B0aW9ucy5leHBhbmRTaXplLCAxMCk7XG5cdFx0Y29uc3QgdmlzaWJsZXMgPSBbXTtcblx0XHRjb25zdCBpbnZpc2libGVzID0gW107XG5cblx0XHRsZXQgaTtcblx0XHRsZXQgdGFyZ2V0O1xuXHRcdGxldCB0YXJnZXRBcmVhO1xuXHRcdGxldCBiZWZvcmU7XG5cdFx0bGV0IGFmdGVyO1xuXG5cdFx0Ly8gRXJyb3IgRml4OiBDYW5ub3Qgc2V0IHByb3BlcnR5IHRvcCBvZiAjPENsaWVudFJlY3Q+IHdoaWNoIGhhcyBvbmx5IGEgZ2V0dGVyXG5cdFx0Y29uc3QgcmVjdCA9IHRoaXMuX2dldEFyZWFSZWN0KCk7XG5cdFx0Y29uc3QgYXJlYSA9IHtcblx0XHRcdHRvcDogcmVjdC50b3AgLSBleHBhbmRTaXplLFxuXHRcdFx0bGVmdDogcmVjdC5sZWZ0IC0gZXhwYW5kU2l6ZSxcblx0XHRcdGJvdHRvbTogcmVjdC5ib3R0b20gKyBleHBhbmRTaXplLFxuXHRcdFx0cmlnaHQ6IHJlY3QucmlnaHQgKyBleHBhbmRTaXplLFxuXHRcdH07XG5cblx0XHRmb3IgKGkgPSB0aGlzLl90YXJnZXRzLmxlbmd0aCAtIDE7ICh0YXJnZXQgPSB0aGlzLl90YXJnZXRzW2ldKTsgaS0tKSB7XG5cdFx0XHR0YXJnZXRBcmVhID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG5cdFx0XHRpZiAodGFyZ2V0QXJlYS53aWR0aCA9PT0gMCAmJiB0YXJnZXRBcmVhLmhlaWdodCA9PT0gMCkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMuX3JldmlzZUVsZW1lbnRzKHRhcmdldCwgaSkpIHtcblx0XHRcdFx0YmVmb3JlID0gISF0YXJnZXQuX19WSVNJQkxFX187XG5cblx0XHRcdFx0aWYgKGNvbnRhaW5tZW50KSB7XG5cdFx0XHRcdFx0YWZ0ZXIgPSAhKFxuXHRcdFx0XHRcdFx0dGFyZ2V0QXJlYS50b3AgPCBhcmVhLnRvcCB8fFxuXHRcdFx0XHRcdFx0dGFyZ2V0QXJlYS5ib3R0b20gPiBhcmVhLmJvdHRvbSB8fFxuXHRcdFx0XHRcdFx0dGFyZ2V0QXJlYS5yaWdodCA+IGFyZWEucmlnaHQgfHxcblx0XHRcdFx0XHRcdHRhcmdldEFyZWEubGVmdCA8IGFyZWEubGVmdFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0dGFyZ2V0Ll9fVklTSUJMRV9fID0gYWZ0ZXI7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0YWZ0ZXIgPSAhKFxuXHRcdFx0XHRcdFx0dGFyZ2V0QXJlYS5ib3R0b20gPCBhcmVhLnRvcCB8fFxuXHRcdFx0XHRcdFx0YXJlYS5ib3R0b20gPCB0YXJnZXRBcmVhLnRvcCB8fFxuXHRcdFx0XHRcdFx0dGFyZ2V0QXJlYS5yaWdodCA8IGFyZWEubGVmdCB8fFxuXHRcdFx0XHRcdFx0YXJlYS5yaWdodCA8IHRhcmdldEFyZWEubGVmdFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0dGFyZ2V0Ll9fVklTSUJMRV9fID0gYWZ0ZXI7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoYmVmb3JlICE9PSBhZnRlcikge1xuXHRcdFx0XHRcdGlmIChhZnRlcikge1xuXHRcdFx0XHRcdFx0dmlzaWJsZXMudW5zaGlmdCh0YXJnZXQpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRpbnZpc2libGVzLnVuc2hpZnQodGFyZ2V0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogVGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSBldmVudCBpcyBjb21wYXJlZCB3aXRoIHRoZSBsYXN0IHZlcmlmaWVkIG9uZSBhbmQgdGhlcmUgaXMgYW4gZWxlbWVudCBvZiB3aGljaCB0aGUgdmlzaWJpbGl0eSBwcm9wZXJ0eSBoYXMgY2hhbmdlZC5cblx0XHQgKiBAa28g66eI7KeA66eJ7Jy866GcIO2ZleyduO2VnCDqsrDqs7zsmYAg67mE6rWQ7ZW0IHZpc2liaWxpdHkg7IaN7ISx7J20IOuzgOqyveuQnCDsl5jrpqzrqLztirjqsIAg7J6I7J2EIOuVjCDrsJzsg53tlZjripQg7J2067Kk7Yq4XG5cdFx0ICogQGV2ZW50IGVnLlZpc2libGUjY2hhbmdlXG5cdFx0ICogQHBhcmFtIHtBcnJheX0gdmlzaWJsZSBWaXNpYmxlIGVsZW1lbnRzICAodGhlIGVsZW1lbnQgdHlwZSBpcyBgSFRNTEVsZW1lbnRgKSA8a28+67O07J206rKMIOuQnCDsl5jrpqzrqLztirjrk6Q8L2tvPlxuXHRcdCAqIEBwYXJhbSB7QXJyYXl9IGludmlzaWJsZSBJbnZpc2libGUgZWxlbWVudHMgICh0aGUgZWxlbWVudCB0eXBlIGlzIGBIVE1MRWxlbWVudGApIDxrbz7slYgg67O07J206rKMIOuQnCDsl5jrpqzrqLztirjrk6Q8L2tvPlxuXHRcdCAqL1xuXHRcdHRoaXMudHJpZ2dlcih0aGlzLl9wcmVmaXggKyBFVkVOVFMuY2hhbmdlLCB7XG5cdFx0XHR2aXNpYmxlOiB2aXNpYmxlcyxcblx0XHRcdGludmlzaWJsZTogaW52aXNpYmxlcyxcblx0XHR9KTtcblx0fVxuXG5cdGRlc3Ryb3koKSB7XG5cdFx0dGhpcy5vZmYoKTtcblx0XHR0aGlzLl90YXJnZXRzID0gW107XG5cdFx0dGhpcy5fd3JhcHBlciA9IG51bGw7XG5cdFx0dGhpcy5fdGltZXIgPSBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIEEgalF1ZXJ5IGN1c3RvbSBldmVudCBvZiB0aGUgVmlzaWJsZSBtb2R1bGUuIFRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgZXZlbnQgaXMgY29tcGFyZWQgd2l0aCB0aGUgbGFzdCB2ZXJpZmllZCBvbmUgYW5kIHRoZXJlIGlzIGFuIGVsZW1lbnQgb2Ygd2hpY2ggdGhlIHZpc2liaWxpdHkgcHJvcGVydHkgaGFzIGNoYW5nZWQuXG5cdCAqXG5cdCAqIEBrbyBWaXNpYmxlIOuqqOuTiOydmCBqUXVlcnkg7Luk7Iqk7YWAIOydtOuypO2KuC4g66eI7KeA66eJ7Jy866GcIO2ZleyduO2VnCDqsrDqs7zsmYAg67mE6rWQ7ZW0IHZpc2liaWxpdHkg7IaN7ISx7J20IOuzgOqyveuQnCDsl5jrpqzrqLztirjqsIAg7J6I7J2EIOuVjCDrsJzsg53tlZzri6Rcblx0ICogQG5hbWUgalF1ZXJ5I3Zpc2libGU6Y2hhbmdlXG5cdCAqIEBldmVudFxuXHQgKiBAZXhhbXBsZVxuXHQgLy8gY3JlYXRlXG5cdCAkKFwiYm9keVwiKS52aXNpYmxlKCk7XG5cdCAvLyBldmVudFxuXHQgJChcImJvZHlcIikub24oXCJ2aXNpYmxlOmNoYW5nZVwiLGNhbGxiYWNrKTtcblx0ICQoXCJib2R5XCIpLm9mZihcInZpc2libGU6Y2hhbmdlXCIsY2FsbGJhY2spO1xuXHQgJChcImJvZHlcIikudHJpZ2dlcihcInZpc2libGU6Y2hhbmdlXCIsY2FsbGJhY2spO1xuXHQgKiBAc2VlIFZpc2JsZVxuXHQgKi9cblx0LyoqXG5cdCAqIEEgalF1ZXJ5IHBsdWdpbiBhdmFpbGFibGUgaW4gdGhlIFZpc2libGUgbW9kdWxlLlxuXHQgKiBAa28gVmlzaWJsZSDrqqjrk4jsnZggalF1ZXJ5IO2UjOufrOq3uOyduFxuXHQgKiBAbWV0aG9kIGpRdWVyeS52aXNpYmxlXG5cdCAqIEBleGFtcGxlXG5cdCAvLyBjcmVhdGVcblx0ICQoXCJib2R5XCIpLnZpc2libGUoKTtcblx0IC8vIGV2ZW50XG5cdCAkKFwiYm9keVwiKS5vbihcInZpc2libGU6Y2hhbmdlXCIsY2FsbGJhY2spO1xuXHQgJChcImJvZHlcIikub2ZmKFwidmlzaWJsZTpjaGFuZ2VcIixjYWxsYmFjayk7XG5cdCAkKFwiYm9keVwiKS50cmlnZ2VyKFwidmlzaWJsZTpjaGFuZ2VcIixjYWxsYmFjayk7XG5cdCAvLyBtZXRob2Rcblx0ICQoXCJib2R5XCIpLnZpc2libGUoXCJvcHRpb25cIixcImNpcmN1bGFyXCIsdHJ1ZSk7IC8vU2V0IG9wdGlvblxuXHQgJChcImJvZHlcIikudmlzaWJsZShcImluc3RhbmNlXCIpOyAvLyBSZXR1cm4gZmxpY2tpbmcgaW5zdGFuY2Vcblx0ICQoXCJib2R5XCIpLnZpc2libGUoXCJjaGVja1wiLDEwKTsgLy8gQ2hlY2sgdG8gY2hhbmdlIHRhcmdldCBlbGVtZW50cy5cblx0ICogQHNlZSBWaXNibGUjZXZlbnQ6Y2hhbmdlXG5cdCAqL1xufVxuXG5leHBvcnQgZGVmYXVsdCBWaXNpYmxlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Zpc2libGUuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsTW9kdWxlKSB7XHJcblx0aWYoIW9yaWdpbmFsTW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0dmFyIG1vZHVsZSA9IE9iamVjdC5jcmVhdGUob3JpZ2luYWxNb2R1bGUpO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRpZighbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiZXhwb3J0c1wiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHR9KTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9oYXJtb255LW1vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgVmlzaWJsZSBmcm9tIFwiLi92aXNpYmxlXCI7XG5cblZpc2libGUuVkVSU0lPTiA9IFwiMi4wLjAtcmMuMlwiO1xubW9kdWxlLmV4cG9ydHMgPSBWaXNpYmxlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6W1wiZWdcIixcIkNvbXBvbmVudFwiXX1cbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==