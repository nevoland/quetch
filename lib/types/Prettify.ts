/**
 * Prettifies a type by recursively removing any intersections or unions.
 */
export type Prettify<T> = T extends (...args: any[]) => any
  ? T
  : T extends readonly any[]
    ? T
    : { [K in keyof T]: Prettify<T[K]> };
