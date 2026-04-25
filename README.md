# TalentVector ATS — Recruiter Command Center

TalentVector ATS is a high-density, AI-native recruiter workspace engineered for speed, urgency, and decision-making. Designed with an "industrial command center" aesthetic, it prioritizes actionable signals over passive data reporting. 

The system answers one core question on every screen: *"What should the recruiter do next?"*

---

##  Key Features

### 1. Decision-First Dashboard
- **Priority Signal Feed**: Instantly surface critical issues like expiring offers, stakeholder blocks, and hot candidates.
- **Momentum Tracking**: Monitor pipeline health, SLAs, and personal recruiter metrics in real time.
- **Snapshot Strip**: High-level counters for active roles, pending reviews, and upcoming interviews.

### 2. Role Workspaces
- **Three-Zone Role Cards**: View role identity, pipeline velocity, and bottleneck status at a glance.
- **Candidate Stack Ranking**: AI-sorted candidate views based on readiness and technical fit scores.
- **Stakeholder Analytics**: Track Hiring Manager and Interviewer responsiveness to identify process blocks.

### 3. Intelligence & Workflows
- **Candidate Slide-in Panels**: Deep dives without context switching. Features AI match summaries, gap analysis, and a full stage timeline.
- **Global Command Palette**: Lightning-fast navigation via `Cmd+K` (or `Ctrl+K`).
- **Interactive Timelines**: Daily interview schedules with integrated feedback accountability tools.
- **Offer Risk Analysis**: Track acceptance probabilities, drop-off risks, and contract lifecycles.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with a custom design token system (Dark Mode default).
- **Typography**: Syne (Headings), DM Sans (UI Labels), JetBrains Mono (Data/Metrics).
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (Subtle, purposeful transitions).
- **Icons**: [Lucide React](https://lucide.dev/)
- **Data Visualization**: [Recharts](https://recharts.org/)

---

##  Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Prathikkshaa/TalentVector.git
   cd TalentVector
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Access the application:**
   Open [http://localhost:3000](http://localhost:3000) in your browser. The app defaults to `/dashboard`.

---

## Design Philosophy

*"The system surfaces the signal. The recruiter makes the decision. The hire gets closed."*

- **Aesthetic**: Think Bloomberg Terminal precision meets modern SaaS polish. High information density with no wasted whitespace.
- **Color System**: Dark background (`zinc-950`), off-white text, and critical "Signal" accents:
  - 🔴 **Red**: Urgent, SLA breaches, offer risks.
  - 🟠 **Amber**: Warnings, stalled candidates, pending feedback.
  - 🟢 **Green**: Healthy pipelines, fast responses, accepted offers.
  - 🔵 **Blue**: Informational, scheduled interviews, standard workflow.
  - 🟢 **Teal**: Hot candidates, high AI matches, positive momentum.
- **Elevation**: No decorative shadows. Depth is achieved purely through background contrast and border emphasis.

---

##  License
This project is proprietary and confidential. All rights reserved.
