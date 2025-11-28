import { expect, test } from "vitest";

import { SELF } from "../constants.js";

import { filterFromValue } from "./filterFromValue.js";

test("returns filter from context", () => {
  expect(filterFromValue({ a: 1 })).toEqual({
    operator: "all",
    value: [
      {
        field: "a",
        operator: "equal",
        value: 1,
      },
    ],
  });
  expect(filterFromValue({ a: { b: 1 } })).toEqual({
    operator: "all",
    value: [
      {
        field: ["a", "b"],
        operator: "equal",
        value: 1,
      },
    ],
  });
  expect(filterFromValue({ a: { b: undefined } })).toEqual({
    operator: "all",
    value: [
      {
        field: ["a", "b"],
        operator: "equal",
        value: undefined,
      },
    ],
  });
  expect(filterFromValue({ a: { b: null } })).toEqual({
    operator: "all",
    value: [
      {
        field: ["a", "b"],
        operator: "equal",
        value: null,
      },
    ],
  });
  expect(filterFromValue({ [SELF]: 3 })).toEqual({
    operator: "all",
    value: [
      {
        field: SELF,
        operator: "equal",
        value: 3,
      },
    ],
  });
  expect(filterFromValue({ a: null })).toEqual({
    operator: "all",
    value: [
      {
        field: "a",
        operator: "equal",
        value: null,
      },
    ],
  });
  expect(filterFromValue({ a: { b: 1 }, c: 2 })).toEqual({
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
