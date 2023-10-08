import { middleware } from '../../src'

export function fetch(fetch = getGlobal().fetch): middleware {
  /*
  Calls the provided `fetch` function, which defaults to the DON `fetch` function, with the incoming `query`.
  To be used in conjunction with `toFetchQuery()`.
  */
  if (process.env.NODE_ENV !== 'production' && !fetch) {
    console.error('Could not find a global `fetch` function')
  }
  return () => (query) => {
    return fetch(query.url, query).then(
      (response) => {
        if (!response.ok) {
          throw new QueryError(response.statusText, response.status, response)
        }
        return response
      },
      (error) => {
        throw new QueryError(error.message, error.status || 500)
      },
    )
  }
}
