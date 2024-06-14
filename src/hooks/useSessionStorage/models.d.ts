export interface IUseStorageReturn {
  value: string | undefined;
  setValue: React.Dispatch<React.SetStateAction<string | undefined>>;
  remove: () => void;
}
