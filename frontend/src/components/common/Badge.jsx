import React from 'react';

const colorStyles = {
  indigo: 'bg-indigo-500/15 text-indigo-400 border-indigo-500/30',
  emerald: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  amber: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
  rose: 'bg-rose-500/15 text-rose-400 border-rose-500/30',
  cyan: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30',
  purple: 'bg-purple-500/15 text-purple-400 border-purple-500/30',
  slate: 'bg-slate-700/50 text-slate-300 border-slate-600/40',
};

export const Badge = ({ children, color = 'indigo', size = 'sm', className = '' }) => {
  const sizeClass = size === 'xs' 
    ? 'px-2 py-0.5 text-xs' 
    : size === 'md' 
    ? 'px-3 py-1 text-sm' 
    : 'px-2.5 py-0.5 text-xs';

  const style = colorStyles[color] || colorStyles.indigo;

  return (
    <span className={`inline-flex items-center font-medium rounded-full border ${sizeClass} ${style} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;

