# LearnLoop 🚀 Next-Gen Engineering Learning Platform

[![Frontend Deployed on Vercel](https://img.shields.io/badge/Frontend-Vercel-black?style=for-the-badge&logo=vercel)](https://learn-loop-phi.vercel.app/)
[![Backend Deployed on Render](https://img.shields.io/badge/Backend-Render-46E3B7?style=for-the-badge&logo=render&logoColor=black)](https://learnloop-gb50.onrender.com/)
[![React 18](https://img.shields.io/badge/React_18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Node.js & Express](https://img.shields.io/badge/Node.js_&_Express-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://expressjs.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

![LearnLoop Platform](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80)

**LearnLoop** is an enterprise-grade full-stack platform built for software engineers, cloud architects, and tech learners. Rather than passive video consumption, LearnLoop provides a continuous, gamified loop of **interactive learning**, **observable progress tracking**, **high-density architectural cheatsheets**, and **incentive-based timed assessments** where learners earn verifiable rewards and tokens.

---

## 🌐 Live Production Links

* **Live Web App (Frontend)**: [https://learn-loop-phi.vercel.app/](https://learn-loop-phi.vercel.app/)
* **Live REST API (Backend)**: [https://learnloop-gb50.onrender.com/](https://learnloop-gb50.onrender.com/)
* **API Health Check**: [https://learnloop-gb50.onrender.com/api/health](https://learnloop-gb50.onrender.com/api/health)
* **GitHub Repository**: [https://github.com/virkharjot67-ops/LearnLoop](https://github.com/virkharjot67-ops/LearnLoop)

---

## 🌟 Core Modules & Architecture

LearnLoop is built as a decoupled full-stack architecture powered by a React 18 single-page application on Vercel and an Express REST API backend on Render.

```
LearnLoop/
├── .devcontainer/                # GitHub Codespaces & VS Code DevContainer config
│   └── devcontainer.json
├── frontend/                     # React 18 + Vite + Tailwind CSS SPA (Deployed on Vercel)
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── vercel.json              # Client-side SPA routing rules for Vercel
│   ├── .env.example             # Frontend environment variables template
│   ├── public/
│   │   └── favicon.svg
│   └── src/
│       ├── main.jsx
│       ├── App.jsx
│       ├── index.css
│       ├── context/
│       │   └── AppContext.jsx   # Global reactive state & live API synchronization
│       ├── services/
│       │   └── api.js           # REST API client with automatic fallback
│       ├── data/
│       │   └── mockData.js      # Rich datasets for curricula, questions & rewards
│       ├── components/
│       │   ├── layout/
│       │   │   ├── Navbar.jsx    # Sticky navigation, streak tracker, coin wallet & API status
│       │   │   ├── Footer.jsx    # Enterprise platform footer
│       │   │   └── Layout.jsx    # Responsive application wrapper
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
│           ├── StudyMaterial.jsx    # In-app cheatsheet reader & bookmarks
│           ├── IncentiveTest.jsx    # Gamified challenges, leaderboard & rewards store
│           └── TestArena.jsx        # Timed testing engine with live countdown & scoring
├── backend/                      # Node.js + Express REST API Engine (Deployed on Render)
│   ├── package.json
│   ├── server.js                # Express REST API routes & in-memory state engine
│   ├── .env.example             # Backend environment template
│   └── data/
│       └── initialData.js       # Curricula, user profiles & assessment datasets
├── .gitignore
└── README.md
```

---

## 📌 Section Walkthrough

### 1. 🎓 Courses & Interactive Syllabus
* **Multi-Domain Catalog**: Filter by Full Stack, AI & ML, Cloud & DevOps, Computer Science, and Security.
* **Syllabus Accordion**: Real-time module lesson completion tracking.
* **Interactive Player**: Simulates video/interactive lessons, calculates instant course progress percentage, and awards XP.

### 2. 📈 Learning Progress & Telemetry
* **Cognitive Metrics**: Total hours learned, active daily streak, XP balance, and global ranking.
* **Weekly Velocity Chart**: Visual distribution of study hours across Monday through Sunday.
* **Skill Mastery Bars**: Real-time mastery levels for React/Next.js, Node.js/Express, System Architecture, TypeScript, and SQL.

### 3. 📚 Study Material & Document Reader
* **Cheat Sheets & Blueprints**: Architectural summaries, Docker commands, SQL optimization, and design patterns.
* **Bookmarks**: Toggle saved bookmarks for quick offline access.
* **In-App Modal Reader**: View full markdown notes and code snippets without leaving the app.

### 4. 🏆 Incentive Test & Test Arena
* **Gamified Incentives**: Earn **LoopCoins** and **XP** for passing timed technical assessments.
* **Test Arena**:
  * Live countdown timer with automatic submission on expiry.
  * Question navigator (Answered, Flagged, Active).
  * Instant score reporting with pass/fail evaluation and architectural explanations.
* **Redemption Store**: Spend LoopCoins on 1-on-1 Staff Engineer mentorship, verified certificates, and cheat sheets.
* **Leaderboard**: Global ranking with active streak tracking.

---

## 🔌 REST API Endpoints Reference

The backend exposes the following RESTful endpoints:

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/` | API status and directory index |
| `GET` | `/api/health` | Service health status and timestamp |
| `GET` | `/api/bootstrap` | Full single-trip application state sync |
| `GET` | `/api/user/profile` | Current user profile, rank, XP, and streak |
| `GET` | `/api/courses` | List all available engineering courses |
| `POST` | `/api/courses/:id/enroll` | Enroll current user into a course |
| `POST` | `/api/courses/:id/lessons/:lessonId/toggle` | Mark lesson complete/incomplete (+25 XP) |
| `GET` | `/api/study-materials` | Curated cheatsheets and architectural blueprints |
| `POST` | `/api/study-materials/:id/bookmark` | Toggle bookmarked state of study materials |
| `GET` | `/api/incentive-tests` | Assessment challenges & completed test history |
| `POST` | `/api/tests/:id/submit` | Evaluate test submission & award LoopCoins/XP |
| `GET` | `/api/rewards` | Rewards store inventory and redeemed history |
| `POST` | `/api/rewards/:id/redeem` | Redeem rewards using LoopCoins balance |
| `GET` | `/api/leaderboard` | Top engineers global ranking |

---

## ⚡ Quickstart Guide (Local Development)

### Prerequisites
* **Node.js** (v18 or v20+)
* **npm** (v10+)
* **Git**

### 1. Clone the Repository
```bash
git clone https://github.com/virkharjot67-ops/LearnLoop.git
cd LearnLoop
```

### 2. Run the Backend API
```bash
cd backend
npm install
npm run dev
```
*Backend runs on: [http://localhost:5000](http://localhost:5000)*

### 3. Run the Frontend UI
In a separate terminal:
```bash
cd frontend
npm install
npm run dev
```
*Frontend runs on: [http://localhost:5173](http://localhost:5173)*

---

## 🚀 Cloud Deployment Workflow

### Deploy Backend on Render
1. Create a new **Web Service** on [Render](https://dashboard.render.com).
2. Connect your GitHub repository: `virkharjot67-ops/LearnLoop`.
3. Set **Root Directory** to `backend`.
4. Set **Build Command** to `npm install`.
5. Set **Start Command** to `node server.js`.
6. Add Environment Variable: `NODE_ENV=production`.

### Deploy Frontend on Vercel
1. Create a new project on [Vercel](https://vercel.com) and import `virkharjot67-ops/LearnLoop`.
2. Set **Root Directory** to `frontend`.
3. Framework Preset: **Vite**.
4. Add Environment Variable:
   * **`VITE_API_URL`**: `https://learnloop-gb50.onrender.com/api`
5. Click **Deploy**.

---

## ⚙️ Environment Variables

### Frontend (`frontend/.env`)
```env
VITE_API_URL=http://localhost:5000/api
```

### Backend (`backend/.env`)
```env
PORT=5000
NODE_ENV=development
JWT_SECRET=learnloop_super_secret_jwt_key_2026
FRONTEND_URL=http://localhost:5173
```

---

## 🛠️ Tech Stack

* **Frontend**: React 18, Vite, Tailwind CSS, Lucide React Icons
* **State Management**: React Context API (`AppContext.jsx`) with live REST API synchronization
* **Backend**: Node.js, Express, CORS, Dotenv
* **Cloud & DevOps**: Vercel (Frontend), Render (Backend), GitHub Actions / DevContainers
* **Styling**: Tailwind CSS dark-mode glassmorphic theme

---

## 👤 Author & Maintainer

* **Maintainer**: Harjot Virk ([@virkharjot67-ops](https://github.com/virkharjot67-ops))
* **Email**: [virkharjot67@gmail.com](mailto:virkharjot67@gmail.com)
* **Project Repository**: [https://github.com/virkharjot67-ops/LearnLoop](https://github.com/virkharjot67-ops/LearnLoop)
