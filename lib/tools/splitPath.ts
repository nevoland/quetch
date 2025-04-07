import { escapeRegex } from "./escapeRegex.js";

type PathSplitter =
  /**
   * Takes a `path` string and returns an array of path items.
   *
   * @param path The path string to split.
   *
   */
  (path: string) => readonly string[];

/**
 * Splits a `path` string using the `separator`, omitting those prefixed with a `separatorEscape`.
 *
 * If `path` is `undefined`, returns a function that takes `path` and splits it according to the provided `separator` and `separatorEscape` arguments.
 *
 * @param separator The separator string to use (defaults to `"/"`).
 * @param separatorEscape The separator escape string to use (default to `"\\"`).
 * @param path The path string to split.
 * @returns An array containing the splitted path items if `path` is defined, or a function that takes a `path` string and returns an array.
 */
export function splitPath(
  separator: string | undefined,
  separatorEscape: string | undefined,
  path: string,
): readonly string[];
export function splitPath(
  separator?: string,
  separatorEscape?: string,
): PathSplitter;
export function splitPath(
  separator = "/",
  separatorEscape = "\\",
  path?: string,
): readonly string[] | PathSplitter {
  const fieldSeparatorRegexp = !separator
    ? null
    : new RegExp(
        !separatorEscape
          ? escapeRegex(separator)
          : `(?<!${escapeRegex(separatorEscape)})${escapeRegex(separator)}`,
        "g",
      );
  if (path == null) {
    if (fieldSeparatorRegexp == null) {
      return (path: string) => [path];
    }
    return (path: string) => path.split(fieldSeparatorRegexp);
  }
  if (fieldSeparatorRegexp == null) {
    return [path];
  }
  return path.split(fieldSeparatorRegexp);
}
