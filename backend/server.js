import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {
  initialUserData,
  coursesData,
  studyMaterialsData,
  incentiveTestsData,
  rewardsStoreData,
  leaderboardData
} from './data/initialData.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// In-memory application data store
let user = { ...initialUserData };
let courses = JSON.parse(JSON.stringify(coursesData));
let studyMaterials = JSON.parse(JSON.stringify(studyMaterialsData));
let tests = JSON.parse(JSON.stringify(incentiveTestsData));
let rewards = JSON.parse(JSON.stringify(rewardsStoreData));
let leaderboard = JSON.parse(JSON.stringify(leaderboardData));
let completedTests = [
  {
    testId: 'test-algorithms-sprint',
    score: 4,
    total: 5,
    percentage: 80,
    earnedCoins: 90,
    earnedXP: 250,
    passed: true,
    date: '2 days ago'
  }
];
let redeemedRewards = [];

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

// Bootstrap endpoint: Single-trip initial state for frontend
app.get('/api/bootstrap', (req, res) => {
  res.json({
    user,
    courses,
    studyMaterials,
    tests,
    rewards,
    leaderboard,
    completedTests,
    redeemedRewards
  });
});

// User profile
app.get('/api/user/profile', (req, res) => {
  res.json(user);
});

// Courses
app.get('/api/courses', (req, res) => {
  res.json(courses);
});

app.get('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === req.params.id);
  if (!course) return res.status(404).json({ error: 'Course not found' });
  res.json(course);
});

// Enroll in course
app.post('/api/courses/:id/enroll', (req, res) => {
  const course = courses.find(c => c.id === req.params.id);
  if (!course) return res.status(404).json({ error: 'Course not found' });

  course.enrolled = true;
  course.progress = course.progress || 5;
  res.json(course);
});

// Toggle lesson completion
app.post('/api/courses/:id/lessons/:lessonId/toggle', (req, res) => {
  const course = courses.find(c => c.id === req.params.id);
  if (!course) return res.status(404).json({ error: 'Course not found' });

  let totalLessons = 0;
  let completedLessons = 0;

  course.modules = course.modules.map(module => {
    const updatedLessons = module.lessons.map(lesson => {
      totalLessons++;
      if (lesson.id === req.params.lessonId) {
        const nextState = !lesson.completed;
        if (nextState) completedLessons++;
        return { ...lesson, completed: nextState };
      }
      if (lesson.completed) completedLessons++;
      return lesson;
    });
    return { ...module, lessons: updatedLessons };
  });

  course.progress = Math.round((completedLessons / (totalLessons || 1)) * 100);

  // Update user XP & learning hours
  user = {
    ...user,
    xp: user.xp + 25,
    hoursLearned: parseFloat((user.hoursLearned + 0.4).toFixed(1))
  };

  res.json({ course, user });
});

// Study materials
app.get('/api/study-materials', (req, res) => {
  res.json(studyMaterials);
});

// Toggle bookmark
app.post('/api/study-materials/:id/bookmark', (req, res) => {
  const item = studyMaterials.find(m => m.id === req.params.id);
  if (!item) return res.status(404).json({ error: 'Material not found' });

  item.isBookmarked = !item.isBookmarked;
  res.json(item);
});

// Incentive tests
app.get('/api/incentive-tests', (req, res) => {
  res.json({ tests, completedTests });
});

// Submit test
app.post('/api/tests/:id/submit', (req, res) => {
  const { answers, timeSpentSeconds } = req.body;
  const test = tests.find(t => t.id === req.params.id);
  if (!test) return res.status(404).json({ error: 'Test not found' });

  let correctCount = 0;
  test.questions.forEach((q, idx) => {
    if (answers && answers[idx] === q.correctIndex) {
      correctCount++;
    }
  });

  const percentage = Math.round((correctCount / test.questions.length) * 100);
  const passed = percentage >= test.passingScorePercentage;
  const earnedCoins = passed ? test.rewardCoins : Math.round(test.rewardCoins * 0.2);
  const earnedXP = passed ? test.rewardXP : Math.round(test.rewardXP * 0.25);

  user = {
    ...user,
    xp: user.xp + earnedXP,
    loopCoins: user.loopCoins + earnedCoins,
    completedTestsCount: (user.completedTestsCount || 0) + 1
  };

  const resultRecord = {
    testId: test.id,
    score: correctCount,
    total: test.questions.length,
    percentage,
    earnedCoins,
    earnedXP,
    passed,
    timeSpentSeconds: timeSpentSeconds || 0,
    date: 'Just now'
  };

  completedTests.unshift(resultRecord);

  res.json({ result: resultRecord, user });
});

// Rewards Store
app.get('/api/rewards', (req, res) => {
  res.json({ rewards, redeemedRewards });
});

// Redeem reward
app.post('/api/rewards/:id/redeem', (req, res) => {
  const item = rewards.find(r => r.id === req.params.id);
  if (!item) return res.status(404).json({ error: 'Reward not found' });

  if (user.loopCoins < item.costCoins) {
    return res.status(400).json({ error: 'Insufficient LoopCoins' });
  }

  user = {
    ...user,
    loopCoins: user.loopCoins - item.costCoins
  };

  const record = { ...item, redeemedAt: new Date().toLocaleDateString() };
  redeemedRewards.unshift(record);

  res.json({ redeemedReward: record, user });
});

// Leaderboard
app.get('/api/leaderboard', (req, res) => {
  res.json(leaderboard);
});

// Start Express server
const HOST = '0.0.0.0';
app.listen(PORT, HOST, () => {
  console.log(`🚀 LearnLoop Backend API running on port ${PORT}`);
});
