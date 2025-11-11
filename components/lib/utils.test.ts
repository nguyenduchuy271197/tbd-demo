import { describe, it, expect } from "vitest";
import { cn } from "./utils";

describe("cn utility", () => {
  it("joins truthy class names with spaces", () => {
    expect(cn("a", false, "b", null, undefined, "c")).toBe("a b c");
  });

  it("returns empty string for all falsy", () => {
    expect(cn(false, null, undefined)).toBe("");
  });
});