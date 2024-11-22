import { expect, test } from "vitest";

import { SymbolCache } from "../constants.js";
import type { FilterChildren } from "../types.js";

import { filterFromContext } from "./filterFromContext.js";
import { testFilter } from "./testFilter.js";

test("tests filter lists", () => {
  expect(
    testFilter(
      {
        operator: "all",
        value: [
          { field: "a", operator: "equal", value: "foo" },
          { field: "b", operator: "equal", value: "bar" },
        ],
      },
      { a: "foo", b: "bar" },
    ),
  ).toBe(true);
  expect(
    testFilter(
      {
        operator: "all",
        value: [
          { field: "a", operator: "equal", value: "foo" },
          { field: "b", operator: "equal", value: "baz" },
        ],
      },
      { a: "foo", b: "bar" },
    ),
  ).toBe(false);
  expect(
    testFilter(
      {
        operator: "all",
        value: [],
      },
      { a: "foo", b: "bar" },
    ),
  ).toBe(true);
  expect(
    testFilter(
      {
        operator: "any",
      },
      { a: "foo", b: "bar" },
    ),
  ).toBe(true);
  expect(
    testFilter(
      {
        operator: "none",
      },
      { a: "foo", b: "bar" },
    ),
  ).toBe(false);
  expect(
    testFilter(
      {
        operator: "any",
        value: [
          { field: "a", operator: "equal", value: "foo" },
          { field: "b", operator: "equal", value: "baz" },
        ],
      },
      { a: "foo", b: "bar" },
    ),
  ).toBe(true);
  expect(
    testFilter(
      {
        operator: "none",
        value: [
          { field: "a", operator: "equal", value: "a" },
          { field: "b", operator: "equal", value: "b" },
        ],
      },
      { a: "foo", b: "bar" },
    ),
  ).toBe(true);
  expect(
    testFilter(
      {
        operator: "none",
        value: [
          { field: "a", operator: "equal", value: "a" },
          { field: "b", operator: "equal", value: "b" },
        ],
      },
      { a: "foo", b: "bar" },
    ),
  ).toBe(true);
});

test("tests filter on string values", () => {
  expect(
    testFilter({ field: "a", operator: "equal", value: "foo" }, { a: "foo" }),
  ).toBe(true);
  expect(
    testFilter(
      { field: "a", operator: "equal", valueField: "b" },
      { a: "foo", b: "foo" },
    ),
  ).toBe(true);
  expect(
    testFilter(
      {
        field: "a",
        operator: "equal",
        options: { sensitivity: "base" },
        value: "FOO",
      },
      { a: "foo" },
    ),
  ).toBe(true);
  expect(
    testFilter({ field: "a", operator: "equal", value: "bar" }, { a: "foo" }),
  ).toBe(false);
  expect(
    testFilter(
      {
        field: "a",
        operator: "equal",
        options: { sensitivity: "accent" },
        value: "föo",
      },
      { a: "foo" },
    ),
  ).toBe(false);
  expect(
    testFilter(
      { field: "a", operator: "notEqual", value: "bar" },
      { a: "foo" },
    ),
  ).toBe(true);
  expect(
    testFilter(
      {
        field: "a",
        operator: "startWith",
        options: { sensitivity: "base" },
        value: "HELLO",
      },
      { a: "hello there!" },
    ),
  ).toBe(true);
  expect(
    testFilter(
      { field: "a", operator: "include", value: "bar" },
      { a: "foobar" },
    ),
  ).toBe(true);
  expect(
    testFilter(
      {
        field: "a",
        operator: "include",
        options: { sensitivity: "base" },
        value: "BAR",
      },
      { a: "foobar" },
    ),
  ).toBe(true);
  expect(
    testFilter(
      { field: "a", operator: "intersect", value: ["foo", "bar", "foobar"] },
      { a: "foobar" },
    ),
  ).toBe(true);
  expect(
    testFilter(
      {
        field: "a",
        operator: "intersect",
        options: { sensitivity: "base" },
        value: ["FOO", "BAR", "FOOBAR"],
      },
      { a: "foobar" },
    ),
  ).toBe(true);
  expect(
    testFilter(
      { field: "a", operator: "intersect", value: ["foo", "bar"] },
      { a: "foobar" },
    ),
  ).toBe(false);
  expect(
    testFilter(
      {
        field: "a",
        operator: "match",
        options: { ignoreCase: true },
        value: "^FOO",
      },
      { a: "foobar" },
    ),
  ).toBe(true);
  expect(
    testFilter(
      {
        field: "a",
        operator: "match",
        options: { ignoreCase: true },
        value: "FOO$",
      },
      { a: "foobar" },
    ),
  ).toBe(false);
});

