"use client";

import * as React from "react";
import { ShellLayout } from "@/components/layout/ShellLayout";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  LineChart, 
  Line,
  AreaChart,
  Area
} from "recharts";

const PIPELINE_DATA = [
  { name: "Week 1", applied: 40, interview: 24, offer: 8 },
  { name: "Week 2", applied: 30, interview: 18, offer: 6 },
  { name: "Week 3", applied: 65, interview: 32, offer: 12 },
  { name: "Week 4", applied: 45, interview: 28, offer: 10 },
];

const SOURCE_DATA = [
  { name: "LinkedIn", value: 55 },
  { name: "Referral", value: 25 },
  { name: "Inbound", value: 15 },
  { name: "Agency", value: 5 },
];

export default function InsightsPage() {
  return (
    <ShellLayout>
      <div className="p-6 max-w-6xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <h2 className="font-sans text-2xl font-bold text-zinc-900 dark:text-zinc-100">Insights</h2>
            <Badge variant="default">Last 30 Days</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Chart 1: Pipeline Velocity */}
          <div className="bg-surface-primary border border-border-default rounded-card p-6">
            <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-6">Pipeline Velocity</h3>
            <div className="h-[240px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={PIPELINE_DATA}>
                  <defs>
                    <linearGradient id="colorApplied" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 10, fill: "#94a3b8" }} 
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 10, fill: "#94a3b8" }} 
                  />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  />
                  <Area type="monotone" dataKey="applied" stroke="#3b82f6" fillOpacity={1} fill="url(#colorApplied)" strokeWidth={2} />
                  <Area type="monotone" dataKey="interview" stroke="#14b8a6" fillOpacity={0} strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Chart 2: Source Effectiveness */}
          <div className="bg-surface-primary border border-border-default rounded-card p-6">
            <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-6">Source effectiveness</h3>
            <div className="h-[240px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={SOURCE_DATA} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                  <XAxis type="number" hide />
                  <YAxis 
                    dataKey="name" 
                    type="category" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 11, fontWeight: 600, fill: "#64748b" }} 
                    width={80}
                  />
                  <Tooltip cursor={{ fill: 'transparent' }} />
                  <Bar dataKey="value" fill="#14b8a6" radius={[0, 4, 4, 0]} barSize={20} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: "Avg. Time to Hire", value: "24 days", trend: "-2d", context: "good" },
            { label: "Offer Acceptance Rate", value: "92%", trend: "+5%", context: "good" },
            { label: "SLA Compliance", value: "78%", trend: "-4%", context: "bad" },
          ].map((metric, i) => (
            <div key={i} className="bg-surface-primary border border-border-default rounded-card p-4">
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">{metric.label}</span>
              <div className="flex items-baseline gap-3 mt-1">
                <span className="text-xl font-mono font-bold text-zinc-900 dark:text-zinc-100">{metric.value}</span>
                <span className={cn(
                  "text-[10px] font-bold",
                  metric.context === "good" ? "text-signal-green-text" : "text-signal-red-text"
                )}>
                  {metric.trend}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ShellLayout>
  );
}
