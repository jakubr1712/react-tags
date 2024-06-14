import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Tag from "../Tag";

test("calls onRemove when remove button is clicked", () => {
  const onRemove = jest.fn();
  const { getByText } = render(<Tag name="Tag" onRemove={onRemove} />);

  fireEvent.click(getByText("x"));

  expect(onRemove).toHaveBeenCalled();
});
