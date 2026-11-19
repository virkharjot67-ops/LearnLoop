import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Request logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    timestamp: new Date().toISOString(),
    service: 'LearnLoop Full-Stack API Engine',
    version: '1.0.0'
  });
});

// User Profile & Telemetry Endpoint
app.get('/api/user/profile', (req, res) => {
  res.json({
    name: "Alex Morgan",
    handle: "@alex_dev",
    level: "Senior Apprentice",
    xp: 3420,
    loopCoins: 480,
    streakDays: 14,
    hoursLearned: 58.5
  });
});

// Courses API route
app.get('/api/courses', (req, res) => {
  res.json({
    message: "Courses retrieved successfully",
    categories: ['Full Stack', 'AI & ML', 'Cloud & DevOps', 'Computer Science', 'Language Mastery', 'Security']
  });
});

// Learning Progress Analytics API route
app.get('/api/progress/analytics', (req, res) => {
  res.json({
    completionRate: 68,
    activeTracks: 3,
    streakStatus: 'ACTIVE_14_DAYS',
    weeklyHours: 24.7
  });
});

// Study Material Repository API route
app.get('/api/study-materials', (req, res) => {
  res.json({
    count: 6,
    types: ['Cheatsheet', 'PDF Guide', 'Markdown Note']
  });
});

// Incentive Tests & Assessments API route
app.get('/api/incentive-tests', (req, res) => {
  res.json({
    activeSeason: 4,
    totalRewardsPool: 50000
  });
});

// Start Express server
app.listen(PORT, () => {
  console.log(`🚀 LearnLoop Backend API running on http://localhost:${PORT}`);
});

