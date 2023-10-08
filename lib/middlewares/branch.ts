import { identity } from 'lodash'

import { middleware, Query, Result } from '../../src'

export function branch(
  condition: (query: Query) => boolean,
  left: middleware,
  right: middleware = identity,
): middleware {
  /*
  Dispatches an incoming query to `left` if `condition(query)` returns a truthy value, `right` otherwise. This is helpful for sending queries to different resolvers.

  Example:

    const request = compose(
      split(query => query.protocol === 'gql', gqlHandlers),
      fetchJson(),
    )(identity)
  */
  return (next) => (query): Promise<Result> =>
    (condition(query) ? left : right)(next)(query)
}
