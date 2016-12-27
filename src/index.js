/**
 * Copyright (c) NAVER Corp.
 * eg.visible projects are licensed under the MIT license
 */
import { Component } from "eg.component";

const EVENTS = {
	"change": "change"
};

/**
 * A module that checks if an element is visible in the base element or viewport.
 * @class
 * @name eg.Visible
 * @extends eg.component
 * @group egjs
 */

export class Visible extends Component {
	constructor (element, options, _prefix) {
		super();
		this._prefix = _prefix || "";
		this.options = {
			targetClass: "check_visible",
			expandSize: 0
		};
		Object.assign(this.options, options);

		this._wrapper = $(element)[0] || document;

		// this._wrapper is Element, or may be Window
		if (this._wrapper.nodeType && this._wrapper.nodeType === 1) {
			this._getAreaRect = this._getWrapperRect;
		} else {
			this._getAreaRect = this._getWindowRect;
		}

		this._targets = [];
		this._timer = null;
		this._supportElementsByClassName = (function() {
			let dummy = document.createElement("div");
			let dummies;
			if (!dummy.getElementsByClassName) {
				return false;
			}
			dummies = dummy.getElementsByClassName("dummy");
			dummy.innerHTML = "<span class='dummy'></span>";
			return dummies.length === 1;
		})();

		this.refresh();
	}

	refresh() {
		if (this._supportElementsByClassName) {
			this._targets = this._wrapper
				.getElementsByClassName(this.options.targetClass);
			this.refresh = function() {
				return this;
			};
		} else {
			this.refresh = function() {
				this._targets = $(this._wrapper)
					.find("." + this.options.targetClass)
					.get();
				return this;
			};
		}
		return this.refresh();
	}

	check(delay, containment) {
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
			this._timer = setTimeout($.proxy(function() {
				this._check(containment);
				this._timer = null;
			}, this), delay);
		}
		return this;
	}

	_getWrapperRect() {
		return this._wrapper.getBoundingClientRect();
	}

	_getWindowRect() {
		// [IE7] document.documentElement.clientHeight has always value 0 (bug)
		return {
			top: 0,
			left: 0,
			bottom: document.documentElement.clientHeight ||
			document.body.clientHeight,
			right: document.documentElement.clientWidth ||
			document.body.clientWidth
		};
	}

	_reviseElements(target, i) {
		if (this._supportElementsByClassName) {
			this._reviseElements = function() {
				return true;
			};
		} else {
			this._reviseElements = function(target, i) {
				if (!$(target).hasClass(this.options.targetClass)) {
					target.__VISIBLE__ = null;
					this._targets.splice(i, 1);
					return false;
				}
				return true;
			};
		}
		return this._reviseElements(target, i);
	}

	_check(containment) {
		let expandSize = parseInt(this.options.expandSize, 10);
		let visibles = [];
		let invisibles = [];

		let i;
		let area;
		let rect;
		let target;
		let targetArea;
		let before;
		let after;

		// Error Fix: Cannot set property top of #<ClientRect> which has only a getter
		rect = this._getAreaRect();
		area = {
			top: rect.top - expandSize,
			left: rect.left - expandSize,
			bottom: rect.bottom + expandSize,
			right: rect.right + expandSize
		};

		for (i = this._targets.length - 1, target, targetArea, after, before;
			 target = this._targets[i] ; i--) {
			targetArea = target.getBoundingClientRect();
			if (targetArea.width === 0 && targetArea.height === 0) {
				continue;
			}
			if (this._reviseElements(target, i)) {
				before = !!target.__VISIBLE__;

				if (containment) {
					target.__VISIBLE__ = after = !(
						targetArea.top < area.top  ||
						targetArea.bottom > area.bottom  ||
						targetArea.right > area.right ||
						targetArea.left < area.left
					);
				} else {
					target.__VISIBLE__ = after = !(
						targetArea.bottom < area.top ||
						area.bottom < targetArea.top ||
						targetArea.right < area.left ||
						area.right < targetArea.left
					);
				}

				(before !== after) && (after ? visibles : invisibles).unshift(target);
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

	destroy() {
		this.off();
		this._targets = [];
		this._wrapper = this._timer = null;
	}
}
