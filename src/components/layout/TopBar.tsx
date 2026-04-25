"use client";

import * as React from "react";
import { Search, Bell } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function TopBar() {
  return (
    <header className="h-[52px] border-b border-border-default bg-surface-primary flex items-center justify-between px-6 sticky top-0 z-30">
      <div className="flex items-center gap-8 flex-1">
        <h1 className="font-syne text-lg font-medium text-zinc-900 dark:text-zinc-100 tracking-tight">
          TalentVector
        </h1>
        
        {/* Global Search */}
        <div className="relative max-w-md w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
          <input
            type="text"
            placeholder="Search roles, candidates, skills..."
            className="w-full bg-surface-secondary border border-border-default rounded-badge py-1.5 pl-10 pr-4 text-sm font-sans focus:outline-none focus:border-signal-teal-border transition-colors placeholder:text-zinc-400"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
            <kbd className="text-[10px] bg-white dark:bg-zinc-800 border border-border-default rounded px-1 text-zinc-400">⌘</kbd>
            <kbd className="text-[10px] bg-white dark:bg-zinc-800 border border-border-default rounded px-1 text-zinc-400">K</kbd>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-surface-secondary rounded-badge transition-colors">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-4 h-4 bg-signal-red-text text-white text-[10px] flex items-center justify-center rounded-full font-bold border-2 border-surface-primary">
            3
          </span>
        </button>
        <div className="w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-800 border border-border-default overflow-hidden">
          {/* Avatar image would go here */}
          <div className="w-full h-full flex items-center justify-center text-xs font-bold text-zinc-500">
            JD
          </div>
        </div>
      </div>
    </header>
  );
}
