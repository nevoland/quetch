export type Context<T> = {
  [K in keyof T]?: T[K];
};
