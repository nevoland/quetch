import { expect, test } from "vitest";

import { groupFilters } from "./groupFilters.js";

test("groups filters together", () => {
  expect(
    groupFilters<{ a: string; b: string }>(
      "all",
      { field: "a", operator: "equal", value: "foo" },
      { field: "b", operator: "equal", value: "bar" },
    ),
  ).toEqual({
    operator: "all",
    value: [
      { field: "a", operator: "equal", value: "foo" },
      { field: "b", operator: "equal", value: "bar" },
    ],
  });
  expect(
    groupFilters<{ a: string }>("all", {
      field: "a",
      operator: "equal",
      value: "foo",
    }),
  ).toEqual({
    field: "a",
    operator: "equal",
    value: "foo",
  });
  expect(
    groupFilters<{ a: string }>("none", {
      field: "a",
      operator: "equal",
      value: "foo",
    }),
  ).toEqual({
    operator: "none",
    value: [{ field: "a", operator: "equal", value: "foo" }],
  });
});

test("handles undefined filters", () => {
  expect(groupFilters("all")).toBeUndefined();
  expect(groupFilters("any")).toBeUndefined();
  expect(groupFilters("none")).toEqual({ operator: "none" });
  expect(groupFilters("all", undefined)).toBeUndefined();
  expect(groupFilters("any", undefined)).toBeUndefined();
  expect(groupFilters("none", undefined)).toEqual({ operator: "none" });
});
