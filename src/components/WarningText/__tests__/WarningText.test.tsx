import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { IWarningTextComponentProps } from "../models.d";
import WarningText from "../WarningText";

describe("WarningText component", () => {
  it("renders properly", () => {
    const { container } = render(<WarningText />);

    expect(container).toMatchSnapshot();
  });
});
