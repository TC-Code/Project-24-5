const assert = require("assert");
const calculateDistancePoints = require("./calculateDistancePoints");

describe("calculateDistancePoints", () => {
  describe("hill size", () => {
    it("should return distance points for 'normal' hillSize", () => {
      const actual = calculateDistancePoints(100, "normal", 98);

      const expected = 64;

      assert.equal(actual, expected);
    });

    it("should return distance points for 'large' hillSize", () => {
      const actual = calculateDistancePoints(100, "large", 120);

      const expected = 24;

      assert.equal(actual, expected);
    });

    it("should return distance points for 'mammoth' hillSize", () => {
      const actual = calculateDistancePoints(200, "mammoth", 200);

      const expected = 120;

      assert.equal(actual, expected);
    });
  });

  describe("distance", () => {
    it("should return distance points if distance is a natural number", () => {
      const actual = calculateDistancePoints(100, "normal", 98);

      const expected = 64;

      assert.equal(actual, expected);
    });

    it("should return distance points if distance is a decimal number", () => {
      const actual = calculateDistancePoints(98.5, "normal", 98);

      const expected = 61;

      assert.equal(actual, expected);
    });

    it("should return 'Wrong type of data' if distance is not a 'number' ", () => {
      const actual = calculateDistancePoints("100", "normal", 98);

      const expected = "Wrong type of data";

      assert.equal(actual, expected);
    });
  });

  describe("kPoint", () => {
    it("should return distance points if kPoint is a natural number", () => {
      const actual = calculateDistancePoints(105, "normal", 98);

      const expected = 74;

      assert.equal(actual, expected);
    });

    it("should return 'Wrong type of data' if type of kPoint is not a 'number' ", () => {
      const actual = calculateDistancePoints(105, "normal", "98");

      const expected = "Wrong type of data";

      assert.equal(actual, expected);
    });
  });
});
