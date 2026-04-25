"use client";

import * as React from "react";
import { ShellLayout } from "@/components/layout/ShellLayout";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Avatar } from "@/components/ui/Avatar";
import { FillBar } from "@/components/ui/FillBar";
import { SignalDot } from "@/components/ui/SignalDot";
import { AlertCircle, FileText, Send, CheckCircle2, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function OffersPage() {
  return (
    <ShellLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <h2 className="font-sans text-2xl font-bold text-zinc-900 dark:text-zinc-100">Offers</h2>
            <Badge variant="signal-red" className="font-bold">2 At Risk</Badge>
          </div>
          <Button size="sm" className="gap-2 bg-zinc-900 dark:bg-zinc-100">
            <Send size={16} />
            <span>Generate new offer</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {[
            { 
              candidate: "Alex Rivers", 
              role: "Senior Cloud Architect", 
              expires: "18h left", 
              prob: 60, 
              risk: 35, 
              riskReason: "High engagement with competitor (Tier 1)",
              initials: "AR"
            },
            { 
              candidate: "Morgan Smith", 
              role: "Product Lead", 
              expires: "3d left", 
              prob: 85, 
              risk: 10, 
              riskReason: "Verbal acceptance received",
              initials: "MS"
            },
          ].map((offer, i) => (
            <div key={i} className="bg-surface-primary border border-border-default rounded-card overflow-hidden">
              <div className="p-6 flex flex-col lg:flex-row gap-8">
                
                {/* Left: Candidate & Role */}
                <div className="lg:w-[30%] flex items-start gap-4">
                  <Avatar initials={offer.initials} size="lg" momentum={offer.risk > 30 ? "cooling" : "hot"} />
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{offer.candidate}</span>
                    <span className="text-sm text-zinc-500">{offer.role}</span>
                    <div className="flex items-center gap-2 mt-3">
                      <Badge variant={offer.risk > 30 ? "signal-red" : "signal-teal"} className="font-mono">{offer.expires}</Badge>
                      <button className="text-[11px] text-signal-blue-text font-bold hover:underline">View contract</button>
                    </div>
                  </div>
                </div>

                {/* Center: Intelligence */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 px-8 border-x border-zinc-100 dark:border-zinc-800">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest">Acceptance Probability</span>
                      <span className="font-mono font-bold text-signal-teal-text">{offer.prob}%</span>
                    </div>
                    <FillBar value={offer.prob} variant="teal" height={6} />
                    <p className="text-[11px] text-zinc-500 flex items-center gap-1">
                      <TrendingDown size={12} className={offer.risk > 30 ? "text-signal-red-text" : "text-signal-green-text"} />
                      {offer.risk > 30 ? "Dropped 10% since last week" : "Stable momentum"}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest">Drop-off Risk</span>
                      <span className={cn("font-mono font-bold", offer.risk > 30 ? "text-signal-red-text" : "text-signal-green-text")}>
                        {offer.risk}%
                      </span>
                    </div>
                    <FillBar value={offer.risk} variant={offer.risk > 30 ? "red" : "green"} height={6} />
                    <div className="flex items-start gap-2 bg-zinc-50 dark:bg-zinc-900/50 p-2 rounded border border-border-default">
                      <AlertCircle size={14} className={offer.risk > 30 ? "text-signal-red-text" : "text-signal-green-text"} />
                      <span className="text-[10px] text-zinc-600 dark:text-zinc-400 font-medium leading-tight">{offer.riskReason}</span>
                    </div>
                  </div>
                </div>

                {/* Right: Actions */}
                <div className="lg:w-[20%] flex flex-col justify-center gap-2">
                  <Button className="w-full font-bold">Nudge candidate</Button>
                  <Button variant="outline" className="w-full text-xs h-9">Update comp package</Button>
                  <Button variant="ghost" className="w-full text-[11px] h-8 text-zinc-400">Withdraw offer</Button>
                </div>
              </div>

              {/* Progress Tracker */}
              <div className="px-6 py-3 bg-surface-secondary border-t border-border-default flex items-center gap-8 overflow-x-auto">
                {[
                  { step: "Generated", date: "Apr 20", done: true },
                  { step: "Approved", date: "Apr 21", done: true },
                  { step: "Sent", date: "Apr 21", done: true },
                  { step: "Viewed", date: "Apr 22", done: true },
                  { step: "Negotiating", date: "Active", current: true },
                  { step: "Accepted", date: "TBD" },
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-3 shrink-0">
                    <div className={cn(
                      "w-4 h-4 rounded-full flex items-center justify-center",
                      s.done ? "bg-signal-green-text text-white" : s.current ? "bg-signal-blue-text text-white animate-pulse-subtle" : "bg-zinc-200 dark:bg-zinc-800 text-transparent"
                    )}>
                      {s.done && <CheckCircle2 size={10} />}
                    </div>
                    <div className="flex flex-col">
                      <span className={cn("text-[10px] font-bold uppercase", s.current ? "text-signal-blue-text" : "text-zinc-500")}>{s.step}</span>
                      <span className="text-[9px] text-zinc-400">{s.date}</span>
                    </div>
                    {i < 5 && <div className="w-4 h-px bg-zinc-200 dark:bg-zinc-800 ml-2" />}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </ShellLayout>
  );
}
