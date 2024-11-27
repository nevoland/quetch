import type { IntersectUnion } from "./IntersectUnion";

export type Normalized<T extends object> = IntersectUnion<
  RequiredAndOmitFunctions<T>
>;

type RequiredAndOmitFunctions<T extends object | undefined> = {
  [K in keyof T as T[K] extends Function | readonly Function[]
    ? never
    : K]-?: T[K] extends readonly any[] | undefined
    ? T[K]
    : T[K] extends object | undefined
      ? Prettify<RequiredAndOmitFunctions<T[K]>>
      : T[K];
};

type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};
