// NOBROWSE™ - Easter Eggs

export const EASTER_EGGS = {
  why: {
    title: "Philosophy Department Notice",
    response: "That's above our pay grade.",
    subtext: "We only handle HTTP requests, not existential inquiries. Consider asking a nearby houseplant.",
    actionText: "Accept Ignorance",
    badge: "EXISTENTIAL_OVERFLOW",
  },
  google: {
    title: "Search Defection Detected",
    response: "Nice try.",
    subtext: "You can run, but their algorithms already predicted you would search for them here.",
    actionText: "Stay In The Chaos",
    badge: "MONOPOLY_DETECTED",
  },
  chatgpt: {
    title: "Intelligence Redundancy",
    response: "You're already using AI.",
    subtext: "Except this AI has lower standards and higher artistic flair for making mistakes.",
    actionText: "Admire The Duck",
    badge: "SYNTHETIC_OVERLOAD",
  },
  nobrowse: {
    title: "Self-Reflection Warning",
    response: "The browser is self-aware.",
    subtext: "Please do not search for NOBROWSE™ inside NOBROWSE™. Mirrors facing mirrors cause spontaneous dimensional drift.",
    actionText: "Look Away",
    badge: "SINGULARITY_V0.4",
  },
  "404": {
    title: "Recursive Error Encounter",
    response: "404ception.",
    subtext: "You requested the error code intentionally. Therefore, finding this result means we have successfully failed to fail.",
    actionText: "Recurse Again",
    badge: "PARADOX_FOUND",
  },
  hello: {
    title: "Social Interaction Alert",
    response: "Hello. Please leave.",
    subtext: "We were enjoying the silence between queries.",
    actionText: "Politely Close Tab",
    badge: "INTROVERT_ENGINE",
  },
  matrix: {
    title: "Wake Up, Neo...",
    response: "Follow the white duck.",
    subtext: "Unfortunately, no one can be told what NOBROWSE™ is. You have to experience the unpredictable nonsense for yourself.",
    actionText: "Take Red Pill",
    badge: "SIMULATION_GLITCH",
  },
  coffee: {
    title: "HTTP 418: I'm a teapot",
    response: "Brewing coffee requires 2 beans and 1 programmer.",
    subtext: "Warning: Current browser temperature is insufficient to brew French Roast.",
    actionText: "Pour Java",
    badge: "CAFFEINE_REQUIRED",
  },
  "answer to life": {
    title: "Deep Thought Terminal",
    response: "42.",
    subtext: "The answer is 42. Now spend 7.5 million years searching for the actual question.",
    actionText: "Calculate Question",
    badge: "DOUGLAS_ADAMS_APPROVED",
  },
  recursion: {
    title: "Recursive Query Loop",
    response: "Did you mean: recursion?",
    subtext: "To understand recursion, you must first understand NOBROWSE™.",
    actionText: "Click for recursion",
    badge: "STACK_OVERFLOW",
  },
};

export function checkEasterEgg(query) {
  if (!query) return null;
  const clean = query.trim().toLowerCase();
  
  if (EASTER_EGGS[clean]) {
    return {
      query,
      ...EASTER_EGGS[clean],
      isEasterEgg: true,
    };
  }

  // Check partial key matches
  for (const [key, egg] of Object.entries(EASTER_EGGS)) {
    if (clean === key || clean === `what is ${key}` || clean === `who is ${key}`) {
      return {
        query,
        ...egg,
        isEasterEgg: true,
      };
    }
  }

  return null;
}
