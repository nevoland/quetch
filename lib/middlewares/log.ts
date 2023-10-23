import type { Handler } from "../types";

import { identity } from "./identity";

/**
 * Logs the outgoing query and the incoming result or the error.
 *
 * @param title
 * @returns Query handler
 */
export function log<I, O, In, On>(title = "Query"): Handler<I, O, In, On> {
  if (process.env.NODE_ENV === "production") {
    return identity;
  }
  return async (input, next) => {
    /* eslint-disable no-console */
    console.group(title);
    console.info("query", input);
    try {
      const result = await next(input as unknown as In);
      console.log("result", result);
      console.groupEnd();
      return result as unknown as O;
    } catch (error) {
      console.log("error", error);
      console.groupEnd();
      throw error;
    }
    /* eslint-enable no-console */
  };
}
