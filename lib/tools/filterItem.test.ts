import { expect, test } from "vitest";

import { filterItem } from "./filterItem";

test("tests filter lists", () => {
  expect(
    filterItem(
      {
        operator: "all",
        value: [
          { operator: "equal", field: "a", value: "foo" },
          { operator: "equal", field: "b", value: "bar" },
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
          { operator: "equal", field: "a", value: "foo" },
          { operator: "equal", field: "b", value: "baz" },
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
          { operator: "equal", field: "a", value: "foo" },
          { operator: "equal", field: "b", value: "baz" },
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
          { operator: "equal", field: "a", value: "a" },
          { operator: "equal", field: "b", value: "b" },
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
          { operator: "equal", field: "a", value: "a" },
          { operator: "equal", field: "b", value: "b" },
        ],
      },
      { a: "foo", b: "bar" },
    ),
  ).toBeTruthy();
});

test("tests filter on string values", () => {
  expect(
    filterItem({ operator: "equal", field: "a", value: "foo" }, { a: "foo" }),
  ).toBeTruthy();
  expect(
    filterItem({ operator: "equal", field: "a", value: "bar" }, { a: "foo" }),
  ).toBeFalsy();
  expect(
    filterItem(
      { operator: "notEqual", field: "a", value: "bar" },
      { a: "foo" },
    ),
  ).toBeTruthy();
  expect(
    filterItem(
      { operator: "include", field: "a", value: "bar" },
      { a: "foobar" },
    ),
  ).toBeTruthy();
  expect(
    filterItem(
      { operator: "intersect", field: "a", value: ["foo", "bar", "foobar"] },
      { a: "foobar" },
    ),
  ).toBeTruthy();
  expect(
    filterItem(
      { operator: "intersect", field: "a", value: ["foo", "bar"] },
      { a: "foobar" },
    ),
  ).toBeFalsy();
  expect(
    filterItem(
      {
        operator: "match",
        field: "a",
        value: "^FOO",
        options: { ignoreCase: true },
      },
      { a: "foobar" },
    ),
  ).toBeTruthy();
  expect(
    filterItem(
      {
        operator: "match",
        field: "a",
        value: "FOO$",
        options: { ignoreCase: true },
      },
      { a: "foobar" },
    ),
  ).toBeFalsy();
});

test("tests filter on number values", () => {
  expect(
    filterItem({ operator: "equal", field: "a", value: 1 }, { a: 1 }),
  ).toBeTruthy();
  expect(
    filterItem({ operator: "notEqual", field: "a", value: 2 }, { a: 1 }),
  ).toBeTruthy();
  expect(
    filterItem({ operator: "greaterThan", field: "a", value: 0 }, { a: 1 }),
  ).toBeTruthy();
  expect(
    filterItem(
      { operator: "greaterThanOrEqual", field: "a", value: 1 },
      { a: 1 },
    ),
  ).toBeTruthy();
  expect(
    filterItem({ operator: "lowerThan", field: "a", value: 2 }, { a: 1 }),
  ).toBeTruthy();
  expect(
    filterItem(
      { operator: "lowerThanOrEqual", field: "a", value: 1 },
      { a: 1 },
    ),
  ).toBeTruthy();
});

test("tests filter on array values", () => {
  expect(
    filterItem({ operator: "equal", field: "a", value: [2, 1] }, { a: [1, 2] }),
  ).toBeTruthy();
  expect(
    filterItem({ operator: "equal", field: "a", value: [2] }, { a: [1, 2] }),
  ).toBeFalsy();
  expect(
    filterItem({ operator: "include", field: "a", value: [1] }, { a: [1, 2] }),
  ).toBeTruthy();
  expect(
    filterItem(
      { operator: "include", field: "a", value: [2, 3] },
      { a: [1, 2] },
    ),
  ).toBeFalsy();
  expect(
    filterItem(
      { operator: "intersect", field: "a", value: [2, 3] },
      { a: [1, 2] },
    ),
  ).toBeTruthy();
  expect(
    filterItem(
      { operator: "intersect", field: "a", value: [3, 4] },
      { a: [1, 2] },
    ),
  ).toBeFalsy();
});
