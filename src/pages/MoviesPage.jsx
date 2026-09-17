
import { useState, useEffect } from "react";
import {
  Film,
  Filter,
  Sparkles,
  SlidersHorizontal,
  Search,
  X,
  Star,
  Layers3,
  Compass,
} from "lucide-react";

import { useMovies } from "../hooks/useMovies";
import { useDebounce } from "../hooks/useDebounce";
import { SearchBar } from "../components/movies/SearchBar";
import { MovieGrid } from "../components/movies/MovieGrid";
import { MovieDetailsModal } from "../components/movies/MovieDetailsModal";

export function MoviesPage() {
  const {
    shows,
    totalCount,
    isLoading,
    error,
    searchQuery,
    setSearchQuery,
    executeSearch,
    selectedGenre,
    setSelectedGenre,
    availableGenres,
    retry,
  } = useMovies();

  const [selectedShow, setSelectedShow] = useState(null);

  const debouncedSearchQuery = useDebounce(searchQuery, 400);

  // Search automatically after the user stops typing
  useEffect(() => {
    executeSearch(debouncedSearchQuery);
  }, [debouncedSearchQuery, executeSearch]);

  // Clear search
  const handleClearSearch = () => {
    setSearchQuery("");
  };

  // Scroll to movie results
  const handleBrowseClick = () => {
    document.getElementById("movie-results")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const isSearching = searchQuery.trim().length > 0;
  const isGenreFiltered = selectedGenre !== "All";

  const currentView = isSearching
    ? "Search Results"
    : isGenreFiltered
    ? `${selectedGenre} Collection`
    : "All Movies & Shows";

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* ==================== BACKGROUND DECORATION ==================== */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          -translate-x-1/2
          w-[650px]
          h-[380px]
          rounded-full
          bg-indigo-500/5
          dark:bg-indigo-600/10
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-[600px]
          w-[300px]
          h-[300px]
          rounded-full
          bg-cyan-500/5
          blur-3xl
        "
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* ============================================================
            PAGE HERO
        ============================================================ */}
        <section className="max-w-4xl mx-auto text-center">
          {/* Hero Badge */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              bg-indigo-50
              dark:bg-indigo-500/10
              border
              border-indigo-200
              dark:border-indigo-500/20
              text-indigo-600
              dark:text-indigo-400
              text-[11px]
              font-bold
              tracking-[0.12em]
            "
          >
            <Sparkles className="w-3.5 h-3.5" />
            EXPLORE THE COLLECTION
          </div>

          {/* Main Heading */}
          <h1
            className="
              mt-6
              text-4xl
              sm:text-5xl
              lg:text-6xl
              font-black
              tracking-tight
              leading-[1.08]
              text-slate-900
              dark:text-white
            "
          >
            Find Your Next

            <span
              className="
                block
                mt-1
                bg-gradient-to-r
                from-indigo-600
                via-violet-600
                to-cyan-500
                bg-clip-text
                text-transparent
              "
            >
              Favorite Show
            </span>
          </h1>

          {/* Hero Description */}
          <p
            className="
              max-w-2xl
              mx-auto
              mt-5
              text-sm
              sm:text-base
              leading-7
              text-slate-600
              dark:text-slate-400
            "
          >
            Search movies and TV shows, explore popular genres, and discover
            your next favorite show in one place.
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-2xl mx-auto">
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              onClear={handleClearSearch}
              placeholder="Search for a movie or TV show..."
            />
          </div>
        </section>

        {/* ============================================================
            FILTER SECTION
        ============================================================ */}
        <section className="mt-12">
          <div
            className="
              relative
              overflow-hidden
              rounded-2xl
              bg-white
              dark:bg-slate-900
              border
              border-slate-200
              dark:border-slate-800
              shadow-sm
            "
          >
            {/* Top Accent */}
            <div
              className="
                absolute
                top-0
                left-0
                right-0
                h-0.5
                bg-gradient-to-r
                from-indigo-600
                via-violet-600
                to-cyan-500
              "
            />

            <div className="p-5 sm:p-6">
              {/* Filter Header */}
              <div
                className="
                  flex
                  flex-col
                  lg:flex-row
                  lg:items-center
                  lg:justify-between
                  gap-5
                "
              >
                {/* Filter Information */}
                <div className="flex items-center gap-3">
                  <div
                    className="
                      w-11
                      h-11
                      shrink-0
                      rounded-xl
                      bg-gradient-to-br
                      from-indigo-500
                      to-violet-600
                      text-white
                      flex
                      items-center
                      justify-center
                      shadow-lg
                      shadow-indigo-500/20
                    "
                  >
                    <SlidersHorizontal className="w-5 h-5" />
                  </div>

                  <div>
                    <h2
                      className="
                        text-sm
                        sm:text-base
                        font-bold
                        text-slate-900
                        dark:text-white
                      "
                    >
                      Browse by Genre
                    </h2>

                    <p
                      className="
                        mt-1
                        text-xs
                        text-slate-500
                        dark:text-slate-400
                      "
                    >
                      Filter movies and shows by category
                    </p>
                  </div>
                </div>

                {/* Collection Summary */}
                <div
                  className="
                    flex
                    items-center
                    gap-2
                    flex-wrap
                  "
                >
                  {/* Total Titles */}
                  <div
                    className="
                      inline-flex
                      items-center
                      gap-2
                      px-3
                      py-2
                      rounded-xl
                      bg-indigo-50
                      dark:bg-indigo-500/10
                      border
                      border-indigo-100
                      dark:border-indigo-500/20
                    "
                  >
                    <Film className="w-3.5 h-3.5 text-indigo-500" />

                    <div className="flex items-center gap-1">
                      <span className="text-sm font-bold text-slate-900 dark:text-white">
                        {totalCount}
                      </span>

                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        {totalCount === 1 ? "Title" : "Titles"}
                      </span>
                    </div>
                  </div>

                  {/* Genre Count */}
                  <div
                    className="
                      inline-flex
                      items-center
                      gap-2
                      px-3
                      py-2
                      rounded-xl
                      bg-violet-50
                      dark:bg-violet-500/10
                      border
                      border-violet-100
                      dark:border-violet-500/20
                    "
                  >
                    <Layers3 className="w-3.5 h-3.5 text-violet-500" />

                    <div className="flex items-center gap-1">
                      <span className="text-sm font-bold text-slate-900 dark:text-white">
                        {availableGenres.length}
                      </span>

                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        Genres
                      </span>
                    </div>
                  </div>

                  {/* Current View */}
                  <div
                    className="
                      hidden
                      sm:inline-flex
                      items-center
                      gap-2
                      px-3
                      py-2
                      rounded-xl
                      bg-cyan-50
                      dark:bg-cyan-500/10
                      border
                      border-cyan-100
                      dark:border-cyan-500/20
                    "
                  >
                    <Compass className="w-3.5 h-3.5 text-cyan-500" />

                    <span className="text-xs font-semibold text-cyan-700 dark:text-cyan-400">
                      {currentView}
                    </span>
                  </div>
                </div>
              </div>

              {/* Genre Divider */}
              <div
                className="
                  mt-5
                  pt-4
                  border-t
                  border-slate-100
                  dark:border-slate-800
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-2
                    overflow-x-auto
                    scrollbar-none
                    pb-1
                  "
                >
                  {/* Genre Label */}
                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      mr-2
                      shrink-0
                      text-xs
                      font-bold
                      text-slate-500
                      dark:text-slate-400
                    "
                  >
                    <Filter className="w-3.5 h-3.5" />
                    Genres
                  </div>

                  {/* Genre Buttons */}
                  {availableGenres.map((genre) => {
                    const isActive = selectedGenre === genre;

                    return (
                      <button
                        key={genre}
                        type="button"
                        onClick={() => setSelectedGenre(genre)}
                        className={`
                          px-4
                          py-2
                          rounded-lg
                          text-xs
                          font-semibold
                          whitespace-nowrap
                          border
                          cursor-pointer
                          transition-all
                          duration-200

                          ${
                            isActive
                              ? `
                                bg-gradient-to-r
                                from-indigo-600
                                to-violet-600
                                border-transparent
                                text-white
                                shadow-md
                                shadow-indigo-500/20
                                scale-[1.02]
                              `
                              : `
                                bg-slate-50
                                dark:bg-slate-950
                                border-slate-200
                                dark:border-slate-800
                                text-slate-600
                                dark:text-slate-400
                                hover:border-indigo-300
                                dark:hover:border-indigo-500/40
                                hover:text-indigo-600
                                dark:hover:text-indigo-400
                                hover:bg-indigo-50
                                dark:hover:bg-indigo-500/5
                              `
                          }
                        `}
                      >
                        {genre}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            ACTIVE SEARCH / FILTER STATUS
        ============================================================ */}
        {(isSearching || isGenreFiltered) && (
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span
              className="
                text-xs
                font-semibold
                text-slate-500
                dark:text-slate-400
              "
            >
              Active filters:
            </span>

            {/* Search Status */}
            {isSearching && (
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-3
                  py-1.5
                  rounded-lg
                  bg-indigo-50
                  dark:bg-indigo-500/10
                  border
                  border-indigo-100
                  dark:border-indigo-500/20
                  text-xs
                  font-semibold
                  text-indigo-600
                  dark:text-indigo-400
                "
              >
                <Search className="w-3 h-3" />

                <span className="max-w-[220px] truncate">
                  "{searchQuery}"
                </span>

                <button
                  type="button"
                  onClick={handleClearSearch}
                  className="
                    ml-1
                    p-0.5
                    rounded
                    hover:bg-indigo-500/10
                    hover:text-red-500
                    transition-colors
                  "
                  aria-label="Clear search"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            )}

            {/* Genre Status */}
            {isGenreFiltered && (
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-3
                  py-1.5
                  rounded-lg
                  bg-violet-50
                  dark:bg-violet-500/10
                  border
                  border-violet-100
                  dark:border-violet-500/20
                  text-xs
                  font-semibold
                  text-violet-600
                  dark:text-violet-400
                "
              >
                <Film className="w-3 h-3" />
                {selectedGenre}
              </div>
            )}
          </div>
        )}

        {/* ============================================================
            MOVIE RESULTS
        ============================================================ */}
        <section
          id="movie-results"
          className="mt-10 scroll-mt-24"
        >
          {/* Results Header */}
          <div
            className="
              flex
              flex-col
              sm:flex-row
              sm:items-end
              sm:justify-between
              gap-4
              mb-7
            "
          >
            {/* Results Title */}
            <div className="flex items-center gap-3">
              <div
                className="
                  w-11
                  h-11
                  shrink-0
                  rounded-xl
                  bg-gradient-to-br
                  from-indigo-500
                  to-violet-600
                  text-white
                  flex
                  items-center
                  justify-center
                  shadow-lg
                  shadow-indigo-500/20
                "
              >
                <Film className="w-5 h-5" />
              </div>

              <div>
                <h2
                  className="
                    text-xl
                    sm:text-2xl
                    font-extrabold
                    tracking-tight
                    text-slate-900
                    dark:text-white
                  "
                >
                  {isSearching
                    ? `Results for "${searchQuery}"`
                    : isGenreFiltered
                    ? `${selectedGenre} Shows`
                    : "All Movies & Shows"}
                </h2>

                <p
                  className="
                    mt-1
                    text-xs
                    sm:text-sm
                    text-slate-500
                    dark:text-slate-400
                  "
                >
                  {isSearching
                    ? `${totalCount} matching ${
                        totalCount === 1 ? "title" : "titles"
                      } found`
                    : isGenreFiltered
                    ? `Explore our ${selectedGenre.toLowerCase()} collection`
                    : "Discover something worth watching"}
                </p>
              </div>
            </div>

            {/* Collection Status */}
            {!isLoading && !error && (
              <div
                className="
                  hidden
                  sm:inline-flex
                  items-center
                  gap-2
                  px-3
                  py-1.5
                  rounded-full
                  bg-slate-100
                  dark:bg-slate-900
                  border
                  border-slate-200
                  dark:border-slate-800
                  text-xs
                  font-semibold
                  text-slate-500
                  dark:text-slate-400
                "
              >
                <Star className="w-3 h-3 text-amber-500 fill-amber-500" />

                Curated for you
              </div>
            )}
          </div>

          {/* Movie Grid */}
          <MovieGrid
            shows={shows}
            isLoading={isLoading}
            error={error}
            onRetry={retry}
            onSelectShow={(show) => setSelectedShow(show)}
          />
        </section>

        {/* ============================================================
            MOVIE DETAILS MODAL
        ============================================================ */}
        {selectedShow && (
          <MovieDetailsModal
            show={selectedShow}
            isOpen={Boolean(selectedShow)}
            onClose={() => setSelectedShow(null)}
          />
        )}
      </div>
    </main>
  );
}
