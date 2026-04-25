"use client";

import * as React from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { MOCK_SIGNALS } from "@/lib/mockData";
import { PrioritySignal } from "@/types";

function SignalCard({ signal }: { signal: PrioritySignal }) {
  const borderColors = {
    red: "border-l-signal-red-text",
    amber: "border-l-signal-amber-text",
    teal: "border-l-signal-teal-text",
    blue: "border-l-signal-blue-text",
  };

  return (
    <div className={cn(
      "bg-surface-primary border border-border-default border-l-[3px] rounded-card p-3 flex flex-col gap-3 transition-all hover:border-border-emphasis",
      borderColors[signal.urgencyLevel]
    )}>
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-2">
          <Badge variant={`signal-${signal.urgencyLevel}`} className="uppercase text-[9px] py-0">
            {signal.type.replace("_", " ")}
          </Badge>
          <span className="font-sans text-xs font-semibold text-zinc-900 dark:text-zinc-100">
            {signal.title}
          </span>
        </div>
        <span className="font-mono text-[10px] text-zinc-400 font-bold uppercase">
          {signal.urgencyTimer}
        </span>
      </div>

      <p className="font-sans text-sm text-zinc-600 dark:text-zinc-400 leading-snug">
        {signal.description}
      </p>

      <div className="flex items-center justify-between mt-1">
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
          <span className="text-[10px] text-zinc-400 font-medium uppercase tracking-tight">
            Impact Score: {signal.impactScore}
          </span>
        </div>
        <Button size="sm" variant="outline" className="text-[11px] h-7 px-3 border-border-emphasis hover:border-signal-teal-border hover:text-signal-teal-text">
          {signal.ctaLabel}
        </Button>
      </div>
    </div>
  );
}

export function PrioritySignalFeed() {
  return (
    <div className="mt-8 mb-12">
      <div className="flex items-center gap-2 mb-4">
        <h3 className="font-sans text-sm font-bold text-zinc-900 dark:text-zinc-100">
          Priority signals
        </h3>
        <Badge variant="signal-red" className="rounded-full px-1.5 py-0 min-w-[18px] h-[18px] flex items-center justify-center font-bold">
          3
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {MOCK_SIGNALS.map((signal) => (
          <SignalCard key={signal.id} signal={signal} />
        ))}
      </div>

      <button className="mt-4 text-xs font-semibold text-signal-teal-text hover:underline">
        View all signals
      </button>
    </div>
  );
}
