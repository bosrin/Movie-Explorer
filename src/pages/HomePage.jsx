
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Compass,
  Sparkles,
  Star,
  Zap,
  ShieldCheck,
  Film,
  ArrowRight,
  Play,
} from "lucide-react";

import { Button } from "../components/common/Button";
import { MovieCard } from "../components/movies/MovieCard";
import { MovieDetailsModal } from "../components/movies/MovieDetailsModal";
import { fetchAllShows } from "../services/tvmazeApi";

export function HomePage() {
  const [featuredShows, setFeaturedShows] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadFeatured() {
      try {
        const shows = await fetchAllShows();

        const sorted = [...shows]
          .filter((s) => s.rating?.average)
          .sort(
            (a, b) =>
              (b.rating?.average || 0) - (a.rating?.average || 0)
          )
          .slice(0, 4);

        setFeaturedShows(
          sorted.length > 0 ? sorted : shows.slice(0, 4)
        );
      } catch (err) {
        console.error("Failed to load featured shows:", err);
      } finally {
        setIsLoading(false);
      }
    }

    loadFeatured();
  }, []);

  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white">
      <div className="space-y-20 sm:space-y-28 pb-20">

        {/* ================= HERO SECTION ================= */}
        <section className="relative overflow-hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">

          {/* Background Glow */}
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-indigo-500/10 dark:bg-indigo-500/10 blur-3xl pointer-events-none" />

          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-violet-500/10 blur-3xl pointer-events-none" />

          <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 sm:pt-24 sm:pb-32">

            <div className="max-w-4xl mx-auto text-center">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-7 rounded-full border border-indigo-200 dark:border-indigo-500/30 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs sm:text-sm font-semibold shadow-sm">
                <Sparkles className="w-4 h-4" />
                <span>Your Ultimate Entertainment Discovery</span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05]">
                DISCOVER
                <span className="block mt-2 bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">
                  MOVIES & SHOWS
                </span>
              </h1>

              {/* Description */}
              <p className="mt-7 max-w-2xl mx-auto text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-8">
                Explore thousands of movies and TV shows. Discover
                highly-rated titles, check detailed information, and find
                something amazing to watch.
              </p>

              {/* Buttons */}
              <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">

                <Link to="/movies">
                  <Button
                    size="lg"
                    variant="primary"
                    icon={Compass}
                    className="w-full sm:w-auto px-8 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 shadow-lg shadow-indigo-500/25"
                  >
                    Explore Movies
                  </Button>
                </Link>

                <Link
                  to="/movies"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 font-semibold hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300"
                >
                  <Play className="w-4 h-4 fill-current" />
                  Browse Collection
                </Link>

              </div>

              {/* Small Trust Indicators */}
              <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-500 dark:text-slate-500">

                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                  Highly Rated
                </div>

                <div className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />

                <div className="flex items-center gap-2">
                  <Film className="w-4 h-4 text-indigo-500" />
                  Thousands of Shows
                </div>

                <div className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />

                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  Free Discovery
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ================= TRENDING SECTION ================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-9">

            <div>
              <div className="flex items-center gap-2 mb-2 text-indigo-600 dark:text-indigo-400 font-bold text-xs tracking-[0.15em] uppercase">
                <Star className="w-4 h-4 fill-current" />
                Featured Collection
              </div>

              <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
                Trending Shows
              </h2>

              <p className="mt-2 text-slate-500 dark:text-slate-400">
                Discover some of the highest-rated shows available right now.
              </p>
            </div>

            <Link
              to="/movies"
              className="group inline-flex items-center gap-2 text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
            >
              View all shows
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

          </div>

          {/* Featured Grid */}
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-[2/3] rounded-2xl bg-slate-200 dark:bg-slate-900 animate-pulse border border-slate-200 dark:border-slate-800"
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredShows.map((show) => (
                <MovieCard
                  key={show.id}
                  show={show}
                  onSelect={(selected) => setSelectedShow(selected)}
                />
              ))}
            </div>
          )}
        </section>

        {/* ================= FEATURES SECTION ================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-indigo-600 dark:text-indigo-400">
              Why Choose Us
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl font-black">
              Everything You Need to Discover
            </h2>

            <p className="mt-3 text-slate-500 dark:text-slate-400">
              A simple and modern way to explore your next favorite movie or
              TV show.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Feature 1 */}
            <div className="group p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-indigo-200 dark:hover:border-indigo-500/30 transition-all duration-300">

              <div className="w-13 h-13 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6" />
              </div>

              <h3 className="mt-5 font-bold text-lg">
                Fast & Smart Search
              </h3>

              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-7">
                Find your favorite titles quickly with a smooth search
                experience powered by the TVMaze catalog.
              </p>

            </div>

            {/* Feature 2 */}
            <div className="group p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-violet-200 dark:hover:border-violet-500/30 transition-all duration-300">

              <div className="w-13 h-13 rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Film className="w-6 h-6" />
              </div>

              <h3 className="mt-5 font-bold text-lg">
                Detailed Information
              </h3>

              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-7">
                Explore cast, networks, runtime, ratings, release information,
                and detailed descriptions in one place.
              </p>

            </div>

            {/* Feature 3 */}
            <div className="group p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-emerald-200 dark:hover:border-emerald-500/30 transition-all duration-300">

              <div className="w-13 h-13 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck className="w-6 h-6" />
              </div>

              <h3 className="mt-5 font-bold text-lg">
                Modern Experience
              </h3>

              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-7">
                Enjoy a clean responsive interface with seamless light and
                dark mode support across devices.
              </p>

            </div>

          </div>
        </section>

        {/* ================= CTA SECTION ================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-700 px-6 py-14 sm:px-12 sm:py-16 text-center text-white shadow-2xl shadow-indigo-500/20">

            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative">

              <Sparkles className="w-8 h-8 mx-auto mb-5 text-indigo-200" />

              <h2 className="text-2xl sm:text-4xl font-black">
                Ready to Find Your Next Favorite?
              </h2>

              <p className="mt-4 max-w-xl mx-auto text-indigo-100 leading-7">
                Explore our collection and discover movies and shows worth
                adding to your watchlist.
              </p>

              <Link
                to="/movies"
                className="inline-flex items-center gap-2 mt-7 px-7 py-3.5 rounded-xl bg-white text-indigo-700 font-bold hover:bg-indigo-50 shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                Explore Collection
                <ArrowRight className="w-4 h-4" />
              </Link>

            </div>
          </div>
        </section>

        {/* ================= DETAILS MODAL ================= */}
        {selectedShow && (
          <MovieDetailsModal
            show={selectedShow}
            isOpen={Boolean(selectedShow)}
            onClose={() => setSelectedShow(null)}
          />
        )}

      </div>
    </div>
  );
}

