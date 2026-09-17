import { cn } from '../../utils/cn';

export function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default:
      'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700',
    rating:
      'bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30 font-semibold',
    genre:
      'bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20 font-medium',
    status:
      'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 font-medium',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs transition-colors',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
