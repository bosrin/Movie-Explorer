
import { Film, AlertCircle, RefreshCw, Search } from 'lucide-react';
import { MovieCard } from './MovieCard';
import { Button } from '../common/Button';

export function MovieGrid({
  shows,
  isLoading,
  error,
  onRetry,
  onSelectShow,
}) {
  // ==================== ERROR STATE ====================
  if (error) {
    return (
      <div
        className="
          w-full
          py-20 px-4
          flex flex-col items-center justify-center
          text-center
        "
      >
        {/* Error Icon */}
        <div className="relative mb-6">
          <div
            className="
              absolute inset-0
              rounded-2xl
              bg-indigo-500/10
              blur-xl
            "
          />

          <div
            className="
              relative
              w-20 h-20
              rounded-2xl
              flex items-center justify-center
              bg-gradient-to-br
              from-indigo-500/10
              via-violet-500/10
              to-cyan-500/10
              text-indigo-500
              dark:text-indigo-400
              border border-indigo-500/20
              shadow-lg shadow-indigo-500/5
            "
          >
            <AlertCircle className="w-9 h-9" />
          </div>
        </div>

        {/* Error Content */}
        <span
          className="
            inline-flex items-center
            px-3 py-1
            mb-3
            rounded-full
            bg-indigo-500/10
            border border-indigo-500/20
            text-[10px]
            uppercase
            tracking-wider
            font-bold
            text-indigo-600
            dark:text-indigo-400
          "
        >
          Something went wrong
        </span>

        <h3
          className="
            text-xl sm:text-2xl
            font-bold
            text-slate-900 dark:text-white
            mb-2
          "
        >
          Unable to Load Shows
        </h3>

        <p
          className="
            text-sm
            text-slate-600 dark:text-slate-400
            max-w-md
            leading-relaxed
            mb-6
          "
        >
          {error}
        </p>

        {onRetry && (
          <Button
            onClick={onRetry}
            variant="primary"
            icon={RefreshCw}
            className="
              shadow-lg
              shadow-indigo-500/20
            "
          >
            Try Again
          </Button>
        )}
      </div>
    );
  }

  // ==================== LOADING SKELETON ====================
  if (isLoading) {
    return (
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-5 sm:gap-6
        "
      >
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="
              relative
              flex flex-col
              overflow-hidden
              rounded-2xl
              bg-white dark:bg-slate-900
              border border-slate-200 dark:border-slate-800
              shadow-sm
              animate-pulse
            "
          >
            {/* Poster Skeleton */}
            <div
              className="
                relative
                aspect-[2/3]
                w-full
                bg-gradient-to-br
                from-slate-200
                via-slate-100
                to-slate-200
                dark:from-slate-800
                dark:via-slate-900
                dark:to-slate-800
              "
            >
              {/* Shimmer */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-r
                  from-transparent
                  via-white/30
                  to-transparent
                  -translate-x-full
                  animate-[shimmer_2s_infinite]
                  dark:via-white/5
                "
              />

              {/* Rating Skeleton */}
              <div
                className="
                  absolute top-3 right-3
                  w-14 h-6
                  rounded-full
                  bg-slate-300
                  dark:bg-slate-700
                "
              />

              {/* Genre Skeleton */}
              <div
                className="
                  absolute bottom-3 left-3
                  w-16 h-5
                  rounded-md
                  bg-slate-300
                  dark:bg-slate-700
                "
              />
            </div>

            {/* Content Skeleton */}
            <div className="p-4 sm:p-5 space-y-4">
              {/* Title */}
              <div
                className="
                  h-5
                  bg-slate-200 dark:bg-slate-800
                  rounded-lg
                  w-3/4
                "
              />

              {/* Meta */}
              <div className="flex gap-3">
                <div
                  className="
                    h-3.5
                    bg-slate-200 dark:bg-slate-800
                    rounded
                    w-16
                  "
                />

                <div
                  className="
                    h-3.5
                    bg-slate-200 dark:bg-slate-800
                    rounded
                    w-12
                  "
                />
              </div>

              {/* Bottom Line */}
              <div
                className="
                  h-1
                  w-1/3
                  rounded-full
                  bg-gradient-to-r
                  from-indigo-200
                  via-violet-200
                  to-cyan-200
                  dark:from-indigo-900
                  dark:via-violet-900
                  dark:to-cyan-900
                "
              />
            </div>
          </div>
        ))}
      </div>
    );
  }

  // ==================== EMPTY STATE ====================
  if (!shows || shows.length === 0) {
    return (
      <div
        className="
          w-full
          py-20 px-4
          flex flex-col items-center justify-center
          text-center
        "
      >
        {/* Empty Icon */}
        <div className="relative mb-6">
          <div
            className="
              absolute inset-0
              rounded-2xl
              bg-violet-500/10
              blur-xl
            "
          />

          <div
            className="
              relative
              w-20 h-20
              rounded-2xl
              flex items-center justify-center
              bg-gradient-to-br
              from-indigo-500/10
              via-violet-500/10
              to-cyan-500/10
              text-slate-400
              dark:text-slate-500
              border border-slate-200
              dark:border-slate-700
            "
          >
            <Search className="w-9 h-9" />
          </div>
        </div>

        {/* Empty Label */}
        <span
          className="
            inline-flex items-center
            px-3 py-1
            mb-3
            rounded-full
            bg-slate-100 dark:bg-slate-800
            border border-slate-200 dark:border-slate-700
            text-[10px]
            uppercase
            tracking-wider
            font-bold
            text-slate-500 dark:text-slate-400
          "
        >
          No Results
        </span>

        <h3
          className="
            text-xl sm:text-2xl
            font-bold
            text-slate-900 dark:text-white
            mb-2
          "
        >
          No Shows Found
        </h3>

        <p
          className="
            text-sm
            text-slate-600 dark:text-slate-400
            max-w-md
            leading-relaxed
          "
        >
          We couldn't find any shows matching your criteria. Try
          adjusting your search query or selecting a different genre.
        </p>
      </div>
    );
  }

  // ==================== SHOWS GRID ====================
  return (
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-5 sm:gap-6
      "
    >
      {shows.map((show) => (
        <MovieCard
          key={show.id}
          show={show}
          onSelect={onSelectShow}
        />
      ))}
    </div>
  );
}
