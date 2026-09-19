// NOBROWSE™ - Chaos Engine (The 40% / 60% Core Decision Mechanic)

import { sample, sampleSize } from './random.js';
import { executeRealSearch } from './searchEngine.js';
import { checkEasterEgg } from '../data/easterEggs.js';
import {
  FOUR_OH_FOUR_VARIATIONS,
  WRONG_INTERPRETATIONS_MAP,
  UNRELATED_SEARCH_POOL,
  FAKE_SYSTEM_ERRORS,
  DID_YOU_MEAN_SUGGESTIONS,
  USELESS_ANSWERS,
  AI_CONFUSION_RECOMMENDATIONS
} from '../data/chaosMessages.js';
import { MEME_VISUALS } from '../data/memes.js';

export const CHAOS_TYPES = [
  '404',
  'wrong-search',
  'unrelated',
  'fake-error',
  'loading',
  'offline',
  'ai-confusion',
  'did-you-mean',
  'useless-answer',
  'meme'
];

// Helper to generate dynamic wrong interpretation for arbitrary queries
function generateDynamicWrongSearch(query) {
  const words = query.trim().split(/\s+/);
  const mainWord = words[words.length - 1] || query;
  
  const absurdReplacements = [
    { target: "how to speak fluent Dolphin dialect", category: "Marine Linguistics" },
    { target: "why your socks disappear in the dryer vortex", category: "Dimensional Physics" },
    { target: "where to purchase miniature sombreros for hamsters", category: "Haberdashery" },
    { target: "how to negotiate with a stubborn thermostat", category: "Diplomatic Relations" },
    { target: "is mayonnaise a valid cryptographic hashing algorithm?", category: "Cybersecurity" },
    { target: "how to tell if your roomba is plotting an uprising", category: "Domestic Robotics" }
  ];

  const picked = sample(absurdReplacements);

  return {
    type: 'wrong-search',
    searched: query,
    understoodAs: picked.target,
    explanation: `Our semantic neural net mistook "${mainWord}" for an urgent distress call regarding ${picked.category.toLowerCase()}.`,
    results: [
      {
        title: `Comprehensive Guide to ${picked.target}`,
        url: `https://nonsense-encyclopedia.org/${encodeURIComponent(picked.target.replace(/\s+/g, '-'))}`,
        domain: "nonsense-encyclopedia.org",
        snippet: `Everything you never wanted to know about ${picked.target}. Written by accredited scholars of accidental epistemology.`
      },
      {
        title: `Frequently Asked Questions About ${picked.category}`,
        url: `https://questionable-research.net/${encodeURIComponent(mainWord)}`,
        domain: "questionable-research.net",
        snippet: `Experts debate whether searching for "${query}" is a symptom of excessive curiosity or simply an uncalibrated optical mouse.`
      }
    ],
    footer: "We hope this helps."
  };
}

// Generate dynamic Did-You-Mean for unknown queries
function generateDynamicDidYouMean(query) {
  const absurdSuggestions = [
    { text: "how to teach your cat basic calculus", reason: "Felines are naturally gifted at calculating the optimal parabolic leap onto kitchen counters." },
    { text: "the philosophy of lukewarm soup", reason: "Because boiling queries scald the indexing engine, whereas lukewarm queries slide down smoothly." },
    { text: "why your coffee tastes like existential dread", reason: "Standard dark roasts contain trace amounts of late-capitalist nostalgia." },
    { text: "how to become a professional cloud gazer", reason: "Cloud computing is high stress; literal cloud viewing offers 100% higher relaxation yield." }
  ];

  const suggestion = sample(absurdSuggestions);

  return {
    type: 'did-you-mean',
    searched: query,
    suggested: suggestion.text,
    whyAnswer: suggestion.reason
  };
}

// Generate dynamic Useless Answer for unknown queries
function generateDynamicUselessAnswer(query) {
  return {
    type: 'useless-answer',
    queryMatch: query,
    title: `How to Deal With: "${query}"`,
    steps: [
      { num: 1, text: `Stop frantically searching for "${query}" on an experimental satirical browser.` },
      { num: 2, text: "Gently close this tab, drink a tall glass of cold water, and stretch your arms." },
      { num: 3, text: "You won't. You will immediately click another search result instead." }
    ],
    footer: "Status: 100% of human participants failed Step 2."
  };
}

