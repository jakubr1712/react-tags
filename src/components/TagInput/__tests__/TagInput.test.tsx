import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TagInput from '../TagInput';

const availableTags = [
  { id: 1, name: 'Maryla Rodowicz', count: 40, isActive: false },
  { id: 2, name: 'Odmrażanie trupa', count: 35, isActive: false },
  { id: 3, name: 'Festiwal w Opolu', count: 32, isActive: false },
  { id: 4, name: 'Legendy polskiej sceny muzycznej', count: 30, isActive: false },
  { id: 5, name: 'Przeboje lat 70', count: 26, isActive: false },
  { id: 6, name: 'Ikonka popkultury', count: 25, isActive: false },
  { id: 7, name: 'Polska muzyka', count: 17, isActive: false },
  { id: 8, name: 'Kabaret', count: 12, isActive: false },
];

test('activates and deactivates save button based on tag selection', () => {
  const { getByText, getByPlaceholderText, getByLabelText } = render(<TagInput availableTags={availableTags} />);

  const input = getByPlaceholderText('Szukaj tagów');
  fireEvent.change(input, { target: { value: 'Maryla Rodowicz' } });

  const checkbox = getByLabelText('Maryla Rodowicz');
  fireEvent.click(checkbox);

  const saveButton = getByText('Zapisz') as HTMLButtonElement;
  expect(saveButton).not.toBeDisabled();

  fireEvent.click(checkbox);
  expect(saveButton).toBeDisabled();
});

test('creates tags on save button click', () => {
  const { getByText, getByLabelText } = render(<TagInput availableTags={availableTags} />);

  const checkbox = getByLabelText('Maryla Rodowicz');
  fireEvent.click(checkbox);

  const saveButton = getByText('Zapisz');
  fireEvent.click(saveButton);

  expect(getByText('Maryla Rodowicz')).toBeInTheDocument();
});

test('removes tags on tag remove button click', () => {
  const { getByText, getByLabelText } = render(<TagInput availableTags={availableTags} />);

  const checkbox = getByLabelText('Maryla Rodowicz');
  fireEvent.click(checkbox);

  const saveButton = getByText('Zapisz');
  fireEvent.click(saveButton);

  const removeButton = getByText('x');
  fireEvent.click(removeButton);

  expect(getByText('Maryla Rodowicz')).not.toBeInTheDocument();
});
