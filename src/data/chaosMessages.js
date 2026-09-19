// NOBROWSE™ - Chaos Messages & Scenarios

export const FOUR_OH_FOUR_VARIATIONS = [
  {
    id: "went_outside",
    title: "404",
    subtitle: "The page went outside.",
    description: "It saw the sun, felt a gentle breeze, and realized there is more to life than rendering DOM nodes.",
    visual: "outside",
    blame: "We blame the outdoors.",
    quote: "“The page is currently touching grass. Please try again when it gets sunburned.”"
  },
  {
    id: "better_life",
    title: "404",
    subtitle: "The page has chosen a better life.",
    description: "Your requested resource moved to a quaint cottage in southern France to paint water lilies and make goat cheese.",
    visual: "beach",
    blame: "We blame late-stage web development.",
    quote: "“It left no forwarding address, only a postcard reading: 'Au revoir, localhost.'”"
  },
  {
    id: "not_for_you",
    title: "404",
    subtitle: "The page exists. Just not for you.",
    description: "It looked through the peephole, saw your user agent, and pretended nobody was home.",
    visual: "bouncer",
    blame: "We blame your vibes.",
    quote: "“Your search query has been placed on the VIP waiting list (Position: #4,192,801).”"
  },
  {
    id: "we_lost_it",
    title: "404",
    subtitle: "We lost it.",
    description: "We looked under the couch, in the downloads folder, and behind the refrigerator. It wasn't there.",
    visual: "magnifier",
    blame: "We blame entropy.",
    quote: "“If you find a stray 200 OK wandering the corridor, please return it to reception.”"
  },
  {
    id: "motivation_not_found",
    title: "404",
    subtitle: "Motivation not found.",
    description: "The web server woke up, contemplated the infinite futility of serving billions of packets, and rolled over.",
    visual: "sleeping_cat",
    blame: "We blame Monday morning.",
    quote: "“The server is taking a mental health millisecond. It may or may not return.”"
  },
  {
    id: "schrodinger",
    title: "404",
    subtitle: "Schrödinger's Page.",
    description: "Until you observed this search result, the page existed in a quantum superposition of found and not found.",
    visual: "box",
    blame: "We blame quantum mechanics.",
    quote: "“By looking at this page, you collapsed the wave function into a 404. Nice going.”"
  }
];

