import useAsync from "hooks/useAsync";
import { IUseAsyncReturn } from "hooks/useAsync/models";

const DEFAULT_OPTIONS = {
  headers: {
    "Content-Type": "application/json",
    mode: "cors",
    // ApiKeyAuthorization: process.env.REACT_APP_API_KEY_AUTHORIZATION!,
  },
};

function useFetch<T = unknown>(
  url: string,
  options = {},
  dependencies: (boolean | string | undefined | number)[] = []
): IUseAsyncReturn<T> {
  return useAsync(() => {
    // ${process.env.REACT_APP_API_URL}
    return fetch(`/${url}`, {
      ...DEFAULT_OPTIONS,
      ...options,
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .catch((e) => {
        console.log(e);
      });
  }, dependencies);
}

export default useFetch;
