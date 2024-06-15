import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProgressBar from "../ProgressBar";

describe("ProgressBar component", () => {
  it("renders properly and matches snapshot", () => {
    const { container } = render(<ProgressBar progress={0} color="#000" />);
    expect(container).toMatchSnapshot();
  });

  it("renders the correct number of dots", () => {
    render(<ProgressBar progress={0} color="#000" />);
    expect(screen.getAllByRole("progressbar-item")).toHaveLength(5);
  });

  it("renders the correct number of active dots", () => {
    render(<ProgressBar progress={60} color="#000" />);
    const activeDots = screen.getAllByRole("progressbar-item--active");
    expect(activeDots).toHaveLength(3);
  });

  it("renders with correct color for active dots", () => {
    const activeColor = "#4caf50";
    render(<ProgressBar progress={60} color={activeColor} />);
    const activeDots = screen.getAllByRole("progressbar-item--active");
    activeDots.forEach((dot) => {
      expect(dot).toHaveStyle(`background-color: ${activeColor}`);
    });
  });
});
