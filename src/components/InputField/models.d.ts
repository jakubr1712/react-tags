export interface IInputFieldProps {
  input: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
  onFocus: () => void;
}
