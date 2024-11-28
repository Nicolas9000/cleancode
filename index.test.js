const computeFiguresPoint = require(".");

describe("Figure result", () => {
  it("Chance figure", () => {
    expect(computeFiguresPoint([1, 2, 3, 4, 6])).toBe(16);
  });
  it("YAMS figure", () => {
    expect(computeFiguresPoint([1, 1, 1, 1, 1])).toBe(50);
  });
  it("Brelan figure", () => {
    expect(computeFiguresPoint([1, 1, 1, 4, 5])).toBe(28);
  });
  it("Carré figure", () => {
    expect(computeFiguresPoint([1, 1, 1, 1, 5])).toBe(35);
  });
  it("Full figure", () => {
    expect(computeFiguresPoint([1, 1, 1, 2, 2])).toBe(30);
  });
  it("Grande suite", () => {
    expect(computeFiguresPoint([2, 3, 4, 5, 6])).toBe(40);
  });
});