export const WRONG_INTERPRETATIONS_MAP = [
  {
    matches: ["python", "learn python", "python tutorial", "python code"],
    understoodAs: "where can I find snakes?",
    explanation: "Our lexical parser determined that you are in desperate need of a cold-blooded serpentine companion.",
    results: [
      {
        title: "Burmese Python Care: Humidity, Enclosures, & Friendship",
        url: "https://nationalreptile.org/species/python-bivittatus",
        domain: "nationalreptile.org",
        snippet: "A healthy python can grow up to 18 feet and will generally not debug your asyncio coroutines, but makes a fantastic scarf in winter."
      },
      {
        title: "Ball Pythons for Beginners: Shy, Docile, and Low Maintenance",
        url: "https://snakes-are-cool.net/ball-python-101",
        domain: "snakes-are-cool.net",
        snippet: "Unlike nested loops, ball pythons will curl into a pleasant sphere when stressed instead of throwing a RecursionError."
      },
      {
        title: "How to Tell if Your Python is Actually Hungry or Just Plotting",
        url: "https://reptilewhisperer.io/python-behavior",
        domain: "reptilewhisperer.io",
        snippet: "If your python measures itself beside you while you sleep, it might not be a linter issue. Consult your local zoologist."
      }
    ]
  },
  {
    matches: ["react", "react tutorial", "how to learn react", "react js"],
    understoodAs: "React to my personal problems tutorial",
    explanation: "You typed 'React' with such emotional urgency that we assumed you needed advice on handling life's chaos.",
    results: [
      {
        title: "How to Overreact to Minor Inconveniences in 5 Easy Steps",
        url: "https://dramaqueens.club/tutorials/overreacting",
        domain: "dramaqueens.club",
        snippet: "Learn the proper technique for gasping aloud when an email contains the phrase 'per my previous email'. Includes custom CSS crying."
      },
      {
        title: "useEffect: Handling the Side Effects of Existence",
        url: "https://existential-hooks.dev/manual/side-effects",
        domain: "existential-hooks.dev",
        snippet: "Clean up unwanted memories with a dependency array consisting entirely of denial and caffeine."
      },
      {
        title: "10 Polite Ways to React When Someone Says 'Let's Circle Back'",
        url: "https://corporatesurvival.org/reactions",
        domain: "corporatesurvival.org",
        snippet: "Includes blank staring, nodding with glazed eyes, and quietly calculating how many minutes remain until Friday 5 PM."
      }
    ]
  },
  {
    matches: ["laptop", "best laptop", "buy laptop", "macbook", "computer"],
    understoodAs: "best human lap for resting your head",
    explanation: "Computers are overrated. Ergonomic studies show resting your head on a warm human lap reduces CPU temperatures by 100%.",
    results: [
      {
        title: "Top 10 Human Laps of 2026: Cushioning, Warmth, & Stability",
        url: "https://feline-comfort-reviews.com/laps-2026",
        domain: "feline-comfort-reviews.com",
        snippet: "Reviewer Cat #4 writes: 'A+ knee curvature, satisfactory denim texture, slightly prone to shifting when the human needs coffee.'"
      },
      {
        title: "Why Dogs Prefer Your Knees Over an Ergonomic Gaming Chair",
        url: "https://caninethoughts.blog/where-to-sit",
        domain: "caninethoughts.blog",
        snippet: "A 400-page dissertation examining why a 90-pound golden retriever genuinely believes it is a small lap ornament."
      }
    ]
  },
  {
    matches: ["money", "how to make money", "earn money", "crypto", "investing"],
    understoodAs: "how to make honey in your kitchen",
    explanation: "Paper fiat currency fluctuates, but raw honeycomb produced by industrious bees maintains perpetual intrinsic value.",
    results: [
      {
        title: "Beginner Beekeeping: Negotiating with 40,000 Angry Workers",
        url: "https://backyard-apiary.org/honey-primer",
        domain: "backyard-apiary.org",
        snippet: "The trick to making honey is letting the bees do 99% of the work while you stand in a white astronaut suit taking credit."
      },
      {
        title: "Can Humans Synthesize Honey by Chewing Flowers? (We Tested It)",
        url: "https://questionable-experiments.net/flower-chewing",
        domain: "questionable-experiments.net",
        snippet: "Spoiler: No. You just end up with dandelion petals in your teeth and a mild pollen allergy."
      }
    ]
  },
  {
    matches: ["javascript", "js", "learn javascript"],
    understoodAs: "The Island of Java and its volcanic origins",
    explanation: "You searched for a script, but we transported you 10,000 miles to the Sunda volcanic arc in Indonesia.",
    results: [
      {
        title: "Mount Bromo & Mount Merapi: Java's Most Active Geologic Features",
        url: "https://geology-indonesia.org/java-volcanoes",
        domain: "geology-indonesia.org",
        snippet: "Unlike JavaScript frameworks which erupt every two weeks, Mount Merapi has been consistently venting steam since the Pleistocene."
      },
      {
        title: "Robusta vs Arabica: Traditional Javanese Coffee Cultivation",
        url: "https://heritage-coffee.id/java-beans",
        domain: "heritage-coffee.id",
        snippet: "The real Java requires hot water and filtered beans, not npm install."
      }
    ]
  },
  {
    matches: ["center a div", "how to center a div", "css center", "centering"],
    understoodAs: "how to center your spiritual aura and find inner equilibrium",
    explanation: "Centering a div with pure CSS is physically impossible under standard Euclidean spacetime. Here is emotional closure instead.",
    results: [
      {
        title: "Accepting That the Div Will Never Truly Be Centered",
        url: "https://buddhist-frontends.zen/centering-suffering",
        domain: "buddhist-frontends.zen",
        snippet: "True enlightenment begins when you remove 'display: flex' and accept that all elements are impermanent, off-by-two-pixels constructs."
      },
      {
        title: "Guided Meditation for CSS Flexbox Casualties",
        url: "https://mindful-styling.space/breathwork",
        domain: "mindful-styling.space",
        snippet: "Inhale: align-items center. Exhale: justify-content space-between. Notice the tension in your shoulders as margin: auto fails once again."
      }
    ]
  },
  {
    matches: ["restaurants", "food near me", "best restaurants near me", "pizza near me"],
    understoodAs: "best dining establishments on the planet Mars",
    explanation: "Terrestrial dining is saturated. We expanded your delivery radius to 140 million miles.",
    results: [
      {
        title: "Olympus Mons Bistro: High Altitude, Zero Oxygen, Excellent Crust",
        url: "https://mars-eats.sol/olympus-bistro",
        domain: "mars-eats.sol",
        snippet: "Features stunning views of dust storms and an authentic regolith-baked sourdough. Outer solar system reservations recommended 6 months in advance."
      },
      {
        title: "Valles Marineris Taco Truck: Spicy Martian Salsa",
        url: "https://canyon-tacos.mars/menu",
        domain: "canyon-tacos.mars",
        snippet: "Serving solar-irradiated carne asada at 0.38g gravity. Warning: Tacos may float if salsa density is not properly configured."
      }
    ]
  },
  {
    matches: ["weather", "weather tomorrow", "forecast", "rain tomorrow"],
    understoodAs: "atmospheric weather on Neptune in the year 1842",
    explanation: "Local forecasts are boring. Here is the historical meteorology of a frozen gas giant.",
    results: [
      {
        title: "Neptune Daily Forecast: 1,200 MPH Supersonic Methane Winds",
        url: "https://deep-space-weather.gov/neptune/1842",
        domain: "deep-space-weather.gov",
        snippet: "High: -218°C. Low: -220°C. Heavy diamond rain expected in the mid-mantle layer. Light jacket will not suffice."
      },
      {
        title: "Great Dark Spot Storm Advisory: Lasting for Another 300 Years",
        url: "https://outer-planets-met.org/storms",
        domain: "outer-planets-met.org",
        snippet: "Please ensure your space capsule is anchored to the diamond bedrock to prevent orbital dislocation."
      }
    ]
  }
];

