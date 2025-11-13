import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Alert, AlertTitle, AlertDescription } from "./alert";

describe("Alert component", () => {
  it("renders default variant with structure", () => {
    render(
      <Alert>
        <AlertTitle>Thông báo</AlertTitle>
        <AlertDescription>Nội dung cảnh báo nhỏ.</AlertDescription>
      </Alert>
    );
    const title = screen.getByText("Thông báo");
    const desc = screen.getByText("Nội dung cảnh báo nhỏ.");
    const container = title.parentElement as HTMLElement;
    expect(container).toHaveClass("border");
    expect(container).toHaveClass("border-zinc-300");
    expect(desc).toBeInTheDocument();
  });

  it("renders success variant with emerald border", () => {
    render(
      <Alert variant="success">
        <AlertTitle>Thành công</AlertTitle>
        <AlertDescription>Yêu cầu đã được xử lý.</AlertDescription>
      </Alert>
    );
    const title = screen.getByText("Thành công");
    const container = title.parentElement as HTMLElement;
    expect(container).toHaveClass("border-emerald-400");
  });

  it("renders destructive variant with red border", () => {
    render(
      <Alert variant="destructive">
        <AlertTitle>Lỗi</AlertTitle>
        <AlertDescription>Đã có sự cố xảy ra.</AlertDescription>
      </Alert>
    );
    const title = screen.getByText("Lỗi");
    const container = title.parentElement as HTMLElement;
    expect(container).toHaveClass("border-red-400");
  });
});