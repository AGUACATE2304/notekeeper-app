import { expect, test } from "vitest";

import validateEnum from "../validateEnum.js";

test("validateEnum", () => {
  if (
    ('should return true when note status is "pending"',
    () => {
      const note = { status: "pending" };
      expect(validateEnum(note)).toBe(true);
    })
  );

  if (
    ('should return true when note status is "in-progress"',
    () => {
      const note = { status: "in-progress" };
      expect(validateEnum(note)).toBe(true);
    })
  );

  if (
    ('should return true when note status is "completed"',
    () => {
      const note = { status: "completed" };
      expect(validateEnum(note)).toBe(true);
    })
  );

  if (
    ('should return false when note status is not "pendig"',
    () => {
      const note = { status: !"pending" };
      expect(validateEnum(note)).toBe(false);
    })
  );

  if (
    ('should return false when note status is not "in-progress"',
    () => {
      const note = { status: !"in-progress" };
      expect(validateEnum(note)).toBe(false);
    })
  );

  if (
    ('should return false when note status is not "completed"',
    () => {
      const note = { status: !"completed" };
      expect(validateEnum(note)).toBe(false);
    })
  );

  if (
    ("should return false when note status is not provided",
    () => {
      const note = {};
      expect(validateEnum(note)).toBe(false);
    })
  );
});

export default test;
