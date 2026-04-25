"use client";

import * as React from "react";
import { Role } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import { TrendingUp } from "lucide-react";

export function RoleDetailHeader({ role }: { role: Role }) {
  const isSLAOk = role.daysOpen <= role.slaTarget;

  return (
    <div className="bg-surface-secondary border-b border-border-default p-6 w-full">
      <div className="flex flex-col lg:flex-row justify-between gap-8 max-w-6xl mx-auto">
        
        {/* Left: Role identity */}
        <div className="flex flex-col">
          <h1 className="font-syne text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            {role.title}
          </h1>
          <div className="flex items-center gap-2 mt-1 text-sm text-zinc-500">
            <span>{role.department}</span>
            <span>·</span>
            <span>{role.location}</span>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <div className="w-6 h-6 rounded-full bg-zinc-200 flex items-center justify-center text-[10px] font-bold">
              {role.hiringManager.name.split(" ").map(n => n[0]).join("")}
            </div>
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{role.hiringManager.name}</span>
            <Badge variant="signal-green" className="text-[10px]">Active now</Badge>
          </div>
        </div>

        {/* Center: Stat blocks */}
        <div className="flex flex-1 justify-around items-center">
          {[
            { label: "Days open", value: role.daysOpen, sub: `${role.slaTarget}d target`, mono: true },
            { label: "Hiring velocity", value: `${role.pipelineVelocity}/wk`, sub: <div className="flex items-center gap-1 text-signal-green-text"><TrendingUp size={12}/> +12%</div>, mono: true },
            { label: "Pipeline strength", value: "Strong", sub: "12 high match", color: "text-signal-teal-text" },
            { label: "Closure forecast", value: `~${role.closureForecast}d`, sub: "Confidence: 85%", mono: true },
          ].map((stat, i) => (
            <React.Fragment key={i}>
              <div className="flex flex-col items-center">
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-1">{stat.label}</span>
                <span className={cn(
                  "text-xl font-bold",
                  stat.mono ? "font-mono" : "font-sans",
                  stat.color || "text-zinc-900 dark:text-zinc-100"
                )}>
                  {stat.value}
                </span>
                <span className="text-[10px] text-zinc-500 mt-1">{stat.sub}</span>
              </div>
              {i < 3 && <div className="h-10 w-px bg-zinc-200 dark:bg-zinc-800" />}
            </React.Fragment>
          ))}
        </div>

        {/* Right: Health circle */}
        <div className="flex flex-col items-center">
          <div className={cn(
            "w-[64px] h-[64px] rounded-full border-[3px] flex items-center justify-center relative",
            role.healthScore > 75 ? "border-signal-green-text" : "border-signal-amber-text"
          )}>
            <span className="font-mono text-xl font-bold text-zinc-900 dark:text-zinc-100">
              {role.healthScore}
            </span>
            <div className={cn(
              "absolute -bottom-1 px-1.5 py-0.5 rounded-full text-[8px] font-bold text-white",
              role.healthScore > 75 ? "bg-signal-green-text" : "bg-signal-amber-text"
            )}>
              HEALTH
            </div>
          </div>
          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mt-2">Role Health</span>
        </div>

      </div>

      {/* Applicant summary strip */}
      <div className="flex gap-2 mt-8 max-w-6xl mx-auto overflow-x-auto pb-2">
        {[
          { label: "Total applicants", value: role.candidateCount.total },
          { label: "High-match (>80%)", value: role.candidateCount.highMatch, signal: "teal" },
          { label: "Interview-ready", value: role.candidateCount.interviewReady, signal: "blue" },
          { label: "Shortlisted", value: role.candidateCount.shortlisted, signal: "teal" },
          { label: "Offer stage", value: role.candidateCount.offerStage, signal: "green" },
        ].map((chip, i) => (
          <div key={i} className="flex items-center gap-3 bg-white dark:bg-zinc-900 border border-border-default rounded-badge px-3 py-1.5 min-w-fit">
            <span className="text-xs text-zinc-500 whitespace-nowrap">{chip.label}</span>
            <span className={cn(
              "font-mono font-bold text-sm",
              chip.signal === "teal" ? "text-signal-teal-text" : 
              chip.signal === "blue" ? "text-signal-blue-text" :
              chip.signal === "green" ? "text-signal-green-text" : "text-zinc-900 dark:text-zinc-100"
            )}>
              {chip.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
