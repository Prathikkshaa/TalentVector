import * as React from "react";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { AnimatePresence } from "framer-motion";

export function ShellLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden bg-surface-primary">
      <Sidebar />
      <div className="flex flex-col flex-1 min-w-0">
        <TopBar />
        <main className="flex-1 overflow-y-auto bg-white dark:bg-zinc-950">
          {children}
        </main>
      </div>
      <AnimatePresence>
        <CommandPalette />
      </AnimatePresence>
    </div>
  );
}
