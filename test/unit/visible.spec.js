import Visible from "../../src/Visible";

function getWindowInnerHeight() {
	return window.innerHeight
		|| document.documentElement.clientHeight
		|| document.body.clientHeight;
}

describe("visible", () => {
	let visible,
		windowInnerHeight,
		itemOffsetHeight;

	beforeEach(() => {
		document.body.innerHTML = __html__["test/unit/list.tmpl.html"];
		windowInnerHeight = getWindowInnerHeight();
		itemOffsetHeight = document.getElementsByClassName("check_visible").item(0).offsetHeight;
		visible = new Visible();
	});

	afterEach(() => {
		visible.destroy();
		visible = null;

		document.body.innerHTML = "";
	});

	describe("#check", () => {
		it("should have correct number of visible item", done => {
			let visibleItemLength = Math.ceil(windowInnerHeight / itemOffsetHeight);

			if (windowInnerHeight % itemOffsetHeight === 0) {
				visibleItemLength++;
			}

			visible.on("change", e => {
				e.visible.should.have.lengthOf(visibleItemLength);
				e.invisible.should.have.lengthOf(100 - visibleItemLength);
				done();
			});

			visible.check();
		});

		it("should have correct number of visible item with expanded size", done => {
			let visibleItemLength = Math.ceil((windowInnerHeight + (2 * itemOffsetHeight)) / itemOffsetHeight);

			if (windowInnerHeight % itemOffsetHeight === 0) {
				visibleItemLength++;
			}

			visible.options.expandSize = itemOffsetHeight * 2;

			visible.on("change", e => {
				e.visible.should.have.lengthOf(visibleItemLength);
				e.invisible.should.have.lengthOf(100 - visibleItemLength);
				done();
			});

			visible.check();
		});

		it("should have correct number of visible item when scroll", done => {
			let visibleItems, invisibleItems;

			visible.check();

			visible.on("change", e => {
				visibleItems = e.visible;
				invisibleItems = e.invisible;
			});

			window.scrollTo(0, 250);

			setTimeout(() => {
				visible.check();
				visibleItems.should.have.length.above(0);
				invisibleItems.should.have.length.above(0);
				done();
			}, 200);
		});
	});

	describe("#refresh", () => {
		it("should have correct number of target item when element appended", () => {
			var targetLength = visible._targets.length;

			document.getElementById("contents").insertAdjacentHTML(
				"beforeend",
				`<li class="list check_visible">APPEND</li>
				<li class="list check_visible">APPEND</li>
				<li class="list check_visible">APPEND</li>`);

			visible._targets.should.to.have.lengthOf(targetLength + 3);
		});
	});
});

