export type Join<
  T extends Array<any>,
  Separator extends string = ".",
> = T extends readonly [infer I, ...infer R]
  ? I extends string | number
    ? R extends []
      ? I
      : R extends string[]
      ? `${I}${Separator}${Join<R, Separator>}`
      : never
    : never
  : never;
