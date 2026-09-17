
import { Film, Globe, Heart, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function Footer() {
  return (
    <footer
      className="
        relative mt-auto overflow-hidden
        border-t border-slate-200/70 dark:border-slate-800/80
        bg-slate-50/90 dark:bg-slate-950
        transition-colors duration-300
      "
    >
      {/* Decorative Glow */}
      <div
        className="
          absolute -top-32 left-1/2 -translate-x-1/2
          w-[500px] h-[250px]
          bg-indigo-500/10 dark:bg-indigo-500/10
          blur-3xl rounded-full
          pointer-events-none
        "
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= MAIN FOOTER ================= */}
        <div className="py-12 lg:py-14 grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-14">

          {/* Brand */}
          <div className="md:col-span-2">

            <Link
              to="/"
              className="inline-flex items-center gap-3 group"
            >
              {/* Logo */}
             
{/* Logo */}
<div
  className="
    relative w-11 h-11
    rounded-xl
    bg-gradient-to-br from-indigo-600 via-violet-600 to-cyan-500
    flex items-center justify-center
    text-white
    shadow-lg shadow-indigo-500/25
    group-hover:scale-105
    group-hover:-rotate-2
    group-hover:shadow-indigo-500/40
    transition-all duration-300
  "
>
  <Film className="w-5 h-5" />

  {/* Glow */}
  <div
    className="
      absolute inset-0 rounded-xl
      bg-white/10
      opacity-0
      group-hover:opacity-100
      transition-opacity duration-300
    "
  />
</div>



              {/* Brand Name */}
              <div>
                <span
                  className="
                    block text-xl font-black tracking-tight
                    text-slate-900 dark:text-white
                  "
                >
                  Movie
                  <span
                    className="
                      ml-1
                      bg-gradient-to-r
                      from-indigo-600
                      via-violet-600
                      to-cyan-500
                      bg-clip-text text-transparent
                    "
                  >
                    Explorer
                  </span>
                </span>

                <span
                  className="
                    block mt-0.5
                    text-[8px] font-bold uppercase
                    tracking-[0.25em]
                    text-slate-400 dark:text-slate-500
                  "
                >
                  Discover • Watch • Explore
                </span>
              </div>
            </Link>

            <p
              className="
                mt-5 max-w-md
                text-sm leading-7
                text-slate-600 dark:text-slate-400
              "
            >
              Discover, browse, and explore thousands of movies and TV shows
              from around the world with detailed information, ratings, and
              instant metadata.
            </p>

            {/* Mini Feature Pills */}
            <div className="flex flex-wrap gap-2 mt-5">
              <span
                className="
                  px-3 py-1.5 rounded-full
                  text-xs font-semibold
                  text-indigo-600 dark:text-indigo-400
                  bg-indigo-50 dark:bg-indigo-500/10
                  border border-indigo-100 dark:border-indigo-500/20
                "
              >
                🎬 Movies
              </span>

              <span
                className="
                  px-3 py-1.5 rounded-full
                  text-xs font-semibold
                  text-violet-600 dark:text-violet-400
                  bg-violet-50 dark:bg-violet-500/10
                  border border-violet-100 dark:border-violet-500/20
                "
              >
                ⭐ Ratings
              </span>

              <span
                className="
                  px-3 py-1.5 rounded-full
                  text-xs font-semibold
                  text-cyan-600 dark:text-cyan-400
                  bg-cyan-50 dark:bg-cyan-500/10
                  border border-cyan-100 dark:border-cyan-500/20
                "
              >
                🌎 Explore
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="
                mb-5 text-xs font-bold uppercase
                tracking-[0.18em]
                text-slate-900 dark:text-slate-200
              "
            >
              Navigation
            </h4>

            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="
                    group inline-flex items-center gap-2
                    text-sm text-slate-600 dark:text-slate-400
                    hover:text-indigo-600 dark:hover:text-indigo-400
                    transition-colors duration-200
                  "
                >
                  <HomeIcon />
                  Home
                  <ArrowUpRight
                    className="
                      w-3.5 h-3.5 opacity-0
                      -translate-y-0.5 -translate-x-1
                      group-hover:opacity-100
                      group-hover:translate-x-0
                      transition-all duration-200
                    "
                  />
                </Link>
              </li>

              <li>
                <Link
                  to="/movies"
                  className="
                    group inline-flex items-center gap-2
                    text-sm text-slate-600 dark:text-slate-400
                    hover:text-indigo-600 dark:hover:text-indigo-400
                    transition-colors duration-200
                  "
                >
                  <Film className="w-4 h-4" />
                  Browse Movies & Shows
                  <ArrowUpRight
                    className="
                      w-3.5 h-3.5 opacity-0
                      -translate-y-0.5 -translate-x-1
                      group-hover:opacity-100
                      group-hover:translate-x-0
                      transition-all duration-200
                    "
                  />
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4
              className="
                mb-5 text-xs font-bold uppercase
                tracking-[0.18em]
                text-slate-900 dark:text-slate-200
              "
            >
              Resources
            </h4>

            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.tvmaze.com/api"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    group inline-flex items-center gap-2
                    text-sm text-slate-600 dark:text-slate-400
                    hover:text-indigo-600 dark:hover:text-indigo-400
                    transition-colors duration-200
                  "
                >
                  <Globe className="w-4 h-4" />
                  TVMaze API
                  <ArrowUpRight
                    className="
                      w-3.5 h-3.5 opacity-0
                      group-hover:opacity-100
                      transition-all duration-200
                    "
                  />
                </a>
              </li>

              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    group inline-flex items-center gap-2
                    text-sm text-slate-600 dark:text-slate-400
                    hover:text-indigo-600 dark:hover:text-indigo-400
                    transition-colors duration-200
                  "
                >
                  <GithubIcon />
                  GitHub Repository
                  <ArrowUpRight
                    className="
                      w-3.5 h-3.5 opacity-0
                      group-hover:opacity-100
                      transition-all duration-200
                    "
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div
          className="
            py-5
            border-t border-slate-200/80 dark:border-slate-800/80
            flex flex-col sm:flex-row
            items-center justify-between
            gap-3
            text-xs
            text-slate-500 dark:text-slate-400
          "
        >
          <p className="text-center sm:text-left">
            © 2026 MovieExplorer. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5">
            Crafted with
            <Heart
              className="
                w-3.5 h-3.5
                text-indigo-500
                fill-indigo-500
                animate-pulse
              "
            />
            using
            <span className="font-semibold text-slate-700 dark:text-slate-300">
              React
            </span>
            &
            <span className="font-semibold text-slate-700 dark:text-slate-300">
              Tailwind CSS
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

/* Small Home Icon */
function HomeIcon() {
  return (
    <svg
      className="w-4 h-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

