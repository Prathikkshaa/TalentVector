"use client";

import * as React from "react";
import { Role, Interviewer } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { MessageSquare, Calendar, FileCheck } from "lucide-react";

interface StageStat {
  name: string;
  count: number;
  avgDays: number;
  isBottleneck?: boolean;
}

const MOCK_STAGES: StageStat[] = [
  { name: "Applied", count: 12, avgDays: 2 },
  { name: "Screened", count: 8, avgDays: 4 },
  { name: "Interview", count: 5, avgDays: 14, isBottleneck: true },
  { name: "Offer", count: 1, avgDays: 3 },
];

export function RoleHealthPanel({ role }: { role: Role }) {
  return (
    <div className="flex flex-col gap-8 sticky top-[76px]">
      
      {/* Section 1: Stage Analysis */}
      <div className="bg-surface-primary border border-border-default rounded-card p-4">
        <h3 className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-4">Stage Analysis</h3>
        <div className="space-y-4">
          {MOCK_STAGES.map((stage) => (
            <div key={stage.name} className="space-y-1.5">
              <div className="flex justify-between items-center text-xs">
                <span className="font-medium text-zinc-700 dark:text-zinc-300">{stage.name}</span>
                <div className="flex items-center gap-2">
                  {stage.isBottleneck && (
                    <Badge variant="signal-red" className="text-[8px] py-0 px-1">BOTTLENECK</Badge>
                  )}
                  <span className="text-zinc-500">{stage.count} cands · {stage.avgDays}d avg</span>
                </div>
              </div>
              <div className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                <div 
                  className={cn(
                    "h-full rounded-full transition-all duration-500",
                    stage.isBottleneck ? "bg-signal-red-text" : "bg-signal-blue-text"
                  )} 
                  style={{ width: `${(stage.count / 20) * 100}%` }} 
                />
              </div>
            </div>
          ))}
        </div>
        <p className="text-[11px] text-signal-red-text font-medium mt-4">
          Candidates lost at Interview: 3 this month
        </p>
      </div>

      {/* Section 2: Stakeholder Signals */}
      <div className="bg-surface-primary border border-border-default rounded-card p-4">
        <h3 className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-4">Stakeholder Signals</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-zinc-200 flex items-center justify-center text-[10px] font-bold">DK</div>
              <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">{role.hiringManager.name}</span>
            </div>
            <Badge variant="signal-green" className="text-[9px]">FAST RESPONSE</Badge>
          </div>
          
          <div className="space-y-2">
            <span className="text-[10px] font-bold text-zinc-400 uppercase">Interviewers</span>
            {[
              { name: "Sarah Chen", pending: 0, status: "FAST" },
              { name: "Marcus Miller", pending: 2, status: "SLOW" },
            ].map((int, i) => (
              <div key={i} className="flex items-center justify-between text-xs">
                <span className="text-zinc-600">{int.name}</span>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-zinc-400">{int.pending} pending</span>
                  <div className={cn(
                    "w-1.5 h-1.5 rounded-full",
                    int.status === "FAST" ? "bg-signal-green-text" : "bg-signal-amber-text"
                  )} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 3: Quick Actions */}
      <div className="flex flex-col gap-2">
        <Button variant="outline" className="w-full justify-start gap-3 text-xs border-border-default">
          <MessageSquare size={14} className="text-zinc-400" />
          Ping HM for feedback
        </Button>
        <Button variant="outline" className="w-full justify-start gap-3 text-xs border-border-default">
          <Calendar size={14} className="text-zinc-400" />
          Book interview slots
        </Button>
        <Button variant="outline" className="w-full justify-start gap-3 text-xs border-border-default">
          <FileCheck size={14} className="text-zinc-400" />
          View offer status
        </Button>
      </div>

      {/* Section 4: Role Notes */}
      <div className="bg-surface-secondary border border-border-default border-dashed rounded-card p-3">
        <h3 className="text-[10px] font-bold text-zinc-400 uppercase mb-2">Role Notes</h3>
        <p className="text-xs text-zinc-500 italic leading-relaxed">
          Focus on candidates with strong distributed systems background. James is looking for someone who can lead the payment core rewrite.
        </p>
        <button className="text-[10px] text-signal-teal-text font-bold mt-2 hover:underline">Edit notes</button>
      </div>

    </div>
  );
}
