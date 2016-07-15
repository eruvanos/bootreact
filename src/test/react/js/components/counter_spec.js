import Counter from "components/counter";

describe("CounterComponent", function () {

  beforeEach(function () {

    this.clickSpy = ()=>{};

    spyOn(this, "clickSpy");

    this.element = TestUtils.renderIntoDocument(
      <Counter counter={0}
               onInc={this.clickSpy}
               />
    );
  });

  afterEach(function () {
    ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(this.element).parentNode);
  });

  describe("render", function () {
    it("displays given counter", function () {
      expect(ReactDOM.findDOMNode(this.element)).toExist();
      expect(ReactDOM.findDOMNode(this.element)).toContainText("0");
    });
  });

  describe("click increment", function () {
    it("triggers onInc Method", function () {
      TestUtils.Simulate.click(this.element.refs["incButton"]);
      expect(this.clickSpy).toHaveBeenCalled();
    });
  });
});
