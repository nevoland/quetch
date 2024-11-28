import { sleep } from "futurise";
import { EMPTY_OBJECT } from "unchangeable";

import { RequestError } from "../errors.js";
import type { Handler, Query } from "../types";

/**
 * Aggregates multiple incoming query calls into one query.
 * Queries are grouped according to the string key returned by `queryGroupId(query)`. Inside a group, each query is identified with `queryId(query)`.
 * The aggregated query is built from the object returned by `queryForGroup(queryList, groupId)`, after at least `delay` milliseconds after the first non-aggregated aggregatable query call.
 * When the aggregated query resolves, the result is dispatched back to each aggregatable query call of the category by dispatching the result for each query returned by `resultForQuery(result, query)`.
 * If a query occurs twice, `mergeQuery(query, currentQuery)` is called and the output replaces the previous query.
 *
 * @param options
 * @returns
 */
export function aggregate<
  I extends Query<any> & { type: any },
  O,
  In extends Query<any> & { type: any },
  On,
>({
  queryGroupId = ({ type, method = "get" }) => {
    if (method !== "get") {
      return undefined;
    }
    if (typeof type !== "string") {
      return undefined;
    }
    return type;
  },
  queryId = ({ context = EMPTY_OBJECT }) => {
    if (context.id === undefined) {
      return undefined;
    }
    return `${context.id}`;
  },
  mergeQuery = (query, _currentQuery) => query,
  delay = 200,
  queryForGroup = (queryList, _) => ({
    filter: {
      field: "id",
      operator: "include",
      value: queryList.map((query) => query.context!.id),
    },
    method: "read",
    multiple: true,
    type: queryList[0]?.type,
  }),
  resultForQuery = (resultList, query) => {
    const result = resultList.find(
      (result) => (result as any).id === query.context!.id,
    );
    if (result === undefined) {
      throw new RequestError("Not found", 404, query);
    }
    return result;
  },
}: {
  queryGroupId?: (query: I) => string | undefined;
  queryId?: (query: I) => string | undefined;
  mergeQuery?: (query: I, currentQuery: I) => I;
  delay?: number;
  queryForGroup: (queryList: I[], group: string) => Query<any> & { type: any };
  resultForQuery: (resultList: O[], query: I) => O | never;
}): Handler<I, O, In, On> {
  const queryGroupMap = new Map<
    string,
    {
      groupRequest: Promise<On>;
      requestMap: Map<string, Promise<O>>;
      queryMap: Map<string, I>;
    }
  >();
  return ((query, next) => {
    const groupId = queryGroupId(query);
    if (!groupId) {
      return next(query as unknown as In);
    }
    const id = queryId(query);
    if (!id) {
      return next(query as unknown as In);
    }
    if (!queryGroupMap.has(groupId)) {
      const queryMap = new Map<string, I>();
      queryGroupMap.set(groupId, {
        groupRequest: (async () => {
          await sleep(delay);
          queryGroupMap.delete(groupId);
          return queryMap.size === 1
            ? next(queryMap.values().next().value as unknown as In)
            : next(
                queryForGroup([...queryMap.values()], groupId) as unknown as In,
              );
        })(),
        queryMap,
        requestMap: new Map(),
      });
    }
    const { groupRequest, requestMap, queryMap } = queryGroupMap.get(groupId)!;
    if (requestMap.has(id)) {
      const currentQuery = queryMap.get(id)!;
      const mergedQuery = mergeQuery(query, currentQuery);
      if (mergedQuery !== currentQuery) {
        queryMap.set(id, mergedQuery);
      }
      return requestMap.get(id);
    }
    queryMap.set(id, query);
    const request = (async () => {
      const result = await groupRequest;
      return queryMap.size === 1
        ? (result as O)
        : resultForQuery(result as O[], query);
    })();
    requestMap.set(id, request);
    return request;
  }) as Handler<I, O, In, On>;
}
