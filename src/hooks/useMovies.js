import { useState, useEffect, useCallback } from 'react';
import { fetchAllShows, searchShows } from '../services/tvmazeApi';

export function useMovies() {
  const [allShows, setAllShows] = useState([]);
  const [displayedShows, setDisplayedShows] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Initial fetch of all shows
  const loadInitialShows = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const shows = await fetchAllShows();
      setAllShows(shows);
      setDisplayedShows(shows);
    } catch (err) {
      setError(err.message || 'Failed to load shows. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadInitialShows();
  }, [loadInitialShows]);

  // Execute search when search query changes
  const executeSearch = useCallback(async (query) => {
    setIsLoading(true);
    setError(null);
    try {
      if (!query || !query.trim()) {
        setDisplayedShows(allShows);
      } else {
        const results = await searchShows(query);
        setDisplayedShows(results);
      }
    } catch (err) {
      setError(err.message || 'Error searching shows.');
    } finally {
      setIsLoading(false);
    }
  }, [allShows]);

  // Filter by genre
  const filteredShows = displayedShows.filter((show) => {
    if (selectedGenre === 'All') return true;
    return show.genres && show.genres.includes(selectedGenre);
  });

  // Extract all unique genres available in the current dataset
  const availableGenres = ['All', ...new Set(allShows.flatMap((s) => s.genres || []))].slice(0, 10);

  return {
    shows: filteredShows,
    totalCount: filteredShows.length,
    isLoading,
    error,
    searchQuery,
    setSearchQuery,
    executeSearch,
    selectedGenre,
    setSelectedGenre,
    availableGenres,
    retry: loadInitialShows,
  };
}
