import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./card";

describe("Card component", () => {
  it("renders structure with children", () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Title</CardTitle>
          <CardDescription>Description</CardDescription>
        </CardHeader>
        <CardContent>Content</CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>
    );

    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Description")).toBeInTheDocument();
    expect(screen.getByText("Content")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
    // top-level card classes: Title -> CardHeader div -> Card container
    const titleEl = screen.getByText("Title");
    const headerDiv = titleEl.parentElement as HTMLElement;
    const container = headerDiv.parentElement as HTMLElement;
    expect(container).toHaveClass("rounded-xl");
    expect(container).toHaveClass("border");
  });
});