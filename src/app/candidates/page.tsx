"use client";

import * as React from "react";
import { ShellLayout } from "@/components/layout/ShellLayout";
import { MOCK_CANDIDATES } from "@/lib/mockData";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { Search, Bookmark, ChevronRight, Filter } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CandidatesPage() {
  const [shortlistedOnly, setShortlistedOnly] = React.useState(false);

  return (
    <ShellLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <h2 className="font-sans text-2xl font-bold text-zinc-900 dark:text-zinc-100">Candidates</h2>
            <Badge className="bg-zinc-100 dark:bg-zinc-800 border-none font-bold text-zinc-600">42</Badge>
          </div>
          <Button size="sm" variant="outline" className="gap-2">
            <Bookmark size={16} />
            <span>Pinned shortlist: 5</span>
          </Button>
        </div>

        {/* Filter Panel */}
        <div className="flex flex-wrap items-center gap-4 border-b border-border-default pb-6 mb-6">
          <div className="relative w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={14} />
            <input
              type="text"
              placeholder="Search by name, skill, company..."
              className="w-full bg-surface-secondary border border-border-default rounded-badge py-1.5 pl-9 pr-4 text-xs font-sans focus:outline-none focus:border-signal-teal-border"
            />
          </div>
          
          <div className="flex items-center gap-2">
            <Chip variant="active">Stage: All</Chip>
            <Chip>Match: &gt;80%</Chip>
            <Chip>Engagement: Active</Chip>
            <Button variant="ghost" size="sm" className="h-8 text-[11px] gap-2">
              <Filter size={12} />
              More filters
            </Button>
          </div>
        </div>

        {/* Candidate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {MOCK_CANDIDATES.map((candidate) => (
            <div 
              key={candidate.id}
              className="bg-surface-primary border border-border-default rounded-card p-4 hover:border-zinc-300 transition-all cursor-pointer group"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <Avatar initials={candidate.avatarInitials} momentum={candidate.momentumLabel} />
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">{candidate.name}</span>
                    <span className="text-[10px] text-zinc-500 uppercase font-semibold">Matched for 2 roles</span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="font-mono text-lg font-bold text-signal-teal-text">{candidate.matchScore}%</span>
                  <span className="text-[9px] text-zinc-400 font-bold uppercase tracking-tighter">AI Match</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-4">
                {candidate.parsedResume.skills.slice(0, 4).map((skill, i) => (
                  <Badge 
                    key={i} 
                    variant={skill.matched ? "signal-teal" : "neutral"} 
                    className="text-[9px] px-1.5 py-0"
                  >
                    {skill.name}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between mt-5 pt-3 border-t border-zinc-100 dark:border-zinc-800">
                <div className="flex flex-col">
                  <span className="text-[10px] text-zinc-400">Current status</span>
                  <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 capitalize">{candidate.currentStage}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 text-zinc-400 hover:text-zinc-900 transition-colors">
                    <Bookmark size={16} />
                  </button>
                  <Button variant="outline" size="sm" className="h-8 text-[11px] gap-1 pr-1">
                    View profile
                    <ChevronRight size={14} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ShellLayout>
  );
}
