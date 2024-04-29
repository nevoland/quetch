import { expect, test } from "vitest";

import { SymbolCache } from "../constants.js";
import type { FilterChildren } from "../types.js";

import { filterItem } from "./filterItem.js";

test("tests filter lists", () => {
  expect(
    filterItem(
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
    filterItem(
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
    filterItem(
      {
        operator: "all",
        value: [],
      },
      { a: "foo", b: "bar" },
    ),
  ).toBe(true);
  expect(
    filterItem(
      {
        operator: "any",
      },
      { a: "foo", b: "bar" },
    ),
  ).toBe(true);
  expect(
    filterItem(
      {
        operator: "none",
      },
      { a: "foo", b: "bar" },
    ),
  ).toBe(false);
  expect(
    filterItem(
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
    filterItem(
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
    filterItem(
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
    filterItem({ field: "a", operator: "equal", value: "foo" }, { a: "foo" }),
  ).toBe(true);
  expect(
    filterItem(
      { field: "a", operator: "equal", valueField: "b" },
      { a: "foo", b: "foo" },
    ),
  ).toBe(true);
  expect(
    filterItem(
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
    filterItem({ field: "a", operator: "equal", value: "bar" }, { a: "foo" }),
  ).toBe(false);
  expect(
    filterItem(
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
    filterItem(
      { field: "a", operator: "notEqual", value: "bar" },
      { a: "foo" },
    ),
  ).toBe(true);
  expect(
    filterItem(
      { field: "a", operator: "include", value: "bar" },
      { a: "foobar" },
    ),
  ).toBe(true);
  expect(
    filterItem(
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
    filterItem(
      { field: "a", operator: "intersect", value: ["foo", "bar", "foobar"] },
      { a: "foobar" },
    ),
  ).toBe(true);
  expect(
    filterItem(
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
    filterItem(
      { field: "a", operator: "intersect", value: ["foo", "bar"] },
      { a: "foobar" },
    ),
  ).toBe(false);
  expect(
    filterItem(
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
    filterItem(
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
    filterItem({ field: "a", operator: "equal", value: 1 }, { a: 1 }),
  ).toBe(true);
  expect(
    filterItem({ field: "a", operator: "notEqual", value: 2 }, { a: 1 }),
  ).toBe(true);
  expect(
    filterItem({ field: "a", operator: "greaterThan", value: 0 }, { a: 1 }),
  ).toBe(true);
  expect(
    filterItem(
      { field: "a", operator: "greaterThanOrEqual", value: 1 },
      { a: 1 },
    ),
  ).toBe(true);
  expect(
    filterItem({ field: "a", operator: "lowerThan", value: 2 }, { a: 1 }),
  ).toBe(true);
  expect(
    filterItem(
      { field: "a", operator: "lowerThanOrEqual", value: 1 },
      { a: 1 },
    ),
  ).toBe(true);
});

test("tests filter on array values", () => {
  expect(
    filterItem({ field: "a", operator: "equal", value: [2, 1] }, { a: [1, 2] }),
  ).toBe(true);
  expect(
    filterItem({ field: "a", operator: "equal", value: [2] }, { a: [1, 2] }),
  ).toBe(false);
  expect(
    filterItem({ field: "a", operator: "include", value: [1] }, { a: [1, 2] }),
  ).toBe(true);
  expect(
    filterItem(
      { field: "a", operator: "include", value: [2, 3] },
      { a: [1, 2] },
    ),
  ).toBe(false);
  expect(
    filterItem(
      { field: "a", operator: "intersect", value: [2, 3] },
      { a: [1, 2] },
    ),
  ).toBe(true);
  expect(
    filterItem(
      { field: "a", operator: "intersect", value: [3, 4] },
      { a: [1, 2] },
    ),
  ).toBe(false);
});

test("tests filter with children predicates", () => {
  expect(filterItem({ operator: "children", value: "a" }, { id: "a/b" })).toBe(
    true,
  );
  expect(
    filterItem(
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
    filterItem(
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
  expect(filterItem({ operator: "children", value: "b" }, { id: "a/b" })).toBe(
    false,
  );
  expect(
    filterItem(
      { operator: "children", value: "ba" },
      { path: ".a.b" },
      {
        pathFieldKey: "path",
        pathFieldSeparator: ".",
      },
    ),
  ).toBe(false);
});
