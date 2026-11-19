import React from 'react';
import { useApp } from '../context/AppContext';
import Badge from '../components/common/Badge';
import ProgressBar from '../components/common/ProgressBar';
import { 
  BarChart3, 
  Flame, 
  Clock, 
  Award, 
  Trophy, 
  CheckCircle2, 
  TrendingUp, 
  Calendar, 
  ArrowRight,
  Sparkles,
  Zap
} from 'lucide-react';

export const LearningProgress = () => {
  const { user, courses, completedTests, navigateTo } = useApp();

  const enrolledCourses = courses.filter(c => c.enrolled);
  const maxWeeklyHours = Math.max(...user.weeklyActivity.map(w => w.hours), 6);

  const milestones = [
    { id: 1, title: 'Code Pioneer', desc: 'Completed your first interactive course module', date: '3 weeks ago', unlocked: true },
    { id: 2, title: 'Two-Week Streak Warrior', desc: 'Maintained 14 consecutive days of coding', date: 'Yesterday', unlocked: true },
    { id: 3, title: 'Algorithm Challenger', desc: 'Passed the Data Structures sprint test with >75%', date: '2 days ago', unlocked: true },
    { id: 4, title: 'System Design Legend', desc: 'Complete 100 hours of distributed systems labs', date: 'In progress', unlocked: false },
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold text-cyan-300 mb-2">
            <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
            <span>Telemetry & Cognitive Metrics</span>
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">Learning Progress</h1>
          <p className="text-sm text-slate-400 mt-1">
            Real-time diagnostics of your engineering mastery, study velocity, and skill acquisition.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => navigateTo('incentives')}
            className="px-4 py-2.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-semibold flex items-center gap-2 transition-colors"
          >
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>Take Test for XP</span>
          </button>
        </div>
      </div>

      {/* Primary Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="p-5 rounded-2xl glass-card border border-slate-800">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Learning Time</span>
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-black text-white">{user.hoursLearned}</span>
            <span className="text-xs text-slate-400">Total Hours</span>
          </div>
          <p className="text-[11px] text-emerald-400 mt-2 flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            <span>+4.2h logged this week</span>
          </p>
        </div>

        <div className="p-5 rounded-2xl glass-card border border-slate-800">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Active Streak</span>
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <Flame className="w-4 h-4 fill-amber-400" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-black text-white">{user.streakDays}</span>
            <span className="text-xs text-slate-400">Consecutive Days</span>
          </div>
          <p className="text-[11px] text-amber-400 mt-2">
            Goal: {user.streakGoal} days (Halfway there!)
          </p>
        </div>

        <div className="p-5 rounded-2xl glass-card border border-slate-800">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">LoopCoins Balance</span>
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-300 flex items-center justify-center">
              <Zap className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-black text-amber-300">{user.loopCoins}</span>
            <span className="text-xs text-slate-400">Coins</span>
          </div>
          <p className="text-[11px] text-slate-400 mt-2">
            Redeem for 1-on-1 mentorship & certs
          </p>
        </div>

        <div className="p-5 rounded-2xl glass-card border border-slate-800">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Mastery Level</span>
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
              <Award className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-xl font-bold text-white">{user.level}</span>
          </div>
          <div className="mt-2">
            <ProgressBar
              progress={Math.round((user.xp / user.xpToNextLevel) * 100)}
              showPercentage={false}
              height="h-1.5"
            />
            <p className="text-[10px] text-slate-400 mt-1">
              {user.xp} / {user.xpToNextLevel} XP to Staff Level
            </p>
          </div>
        </div>

      </div>

      {/* Middle Row: Weekly Activity Histogram & Skill Radar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Weekly Histogram */}
        <div className="lg:col-span-2 glass-panel p-6 rounded-3xl border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-white text-base">Weekly Learning Velocity</h3>
              <p className="text-xs text-slate-400">Hours spent coding & watching curriculum modules</p>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
              Avg: 3.5h / day
            </span>
          </div>

          {/* Bar Chart Visualization */}
          <div className="h-52 flex items-end justify-between gap-3 pt-6 px-4">
            {user.weeklyActivity.map((item, idx) => {
              const heightPercent = Math.round((item.hours / maxWeeklyHours) * 100);
              const isToday = idx === 6; // Sunday/Today

              return (
                <div key={item.day} className="flex-1 flex flex-col items-center gap-2 group h-full justify-end">
                  <div className="text-[11px] font-semibold text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.hours}h
                  </div>
                  <div className="w-full max-w-[42px] bg-slate-800 rounded-t-xl overflow-hidden h-full flex items-end">
                    <div
                      style={{ height: `${heightPercent}%` }}
                      className={`w-full rounded-t-xl transition-all duration-700 ease-out ${
                        isToday
                          ? 'bg-gradient-to-t from-indigo-600 via-indigo-500 to-cyan-400'
                          : 'bg-gradient-to-t from-slate-700 to-indigo-500/80 group-hover:from-indigo-600 group-hover:to-indigo-400'
                      }`}
                    />
                  </div>
                  <span className={`text-xs font-medium ${isToday ? 'text-indigo-400 font-bold' : 'text-slate-400'}`}>
                    {item.day}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Skill Mastery Competency Matrix */}
        <div className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-4">
          <div>
            <h3 className="font-bold text-white text-base">Skill Competencies</h3>
            <p className="text-xs text-slate-400">Evaluated via quizzes & code completions</p>
          </div>

          <div className="space-y-3.5 pt-1">
            {user.skills.map((skill) => (
              <div key={skill.name} className="space-y-1">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-medium text-slate-200">{skill.name}</span>
                  <span className="font-bold text-indigo-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-2 rounded-full ${skill.color} transition-all duration-700`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800">
            <button
              onClick={() => navigateTo('incentives')}
              className="w-full py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors text-center"
            >
              Take Skill Validation Test
            </button>
          </div>
        </div>

      </div>

      {/* Active Track Progress Breakdown */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6">
        <div>
          <h3 className="text-lg font-bold text-white">Enrolled Course Trajectory</h3>
          <p className="text-xs text-slate-400">Individual progress and completed milestones for each active track</p>
        </div>

        <div className="space-y-4">
          {enrolledCourses.map((course) => (
            <div
              key={course.id}
              className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-2">
                  <Badge color="indigo">{course.category}</Badge>
                  <span className="text-xs text-slate-400">{course.lessonsCount} lessons</span>
                </div>
                <h4 className="font-bold text-white text-sm hover:text-indigo-400 transition-colors cursor-pointer" onClick={() => navigateTo('course-detail', course.id)}>
                  {course.title}
                </h4>
                <ProgressBar progress={course.progress} height="h-2" />
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => navigateTo('course-detail', course.id)}
                  className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-2 transition-all"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Milestone Unlocks */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6">
        <h3 className="text-lg font-bold text-white">Milestones & Achievements</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {milestones.map((m) => (
            <div
              key={m.id}
              className={`p-4 rounded-2xl border transition-all ${
                m.unlocked
                  ? 'bg-slate-900/90 border-indigo-500/30'
                  : 'bg-slate-950/40 border-slate-800/60 opacity-60'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                  m.unlocked ? 'bg-indigo-600/20 text-indigo-400' : 'bg-slate-800 text-slate-500'
                }`}>
                  <Award className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-semibold text-slate-400">{m.date}</span>
              </div>
              <h4 className="font-bold text-white text-sm">{m.title}</h4>
              <p className="text-xs text-slate-400 mt-1">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default LearningProgress;

