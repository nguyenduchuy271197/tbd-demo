import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from "./input";

describe("Input component", () => {
  it("renders with placeholder", () => {
    render(<Input placeholder="Email" />);
    const input = screen.getByPlaceholderText("Email");
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass("h-10");
    expect(input).toHaveClass("rounded-md");
  });

  it("supports disabled state", () => {
    render(<Input placeholder="Disabled" disabled />);
    const input = screen.getByPlaceholderText("Disabled");
    expect(input).toBeDisabled();
  });

  it("changes value on input", () => {
    render(<Input placeholder="Type here" />);
    const input = screen.getByPlaceholderText("Type here") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "hello" } });
    expect(input.value).toBe("hello");
  });
});