import type { Context, Filter, Query } from "../../lib/types";

function get<T extends object>(query: Query<T> & { type: string | T[] }) {
  return;
}

type FilterNormalized<T extends object> = {
  id: string;
  level: number;
  selection?: boolean;
  path?: string;
  filter: Filter<T>;
  action?: any;
  hasChildren?: boolean;
};

function make<T extends object>(
  type: string | T[],
  context: Context<T>,
  filter: Filter<T>,
  selection: any,
  fieldKeyId: any,
  separator: any,
) {
  return get({
    type,
    method: "aggregate",
    aggregator: "length",
    context,
    filter: {
      operator: "all",
      value: [
        filter,
        filterFromSelection<FilterNormalized<T>>(
          selection,
          false,
          fieldKeyId,
          separator,
        ),
      ],
    } as Filter<T>,
  });
}

function filterFromSelection<T extends object>(...args: any[]): Filter<T> {
  return {} as any;
}

const filter = {
  operator: "all",
  value: [{ operator: "equal", field: "a", value: true }, 323],
} satisfies Filter<{ a: boolean }>;
