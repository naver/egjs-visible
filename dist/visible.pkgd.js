(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Visible", [], factory);
	else if(typeof exports === 'object')
		exports["Visible"] = factory();
	else
		root["eg"] = root["eg"] || {}, root["eg"]["Visible"] = factory();
})(this, function() {
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__egjs_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__egjs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__egjs_component__);
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
 * A module that checks if an element is visible in the base element or viewport.
 * @class
 * @name Visible
 * @extends Component
 * @group egjs
 */

var Visible = function (_Component) {
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
		_this._wrapper = element || document;

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
		key: "_hasClass",
		value: function _hasClass(el, className) {
			if (el.classList) return el.classList.contains(className);else return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
		}
	}, {
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
					_this2._targets = _this2._wrapper.querySelector(_this2.option.targetClass);
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
					if (_this4._hasClass(target, _this4.options.targetClass)) {
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
}(__WEBPACK_IMPORTED_MODULE_0__egjs_component___default.a);

/* harmony default export */ __webpack_exports__["default"] = (Visible);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Component"] = factory();
	else
		root["eg"] = root["eg"] || {}, root["eg"]["Component"] = factory();
})(this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Copyright (c) 2015 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */

/**
 * A class used to manage events and options in a component
 * @class
 * @group egjs
 * @name eg.Component
 * @ko 컴포넌트의 이벤트와 옵션을 관리할 수 있게 하는 클래스
 *
 * @support {"ie": "7+", "ch" : "latest", "ff" : "latest",  "sf" : "latest", "edge" : "latest", "ios" : "7+", "an" : "2.1+ (except 3.x)"}
 */
var Component = exports.Component = function () {
	function Component() {
		_classCallCheck(this, Component);

		this._eventHandler = {};
		this._options = {};
	}

	/**
  * Sets options in a component or returns them.
  * @ko 컴포넌트에 옵션을 설정하거나 옵션을 반환한다
  * @method eg.Component#option
  * @param {String} key The key of the option<ko>옵션의 키</ko>
  * @param {Object} [value] The option value that corresponds to a given key <ko>키에 해당하는 옵션값</ko>
  * @return {eg.Component|Object} An instance, an option value, or an option object of a component itself.<br>- If both key and value are used to set an option, it returns an instance of a component itself.<br>- If only a key is specified for the parameter, it returns the option value corresponding to a given key.<br>- If nothing is specified, it returns an option object. <ko>컴포넌트 자신의 인스턴스나 옵션값, 옵션 객체.<br>- 키와 값으로 옵션을 설정하면 컴포넌트 자신의 인스턴스를 반환한다.<br>- 파라미터에 키만 설정하면 키에 해당하는 옵션값을 반환한다.<br>- 파라미터에 아무것도 설정하지 않으면 옵션 객체를 반환한다.</ko>
  * @example
 	 class Some extends eg.Component{
 		}
 	 const some = new Some({
 		"foo": 1,
 		"bar": 2
 	});
 	 some.option("foo"); // return 1
  some.option("foo",3); // return some instance
  some.option(); // return options object.
  some.option({
 		"foo" : 10,
 		"bar" : 20,
 		"baz" : 30
 	}); // return some instance.
  */


	_createClass(Component, [{
		key: "option",
		value: function option() {
			if (arguments.length >= 2) {
				var _key = arguments.length <= 0 ? undefined : arguments[0];
				var value = arguments.length <= 1 ? undefined : arguments[1];
				this._options[_key] = value;
				return this;
			}

			var key = arguments.length <= 0 ? undefined : arguments[0];
			if (typeof key === "string") {
				return this._options[key];
			}

			if (arguments.length === 0) {
				return this._options;
			}

			var options = key;
			this._options = options;

			return this;
		}
		/**
   * Triggers a custom event.
   * @ko 커스텀 이벤트를 발생시킨다
   * @method eg.Component#trigger
   * @param {String} eventName The name of the custom event to be triggered <ko>발생할 커스텀 이벤트의 이름</ko>
   * @param {Object} customEvent Event data to be sent when triggering a custom event <ko>커스텀 이벤트가 발생할 때 전달할 데이터</ko>
   * @return {Boolean} Indicates whether the event has occurred. If the stop() method is called by a custom event handler, it will return false and prevent the event from occurring. <ko>이벤트 발생 여부. 커스텀 이벤트 핸들러에서 stop() 메서드를 호출하면 'false'를 반환하고 이벤트 발생을 중단한다.</ko>
   * @example
   class Some extends eg.Component{
  		some(){
  			this.trigger("hi");// fire hi event.
  		}
  	}
   */

	}, {
		key: "trigger",
		value: function trigger(eventName) {
			var customEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

			var handlerList = this._eventHandler[eventName] || [];
			var hasHandlerList = handlerList.length > 0;

			if (!hasHandlerList) {
				return true;
			}

			// If detach method call in handler in first time then handeler list calls.
			handlerList = handlerList.concat();

			customEvent.eventType = eventName;

			var isCanceled = false;
			var arg = [customEvent];
			var i = void 0;

			customEvent.stop = function () {
				return isCanceled = true;
			};

			for (var _len = arguments.length, restParam = Array(_len > 2 ? _len - 2 : 0), _key2 = 2; _key2 < _len; _key2++) {
				restParam[_key2 - 2] = arguments[_key2];
			}

			if (restParam.length >= 1) {
				arg = arg.concat(restParam);
			}

			for (i in handlerList) {
				handlerList[i].apply(this, arg);
			}

			return !isCanceled;
		}
		/**
   * Executed event just one time.
   * @ko 이벤트가 한번만 실행된다.
   * @method eg.Component#once
   * @param {eventName} eventName The name of the event to be attached <ko>등록할 이벤트의 이름</ko>
   * @param {Function} handlerToAttach The handler function of the event to be attached <ko>등록할 이벤트의 핸들러 함수</ko>
   * @return {eg.Component} An instance of a component itself<ko>컴포넌트 자신의 인스턴스</ko>
   * @example
   class Some extends eg.Component{
  		hi(){
  			alert("hi");
  		}
  		thing(){
  			this.once("hi", this.hi);
  		}
  	}
  	 var some = new Some();
   some.thing();
   some.trigger("hi");
   // fire alert("hi");
   some.trigger("hi");
   // Nothing happens
   */

	}, {
		key: "once",
		value: function once(eventName, handlerToAttach) {
			if ((typeof eventName === "undefined" ? "undefined" : _typeof(eventName)) === "object" && typeof handlerToAttach === "undefined") {
				var eventHash = eventName;
				var i = void 0;
				for (i in eventHash) {
					this.once(i, eventHash[i]);
				}
				return this;
			} else if (typeof eventName === "string" && typeof handlerToAttach === "function") {
				var self = this;
				this.on(eventName, function listener() {
					for (var _len2 = arguments.length, arg = Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
						arg[_key3] = arguments[_key3];
					}

					handlerToAttach.apply(self, arg);
					self.off(eventName, listener);
				});
			}

			return this;
		}

		/**
   * Checks whether an event has been attached to a component.
   * @ko 컴포넌트에 이벤트가 등록됐는지 확인한다.
   * @method eg.Component#hasOn
   * @param {String} eventName The name of the event to be attached <ko>등록 여부를 확인할 이벤트의 이름</ko>
   * @return {Boolean} Indicates whether the event is attached. <ko>이벤트 등록 여부</ko>
   * @example
   class Some extends eg.Component{
  		some(){
  			this.hasOn("hi");// check hi event.
  		}
  	}
   */

	}, {
		key: "hasOn",
		value: function hasOn(eventName) {
			return !!this._eventHandler[eventName];
		}

		/**
   * Attaches an event to a component.
   * @ko 컴포넌트에 이벤트를 등록한다.
   * @method eg.Component#on
   * @param {eventName} eventName The name of the event to be attached <ko>등록할 이벤트의 이름</ko>
   * @param {Function} handlerToAttach The handler function of the event to be attached <ko>등록할 이벤트의 핸들러 함수</ko>
   * @return {eg.Component} An instance of a component itself<ko>컴포넌트 자신의 인스턴스</ko>
   * @example
   class Some extends eg.Component{
   		hi(){
  			console.log("hi");
   		}
  		some(){
  			this.on("hi",this.hi); //attach event
  		}
  	}
   */

	}, {
		key: "on",
		value: function on(eventName, handlerToAttach) {
			if ((typeof eventName === "undefined" ? "undefined" : _typeof(eventName)) === "object" && typeof handlerToAttach === "undefined") {
				var eventHash = eventName;
				var name = void 0;
				for (name in eventHash) {
					this.on(name, eventHash[name]);
				}
				return this;
			} else if (typeof eventName === "string" && typeof handlerToAttach === "function") {
				var handlerList = this._eventHandler[eventName];

				if (typeof handlerList === "undefined") {
					handlerList = this._eventHandler[eventName] = [];
				}

				handlerList.push(handlerToAttach);
			}

			return this;
		}
		/**
   * Detaches an event from the component.
   * @ko 컴포넌트에 등록된 이벤트를 해제한다
   * @method eg.Component#off
   * @param {eventName} eventName The name of the event to be detached <ko>해제할 이벤트의 이름</ko>
   * @param {Function} handlerToDetach The handler function of the event to be detached <ko>해제할 이벤트의 핸들러 함수</ko>
   * @return {eg.Component} An instance of a component itself <ko>컴포넌트 자신의 인스턴스</ko>
   * @example
   class Some extends eg.Component{
   		hi(){
  			console.log("hi");
   		}
  		some(){
  			this.off("hi",this.hi); //detach event
  		}
  	}
   */

	}, {
		key: "off",
		value: function off(eventName, handlerToDetach) {
			// All event detach.
			if (typeof eventName === "undefined") {
				this._eventHandler = {};
				return this;
			}

			// All handler of specific event detach.
			if (typeof handlerToDetach === "undefined") {
				if (typeof eventName === "string") {
					this._eventHandler[eventName] = undefined;
					return this;
				} else {
					var eventHash = eventName;
					var name = void 0;
					for (name in eventHash) {
						this.off(name, eventHash[name]);
					}
					return this;
				}
			}

			// The handler of specific event detach.
			var handlerList = this._eventHandler[eventName];
			if (handlerList) {
				var k = void 0;
				var handlerFunction = void 0;
				for (k = 0, handlerFunction; handlerFunction = handlerList[k]; k++) {
					if (handlerFunction === handlerToDetach) {
						handlerList = handlerList.splice(k, 1);
						break;
					}
				}
			}

			return this;
		}
	}]);

	return Component;
}();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _component = __webpack_require__(0);

module.exports = _component.Component;

/***/ })
/******/ ]);
});
//# sourceMappingURL=component.js.map


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var Visible = __webpack_require__(0).default;
module.exports = Visible;

/***/ })
/******/ ]);
});
//# sourceMappingURL=visible.pkgd.js.map