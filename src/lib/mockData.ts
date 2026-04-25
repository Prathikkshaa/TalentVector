import { Role, Candidate, Interview, Offer, PrioritySignal, Interviewer } from "@/types";
import dayjs from "dayjs";

const now = dayjs();

export const MOCK_INTERVIEWERS: Interviewer[] = [
  { id: "i1", name: "Sarah Chen", pendingFeedback: 0, avgResponseTime: 1.2, lastFeedbackAt: now.subtract(1, "day").toISOString() },
  { id: "i2", name: "Marcus Miller", pendingFeedback: 2, avgResponseTime: 3.5, lastFeedbackAt: now.subtract(4, "days").toISOString() },
  { id: "i3", name: "Elena Rodriguez", pendingFeedback: 1, avgResponseTime: 2.1, lastFeedbackAt: now.subtract(2, "days").toISOString() },
];

export const MOCK_ROLES: Role[] = [
  {
    id: "r1",
    title: "Senior Cloud Architect",
    department: "Infrastructure",
    location: "Remote / New York",
    hiringManager: { id: "hm1", name: "David Kross", lastActive: now.subtract(1, "hour").toISOString() },
    status: "active",
    daysOpen: 24,
    slaTarget: 30,
    healthScore: 82,
    pipelineVelocity: 4.5,
    bottleneckStage: "interview",
    closureForecast: 12,
    candidateCount: { total: 42, highMatch: 8, interviewReady: 5, shortlisted: 3, offerStage: 1 },
    offerReadiness: { score: 75, probability: 80, explanation: "Top candidate in final interviews showing high engagement." },
    createdAt: now.subtract(24, "days").toISOString(),
    updatedAt: now.subtract(1, "hour").toISOString(),
  },
  {
    id: "r2",
    title: "Staff Product Designer",
    department: "Product",
    location: "San Francisco, CA",
    hiringManager: { id: "hm2", name: "Anita Varma", lastActive: now.subtract(3, "days").toISOString() },
    status: "active",
    daysOpen: 45,
    slaTarget: 35,
    healthScore: 42,
    pipelineVelocity: 1.2,
    bottleneckStage: "screened",
    closureForecast: 25,
    candidateCount: { total: 18, highMatch: 2, interviewReady: 1, shortlisted: 1, offerStage: 0 },
    offerReadiness: { score: 20, probability: 10, explanation: "Low pipeline volume and slow stakeholder feedback." },
    createdAt: now.subtract(45, "days").toISOString(),
    updatedAt: now.subtract(1, "day").toISOString(),
  },
  {
    id: "r3",
    title: "Engineering Manager - FinTech",
    department: "Engineering",
    location: "London, UK",
    hiringManager: { id: "hm3", name: "James Wilson", lastActive: now.subtract(1, "day").toISOString() },
    status: "active",
    daysOpen: 12,
    slaTarget: 45,
    healthScore: 95,
    pipelineVelocity: 6.8,
    bottleneckStage: null,
    closureForecast: 18,
    candidateCount: { total: 65, highMatch: 12, interviewReady: 8, shortlisted: 5, offerStage: 2 },
    offerReadiness: { score: 90, probability: 85, explanation: "High velocity and strong alignment on two lead candidates." },
    createdAt: now.subtract(12, "days").toISOString(),
    updatedAt: now.subtract(2, "hours").toISOString(),
  }
];

export const MOCK_SIGNALS: PrioritySignal[] = [
  {
    id: "s1",
    type: "offer_risk",
    roleId: "r1",
    candidateId: "c1",
    title: "Offer Expiring: Alex Rivers",
    description: "Offer for Senior Cloud Architect expires in 18 hours. Candidate last seen 3 days ago.",
    urgencyTimer: "18h left",
    urgencyLevel: "red",
    ctaLabel: "Re-engage candidate",
    ctaTarget: "/offers/r1-c1",
    impactScore: 95,
    createdAt: now.subtract(1, "day").toISOString(),
  },
  {
    id: "s2",
    type: "stakeholder_block",
    roleId: "r2",
    candidateId: null,
    title: "HM Inactive: Anita Varma",
    description: "No review activity on Staff Product Designer for 3 days. 4 candidates waiting.",
    urgencyTimer: "3d delay",
    urgencyLevel: "amber",
    ctaLabel: "Send nudge",
    ctaTarget: "/roles/r2",
    impactScore: 70,
    createdAt: now.subtract(2, "days").toISOString(),
  },
  {
    id: "s3",
    type: "hot_candidate",
    roleId: "r3",
    candidateId: "c3",
    title: "Hot Candidate: Jordan Lee",
    description: "98% match for EM role. Completed final interview with perfect scores.",
    urgencyTimer: "Ready",
    urgencyLevel: "teal",
    ctaLabel: "Review now",
    ctaTarget: "/roles/r3/candidates/c3",
    impactScore: 90,
    createdAt: now.subtract(4, "hours").toISOString(),
  }
];

