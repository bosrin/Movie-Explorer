
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

export function ThemeToggle({ className = "" }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={
        isDark ? "Switch to light mode" : "Switch to dark mode"
      }
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`
        group
        relative
        w-11 h-11
        flex items-center justify-center
        rounded-xl
        border
        transition-all duration-300
        cursor-pointer
        overflow-hidden

        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-indigo-500/50

        ${
          isDark
            ? `
              bg-slate-900/80
              border-slate-700/80
              text-cyan-400
              shadow-lg shadow-black/20

              hover:bg-slate-800
              hover:border-indigo-500/40
              hover:shadow-lg hover:shadow-indigo-500/10
              hover:-translate-y-0.5
            `
            : `
              bg-white
              border-slate-200
              text-indigo-600
              shadow-sm

              hover:bg-indigo-50
              hover:border-indigo-200
              hover:shadow-md hover:shadow-indigo-500/10
              hover:-translate-y-0.5
            `
        }

        ${className}
      `}
    >
      {/* Background Glow */}
      <span
        className={`
          absolute inset-0
          rounded-xl
          opacity-0
          group-hover:opacity-100
          transition-opacity duration-300

          ${
            isDark
              ? "bg-gradient-to-br from-indigo-500/10 via-violet-500/10 to-cyan-500/10"
              : "bg-gradient-to-br from-indigo-50 via-violet-50 to-cyan-50"
          }
        `}
      />

      {/* Icon */}
      <span className="relative w-5 h-5 flex items-center justify-center">
        {isDark ? (
          <Sun
            className="
              w-5 h-5
              text-cyan-400
              transition-all duration-500
              group-hover:rotate-90
              group-hover:scale-110
            "
          />
        ) : (
          <Moon
            className="
              w-5 h-5
              text-indigo-600
              transition-all duration-500
              group-hover:-rotate-12
              group-hover:scale-110
            "
          />
        )}
      </span>

      {/* Small Accent */}
      <span
        className={`
          absolute
          bottom-1
          left-1/2
          -translate-x-1/2
          w-1 h-1
          rounded-full
          transition-all duration-300
          group-hover:w-3

          ${
            isDark
              ? "bg-cyan-400"
              : "bg-indigo-500"
          }
        `}
      />
    </button>
  );
}

