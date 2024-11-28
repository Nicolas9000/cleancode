const computeFiguresPoint = require(".");

describe("Figure result", () => {
  it("Chance figure", () => {
    expect(computeFiguresPoint([1, 2, 3, 4, 6])).toBe(16);
  });
  it("YAMS figure", () => {
    expect(computeFiguresPoint([1, 1, 1, 1, 1])).toBe(50);
  });
});
