import type { QueryAny } from "../types";

/**
 * Error to be thrown in case there is an issue with the query call. Only instances of this error will be caught by the `retry()` middleware.
 */
export class RequestError extends Error {
  constructor(
    message: string,
    public status: number,
    public query?: QueryAny,
    public request?: Request,
    public response?: Response,
  ) {
    super(message);
  }
}
