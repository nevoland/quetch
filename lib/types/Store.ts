// TODO: Move to other library
export type Store<T = any> = {
  has(key: string): Promise<boolean>;
  get(key: string): Promise<T>;
  set(key: string, value: T): Promise<void>;
  delete(key: string): Promise<void>;
};
