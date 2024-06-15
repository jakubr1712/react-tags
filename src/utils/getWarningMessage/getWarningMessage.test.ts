import { getWarningMessage } from "./getWarningMessage";

describe("getWarningMessage", () => {
  it("returns the correct message when currentTags is less than requiredTags", () => {
    expect(getWarningMessage(2, 5)).toBe(
      "Zbyt mało tagów. Dodaj jeszcze 3 aby poprawić widoczność artykułu"
    );
    expect(getWarningMessage(0, 5)).toBe(
      "Zbyt mało tagów. Dodaj jeszcze 5 aby poprawić widoczność artykułu"
    );
  });

  it("returns the correct message when currentTags is equal to or more than requiredTags", () => {
    expect(getWarningMessage(5, 5)).toBe(
      "Dobra robota! Masz wystarczająco tagów."
    );
    expect(getWarningMessage(6, 5)).toBe(
      "Dobra robota! Masz wystarczająco tagów."
    );
  });
});
