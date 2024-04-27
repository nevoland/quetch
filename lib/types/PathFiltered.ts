export type PathFiltered<T, P> = T extends Array<infer I>
  ? I extends P
    ? [number]
    : [number, ...PathFiltered<I, P>]
  : T extends object
  ? {
      [K in keyof T]-?: T[K] extends P ? [K] : [K, ...PathFiltered<T[K], P>];
    }[keyof T]
  : never;