test("tests filter on number values", () => {
  expect(
    testFilter({ field: "a", operator: "equal", value: 1 }, { a: 1 }),
  ).toBe(true);
  expect(
    testFilter({ field: "a", operator: "notEqual", value: 2 }, { a: 1 }),
  ).toBe(true);
  expect(
    testFilter({ field: "a", operator: "greaterThan", value: 0 }, { a: 1 }),
  ).toBe(true);
  expect(
    testFilter(
      { field: "a", operator: "greaterThanOrEqual", value: 1 },
      { a: 1 },
    ),
  ).toBe(true);
  expect(
    testFilter({ field: "a", operator: "lowerThan", value: 2 }, { a: 1 }),
  ).toBe(true);
  expect(
    testFilter(
      { field: "a", operator: "lowerThanOrEqual", value: 1 },
      { a: 1 },
    ),
  ).toBe(true);
});

test("tests filter on array values", () => {
  expect(
    testFilter({ field: "a", operator: "equal", value: [2, 1] }, { a: [1, 2] }),
  ).toBe(true);
  expect(
    testFilter({ field: "a", operator: "equal", value: [2] }, { a: [1, 2] }),
  ).toBe(false);
  expect(
    testFilter({ field: "a", operator: "include", value: [1] }, { a: [1, 2] }),
  ).toBe(true);
  expect(
    testFilter(
      { field: "a", operator: "include", value: [2, 3] },
      { a: [1, 2] },
    ),
  ).toBe(false);
  expect(
    testFilter(
      { field: "a", operator: "intersect", value: [2, 3] },
      { a: [1, 2] },
    ),
  ).toBe(true);
  expect(
    testFilter(
      { field: "a", operator: "intersect", value: [3, 4] },
      { a: [1, 2] },
    ),
  ).toBe(false);
});

test("tests filter with paths", () => {
  const context = { value: { filter: { field: "label" } } };
  expect(
    testFilter(filterFromContext(context), {
      value: { filter: { field: "label" } },
    }),
  ).toBe(true);
});

test("tests filter with children predicates", () => {
  expect(testFilter({ operator: "children", value: "a" }, { id: "a/b" })).toBe(
    true,
  );
  expect(
    testFilter(
      { operator: "children", value: ".a" },
      { path: ".a.b" },
      {
        pathFieldKey: "path",
        pathFieldSeparator: ".",
      },
    ),
  ).toBe(true);
  const filterChildren: FilterChildren<any> = {
    operator: "children",
    value: "a",
  };
  expect(
    testFilter(
      filterChildren,
      { path: ".a.b" },
      {
        transformFilterChildren(filter) {
          return {
            field: "path",
            operator: "startWith",
            value: `.${filter.value}.`,
          };
        },
      },
    ),
  ).toBe(true);
  expect(filterChildren[SymbolCache]).toBeDefined();
  expect(testFilter({ operator: "children", value: "b" }, { id: "a/b" })).toBe(
    false,
  );
  expect(
    testFilter(
      { operator: "children", value: "ba" },
      { path: ".a.b" },
      {
        pathFieldKey: "path",
        pathFieldSeparator: ".",
      },
    ),
  ).toBe(false);
});
