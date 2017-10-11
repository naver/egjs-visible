import {$} from "../../src/utils";

describe("Util Test", function() {
  beforeEach(() => {
    this.el = sandbox();
  });
  afterEach(() => {
    cleanup();
  });
  it("should check `$` method", () => {
    // Given
    // When
    const complicatedHTML = "<div class='item'><div class='thumbnail'><img class='img-rounded' src='#' /><div class='caption'><p><a href='http://www.naver.com'></a></p></div></div></div>";
    const div = complicatedHTML; // string
    const divs = [complicatedHTML, complicatedHTML];
    
    // Then
    expect($(div) instanceof HTMLElement).to.be.true;
    expect($(divs) instanceof HTMLElement).to.be.true;
    expect($(divs, true).length).to.be.equal(2);
    expect($("#sandbox")).to.be.equal(this.el);
    expect(this.el).to.be.equal(this.el);
  });
});
