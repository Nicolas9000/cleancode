const computeFiguresPoint = require(".");

describe("Figure result", () => {
  it("Chance", () => {
    expect(computeFiguresPoint([1, 2, 3, 4, 6])).toBe(16);
  });
});
