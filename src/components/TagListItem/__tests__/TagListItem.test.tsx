import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TagListItem from "../TagListItem";
import { ITagListItemProps } from "../models.d";

describe("TagListItem component", () => {
  const mockToggleTag = jest.fn();

  const defaultProps: ITagListItemProps = {
    tag: { id: 1, name: "Tag1", count: 10, isActive: false },
    index: 0,
    toggleTag: mockToggleTag,
  };

  beforeEach(() => {
    mockToggleTag.mockClear();
  });

  it("renders properly and matches snapshot", () => {
    const { container } = render(<TagListItem {...defaultProps} />);
    expect(container).toMatchSnapshot();
  });

  it("renders the correct tag name and count", () => {
    render(<TagListItem {...defaultProps} />);
    expect(screen.getByText("Tag1")).toBeInTheDocument();
    expect(screen.getByText("+10")).toBeInTheDocument();
  });

  it("applies highlighted class to the first tag", () => {
    render(<TagListItem {...defaultProps} />);
    expect(screen.getByLabelText("Tag1").closest("label")).toHaveClass(
      "tag-list__item--highlighted"
    );
  });

  it("calls toggleTag with correct tag when checkbox is clicked", () => {
    render(<TagListItem {...defaultProps} />);
    fireEvent.click(screen.getByLabelText("Tag1"));
    expect(mockToggleTag).toHaveBeenCalledWith(defaultProps.tag);
  });

  it("renders the correct tag name and count for a non-first tag", () => {
    const props = {
      ...defaultProps,
      index: 1,
      tag: { id: 2, name: "Tag2", count: 20, isActive: true },
    };
    render(<TagListItem {...props} />);
    expect(screen.getByText("Tag2")).toBeInTheDocument();
    expect(screen.getByText("+20")).toBeInTheDocument();
    expect(screen.getByLabelText("Tag2").closest("label")).not.toHaveClass(
      "tag-list__item--highlighted"
    );
  });
});
