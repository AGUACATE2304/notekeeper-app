import { expect, test } from "vitest";
import { validateNonEmpty } from "../validateNonEmpty";
test("validateNonEmpty should return true if the given value is not empty", () => {
  const value = "Hello";

  expect(validateNonEmpty(value)).toBe(true);
});

test("validateNonEmpty should return false if the given value is empty", () => {
  const value = "";

  expect(validateNonEmpty(value)).toBe(false);
});