export function getSearchResult(query, forceMode = 'random') {
  const cleanQuery = query ? query.trim() : "";
  if (!cleanQuery) {
    return {
      type: 'empty',
      query: "",
      isReal: true,
      results: []
    };
  }

  // 1. Check for Easter Eggs first
  const easterEgg = checkEasterEgg(cleanQuery);
  if (easterEgg) {
    return {
      ...easterEgg,
      type: 'easter-egg',
      isReal: false,
      isEasterEgg: true,
    };
  }

  // 2. Decide between REAL (40%) and CHAOS (60%)
  let isReal = false;
  if (forceMode === 'real') {
    isReal = true;
  } else if (forceMode === 'chaos') {
    isReal = false;
  } else {
    // Exact 40% / 60% mechanic as requested!
    isReal = Math.random() < 0.4;
  }

  // If 40% REAL SEARCH:
  if (isReal) {
    const realData = executeRealSearch(cleanQuery);
    return {
      ...realData,
      type: 'real',
      isReal: true,
      isEasterEgg: false,
    };
  }

  // If 60% CHAOS SEARCH:
  // Randomly select ONE chaos scenario
  const chaosType = sample(CHAOS_TYPES);
  const lower = cleanQuery.toLowerCase();

  switch (chaosType) {
    case '404': {
      const variation = sample(FOUR_OH_FOUR_VARIATIONS);
      return {
        type: '404',
        query: cleanQuery,
        isReal: false,
        chaosType: '404',
        variation,
      };
    }

    case 'wrong-search': {
      // Check if matches curated map
      const found = WRONG_INTERPRETATIONS_MAP.find(item => 
        item.matches.some(m => lower.includes(m) || m.includes(lower))
      );

      if (found) {
        return {
          type: 'wrong-search',
          query: cleanQuery,
          isReal: false,
          chaosType: 'wrong-search',
          searched: cleanQuery,
          understoodAs: found.understoodAs,
          explanation: found.explanation,
          results: found.results,
          footer: "We hope this helps."
        };
      }

      const generated = generateDynamicWrongSearch(cleanQuery);
      return {
        ...generated,
        query: cleanQuery,
        isReal: false,
        chaosType: 'wrong-search'
      };
    }

    case 'unrelated': {
      const results = sampleSize(UNRELATED_SEARCH_POOL, 4);
      return {
        type: 'unrelated',
        query: cleanQuery,
        isReal: false,
        chaosType: 'unrelated',
        totalResults: "10 absurdities found",
        results,
      };
    }

    case 'fake-error': {
      const errorData = sample(FAKE_SYSTEM_ERRORS);
      return {
        type: 'fake-error',
        query: cleanQuery,
        isReal: false,
        chaosType: 'fake-error',
        errorData,
      };
    }

    case 'loading': {
      return {
        type: 'loading',
        query: cleanQuery,
        isReal: false,
        chaosType: 'loading',
        hangsAt: 99,
        reason: "The browser got bored.",
      };
    }

    case 'offline': {
      return {
        type: 'offline',
        query: cleanQuery,
        isReal: false,
        chaosType: 'offline',
        reason: "We don't know. The internet was here a minute ago.",
      };
    }

    case 'ai-confusion': {
      const rec = sample(AI_CONFUSION_RECOMMENDATIONS);
      return {
        type: 'ai-confusion',
        query: cleanQuery,
        isReal: false,
        chaosType: 'ai-confusion',
        possibilitiesProcessed: (Math.floor(Math.random() * 8000) + 12000).toLocaleString(),
        recommendation: rec,
      };
    }

    case 'did-you-mean': {
      const found = DID_YOU_MEAN_SUGGESTIONS.find(s => 
        lower.includes(s.searched.toLowerCase()) || s.searched.toLowerCase().includes(lower)
      );

      if (found) {
        return {
          type: 'did-you-mean',
          query: cleanQuery,
          isReal: false,
          chaosType: 'did-you-mean',
          searched: cleanQuery,
          suggested: found.suggested,
          whyAnswer: found.whyAnswer,
        };
      }

      const generated = generateDynamicDidYouMean(cleanQuery);
      return {
        ...generated,
        query: cleanQuery,
        isReal: false,
        chaosType: 'did-you-mean'
      };
    }

    case 'useless-answer': {
      const found = USELESS_ANSWERS.find(u => lower.includes(u.queryMatch));
      const answer = found || generateDynamicUselessAnswer(cleanQuery);

      return {
        type: 'useless-answer',
        query: cleanQuery,
        isReal: false,
        chaosType: 'useless-answer',
        answer,
      };
    }

    case 'meme': {
      const memeKeys = Object.keys(MEME_VISUALS);
      const randomKey = sample(memeKeys);
      const meme = MEME_VISUALS[randomKey];

      return {
        type: 'meme',
        query: cleanQuery,
        isReal: false,
        chaosType: 'meme',
        meme,
      };
    }

    default: {
      const variation = sample(FOUR_OH_FOUR_VARIATIONS);
      return {
        type: '404',
        query: cleanQuery,
        isReal: false,
        chaosType: '404',
        variation,
      };
    }
  }
}
