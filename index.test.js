const computeFiguresPoint = require(".");

describe("Figure result", () => {
  it.each([
    { input: [1, 2, 3, 4, 6], output: 16, label: "Chance" },
    { input: [1, 1, 1, 1, 1], output: 50, label: "YAMS" },
    { input: [1, 1, 1, 4, 5], output: 28, label: "Brelan" },
    { input: [1, 1, 1, 1, 5], output: 35, label: "Carré" },
    { input: [1, 1, 1, 2, 2], output: 30, label: "Full" },
    { input: [2, 3, 4, 5, 6], output: 40, label: "Grande suite" },
  ])(
    "should return $output as $label figure given $input",
    ({ input, output }) => {
      expect(computeFiguresPoint(input)).toBe(output);
    }
  );
});
