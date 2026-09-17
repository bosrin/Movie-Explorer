
import { Search, X } from 'lucide-react';

export function SearchBar({
  value,
  onChange,
  onClear,
  placeholder = 'Search for a movie or show by title...',
  className = '',
}) {
  return (
    <div className={`relative w-full max-w-2xl mx-auto ${className}`}>
      {/* Search Glow */}
      <div
        className="
          absolute -inset-1
          rounded-2xl
          bg-gradient-to-r
          from-indigo-500/20
          via-violet-500/20
          to-cyan-500/20
          blur-lg
          opacity-0
          focus-within:opacity-100
          transition-opacity duration-300
          pointer-events-none
        "
      />

      <div
        className="
          relative flex items-center
          rounded-2xl
          bg-white dark:bg-slate-900
          border border-slate-200 dark:border-slate-800
          shadow-sm
          focus-within:border-indigo-500
          dark:focus-within:border-indigo-400
          focus-within:ring-4
          focus-within:ring-indigo-500/10
          transition-all duration-300
        "
      >
        {/* Search Icon */}
        <div
          className="
            absolute left-4
            pointer-events-none
            flex items-center justify-center
            text-slate-400
            dark:text-slate-500
            transition-colors duration-300
            peer-focus:text-indigo-500
          "
        >
          <Search className="w-5 h-5" />
        </div>

        {/* Input */}
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="
            peer
            w-full
            pl-12 pr-12
            py-3.5 sm:py-4
            rounded-2xl
            bg-transparent
            text-slate-900
            dark:text-white
            placeholder-slate-400
            dark:placeholder-slate-500
            text-sm sm:text-base
            font-medium
            focus:outline-none
          "
        />

        {/* Clear Button */}
        {value && (
          <button
            type="button"
            onClick={onClear}
            className="
              absolute right-3
              w-8 h-8
              flex items-center justify-center
              rounded-xl
              text-slate-400
              dark:text-slate-500
              hover:text-white
              bg-slate-100
              dark:bg-slate-800
              hover:bg-gradient-to-br
              hover:from-indigo-600
              hover:via-violet-600
              hover:to-cyan-500
              hover:shadow-md
              hover:shadow-indigo-500/20
              active:scale-90
              transition-all duration-200
            "
            aria-label="Clear search text"
          >
            <X className="w-4 h-4" />
          </button>
        )}

        {/* Bottom Accent */}
        <div
          className="
            absolute bottom-0 left-1/2
            h-0.5 w-0
            -translate-x-1/2
            rounded-full
            bg-gradient-to-r
            from-indigo-600
            via-violet-600
            to-cyan-500
            focus-within:w-full
            transition-all duration-500
          "
        />
      </div>
    </div>
  );
}
