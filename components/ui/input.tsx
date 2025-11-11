"use client";

import * as React from "react";
import { cn } from "../lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "flex h-10 w-full rounded-md border border-zinc-300 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-zinc-500 focus:ring-2 focus:ring-zinc-500 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-700 dark:text-zinc-50",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";