export type Stage = "applied" | "screened" | "interview" | "offer" | "closed";

export interface HiringManager {
  id: string;
  name: string;
  avatarUrl?: string;
  lastActive: string; // ISO date
}

export interface CandidateCounts {
  total: number;
  highMatch: number;
  interviewReady: number;
  shortlisted: number;
  offerStage: number;
}

export interface OfferReadiness {
  score: number; // 0-100
  probability: number; // 0-100
  explanation: string;
}

export interface Role {
  id: string;
  title: string;
  department: string;
  location: string;
  hiringManager: HiringManager;
  status: "active" | "paused" | "closed";
  daysOpen: number;
  slaTarget: number;
  healthScore: number;
  pipelineVelocity: number;
  bottleneckStage: Stage | null;
  closureForecast: number; // days remaining
  candidateCount: CandidateCounts;
  offerReadiness: OfferReadiness;
  createdAt: string;
  updatedAt: string;
}

export interface ParsedResume {
  experience: { title: string; company: string; years: string }[];
  skills: { name: string; matched: boolean }[];
  education: { degree: string; institution: string; year: string }[];
  projects: { name: string; description: string }[];
}

export interface StageHistory {
  stage: Stage;
  movedAt: string;
  daysInStage: number;
}

export interface ActivityEntry {
  recruiterInitials: string;
  action: string;
  timestamp: string;
}

export interface Interviewer {
  id: string;
  name: string;
  avatarUrl?: string;
  pendingFeedback: number;
  avgResponseTime: number; // days
  lastFeedbackAt: string;
}

export interface Interview {
  id: string;
  candidateId: string;
  roleId: string;
  type: "phone" | "technical" | "panel" | "final";
  scheduledAt: string | null;
  duration: 30 | 45 | 60 | 90;
  interviewers: Interviewer[];
  feedbackStatus: "pending" | "submitted" | "overdue";
  feedbackSummary: string | null;
  status: "scheduled" | "completed" | "cancelled" | "pending_schedule";
}

export interface Candidate {
  id: string;
  name: string;
  email: string;
  avatarInitials: string;
  linkedInUrl: string | null;
  resumeUrl: string;
  currentStage: Stage;
  matchScore: number;
  fitSummary: string;
  gapSummary: string;
  daysInCurrentStage: number;
  momentumLabel: "hot" | "warm" | "cooling" | "cold";
  momentumScore: number;
  offerProbability: number | null;
  dropRisk: number | null;
  engagementLastSeen: string;
  parsedResume: ParsedResume;
  stageHistory: StageHistory[];
  activityLog: ActivityEntry[];
  interviews: Interview[];
  shortlisted: boolean;
  appliedAt: string;
  roleId: string;
}

export interface Offer {
  id: string;
  candidateId: string;
  roleId: string;
  sentAt: string;
  expiresAt: string;
  status: "pending" | "accepted" | "declined" | "withdrawn";
  acceptanceProbability: number;
  dropRisk: number;
  compDelta: number; // percentage vs expectation
  engagementFreshness: number; // days since last activity
  candidateLastSeen: string;
}

export interface PrioritySignal {
  id: string;
  type: "offer_risk" | "pipeline_stall" | "hot_candidate" | "stakeholder_block" | "feedback_delay";
  roleId: string | null;
  candidateId: string | null;
  title: string;
  description: string;
  urgencyTimer: string;
  urgencyLevel: "red" | "amber" | "teal" | "blue";
  ctaLabel: string;
  ctaTarget: string;
  impactScore: number;
  createdAt: string;
}
