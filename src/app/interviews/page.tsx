"use client";

import * as React from "react";
import { ShellLayout } from "@/components/layout/ShellLayout";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Avatar } from "@/components/ui/Avatar";
import { SignalDot } from "@/components/ui/SignalDot";
import { Calendar, Clock, MapPin, Video, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function InterviewsPage() {
  return (
    <ShellLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <h2 className="font-sans text-2xl font-bold text-zinc-900 dark:text-zinc-100">Interviews</h2>
            <Badge variant="signal-blue" className="font-bold">4 Today</Badge>
          </div>
          <div className="flex items-center gap-2 bg-surface-secondary border border-border-default rounded-badge p-1">
            <Button size="icon" variant="ghost" className="h-7 w-7"><ChevronLeft size={16}/></Button>
            <span className="text-xs font-semibold px-2">Apr 25, 2026</span>
            <Button size="icon" variant="ghost" className="h-7 w-7"><ChevronRight size={16}/></Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Timeline */}
          <div className="lg:col-span-8 space-y-6">
            <div className="relative pl-8 border-l border-zinc-200 dark:border-zinc-800 ml-4 space-y-12">
              {[
                { time: "09:30 AM", candidate: "Jordan Lee", role: "EM - FinTech", type: "Technical Final", status: "Starting soon" },
                { time: "11:00 AM", candidate: "Sarah Miller", role: "Staff Designer", type: "Portfolio Review", status: "Confirmed" },
                { time: "02:30 PM", candidate: "Alex Rivers", role: "Cloud Architect", type: "Final Panel", status: "Stakeholder missing" },
              ].map((slot, i) => (
                <div key={i} className="relative">
                  <div className={cn(
                    "absolute -left-[41px] top-1 w-4 h-4 rounded-full border-4 border-surface-primary",
                    i === 0 ? "bg-signal-teal-text" : "bg-zinc-300"
                  )} />
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-xs font-bold text-zinc-400">{slot.time}</span>
                    <div className="bg-surface-primary border border-border-default rounded-card p-4 hover:border-zinc-400 transition-all">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-xs font-bold">
                            {slot.candidate.split(" ").map(n => n[0]).join("")}
                          </div>
                          <div className="flex flex-col">
                            <span className="text-sm font-bold text-zinc-800 dark:text-zinc-200">{slot.candidate}</span>
                            <span className="text-[10px] text-zinc-400 font-medium uppercase tracking-tight">{slot.role}</span>
                          </div>
                        </div>
                        <Badge variant={i === 2 ? "signal-red" : "signal-teal"} className="text-[9px]">{slot.status}</Badge>
                      </div>
                      
                      <div className="flex items-center gap-6 mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                        <div className="flex items-center gap-2 text-xs text-zinc-500">
                          <Video size={14} className="text-zinc-400" />
                          <span>Google Meet</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-zinc-500">
                          <Clock size={14} className="text-zinc-400" />
                          <span>60 mins</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-zinc-500">
                          <Users size={14} className="text-zinc-400" />
                          <span>3 interviewers</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Insights/Feedback */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-surface-secondary rounded-card p-4">
              <h3 className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest mb-4">Pending Feedback</h3>
              <div className="space-y-4">
                {[
                  { name: "Marcus Miller", role: "EM role", due: "2d overdue", initial: "MM" },
                  { name: "Elena Rodriguez", role: "Designer role", due: "4h left", initial: "ER" },
                ].map((p, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-white border border-border-default flex items-center justify-center text-[10px] font-bold">
                        {p.initial}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">{p.name}</span>
                        <span className="text-[10px] text-zinc-400">{p.role}</span>
                      </div>
                    </div>
                    <Badge variant={i === 0 ? "signal-red" : "signal-amber"} className="text-[8px] py-0">{p.due}</Badge>
                  </div>
                ))}
              </div>
              <Button size="sm" variant="outline" className="w-full mt-4 text-[11px] h-8">Send all nudges</Button>
            </div>
            
            <div className="bg-surface-primary border border-border-default rounded-card p-4">
              <h3 className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest mb-4">Availability Heatmap</h3>
              <div className="grid grid-cols-5 gap-1.5">
                {Array.from({ length: 25 }).map((_, i) => (
                  <div 
                    key={i} 
                    className={cn(
                      "h-4 rounded-[2px]",
                      i % 7 === 0 ? "bg-signal-teal-text/80" : 
                      i % 4 === 0 ? "bg-signal-teal-text/40" : "bg-zinc-100 dark:bg-zinc-800"
                    )} 
                  />
                ))}
              </div>
              <p className="text-[10px] text-zinc-400 mt-3 text-center italic">Best slots: Wed 10AM, Thu 2PM</p>
            </div>
          </div>
        </div>
      </div>
    </ShellLayout>
  );
}

import { Users } from "lucide-react";
