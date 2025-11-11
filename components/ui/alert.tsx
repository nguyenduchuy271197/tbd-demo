import * as React from "react";
import { cn } from "../lib/utils";

export type AlertProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "default" | "success" | "destructive" | "info";
};

const baseClasses =
  "relative w-full rounded-md border p-4";

const variants: Record<NonNullable<AlertProps["variant"]>, string> = {
  default: "border-zinc-300 text-black dark:border-zinc-700 dark:text-zinc-50",
  success: "border-emerald-400 text-emerald-700 dark:border-emerald-500 dark:text-emerald-500",
  destructive: "border-red-400 text-red-700 dark:border-red-500 dark:text-red-500",
  info: "border-blue-400 text-blue-700 dark:border-blue-500 dark:text-blue-500",
};

export function Alert({ className, variant = "default", ...props }: AlertProps) {
  return <div className={cn(baseClasses, variants[variant], className)} {...props} />;
}

export function AlertTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h5 className={cn("mb-1 font-medium leading-none tracking-tight", className)} {...props} />;
}

export function AlertDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-sm text-zinc-600 dark:text-zinc-400", className)} {...props} />;
}