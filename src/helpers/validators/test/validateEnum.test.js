import { expect, test } from "vitest";
import {validateEnum} from "../validateEnum";
test("validateEnum should return true if the given value is included in the given enum", () => {
  const value = 1;
  const enumArray = [1, 2, 3];
    expect(validateEnum(value, enumArray)).toBe(true);
});

test("validateEnum should return false if the given value is not included in the given enum", () => {
  const value = 6;
  const enumArray = [1, 2, 3];
    expect(validateEnum(value, enumArray)).toBe(false);
});

export default test;
