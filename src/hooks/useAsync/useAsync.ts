import { useCallback, useEffect, useState } from "react";
import { IUseAsyncReturn } from "./models";

function useAsync<T = unknown>(
  callback,
  dependencies: (boolean | string | undefined | number)[] = []
): IUseAsyncReturn<T> {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState();
  const [value, setValue] = useState<T>();

  const callbackMemoized = useCallback(() => {
    setLoading(true);
    setError(undefined);
    setValue(undefined);
    callback()
      .then(setValue)
      .catch(setError)
      .finally(() => setLoading(false));
  }, dependencies);

  useEffect(() => {
    callbackMemoized();
  }, [callbackMemoized]);

  return { loading, error, value };
}

export default useAsync;
