import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TagWarning from "../TagWarning";
import { useTagProgress } from "hooks/useTagProgress";
import { ITagWarningProps } from "../models.d";

jest.mock("hooks/useTagProgress");

describe("TagWarning component", () => {
  const mockUseTagProgress = useTagProgress as jest.MockedFunction<
    typeof useTagProgress
  >;

  const defaultProps: ITagWarningProps = {
    currentTags: 3,
  };

  beforeEach(() => {
    mockUseTagProgress.mockReturnValue({
      progress: 60,
      color: "#cddc39",
      text: "Słabo",
      message:
        "Zbyt mało tagów. Dodaj jeszcze 2 aby poprawić widoczność artykułu",
    });
  });

  it("renders properly and matches snapshot", () => {
    const { container } = render(<TagWarning {...defaultProps} />);
    expect(container).toMatchSnapshot();
  });

  it("displays the correct progress text and color", () => {
    render(<TagWarning {...defaultProps} />);
    expect(screen.getByText("Słabo")).toBeInTheDocument();
    expect(screen.getByText("Słabo")).toHaveStyle("color: #cddc39");
  });

  it("displays the correct warning message", () => {
    render(<TagWarning {...defaultProps} />);
    expect(
      screen.getByText(
        "Zbyt mało tagów. Dodaj jeszcze 2 aby poprawić widoczność artykułu"
      )
    ).toBeInTheDocument();
  });
});
