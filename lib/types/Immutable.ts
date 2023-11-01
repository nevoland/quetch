export type Immutable<T extends object> = {
  readonly [K in keyof T]: T[K];
};
