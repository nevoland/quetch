import type { Handler, QueryAny, Store } from "../types";

type CachedItem<I extends QueryAny> = {
  query: I;
  value: any;
};

type CacheOptions<I extends QueryAny> = {
  /**
   * Unique identifier for the item to cache.
   * Returns `undefined` if the item should not be cached.
   */
  itemId?: (query: I) => string | undefined;
  /**
   * Cache store.
   */
  store: Store<CachedItem<I>>;
  /**
   * Returns `true` if the cached item must be invalidated.
   */
  invalidatesItem: (query: I, cachedQuery: I, cachedValue: any) => boolean;
  /**
   * Returns a query that completes the cached value.
   * Returns `undefined` if the query should not be completed.
   */
  extendCachedQuery: (query: I, cachedQuery: I) => I | undefined;
  /**
   * Merges the extended query with the cached query.
   * Only called when `extendCachedQuery` returns a query.
   */
  mergeQuery: (extendedQuery: I, cachedQuery: I) => I;
  /**
   * Merges the value from the extended query with the cached value.
   * Only called when `extendCachedQuery` returns a query.
   */
  mergeItem: (value: any, cachedValue: any, query: I, cachedQuery: I) => any;
};

export function cache<I extends QueryAny, O, In extends QueryAny, On>({
  itemId = ({ context = {}, method = "read", type }: I) => {
    if (method === "read" && context.id) {
      return `${String(type)}/${context.id}`;
    }
    return undefined;
  },
  store,
  invalidatesItem,
  extendCachedQuery,
  mergeQuery,
  mergeItem,
}: CacheOptions<I>): Handler<I, O, In, On> {
  /*
  Caches the result of a query if `serialize` returns a non-empty string key. The `engine` should follow the `Map` API. Elements are kept in the cache until the `duration` in milliseconds expires.
  Note that a `duration` set to `Infinity` indefinitely keeps items in the cache.
  */
  return async (query, next) => {
    const id = itemId(query);
    if (!id) {
      return next(query as unknown as In);
    }
    if (await store.has(id)) {
      const { query: cachedQuery, value: cachedValue } = await store.get(id);
      if (invalidatesItem(query, cachedQuery, cachedValue)) {
        const value = await next(query as unknown as In);
        store.set(id, { query, value });
        return value;
      }
      const extendedQuery = extendCachedQuery(query, cachedQuery);
      if (extendedQuery === undefined) {
        return cachedValue;
      }
      const value = await next(extendedQuery as unknown as In);
      const extendedValue = mergeItem(value, cachedValue, query, cachedQuery);
      store.set(id, {
        query: mergeQuery(extendedQuery, cachedQuery),
        value: extendedValue,
      });
      return extendedValue;
    }
    const value = await next(query as unknown as In);
    store.set(id, { query, value });
    return value;
  };
}
