"use client";

import * as React from "react";
import { Candidate } from "@/types";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { ArrowRight, Calendar, Info } from "lucide-react";

export function CandidateCard({ candidate }: { candidate: Candidate }) {
  const momentumColor = {
    hot: "border-l-signal-teal-text",
    green: "border-l-signal-green-text",
    warm: "border-l-signal-amber-text",
    cooling: "border-l-signal-amber-text",
    cold: "border-l-signal-red-text",
  };

  return (
    <div className={cn(
      "group relative flex items-center gap-4 bg-surface-primary border border-border-default border-l-[3px] rounded-card p-3 transition-all hover:border-zinc-400 cursor-pointer",
      momentumColor[candidate.momentumLabel]
    )}>
      <Avatar initials={candidate.avatarInitials} momentum={candidate.momentumLabel} />
      
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">{candidate.name}</span>
          <Badge variant={
            candidate.currentStage === "applied" ? "neutral" : 
            candidate.currentStage === "screened" ? "signal-blue" :
            candidate.currentStage === "interview" ? "signal-amber" : "signal-teal"
          } className="text-[9px] h-4 py-0 uppercase">
            {candidate.currentStage}
          </Badge>
        </div>
        
        <div className="flex items-center gap-2 mt-1">
          <span className={cn(
            "font-mono text-xs font-bold",
            candidate.matchScore > 85 ? "text-signal-teal-text" : "text-zinc-500"
          )}>
            {candidate.matchScore}%
          </span>
          <span className="text-zinc-300">·</span>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 truncate">
            {candidate.fitSummary}
          </p>
        </div>
        
        <p className="text-[11px] text-zinc-400 mt-0.5 italic">
          {candidate.gapSummary}
        </p>

        <div className="flex items-center gap-2 mt-2">
          <span className={cn(
            "text-[10px] font-medium",
            candidate.daysInCurrentStage > 7 ? "text-signal-red-text" : candidate.daysInCurrentStage > 3 ? "text-signal-amber-text" : "text-signal-green-text"
          )}>
            {candidate.daysInCurrentStage}d waiting in {candidate.currentStage}
          </span>
        </div>
      </div>

      {/* Hover Actions */}
      <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
          <ArrowRight size={14} />
        </Button>
        <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
          <Calendar size={14} />
        </Button>
      </div>
    </div>
  );
}

export function CandidateStack({ candidates }: { candidates: Candidate[] }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Candidates</h3>
          <span className="text-[10px] text-zinc-400 font-medium">RANKED BY AI READINESS</span>
          <Info size={12} className="text-zinc-300 cursor-help" />
        </div>
      </div>

      <div className="space-y-2">
        {candidates.map((candidate) => (
          <CandidateCard key={candidate.id} candidate={candidate} />
        ))}
      </div>
    </div>
  );
}
