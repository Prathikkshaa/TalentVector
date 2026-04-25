import * as React from "react";
import { ShellLayout } from "@/components/layout/ShellLayout";
import { MOCK_ROLES } from "@/lib/mockData";
import { RoleCard } from "./components/RoleCard";
import { Button } from "@/components/ui/Button";
import { Plus, Info } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export default function RolesPage() {
  return (
    <ShellLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <h2 className="font-sans text-2xl font-bold text-zinc-900 dark:text-zinc-100">Roles</h2>
            <Badge className="bg-zinc-100 dark:bg-zinc-800 border-none font-bold text-zinc-600">6</Badge>
          </div>
          <Button size="sm" className="gap-2">
            <Plus size={16} />
            <span>Add role</span>
          </Button>
        </div>

        {/* Filter Strip */}
        <div className="flex items-center gap-6 border-b border-border-default mb-6">
          {["All", "At risk", "On track", "Closing soon"].map((tab, i) => (
            <button
              key={tab}
              className={cn(
                "pb-3 text-sm font-medium transition-all relative",
                i === 0 ? "text-signal-teal-text" : "text-zinc-400 hover:text-zinc-600"
              )}
            >
              {tab}
              {i === 0 && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-signal-teal-text rounded-full" />
              )}
            </button>
          ))}
          <div className="ml-auto flex items-center gap-1.5 text-xs text-zinc-400 pb-3">
            <span>Sorted by urgency</span>
            <Info size={12} className="cursor-help" />
          </div>
        </div>

        <div className="space-y-3">
          {MOCK_ROLES.map((role) => (
            <RoleCard key={role.id} role={role} />
          ))}
        </div>
      </div>
    </ShellLayout>
  );
}

// Need to import cn
import { cn } from "@/lib/utils";