export const UNRELATED_SEARCH_POOL = [
  {
    title: "10 Reasons Why Cats Secretly Hate Programmers",
    url: "https://felinetruth.org/why-cats-hate-coders",
    domain: "felinetruth.org",
    snippet: "Reason #3: You type on a warm rectangular device for 9 hours a day, but when they sit on it, you push them off. Hypocrisy in its purest form.",
    category: "Feline Psychology",
    readTime: "4 min read"
  },
  {
    title: "The Comprehensive History of Sliced Sourdough Bread (1928 - Present)",
    url: "https://breadhistory.institute/archives/sourdough",
    domain: "breadhistory.institute",
    snippet: "Before sliced bread was invented, humans had to rip loaves apart with their bare teeth in dark, chaotic banquet halls.",
    category: "Culinary History",
    readTime: "12 min read"
  },
  {
    title: "Why Your Code Works on Your Machine: A Paranormal Investigation",
    url: "https://haunted-hardware.io/ghost-in-the-cpu",
    domain: "haunted-hardware.io",
    snippet: "Spectral field agents investigate why code written in your bedroom fails in Docker production despite identical container hashes.",
    category: "Paranormal Engineering",
    readTime: "6 min read"
  },
  {
    title: "Top 10 Pizzas of 2026 Rated Solely by City Pigeons",
    url: "https://pigeon-gastronomy.net/best-crusts-2026",
    domain: "pigeon-gastronomy.net",
    snippet: "Pigeon critic Barnaby gives 5 coos out of 5 to a dropped pepperoni slice near 42nd Street subway station for remarkable sidewalk buoyancy.",
    category: "Avian Reviews",
    readTime: "3 min read"
  },
  {
    title: "A Suspiciously Specific Duck Staring at You From Across the Park",
    url: "https://avian-surveillance.com/target-acquired",
    domain: "avian-surveillance.com",
    snippet: "Notice the tilt of its green head. It knows you haven't written unit tests for that commit from last Tuesday.",
    category: "Security Notice",
    readTime: "2 min read"
  },
  {
    title: "How to Convince Your Houseplants That Monday is Just a Human Construct",
    url: "https://flora-philosophy.org/existential-fern",
    domain: "flora-philosophy.org",
    snippet: "Your Monstera Deliciosa does not care about your sprint retrospective. Learn how to apologize for your calendar invites.",
    category: "Botanical Therapy",
    readTime: "5 min read"
  },
  {
    title: "Can Ducks Read CSS? A 5-Year Longitudinal Study",
    url: "https://quack-science.edu/css-waterfowl-correlation",
    domain: "quack-science.edu",
    snippet: "When presented with 'float: left', 87% of Mallards swam clockwise. The remaining 13% refused to render.",
    category: "Academic Research",
    readTime: "8 min read"
  },
  {
    title: "Why 'undefined is not a function' is Actually a Post-Modern Poem",
    url: "https://literary-errors.art/javascript-poetry",
    domain: "literary-errors.art",
    snippet: "A breakdown of the existential yearning embedded within JavaScript's most famous TypeError.",
    category: "Art & Critique",
    readTime: "7 min read"
  },
  {
    title: "Looking Busy at Your Desk: Advanced Rapid Alt-Tab Techniques",
    url: "https://cubicle-ninjas.club/stealth-procrastination",
    domain: "cubicle-ninjas.club",
    snippet: "Master the furrowed brow, the intense squint at a terminal window containing 'ping 8.8.8.8', and the occasional solemn sigh.",
    category: "Career Optimization",
    readTime: "5 min read"
  }
];

