import * as React from "react";
import { cn } from "@/lib/utils";

export function SignalDot({ level, className }: { level: "red" | "amber" | "green" | "blue" | "teal"; className?: string }) {
  const colors = {
    red: "bg-signal-red-text",
    amber: "bg-signal-amber-text",
    green: "bg-signal-green-text",
    blue: "bg-signal-blue-text",
    teal: "bg-signal-teal-text",
  };

  return <div className={cn("w-2 h-2 rounded-full shrink-0", colors[level], className)} />;
}
