import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import Badge from '../components/common/Badge';
import ProgressBar from '../components/common/ProgressBar';
import { 
  Search, 
  Filter, 
  Star, 
  Users, 
  Clock, 
  BookOpen, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const Courses = () => {
  const { courses, enrollCourse, navigateTo } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');

  const categories = ['All', 'Full Stack', 'AI & ML', 'Cloud & DevOps', 'Computer Science', 'Language Mastery', 'Security'];
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-semibold text-indigo-300 mb-2">
            <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
            <span>Interactive Engineering Curriculum</span>
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">Courses Catalog</h1>
          <p className="text-sm text-slate-400 mt-1 max-w-xl">
            Deep-dive production-ready courses built for modern full-stack software engineers and architects.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Search courses, stacks, tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-700/80 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition-colors"
          />
        </div>
      </div>

      {/* Filters bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
        
        {/* Categories */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-slate-400 mr-1 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5 text-indigo-400" />
            Category:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/30'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Levels */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-slate-400 mr-1">Level:</span>
          {levels.map((lvl) => (
            <button
              key={lvl}
              onClick={() => setSelectedLevel(lvl)}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                selectedLevel === lvl
                  ? 'bg-slate-700 text-cyan-300 border border-cyan-500/40'
                  : 'bg-slate-800/60 text-slate-400 hover:text-slate-200'
              }`}
            >
              {lvl}
            </button>
          ))}
        </div>
      </div>

      {/* Course Cards Grid */}
      {filteredCourses.length === 0 ? (
        <div className="text-center py-16 bg-slate-900/40 rounded-3xl border border-dashed border-slate-800 space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-slate-800 text-slate-400 mx-auto flex items-center justify-center">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold text-white">No courses found</h3>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            Try adjusting your search query or clear the selected category and level filters.
          </p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedCategory('All'); setSelectedLevel('All'); }}
            className="px-4 py-2 text-xs font-semibold text-indigo-400 hover:text-indigo-300 bg-indigo-500/10 rounded-xl border border-indigo-500/20"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="glass-card rounded-2xl overflow-hidden border border-slate-800/80 hover:border-slate-700 hover:shadow-xl hover:shadow-indigo-500/5 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Thumbnail Header */}
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <Badge color="indigo">{course.category}</Badge>
                    <Badge color="slate">{course.level}</Badge>
                  </div>

                  {course.enrolled && (
                    <div className="absolute top-3 right-3">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500 text-slate-950 shadow-md">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Enrolled
                      </span>
                    </div>
                  )}

                  {/* Rating Pill */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md text-xs font-semibold text-amber-400 border border-slate-800">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>{course.rating}</span>
                    <span className="text-slate-400 font-normal">({course.reviewsCount})</span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-5 space-y-3">
                  <h3 
                    onClick={() => navigateTo('course-detail', course.id)}
                    className="font-bold text-white text-base leading-snug group-hover:text-indigo-300 transition-colors cursor-pointer"
                  >
                    {course.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                    {course.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {course.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/50">
                        #{tag}
                      </span>
                    ))}
                    {course.tags.length > 3 && (
                      <span className="text-[10px] px-1.5 py-0.5 text-slate-500">+{course.tags.length - 3}</span>
                    )}
                  </div>

                  {/* Meta Stats */}
                  <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800/80">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-500" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-slate-500" />
                      <span>{course.lessonsCount} lessons</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-slate-500" />
                      <span>{(course.studentsEnrolled / 1000).toFixed(1)}k</span>
                    </div>
                  </div>

                  {/* Progress bar if enrolled */}
                  {course.enrolled && (
                    <div className="pt-2">
                      <ProgressBar progress={course.progress} label="Curriculum Progress" height="h-2" />
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-5 pb-5 pt-2 flex items-center gap-3">
                {course.enrolled ? (
                  <button
                    onClick={() => navigateTo('course-detail', course.id)}
                    className="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-md shadow-indigo-600/30 transition-all"
                  >
                    <span>Continue Track</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    onClick={() => enrollCourse(course.id)}
                    className="flex-1 py-2.5 rounded-xl bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white border border-indigo-500/40 text-xs font-semibold flex items-center justify-center gap-2 transition-all"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Enroll Now (Free)</span>
                  </button>
                )}

                <button
                  onClick={() => navigateTo('course-detail', course.id)}
                  className="px-3 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors"
                  title="View Syllabus"
                >
                  Details
                </button>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Courses;

