import type { KeyFromUnion } from "./KeyFromUnion";
import type { Primitive } from "./Primitive";

export type CombineUnion<U> = [0] extends [1 & U]
  ? any
  : [U] extends [Function | readonly Function[]]
    ? undefined
    : [U] extends [Primitive]
      ? U
      : [U] extends readonly [Array<any>]
        ? U
        : {
            [K in KeyFromUnion<U>]: Continue<Combine<U, K>>;
          };

type Combine<U, K extends string | number | symbol> = Exclude<
  Extract<U, { [k in K]?: any }>[K],
  undefined
>;

type Continue<U> = U extends object ? CombineUnion<U> : U;
