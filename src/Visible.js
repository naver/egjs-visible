/**
 * Copyright (c) NAVER Corp.
 * egjs-visible projects are licensed under the MIT license
 */
import Component from "@egjs/component";
import {$, addEvent, removeEvent, getWindowRect, hasClass} from "./utils";

// IE8
// https://stackoverflow.com/questions/43216659/babel-ie8-inherit-issue-with-object-create
/* eslint-disable */
if (typeof Object.create !== "function") {
	Object.create = function (o, properties) {
		if (typeof o !== "object" && typeof o !== "function") {
			throw new TypeError("Object prototype may only be an Object: " + o);
		} else if (o === null) {
			throw new Error("This browser's implementation of Object.create is a shim and doesn't support 'null' as the first argument.");
		}
		function F() {}
		F.prototype = o;
		return new F();
	};
}
const SUPPORT_OBSERVER = !!window.IntersectionObserver;
const SUPPORT_ELEMENTS_BY_CLASSNAME = (() => {
	const dummy = document.createElement("div");

	if (!dummy.getElementsByClassName) {
		return false;
	}

	const dummies = dummy.getElementsByClassName("dummy");

	dummy.innerHTML = "<span class='dummy'></span>";
	return dummies.length === 1;
})();

/* eslint-enable */

/**
 * A Class used to check whether an element is visible in the base element or viewport.
 * @ko 엘리먼트가 기준 엘리먼트나 뷰포트 안에 보이는지 확인하는 클래스
 * @alias eg.Visible
 * @extends eg.Component
 *
 * @support {"ie": "8+", "ch" : "latest", "ff" : "latest",  "sf" : "latest", "edge" : "latest", "ios" : "7+", "an" : "2.1+ (except 3.x)"}
 */
