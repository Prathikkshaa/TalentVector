"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  House, 
  Briefcase, 
  Users, 
  Calendar, 
  FileCheck, 
  BarChart3, 
  Settings,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { icon: House, label: "Home", href: "/dashboard" },
  { icon: Briefcase, label: "Roles", href: "/roles" },
  { icon: Users, label: "Candidates", href: "/candidates" },
  { icon: Calendar, label: "Interviews", href: "/interviews" },
  { icon: FileCheck, label: "Offers", href: "/offers" },
  { icon: BarChart3, label: "Insights", href: "/insights" },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = React.useState(false);
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "flex flex-col h-screen bg-surface-primary border-r border-border-default transition-all duration-300 z-40",
        collapsed ? "w-[56px]" : "w-[220px]"
      )}
    >
      {/* Collapse Toggle */}
      <div className="flex justify-end p-2">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 hover:bg-surface-secondary rounded-badge text-zinc-400 transition-colors"
        >
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 px-3 space-y-1">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-2 py-2 rounded-badge transition-all group relative",
                isActive 
                  ? "bg-surface-secondary text-signal-teal-text" 
                  : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-surface-secondary"
              )}
            >
              {isActive && (
                <div className="absolute left-0 top-1.5 bottom-1.5 w-0.5 bg-signal-teal-text rounded-full" />
              )}
              <item.icon size={20} className={cn("shrink-0", isActive && "text-signal-teal-text")} />
              {!collapsed && <span className="font-sans text-sm font-medium">{item.label}</span>}
              {collapsed && (
                <div className="absolute left-full ml-2 px-2 py-1 bg-zinc-900 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap">
                  {item.label}
                </div>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Section */}
      <div className="p-3 border-t border-border-default space-y-2">
        <Link
          href="/settings"
          className="flex items-center gap-3 px-2 py-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-surface-secondary rounded-badge"
        >
          <Settings size={20} />
          {!collapsed && <span className="font-sans text-sm font-medium">Settings</span>}
        </Link>
        <div className="flex items-center gap-3 px-2 py-2">
          <div className="w-6 h-6 rounded-full bg-signal-blue-bg border border-signal-blue-border flex items-center justify-center text-[10px] font-bold text-signal-blue-text">
            JD
          </div>
          {!collapsed && (
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">Jane Doe</span>
              <span className="text-[10px] text-zinc-400">Lead Recruiter</span>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
