// NOBROWSE™ - LocalStorage Manager

const STORAGE_KEYS = {
  HISTORY: 'nobrowse_history_v1',
  BOOKMARKS: 'nobrowse_bookmarks_v1',
  STATS: 'nobrowse_stats_v1',
  SETTINGS: 'nobrowse_settings_v1',
};

const DEFAULT_SETTINGS = {
  soundEnabled: true,
  volume: 0.5,
  reducedMotion: false,
  forceMode: 'random', // 'random' (40/60), 'real', 'chaos'
};

const DEFAULT_STATS = {
  totalSearches: 0,
  usefulSearches: 0,
  chaosSearches: 0,
  fourOhFourCount: 0,
  wrongSearchCount: 0,
  fakeErrorCount: 0,
  infiniteLoadCount: 0,
  offlineCount: 0,
  aiConfusionCount: 0,
  didYouMeanCount: 0,
  uselessAnswerCount: 0,
  unrelatedCount: 0,
  memeCount: 0,
  easterEggCount: 0,
  sessionSearches: 0,
  sessionStartTime: Date.now(),
};

// Safe JSON parse
function safeGet(key, defaultValue) {
  try {
    const val = localStorage.getItem(key);
    if (!val) return defaultValue;
    return JSON.parse(val);
  } catch {
    return defaultValue;
  }
}

function safeSet(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.warn('[NOBROWSE] Failed to write to localStorage:', e);
  }
}

// ----------------- HISTORY -----------------
export function getHistory() {
  return safeGet(STORAGE_KEYS.HISTORY, []);
}

export function addHistoryItem({ query, type, title, url }) {
  const history = getHistory();
  const newItem = {
    id: 'hist_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
    query,
    type, // 'REAL SEARCH' | '404' | 'WRONG SEARCH' | 'CHAOS' | 'EASTER EGG' etc.
    title: title || query,
    url: url || `nobrowse://search?q=${encodeURIComponent(query)}`,
    timestamp: Date.now(),
  };
  // Prepend, keep max 200 items
  const updated = [newItem, ...history.filter(h => h.query.toLowerCase() !== query.toLowerCase())].slice(0, 200);
  safeSet(STORAGE_KEYS.HISTORY, updated);
  return updated;
}

export function removeHistoryItem(id) {
  const history = getHistory().filter(item => item.id !== id);
  safeSet(STORAGE_KEYS.HISTORY, history);
  return history;
}

export function clearHistory() {
  safeSet(STORAGE_KEYS.HISTORY, []);
  return [];
}

// ----------------- BOOKMARKS -----------------
export function getBookmarks() {
  const defaultBookmarks = [
    {
      id: 'bm_react',
      title: 'React Documentation',
      url: 'https://react.dev',
      query: 'React tutorial',
      domain: 'react.dev',
      category: 'Tech',
      timestamp: Date.now() - 3600000 * 24,
    },
    {
      id: 'bm_duck',
      title: 'The AI Duck Oracle',
      url: 'nobrowse://duck-ai',
      query: 'what is consciousness',
      domain: 'duck.oracle',
      category: 'Wisdom',
      timestamp: Date.now() - 3600000 * 12,
    },
    {
      id: 'bm_pizza',
      title: 'Top 10 Pizzas Rated by Pigeons',
      url: 'nobrowse://pizza-pigeons',
      query: 'best food',
      domain: 'crustpigeons.net',
      category: 'Gastronomy',
      timestamp: Date.now() - 3600000 * 4,
    },
    {
      id: 'bm_snakes',
      title: 'Burmese Python Care & Ethics',
      url: 'nobrowse://python-snakes',
      query: 'Python tutorial',
      domain: 'reptiles.wild',
      category: 'Biology',
      timestamp: Date.now() - 3600000 * 2,
    }
  ];
  return safeGet(STORAGE_KEYS.BOOKMARKS, defaultBookmarks);
}

export function addBookmark(bookmark) {
  const bookmarks = getBookmarks();
  const newItem = {
    id: 'bm_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
    title: bookmark.title || bookmark.query || 'Untitled Page',
    url: bookmark.url || `nobrowse://search?q=${encodeURIComponent(bookmark.query || '')}`,
    query: bookmark.query || '',
    domain: bookmark.domain || 'nobrowse.net',
    category: bookmark.category || 'General',
    timestamp: Date.now(),
  };
  const updated = [newItem, ...bookmarks.filter(b => b.url !== newItem.url)];
  safeSet(STORAGE_KEYS.BOOKMARKS, updated);
  return updated;
}

export function removeBookmark(id) {
  const bookmarks = getBookmarks().filter(b => b.id !== id);
  safeSet(STORAGE_KEYS.BOOKMARKS, bookmarks);
  return bookmarks;
}

export function isBookmarked(urlOrQuery) {
  const bookmarks = getBookmarks();
  return bookmarks.some(b => b.url === urlOrQuery || (urlOrQuery && b.query.toLowerCase() === urlOrQuery.toLowerCase()));
}

// ----------------- STATISTICS -----------------
export function getStats() {
  const raw = safeGet(STORAGE_KEYS.STATS, DEFAULT_STATS);
  return { ...DEFAULT_STATS, ...raw };
}

export function recordSearchStats({ isReal, chaosType, isEasterEgg }) {
  const current = getStats();
  const next = { ...current };

  next.totalSearches += 1;
  next.sessionSearches += 1;

  if (isEasterEgg) {
    next.easterEggCount = (next.easterEggCount || 0) + 1;
  }

  if (isReal) {
    next.usefulSearches += 1;
  } else {
    next.chaosSearches += 1;

    switch (chaosType) {
      case '404':
        next.fourOhFourCount = (next.fourOhFourCount || 0) + 1;
        break;
      case 'wrong-search':
        next.wrongSearchCount = (next.wrongSearchCount || 0) + 1;
        break;
      case 'fake-error':
        next.fakeErrorCount = (next.fakeErrorCount || 0) + 1;
        break;
      case 'loading':
        next.infiniteLoadCount = (next.infiniteLoadCount || 0) + 1;
        break;
      case 'offline':
        next.offlineCount = (next.offlineCount || 0) + 1;
        break;
      case 'ai-confusion':
        next.aiConfusionCount = (next.aiConfusionCount || 0) + 1;
        break;
      case 'did-you-mean':
        next.didYouMeanCount = (next.didYouMeanCount || 0) + 1;
        break;
      case 'useless-answer':
        next.uselessAnswerCount = (next.uselessAnswerCount || 0) + 1;
        break;
      case 'unrelated':
        next.unrelatedCount = (next.unrelatedCount || 0) + 1;
        break;
      case 'meme':
        next.memeCount = (next.memeCount || 0) + 1;
        break;
      default:
        break;
    }
  }

  safeSet(STORAGE_KEYS.STATS, next);
  return next;
}

export function resetStats() {
  const fresh = {
    ...DEFAULT_STATS,
    sessionStartTime: Date.now(),
  };
  safeSet(STORAGE_KEYS.STATS, fresh);
  return fresh;
}

// ----------------- SETTINGS -----------------
export function getSettings() {
  return safeGet(STORAGE_KEYS.SETTINGS, DEFAULT_SETTINGS);
}

export function saveSettings(settings) {
  const updated = { ...getSettings(), ...settings };
  safeSet(STORAGE_KEYS.SETTINGS, updated);
  return updated;
}