describe("visible observe in targetContainer", () => {
	let visible;

	beforeEach(() => {
		document.body.innerHTML = __html__["test/unit/targetContainer.tmpl.html"];
		visible = new Visible(document.querySelector("#contents"), {
			targetContainer: document.querySelector(".container"),
		});
		window.scrollTo(0, 0);
	});

	afterEach(() => {
		visible.destroy();
		visible = null;

		document.body.innerHTML = "";
	});
	it("should have correct number of visible item in targetContainer", done => {
		visible.on("change", e => {
			// total: 100, document.querySelectorAll(".wrapper").children.length: 97
			expect(e.visible.length + e.invisible.length).to.be.equals(97);
			done();
		});

		visible.observe();
	});
});
describe("visible observe", () => {
	let visible,
		windowInnerHeight,
		itemOffsetHeight;

	beforeEach(() => {
		document.body.innerHTML = __html__["test/unit/observe.tmpl.html"];
		windowInnerHeight = getWindowInnerHeight();
		itemOffsetHeight = document.getElementsByClassName("check_visible").item(0).offsetHeight;
		visible = new Visible(document.querySelector("#contents"));
		window.scrollTo(0, 0);
	});

	afterEach(() => {
		visible.destroy();
		visible = null;

		document.body.innerHTML = "";
	});

	describe("#check", () => {
		it("should have correct number of visible item", done => {
			let visibleItemLength = Math.ceil(windowInnerHeight / itemOffsetHeight);
			if (windowInnerHeight % itemOffsetHeight === 0) {
				visibleItemLength++;
			}

			visible.on("change", e => {
				e.visible.should.have.lengthOf(visibleItemLength);
				e.invisible.should.have.lengthOf(100 - visibleItemLength);
				e.isTrusted.should.to.be.true;
				done();
			});

			visible.observe();
			expect(visible._observeCallback).to.be.ok;

		});
		it("should have correct number of visible item with delay", done => {
			let visibleItemLength = Math.ceil(windowInnerHeight / itemOffsetHeight);
			let visibles = [];
			let invisibles = [];

			if (windowInnerHeight % itemOffsetHeight === 0) {
				visibleItemLength++;
			}
			visible.observe({delay: 50});
			visibles.should.have.lengthOf(0);
			invisibles.should.have.lengthOf(0);

			visible.on("change", e => {
				visibles = e.visible;
				invisibles = e.invisible;

				e.visible.should.have.lengthOf(visibleItemLength);
				e.invisible.should.have.lengthOf(100 - visibleItemLength);
				done();
			});
			setTimeout(e => {
				visibles.should.have.lengthOf(visibleItemLength);
				invisibles.should.have.lengthOf(100 - visibleItemLength);
			}, 200);
		});
		it("should have correct number of visible item with containment", done => {
			let visibleItemLength = Math.ceil(windowInnerHeight / itemOffsetHeight);
			visible.on("change", e => {
				e.visible.should.have.lengthOf(visibleItemLength);
				e.invisible.should.have.lengthOf(100 - visibleItemLength);
				done();
			});
			setTimeout(e => {
				visible.observe({containment: true});
			});
		});
		it("should have correct number of visible item with containment2", done => {
			let visibleItemLength = Math.ceil(windowInnerHeight / itemOffsetHeight);

			visibleItemLength--;

			visible.on("change", e => {
				e.visible.should.have.lengthOf(visibleItemLength);
				e.invisible.should.have.lengthOf(100 - visibleItemLength);
				done();
			});
			document.querySelector("#contents").scrollTop = 10;
			setTimeout(e => {
				visible.observe({containment: true});
			});
		});
		it("should have correct number of visible item with expanded size", done => {
			let visibleItemLength = Math.ceil((windowInnerHeight + (2 * itemOffsetHeight)) / itemOffsetHeight);

			if (windowInnerHeight % itemOffsetHeight === 0) {
				visibleItemLength++;
			}

			visible.options.expandSize = itemOffsetHeight * 2;

			visible.on("change", e => {
				e.visible.should.have.lengthOf(visibleItemLength);
				e.invisible.should.have.lengthOf(100 - visibleItemLength);
				done();
			});

			visible.observe();
		});

		it("should have correct number of visible item when scroll", done => {
			let visibleItems, invisibleItems;

			visible.observe();
			expect(visible._observer).to.be.ok;

			visible.on("change", e => {
				e.visible.should.have.length.above(0);
				e.invisible.should.have.length.above(0);
				e.isTrusted.should.to.be.true;
				done();
			});

			visible._wrapper.scrollTop = 250;
		});
	});
});


describe("visible observe#event", () => {
	let visible,
		windowInnerHeight,
		itemOffsetHeight;

	beforeEach(() => {
		document.body.innerHTML = __html__["test/unit/observe.tmpl.html"];
		windowInnerHeight = getWindowInnerHeight();
		itemOffsetHeight = document.getElementsByClassName("check_visible").item(0).offsetHeight;
		visible = new Visible(document.querySelector("#contents"));
		window.scrollTo(0, 0);
	});

	afterEach(() => {
		visible.destroy();
		visible = null;

		document.body.innerHTML = "";
	});

	describe("#check", () => {
		it("should have correct number of visible item", done => {
			let visibleItemLength = Math.ceil(windowInnerHeight / itemOffsetHeight);
			if (windowInnerHeight % itemOffsetHeight === 0) {
				visibleItemLength++;
			}

			visible.on("change", e => {
				e.visible.should.have.lengthOf(visibleItemLength);
				e.invisible.should.have.lengthOf(100 - visibleItemLength);
				done();
			});
			setTimeout(e => {
				visible._addObserveEvent();
			})
		});
		it("should have correct number of visible item with delay", done => {
			let visibleItemLength = Math.ceil(windowInnerHeight / itemOffsetHeight);
			let visibles = [];
			let invisibles = [];

			if (windowInnerHeight % itemOffsetHeight === 0) {
				visibleItemLength++;
			}
			visible._addObserveEvent({delay: 50});
			visibles.should.have.lengthOf(0);
			invisibles.should.have.lengthOf(0);

			visible.on("change", e => {
				visibles = e.visible;
				invisibles = e.invisible;

				e.visible.should.have.lengthOf(visibleItemLength);
				e.invisible.should.have.lengthOf(100 - visibleItemLength);
				done();
			});
			setTimeout(e => {
				visibles.should.have.lengthOf(visibleItemLength);
				invisibles.should.have.lengthOf(100 - visibleItemLength);
			}, 200);
		});
		it("should have correct number of visible item with containment", done => {
			let visibleItemLength = Math.ceil(windowInnerHeight / itemOffsetHeight);


			visible.on("change", e => {
				e.visible.should.have.lengthOf(visibleItemLength);
				e.invisible.should.have.lengthOf(100 - visibleItemLength);
				done();
			});
			setTimeout(e => {
				visible._addObserveEvent({containment: true});
			});
		});
		it("should have correct number of visible item with containment2", done => {
			let visibleItemLength = Math.ceil(windowInnerHeight / itemOffsetHeight);

			visibleItemLength--;

			visible.on("change", e => {
				e.visible.should.have.lengthOf(visibleItemLength);
				e.invisible.should.have.lengthOf(100 - visibleItemLength);
				done();
			});
			document.querySelector("#contents").scrollTop = 10;
			setTimeout(e => {
				visible._addObserveEvent({ containment: true });
			});
		});
		it("should have correct number of visible item with expanded size", done => {
			let visibleItemLength = Math.ceil((windowInnerHeight + (2 * itemOffsetHeight)) / itemOffsetHeight);

			if (windowInnerHeight % itemOffsetHeight === 0) {
				visibleItemLength++;
			}

			visible.options.expandSize = itemOffsetHeight * 2;

			visible.on("change", e => {
				e.visible.should.have.lengthOf(visibleItemLength);
				e.invisible.should.have.lengthOf(100 - visibleItemLength);
				done();
			});

			visible._addObserveEvent();
		});

		it("should have correct number of visible item when scroll", done => {
			let visibleItems, invisibleItems;

			visible._addObserveEvent();

			visible.on("change", e => {
				e.visible.should.have.length.above(0);
				e.invisible.should.have.length.above(0);
				e.isTrusted.should.to.be.true;
				done();
			});

			visible._wrapper.scrollTop = 250;

		});
	});
});

