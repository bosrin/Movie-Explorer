
import {
  Star,
  Calendar,
  Clock,
  Globe,
  Film,
  X,
  Languages,
  MapPin,
} from 'lucide-react';
import { Modal } from '../common/Modal';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import {
  formatYear,
  formatRating,
  formatRuntime,
  stripHtmlTags,
} from '../../utils/formatters';

export function MovieDetailsModal({ show, isOpen, onClose }) {
  if (!show) return null;

  const backdropImage = show.image?.original || show.image?.medium;
  const rating = formatRating(show.rating?.average);
  const releaseYear = formatYear(show.premiered);
  const runtime = formatRuntime(show.averageRuntime || show.runtime);
  const summaryText = stripHtmlTags(show.summary);
  const networkName =
    show.network?.name || show.webChannel?.name || 'Unknown Network';

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={show.name}
      maxWidth="max-w-4xl"
    >
      <div className="flex flex-col gap-6">
        {/* ==================== HERO BACKDROP ==================== */}
        <div
          className="
            group relative
            w-full
            h-64 sm:h-80 md:h-96
            rounded-2xl
            overflow-hidden
            bg-slate-100 dark:bg-slate-800
            border border-slate-200/60 dark:border-slate-700
            shadow-xl
          "
        >
          {backdropImage ? (
            <img
              src={backdropImage}
              alt={`${show.name} backdrop`}
              className="
                w-full h-full
                object-cover object-center
                transition-transform duration-700
                group-hover:scale-105
              "
            />
          ) : (
            <div
              className="
                w-full h-full
                flex flex-col items-center justify-center
                bg-gradient-to-br
                from-slate-100 via-slate-200 to-slate-300
                dark:from-slate-800 dark:via-slate-900 dark:to-slate-950
                text-slate-400 dark:text-slate-600
              "
            >
              <div
                className="
                  w-20 h-20
                  rounded-2xl
                  flex items-center justify-center
                  bg-slate-200 dark:bg-slate-800
                  border border-slate-300 dark:border-slate-700
                  mb-3
                "
              >
                <Film className="w-10 h-10 stroke-[1.5]" />
              </div>

              <p className="text-sm font-medium">
                No Preview Backdrop
              </p>
            </div>
          )}

          {/* Dark Gradient */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-t
              from-slate-950
              via-slate-950/50
              to-transparent
            "
          />

          {/* Top Gradient Glow */}
          <div
            className="
              absolute inset-x-0 top-0 h-24
              bg-gradient-to-b
              from-indigo-600/20
              to-transparent
              pointer-events-none
            "
          />

          {/* Hero Content */}
          <div
            className="
              absolute bottom-0 left-0 right-0
              p-5 sm:p-7
            "
          >
            {/* Type */}
            {show.type && (
              <span
                className="
                  inline-flex items-center
                  px-2.5 py-1
                  mb-3
                  rounded-full
                  bg-white/10
                  backdrop-blur-md
                  border border-white/15
                  text-[10px] sm:text-xs
                  uppercase tracking-wider
                  font-bold
                  text-white
                "
              >
                {show.type}
              </span>
            )}

            <h1
              className="
                text-2xl sm:text-3xl md:text-4xl
                font-extrabold
                tracking-tight
                text-white
                drop-shadow-lg
              "
            >
              {show.name}
            </h1>

            <p
              className="
                flex items-center gap-2
                mt-2
                text-xs sm:text-sm
                text-slate-300
                font-medium
              "
            >
              <Film className="w-4 h-4 text-cyan-400" />
              {networkName}
            </p>
          </div>
        </div>

        {/* ==================== QUICK INFO ==================== */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {/* Rating */}
          <div
            className="
              flex items-center gap-2.5
              p-3
              rounded-xl
              bg-amber-500/10
              border border-amber-500/20
            "
          >
            <div
              className="
                w-9 h-9
                shrink-0
                rounded-lg
                flex items-center justify-center
                bg-amber-500/15
              "
            >
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            </div>

            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">
                Rating
              </p>
              <p className="text-sm font-bold text-amber-600 dark:text-amber-400">
                {rating}
              </p>
            </div>
          </div>

          {/* Release */}
          <div
            className="
              flex items-center gap-2.5
              p-3
              rounded-xl
              bg-indigo-500/10
              border border-indigo-500/20
            "
          >
            <div
              className="
                w-9 h-9
                shrink-0
                rounded-lg
                flex items-center justify-center
                bg-indigo-500/15
              "
            >
              <Calendar className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
            </div>

            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">
                Release
              </p>
              <p className="text-sm font-bold text-slate-800 dark:text-slate-200">
                {releaseYear}
              </p>
            </div>
          </div>

          {/* Runtime */}
          {runtime ? (
            <div
              className="
                flex items-center gap-2.5
                p-3
                rounded-xl
                bg-violet-500/10
                border border-violet-500/20
              "
            >
              <div
                className="
                  w-9 h-9
                  shrink-0
                  rounded-lg
                  flex items-center justify-center
                  bg-violet-500/15
                "
              >
                <Clock className="w-4 h-4 text-violet-500 dark:text-violet-400" />
              </div>

              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">
                  Runtime
                </p>
                <p className="text-sm font-bold text-slate-800 dark:text-slate-200">
                  {runtime}
                </p>
              </div>
            </div>
          ) : (
            <div
              className="
                flex items-center gap-2.5
                p-3
                rounded-xl
                bg-slate-100 dark:bg-slate-800
                border border-slate-200 dark:border-slate-700
              "
            >
              <div
                className="
                  w-9 h-9
                  shrink-0
                  rounded-lg
                  flex items-center justify-center
                  bg-slate-200 dark:bg-slate-700
                "
              >
                <Clock className="w-4 h-4 text-slate-400" />
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">
                  Runtime
                </p>
                <p className="text-sm font-bold text-slate-500 dark:text-slate-400">
                  N/A
                </p>
              </div>
            </div>
          )}

          {/* Status */}
          <div
            className="
              flex items-center gap-2.5
              p-3
              rounded-xl
              bg-cyan-500/10
              border border-cyan-500/20
            "
          >
            <div
              className="
                w-9 h-9
                shrink-0
                rounded-lg
                flex items-center justify-center
                bg-cyan-500/15
              "
            >
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-lg shadow-cyan-500/50" />
            </div>

            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">
                Status
              </p>

              <p className="text-sm font-bold text-slate-800 dark:text-slate-200 truncate">
                {show.status || 'Unknown'}
              </p>
            </div>
          </div>
        </div>

        {/* ==================== GENRES ==================== */}
        {show.genres && show.genres.length > 0 && (
          <div
            className="
              p-4
              rounded-xl
              bg-slate-50 dark:bg-slate-800/50
              border border-slate-200 dark:border-slate-700
            "
          >
            <div className="flex items-center justify-between mb-3">
              <h3
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-wider
                  text-slate-500 dark:text-slate-400
                "
              >
                Genres
              </h3>

              <span className="text-[10px] font-medium text-slate-400">
                {show.genres.length} categories
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {show.genres.map((genre) => (
                <Badge
                  key={genre}
                  variant="genre"
                  className="
                    text-xs
                    px-3 py-1.5
                    border
                    border-indigo-200
                    dark:border-indigo-500/20
                  "
                >
                  {genre}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* ==================== OVERVIEW ==================== */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div
              className="
                w-1 h-5
                rounded-full
                bg-gradient-to-b
                from-indigo-500
                via-violet-500
                to-cyan-500
              "
            />

            <h3
              className="
                text-sm
                font-bold
                uppercase
                tracking-wider
                text-slate-900 dark:text-white
              "
            >
              Overview / Synopsis
            </h3>
          </div>

          <div
            className="
              relative
              p-4 sm:p-5
              rounded-xl
              bg-slate-50 dark:bg-slate-800/40
              border border-slate-200/80 dark:border-slate-800
              overflow-hidden
            "
          >
            {/* Decorative Gradient */}
            <div
              className="
                absolute top-0 right-0
                w-32 h-32
                rounded-full
                bg-indigo-500/5
                blur-3xl
                pointer-events-none
              "
            />

            <p
              className="
                relative
                text-sm sm:text-base
                text-slate-600 dark:text-slate-300
                leading-7
              "
            >
              {summaryText || 'No synopsis available for this show.'}
            </p>
          </div>
        </div>

        {/* ==================== ADDITIONAL INFORMATION ==================== */}
        <div className="space-y-3">
          <h3
            className="
              text-xs
              font-bold
              uppercase
              tracking-wider
              text-slate-500 dark:text-slate-400
            "
          >
            Additional Information
          </h3>

          <div
            className="
              grid grid-cols-1 sm:grid-cols-3
              gap-px
              overflow-hidden
              rounded-xl
              border border-slate-200 dark:border-slate-700
              bg-slate-200 dark:bg-slate-700
            "
          >
            {/* Language */}
            <div
              className="
                p-4
                bg-white dark:bg-slate-900
                hover:bg-slate-50 dark:hover:bg-slate-800
                transition-colors
              "
            >
              <div className="flex items-center gap-2 mb-2">
                <Languages className="w-4 h-4 text-indigo-500" />
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  Language
                </span>
              </div>

              <p className="text-sm font-bold text-slate-900 dark:text-white">
                {show.language || 'English'}
              </p>
            </div>

            {/* Premiered */}
            <div
              className="
                p-4
                bg-white dark:bg-slate-900
                hover:bg-slate-50 dark:hover:bg-slate-800
                transition-colors
              "
            >
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-4 h-4 text-violet-500" />
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  Premiered
                </span>
              </div>

              <p className="text-sm font-bold text-slate-900 dark:text-white">
                {show.premiered || 'N/A'}
              </p>
            </div>

            {/* Country */}
            <div
              className="
                p-4
                bg-white dark:bg-slate-900
                hover:bg-slate-50 dark:hover:bg-slate-800
                transition-colors
              "
            >
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-cyan-500" />
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  Country
                </span>
              </div>

              <p className="text-sm font-bold text-slate-900 dark:text-white">
                {show.network?.country?.name ||
                  show.webChannel?.country?.name ||
                  'Worldwide'}
              </p>
            </div>
          </div>
        </div>

        {/* ==================== ACTIONS ==================== */}
        <div
          className="
            flex flex-col-reverse sm:flex-row
            items-center justify-between
            gap-3
            border-t border-slate-200 dark:border-slate-800
            pt-5
          "
        >
          {show.officialSite ? (
            <a
              href={show.officialSite}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                variant="outline"
                size="sm"
                icon={Globe}
                className="
                  w-full sm:w-auto
                  border-indigo-200
                  dark:border-indigo-500/30
                  hover:border-indigo-500
                  hover:text-indigo-600
                  dark:hover:text-indigo-400
                "
              >
                Visit Official Site
              </Button>
            </a>
          ) : (
            <div />
          )}

          <Button
            variant="secondary"
            size="md"
            onClick={onClose}
            icon={X}
            className="
              w-full sm:w-auto
              min-w-28
              px-6
              hover:bg-slate-200
              dark:hover:bg-slate-700
            "
          >
            Close
          </Button>
        </div>

        {/* Bottom Accent */}
        <div
          className="
            h-1
            -mx-1
            rounded-full
            bg-gradient-to-r
            from-indigo-600
            via-violet-600
            to-cyan-500
          "
        />
      </div>
    </Modal>
  );
}
