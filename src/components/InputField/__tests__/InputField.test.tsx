import React from 'react';
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { IInputFieldComponentProps } from "../models.d";
import InputField from '../InputField';


describe('InputField component', () => {
  it('renders properly', () => {
    const { container }= render(<InputField />);

    expect(container).toMatchSnapshot();
  })
});
