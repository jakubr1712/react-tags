export interface ITagProps {
  id: number;
  name: string;
  onRemove: (id: number) => void;
}