export const FAKE_SYSTEM_ERRORS = [
  {
    code: "0xWHY-DID-YOU-SEARCH-THIS",
    title: "CRITICAL SEARCH MALFUNCTION",
    message: "search.exe has encountered an existential paradox and refused to proceed.",
    callStack: [
      "at SearchEngine.queryProcess(quantum_engine.js:404:12)",
      "at HumanIntent.analyzeVibes(brain_bridge.sys:0xDEADBEEF)",
      "at LogicGate.throwHandsUpInTheAir(panic.dll:99)",
      "at Browser.pretendEverythingIsFine(nobrowse.exe:0x00000000)"
    ],
    advice: "Try blowing gently into your USB port or whispering encouraging words to your router."
  },
  {
    code: "0x404-COFFEE-NOT-FOUND",
    title: "CAFFEINE DEPLETION FAULT",
    message: "The simulated web crawler ran out of espresso and refuses to traverse the DOM.",
    callStack: [
      "at BaristaProtocol.pourShot(beans.sys:0x18)",
      "at SteamPressure.dropToZero(boiler.dll:418)",
      "at DeveloperMorale.collapse(reality.js:1)"
    ],
    advice: "Insert roasted arabica beans into floppy drive A: to resume search."
  },
  {
    code: "0xOUT-OF-CHEESE-ERROR",
    title: "REDUNDANCY SYSTEM HALTED",
    message: "Our quantum processors require cheddar lubrication to maintain indexing integrity.",
    callStack: [
      "at DairyCache.fetchGouda(fromage.sys:127)",
      "at LactoseBuffer.overflow(refrigerator.dll:0xBRIE)",
      "at Hardware.smellSuspicious(nobrowse.exe:42)"
    ],
    advice: "Reboot your kitchen and check expiration date on current session."
  },
  {
    code: "0xEXCESSIVE-CURIOSITY",
    title: "CURIOSITY THRESHOLD EXCEEDED",
    message: "User was observed asking questions that mortals were not meant to comprehend.",
    callStack: [
      "at Epistemology.verifyPermission(forbidden.sys:666)",
      "at SocraticDaemon.overheat(philosophy.dll:0xWHY)",
      "at SafetyNet.deployParachute(nobrowse.exe:1337)"
    ],
    advice: "Please close this window and watch videos of pandas sneezing instead."
  },
  {
    code: "0xDIV-REFUSED-TO-CENTER",
    title: "LAYOUT GEOMETRY RUPTURE",
    message: "An unhandled CSS casualty has caused vertical alignment collapse across 3 continents.",
    callStack: [
      "at Flexbox.recalculate(holy_grail.css:12)",
      "at MarginAuto.doNothing(useless.sys:0)",
      "at WebStandards.admitDefeat(w3c.dll:0xFFFF)"
    ],
    advice: "Step away from the keyboard and accept that absolute positioning was a mistake."
  }
];

