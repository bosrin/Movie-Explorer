
import { useState } from 'react';
import {
  Star,
  Calendar,
  Eye,
  Film,
  Sparkles,
  Tv,
} from 'lucide-react';
import { formatYear, formatRating } from '../../utils/formatters';
import { Button } from '../common/Button';

export function MovieCard({ show, onSelect }) {
  const [imageError, setImageError] = useState(false);

  if (!show) return null;

  // TVMaze show object provides image.medium and image.original
  const posterUrl = show.image?.medium || show.image?.original;
  const rating = formatRating(show.rating?.average);
  const releaseYear = formatYear(show.premiered);

  const networkName =
    show.network?.name ||
    show.webChannel?.name ||
    'TVMaze';

  const showType = show.type || 'Show';

  return (
    <article
      className="
        group relative flex flex-col overflow-hidden
        rounded-2xl
        bg-white dark:bg-slate-900
        border border-slate-200/80 dark:border-slate-800
        shadow-sm
        hover:-translate-y-2
        hover:shadow-2xl
        hover:shadow-indigo-500/10
        hover:border-indigo-300
        dark:hover:border-indigo-500/40
        transition-all duration-300 ease-out
      "
    >
      {/* Premium Glow */}
      <div
        className="
          absolute -inset-px
          rounded-2xl
          bg-gradient-to-r
          from-indigo-500
          via-violet-500
          to-cyan-500
          opacity-0
          group-hover:opacity-10
          blur-sm
          transition-opacity duration-500
          pointer-events-none
        "
      />

      {/* Poster */}
      <div
        className="
          relative
          aspect-[2/3]
          w-full
          overflow-hidden
          bg-slate-100
          dark:bg-slate-800
        "
      >
        {posterUrl && !imageError ? (
          <img
            src={posterUrl}
            alt={`${show.name} poster`}
            loading="lazy"
            onError={() => setImageError(true)}
            className="
              w-full h-full
              object-cover
              group-hover:scale-110
              transition-transform duration-700 ease-out
            "
          />
        ) : (
          <div
            className="
              w-full h-full
              flex flex-col
              items-center justify-center
              p-4
              bg-gradient-to-br
              from-slate-100
              via-slate-200
              to-slate-300
              dark:from-slate-800
              dark:via-slate-900
              dark:to-slate-950
              text-slate-400
              dark:text-slate-600
            "
          >
            <div
              className="
                w-16 h-16
                rounded-2xl
                flex items-center justify-center
                bg-white/70
                dark:bg-slate-800
                border border-slate-200
                dark:border-slate-700
                shadow-sm
                mb-3
              "
            >
              <Film className="w-8 h-8 stroke-[1.5]" />
            </div>

            <span className="text-xs font-medium text-center">
              No Poster Available
            </span>
          </div>
        )}

        {/* Main Gradient Overlay */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t
            from-slate-950/90
            via-slate-950/20
            to-transparent
            opacity-80
            pointer-events-none
          "
        />

        {/* Poster Shine Effect */}
        <div
          className="
            absolute inset-y-0
            -left-full
            w-1/2
            skew-x-[-20deg]
            bg-gradient-to-r
            from-transparent
            via-white/20
            to-transparent
            group-hover:left-[140%]
            transition-all duration-1000
            pointer-events-none
          "
        />

        {/* Top Type Badge */}
        <div
          className="
            absolute
            top-3 left-3
            inline-flex items-center gap-1.5
            px-2.5 py-1.5
            rounded-full
            bg-slate-950/75
            backdrop-blur-md
            border border-white/10
            text-[10px]
            uppercase
            tracking-wider
            font-bold
            text-white
            shadow-lg
          "
        >
          <Tv className="w-3 h-3 text-cyan-400" />
          {showType}
        </div>

        {/* Rating Badge */}
        <div
          className="
            absolute
            top-3 right-3
            flex items-center gap-1.5
            px-3 py-1.5
            rounded-full
            bg-slate-950/80
            backdrop-blur-md
            border border-white/15
            text-xs
            font-bold
            text-white
            shadow-lg
          "
        >
          <Star
            className="
              w-3.5 h-3.5
              fill-amber-400
              text-amber-400
            "
          />
          <span>{rating}</span>
        </div>

        {/* Bottom Poster Information */}
        <div
          className="
            absolute
            bottom-3 left-3 right-3
            flex items-end
            justify-between
            gap-3
          "
        >
          {/* Genres */}
          {show.genres && show.genres.length > 0 ? (
            <div className="flex flex-wrap gap-1.5">
              {show.genres.slice(0, 2).map((genre) => (
                <span
                  key={genre}
                  className="
                    text-[10px]
                    uppercase
                    tracking-wider
                    font-bold
                    px-2.5 py-1
                    rounded-md
                    bg-slate-950/75
                    text-slate-100
                    backdrop-blur-md
                    border border-white/10
                  "
                >
                  {genre}
                </span>
              ))}
            </div>
          ) : (
            <span
              className="
                text-[10px]
                px-2.5 py-1
                rounded-md
                bg-slate-950/75
                text-slate-200
                backdrop-blur-md
              "
            >
              Featured
            </span>
          )}

          {/* Small Sparkle */}
          <div
            className="
              hidden sm:flex
              w-8 h-8
              shrink-0
              items-center justify-center
              rounded-full
              bg-white/10
              backdrop-blur-md
              border border-white/10
              text-cyan-300
              opacity-0
              translate-y-2
              group-hover:opacity-100
              group-hover:translate-y-0
              transition-all duration-300
            "
          >
            <Sparkles className="w-4 h-4" />
          </div>
        </div>

        {/* Hover View Layer */}
        <div
          className="
            absolute inset-0
            flex items-center justify-center
            bg-indigo-950/10
            opacity-0
            group-hover:opacity-100
            transition-opacity duration-300
            pointer-events-none
          "
        >
          <div
            className="
              w-12 h-12
              rounded-full
              flex items-center justify-center
              bg-white/15
              backdrop-blur-md
              border border-white/20
              text-white
              scale-75
              group-hover:scale-100
              transition-transform duration-300
            "
          >
            <Eye className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Card Information */}
      <div
        className="
          relative
          p-4 sm:p-5
          flex flex-col
          flex-1
          justify-between
          gap-4
        "
      >
        {/* Title + Network */}
        <div className="space-y-2.5">
          <div className="flex items-start justify-between gap-2">
            <h3
              className="
                font-bold
                text-base sm:text-lg
                leading-tight
                text-slate-900
                dark:text-white
                line-clamp-1
                group-hover:text-indigo-600
                dark:group-hover:text-cyan-400
                transition-colors duration-300
              "
              title={show.name}
            >
              {show.name}
            </h3>

            <div
              className="
                shrink-0
                w-7 h-7
                rounded-lg
                flex items-center justify-center
                bg-indigo-50
                dark:bg-indigo-500/10
                text-indigo-500
                dark:text-indigo-400
                opacity-70
                group-hover:opacity-100
                group-hover:bg-indigo-100
                dark:group-hover:bg-indigo-500/20
                transition-all duration-300
              "
            >
              <Film className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Network */}
          <div
            className="
              flex items-center gap-1.5
              text-[11px]
              font-medium
              text-slate-400
              dark:text-slate-500
              truncate
            "
          >
            <span
              className="
                w-1.5 h-1.5
                rounded-full
                bg-gradient-to-r
                from-indigo-500
                to-cyan-500
                shrink-0
              "
            />

            <span className="truncate">
              {networkName}
            </span>
          </div>

          {/* Meta */}
          <div
            className="
              flex items-center gap-3
              text-xs
              text-slate-500
              dark:text-slate-400
              font-medium
            "
          >
            <span className="flex items-center gap-1.5">
              <Calendar
                className="
                  w-3.5 h-3.5
                  text-indigo-500
                  dark:text-indigo-400
                "
              />
              {releaseYear}
            </span>

            <span className="text-slate-300 dark:text-slate-700">
              •
            </span>

            <span className="flex items-center gap-1.5">
              <Star
                className="
                  w-3.5 h-3.5
                  text-amber-500
                  fill-amber-500
                "
              />
              {rating}
            </span>
          </div>
        </div>

        {/* Action Button */}
        <Button
          onClick={() => onSelect(show)}
          variant="secondary"
          size="sm"
          aria-label={`View details for ${show.name}`}
          className="
            w-full
            justify-center
            border-slate-200
            dark:border-slate-700

            group-hover:border-transparent

            group-hover:bg-gradient-to-r
            group-hover:from-indigo-600
            group-hover:via-violet-600
            group-hover:to-cyan-500

            group-hover:text-white

            group-hover:shadow-lg
            group-hover:shadow-indigo-500/20

            active:scale-[0.98]

            transition-all duration-300
          "
          icon={Eye}
        >
          See Details
        </Button>
      </div>

      {/* Bottom Gradient Accent */}
      <div
        className="
          absolute
          bottom-0 left-0 right-0
          h-0.5
          bg-gradient-to-r
          from-indigo-600
          via-violet-600
          to-cyan-500
          scale-x-0
          group-hover:scale-x-100
          transition-transform duration-500
          origin-left
        "
      />
    </article>
  );
}

