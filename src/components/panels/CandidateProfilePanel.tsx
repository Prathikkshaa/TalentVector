"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Linkedin, FileText, Share2, Check, AlertCircle } from "lucide-react";
import { Candidate } from "@/types";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface CandidateProfilePanelProps {
  candidate: Candidate | null;
  onClose: () => void;
}

export function CandidateProfilePanel({ candidate, onClose }: CandidateProfilePanelProps) {
  if (!candidate) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-[2px] pointer-events-auto"
      />

      {/* Panel */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className="absolute right-0 top-0 bottom-0 w-full max-w-[480px] bg-white dark:bg-zinc-950 border-l border-border-default shadow-2xl flex flex-col pointer-events-auto"
      >
        {/* Header */}
        <div className="h-16 px-4 flex items-center justify-between border-b border-border-default sticky top-0 bg-white dark:bg-zinc-950 z-10">
          <div className="flex items-center gap-3">
            <Avatar initials={candidate.avatarInitials} size="md" momentum={candidate.momentumLabel} />
            <div className="flex flex-col">
              <span className="text-base font-bold text-zinc-900 dark:text-zinc-100 leading-none">
                {candidate.name}
              </span>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="signal-blue" className="text-[9px] py-0">{candidate.currentStage}</Badge>
                <span className="text-[10px] font-mono font-bold text-signal-teal-text">{candidate.matchScore}% MATCH</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button className="p-2 hover:bg-surface-secondary rounded-full text-zinc-400 transition-colors">
              <Linkedin size={18} />
            </button>
            <button className="p-2 hover:bg-surface-secondary rounded-full text-zinc-400 transition-colors">
              <FileText size={18} />
            </button>
            <button className="p-2 hover:bg-surface-secondary rounded-full text-zinc-400 transition-colors">
              <Share2 size={18} />
            </button>
            <div className="w-px h-6 bg-zinc-200 dark:bg-zinc-800 mx-1" />
            <button 
              onClick={onClose}
              className="p-2 hover:bg-surface-secondary rounded-full text-zinc-400 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-8">
          
          {/* Section 1: AI Match Summary */}
          <div className="bg-signal-teal-bg/50 border border-signal-teal-border rounded-card p-4 space-y-3">
            <h3 className="text-xs font-bold text-signal-teal-text uppercase tracking-wider flex items-center gap-2">
              <Check size={14} />
              Why this candidate fits
            </h3>
            <ul className="space-y-2">
              <li className="text-sm text-zinc-700 dark:text-zinc-300 flex gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-signal-teal-text mt-2 shrink-0" />
                <span>Expert-level AWS architecture experience with strong leadership background.</span>
              </li>
              <li className="text-sm text-zinc-700 dark:text-zinc-300 flex gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-signal-teal-text mt-2 shrink-0" />
                <span>Proven track record of managing high-scale distributed systems.</span>
              </li>
            </ul>
            
            <div className="pt-2 border-t border-signal-teal-border/30">
              <h4 className="text-[11px] font-bold text-signal-amber-text uppercase tracking-wider flex items-center gap-2 mb-2">
                <AlertCircle size={12} />
                Gaps identified
              </h4>
              <li className="text-sm text-zinc-600 dark:text-zinc-400 flex gap-2 list-none">
                <div className="w-1.5 h-1.5 rounded-full bg-signal-amber-text mt-2 shrink-0" />
                <span>Slightly below target on Kubernetes security certification.</span>
              </li>
            </div>
          </div>

          {/* Section 2: Resume Highlights */}
          <div className="space-y-4">
            <h3 className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest">Resume Highlights</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-zinc-500 uppercase">Experience</span>
                <div className="space-y-1">
                  {candidate.parsedResume.experience.map((exp, i) => (
                    <div key={i} className="text-xs">
                      <span className="font-bold text-zinc-800 dark:text-zinc-200">{exp.title}</span>
                      <p className="text-zinc-500">{exp.company} · {exp.years}y</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-zinc-500 uppercase">Skills</span>
                <div className="flex flex-wrap gap-1.5">
                  {candidate.parsedResume.skills.map((skill, i) => (
                    <Badge 
                      key={i} 
                      variant={skill.matched ? "signal-teal" : "default"} 
                      className="text-[10px] px-1.5"
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Timeline */}
          <div className="space-y-4">
            <h3 className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest">Stage Timeline</h3>
            <div className="space-y-6 pl-2 relative">
              <div className="absolute left-3.5 top-2 bottom-2 w-px bg-zinc-200 dark:bg-zinc-800" />
              {candidate.stageHistory.map((history, i) => (
                <div key={i} className="relative pl-8">
                  <div className={cn(
                    "absolute left-0 top-1 w-3 h-3 rounded-full border-2 border-surface-primary bg-zinc-300",
                    history.stage === candidate.currentStage && "bg-signal-teal-text animate-pulse-subtle"
                  )} />
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-tight">
                      {history.stage}
                    </span>
                    <span className="text-[10px] text-zinc-400">
                      Moved on {dayjs(history.movedAt).format("MMM D")} · {history.daysInStage}d in stage
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="h-[72px] px-6 border-t border-border-default flex items-center gap-3 bg-white dark:bg-zinc-950">
          <Button className="flex-1 h-10">Move stage</Button>
          <Button variant="outline" className="flex-1 h-10">Schedule</Button>
          <Button variant="outline" size="icon" className="h-10 w-10">
            <Share2 size={18} />
          </Button>
          <Button variant="danger" size="sm" className="font-bold">Reject</Button>
        </div>
      </motion.div>
    </div>
  );
}

import dayjs from "dayjs";
