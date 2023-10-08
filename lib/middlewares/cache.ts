import { middleware, requester, Query } from '../../src'

export function cache({
  serialize = ({ context = {}, method = 'get', type }: Query) =>
    method === 'get' && context.id && `${type}/${context.id}`,
  engine = new Map(),
  duration = 10 * 60 * 1000,
} = {}): middleware {
  /*
  Caches the result of a query if `serialize` returns a non-empty string key. The `engine` should follow the `Map` API. Elements are kept in the cache until the `duration` in milliseconds expires.
  Note that a `duration` set to `Infinity` indefinitely keeps items in the cache.
  */
  return (next: requester) => (query: Query) => {
    const key = serialize(query)
    if (!key) {
      return next(query)
    }
    const item = engine.get(key)
    if (item == null || item.expiration <= Date.now()) {
      return next(query).then((result) => {
        engine.set(key, { result, expiration: Date.now() + duration })
        return result
      })
    }
    return Promise.resolve(item.result)
  }
}
