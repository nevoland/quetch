import { expect, test } from "vitest";

import { splitPath } from "./splitPath.js";

test("splits paths", () => {
  expect(splitPath("/", "\\", "/a/b")).toEqual(["", "a", "b"]);
  expect(splitPath("/", "\\", "/a\\/b")).toEqual(["", "a\\/b"]);
  expect(splitPath("/", "", "/a\\/b")).toEqual(["", "a\\", "b"]);
  expect(splitPath("", "", "/a/b")).toEqual(["/a/b"]);
});

test("returns path splitter", () => {
  expect(splitPath("/", "\\")("/a/b")).toEqual(["", "a", "b"]);
  expect(splitPath("/", "\\")("/a\\/b")).toEqual(["", "a\\/b"]);
  expect(splitPath("/", "")("/a\\/b")).toEqual(["", "a\\", "b"]);
  expect(splitPath("", "")("/a/b")).toEqual(["/a/b"]);
});
