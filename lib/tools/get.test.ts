import { expect, test } from "vitest";

import { get } from "./get.js";

test("gets properties", () => {
  const value = {
    a: { b: 3, c: true, d: { e: [1, 2, { f: "test" }] } },
  } as const;

  const result1 = get(value, ["a", "c"]);
  expect(result1).toBe(value.a.c);

  const result2 = get(value, ["a", "d", "e", 2, "f"]);
  expect(result2).toBe(value.a.d.e[2].f);

  const result3 = get(value, ["a"]);
  expect(result3).toBe(value.a);

  const result4 = get(value, "a");
  expect(result4).toBe(value.a);

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