export const DID_YOU_MEAN_SUGGESTIONS = [
  {
    searched: "JavaScript tutorial",
    suggested: "Java tutorial (with 15 abstract factories)",
    whyAnswer: "Because we believe you secretly yearn for 400 lines of XML configuration just to print 'Hello World'."
  },
  {
    searched: "React hooks",
    suggested: "Captain Hook's pirate memoirs",
    whyAnswer: "Both involve hooks, wooden limbs, and uncontrollable panic when an unhandled side effect occurs."
  },
  {
    searched: "Docker container",
    suggested: "Tupperware leftover pasta container",
    whyAnswer: "Tupperware is also lightweight, isolated, and smells vaguely like tomato sauce from three weeks ago."
  },
  {
    searched: "Machine learning",
    suggested: "Washing machine learning to salsa dance",
    whyAnswer: "Neural networks are cool, but have you ever seen a Whirlpool front-loader execute a graceful pirouette?"
  },
  {
    searched: "Python programming",
    suggested: "Teaching a real serpent to balance your checkbook",
    whyAnswer: "Standard accounting software lacks the intimidating charisma of an 11-foot constrictor."
  }
];

export const USELESS_ANSWERS = [
  {
    queryMatch: "productive",
    title: "How to Become 100% Productive",
    steps: [
      { num: 1, text: "Stop searching for how to become productive on a joke browser." },
      { num: 2, text: "Close this browser window right now." },
      { num: 3, text: "You won't." }
    ],
    footer: "Status: Task failed successfully. You are still reading this."
  },
  {
    queryMatch: "sleep",
    title: "How to Fall Asleep in 3 Minutes",
    steps: [
      { num: 1, text: "Lay your head gently on the pillow and close your eyes." },
      { num: 2, text: "Suddenly remember that awkward remark you made to a cashier in 2017." },
      { num: 3, text: "Stare at the ceiling until sunrise while contemplating the Roman Empire." }
    ],
    footer: "Recommended beverage: 4 shots of espresso to accelerate exhaustion."
  },
  {
    queryMatch: "bug",
    title: "How to Fix Any Software Bug",
    steps: [
      { num: 1, text: "Stare directly into the code until the bug feels deeply self-conscious." },
      { num: 2, text: "Add console.log('here 1'), console.log('here 2'), console.log('WHY GOD')." },
      { num: 3, text: "Delete your comment on line 42. Watch it miraculously start working." }
    ],
    footer: "Scientific validation: 0%. Emotional accuracy: 100%."
  },
  {
    queryMatch: "general",
    title: "Universal Problem Resolution Algorithm",
    steps: [
      { num: 1, text: "Identify the problem with absolute clarity." },
      { num: 2, text: "Realize that resolving the problem creates two larger sub-problems." },
      { num: 3, text: "Go for a pleasant stroll and pretend you never heard of it." }
    ],
    footer: "Certified by the Bureau of Procrastination."
  }
];

export const AI_CONFUSION_RECOMMENDATIONS = [
  {
    item: "A Duck",
    description: "It floats on water. It eats stale bread crusts without judgment. It has never once caused a production outage.",
    icon: "duck",
    advice: "“Stare into the duck's plumage until clarity washes over your soul.”"
  },
  {
    item: "A Sturdy Potato",
    description: "Can be boiled, mashed, or left alone to sprout strange pale antennas in the dark cabinet.",
    icon: "potato",
    advice: "“The potato knows nothing of your query, yet it radiates calm acceptance.”"
  },
  {
    item: "Turning it Off and Never Turning it On Again",
    description: "The ultimate firmware patch. 100% bug elimination guaranteed forever.",
    icon: "power",
    advice: "“No electricity = No bugs. Pure mathematical perfection.”"
  },
  {
    item: "A Warm Cup of Herbal Tea",
    description: "It will not compile your code, but it smells faintly of chamomile and defeat.",
    icon: "tea",
    advice: "“Take a sip and whisper: 'It is what it is.'”"
  }
];
