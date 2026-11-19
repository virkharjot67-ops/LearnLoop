import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import Badge from '../components/common/Badge';
import { 
  Clock, 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  Trophy, 
  Coins, 
  Award, 
  RotateCcw,
  Flag,
  Check,
  ShieldCheck
} from 'lucide-react';

export const TestArena = () => {
  const { selectedTestId, tests, submitTest, navigateTo } = useApp();
  
  const test = tests.find(t => t.id === selectedTestId) || tests[0];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [flaggedQuestions, setFlaggedQuestions] = useState({});
  const [timeLeft, setTimeLeft] = useState(test.durationMinutes * 60);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [testResult, setTestResult] = useState(null);

  // Countdown timer
  useEffect(() => {
    if (isSubmitted) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitTest();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isSubmitted, test]);

  // Format seconds to MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSelectOption = (optionIndex) => {
    if (isSubmitted) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestionIndex]: optionIndex
    }));
  };

  const toggleFlagCurrent = () => {
    setFlaggedQuestions(prev => ({
      ...prev,
      [currentQuestionIndex]: !prev[currentQuestionIndex]
    }));
  };

  const handleSubmitTest = () => {
    const timeSpent = (test.durationMinutes * 60) - timeLeft;
    const result = submitTest(test.id, selectedAnswers, timeSpent);
    setTestResult(result);
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRetake = () => {
    setSelectedAnswers({});
    setFlaggedQuestions({});
    setTimeLeft(test.durationMinutes * 60);
    setCurrentQuestionIndex(0);
    setIsSubmitted(false);
    setTestResult(null);
  };

  const currentQ = test.questions[currentQuestionIndex];
  const isTimeCritical = timeLeft < 120; // under 2 mins

  return (
    <div className="space-y-6 max-w-4xl mx-auto animate-fadeIn">
      
      {/* Top Bar Navigation & Status */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigateTo('incentives')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Exit Test Arena</span>
        </button>

        {!isSubmitted && (
          <div className={`px-4 py-1.5 rounded-xl border flex items-center gap-2 font-mono text-xs font-bold transition-all ${
            isTimeCritical 
              ? 'bg-rose-500/20 text-rose-300 border-rose-500/40 animate-pulse' 
              : 'bg-slate-900 text-slate-200 border-slate-800'
          }`}>
            <Clock className={`w-4 h-4 ${isTimeCritical ? 'text-rose-400' : 'text-indigo-400'}`} />
            <span>Time Remaining: {formatTime(timeLeft)}</span>
          </div>
        )}
      </div>

      {/* Main Arena Container */}
      {!isSubmitted ? (
        <div className="space-y-6">
          
          {/* Question Index Navigator Pills */}
          <div className="p-4 rounded-2xl glass-panel border border-slate-800 flex items-center justify-between gap-3 overflow-x-auto">
            <div className="flex items-center gap-2">
              {test.questions.map((q, idx) => {
                const isCurrent = idx === currentQuestionIndex;
                const isAnswered = selectedAnswers[idx] !== undefined;
                const isFlagged = flaggedQuestions[idx];

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentQuestionIndex(idx)}
                    className={`relative w-9 h-9 rounded-xl text-xs font-bold transition-all flex items-center justify-center ${
                      isCurrent
                        ? 'bg-indigo-600 text-white ring-2 ring-indigo-400 shadow-md shadow-indigo-600/30'
                        : isAnswered
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                        : 'bg-slate-800/80 text-slate-400 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    <span>{idx + 1}</span>
                    {isFlagged && (
                      <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-400" />
                    )}
                  </button>
                );
              })}
            </div>

            <button
              onClick={toggleFlagCurrent}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-colors ${
                flaggedQuestions[currentQuestionIndex]
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  : 'text-slate-400 hover:text-white bg-slate-800'
              }`}
            >
              <Flag className="w-3.5 h-3.5" />
              <span>{flaggedQuestions[currentQuestionIndex] ? 'Flagged' : 'Flag Question'}</span>
            </button>
          </div>

          {/* Active Question Card */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6 shadow-xl">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="font-semibold uppercase tracking-wider text-indigo-400">
                Question {currentQuestionIndex + 1} of {test.questions.length}
              </span>
              <span>Single Choice</span>
            </div>

            <h2 className="text-lg sm:text-xl font-bold text-white leading-relaxed">
              {currentQ.question}
            </h2>

            {/* Radio Options */}
            <div className="space-y-3 pt-2">
              {currentQ.options.map((option, optIdx) => {
                const isSelected = selectedAnswers[currentQuestionIndex] === optIdx;

                return (
                  <div
                    key={optIdx}
                    onClick={() => handleSelectOption(optIdx)}
                    className={`p-4 rounded-2xl border text-sm cursor-pointer transition-all flex items-center justify-between gap-4 ${
                      isSelected
                        ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-md shadow-indigo-500/10'
                        : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-900 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 ${
                        isSelected ? 'border-indigo-400 bg-indigo-600' : 'border-slate-600'
                      }`}>
                        {isSelected && <span className="w-2 h-2 rounded-full bg-white" />}
                      </div>
                      <span className="leading-snug">{option}</span>
                    </div>

                    <span className="text-xs font-mono text-slate-500">Opt {optIdx + 1}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Navigation & Submit Bar */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
              disabled={currentQuestionIndex === 0}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:hover:bg-slate-800 text-slate-300 text-xs font-semibold flex items-center gap-2 transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Previous</span>
            </button>

            <div className="flex items-center gap-3">
              {currentQuestionIndex < test.questions.length - 1 ? (
                <button
                  onClick={() => setCurrentQuestionIndex(prev => Math.min(test.questions.length - 1, prev + 1))}
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-2 shadow-md shadow-indigo-600/30 transition-all"
                >
                  <span>Next Question</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <button
                  onClick={handleSubmitTest}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 text-xs font-extrabold flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition-all"
                >
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>Submit Assessment</span>
                </button>
              )}
            </div>
          </div>

        </div>
      ) : (
        /* Test Completed Results View */
        <div className="space-y-8 animate-fadeIn">
          
          {/* Result Banner */}
          <div className={`p-8 rounded-3xl border shadow-2xl text-center space-y-4 ${
            testResult?.passed
              ? 'bg-gradient-to-b from-emerald-950/40 via-slate-900 to-slate-950 border-emerald-500/40'
              : 'bg-gradient-to-b from-amber-950/40 via-slate-900 to-slate-950 border-amber-500/40'
          }`}>
            <div className="inline-flex p-3 rounded-2xl bg-slate-900 border border-slate-800 mx-auto">
              <Trophy className={`w-10 h-10 ${testResult?.passed ? 'text-emerald-400' : 'text-amber-400'}`} />
            </div>

            <h2 className="text-3xl font-black text-white">
              {testResult?.passed ? 'Assessment Passed! 🎉' : 'Assessment Completed'}
            </h2>

            <p className="text-sm text-slate-300 max-w-lg mx-auto">
              {testResult?.passed 
                ? `Outstanding performance! You passed with a verified score of ${testResult?.percentage}%. Your rewards have been added directly to your LearnLoop account.`
                : `You scored ${testResult?.percentage}%. The passing threshold is ${test.passingScorePercentage}%. Study the detailed solutions below and give it another shot!`}
            </p>

            {/* Reward Summary Pill */}
            <div className="inline-flex flex-wrap items-center justify-center gap-4 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs font-bold">
              <div className="flex items-center gap-1.5 text-amber-300">
                <Coins className="w-4 h-4 text-amber-400" />
                <span>+{testResult?.earnedCoins} LoopCoins</span>
              </div>
              <div className="flex items-center gap-1.5 text-indigo-300">
                <Award className="w-4 h-4 text-indigo-400" />
                <span>+{testResult?.earnedXP} XP</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{testResult?.score} / {testResult?.total} Correct</span>
              </div>
            </div>

            <div className="pt-2 flex justify-center gap-4">
              <button
                onClick={handleRetake}
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-2 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Retake Test</span>
              </button>

              <button
                onClick={() => navigateTo('incentives')}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-2 transition-colors shadow-md shadow-indigo-600/30"
              >
                <span>Back to Incentive Hub</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Question-by-Question Review with Explanations */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Detailed Solutions & Architectural Explanations</h3>

            <div className="space-y-4">
              {test.questions.map((q, idx) => {
                const userAnswer = selectedAnswers[idx];
                const isCorrect = userAnswer === q.correctIndex;

                return (
                  <div
                    key={q.id}
                    className={`p-6 rounded-2xl border glass-panel space-y-4 ${
                      isCorrect ? 'border-emerald-500/30' : 'border-rose-500/30'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="text-xs font-semibold text-slate-400">
                        Question {idx + 1}
                      </span>
                      {isCorrect ? (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Correct
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-400 bg-rose-500/10 px-2.5 py-0.5 rounded-full border border-rose-500/30">
                          <XCircle className="w-3.5 h-3.5" /> Incorrect
                        </span>
                      )}
                    </div>

                    <h4 className="font-semibold text-white text-sm">{q.question}</h4>

                    {/* Options breakdown */}
                    <div className="space-y-2 text-xs">
                      {q.options.map((opt, optIdx) => {
                        const isSelected = userAnswer === optIdx;
                        const isActualCorrect = q.correctIndex === optIdx;

                        return (
                          <div
                            key={optIdx}
                            className={`p-3 rounded-xl border flex items-center justify-between ${
                              isActualCorrect
                                ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-200'
                                : isSelected && !isActualCorrect
                                ? 'bg-rose-500/15 border-rose-500/40 text-rose-200'
                                : 'bg-slate-900/60 border-slate-800 text-slate-400'
                            }`}
                          >
                            <span className="leading-snug">{opt}</span>
                            {isActualCorrect && <span className="text-[11px] font-bold text-emerald-400">Correct Answer</span>}
                            {isSelected && !isActualCorrect && <span className="text-[11px] font-bold text-rose-400">Your Answer</span>}
                          </div>
                        );
                      })}
                    </div>

                    {/* Architectural Explanation */}
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 space-y-1">
                      <span className="font-bold text-indigo-400">Engineering Concept:</span>
                      <p className="leading-relaxed">{q.explanation}</p>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

        </div>
      )}

    </div>
  );
};

export default TestArena;

