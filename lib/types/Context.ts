import type { SELF } from "../constants/SELF.js";

import type { Primitive } from "./Primitive.js";

export type Context<T> = T extends Primitive
  ? { [SELF]: T }
  : {
      [K in keyof T]?: T[K];
    };
