import { isArray, map, mapKeys, keys } from 'lodash'

import { requester, Query, ConcurrentQuery } from '../../src'

export function concurrent(
  next: requester,
): requester<Query | ConcurrentQuery> {
  /*
  Runs concurrent queries if `query.queries` contains a list or a map of queries, resulting in a list or map of resolved queries.
  Otherwise, passes the query to the next handler.
  */
  const request: requester<Query | ConcurrentQuery> = (query) => {
    if (!('queries' in query)) {
      return next(query)
    }
    const { queries } = query
    if (isArray(queries)) {
      return Promise.all(map(queries, (query) => request(query)))
    }
    const names = keys(queries)
    return Promise.all(
      map(names, (name) => request(queries[name])),
    ).then((results) => mapKeys(results, (result, index) => names[index]))
  }
  return request
}
