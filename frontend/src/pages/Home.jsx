import React from 'react';
import { useApp } from '../context/AppContext';
import Badge from '../components/common/Badge';
import ProgressBar from '../components/common/ProgressBar';
import { 
  Play, 
  ArrowRight, 
  Flame, 
  Coins, 
  Award, 
  Clock, 
  BookOpen, 
  CheckCircle, 
  Sparkles, 
  TrendingUp,
  FileText,
  Trophy
} from 'lucide-react';

export const Home = () => {
  const { user, courses, navigateTo } = useApp();

  // Find currently enrolled course with highest progress
  const activeCourse = courses.find(c => c.enrolled) || courses[0];
  const enrolledCourses = courses.filter(c => c.enrolled);

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Hero Welcome Banner */}
      <section className="relative overflow-hidden rounded-3xl p-8 sm:p-10 border border-indigo-500/30 bg-gradient-to-br from-indigo-950/80 via-slate-900 to-slate-950 shadow-2xl">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-indigo-600/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-20 w-72 h-72 rounded-full bg-cyan-600/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-semibold text-indigo-300">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Welcome Back, {user.name}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ready to accelerate your <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-indigo-200 bg-clip-text text-transparent">tech mastery?</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              You are currently on a <span className="text-amber-400 font-bold">{user.streakDays}-day streak</span>! Complete today's module to earn <strong>50 LoopCoins</strong> and maintain your global ranking.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => navigateTo('course-detail', activeCourse.id)}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm flex items-center gap-2 shadow-lg shadow-indigo-600/30 transition-all hover:scale-[1.02]"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Resume Learning</span>
              </button>

              <button
                onClick={() => navigateTo('incentives')}
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-sm flex items-center gap-2 transition-all"
              >
                <Trophy className="w-4 h-4 text-amber-400" />
                <span>Take Incentive Test</span>
              </button>
            </div>
          </div>

          {/* Quick Stats Grid Pill */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 lg:w-72">
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-md">
              <div className="flex items-center gap-2 text-amber-400 mb-1">
                <Flame className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase tracking-wider">Streak</span>
              </div>
              <div className="text-2xl font-black text-white">{user.streakDays} Days</div>
              <p className="text-[11px] text-slate-400 mt-1">Goal: {user.streakGoal} days</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-md">
              <div className="flex items-center gap-2 text-amber-300 mb-1">
                <Coins className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase tracking-wider">Coins</span>
              </div>
              <div className="text-2xl font-black text-white">{user.loopCoins}</div>
              <p className="text-[11px] text-slate-400 mt-1">Ready to redeem</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-md">
              <div className="flex items-center gap-2 text-indigo-400 mb-1">
                <Clock className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase tracking-wider">Time</span>
              </div>
              <div className="text-2xl font-black text-white">{user.hoursLearned}h</div>
              <p className="text-[11px] text-slate-400 mt-1">This month</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-md">
              <div className="flex items-center gap-2 text-emerald-400 mb-1">
                <Award className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase tracking-wider">Total XP</span>
              </div>
              <div className="text-2xl font-black text-white">{user.xp}</div>
              <p className="text-[11px] text-slate-400 mt-1">{user.rank}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Section Shortcuts */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div 
          onClick={() => navigateTo('courses')}
          className="group cursor-pointer p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-900 transition-all shadow-md"
        >
          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            <BookOpen className="w-5 h-5" />
          </div>
          <h3 className="font-semibold text-white text-base group-hover:text-indigo-300 transition-colors">Courses</h3>
          <p className="text-xs text-slate-400 mt-1 leading-relaxed">
            Browse structured curriculum with interactive modules & project tasks.
          </p>
          <div className="mt-3 flex items-center gap-1 text-xs font-medium text-indigo-400">
            <span>Explore Catalog</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        <div 
          onClick={() => navigateTo('progress')}
          className="group cursor-pointer p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900 transition-all shadow-md"
        >
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            <TrendingUp className="w-5 h-5" />
          </div>
          <h3 className="font-semibold text-white text-base group-hover:text-cyan-300 transition-colors">Learning Progress</h3>
          <p className="text-xs text-slate-400 mt-1 leading-relaxed">
            Track weekly study analytics, milestone achievements & skill mastery radar.
          </p>
          <div className="mt-3 flex items-center gap-1 text-xs font-medium text-cyan-400">
            <span>View Analytics</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        <div 
          onClick={() => navigateTo('materials')}
          className="group cursor-pointer p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-900 transition-all shadow-md"
        >
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            <FileText className="w-5 h-5" />
          </div>
          <h3 className="font-semibold text-white text-base group-hover:text-emerald-300 transition-colors">Study Material</h3>
          <p className="text-xs text-slate-400 mt-1 leading-relaxed">
            Access curated cheatsheets, system blueprints, and downloadable PDFs.
          </p>
          <div className="mt-3 flex items-center gap-1 text-xs font-medium text-emerald-400">
            <span>Read Cheatsheets</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        <div 
          onClick={() => navigateTo('incentives')}
          className="group cursor-pointer p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-amber-500/50 hover:bg-slate-900 transition-all shadow-md"
        >
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            <Trophy className="w-5 h-5" />
          </div>
          <h3 className="font-semibold text-white text-base group-hover:text-amber-300 transition-colors">Incentive Test</h3>
          <p className="text-xs text-slate-400 mt-1 leading-relaxed">
            Take timed skill assessments to win real LoopCoins, badges & 1-on-1 calls.
          </p>
          <div className="mt-3 flex items-center gap-1 text-xs font-medium text-amber-400">
            <span>Enter Test Arena</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

      </section>

      {/* In-Progress Courses & Continue Learning Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight">Active Learning Tracks</h2>
            <p className="text-xs text-slate-400">Jump right back into your enrolled courses</p>
          </div>
          <button 
            onClick={() => navigateTo('courses')}
            className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
          >
            <span>View All Courses</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {enrolledCourses.map((course) => (
            <div
              key={course.id}
              className="glass-card rounded-2xl overflow-hidden border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <Badge color="indigo">{course.category}</Badge>
                    <Badge color="slate">{course.level}</Badge>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <h3 className="font-bold text-white text-base line-clamp-2 hover:text-indigo-300 transition-colors cursor-pointer" onClick={() => navigateTo('course-detail', course.id)}>
                    {course.title}
                  </h3>

                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <img
                      src={course.instructor.avatar}
                      alt={course.instructor.name}
                      className="w-5 h-5 rounded-full object-cover"
                    />
                    <span>{course.instructor.name}</span>
                  </div>

                  {/* Progress Indicator */}
                  <ProgressBar
                    progress={course.progress}
                    label="Track Progress"
                    height="h-2"
                  />
                </div>
              </div>

              <div className="px-5 pb-5 pt-1">
                <button
                  onClick={() => navigateTo('course-detail', course.id)}
                  className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-indigo-600 hover:text-white text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 transition-all"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Continue Course</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;

