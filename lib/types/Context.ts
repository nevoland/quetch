import type { SELF } from "../constants/SELF.js";

import type { Primitive } from "./Primitive.js";

export type Context<T> = [0] extends [1 & T]
  ? any
  : T extends Primitive
    ? { [SELF]: T }
    : {
        [K in keyof T]?: T[K];
      };
