import { EMPTY_OBJECT } from "unchangeable";

import type { NormalizedPathFieldSettings, QuerySettings } from "../types";

import { comparatorFieldValues } from "./comparatorFieldValues.js";
import { transformerFilterChildren } from "./transformerFilterChildren.js";
/**
 * Returns query settings for path fields.
 *
 * @param settings - Settings for normalizing path fields.
 * @returns Query settings for path fields.
 */
export function querySettings<T>(
  settings: NormalizedPathFieldSettings<T> = EMPTY_OBJECT,
): QuerySettings<T> {
  return {
    compareFieldValues: comparatorFieldValues(settings),
    transformFilterChildren: transformerFilterChildren(settings),
  };
}
