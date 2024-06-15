import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import WarningText from "../WarningText";
import { IWarningTextProps } from "../models.d";

describe("WarningText component", () => {
  it("renders properly and matches snapshot", () => {
    const message = "This is a warning message";
    const { container } = render(<WarningText message={message} />);

    expect(container).toMatchSnapshot();
  });

  it("displays the correct message", () => {
    const message = "This is a warning message";
    render(<WarningText message={message} />);

    expect(screen.getByText(message)).toBeInTheDocument();
  });

  it("renders the warning icon", () => {
    const message = "This is a warning message";
    render(<WarningText message={message} />);

    expect(screen.getByText("ℹ️")).toBeInTheDocument();
  });
});
