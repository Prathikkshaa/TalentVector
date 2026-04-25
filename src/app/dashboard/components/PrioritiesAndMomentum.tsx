"use client";

import * as React from "react";
import { useState } from "react";
import { SignalDot } from "@/components/ui/SignalDot";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

interface PriorityItem {
  id: string;
  label: string;
  context: string;
  level: "red" | "amber" | "teal" | "blue";
  done?: boolean;
}

const INITIAL_PRIORITIES: PriorityItem[] = [
  { id: "1", label: "Finalize contract for Alex Rivers", context: "expires 18h", level: "red" },
  { id: "2", label: "Review candidates for Staff Designer", context: "12 waiting", level: "amber" },
  { id: "3", label: "Schedule technical panel for Jordan Lee", context: "hot candidate", level: "teal" },
  { id: "4", label: "Follow up with David on role SLA", context: "7d stalled", level: "blue" },
];

export function PriorityList() {
  const [tasks, setTasks] = useState(INITIAL_PRIORITIES);

  const toggleTask = (id: string) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  return (
    <div className="flex flex-col">
      <h3 className="font-sans text-[11px] font-bold text-zinc-400 uppercase tracking-[0.06em] mb-3">
        Today&apos;s priorities
      </h3>
      
      <div className="space-y-1">
        <AnimatePresence initial={false}>
          {tasks.map((task) => (
            <motion.div
              layout
              key={task.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className={cn(
                "flex items-center justify-between group p-2 rounded-badge hover:bg-surface-secondary transition-colors cursor-pointer",
                task.done && "opacity-50"
              )}
              onClick={() => toggleTask(task.id)}
            >
              <div className="flex items-center gap-3">
                <SignalDot level={task.level} />
                <span className={cn(
                  "font-sans text-sm text-zinc-800 dark:text-zinc-200 transition-all",
                  task.done && "line-through text-zinc-400"
                )}>
                  {task.label}
                </span>
              </div>
              <Badge variant={`signal-${task.level}`} className="text-[10px] py-0">
                {task.context}
              </Badge>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <button className="flex items-center gap-2 mt-2 px-2 py-1.5 text-zinc-400 hover:text-zinc-600 transition-colors text-xs font-medium group">
        <Plus size={14} className="group-hover:rotate-90 transition-transform" />
        <span>Add reminder</span>
      </button>
    </div>
  );
}

export function MomentumCard() {
  return (
    <div className="bg-surface-primary border border-border-default rounded-card p-4 h-full">
      <h3 className="font-sans text-[11px] font-bold text-zinc-400 uppercase tracking-[0.06em] mb-3">
        Recruiter momentum
      </h3>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-sm text-zinc-600">Pipeline health</span>
          <Badge variant="signal-green">Stable</Badge>
        </div>

        <div className="space-y-1.5">
          <div className="flex justify-between items-center text-xs">
            <span className="text-zinc-500">Health score</span>
            <span className="font-mono font-bold text-signal-green-text">82%</span>
          </div>
          <div className="w-full h-1 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
            <div className="h-full bg-signal-green-text w-[82%]" />
          </div>
        </div>

        <div className="grid grid-cols-1 divide-y divide-zinc-100 dark:divide-zinc-800">
          {[
            { label: "Roles closing this week", value: "2" },
            { label: "Roles at risk", value: "1", color: "text-signal-red-text" },
            { label: "Candidate response delays", value: "3", color: "text-signal-amber-text" },
            { label: "Priorities done today", value: "2 / 5" },
          ].map((row, i) => (
            <div key={i} className="flex justify-between items-center py-2 text-xs">
              <span className="text-zinc-500">{row.label}</span>
              <span className={cn("font-mono font-semibold", row.color)}>{row.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
