import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "signal-red" | "signal-amber" | "signal-green" | "signal-blue" | "signal-teal";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "bg-surface-secondary text-zinc-600 border-border-default",
    outline: "border-border-default text-zinc-600",
    "signal-red": "bg-signal-red-bg text-signal-red-text border-signal-red-border",
    "signal-amber": "bg-signal-amber-bg text-signal-amber-text border-signal-amber-border",
    "signal-green": "bg-signal-green-bg text-signal-green-text border-signal-green-border",
    "signal-blue": "bg-signal-blue-bg text-signal-blue-text border-signal-blue-border",
    "signal-teal": "bg-signal-teal-bg text-signal-teal-text border-signal-teal-border",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-badge border px-2 py-0.5 text-xs font-medium transition-colors font-sans",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

export { Badge };
