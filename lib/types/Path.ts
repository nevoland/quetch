export type Path<T> = T extends Array<infer P>
  ? [number] | [number, ...Path<P>]
  : T extends object
  ? {
      [K in keyof T]-?: [K] | [K, ...Path<T[K]>];
    }[keyof T]
  : never;
