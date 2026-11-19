import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import Badge from '../components/common/Badge';
import ProgressBar from '../components/common/ProgressBar';
import { 
  ArrowLeft, 
  Play, 
  CheckCircle2, 
  Circle, 
  Clock, 
  BookOpen, 
  Users, 
  Star, 
  Award, 
  Share2, 
  Check, 
  ChevronDown, 
  ChevronUp,
  Sparkles,
  Terminal,
  FileCode
} from 'lucide-react';

export const CourseDetails = () => {
  const { selectedCourseId, courses, enrollCourse, toggleLessonComplete, navigateTo } = useApp();

  const course = courses.find(c => c.id === selectedCourseId) || courses[0];

  // Pick first lesson or active lesson
  const allLessons = course.modules.flatMap(m => m.lessons);
  const firstUnfinishedLesson = allLessons.find(l => !l.completed) || allLessons[0];
  const [activeLesson, setActiveLesson] = useState(firstUnfinishedLesson || null);
  const [expandedModules, setExpandedModules] = useState({ [course.modules[0]?.id]: true });

  const toggleModule = (modId) => {
    setExpandedModules(prev => ({
      ...prev,
      [modId]: !prev[modId]
    }));
  };

  const handleToggleLesson = (lessonId) => {
    toggleLessonComplete(course.id, lessonId);
    if (activeLesson && activeLesson.id === lessonId) {
      setActiveLesson(prev => ({ ...prev, completed: !prev.completed }));
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Top Breadcrumb & Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigateTo('courses')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Courses</span>
        </button>

        <div className="flex items-center gap-2">
          <Badge color="indigo">{course.category}</Badge>
          <Badge color="slate">{course.level}</Badge>
        </div>
      </div>

      {/* Main Course Layout: Video / Simulator on Left, Syllabus on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Player & Active Lesson View */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Interactive Lesson Stage / Player */}
          <div className="rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
            {/* Terminal / Video Header */}
            <div className="px-4 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="font-mono text-slate-300 ml-2 flex items-center gap-1">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  learnloop-player : {activeLesson?.title || "Lesson Simulator"}
                </span>
              </div>
              <span className="text-[11px] text-indigo-400 font-mono">1080p 60fps Stream</span>
            </div>

            {/* Simulated Video & Interactive Code Walkthrough */}
            <div className="relative aspect-video bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 flex flex-col items-center justify-center p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-indigo-600/90 text-white flex items-center justify-center shadow-xl shadow-indigo-600/40 hover:scale-110 transition-transform cursor-pointer mb-4">
                <Play className="w-7 h-7 fill-white translate-x-0.5" />
              </div>
              <h4 className="text-lg font-bold text-white max-w-md">{activeLesson?.title}</h4>
              <p className="text-xs text-slate-400 mt-1">Duration: {activeLesson?.duration} • Interactive Video Code Lab</p>
              
              <div className="mt-4 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-mono">
                  Module Exercise Sandbox Ready
                </span>
              </div>
            </div>

            {/* Lesson Control Footer */}
            <div className="p-4 bg-slate-950/60 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                {course.enrolled ? (
                  <button
                    onClick={() => handleToggleLesson(activeLesson?.id)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
                      activeLesson?.completed
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                        : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/20'
                    }`}
                  >
                    {activeLesson?.completed ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span>Completed (+25 XP Earned)</span>
                      </>
                    ) : (
                      <>
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Mark Lesson as Complete</span>
                      </>
                    )}
                  </button>
                ) : (
                  <button
                    onClick={() => enrollCourse(course.id)}
                    className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Enroll to Track Lesson Progress</span>
                  </button>
                )}
              </div>

              <div className="text-xs text-slate-400 flex items-center gap-4">
                <span>Duration: {activeLesson?.duration}</span>
                <span className="text-indigo-400 font-medium">Instructor: {course.instructor.name}</span>
              </div>
            </div>
          </div>

          {/* Course Overview & Description */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white">{course.title}</h1>
              <p className="text-sm text-slate-300 mt-3 leading-relaxed">{course.description}</p>
            </div>

            {/* Instructor Details Card */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
              <img
                src={course.instructor.avatar}
                alt={course.instructor.name}
                className="w-12 h-12 rounded-full object-cover ring-2 ring-indigo-500/40"
              />
              <div className="flex-1">
                <h4 className="text-sm font-bold text-white">{course.instructor.name}</h4>
                <p className="text-xs text-indigo-400">{course.instructor.role}</p>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-amber-400 flex items-center gap-1 justify-end">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  {course.rating}
                </span>
                <span className="text-[11px] text-slate-500">Instructor Rating</span>
              </div>
            </div>

            {/* What you will master */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider text-xs">Architectural Outcomes</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Production concurrent patterns with zero UI stutter</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Resilient streaming backpressure and distributed memory management</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Containerized CI/CD orchestration and live zero-downtime deploy</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>End-to-end type safety, observability, and distributed tracing</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Right Column: Curriculum Syllabus Accordion & Enrollment */}
        <div className="space-y-6">
          
          {/* Enrollment / Progress Card */}
          <div className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-4">
            <h3 className="font-bold text-white text-base">Course Progress</h3>
            <ProgressBar progress={course.progress} label="Completion Rate" height="h-2.5" />

            {!course.enrolled ? (
              <button
                onClick={() => enrollCourse(course.id)}
                className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>Enroll in Course (Instant Access)</span>
              </button>
            ) : (
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>You are actively enrolled in this course track.</span>
              </div>
            )}
          </div>

          {/* Syllabus Modules Accordion */}
          <div className="glass-panel rounded-3xl border border-slate-800 overflow-hidden">
            <div className="p-5 border-b border-slate-800 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-white text-base">Curriculum Syllabus</h3>
                <p className="text-xs text-slate-400">{course.modules.length} Modules • {allLessons.length} Lessons</p>
              </div>
              <Badge color="indigo">{course.duration}</Badge>
            </div>

            <div className="divide-y divide-slate-800/80">
              {course.modules.map((module, modIdx) => {
                const isExpanded = !!expandedModules[module.id];
                const completedInMod = module.lessons.filter(l => l.completed).length;

                return (
                  <div key={module.id} className="transition-colors">
                    {/* Module Title Header */}
                    <button
                      onClick={() => toggleModule(module.id)}
                      className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-900/60 transition-colors"
                    >
                      <div className="space-y-0.5 pr-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400">
                          Section {modIdx + 1}
                        </span>
                        <h4 className="text-xs font-semibold text-white leading-tight">{module.title}</h4>
                        <p className="text-[11px] text-slate-400">
                          {completedInMod}/{module.lessons.length} completed
                        </p>
                      </div>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-slate-400 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />
                      )}
                    </button>

                    {/* Lesson Items */}
                    {isExpanded && (
                      <div className="bg-slate-950/40 px-3 py-2 space-y-1">
                        {module.lessons.map((lesson) => {
                          const isSelected = activeLesson?.id === lesson.id;
                          return (
                            <div
                              key={lesson.id}
                              onClick={() => setActiveLesson(lesson)}
                              className={`p-2.5 rounded-xl flex items-center justify-between text-xs cursor-pointer transition-all ${
                                isSelected
                                  ? 'bg-indigo-600/20 border border-indigo-500/40 text-white'
                                  : 'hover:bg-slate-900 text-slate-300'
                              }`}
                            >
                              <div className="flex items-center gap-2.5 min-w-0 pr-2">
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleToggleLesson(lesson.id);
                                  }}
                                  className="flex-shrink-0"
                                >
                                  {lesson.completed ? (
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                  ) : (
                                    <Circle className="w-4 h-4 text-slate-600 hover:text-slate-400" />
                                  )}
                                </button>
                                <span className={`truncate ${lesson.completed ? 'line-through text-slate-500' : ''}`}>
                                  {lesson.title}
                                </span>
                              </div>
                              <span className="text-[11px] font-mono text-slate-500 flex-shrink-0">
                                {lesson.duration}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default CourseDetails;

