import * as React from "react";
import { cn } from "@/lib/utils";

interface FillBarProps {
  value: number; // 0-100
  variant?: "green" | "amber" | "red" | "blue" | "teal";
  height?: number;
  className?: string;
  showLabel?: boolean;
}

export function FillBar({ 
  value, 
  variant = "blue", 
  height = 4, 
  className,
  showLabel = false 
}: FillBarProps) {
  const colors = {
    green: "bg-signal-green-text",
    amber: "bg-signal-amber-text",
    red: "bg-signal-red-text",
    blue: "bg-signal-blue-text",
    teal: "bg-signal-teal-text",
  };

  const clampedValue = Math.min(100, Math.max(0, value));

  return (
    <div className={cn("w-full space-y-1.5", className)}>
      <div 
        className="w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden"
        style={{ height: `${height}px` }}
      >
        <div
          className={cn("h-full transition-all duration-500 rounded-full", colors[variant])}
          style={{ width: `${clampedValue}%` }}
        />
      </div>
      {showLabel && (
        <div className="flex justify-between text-[10px] font-mono font-bold text-zinc-400">
          <span>0%</span>
          <span>{clampedValue}%</span>
          <span>100%</span>
        </div>
      )}
    </div>
  );
}