export const MOCK_CANDIDATES: Candidate[] = [
  {
    id: "c1",
    name: "Alex Rivers",
    email: "alex@rivers.io",
    avatarInitials: "AR",
    linkedInUrl: "https://linkedin.com/in/alexrivers",
    resumeUrl: "#",
    currentStage: "offer",
    matchScore: 92,
    fitSummary: "Expert-level AWS architecture experience with strong leadership background.",
    gapSummary: "Slightly below target on Kubernetes security certification.",
    daysInCurrentStage: 4,
    momentumLabel: "cooling",
    momentumScore: 45,
    offerProbability: 60,
    dropRisk: 35,
    engagementLastSeen: now.subtract(3, "days").toISOString(),
    parsedResume: {
      experience: [
        { title: "Lead Cloud Architect", company: "DataSync", years: "4" },
        { title: "Senior DevOps Engineer", company: "CloudOps", years: "3" }
      ],
      skills: [
        { name: "AWS", matched: true },
        { name: "Terraform", matched: true },
        { name: "Kubernetes", matched: false }
      ],
      education: [{ degree: "B.S. Computer Science", institution: "MIT", year: "2015" }],
      projects: [{ name: "Global Migration", description: "Led migration of 400+ microservices to EKS." }]
    },
    stageHistory: [
      { stage: "applied", movedAt: now.subtract(20, "days").toISOString(), daysInStage: 2 },
      { stage: "screened", movedAt: now.subtract(18, "days").toISOString(), daysInStage: 3 },
      { stage: "interview", movedAt: now.subtract(15, "days").toISOString(), daysInStage: 11 }
    ],
    activityLog: [{ recruiterInitials: "JD", action: "Sent offer", timestamp: now.subtract(4, "days").toISOString() }],
    interviews: [],
    shortlisted: true,
    appliedAt: now.subtract(20, "days").toISOString(),
    roleId: "r1"
  },
  {
    id: "c2",
    name: "Jordan Lee",
    email: "jordan@lee.dev",
    avatarInitials: "JL",
    linkedInUrl: "https://linkedin.com/in/jordanlee",
    resumeUrl: "#",
    currentStage: "interview",
    matchScore: 98,
    fitSummary: "Perfect cultural fit with deep technical expertise in high-scale FinTech systems.",
    gapSummary: "None identified.",
    daysInCurrentStage: 1,
    momentumLabel: "hot",
    momentumScore: 95,
    offerProbability: 90,
    dropRisk: 5,
    engagementLastSeen: now.subtract(2, "hours").toISOString(),
    parsedResume: {
      experience: [
        { title: "Senior Engineering Manager", company: "FinPay", years: "5" }
      ],
      skills: [
        { name: "Node.js", matched: true },
        { name: "Go", matched: true },
        { name: "Distributed Systems", matched: true }
      ],
      education: [{ degree: "M.S. Software Engineering", institution: "Stanford", year: "2012" }],
      projects: [{ name: "Payment Core", description: "Rewrote core payment engine handling $1B+ GTV." }]
    },
    stageHistory: [
      { stage: "applied", movedAt: now.subtract(5, "days").toISOString(), daysInStage: 1 },
      { stage: "screened", movedAt: now.subtract(4, "days").toISOString(), daysInStage: 1 }
    ],
    activityLog: [{ recruiterInitials: "JD", action: "Moved to Interview", timestamp: now.subtract(1, "day").toISOString() }],
    interviews: [],
    shortlisted: true,
    appliedAt: now.subtract(5, "days").toISOString(),
    roleId: "r3"
  }
];
