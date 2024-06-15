import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ITagListComponentProps } from "../models.d";
import TagList from "../TagList";

describe("TagList component", () => {
  it("renders properly", () => {
    const { container } = render(<TagList />);

    expect(container).toMatchSnapshot();
  });
});
