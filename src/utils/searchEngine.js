// NOBROWSE™ - Search Engine Coordinator

import { generateRealResults } from '../data/searchResults.js';

export function executeRealSearch(query) {
  if (!query || !query.trim()) {
    return {
      query: "",
      totalResults: "0",
      searchTime: "0.01",
      results: [],
      isReal: true,
    };
  }

  return generateRealResults(query);
}
