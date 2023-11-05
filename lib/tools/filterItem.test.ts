import { expect, test } from "vitest";

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
  ).toBeTruthy();
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
  ).toBeFalsy();
  expect(
    filterItem(
      {
        operator: "all",
        value: [],
      },
      { a: "foo", b: "bar" },
    ),
  ).toBeTruthy();
  expect(
    filterItem(
      {
        operator: "any",
      },
      { a: "foo", b: "bar" },
    ),
  ).toBeTruthy();
  expect(
    filterItem(
      {
        operator: "none",
      },
      { a: "foo", b: "bar" },
    ),
  ).toBeFalsy();
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
  ).toBeTruthy();
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
  ).toBeTruthy();
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
  ).toBeTruthy();
});

test("tests filter on string values", () => {
  expect(
    filterItem({ field: "a", operator: "equal", value: "foo" }, { a: "foo" }),
  ).toBeTruthy();
  expect(
    filterItem({ field: "a", operator: "equal", value: "bar" }, { a: "foo" }),
  ).toBeFalsy();
  expect(
    filterItem(
      { field: "a", operator: "notEqual", value: "bar" },
      { a: "foo" },
    ),
  ).toBeTruthy();
  expect(
    filterItem(
      { field: "a", operator: "include", value: "bar" },
      { a: "foobar" },
    ),
  ).toBeTruthy();
  expect(
    filterItem(
      { field: "a", operator: "intersect", value: ["foo", "bar", "foobar"] },
      { a: "foobar" },
    ),
  ).toBeTruthy();
  expect(
    filterItem(
      { field: "a", operator: "intersect", value: ["foo", "bar"] },
      { a: "foobar" },
    ),
  ).toBeFalsy();
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
  ).toBeTruthy();
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
  ).toBeFalsy();
});

test("tests filter on number values", () => {
  expect(
    filterItem({ field: "a", operator: "equal", value: 1 }, { a: 1 }),
  ).toBeTruthy();
  expect(
    filterItem({ field: "a", operator: "notEqual", value: 2 }, { a: 1 }),
  ).toBeTruthy();
  expect(
    filterItem({ field: "a", operator: "greaterThan", value: 0 }, { a: 1 }),
  ).toBeTruthy();
  expect(
    filterItem(
      { field: "a", operator: "greaterThanOrEqual", value: 1 },
      { a: 1 },
    ),
  ).toBeTruthy();
  expect(
    filterItem({ field: "a", operator: "lowerThan", value: 2 }, { a: 1 }),
  ).toBeTruthy();
  expect(
    filterItem(
      { field: "a", operator: "lowerThanOrEqual", value: 1 },
      { a: 1 },
    ),
  ).toBeTruthy();
});

test("tests filter on array values", () => {
  expect(
    filterItem({ field: "a", operator: "equal", value: [2, 1] }, { a: [1, 2] }),
  ).toBeTruthy();
  expect(
    filterItem({ field: "a", operator: "equal", value: [2] }, { a: [1, 2] }),
  ).toBeFalsy();
  expect(
    filterItem({ field: "a", operator: "include", value: [1] }, { a: [1, 2] }),
  ).toBeTruthy();
  expect(
    filterItem(
      { field: "a", operator: "include", value: [2, 3] },
      { a: [1, 2] },
    ),
  ).toBeFalsy();
  expect(
    filterItem(
      { field: "a", operator: "intersect", value: [2, 3] },
      { a: [1, 2] },
    ),
  ).toBeTruthy();
  expect(
    filterItem(
      { field: "a", operator: "intersect", value: [3, 4] },
      { a: [1, 2] },
    ),
  ).toBeFalsy();
});
