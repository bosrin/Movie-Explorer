
import { forwardRef } from "react";
import { cn } from "../../utils/cn";

export const Button = forwardRef(function Button(
  {
    children,
    variant = "primary",
    size = "md",
    className = "",
    disabled = false,
    type = "button",
    onClick,
    icon: Icon,
    ...props
  },
  ref
) {
  const baseStyles = `
    group relative
    inline-flex items-center justify-center
    font-semibold
    rounded-xl
    transition-all duration-300 ease-out
    focus:outline-none
    focus-visible:ring-2
    focus-visible:ring-indigo-500/50
    focus-visible:ring-offset-2
    dark:focus-visible:ring-offset-slate-950
    disabled:opacity-50
    disabled:cursor-not-allowed
    disabled:pointer-events-none
    active:scale-[0.97]
    cursor-pointer
    select-none
    overflow-hidden
  `;

  const variants = {
    primary: `
      text-white
      bg-gradient-to-r
      from-indigo-600
      via-violet-600
      to-cyan-500
      border border-indigo-500/30
      shadow-lg shadow-indigo-500/20
      hover:shadow-xl hover:shadow-indigo-500/30
      hover:-translate-y-0.5
      hover:from-indigo-700
      hover:via-violet-700
      hover:to-cyan-600
    `,

    secondary: `
      text-slate-800 dark:text-slate-100
      bg-slate-100 dark:bg-slate-800
      border border-slate-200 dark:border-slate-700
      shadow-sm
      hover:bg-slate-200 dark:hover:bg-slate-700
      hover:border-slate-300 dark:hover:border-slate-600
      hover:-translate-y-0.5
      hover:shadow-md
    `,

    outline: `
      text-slate-700 dark:text-slate-200
      bg-transparent
      border border-slate-300 dark:border-slate-700
      hover:text-indigo-600 dark:hover:text-indigo-400
      hover:border-indigo-500 dark:hover:border-indigo-400
      hover:bg-indigo-50/70 dark:hover:bg-indigo-500/10
      hover:-translate-y-0.5
      hover:shadow-md hover:shadow-indigo-500/10
    `,

    ghost: `
      text-slate-600 dark:text-slate-400
      bg-transparent
      border border-transparent
      hover:text-indigo-600 dark:hover:text-indigo-400
      hover:bg-indigo-50 dark:hover:bg-indigo-500/10
    `,

    danger: `
      text-white
      bg-gradient-to-r from-red-600 to-rose-600
      border border-red-500/30
      shadow-lg shadow-red-500/20
      hover:from-red-700 hover:to-rose-700
      hover:shadow-xl hover:shadow-red-500/30
      hover:-translate-y-0.5
    `,
  };

  const sizes = {
    sm: "text-xs px-3.5 py-2 gap-1.5",
    md: "text-sm px-4.5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5 font-bold",
  };

  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {/* Subtle Shine */}
      {variant === "primary" && (
        <span
          className="
            absolute inset-0
            -translate-x-full
            bg-gradient-to-r
            from-transparent
            via-white/15
            to-transparent
            group-hover:translate-x-full
            transition-transform duration-700
          "
        />
      )}

      {/* Icon */}
      {Icon && (
        <Icon
          className="
            relative z-10
            w-4 h-4
            shrink-0
            transition-transform duration-300
            group-hover:scale-110
          "
        />
      )}

      {/* Text */}
      <span className="relative z-10">
        {children}
      </span>
    </button>
  );
});

