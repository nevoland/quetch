/**
 * Escapes special characters of a given regular expresion `pattern`.
 *
 * @param pattern Regular expression string to escape.
 * @returns Escaped regular expression
 */
export function escapeRegex(pattern: string) {
  return pattern.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
