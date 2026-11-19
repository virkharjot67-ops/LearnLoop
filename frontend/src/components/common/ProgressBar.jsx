import React from 'react';

export const ProgressBar = ({
  progress = 0,
  label = null,
  showPercentage = true,
  height = 'h-2',
  color = 'bg-gradient-to-r from-indigo-500 to-cyan-500',
  className = ''
}) => {
  const clamped = Math.min(100, Math.max(0, progress));

  return (
    <div className={`w-full ${className}`}>
      {(label || showPercentage) && (
        <div className="flex justify-between items-center text-xs mb-1.5 font-medium text-slate-400">
          {label && <span>{label}</span>}
          {showPercentage && <span className="text-slate-300 font-semibold">{clamped}%</span>}
        </div>
      )}
      <div className={`w-full bg-slate-800/90 rounded-full overflow-hidden border border-slate-700/50 ${height}`}>
        <div
          className={`${height} ${color} rounded-full transition-all duration-500 ease-out`}
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;

