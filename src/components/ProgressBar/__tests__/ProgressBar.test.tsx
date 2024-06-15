import React from 'react';
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { IProgressBarComponentProps } from "../models.d";
import ProgressBar from '../ProgressBar';


describe('ProgressBar component', () => {
  it('renders properly', () => {
    const { container }= render(<ProgressBar />);

    expect(container).toMatchSnapshot();
  })
});
