import { getProgressText } from "./getProgressText";

describe("getProgressText", () => {
  it('returns "Znakomicie" when currentTags is 5 or more', () => {
    expect(getProgressText(5)).toBe("Znakomicie");
    expect(getProgressText(6)).toBe("Znakomicie");
  });

  it('returns "Dobrze" when currentTags is 4', () => {
    expect(getProgressText(4)).toBe("Dobrze");
  });

  it('returns "Słabo" when currentTags is less than 4', () => {
    expect(getProgressText(3)).toBe("Słabo");
    expect(getProgressText(2)).toBe("Słabo");
    expect(getProgressText(1)).toBe("Słabo");
    expect(getProgressText(0)).toBe("Słabo");
  });
});
