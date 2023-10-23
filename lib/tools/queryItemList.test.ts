import { expect, test } from "vitest";

import { queryItemList } from "./queryItemList";

test("queries a single item", () => {
  expect(
    queryItemList({
      type: [{ a: 1 }, { a: 2 }, { a: 3 }],
    }),
  ).toEqual({ a: 1 });
  expect(() =>
    queryItemList({
      type: [{ a: 1 }, { a: 2 }, { a: 3 }],
      context: {
        a: 4,
      },
    }),
  ).toThrow("Not found");
  expect(
    queryItemList({
      type: [{ a: 1 }, { a: 2 }, { a: 3 }],
      filter: {
        field: "a",
        operator: "greaterThan",
        value: 1,
      },
    }),
  ).toEqual({ a: 2 });
  expect(() =>
    queryItemList({
      type: [{ a: 1 }, { a: 2 }, { a: 3 }],
      filter: {
        field: "a",
        operator: "greaterThanOrEqual",
        value: 4,
      },
    }),
  ).toThrow("Not found");
});

test("queries lists of items", () => {
  expect(
    queryItemList({
      type: [{ a: 1 }, { a: 2 }, { a: 3 }],
      multiple: true,
    }),
  ).toEqual([{ a: 1 }, { a: 2 }, { a: 3 }]);
  expect(
    queryItemList({
      type: [{ a: 1 }, { a: 2 }, { a: 3 }],
      multiple: true,
      filter: {
        field: "a",
        operator: "greaterThan",
        value: 1,
      },
    }),
  ).toEqual([{ a: 2 }, { a: 3 }]);
  expect(
    queryItemList({
      type: [
        { a: 1, c: "a" },
        { a: 2, c: "a" },
        { a: 3, c: "b" },
      ],
      method: "get",
      multiple: true,
      context: {
        c: "a",
      },
      filter: {
        field: "a",
        operator: "greaterThan",
        value: 1,
      },
    }),
  ).toEqual([{ a: 2, c: "a" }]);
  expect(
    queryItemList({
      type: [{ a: 1 }, { a: 2 }, { a: 3 }],
      multiple: true,
      filter: {
        field: "a",
        operator: "greaterThanOrEqual",
        value: 4,
      },
    }),
  ).toEqual([]);
});

test("sorts items", () => {
  expect(
    queryItemList({
      type: [
        { a: 1, c: "a" },
        { a: 2, c: "a" },
        { a: 3, c: "b" },
        { a: 2, c: "b" },
        { a: 1, c: "b" },
      ],
      multiple: true,
      orderBy: ["a", "c"],
    }),
  ).toEqual([
    { a: 1, c: "a" },
    { a: 1, c: "b" },
    { a: 2, c: "a" },
    { a: 2, c: "b" },
    { a: 3, c: "b" },
  ]);
  expect(
    queryItemList({
      type: [
        { a: 1, c: "a" },
        { a: 2, c: "a" },
        { a: 3, c: "b" },
        { a: 2, c: "b" },
        { a: 1, c: "b" },
      ],
      multiple: true,
      orderBy: [
        { field: "a", descending: true },
        { field: "c", descending: true },
      ],
    }),
  ).toEqual([
    { a: 3, c: "b" },
    { a: 2, c: "b" },
    { a: 2, c: "a" },
    { a: 1, c: "b" },
    { a: 1, c: "a" },
  ]);
});

test("aggregates items", () => {
  expect(
    queryItemList({
      type: [
        { a: 1, c: "a" },
        { a: 2, c: "a" },
        { a: 3, c: "b" },
      ],
      method: "aggregate",
      aggregator: "length",
      context: {
        c: "a",
      },
    }),
  ).toBe(2);
  expect(
    queryItemList({
      type: [
        { a: 1, c: "a" },
        { a: 2, c: "a" },
        { a: 3, c: "b" },
      ],
      method: "aggregate",
      aggregator: "length",
      context: {
        c: "a",
      },
      filter: {
        field: "a",
        operator: "greaterThan",
        value: 1,
      },
    }),
  ).toBe(1);
});