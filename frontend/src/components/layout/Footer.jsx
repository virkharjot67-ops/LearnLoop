import React from 'react';
import { useApp } from '../../context/AppContext';
import { Github, Twitter, Linkedin, Heart, ShieldCheck, Zap } from 'lucide-react';

export const Footer = () => {
  const { navigateTo } = useApp();

  return (
    <footer className="mt-20 border-t border-slate-800/80 bg-slate-950/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white shadow-md shadow-indigo-600/30">
                LL
              </div>
              <span className="text-lg font-bold text-white">LearnLoop</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              The continuous learning platform combining curated engineering courses, interactive progress diagnostics, comprehensive study materials, and gamified incentive tests.
            </p>
            <div className="flex items-center gap-3 text-slate-400">
              <a href="#" className="p-2 hover:text-white hover:bg-slate-900 rounded-lg transition-colors"><Github className="w-4 h-4" /></a>
              <a href="#" className="p-2 hover:text-white hover:bg-slate-900 rounded-lg transition-colors"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="p-2 hover:text-white hover:bg-slate-900 rounded-lg transition-colors"><Linkedin className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Core Modules */}
          <div>
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-3">Platform Modules</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => navigateTo('courses')} className="hover:text-indigo-400 transition-colors">Course Catalog & Tracks</button>
              </li>
              <li>
                <button onClick={() => navigateTo('progress')} className="hover:text-indigo-400 transition-colors">Learning Progress & Analytics</button>
              </li>
              <li>
                <button onClick={() => navigateTo('materials')} className="hover:text-indigo-400 transition-colors">Study Material & Cheatsheets</button>
              </li>
              <li>
                <button onClick={() => navigateTo('incentives')} className="hover:text-indigo-400 transition-colors">Incentive Tests & Rewards</button>
              </li>
            </ul>
          </div>

          {/* Quick Categories */}
          <div>
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-3">Domains</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><span className="hover:text-indigo-400 cursor-pointer">Full-Stack Web Engineering</span></li>
              <li><span className="hover:text-indigo-400 cursor-pointer">Distributed Systems & Cloud</span></li>
              <li><span className="hover:text-indigo-400 cursor-pointer">AI Agents & Vector Pipelines</span></li>
              <li><span className="hover:text-indigo-400 cursor-pointer">Computer Science & Algorithms</span></li>
              <li><span className="hover:text-indigo-400 cursor-pointer">Production Security & OAuth</span></li>
            </ul>
          </div>

          {/* Platform Status & Security */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-3">Enterprise Grade</h4>
            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>All Systems Operational</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Codespaces & DevContainers enabled with instant zero-configuration boot.
              </p>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-slate-500">
              <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
              <span>Verifiable Skills & Cryptographic Badges</span>
            </div>
          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} LearnLoop Inc. Built with React & Tailwind CSS.</p>
          <div className="flex items-center gap-1">
            <span>Crafted for developers with high standards</span>
            <Zap className="w-3.5 h-3.5 text-amber-400" />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

