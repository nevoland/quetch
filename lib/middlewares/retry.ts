import { getGlobal } from "@davidbonnet/get-global";
import { sleep, untilOnline } from "futurise";

import { RequestError } from "../errors/RequestError";
import type { Handler } from "../types";

/**
 * Retries a failed query call up to `amount` times, with a given `delay` in milliseconds at ±`delayDelta` milliseconds.
 * Note that an `amount` set to `Infinity` results in indefinitely trying to resolve a query call.
 * Only instances of `RequestError` that do not result in a `500` status error will result in new tries. Other errors will propagate immediately.
 *
 * @param options
 * @returns Handler
 */
export function retry({
  amount = 5,
  delay = 1000,
  delayDelta = 500,
} = {}): Handler<Request, Response, Request, Response> {
  const { navigator } = getGlobal();
  return (input, next) => {
    let errorsLeft = amount;
    const fetch = async (): Promise<Response> => {
      try {
        return await next(input);
      } catch (error) {
        if (navigator !== undefined && !navigator.onLine) {
          errorsLeft = amount;
          await untilOnline();
        } else if (!(error instanceof RequestError) || error.status < 500) {
          throw error;
        }
        if (--errorsLeft > 0) {
          await sleep(
            delay + delayDelta + ((Math.random() * delayDelta * 2) | 0),
            input.signal,
          );
          return fetch();
        }
        throw error;
      }
    };
    return fetch();
  };
}
