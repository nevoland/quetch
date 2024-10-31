import { expect, test } from "vitest";

import { normalizeOrder } from "./normalizeOrder.js";

test("normalizes order", () => {
  expect(normalizeOrder<{ a: any }>("a")).toEqual({
    field: "a",
    descending: false,
  });
  expect(normalizeOrder<{ a: any }>({ field: "a" })).toEqual({
    field: "a",
  });
});
