import { expect, test } from "vitest";

import { normalizeFieldSeparatorMap } from "./normalizeFieldSeparatorMap.js";

test("normalizes field separator maps", () => {
  expect(normalizeFieldSeparatorMap([["path", "/"]])).toEqual({
    path: "/",
  });
  expect(normalizeFieldSeparatorMap([[["path"], "/"]])).toEqual({
    path: "/",
  });
  expect(normalizeFieldSeparatorMap([[["path", "other"], "/"]])).toEqual({
    path: { other: "/" },
  });
});
