import { expect, test } from "vitest";

import { SELF } from "../constants.js";

import { queryItemList } from "./queryItemList.js";

test("queries a single item", () => {
  expect(
    queryItemList({
      type: [{ a: 1 }, { a: 2 }, { a: 3 }],
    }),
  ).toEqual({ a: 1 });
  expect(() =>
    queryItemList({
      context: {
        a: 4,
      },
      type: [{ a: 1 }, { a: 2 }, { a: 3 }] as readonly { a: number }[],
    }),
  ).toThrow("Not found");
  expect(
    queryItemList({
      filter: {
        field: "a",
        operator: "greaterThan",
        value: 1,
      },
      type: [{ a: 1 }, { a: 2 }, { a: 3 }],
    }),
  ).toEqual({ a: 2 });
  expect(() =>
    queryItemList({
      filter: {
        field: "a",
        operator: "greaterThanOrEqual",
        value: 4,
      },
      type: [{ a: 1 }, { a: 2 }, { a: 3 }],
    }),
  ).toThrow("Not found");
});

test("queries primitive objects", () => {
  expect(
    queryItemList({
      type: [3, 2, 4, 9, 1, 2],
    }),
  ).toEqual(3);
  expect(
    queryItemList({
      type: [3, 2, 4, 9, 1, 2],
      context: {
        [SELF]: 9,
      },
    }),
  ).toEqual(9);
  expect(
    queryItemList({
      type: [3, 2, 4, 9, 1, 2],
      multiple: true,
      order: [SELF],
    }),
  ).toEqual([1, 2, 2, 3, 4, 9]);
  expect(
    queryItemList({
      type: [3, 2, 4, 9, 1, 2],
      multiple: true,
      order: [SELF],
      filter: {
        field: SELF,
        operator: "greaterThan",
        value: 3,
      },
    }),
  ).toEqual([4, 9]);
});

test("queries lists of items", () => {
  expect(
    queryItemList({
      multiple: true,
      type: [{ a: 1 }, { a: 2 }, { a: 3 }],
    }),
  ).toEqual([{ a: 1 }, { a: 2 }, { a: 3 }]);
  expect(
    queryItemList({
      filter: {
        field: "a",
        operator: "greaterThan",
        value: 1,
      },
      multiple: true,
      type: [{ a: 1 }, { a: 2 }, { a: 3 }],
    }),
  ).toEqual([{ a: 2 }, { a: 3 }]);
  expect(
    queryItemList({
      context: {
        c: "a",
      },
      filter: {
        field: "a",
        operator: "greaterThan",
        value: 1,
      },
      method: "read",
      multiple: true,
      type: [
        { a: 1, c: "a" },
        { a: 2, c: "a" },
        { a: 3, c: "b" },
      ],
    }),
  ).toEqual([{ a: 2, c: "a" }]);
  expect(
    queryItemList({
      filter: {
        field: "a",
        operator: "greaterThanOrEqual",
        value: 4,
      },
      multiple: true,
      type: [{ a: 1 }, { a: 2 }, { a: 3 }],
    }),
  ).toEqual([]);
});

test("sorts items", () => {
  expect(
    queryItemList({
      multiple: true,
      order: ["a", "c"],
      type: [
        { a: 1, c: "a" },
        { a: 2, c: "a" },
        { a: 3, c: "b" },
        { a: 2, c: "b" },
        { a: 1, c: "b" },
      ],
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
      multiple: true,
      order: [
        { descending: true, field: "a" },
        { descending: true, field: "c" },
      ],
      type: [
        { a: 1, c: "a" },
        { a: 2, c: "a" },
        { a: 3, c: "b" },
        { a: 2, c: "b" },
        { a: 1, c: "b" },
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
      aggregator: "length",
      context: {
        c: "a",
      },
      method: "aggregate",
      type: [
        { a: 1, c: "a" },
        { a: 2, c: "a" },
        { a: 3, c: "b" },
      ],
    }),
  ).toBe(2);
  expect(
    queryItemList({
      aggregator: "length",
      context: {
        c: "a",
      },
      filter: {
        field: "a",
        operator: "greaterThan",
        value: 1,
      },
      method: "aggregate",
      type: [
        { a: 1, c: "a" },
        { a: 2, c: "a" },
        { a: 3, c: "b" },
      ],
    }),
  ).toBe(1);
  expect(
    queryItemList({
      aggregator: {
        operator: "index",
        filter: {
          field: "a",
          operator: "greaterThan",
          value: 3,
        },
      },
      context: {
        c: "a",
      },
      filter: {
        field: "a",
        operator: "greaterThan",
        value: 1,
      },
      method: "aggregate",
      type: [
        { a: 1, c: "a" },
        { a: 2, c: "a" },
        { a: 3, c: "a" },
        { a: 4, c: "a" },
        { a: 5, c: "a" },
        { a: 11, c: "b" },
        { a: 12, c: "b" },
      ],
    }),
  ).toBe(2);
  expect(
    queryItemList({
      aggregator: {
        operator: "index",
        filter: {
          field: "a",
          operator: "greaterThan",
          value: 3,
        },
      },
      context: {
        c: "a",
      },
      filter: {
        field: "a",
        operator: "greaterThan",
        value: 1,
      },
      offset: 1,
      method: "aggregate",
      type: [
        { a: 1, c: "a" },
        { a: 2, c: "a" },
        { a: 3, c: "a" },
        { a: 4, c: "a" },
        { a: 5, c: "a" },
        { a: 11, c: "b" },
        { a: 12, c: "b" },
      ],
    }),
  ).toBe(1);
});

test("slices items", () => {
  expect(
    queryItemList({
      limit: 1,
      method: "read",
      multiple: true,
      type: [
        { a: 1, c: "a" },
        { a: 2, c: "a" },
        { a: 3, c: "b" },
      ],
    }),
  ).toEqual([{ a: 1, c: "a" }]);
  expect(
    queryItemList({
      context: {
        c: "a",
      },
      method: "read",
      multiple: true,
      offset: 1,
      type: [
        { a: 1, c: "a" },
        { a: 2, c: "a" },
        { a: 3, c: "b" },
      ],
    }),
  ).toEqual([{ a: 2, c: "a" }]);
  expect(
    queryItemList({
      limit: 2,
      method: "read",
      multiple: true,
      offset: 1,
      type: [
        { a: 1, c: "a" },
        { a: 2, c: "a" },
        { a: 3, c: "b" },
        { a: 2, c: "b" },
      ],
    }),
  ).toEqual([
    { a: 2, c: "a" },
    { a: 3, c: "b" },
  ]);
});
