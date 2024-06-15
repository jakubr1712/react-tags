import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TagList from "../TagList";
import { ITagListProps } from "../models.d";
import { ITagListItemProps } from "../../TagListItem/models.d";

jest.mock("../../TagListItem", () => (props: ITagListItemProps) => (
  <li>{props.tag.name}</li>
));

describe("TagList component", () => {
  const mockToggleTag = jest.fn();

  const defaultProps: ITagListProps = {
    tags: [
      { id: 1, name: "Tag1", count: 10, isActive: false },
      { id: 2, name: "Tag2", count: 20, isActive: true },
      { id: 3, name: "Tag3", count: 30, isActive: false },
    ],
    filterText: "",
    toggleTag: mockToggleTag,
  };

  beforeEach(() => {
    mockToggleTag.mockClear();
  });

  it("renders properly and matches snapshot", () => {
    const { container } = render(<TagList {...defaultProps} />);
    expect(container).toMatchSnapshot();
  });

  it("renders the correct number of TagListItem components", () => {
    render(<TagList {...defaultProps} />);
    expect(screen.getByText("Tag1")).toBeInTheDocument();
    expect(screen.getByText("Tag2")).toBeInTheDocument();
    expect(screen.getByText("Tag3")).toBeInTheDocument();
  });

  it("filters tags based on filterText", () => {
    render(<TagList {...defaultProps} filterText="Tag1" />);
    expect(screen.getByText("Tag1")).toBeInTheDocument();
    expect(screen.queryByText("Tag2")).not.toBeInTheDocument();
    expect(screen.queryByText("Tag3")).not.toBeInTheDocument();
  });

  it("passes the correct props to TagListItem", () => {
    render(<TagList {...defaultProps} />);
    const filteredTags = defaultProps.tags.filter((tag) =>
      tag.name.toLowerCase().includes(defaultProps.filterText.toLowerCase())
    );

    filteredTags.forEach((tag, index) => {
      expect(screen.getByText(tag.name)).toBeInTheDocument();
    });
  });

  it("renders the correct tag names", () => {
    render(<TagList {...defaultProps} />);
    defaultProps.tags.forEach((tag) => {
      expect(screen.getByText(tag.name)).toBeInTheDocument();
    });
  });
});
