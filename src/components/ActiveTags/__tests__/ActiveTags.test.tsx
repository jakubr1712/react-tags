import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ActiveTags from "../ActiveTags";
import { IActiveTagsProps } from "../models.d";

describe("ActiveTags component", () => {
  const mockRemoveTag = jest.fn();

  const defaultProps: IActiveTagsProps = {
    tags: [
      { id: 1, name: "Tag1", count: 10, isActive: true },
      { id: 2, name: "Tag2", count: 20, isActive: true },
    ],
    removeTag: mockRemoveTag,
  };

  beforeEach(() => {
    mockRemoveTag.mockClear();
  });

  it("renders properly and matches snapshot", () => {
    const { container } = render(<ActiveTags {...defaultProps} />);
    expect(container).toMatchSnapshot();
  });

  it("renders all active tags", () => {
    render(<ActiveTags {...defaultProps} />);
    expect(screen.getByText("Tag1")).toBeInTheDocument();
    expect(screen.getByText("Tag2")).toBeInTheDocument();
  });

  it("calls removeTag with correct id when remove button is clicked", () => {
    render(<ActiveTags {...defaultProps} />);
    fireEvent.click(screen.getAllByText("×")[0]);
    expect(mockRemoveTag).toHaveBeenCalledWith(1);

    fireEvent.click(screen.getAllByText("×")[1]);
    expect(mockRemoveTag).toHaveBeenCalledWith(2);
  });
});
