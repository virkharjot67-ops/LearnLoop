import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import Badge from '../components/common/Badge';
import { 
  Trophy, 
  Coins, 
  Award, 
  Clock, 
  CheckCircle2, 
  Flame, 
  ArrowRight, 
  Zap, 
  Sparkles,
  ShoppingBag,
  Users,
  ShieldCheck,
  HelpCircle,
  Video,
  BookOpen
} from 'lucide-react';

export const IncentiveTest = () => {
  const { tests, rewards, redeemReward, leaderboard, user, completedTests, navigateTo } = useApp();
  const [activeTab, setActiveTab] = useState('tests'); // 'tests' | 'leaderboard' | 'store'

  const iconMap = {
    Video: Video,
    Award: Award,
    BookOpen: BookOpen,
    Sparkles: Sparkles
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Page Header with Gamified Summary Banner */}
      <div className="relative overflow-hidden rounded-3xl p-6 sm:p-8 border border-amber-500/30 bg-gradient-to-r from-amber-950/40 via-slate-900 to-indigo-950/50 shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-semibold text-amber-300">
              <Trophy className="w-3.5 h-3.5 text-amber-400" />
              <span>Incentive & Assessment Hub</span>
            </div>
            <h1 className="text-3xl font-extrabold text-white tracking-tight">Incentive Tests & Rewards</h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Validate your software architecture skills under pressure. Pass timed assessments to earn verified badges, <strong>LoopCoins</strong>, and redeem 1-on-1 mentorship with Staff Engineers.
            </p>
          </div>

          {/* Gamified Wallet Pill */}
          <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-900/90 border border-amber-500/40 shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Coins className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Your Balance</span>
              <div className="text-2xl font-black text-amber-300">{user.loopCoins} LoopCoins</div>
              <span className="text-[11px] text-indigo-400 font-medium">{user.xp} XP Earned</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Selector */}
      <div className="flex border-b border-slate-800">
        <button
          onClick={() => setActiveTab('tests')}
          className={`pb-3 px-5 text-sm font-semibold flex items-center gap-2 border-b-2 transition-all ${
            activeTab === 'tests'
              ? 'border-amber-400 text-amber-400'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <Trophy className="w-4 h-4" />
          <span>Available Assessments ({tests.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('store')}
          className={`pb-3 px-5 text-sm font-semibold flex items-center gap-2 border-b-2 transition-all ${
            activeTab === 'store'
              ? 'border-amber-400 text-amber-400'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Redeem Rewards Store</span>
        </button>

        <button
          onClick={() => setActiveTab('leaderboard')}
          className={`pb-3 px-5 text-sm font-semibold flex items-center gap-2 border-b-2 transition-all ${
            activeTab === 'leaderboard'
              ? 'border-amber-400 text-amber-400'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>Global Leaderboard</span>
        </button>
      </div>

      {/* TAB 1: Tests List */}
      {activeTab === 'tests' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tests.map((test) => {
              const previousAttempt = completedTests.find(ct => ct.testId === test.id);

              return (
                <div
                  key={test.id}
                  className="glass-card rounded-2xl border border-slate-800 hover:border-amber-500/40 hover:shadow-xl hover:shadow-amber-500/5 transition-all p-6 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    {/* Top badging */}
                    <div className="flex items-center justify-between">
                      <Badge color="amber">{test.category}</Badge>
                      <Badge color="slate">{test.difficulty}</Badge>
                    </div>

                    <h3 className="font-bold text-white text-lg group-hover:text-amber-300 transition-colors">
                      {test.title}
                    </h3>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {test.description}
                    </p>

                    {/* Incentive Rewards Breakdown Pill */}
                    <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 space-y-2">
                      <div className="flex items-center justify-between text-xs font-semibold">
                        <span className="text-amber-300 flex items-center gap-1.5">
                          <Coins className="w-3.5 h-3.5 text-amber-400" />
                          +{test.rewardCoins} LoopCoins
                        </span>
                        <span className="text-indigo-300 flex items-center gap-1.5">
                          <Zap className="w-3.5 h-3.5 text-indigo-400" />
                          +{test.rewardXP} XP
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-400 flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-emerald-400" />
                        <span>Unlocks badge: <strong className="text-slate-200">{test.badgeAwarded}</strong></span>
                      </div>
                    </div>

                    {/* Metadata specs */}
                    <div className="pt-1 flex items-center justify-between text-xs text-slate-400">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-500" />
                        <span>{test.durationMinutes} Minutes</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <HelpCircle className="w-3.5 h-3.5 text-slate-500" />
                        <span>{test.questionsCount} Questions</span>
                      </div>
                      <span className="text-[11px] text-slate-500">Min. {test.passingScorePercentage}%</span>
                    </div>

                    {/* Previous attempt notification if any */}
                    {previousAttempt && (
                      <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                        <span>Best Score: <strong className={previousAttempt.passed ? 'text-emerald-400' : 'text-amber-400'}>{previousAttempt.percentage}%</strong></span>
                        <span className="text-slate-500">{previousAttempt.date}</span>
                      </div>
                    )}
                  </div>

                  {/* Start Test CTA */}
                  <div className="mt-6 pt-4 border-t border-slate-800/80">
                    <button
                      onClick={() => navigateTo('test-arena', test.id)}
                      className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.01]"
                    >
                      <Trophy className="w-4 h-4 fill-slate-950" />
                      <span>{previousAttempt ? 'Retake Incentive Test' : 'Enter Test Arena'}</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 2: Rewards Store */}
      {activeTab === 'store' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-white">LoopCoins Redemption Catalog</h2>
              <p className="text-xs text-slate-400">Exchange your hard-earned test incentives for real career catalysts</p>
            </div>
            <div className="text-xs font-semibold text-amber-300 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30">
              Available: {user.loopCoins} LoopCoins
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rewards.map((reward) => {
              const Icon = iconMap[reward.icon] || Sparkles;
              const canAfford = user.loopCoins >= reward.costCoins;

              return (
                <div
                  key={reward.id}
                  className="glass-card rounded-2xl border border-slate-800 p-5 flex flex-col justify-between hover:border-slate-700 transition-all"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>

                    <Badge color="amber">{reward.category}</Badge>

                    <h4 className="font-bold text-white text-base leading-snug">{reward.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{reward.description}</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400">Required:</span>
                      <div className="flex items-center gap-1 text-sm font-black text-amber-300">
                        <Coins className="w-4 h-4 text-amber-400" />
                        <span>{reward.costCoins}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => redeemReward(reward.id)}
                      disabled={!canAfford}
                      className={`w-full py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                        canAfford
                          ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                          : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                      }`}
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>{canAfford ? 'Redeem Reward' : `Need ${reward.costCoins - user.loopCoins} More`}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 3: Leaderboard */}
      {activeTab === 'leaderboard' && (
        <div className="glass-panel rounded-3xl border border-slate-800 overflow-hidden">
          <div className="p-6 border-b border-slate-800 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-white text-lg">Top Incentive Champions</h3>
              <p className="text-xs text-slate-400">Ranked by verified XP and completed assessment scores</p>
            </div>
            <div className="flex items-center gap-2">
              <Badge color="amber">Season 4 Active</Badge>
            </div>
          </div>

          <div className="divide-y divide-slate-800/80">
            {leaderboard.map((learner) => {
              const isCurrentUser = learner.name.includes('You');

              return (
                <div
                  key={learner.rank}
                  className={`px-6 py-4 flex items-center justify-between text-xs transition-colors ${
                    isCurrentUser ? 'bg-indigo-600/15 border-l-4 border-indigo-500' : 'hover:bg-slate-900/50'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`w-6 font-bold text-center ${
                      learner.rank === 1 ? 'text-amber-400 text-base' : learner.rank === 2 ? 'text-slate-300 text-sm' : learner.rank === 3 ? 'text-amber-600 text-sm' : 'text-slate-500'
                    }`}>
                      #{learner.rank}
                    </span>

                    <div>
                      <h4 className={`font-bold ${isCurrentUser ? 'text-indigo-300' : 'text-white'}`}>
                        {learner.name}
                      </h4>
                      <p className="text-[11px] text-slate-400">{learner.handle}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="hidden sm:flex items-center gap-1.5 text-amber-400">
                      <Flame className="w-3.5 h-3.5 fill-amber-400" />
                      <span>{learner.streak}d streak</span>
                    </div>

                    <div className="flex items-center gap-1 text-amber-300 font-semibold">
                      <Coins className="w-3.5 h-3.5 text-amber-400" />
                      <span>{learner.coins}</span>
                    </div>

                    <div className="w-20 text-right font-black text-slate-200">
                      {learner.xp} XP
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

    </div>
  );
};

export default IncentiveTest;

