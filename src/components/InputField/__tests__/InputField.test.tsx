import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import InputField from "../InputField";
import { IInputFieldProps } from "../models.d";

describe("InputField component", () => {
  const defaultProps: IInputFieldProps = {
    input: "",
    onChange: jest.fn(),
    onClear: jest.fn(),
    onFocus: jest.fn(),
  };

  it("renders properly and matches snapshot", () => {
    const { container } = render(<InputField {...defaultProps} />);
    expect(container).toMatchSnapshot();
  });

  it("renders the search icon", () => {
    render(<InputField {...defaultProps} />);
    expect(screen.getByTestId("search-icon")).toBeInTheDocument();
  });

  it("renders the input field with the correct placeholder", () => {
    render(<InputField {...defaultProps} />);
    expect(
      screen.getByPlaceholderText("Wyszukaj grupę lub tag")
    ).toBeInTheDocument();
  });

  it("calls onChange when input value changes", () => {
    render(<InputField {...defaultProps} />);
    fireEvent.change(screen.getByPlaceholderText("Wyszukaj grupę lub tag"), {
      target: { value: "test" },
    });
    expect(defaultProps.onChange).toHaveBeenCalled();
  });

  it("calls onFocus when the input field is focused", () => {
    render(<InputField {...defaultProps} />);
    fireEvent.focus(screen.getByPlaceholderText("Wyszukaj grupę lub tag"));
    expect(defaultProps.onFocus).toHaveBeenCalled();
  });

  it("calls onClear when the clear icon is clicked", () => {
    render(<InputField {...defaultProps} />);
    fireEvent.click(screen.getByText("×"));
    expect(defaultProps.onClear).toHaveBeenCalled();
  });
});
