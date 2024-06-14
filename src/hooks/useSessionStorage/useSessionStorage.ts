import { useCallback, useState, useEffect } from "react";

import { IUseStorageReturn } from "./models";

const useSessionStorage = (
  key: string,
  defaultValue: string
): IUseStorageReturn => useStorage(key, defaultValue, window.sessionStorage);

function useStorage(
  key: string,
  defaultValue: string,
  storageObject: Storage
): IUseStorageReturn {
  const [value, setValue] = useState<string | undefined>(() => {
    const jsonValue = storageObject.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);

    return defaultValue;
  });

  useEffect(() => {
    if (value === undefined) return storageObject.removeItem(key);
    storageObject.setItem(key, JSON.stringify(value));
  }, [key, value, storageObject]);

  const remove = useCallback(() => {
    setValue(undefined);
  }, []);

  return { value, setValue, remove };
}

export default useSessionStorage;
