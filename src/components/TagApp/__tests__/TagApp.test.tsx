import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TagApp from "../TagApp";
import { ITagAppProps } from "../models";
import { useTags } from "hooks/useTags";

jest.mock("hooks/useTags");

describe("TagApp component", () => {
  const mockUseTags = useTags as jest.MockedFunction<typeof useTags>;

  const defaultProps: ITagAppProps = {
    data: [
      { id: 1, name: "Tag1", count: 10, isActive: false },
      { id: 2, name: "Tag2", count: 20, isActive: true },
      { id: 3, name: "Tag3", count: 30, isActive: false },
    ],
  };

  beforeEach(() => {
    mockUseTags.mockReturnValue({
      tags: defaultProps.data,
      activeTags: defaultProps.data.filter((tag) => tag.isActive),
      input: "",
      isFocusInput: false,
      setIsFocusInput: jest.fn(),
      toggleTag: jest.fn(),
      handleChange: jest.fn(),
      handleSave: jest.fn(),
      handleClearInput: jest.fn(),
      removeTag: jest.fn(),
    });
  });

  it("renders properly and matches snapshot", () => {
    const { container } = render(<TagApp {...defaultProps} />);
    expect(container).toMatchSnapshot();
  });

  it("renders the header properly", () => {
    render(<TagApp {...defaultProps} />);
    expect(screen.getByText("Tagi")).toBeInTheDocument();
  });

  it("renders the InputField component", () => {
    render(<TagApp {...defaultProps} />);
    expect(
      screen.getByPlaceholderText("Wyszukaj grupę lub tag")
    ).toBeInTheDocument();
  });

  it("renders the TagList component when input is focused", () => {
    mockUseTags.mockReturnValueOnce({
      ...mockUseTags(),
      isFocusInput: true,
    });
    render(<TagApp {...defaultProps} />);
    expect(screen.getByText("Tag1")).toBeInTheDocument();
    expect(screen.getByText("Tag2")).toBeInTheDocument();
    expect(screen.getByText("Tag3")).toBeInTheDocument();
  });

  it("renders the ActiveTags component when input is not focused", () => {
    render(<TagApp {...defaultProps} />);
    expect(screen.getByText("Tag2")).toBeInTheDocument();
    expect(screen.queryByText("Tag1")).not.toBeInTheDocument();
    expect(screen.queryByText("Tag3")).not.toBeInTheDocument();
  });

  it("calls handleSave when save button is clicked", () => {
    const { handleSave } = mockUseTags();
    mockUseTags.mockReturnValueOnce({
      ...mockUseTags(),
      isFocusInput: true,
      tags: [
        { id: 1, name: "Tag1", count: 10, isActive: true },
        { id: 2, name: "Tag2", count: 20, isActive: true },
        { id: 3, name: "Tag3", count: 30, isActive: false },
      ],
    });
    render(<TagApp {...defaultProps} />);
    fireEvent.click(screen.getByText("Zapisz"));
    expect(handleSave).toHaveBeenCalled();
  });
});
