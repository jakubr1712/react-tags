export interface IUseAsyncReturn<T> {
  loading: boolean;
  error?: Error;
  value?: T;
}
