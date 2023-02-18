import { multiply } from "../src/math";

describe(" multiply ", () => {
  it(" multiplies two numbers ", () => {
    expect(multiply(1, 2)).toBe(2);
  });
});