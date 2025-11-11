import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Button } from "./button";

describe("Button component", () => {
  it("renders default variant with dark/light classes", () => {
    const { getByRole } = render(<Button>Click</Button>);
    const btn = getByRole("button");
    expect(btn).toHaveClass("bg-black");
  });

  it("renders outline variant", () => {
    const { getByRole } = render(<Button variant="outline">Click</Button>);
    const btn = getByRole("button");
    expect(btn).toHaveClass("border");
  });
});