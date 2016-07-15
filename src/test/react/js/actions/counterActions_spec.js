import * as CounterActions from "actions/counterActions";

describe("CounterAction", () => {
  describe("produce action", () => {

    it("INCREMENT", function () {
      let action = {"type": "INCREMENT"};
      expect(CounterActions.inc()).toEqual(action);
    });
  });
});