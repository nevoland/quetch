import type { Handler, Query } from "../types";

/**
 * Aggregates multiple incoming query calls into one query.
 * Queries are grouped according to the string key returned by `categorize(query)`. Inside a group, each query is identified with `serialize(query)`.
 * The aggregated query is built from the object returned by `reduce(queries)`, after at least `delay` milliseconds after the first non-aggregated aggregatable query call.
 * When the aggregated query resolves, the result is dispatched back to each aggregatable query call of the category by dispatching the result for each query returned by `pick(result, query)`.`
 *
 * @param options
 * @returns
 */
export function aggregate<I extends Query<{}>, O, In, On>({
  categorize = ({ type, method = "get" }: Query) => method === "get" && type,
  serialize = ({ context = {} }: Query) => context.id,
  delay = 200,
  reduce = (queries: Query[], category: string): Query => ({
    type: queries[0].type,
    method: "list",
    filter: {
      id: map(queries, "value.id"),
    },
  }),
  pick = (results: {}[], query: Query) => {
    const result = find(results, query.context);
    if (!result) {
      throw new Error("Not found");
    }
    return result;
  },
} = {}): Handler<I, O, In, On> {
  const groups = new Map();
  return (next) => (query) => {
    const category = categorize(query);
    if (!category) {
      return next(query);
    }
    const key = serialize(query);
    if (!key) {
      return next(query);
    }
    if (!groups.has(category)) {
      const queries: Query[] = [];
      groups.set(category, {
        request: waitFor(delay).then(() => {
          groups.delete(category);
          return queries.length === 1
            ? next(queries[0])
            : next(reduce(queries, category));
        }),
        requests: {},
        queries,
      });
    }
    const { request, requests, queries } = groups.get(category);
    if (requests[key]) {
      return requests[key];
    }
    queries.push(query);
    return (requests[key] = Promise.resolve(request).then((result) =>
      queries.length === 1 ? result : pick(result, query),
    ));
  };
}
