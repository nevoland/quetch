import { expect, test } from "vitest";

import { sortItemList } from "./sortItemList.js";

test("sorts items", () => {
  expect(
    sortItemList(
      ["a", "c"],
      [
        { a: 1, c: "a" },
        { a: 2, c: "a" },
        { a: 3, c: "b" },
        { a: 2, c: "b" },
        { a: 1, c: "b" },
      ],
    ),
  ).toEqual([
    { a: 1, c: "a" },
    { a: 1, c: "b" },
    { a: 2, c: "a" },
    { a: 2, c: "b" },
    { a: 3, c: "b" },
  ]);
  expect(
    sortItemList(
      [
        { descending: true, field: "a" },
        { descending: true, field: "c" },
      ],
      [
        { a: 1, c: "a" },
        { a: 2, c: "a" },
        { a: 3, c: "b" },
        { a: 2, c: "b" },
        { a: 1, c: "b" },
      ],
    ),
  ).toEqual([
    { a: 3, c: "b" },
    { a: 2, c: "b" },
    { a: 2, c: "a" },
    { a: 1, c: "b" },
    { a: 1, c: "a" },
  ]);
  expect(
    sortItemList(
      ["a", { descending: true, field: "c" }],
      [
        { a: 1, c: "a" },
        { a: 2, c: "a" },
        { a: 3, c: "b" },
        { a: 2, c: "b" },
        { a: 1, c: "b" },
      ],
    ),
  ).toEqual([
    { a: 1, c: "b" },
    { a: 1, c: "a" },
    { a: 2, c: "b" },
    { a: 2, c: "a" },
    { a: 3, c: "b" },
  ]);
});
