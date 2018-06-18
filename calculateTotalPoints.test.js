const assert = require("assert");
const calculateTotalPoints = require("./calculateTotalPoints");

describe("calculateTotalPoints", () => {
  describe("total points", () => {
    it("should return total points if factor is a positive number", () => {
      const actual = calculateTotalPoints(
        100,
        "normal",
        98,
        [18, 18.5, 17, 17.5, 18],
        1,
        6.4
      );

      const expected = 124.9;

      assert.equal(actual, expected);
    });

    it("should return total points if factor is a positive decimal number", () => {
      const actual = calculateTotalPoints(
        100,
        "normal",
        98,
        [18, 18.5, 17, 17.5, 18],
        1.5,
        6.4
      );
      const expected = 125.4;

      assert.equal(actual, expected);
    });

    it("should return total points if factor is a negativ decimal number", () => {
      const actual = calculateTotalPoints(
        100,
        "normal",
        98,
        [18, 18.5, 17, 17.5, 18],
        -1.5,
        -6.4
      );

      const expected = 109.6;

      assert.equal(actual, expected);
    });

    it("should return 'Wrong value of factor' if factor is not a 'number'", () => {
      const actual = calculateTotalPoints(
        100,
        "normal",
        98,
        [19, 19.5, 19, 19.5, 19],
        "3",
        "-6.4"
      );

      const expected = "Wrong value of factor";

      assert.equal(actual, expected);
    });

    it("should return total points with the accuracy of one decimal place", () => {
      const actual = calculateTotalPoints(
        100,
        "normal",
        98,
        [19, 19, 19, 19, 19],
        2,
        6.4
      );

      const expected = "129.4";

      assert.equal(actual, expected);
    });
  });
});
