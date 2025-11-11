"use client";

import * as React from "react";
import { cn } from "../lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "secondary" | "ghost";
  size?: "sm" | "default" | "lg";
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-500 disabled:pointer-events-none disabled:opacity-50";

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  default:
    "bg-black text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-black dark:hover:bg-zinc-200",
  outline:
    "border border-zinc-300 bg-transparent text-black hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-800",
  secondary:
    "bg-zinc-100 text-black hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-700",
  ghost: "bg-transparent text-black hover:bg-zinc-100 dark:text-zinc-50 dark:hover:bg-zinc-800",
};

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-9 px-3",
  default: "h-10 px-4 py-2",
  lg: "h-11 px-6",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";