const { plus, minus } = require("./main.js");

describe("parse", () => {
  test("reversible", () => {
    const a = 10;
    const b = 30;
    let step1 = plus(a, b);
    const step2 = minus(step1, b);
    expect(step2).toBe(a);
  });
});
