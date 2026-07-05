import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      className={cn(
        "h-11 w-full rounded-lg border border-white/10 bg-white/[0.07] px-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-emerald-300/60 focus:ring-2 focus:ring-emerald-300/20",
        className
      )}
      ref={ref}
      {...props}
    />
  )
);
Input.displayName = "Input";
