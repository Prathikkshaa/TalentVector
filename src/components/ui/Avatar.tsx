import * as React from "react";
import { cn } from "@/lib/utils";

interface AvatarProps {
  initials: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  momentum?: "hot" | "warm" | "cooling" | "cold";
}

export function Avatar({ initials, size = "md", className, momentum }: AvatarProps) {
  const sizes = {
    sm: "w-8 h-8 text-[10px]",
    md: "w-10 h-10 text-xs",
    lg: "w-12 h-12 text-sm",
  };

  const momentumColors = {
    hot: "bg-signal-teal-text",
    warm: "bg-signal-green-text",
    cooling: "bg-signal-amber-text",
    cold: "bg-signal-red-text",
  };

  return (
    <div className={cn("relative inline-block", className)}>
      <div
        className={cn(
          "flex items-center justify-center rounded-full bg-surface-secondary border border-border-default font-semibold text-zinc-600 font-sans uppercase",
          sizes[size]
        )}
      >
        {initials}
      </div>
      {momentum && (
        <span
          className={cn(
            "absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full border-2 border-surface-primary",
            momentumColors[momentum],
            momentum === "hot" && "animate-pulse-subtle"
          )}
        />
      )}
    </div>
  );
}

