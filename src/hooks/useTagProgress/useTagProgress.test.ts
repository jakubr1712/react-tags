import { renderHook } from "@testing-library/react-hooks";
import { useTagProgress } from "./useTagProgress";
import { getProgressColor } from "utils/getProgressColor";
import { getProgressText } from "utils/getProgressText";
import { getWarningMessage } from "utils/getWarningMessage";

jest.mock("utils/getProgressColor");
jest.mock("utils/getProgressText");
jest.mock("utils/getWarningMessage");

describe("useTagProgress", () => {
  beforeEach(() => {
    (getProgressColor as jest.Mock).mockImplementation(
      (currentTags: number) => {
        if (currentTags >= 5) {
          return "#4caf50";
        } else if (currentTags >= 4) {
          return "#8bc34a";
        } else if (currentTags >= 3) {
          return "#cddc39";
        } else {
          return "#f44336";
        }
      }
    );

    (getProgressText as jest.Mock).mockImplementation((currentTags: number) => {
      if (currentTags >= 5) {
        return "Znakomicie";
      } else if (currentTags >= 4) {
        return "Dobrze";
      } else {
        return "Słabo";
      }
    });

    (getWarningMessage as jest.Mock).mockImplementation(
      (currentTags: number, requiredTags: number) => {
        const tagsNeeded = requiredTags - currentTags;
        return currentTags < requiredTags
          ? `Zbyt mało tagów. Dodaj jeszcze ${tagsNeeded} aby poprawić widoczność artykułu`
          : "Dobra robota! Masz wystarczająco tagów.";
      }
    );
  });

  it("calculates progress, color, text, and message correctly", () => {
    const { result, rerender } = renderHook(
      ({ currentTags }) => useTagProgress(currentTags),
      {
        initialProps: { currentTags: 0 },
      }
    );

    expect(result.current.progress).toBe(0);
    expect(result.current.color).toBe("#f44336");
    expect(result.current.text).toBe("Słabo");
    expect(result.current.message).toBe(
      "Zbyt mało tagów. Dodaj jeszcze 5 aby poprawić widoczność artykułu"
    );

    rerender({ currentTags: 3 });
    expect(result.current.progress).toBe(60);
    expect(result.current.color).toBe("#cddc39");
    expect(result.current.text).toBe("Słabo");
    expect(result.current.message).toBe(
      "Zbyt mało tagów. Dodaj jeszcze 2 aby poprawić widoczność artykułu"
    );

    rerender({ currentTags: 4 });
    expect(result.current.progress).toBe(80);
    expect(result.current.color).toBe("#8bc34a");
    expect(result.current.text).toBe("Dobrze");
    expect(result.current.message).toBe(
      "Zbyt mało tagów. Dodaj jeszcze 1 aby poprawić widoczność artykułu"
    );

    rerender({ currentTags: 5 });
    expect(result.current.progress).toBe(100);
    expect(result.current.color).toBe("#4caf50");
    expect(result.current.text).toBe("Znakomicie");
    expect(result.current.message).toBe(
      "Dobra robota! Masz wystarczająco tagów."
    );
  });
});
