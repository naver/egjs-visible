(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@egjs/component"));
	else if(typeof define === 'function' && define.amd)
		define(["@egjs/component"], factory);
	else if(typeof exports === 'object')
		exports["Visible"] = factory(require("@egjs/component"));
	else
		root["eg"] = root["eg"] || {}, root["eg"]["Visible"] = factory(root["eg"]["Component"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Visible = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(1);

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) NAVER Corp.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * egjs-visible projects are licensed under the MIT license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var EVENTS = {
	"change": "change"
};

/**
 * A module that checks if an element is visible in the base element or viewport.
 * @class
 * @name Visible
 * @extends Component
 * @group egjs
 */

var Visible = exports.Visible = function (_Component) {
	_inherits(Visible, _Component);

	function Visible(element, options, _prefix) {
		_classCallCheck(this, Visible);

		var _this = _possibleConstructorReturn(this, (Visible.__proto__ || Object.getPrototypeOf(Visible)).call(this));

		_this._prefix = _prefix || "";
		_this.options = {
			targetClass: "check_visible",
			expandSize: 0
		};
		Object.assign(_this.options, options);

		_this._wrapper = $(element)[0] || document;

		// this._wrapper is Element, or may be Window
		if (_this._wrapper.nodeType && _this._wrapper.nodeType === 1) {
			_this._getAreaRect = _this._getWrapperRect;
		} else {
			_this._getAreaRect = _this._getWindowRect;
		}

		_this._targets = [];
		_this._timer = null;
		_this._supportElementsByClassName = function () {
			var dummy = document.createElement("div");
			var dummies = void 0;
			if (!dummy.getElementsByClassName) {
				return false;
			}
			dummies = dummy.getElementsByClassName("dummy");
			dummy.innerHTML = "<span class='dummy'></span>";
			return dummies.length === 1;
		}();

		_this.refresh();
		return _this;
	}

	_createClass(Visible, [{
		key: "refresh",
		value: function refresh() {
			var _this2 = this;

			if (this._supportElementsByClassName) {
				this._targets = this._wrapper.getElementsByClassName(this.options.targetClass);
				this.refresh = function () {
					return _this2;
				};
			} else {
				this.refresh = function () {
					_this2._targets = $(_this2._wrapper).find("." + _this2.options.targetClass).get();
					return _this2;
				};
			}
			return this.refresh();
		}
	}, {
		key: "check",
		value: function check(delay, containment) {
			var _this3 = this;

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
	}, {
		key: "_reviseElements",
		value: function _reviseElements(target, i) {
			var _this4 = this;

			if (this._supportElementsByClassName) {
				this._reviseElements = function () {
					return true;
				};
			} else {
				this._reviseElements = function (target, i) {
					if (!$(target).hasClass(_this4.options.targetClass)) {
						target.__VISIBLE__ = null;
						_this4._targets.splice(i, 1);
						return false;
					}
					return true;
				};
			}
			return this._reviseElements(target, i);
		}
	}, {
		key: "_check",
		value: function _check(containment) {
			var expandSize = parseInt(this.options.expandSize, 10);
			var visibles = [];
			var invisibles = [];

			var i = void 0;
			var area = void 0;
			var rect = void 0;
			var target = void 0;
			var targetArea = void 0;
			var before = void 0;
			var after = void 0;

			// Error Fix: Cannot set property top of #<ClientRect> which has only a getter
			rect = this._getAreaRect();
			area = {
				top: rect.top - expandSize,
				left: rect.left - expandSize,
				bottom: rect.bottom + expandSize,
				right: rect.right + expandSize
			};

			for (i = this._targets.length - 1, target, targetArea, after, before; target = this._targets[i]; i--) {
				targetArea = target.getBoundingClientRect();
				if (targetArea.width === 0 && targetArea.height === 0) {
					continue;
				}
				if (this._reviseElements(target, i)) {
					before = !!target.__VISIBLE__;

					if (containment) {
						target.__VISIBLE__ = after = !(targetArea.top < area.top || targetArea.bottom > area.bottom || targetArea.right > area.right || targetArea.left < area.left);
					} else {
						target.__VISIBLE__ = after = !(targetArea.bottom < area.top || area.bottom < targetArea.top || targetArea.right < area.left || area.right < targetArea.left);
					}

					before !== after && (after ? visibles : invisibles).unshift(target);
				}
			}
			/**
    * This event is fired when the event is compared with the last verified one and there is an element of which the visibility property has changed.
    * @ko 마지막으로 확인한 결과와 비교해 visibility 속성이 변경된 엘리먼트가 있을 때 발생하는 이벤트
    * @name eg.Visible#change
    * @event
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
			this._wrapper = this._timer = null;
		}
	}]);

	return Visible;
}(_component2.default);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _visible = __webpack_require__(0);

module.exports = _visible.Visible;

/***/ })
/******/ ]);
});
//# sourceMappingURL=visible.js.map