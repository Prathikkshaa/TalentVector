"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface SnapshotChipProps {
  label: string;
  value: number;
  variant?: "neutral" | "amber" | "blue" | "red";
}

function SnapshotChip({ label, value, variant = "neutral" }: SnapshotChipProps) {
  const variants = {
    neutral: "bg-surface-primary border-border-default text-zinc-500",
    amber: "bg-signal-amber-bg border-signal-amber-border text-signal-amber-text",
    blue: "bg-signal-blue-bg border-signal-blue-border text-signal-blue-text",
    red: "bg-signal-red-bg border-signal-red-border text-signal-red-text",
  };

  return (
    <div className={cn("inline-flex items-center gap-2 rounded-full border px-3 py-1 font-sans text-[13px] transition-all cursor-pointer hover:border-border-emphasis", variants[variant])}>
      <span>{label}</span>
      <span className="font-mono font-semibold">{value}</span>
    </div>
  );
}

export function SnapshotStrip() {
  // These would come from useHomeSnapshot()
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      <SnapshotChip label="Active roles" value={6} variant="neutral" />
      <SnapshotChip label="Candidates awaiting review" value={12} variant="amber" />
      <SnapshotChip label="Interviews today" value={4} variant="blue" />
      <SnapshotChip label="Offers pending response" value={2} variant="red" />
      <SnapshotChip label="Approvals pending" value={1} variant="amber" />
    </div>
  );
}
