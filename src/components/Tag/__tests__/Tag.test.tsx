import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Tag from "../Tag";
import { ITagProps } from "../models.d";

describe("Tag component", () => {
  const mockOnRemove = jest.fn();

  const defaultProps: ITagProps = {
    id: 1,
    name: "Sample Tag",
    onRemove: mockOnRemove,
  };

  beforeEach(() => {
    mockOnRemove.mockClear();
  });

  it("renders properly and matches snapshot", () => {
    const { container } = render(<Tag {...defaultProps} />);
    expect(container).toMatchSnapshot();
  });

  it("displays the correct tag name", () => {
    render(<Tag {...defaultProps} />);
    expect(screen.getByText("Sample Tag")).toBeInTheDocument();
  });

  it("calls onRemove with correct id when remove button is clicked", () => {
    render(<Tag {...defaultProps} />);
    fireEvent.click(screen.getByText("×"));
    expect(mockOnRemove).toHaveBeenCalledWith(1);
  });
});
