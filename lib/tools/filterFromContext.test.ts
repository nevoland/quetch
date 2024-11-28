import { expect, test } from "vitest";

import { SELF } from "../constants.js";

import { filterFromContext } from "./filterFromContext.js";

test("returns filter from context", () => {
  expect(filterFromContext({ a: 1 })).toEqual({
    operator: "all",
    value: [
      {
        field: "a",
        operator: "equal",
        value: 1,
      },
    ],
  });
  expect(filterFromContext({ a: { b: 1 } })).toEqual({
    operator: "all",
    value: [
      {
        field: ["a", "b"],
        operator: "equal",
        value: 1,
      },
    ],
  });
  expect(filterFromContext({ a: { b: undefined } })).toEqual({
    operator: "all",
    value: [
      {
        field: ["a", "b"],
        operator: "equal",
        value: undefined,
      },
    ],
  });
  expect(filterFromContext({ a: { b: null } })).toEqual({
    operator: "all",
    value: [
      {
        field: ["a", "b"],
        operator: "equal",
        value: null,
      },
    ],
  });
  expect(filterFromContext({ [SELF]: 3 })).toEqual({
    operator: "all",
    value: [
      {
        field: SELF,
        operator: "equal",
        value: 3,
      },
    ],
  });
  expect(filterFromContext({ a: null })).toEqual({
    operator: "all",
    value: [
      {
        field: "a",
        operator: "equal",
        value: null,
      },
    ],
  });
  expect(filterFromContext({ a: { b: 1 }, c: 2 })).toEqual({
    operator: "all",
    value: [
      {
        field: ["a", "b"],
        operator: "equal",
        value: 1,
      },
      {
        field: "c",
        operator: "equal",
        value: 2,
      },
    ],
  });
});
