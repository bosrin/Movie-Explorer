
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Film,
  Menu,
  X,
  Compass,
  Home,
  Sparkles,
  Play,
} from "lucide-react";

import { ThemeToggle } from "../common/ThemeToggle";
import { Button } from "../common/Button";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  const navLinkClasses = ({ isActive }) =>
    `relative group flex items-center gap-2 px-4 py-2.5 rounded-xl
    text-sm font-semibold transition-all duration-300
    ${
      isActive
        ? "text-white bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 shadow-lg shadow-indigo-500/25"
        : "text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50/80 dark:hover:bg-indigo-500/10"
    }`;

  return (
    <header
      className="
        sticky top-0 z-50 w-full
        border-b border-slate-200/70 dark:border-slate-800/70
        bg-white/80 dark:bg-slate-950/80
        backdrop-blur-2xl
        transition-all duration-300
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px] sm:h-20">

          {/* ================= LOGO ================= */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-3 group focus:outline-none"
          >
            {/* Logo Icon */}
            <div
              className="
                relative w-11 h-11 sm:w-12 sm:h-12
                rounded-2xl
                bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-500
                flex items-center justify-center
                text-white
                shadow-xl shadow-indigo-500/25
                group-hover:scale-105
                group-hover:-rotate-2
                group-hover:shadow-indigo-500/40
                transition-all duration-300
              "
            >
              {/* Glow */}
              <div
                className="
                  absolute -inset-1 rounded-2xl
                  bg-gradient-to-r from-indigo-500 to-fuchsia-500
                  opacity-0 blur-md
                  group-hover:opacity-40
                  transition-opacity duration-300
                "
              />

              <Film className="relative w-5.5 h-5.5 sm:w-6 sm:h-6" />

             
            </div>

            {/* Brand */}
            <div className="flex flex-col">
              <span
                className="
                  text-lg sm:text-xl
                  font-black tracking-tight
                  text-slate-900 dark:text-white
                  leading-none
                "
              >
                Movie
                <span
                  className="
                    ml-1
                    bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-500
                    bg-clip-text text-transparent
                  "
                >
                  Explorer
                </span>
              </span>

              <span
                className="
                  hidden sm:block
                  mt-1
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.28em]
                  text-slate-400 dark:text-slate-500
                "
              >
                Discover • Watch • Explore
              </span>
            </div>
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <nav
            className="
              hidden md:flex items-center gap-1
              p-1.5
              rounded-2xl
              bg-slate-100/70 dark:bg-slate-900/70
              border border-slate-200/60 dark:border-slate-800
            "
          >
            <NavLink to="/" className={navLinkClasses}>
              <Home className="w-4 h-4" />
              <span>Home</span>
            </NavLink>

            <NavLink to="/movies" className={navLinkClasses}>
              <Compass className="w-4 h-4" />
              <span>Movies</span>
            </NavLink>
          </nav>

          {/* ================= RIGHT ACTIONS ================= */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />

            <Link to="/movies">
              <Button
                size="sm"
                variant="primary"
                icon={Sparkles}
                className="
                  group
                  bg-gradient-to-r
                  from-indigo-600
                  via-violet-600
                  to-fuchsia-500
                  hover:from-indigo-700
                  hover:via-violet-700
                  hover:to-fuchsia-600
                  text-white
                  border-0
                  rounded-xl
                  shadow-lg
                  shadow-indigo-500/20
                  hover:shadow-xl
                  hover:shadow-violet-500/30
                  hover:-translate-y-0.5
                  transition-all duration-300
                "
              >
                <span>Explore Shows</span>
              </Button>
            </Link>
          </div>

          {/* ================= MOBILE ACTIONS ================= */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="
                relative p-2.5 rounded-xl
                text-slate-600 dark:text-slate-300
                hover:text-indigo-600 dark:hover:text-indigo-400
                hover:bg-indigo-50 dark:hover:bg-indigo-500/10
                border border-transparent
                hover:border-indigo-100 dark:hover:border-indigo-500/20
                transition-all duration-300
                focus:outline-none
              "
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {isMobileMenuOpen && (
        <div
          className="
            md:hidden
            border-t border-slate-200/70 dark:border-slate-800/70
            bg-white/95 dark:bg-slate-950/95
            backdrop-blur-2xl
            px-4 pt-4 pb-6
            shadow-2xl shadow-slate-900/10
            animate-in slide-in-from-top-2 duration-300
          "
        >
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                Navigation
              </p>

              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                Explore your next favorite show
              </p>
            </div>

            <div
              className="
                w-9 h-9 rounded-xl
                bg-indigo-50 dark:bg-indigo-500/10
                flex items-center justify-center
              "
            >
              <Film className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            </div>
          </div>

          {/* Mobile Navigation */}
          <nav className="flex flex-col gap-2">
            <NavLink
              to="/"
              onClick={closeMenu}
              className={navLinkClasses}
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </NavLink>

            <NavLink
              to="/movies"
              onClick={closeMenu}
              className={navLinkClasses}
            >
              <Compass className="w-4 h-4" />
              <span>Movies</span>
            </NavLink>
          </nav>

          {/* Mobile CTA */}
          <div
            className="
              mt-5 pt-5
              border-t border-slate-200 dark:border-slate-800
            "
          >
            <Link
              to="/movies"
              onClick={closeMenu}
              className="block w-full"
            >
              <Button
                size="md"
                variant="primary"
                icon={Sparkles}
                className="
                  w-full justify-center
                  rounded-xl
                  bg-gradient-to-r
                  from-indigo-600
                  via-violet-600
                  to-fuchsia-500
                  hover:from-indigo-700
                  hover:via-violet-700
                  hover:to-fuchsia-600
                  text-white
                  shadow-lg shadow-indigo-500/20
                  transition-all duration-300
                "
              >
                Explore Shows
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

