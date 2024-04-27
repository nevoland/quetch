import { expect, test } from "vitest";

import { get } from "./get.js";

test("gets properties", () => {
  const value = {
    a: { b: 3, c: true, d: { e: [1, 2, { f: "test" }] } },
  } as const;
  expect(get(value, ["a", "c"])).toBe(value.a.c);
  expect(get(value, ["a", "d", "e", 2, "f"])).toBe(value.a.d.e[2].f);
  expect(get(value, ["a"])).toBe(value.a);
  expect(get(value, "a")).toBe(value.a);
  // @ts-ignore
  expect(get(value, "z")).toBeUndefined();
  // @ts-ignore
  expect(get(value, ["y", "z"])).toBeUndefined();
});

test("returns whole value if no path specified", () => {
  const value = { a: { b: 3, c: true } };
  expect(get(value)).toBe(value);
  expect(get(value, undefined)).toBe(value);
});
