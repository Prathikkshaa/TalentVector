import * as React from "react";
import { cn } from "@/lib/utils";

interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "neutral" | "active" | "warning" | "success" | "error";
}

export function Chip({ children, className, variant = "neutral", ...props }: ChipProps) {
  const variants = {
    neutral: "bg-surface-secondary text-zinc-500 border-border-default",
    active: "bg-signal-blue-bg text-signal-blue-text border-signal-blue-border",
    warning: "bg-signal-amber-bg text-signal-amber-text border-signal-amber-border",
    success: "bg-signal-green-bg text-signal-green-text border-signal-green-border",
    error: "bg-signal-red-bg text-signal-red-text border-signal-red-border",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-chip border px-3 py-1 font-sans text-[13px] font-medium transition-all",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
