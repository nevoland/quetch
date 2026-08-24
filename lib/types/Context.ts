import type { SELF } from "../constants/SELF.js";

import type { Primitive } from "./Primitive.js";

/**
 * Describes the entity so that it can be identified or selected in a filter.
 *
 * The context of a single item (`query.multiple` is `false`) is typically its identifier.
 * The context of a list of items (`query.multiple` is `true`) typically consists of common properties that reference the parent entity.
 *
 * It can be a partial object of the type `T` or a primitive value wrapped in an object with the `SELF` key.
 */
export type Context<T> = [unknown] extends [T]
  ? any
  : T extends Primitive
    ? { [SELF]: T }
    : T extends undefined
      ? never
      : {
          [K in keyof T]?: T[K];
        };
