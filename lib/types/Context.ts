export type Context<T extends object> = {
  [K in keyof T]?: T[K];
};
