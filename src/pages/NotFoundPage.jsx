
import { Link } from "react-router-dom";
import {
  Home,
  Compass,
  Film,
  ArrowLeft,
  SearchX,
  Sparkles,
} from "lucide-react";

import { Button } from "../components/common/Button";

export function NotFoundPage() {
  return (
    <div className="relative min-h-[75vh] overflow-hidden flex items-center justify-center px-4 py-20">

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] rounded-full bg-indigo-500/10 dark:bg-indigo-600/10 blur-3xl pointer-events-none" />

      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-violet-500/10 blur-3xl pointer-events-none" />

      <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

      {/* Main Content */}
      <div className="relative max-w-xl w-full mx-auto text-center">

        {/* Icon */}
        <div className="relative mx-auto w-24 h-24 mb-8">

          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 blur-xl" />

          <div className="relative w-24 h-24 rounded-3xl bg-white dark:bg-slate-900 border border-indigo-100 dark:border-slate-800 shadow-xl shadow-indigo-500/10 flex items-center justify-center">

            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white flex items-center justify-center shadow-lg shadow-indigo-500/30">
              <SearchX className="w-7 h-7" />
            </div>

          </div>
        </div>

        {/* 404 Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-bold tracking-[0.15em] uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          404 • Lost in the Cinema
        </div>

        {/* Heading */}
        <div className="mt-6 space-y-3">

          <h1 className="text-5xl sm:text-6xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">
              404
            </span>
          </h1>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            This Page Is Off the Screen
          </h2>

          <p className="max-w-md mx-auto text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-7">
            Looks like the page or show you're looking for has disappeared
            from our collection or the link may be incorrect.
          </p>

        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-9">

          <Link to="/" className="w-full sm:w-auto">
            <Button
              variant="primary"
              icon={Home}
              size="md"
              className="w-full sm:w-auto px-7 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 shadow-lg shadow-indigo-500/25"
            >
              Back to Home
            </Button>
          </Link>

          <Link to="/movies" className="w-full sm:w-auto">
            <Button
              variant="secondary"
              icon={Compass}
              size="md"
              className="w-full sm:w-auto px-7 border-slate-300 dark:border-slate-700 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              Explore Movies
            </Button>
          </Link>

        </div>

        {/* Back Link */}
        <button
          onClick={() => window.history.back()}
          className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Go back to previous page
        </button>

        {/* Bottom Decoration */}
        <div className="flex items-center justify-center gap-3 mt-10 text-slate-300 dark:text-slate-700">
          <div className="w-12 h-px bg-current" />
          <Film className="w-4 h-4" />
          <div className="w-12 h-px bg-current" />
        </div>

      </div>
    </div>
  );
}

