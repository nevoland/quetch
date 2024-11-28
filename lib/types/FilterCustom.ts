/**
 * Custom filter where `value(item)` returns `true` for matching items.
 */
export type FilterCustom<T> = {
  operator: "custom";
  value: (item: T) => boolean;
};
