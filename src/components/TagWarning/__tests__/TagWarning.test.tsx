import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ITagWarningComponentProps } from "../models.d";
import TagWarning from "../TagWarning";

describe("TagWarning component", () => {
  it("renders properly", () => {
    const { container } = render(<TagWarning />);

    expect(container).toMatchSnapshot();
  });
});
