import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Badge } from "./badge";

describe("Badge component", () => {
  it("renders default variant", () => {
    render(<Badge>Default</Badge>);
    const el = screen.getByText("Default");
    expect(el).toBeInTheDocument();
    expect(el).toHaveClass("bg-black");
    expect(el).toHaveClass("text-white");
  });

  it("renders success variant", () => {
    render(<Badge variant="success">Success</Badge>);
    const el = screen.getByText("Success");
    expect(el).toHaveClass("bg-emerald-600");
  });

  it("renders outline variant with border", () => {
    render(<Badge variant="outline">Outline</Badge>);
    const el = screen.getByText("Outline");
    expect(el).toHaveClass("border");
    expect(el).toHaveClass("border-zinc-300");
  });
});