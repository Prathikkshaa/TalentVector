"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Briefcase, Users, Calendar, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh] pointer-events-none">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setOpen(false)}
        className="absolute inset-0 bg-zinc-950/40 backdrop-blur-sm pointer-events-auto"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -20 }}
        className="relative w-full max-w-[600px] bg-white dark:bg-zinc-900 border border-border-default rounded-modal shadow-2xl overflow-hidden pointer-events-auto"
      >
        <div className="flex items-center px-4 py-3 border-b border-border-default">
          <Search size={20} className="text-zinc-400 mr-3" />
          <input
            autoFocus
            type="text"
            placeholder="Search roles, candidates, or actions..."
            className="flex-1 bg-transparent border-none focus:outline-none text-zinc-900 dark:text-zinc-100 font-sans text-base"
          />
          <kbd className="text-[10px] bg-zinc-100 dark:bg-zinc-800 border border-border-default rounded px-1.5 py-0.5 text-zinc-400 font-mono">ESC</kbd>
        </div>

        <div className="max-h-[400px] overflow-y-auto p-2">
          {/* Section: Roles */}
          <div className="px-3 py-2 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Roles</div>
          {[
            { title: "Senior Cloud Architect", sub: "Infrastructure · 12 candidates" },
            { title: "Staff Product Designer", sub: "Product · 4 candidates" },
          ].map((role, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-card hover:bg-surface-secondary cursor-pointer group transition-colors">
              <div className="p-2 bg-signal-blue-bg rounded-badge">
                <Briefcase size={16} className="text-signal-blue-text" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">{role.title}</span>
                <span className="text-[10px] text-zinc-400">{role.sub}</span>
              </div>
              <ArrowRight size={14} className="ml-auto text-zinc-300 opacity-0 group-hover:opacity-100 transition-all" />
            </div>
          ))}

          {/* Section: Actions */}
          <div className="px-3 py-2 text-[10px] font-bold text-zinc-400 uppercase tracking-widest mt-4">Quick Actions</div>
          {[
            { title: "Add new role", icon: Briefcase },
            { title: "Schedule interview", icon: Calendar },
            { title: "Review hot candidates", icon: Users },
          ].map((action, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-card hover:bg-surface-secondary cursor-pointer group transition-colors">
              <div className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-badge">
                <action.icon size={16} className="text-zinc-500" />
              </div>
              <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">{action.title}</span>
              <kbd className="ml-auto text-[10px] text-zinc-300 font-mono">ENTER</kbd>
            </div>
          ))}
        </div>
        
        <div className="px-4 py-2 bg-surface-secondary border-t border-border-default flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-[10px] text-zinc-400">
            <kbd className="bg-white dark:bg-zinc-800 border border-border-default rounded px-1">↑↓</kbd>
            <span>to navigate</span>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] text-zinc-400">
            <kbd className="bg-white dark:bg-zinc-800 border border-border-default rounded px-1">↵</kbd>
            <span>to select</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
