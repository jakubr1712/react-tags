import { getProgressColor } from "./getProgressColor";

describe("getProgressColor", () => {
  it('returns "#4caf50" when currentTags is 5 or more', () => {
    expect(getProgressColor(5)).toBe("#4caf50");
    expect(getProgressColor(6)).toBe("#4caf50");
  });

  it('returns "#8bc34a" when currentTags is 4', () => {
    expect(getProgressColor(4)).toBe("#8bc34a");
  });

  it('returns "#cddc39" when currentTags is 3', () => {
    expect(getProgressColor(3)).toBe("#cddc39");
  });

  it('returns "#f44336" when currentTags is less than 3', () => {
    expect(getProgressColor(2)).toBe("#f44336");
    expect(getProgressColor(1)).toBe("#f44336");
    expect(getProgressColor(0)).toBe("#f44336");
  });
});
