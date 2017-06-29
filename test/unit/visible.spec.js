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
				e.invisible.should.have.lengthOf(0);
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
				e.invisible.should.have.lengthOf(0);
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

describe("iScroll", () => {
	let visible,
		iScroll;

	beforeEach(() => {
		document.body.innerHTML = __html__["test/unit/pre.tmpl.html"];
		visible = new Visible();
		iScroll = new IScroll("#view");
	});

	afterEach(() => {
		visible.destroy();
		visible = null;

		iScroll.destroy();
		iScroll = null;

		document.body.innerHTML = "";
	});

	it("should have correct number of visible item after iscroll", done => {
		visible.check();

		visible.on("change", e => {
			e.visible.should.to.have.lengthOf(3);
			e.invisible.should.to.have.lengthOf(3);
			done();
		});

		iScroll.scrollTo(0, -100);

		setTimeout(() => {
			visible.check();
		}, 200)
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
