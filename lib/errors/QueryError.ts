export class QueryError extends Error {
  status: number
  response: Object

  /*
  Error to be thrown in case there is an issue with the query call. Only instances of this error will be caught by the `retry()` middleware. 
  */
  constructor(message: string, status: number, response: Object) {
    super(message)
    this.status = status
    this.response = response
  }
}
