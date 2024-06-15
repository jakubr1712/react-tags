import React from 'react';
import { InputContainer, Input, SearchIcon, ClearIcon } from '../TagInput/TagInput.styled';

interface InputFieldProps {
  input: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onClear: () => void;
  onFocus: () => void;
}

const InputField: React.FC<InputFieldProps> = ({ input, onChange, onKeyDown, onClear, onFocus }) => {
  return (
    <InputContainer>
      <SearchIcon>
        <svg viewBox="0 0 24 24" width="16" height="16" fill="black">
          <path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8c1.64 0 3.16-.53 4.41-1.41L21.59 22 23 20.59l-7.18-7.18C17.47 13.16 18 11.64 18 10c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
        </svg>
      </SearchIcon>
      <Input
        value={input}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder="Wyszukaj grupę lub tag"
        onFocus={onFocus}
      />
      <ClearIcon onClick={onClear}>&times;</ClearIcon>
    </InputContainer>
  );
};

export default InputField;
