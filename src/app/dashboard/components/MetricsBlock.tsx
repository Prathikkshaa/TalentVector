"use client";

import * as React from "react";
import { 
  Briefcase, 
  UserCheck, 
  Calendar, 
  FileSignature, 
  Clock, 
  AlertTriangle,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  label: string;
  value: string | number;
  icon: React.ElementType;
  trend?: { value: string; direction: "up" | "down"; context: "good" | "bad" };
  subtext: string;
}

function MetricCard({ label, value, icon: Icon, trend, subtext }: MetricCardProps) {
  return (
    <div className="bg-surface-primary border border-border-default rounded-card p-4 hover:border-border-emphasis transition-all cursor-pointer group">
      <div className="flex items-center gap-2 mb-3">
        <Icon size={16} className="text-zinc-400 group-hover:text-signal-teal-text transition-colors" />
        <span className="font-sans text-[11px] font-bold text-zinc-500 uppercase tracking-wider">{label}</span>
      </div>
      
      <div className="flex items-baseline gap-2">
        <span className="font-mono text-[28px] font-bold text-zinc-900 dark:text-zinc-100 leading-none">
          {value}
        </span>
        {trend && (
          <div className={cn(
            "flex items-center text-[10px] font-bold px-1.5 py-0.5 rounded-full",
            trend.context === "good" ? "text-signal-green-text bg-signal-green-bg" : "text-signal-red-text bg-signal-red-bg"
          )}>
            {trend.direction === "up" ? <ArrowUpRight size={10} /> : <ArrowDownRight size={10} />}
            {trend.value}
          </div>
        )}
      </div>
      
      <p className="font-sans text-xs text-zinc-500 mt-2">{subtext}</p>
    </div>
  );
}

export function MetricsBlock() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
      <MetricCard 
        label="Roles open" 
        icon={Briefcase} 
        value={6} 
        subtext="2 at SLA risk" 
      />
      <MetricCard 
        label="Awaiting review" 
        icon={UserCheck} 
        value={12} 
        trend={{ value: "+3", direction: "up", context: "bad" }}
        subtext="5 above 85% match" 
      />
      <MetricCard 
        label="Interviews today" 
        icon={Calendar} 
        value={4} 
        subtext="1 missing confirmation" 
      />
      <MetricCard 
        label="Offers pending" 
        icon={FileSignature} 
        value={2} 
        subtext="1 expiring within 48h" 
      />
      <MetricCard 
        label="Approvals pending" 
        icon={Clock} 
        value={1} 
        subtext="Oldest: 4d waiting" 
      />
      <MetricCard 
        label="Roles at risk" 
        icon={AlertTriangle} 
        value={2} 
        trend={{ value: "-1", direction: "down", context: "good" }}
        subtext="1 breach SLA this week" 
      />
    </div>
  );
}