class Visible extends Component {
	/**
	 * @param {HTMLElement|String|jQuery} [element=document] A base element that detects if another element is visible<ko>엘리먼트가 보이는 기준 엘리먼트</ko>
	 * @param {Object} options The option object of the Visible module<ko>Visible 모듈의 옵션 객체</ko>
	 * @param {String} [options.targetClass="check_visible"] The class name of the element to be checked<ko>보이는지 확인할 엘리먼트의 클래스 이름</ko>
	 * @param {Number} [options.expandSize=0] The size of the expanded area to be checked whether an element is visible. If this value is less than zero, the size of the area is smaller than that of the base element. <ko>기준 엘리먼트의 경계를 넘어 엘리먼트가 보이는지 확인할 영역의 크기. 값이 0보다 작으면 엘리먼트가 보이는지 확인할 영역의 크기가 기준 엘리먼트보다 작아진다</ko>
	 */
	constructor(element, options) {
		super();
		this.options = {
			targetClass: "check_visible",
			expandSize: 0,
		};
		Object.assign(this.options, options);
		this._wrapper = $(element) || document;

		// this._wrapper is Element, or may be Window
		if (this._wrapper.nodeType && this._wrapper.nodeType === 1) {
			this._getAreaRect = this._getWrapperRect;
		} else {
			this._getAreaRect = getWindowRect;
		}

		this._targets = [];
		this._timer = null;
		this.refresh();
	}
	/**
	 * Updates the list of elements where the visibility property is to be checked
	 * @ko visibility 속성을 검사할 엘리먼트의 목록을 갱신한다
	 * @return {eg.Visible} An instance of a module itself<ko>모듈 자신의 인스턴스</ko>
	 *
	 * @remark
	 * If targets was added or removed from DOM tree, must call refresh method to update internal target list.
	 * <ko>확인 대상이 영역 안에 추가되거나 삭제된 경우, 모듈내부에서 사용하는 확인 대상 목록을 이 메소드를 호출하여 갱신해야한다.<ko>
	 */
	refresh() {
		if (SUPPORT_ELEMENTS_BY_CLASSNAME) {
			this._targets = this._wrapper.getElementsByClassName(this.options.targetClass);
			this.refresh = function() {
				this._refreshObserver();
				return this;
			};
		} else {
			this.refresh = function() {
				const targets = this._wrapper.querySelectorAll(`.${this.options.targetClass}`);

				this._targets = [];
				for (let i = 0; i < targets.length; i++) {
					this._targets.push(targets[i]);
				}
				this._refreshObserver();
				return this;
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
	check(...params) {
		let delay = params[0];
		let containment = params[1];

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
			this._checkAfter();
		} else {
			this._timer = setTimeout(() => {
				this._check(containment);
				this._checkAfter();
				this._timer = null;
			}, delay);
		}
		return this;
	}

	_getWrapperRect() {
		return this._wrapper.getBoundingClientRect();
	}

	_reviseElements(...params) {
		if (SUPPORT_ELEMENTS_BY_CLASSNAME) {
			this._reviseElements = () => true;
		} else {
			this._reviseElements = (target, i) => {
				if (!hasClass(target, this.options.targetClass)) {
					target.__VISIBLE__ = null;
					this._targets.splice(i, 1);
					return false;
				}
				return true;
			};
		}
		return this._reviseElements(...params);
	}

	_check(containment) {
		const expandSize = parseInt(this.options.expandSize, 10);

		let i;
		let target;
		let targetArea;
		let after;

		// Error Fix: Cannot set property top of #<ClientRect> which has only a getter
		const rect = this._getAreaRect();
		const area = {
			top: rect.top - expandSize,
			left: rect.left - expandSize,
			bottom: rect.bottom + expandSize,
			right: rect.right + expandSize,
		};

		for (i = this._targets.length - 1;
			(target = this._targets[i]); i--) {
			targetArea = target.getBoundingClientRect();

			if (targetArea.width === 0 && targetArea.height === 0) {
				continue;
			}

			if (!this._reviseElements(target, i)) {
				continue;
			}
			if (containment) {
				after = !(
					targetArea.top < area.top ||
					targetArea.bottom > area.bottom ||
					targetArea.right > area.right ||
					targetArea.left < area.left
				);
			} else {
				after = !(
					targetArea.bottom < area.top ||
					area.bottom < targetArea.top ||
					targetArea.right < area.left ||
					area.right < targetArea.left
				);
			}
			target.__AFTER__ = after;
		}
	}
	checkObserve(delay = -1) {
		if (this._timer) {
			clearTimeout(this._timer);
			this._timer = 0;
		}
		if (delay < 0) {
			this._checkAfter();
		} else {
			this._timer = setTimeout(() => {
				this._checkAfter();
				this._timer = null;
			}, delay);
		}
		return this;
	}
	_checkAfter() {
		const targets = this._targets;
		const length = targets.length;
		const visibles = [];
		const invisibles = [];

		for (let i = 0; i < length; ++i) {
			const target = targets[i];
			const prev = target.__VISIBLE__;
			const after = target.__AFTER__;

			if (prev === after) {
				continue;
			}
			if (after) {
				visibles.push(target);
			} else {
				invisibles.push(target);
			}
			target.__VISIBLE__ = after;
		}
		if (visibles.length === 0 && invisibles.length === 0) {
			return;
		}
		/**
		 * This event is fired when the event is compared with the last verified one and there is an element of which the visibility property has changed.
		 * @ko 마지막으로 확인한 결과와 비교해 visibility 속성이 변경된 엘리먼트가 있을 때 발생하는 이벤트
		 * @name eg.Visible#change
		 * @event
		 * @type {obejct} The object of data to be sent when the event is fired<ko>이벤트가 발생할 때 전달되는 데이터 객체</ko>
		 * @property {Array} visible Visible elements  (the element type is `HTMLElement`) <ko>보이게 된 엘리먼트들</ko>
		 * @property {Array} invisible Invisible elements  (the element type is `HTMLElement`) <ko>안 보이게 된 엘리먼트들</ko>
		 * @property {Boolean} isTrusted Returns true if an event was generated by the user action, or false if it was caused by a script or API call <ko>사용자의 액션에 의해 이벤트가 발생하였으면 true, 스크립트나 API호출에 의해 발생하였을 경우에는 false를 반환한다.</ko>
		 */
		this.trigger("change", {
			visible: visibles,
			invisible: invisibles,
			isTrusted: true, // This event is called by 'check' method.
		});
	}
	/**
	 * Observe whether the visible of the target elements has changed. It trigger that change event on a component.
	 * @ko 대상 엘리먼트의 가시성이 변경됐는지 관찰한다. change 이벤트를 발생한다.
	 * @param {Object} [options={}]  Options to observe the target elements. <ko>대상 엘리먼트를 관찰하기 위한 옵션들.</ko>
	 * @param {Number} [options.delay=-1] Delay time. It delay that change event trigger.<ko>지연시간. change 이벤트 발생을 지연한다.</ko>
	 * @param {Boolean} [options.containment=false] Whether to check only elements that are completely contained within the reference area.<ko>기준 영역 안에 완전히 포함된 엘리먼트만 체크할지 여부.</ko>
	 * @return {eg.Visible} An instance of a module itself<ko>모듈 자신의 인스턴스</ko>
	 */
	observe(options = {}) {
		if (!SUPPORT_OBSERVER) {
			this._addObserveEvent(options);
			return this;
		}
		const delay = typeof options.delay === "undefined" ? -1 : options.delay;
		const containment = !!options.containment;

		this._observeCallback = entries => {
			entries.forEach(entry => {
				entry.target.__AFTER__ = containment ? entry.intersectionRatio >= 1 : entry.isIntersecting;
			});
			this._checkAfter(delay);
		};
		if (this._observer) {
			this.unobserve();
		}
		this._observer = new IntersectionObserver(this._observeCallback, {
			root: this._wrapper.nodeType === 1 ? this._wrapper : null,
			rootMargin: `${this.options.expandSize}px`,
			threshold: containment ? [0, 1] : [0],
		});
		const observer = this._observer;
		const targets = this._targets;
		const length = targets.length;

		for (let i = 0; i < length; ++i) {
			observer.observe(targets[i]);
		}
		return this;
	}
	unobserve() {
		if (!this._observeCallback) {
			return this;
		}
		if (SUPPORT_OBSERVER) {
			this._observer && this._observer.disconnect();
		} else {
			removeEvent(this._wrapper, "scroll", this._observeCallback);
			removeEvent(this._wrapper, "resize", this._observeCallback);
		}
		this._observer = null;
		this._observeCallback = null;
		return this;
	}
	_refreshObserver() {
		if (!this._observer) {
			return;
		}
		this._observer.disconnect();
		const targets = this._targets;
		const length = targets.length;

		for (let i = 0; i < length; ++i) {
			this._observer.observe(targets[i]);
		}
	}
	_addObserveEvent(options = {}) {
		if (this._observeCallback) {
			return;
		}
		const delay = typeof options.delay === "undefined" ? -1 : options.delay;
		const containment = !!options.containment;

		this._observeCallback = e => {
			this._check(containment);
			this.checkObserve(delay);
		};
		addEvent(this._wrapper, "scroll", this._observeCallback);
		addEvent(this._wrapper, "resize", this._observeCallback);

		this._observeCallback();
	}
	destroy() {
		this.off();
		this.unobserve();
		this._targets = [];
		this._wrapper = null;
		this._timer = null;
	}
}

Visible.VERSION = "#__VERSION__#";
export default Visible;
