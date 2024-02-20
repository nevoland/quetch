import { getGlobal } from "@davidbonnet/get-global";

import { RequestError } from "../errors/RequestError.js";
import type { Handler } from "../types";

/**
 * Calls the provided `fetch` function, which defaults to the DOM `fetch` function, with the incoming `query`.
 *
 * @param fetch A standard `fetch` function.
 * @returns Handler that returns a promise that resolves to the response.
 */
export function fetchExternal(
  fetch = getGlobal().fetch,
): Handler<Request, Response, never, never> {
  if (process.env.NODE_ENV !== "production" && !fetch) {
    console.error("Could not find a global `fetch` function");
  }
  return async (request, _) => {
    let response: Response | undefined;
    try {
      response = await fetch(request);
    } catch (error) {
      if (error instanceof Error) {
        throw new RequestError(error.message, 500, undefined, request);
      }
      throw new RequestError(String(error), 500, undefined, request);
    }
    if (!response.ok) {
      throw new RequestError(
        response.statusText,
        response.status,
        undefined,
        request,
        response,
      );
    }
    return response;
  };
}
