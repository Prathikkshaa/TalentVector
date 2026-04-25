import * as React from "react";
import { ShellLayout } from "@/components/layout/ShellLayout";
import { MOCK_ROLES, MOCK_CANDIDATES } from "@/lib/mockData";
import { RoleDetailHeader } from "../components/RoleDetailHeader";
import { CandidateStack } from "../components/CandidateStack";
import { RoleHealthPanel } from "../components/RoleHealthPanel";
import { redirect } from "next/navigation";

export default function RoleDetailPage({ params }: { params: { roleId: string } }) {
  const role = MOCK_ROLES.find((r) => r.id === params.roleId);
  const candidates = MOCK_CANDIDATES.filter((c) => c.roleId === params.roleId);

  if (!role) {
    redirect("/roles");
  }

  return (
    <ShellLayout>
      <div className="flex flex-col min-h-full">
        <RoleDetailHeader role={role} />
        
        <div className="p-6 max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left: Candidate stack */}
            <div className="lg:col-span-8">
              <CandidateStack candidates={candidates} />
              
              {/* Optional: Add more mock candidates or empty state if none */}
              {candidates.length === 0 && (
                <div className="flex flex-col items-center justify-center py-20 bg-surface-secondary border border-dashed border-border-default rounded-card">
                  <span className="text-zinc-400 text-sm">No candidates in pipeline for this role.</span>
                </div>
              )}
            </div>

            {/* Right: Role health and actions */}
            <div className="lg:col-span-4">
              <RoleHealthPanel role={role} />
            </div>

          </div>
        </div>
      </div>
    </ShellLayout>
  );
}
