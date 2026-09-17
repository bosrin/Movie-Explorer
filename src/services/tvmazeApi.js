const BASE_URL = 'https://api.tvmaze.com';

/**
 * Fetches all popular/available shows from TVMaze API.
 * @returns {Promise<Array>} Array of show objects
 */
export async function fetchAllShows() {
  try {
    const response = await fetch(`${BASE_URL}/shows`);
    if (!response.ok) {
      throw new Error(`Failed to fetch shows (Status: ${response.status})`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching shows from TVMaze:', error);
    throw error;
  }
}

/**
 * Searches shows by query text.
 * TVMaze returns an array of { score: number, show: Object }.
 * We normalize it to return an array of show objects.
 * @param {string} query
 * @returns {Promise<Array>} Normalized array of show objects
 */
export async function searchShows(query) {
  if (!query || !query.trim()) {
    return [];
  }

  try {
    const encodedQuery = encodeURIComponent(query.trim());
    const response = await fetch(`${BASE_URL}/search/shows?q=${encodedQuery}`);
    if (!response.ok) {
      throw new Error(`Search failed (Status: ${response.status})`);
    }
    const data = await response.json();
    // Normalize to return show objects directly
    return data.map((item) => item.show).filter(Boolean);
  } catch (error) {
    console.error(`Error searching shows for "${query}":`, error);
    throw error;
  }
}

/**
 * Fetches a single show by its ID with optional embedded cast info.
 * @param {number|string} showId
 * @returns {Promise<Object>}
 */
export async function fetchShowById(showId) {
  try {
    const response = await fetch(`${BASE_URL}/shows/${showId}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch show details (Status: ${response.status})`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching show ${showId}:`, error);
    throw error;
  }
}
