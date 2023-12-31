import type { Query } from "../types/Query";

/**
 * Error to be thrown in case there is an issue with the query call. Only instances of this error will be caught by the `retry()` middleware.
 */
export class RequestError extends Error {
  constructor(
    message: string,
    public status: number,
    public query?: Query<any>,
    public request?: Request,
    public response?: Response,
  ) {
    super(message);
  }
}
