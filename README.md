# LearnLoop 🚀 Next-Gen Engineering Learning Platform

![LearnLoop Platform](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80)

**LearnLoop** is an enterprise-grade full-stack platform built for software developers, cloud architects, and engineering students. Rather than passive video watching, LearnLoop provides a continuous loop of **interactive learning**, **observable progress tracking**, **high-density study materials**, and **incentive-based timed assessments** where learners earn verifiable rewards and tokens.

---

## 🌟 Core Modules & Architecture

LearnLoop is built as a modern React single-page architecture powered by Tailwind CSS, Vite, and an Express API backend.

```
LearnLoop/
├── .devcontainer/                # GitHub Codespaces & VS Code DevContainer config
│   └── devcontainer.json
├── frontend/                     # React 18 + Vite + Tailwind CSS Single-Page App
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── public/
│   │   └── favicon.svg
│   └── src/
│       ├── main.jsx
│       ├── App.jsx
│       ├── index.css
│       ├── context/
│       │   └── AppContext.jsx   # Global reactive state for progress, tokens & quizzes
│       ├── data/
│       │   └── mockData.js      # Rich datasets for curricula, questions & rewards
│       ├── components/
│       │   ├── layout/
│       │   │   ├── Navbar.jsx    # Sticky navigation, streak tracker & coin wallet
│       │   │   ├── Footer.jsx    # Enterprise platform footer
│       │   │   └── Layout.jsx    # Responsive wrapper
│       │   └── common/
│       │       ├── Badge.jsx
│       │       ├── ProgressBar.jsx
│       │       ├── Modal.jsx
│       │       └── ToastContainer.jsx
│       └── pages/
│           ├── Home.jsx             # User dashboard & active track resume
│           ├── Courses.jsx          # Course catalog, search & category filters
│           ├── CourseDetails.jsx    # Interactive lesson player & syllabus accordion
│           ├── LearningProgress.jsx # Telemetry, weekly chart & skill matrix
│           ├── StudyMaterial.jsx    # In-app cheatsheet reader & PDF downloads
│           ├── IncentiveTest.jsx    # Gamified challenges, leaderboard & rewards store
│           └── TestArena.jsx        # Timed testing engine with explanations
├── backend/                      # Node.js + Express REST API Starter
│   ├── package.json
│   ├── server.js
│   └── .env.example
├── .gitignore
└── README.md
```

---

## 📌 Section Walkthrough

### 1. 🎓 Courses (`/src/pages/Courses.jsx` & `CourseDetails.jsx`)
- Multi-faceted filtering by domain (Full Stack, AI & ML, Cloud & DevOps, Computer Science, Security) and difficulty level.
- Course syllabus accordion with real-time module lesson completion tracking.
- Interactive lesson player simulation with instant progress bar calculation and XP updates.

### 2. 📈 Learning Progress (`/src/pages/LearningProgress.jsx`)
- **Cognitive Metrics**: Total hours learned, active daily streak, XP balance, global ranking.
- **Weekly Learning Velocity**: Interactive 7-day bar chart showing study hours distribution.
- **Skill Competencies**: Real-time mastery progress bars for React, Node, System Architecture, TypeScript, and SQL.
- **Milestone Timeline**: Unlocked achievement badges and track progress summaries.

### 3. 📚 Study Material (`/src/pages/StudyMaterial.jsx`)
- Curated repository of architectural cheat sheets, system blueprints, and PDF handouts.
- Filter by topic or toggle "Saved Bookmarks Only".
- **In-App Document Reader Modal**: Built-in modal viewer to read markdown notes and copy code snippets directly without leaving the app.

### 4. 🏆 Incentive Test & Test Arena (`/src/pages/IncentiveTest.jsx` & `TestArena.jsx`)
- **Gamified Incentives**: Earn **LoopCoins** and **XP** for passing timed quizzes.
- **Test Arena**:
  - Live countdown timer with warning state.
  - Question status navigator (Answered, Flagged, Active).
  - Immediate score report with pass/fail evaluation and breakdown.
  - In-depth architectural explanations for every question.
- **Redemption Store**: Spend LoopCoins on 1-on-1 Staff Engineer mentorship, verified certificates, and exclusive cheatsheets.
- **Global Leaderboard**: Competitive ranking with active streak tracking.

---

## ⚡ Quickstart Guide

### Option 1: GitHub Codespaces (Zero Setup)
This repository is configured with `.devcontainer/devcontainer.json`.
1. Open this repository on GitHub.
2. Click **Code** > **Codespaces** > **Create codespace on main**.
3. All dependencies and ports (`5173` for Frontend, `5000` for Backend) forward automatically.

### Option 2: Running Locally

#### 1. Prerequisites
- Node.js (v18 or v20+)
- npm or yarn or pnpm

#### 2. Start the Frontend
```bash
cd frontend
npm install
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

#### 3. Start the Backend API (Optional)
```bash
cd backend
npm install
npm run dev
```
The API starts on [http://localhost:5000](http://localhost:5000).

---

## 🛠️ Tech Stack
- **Frontend**: React 18, Tailwind CSS, Vite, Lucide React Icons
- **State Management**: React Context API (`AppContext.jsx`) with local persistence
- **Backend Scaffolding**: Express.js, CORS, Dotenv
- **DevOps**: DevContainers / GitHub Codespaces

