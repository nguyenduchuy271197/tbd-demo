import * as React from "react";
import { cn } from "../lib/utils";

export type BadgeProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "default" | "secondary" | "outline" | "success" | "destructive";
};

const variants: Record<NonNullable<BadgeProps["variant"]>, string> = {
  default: "border-transparent bg-black text-white dark:bg-zinc-50 dark:text-black",
  secondary:
    "border-transparent bg-zinc-100 text-black dark:bg-zinc-800 dark:text-zinc-50",
  outline: "bg-transparent text-black border border-zinc-300 dark:text-zinc-50 dark:border-zinc-700",
  success: "border-transparent bg-emerald-600 text-white dark:bg-emerald-500",
  destructive: "border-transparent bg-red-600 text-white dark:bg-red-500",
};

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}