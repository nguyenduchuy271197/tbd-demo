import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "./page";
import type { ImgHTMLAttributes } from "react";

// Mock next/image to a regular img for JSDOM with proper typing
vi.mock("next/image", () => ({
  default: (props: ImgHTMLAttributes<HTMLImageElement>) => {
    const { alt = "", ...rest } = props;
    // eslint-disable-next-line @next/next/no-img-element
    return <img alt={alt} {...rest} />;
  },
}));

describe("Home page", () => {
  it("renders simplified heading and components", () => {
    render(<Home />);
    // Heading
    expect(screen.getByText(/Trang Home đơn giản/i)).toBeInTheDocument();

    // Card titles
    expect(screen.getByText(/Liên hệ/i)).toBeInTheDocument();
    expect(screen.getByText(/Trạng thái/i)).toBeInTheDocument();

    // Input and button
    expect(screen.getByPlaceholderText(/you@domain\.com/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Gửi/i })).toBeInTheDocument();

    // Badges and another button
    expect(screen.getByText(/Success/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Default/i })).toBeInTheDocument();
  });
});