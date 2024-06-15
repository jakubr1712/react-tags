import React from 'react';
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { IActiveTagsComponentProps } from "../models.d";
import ActiveTags from '../ActiveTags';


describe('ActiveTags component', () => {
  it('renders properly', () => {
    const { container }= render(<ActiveTags />);

    expect(container).toMatchSnapshot();
  })
});
