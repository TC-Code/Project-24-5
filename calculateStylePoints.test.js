const assert = require("assert");
const calculateStylePoints = require("./calculateStylePoints");

describe("calculateStylePoints", () => {
  describe("style points", () => {
    it("should return style points if notes are natural numbers", () => {
      const actual = calculateStylePoints([19, 17, 18, 16, 15]);

      const expected = 51;

      assert.equal(actual, expected);
    });

    it("should return style points if notes are decimal numbers", () => {
      const actual = calculateStylePoints([19.5, 18, 16.5, 17, 18.5]);

      const expected = 53.5;

      assert.equal(actual, expected);
    });

    it("should return style points if notes are repeating", () => {
      const actual = calculateStylePoints([18, 18, 18, 18, 18]);

      const expected = 54;

      assert.equal(actual, expected);
    });

    it("should return 'Wrong type of styleNotes' if styleNotes is not an array", () => {
      const actual = calculateStylePoints(17, 19.5, 18.5, 18, 17);

      const expected = "Wrong type of styleNotes";

      assert.equal(actual, expected);
    });

    it("should return 'Not enough judges notes' if there are less than 5 notes", () => {
      const actual = calculateStylePoints([18, 17, 18, 18.5]);

      const expected = "Not enough judges notes";

      assert.equal(actual, expected);
    });

    it("should return 'Note should be a number' if judges notes are not a number", () => {
      const actual = calculateStylePoints(["18", "17.5", 18, 19, 17]);

      const expected = "Note should be a number";

      assert.equal(actual, expected);
    });
  });
});
