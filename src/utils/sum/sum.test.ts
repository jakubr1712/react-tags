import { sum } from "./index";

describe("sum function", () => {
  test("should correctly calculate the sum for a non-empty array", () => {
    const values = [1, 2, 3, 4];
    const expectedSum = 10;

    const result = sum(values);

    expect(result).toBe(expectedSum);
  });

  test("should correctly calcute sum for a  negative values", () => {
    const values = [-1, -2, -3, -4];
    const expectedSum = -10;

    const result = sum(values);

    expect(result).toBe(expectedSum);
  });

  test("should return 0 if the array is empty", () => {
    const values: number[] = [];
    const result = 0;

    expect(sum(values)).toBe(result);
  });

  test("should handle with one element", () => {
    const values = [4];
    const result = 4;

    expect(sum(values)).toBe(result);
  });

  test("should handle calculate sum with negative and positive values", () => {
    const values = [1, 2, 3, -1, -2];
    const result = 3;

    expect(sum(values)).toBe(result);
  });
});
