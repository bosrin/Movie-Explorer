/**
 * Strips HTML tags from strings (e.g. <p>, <b> from TVMaze summaries).
 * @param {string} html
 * @returns {string}
 */
export function stripHtmlTags(html) {
  if (!html) return 'No description available for this show.';
  // Remove HTML tags using DOMParser if in browser, or clean regex
  return html.replace(/<[^>]*>?/gm, '').trim();
}

/**
 * Extracts the 4-digit release year from a date string (e.g. "2016-07-15" -> "2016").
 * @param {string} dateString
 * @returns {string}
 */
export function formatYear(dateString) {
  if (!dateString) return 'N/A';
  const year = new Date(dateString).getFullYear();
  return isNaN(year) ? 'N/A' : String(year);
}

/**
 * Formats average rating score to 1 decimal place or N/A.
 * @param {number|null} rating
 * @returns {string}
 */
export function formatRating(rating) {
  if (rating === null || rating === undefined) return 'N/A';
  return Number(rating).toFixed(1);
}

/**
 * Formats show runtime in minutes into human readable text (e.g. 60 min).
 * @param {number|null} minutes
 * @returns {string}
 */
export function formatRuntime(minutes) {
  if (!minutes) return null;
  if (minutes < 60) return `${minutes}m`;
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return remainingMinutes > 0 ? `${hours}h ${remainingMinutes}m` : `${hours}h`;
}
