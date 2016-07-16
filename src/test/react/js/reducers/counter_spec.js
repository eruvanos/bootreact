import CounterReducer from "reducers/counter";

describe("CounterReducer", () => {
  describe("should handle actions", () => {

    it("INCREMENT", function () {
      let action = {"type": "INCREMENT"};
      expect(CounterReducer(undefined, action)).toEqual(1);
    });

    it("UNKNOWN", function () {
      let action = {"type": "UNKNOWN"};
      expect(CounterReducer(0, action)).toEqual(0);
    });
  });
});