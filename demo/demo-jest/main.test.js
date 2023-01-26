const { plus, minus } = require("./main.js");

describe("parse", () => {
  test("reversible", () => {
    const a = 10;
    const b = 30;
    const step1 = plus(a, b);
    const step2 = minus(step1, a);
    expect(step2).toBe(a);
  });
});
