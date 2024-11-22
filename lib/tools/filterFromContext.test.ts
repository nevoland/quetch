import { expect, test } from "vitest";

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
