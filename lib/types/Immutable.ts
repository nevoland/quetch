export type Immutable<T> = {
  readonly [K in keyof T]: T[K];
};
