import { expect, test } from "vitest";

import validateType from "../validateType";

test("validateType should return true for valid note object", () => {
  const validNote = {
    name: "Meeting",
    description: "Discuss project updates",
    important: true,
    status: "pending",
    dueDate: "2024-05-20",
  };
  expect(validateType(validNote)).toBe(true);
});

test("validateType should return false for invalid note object with incorrect data type", () => {
  const invalidNote = {
    name: "Meeting",
    description: "Discuss project updates",
    important: "true", // Incorrect data type, should be boolean
    status: "pending",
    dueDate: "2024-05-20",
  };
  expect(validateType(invalidNote)).toBe(false);
});
