"use client";

import * as React from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Role } from "@/types";
import { Users, Clock, Flame } from "lucide-react";
import Link from "next/link";

export function RoleCard({ role }: { role: Role }) {
  const isAtRisk = role.healthScore < 50;

  return (
    <div className={cn(
      "group relative w-full bg-surface-primary border border-border-default rounded-card p-4 transition-all hover:border-signal-teal-border",
      isAtRisk && "bg-signal-red-bg/30"
    )}>
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* ZONE A: Identity */}
        <div className="lg:w-[40%] flex flex-col gap-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-sans text-lg font-bold text-zinc-900 dark:text-zinc-100 truncate">
              {role.title}
            </h3>
            {isAtRisk && (
              <Badge variant="signal-red" className="text-[10px] py-0">SLA BREACH</Badge>
            )}
          </div>
          
          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <span>{role.department}</span>
            <span>·</span>
            <span>{role.location}</span>
          </div>

          <div className="flex items-center gap-2 mt-2">
            <div className="w-5 h-5 rounded-full bg-zinc-200 flex items-center justify-center text-[10px] font-bold text-zinc-500">
              {role.hiringManager.name.split(" ").map(n => n[0]).join("")}
            </div>
            <span className="text-xs text-zinc-600">
              HM: <span className="font-semibold text-zinc-800 dark:text-zinc-200">{role.hiringManager.name}</span>
            </span>
            <span className={cn(
              "text-[10px] font-medium",
              role.hiringManager.lastActive.includes("hour") ? "text-signal-green-text" : "text-zinc-400"
            )}>
              · last active {role.hiringManager.lastActive.includes("T") ? "recently" : "some time ago"}
            </span>
          </div>

          <div className="flex items-center gap-2 mt-1">
            <Badge variant={role.daysOpen > role.slaTarget ? "signal-red" : "neutral"} className="font-mono text-[11px]">
              {role.daysOpen}d / {role.slaTarget}d target
            </Badge>
          </div>
        </div>

        {/* ZONE B: Pipeline Snapshot */}
        <div className="lg:w-[35%] flex flex-col justify-center gap-3">
          <div className="flex h-1.5 w-full rounded-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
            <div className="bg-zinc-300 h-full" style={{ width: "30%" }} />
            <div className="bg-signal-blue-text/60 h-full" style={{ width: "20%" }} />
            <div className="bg-signal-amber-text/60 h-full" style={{ width: "25%" }} />
            <div className="bg-signal-teal-text/60 h-full" style={{ width: "15%" }} />
            <div className="bg-signal-green-text/60 h-full" style={{ width: "10%" }} />
          </div>
          
          <div className="flex justify-between items-center text-[11px] font-mono text-zinc-500">
            <div className="flex items-center gap-1">
              <Users size={12} />
              <span>Velocity: {role.pipelineVelocity}/wk</span>
            </div>
            <div className="flex items-center gap-1">
              <Flame size={12} className="text-signal-teal-text" />
              <span>Top Match: {role.healthScore}%</span>
            </div>
            <div className="text-signal-red-text font-bold">
              Bottleneck: {role.bottleneckStage || "None"}
            </div>
          </div>
        </div>

        {/* ZONE C: Status and Action */}
        <div className="lg:w-[25%] flex flex-col justify-between items-end border-l border-zinc-100 dark:border-zinc-800 pl-6">
          <div className="flex flex-col items-end gap-1">
            <div className="flex items-center gap-2">
              <div className={cn(
                "w-2 h-2 rounded-full",
                role.healthScore > 75 ? "bg-signal-green-text" : role.healthScore > 50 ? "bg-signal-amber-text" : "bg-signal-red-text"
              )} />
              <span className={cn(
                "text-sm font-bold uppercase tracking-tight",
                role.healthScore > 75 ? "text-signal-green-text" : role.healthScore > 50 ? "text-signal-amber-text" : "text-signal-red-text"
              )}>
                {role.healthScore > 75 ? "On track" : role.healthScore > 50 ? "Watch" : "At risk"}
              </span>
            </div>
            <div className="flex flex-col items-end gap-1 mt-1">
              <Badge variant={role.offerReadiness.score > 70 ? "signal-teal" : "neutral"} className="text-[9px] uppercase">
                {role.offerReadiness.score > 70 ? "Offer Ready" : "No Offer Stage"}
              </Badge>
              <Badge variant={role.healthScore > 50 ? "signal-green" : "signal-red"} className="text-[9px] uppercase">
                {role.healthScore > 50 ? "Interviews Active" : "Interviews Blocked"}
              </Badge>
            </div>
          </div>

          <Link href={`/roles/${role.id}`} className="w-full">
            <Button variant="outline" size="sm" className="w-full h-8 border-signal-teal-border/50 text-signal-teal-text hover:bg-signal-teal-bg">
              View role
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
