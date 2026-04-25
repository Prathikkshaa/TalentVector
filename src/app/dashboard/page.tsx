import * as React from "react";
import { WelcomeBanner } from "./components/WelcomeBanner";
import { SnapshotStrip } from "./components/SnapshotStrip";
import { PriorityList, MomentumCard } from "./components/PrioritiesAndMomentum";
import { MetricsBlock } from "./components/MetricsBlock";
import { PrioritySignalFeed } from "./components/PrioritySignalFeed";
import { ShellLayout } from "@/components/layout/ShellLayout";

export default function DashboardPage() {
  return (
    <ShellLayout>
      <div className="flex flex-col">
        <WelcomeBanner recruiterName="Jane" />
        
        <div className="px-6">
          <SnapshotStrip />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
            <div className="lg:col-span-8">
              <PriorityList />
            </div>
            <div className="lg:col-span-4">
              <MomentumCard />
            </div>
          </div>

          <MetricsBlock />
          
          <PrioritySignalFeed />
        </div>
      </div>
    </ShellLayout>
  );
}