describe("iScroll", () => {
	let visible,
		iScroll;

	beforeEach(() => {
		document.body.innerHTML = __html__["test/unit/fixed.tmpl.html"];
		visible = new Visible();
		iScroll = new IScroll("#contents");
	});

	afterEach(() => {
		visible.destroy();
		visible = null;

		iScroll.destroy();
		iScroll = null;

		document.body.innerHTML = "";
	});
	it("should have correct number of visible item after iscroll", done => {
		window.scrollTo(0, 0);
		iScroll.scrollTo(0, 0);
		visible.check();
		visible.on("change", e => {
			e.visible.should.to.have.lengthOf(5);
			e.invisible.should.to.have.lengthOf(5);
			e.isTrusted.should.to.be.true;
			done();
		});
		iScroll.scrollTo(0, -501);

		setTimeout(() => {
			visible.check();
		}, 200);
	});
});

describe("contaiment visible", () => {
	let visible,
		contentsEl;

	beforeEach(() => {
		document.body.innerHTML = __html__["test/unit/list.tmpl.html"];
		contentsEl = document.getElementById("contents");
		contentsEl.classList.add("scrollable");

		visible = new Visible(contentsEl);
	});

	afterEach(() => {
		contentsEl = null;

		visible.destroy();
		visible = null;

		document.body.innerHTML = "";
	});

	it("should have correct number of visible item", done => {
		visible.on("change", e => {
			e.visible.should.to.have.lengthOf(5);
			e.visible[4].innerText.should.to.equal("#5");
			done();
		});

		visible.check(true);
	});

	it("should have correct number of visible item when scroll", done => {
		visible.check(true);

		visible.on("change", e => {
			e.visible.should.to.have.lengthOf(2);
			e.invisible.should.to.have.lengthOf(2);
			done();
		});

		contentsEl.scrollTop = 40;

		setTimeout(() => {
			visible.check(true);
		}, 200);
	});
});

describe("getVisibleElements", () => {
	let visible,
		windowInnerHeight,
		itemOffsetHeight;

	beforeEach(() => {
		document.body.innerHTML = __html__["test/unit/list.tmpl.html"];
		windowInnerHeight = getWindowInnerHeight();
		itemOffsetHeight = document.getElementsByClassName("check_visible").item(0).offsetHeight;

		visible = new Visible();
	});

	afterEach(() => {
		visible.destroy();
		visible = null;

		document.body.innerHTML = "";
	});

	it("should have 0 visible elements on init", () => {
		expect(visible.getVisibleElements()).to.be.empty;
	});

	it("should have same amount of visible elements as 'visible' from the change event", done => {
		let visibleItemLength = Math.ceil(windowInnerHeight / itemOffsetHeight);

		if (windowInnerHeight % itemOffsetHeight === 0) {
			visibleItemLength++;
		}

		visible.on("change", e => {
			expect(visible.getVisibleElements().length).to.equal(visibleItemLength);
			expect(visible.getVisibleElements().length).to.equal(e.visible.length);
			done();
		});

		visible.check();
	});
});
