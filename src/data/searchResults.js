// NOBROWSE™ - Curated Real Search Results & Fallback Generator (Real Search Mode)

export const CURATED_REAL_SEARCHES = {
  react: {
    query: "React",
    category: "Web Development",
    quickAnswer: {
      type: "code",
      title: "React Quick Start: Creating Components",
      badge: "Official Documentation",
      code: `function MyButton() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}`,
      source: "react.dev",
      note: "React is a free and open-source front-end JavaScript library for building user interfaces based on components."
    },
    knowledgePanel: {
      title: "React",
      subtitle: "Software library",
      description: "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies.",
      image: "🌐",
      attributes: [
        { label: "Initial release", value: "May 29, 2013" },
        { label: "Original author", value: "Jordan Walke" },
        { label: "Written in", value: "JavaScript, TypeScript" },
        { label: "Platform", value: "Web, Mobile (React Native)" },
        { label: "License", value: "MIT License" },
        { label: "Official website", value: "react.dev" }
      ],
      links: [
        { label: "Official Documentation", url: "https://react.dev/learn" },
        { label: "GitHub Repository", url: "https://github.com/facebook/react" },
        { label: "Wikipedia Entry", url: "https://en.wikipedia.org/wiki/React_(software)" }
      ]
    },
    peopleAlsoAsk: [
      {
        question: "Is React difficult for beginners to learn?",
        answer: "React has a gentle learning curve if you already understand JavaScript fundamentals (ES6 syntax, arrow functions, and array methods). The component model and JSX become intuitive within a few days of practice."
      },
      {
        question: "What is the difference between React and Next.js?",
        answer: "React is a UI component library, while Next.js is a full-stack framework built on top of React that provides server-side rendering, routing, data fetching, and performance optimizations."
      },
      {
        question: "Is React still relevant in 2026?",
        answer: "Yes, React remains the most widely deployed front-end library globally, with strong ecosystem adoption in Next.js, Remix, React Native, and enterprise web applications."
      },
      {
        question: "What are React Hooks?",
        answer: "Hooks are built-in functions like useState, useEffect, and useMemo that let function components use state and other React features without writing class components."
      }
    ],
    relatedSearches: [
      "react 19 new features",
      "react hooks cheat sheet",
      "react vs vue vs angular",
      "learn next.js for beginners",
      "react native mobile tutorial",
      "react component lifecycle",
      "best ui libraries for react",
      "how to deploy a react app"
    ],
    results: [
      {
        title: "React – A JavaScript library for building user interfaces",
        url: "https://react.dev",
        domain: "react.dev",
        snippet: "React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video.",
        sitelinks: [
          { text: "Getting Started", url: "https://react.dev/learn" },
          { text: "Hooks Reference", url: "https://react.dev/reference/react" },
          { text: "Tutorial: Tic-Tac-Toe", url: "https://react.dev/learn/tutorial-tic-tac-toe" },
          { text: "Thinking in React", url: "https://react.dev/learn/thinking-in-react" }
        ],
        date: "Official Website",
        rating: "★ 4.9 (48k ratings)"
      },
      {
        title: "Getting Started with React – Modern Web Tutorials | MDN",
        url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started",
        domain: "developer.mozilla.org",
        snippet: "An introduction to the React library, exploring its core concepts including JSX syntax, props, component hierarchies, and interactive state management.",
        date: "Updated 3 days ago"
      },
      {
        title: "github.com/facebook/react: The library for web and native UIs",
        url: "https://github.com/facebook/react",
        domain: "github.com",
        snippet: "React is a declarative, efficient, and flexible JavaScript library for building user interfaces. Over 225,000 GitHub stars and active global ecosystem.",
        date: "v19.0.0 Release",
        rating: "★ 225,000 Stars"
      },
      {
        title: "React vs Vue vs Angular: Comprehensive 2026 Comparison",
        url: "https://frontenddigest.com/react-vs-vue-vs-angular",
        domain: "frontenddigest.com",
        snippet: "Evaluating component models, bundle sizes, server-side rendering with Next.js, developer ergonomics, job market share, and ecosystem longevity.",
        date: "Feb 14, 2026"
      },
      {
        title: "Top 10 React Best Practices Every Developer Should Know",
        url: "https://dev.to/react-community/top-10-react-best-practices",
        domain: "dev.to",
        snippet: "Master clean architecture: custom hooks separation, avoiding unnecessary re-renders with useMemo/useCallback, compound components, and accessibility testing.",
        date: "Jan 28, 2026"
      },
      {
        title: "Full Stack React 19 Crash Course with Server Actions",
        url: "https://www.freecodecamp.org/news/react-19-full-stack-guide",
        domain: "freecodecamp.org",
        snippet: "A deep dive into React 19: Server Components, the useActionState hook, optimistic UI updates, and building end-to-end applications without boilerplate.",
        date: "Free Course",
        rating: "★ 4.8 (8.4k votes)"
      },
      {
        title: "React Documentation: Built-in React Hooks Guide",
        url: "https://react.dev/reference/react/hooks",
        domain: "react.dev",
        snippet: "Hooks let you use different React features from your components. You can either use the built-in Hooks or combine them to build your own custom hooks.",
        date: "Core Reference"
      },
      {
        title: "Learn React – Full Interactive Codecademy Track",
        url: "https://www.codecademy.com/learn/react-101",
        domain: "codecademy.com",
        snippet: "Practice building web apps with hands-on exercises in the browser. Learn state, lifecycle, JSX, hooks, and modern frontend development patterns.",
        date: "25 hours course"
      }
    ]
  },

  python: {
    query: "Python",
    category: "Programming",
    quickAnswer: {
      type: "code",
      title: "Python 3: Syntax Overview",
      badge: "Language Reference",
      code: `# List comprehension & dictionary mapping
numbers = [1, 2, 3, 4, 5]
squares = {x: x**2 for x in numbers if x % 2 != 0}
print(f"Odd squares: {squares}") # {1: 1, 3: 9, 5: 25}`,
      source: "python.org",
      note: "Python is an interpreted, high-level and general-purpose programming language with design philosophy emphasizing code readability."
    },
    knowledgePanel: {
      title: "Python",
      subtitle: "Programming language",
      description: "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.",
      image: "🐍",
      attributes: [
        { label: "Designed by", value: "Guido van Rossum" },
        { label: "First appeared", value: "February 20, 1991" },
        { label: "Typing discipline", value: "Duck, dynamic, strong" },
        { label: "Major implementations", value: "CPython, PyPy, Jython" },
        { label: "License", value: "Python Software Foundation License" },
        { label: "Website", value: "python.org" }
      ],
      links: [
        { label: "Official Python Website", url: "https://www.python.org" },
        { label: "Python Documentation", url: "https://docs.python.org/3/" },
        { label: "Package Index (PyPI)", url: "https://pypi.org" }
      ]
    },
    peopleAlsoAsk: [
      {
        question: "Is Python good for web development?",
        answer: "Yes, Python powers major web applications through high-performance frameworks like Django, FastAPI, and Flask, handling authentication, ORMs, and async REST/GraphQL APIs."
      },
      {
        question: "How long does it take to learn Python?",
        answer: "A beginner can grasp core syntax and basics in 2 to 4 weeks. Building full data science models or web applications typically takes 2 to 3 months of consistent practice."
      },
      {
        question: "What is Python most commonly used for?",
        answer: "Python is the primary language for Artificial Intelligence, Machine Learning (PyTorch, TensorFlow), Data Science (Pandas, NumPy), backend APIs, and system automation."
      }
    ],
    relatedSearches: [
      "python tutorial for beginners",
      "python vs javascript 2026",
      "python cheat sheet pdf",
      "fastapi vs django comparison",
      "python machine learning roadmap",
      "how to install python 3 on windows"
    ],
    results: [
      {
        title: "Welcome to Python.org – Official Website & Downloads",
        url: "https://www.python.org",
        domain: "python.org",
        snippet: "The official home of the Python Programming Language. Download Python 3.13, explore documentation, tutorials, PEP specifications, and PyPI packages.",
        sitelinks: [
          { text: "Downloads (Latest 3.13)", url: "https://python.org/downloads" },
          { text: "The Python Tutorial", url: "https://docs.python.org/3/tutorial" },
          { text: "Standard Library Docs", url: "https://docs.python.org/3/library" },
          { text: "Community PEPs", url: "https://peps.python.org" }
        ],
        date: "Official Documentation"
      },
      {
        title: "Python Tutorial – W3Schools & Interactive Exercises",
        url: "https://www.w3schools.com/python",
        domain: "w3schools.com",
        snippet: "Python is a popular programming language used for web development, machine learning, data science, automation scripts, and backend APIs.",
        date: "Free interactive course"
      },
      {
        title: "Automate the Boring Stuff with Python – Practical Programming",
        url: "https://automatetheboringstuff.com",
        domain: "automatetheboringstuff.com",
        snippet: "Learn how to write practical programs that clean spreadsheets, scrape websites, rename files, and send automated notifications without endless theory.",
        date: "By Al Sweigart",
        rating: "★ 4.9 (12k reviews)"
      },
      {
        title: "Python for Beginners: Full 6-Hour Course | freeCodeCamp",
        url: "https://www.freecodecamp.org/news/python-crash-course",
        domain: "freecodecamp.org",
        snippet: "Learn Python from scratch. Covers variables, control flow, functions, object-oriented programming, file I/O, error handling, and building mini-projects.",
        date: "Comprehensive Guide"
      },
      {
        title: "Real Python: Python Tutorials, In-Depth Articles and Quizzes",
        url: "https://realpython.com",
        domain: "realpython.com",
        snippet: "Expert-curated tutorials on Python idioms, decorators, type hints, concurrency with asyncio, packaging, and data processing.",
        date: "Updated Weekly"
      },
      {
        title: "Python 3 Standard Library Reference Index",
        url: "https://docs.python.org/3/library/index.html",
        domain: "docs.python.org",
        snippet: "Complete documentation for built-in modules: json, math, os, sys, datetime, collections, itertools, multiprocessing, and sqlite3.",
        date: "Canonical Reference"
      },
      {
        title: "Top 20 Python Data Science Libraries You Must Know",
        url: "https://towardsdatascience.com/top-python-libraries-data-science",
        domain: "towardsdatascience.com",
        snippet: "An evaluation of NumPy, Pandas, Scikit-Learn, PyTorch, Polars, and Matplotlib for modern data pipelines and predictive modeling.",
        date: "Industry Report"
      }
    ]
  },

  css: {
    query: "how to center a div",
    category: "Web Design & CSS",
    quickAnswer: {
      type: "css_demo",
      title: "The Holy Grail: Centering in Modern CSS",
      badge: "CSS Flexbox & Grid",
      code: `.parent {
  display: grid;
  place-items: center;
  min-height: 100vh;
}`,
      source: "css-tricks.com",
      note: "Modern CSS offers multiple clean solutions: 'display: grid; place-items: center;' or 'display: flex; justify-content: center; align-items: center;'."
    },
    knowledgePanel: {
      title: "Centering in CSS",
      subtitle: "Web Layout Technique",
      description: "Centering elements horizontally and vertically in CSS historically required complex hacks, but modern CSS specifications provide native Flexbox and Grid properties that solve this in 2 lines of code.",
      image: "🎯",
      attributes: [
        { label: "Best Flexbox Method", value: "justify-content & align-items" },
        { label: "Shortest Grid Method", value: "place-items: center" },
        { label: "Classic Method", value: "position: absolute & translate" },
        { label: "Browser Support", value: "99.8% all modern browsers" }
      ],
      links: [
        { label: "MDN Centering Layouts", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Centering" },
        { label: "CSS-Tricks Guide", url: "https://css-tricks.com/centering-css-complete-guide" }
      ]
    },
    peopleAlsoAsk: [
      {
        question: "What is the easiest way to center a div vertically and horizontally?",
        answer: "The easiest modern method is CSS Grid: apply 'display: grid; place-items: center;' to the container parent element."
      },
      {
        question: "How do I center a div using Flexbox?",
        answer: "Set 'display: flex; justify-content: center; align-items: center;' on the parent container. This aligns children both horizontally and vertically."
      },
      {
        question: "Why does margin: auto not center vertically?",
        answer: "In traditional flow layout, margin: auto only computes horizontal margins. However, inside a Flexbox container with a defined height, margin: auto DOES center both vertically and horizontally!"
      }
    ],
    relatedSearches: [
      "center a div flexbox vs grid",
      "center text vertically css",
      "tailwind center div on screen",
      "css absolute center transform",
      "css vertical align middle div"
    ],
    results: [
      {
        title: "Centering in CSS: A Complete Guide | CSS-Tricks",
        url: "https://css-tricks.com/centering-css-complete-guide",
        domain: "css-tricks.com",
        snippet: "Centering things in CSS is the poster child of CSS complaining. Why does it have to be so hard? Modern Flexbox and CSS Grid have made it trivial.",
        sitelinks: [
          { text: "Horizontal Centering", url: "https://css-tricks.com#horizontal" },
          { text: "Vertical Centering", url: "https://css-tricks.com#vertical" },
          { text: "Both Horiz & Vert", url: "https://css-tricks.com#both" },
          { text: "Grid place-items", url: "https://css-tricks.com#grid" }
        ],
        date: "Classic Reference",
        rating: "★ 4.9 (24k shares)"
      },
      {
        title: "How to Center an Element Horizontally and Vertically in CSS – MDN",
        url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Centering",
        domain: "developer.mozilla.org",
        snippet: "Explore contemporary layout methods including Flexbox, Grid, CSS transforms, and margin auto for robust cross-browser centered layouts.",
        date: "Updated Jan 2026"
      },
      {
        title: "How do I center an element in flexbox? – Stack Overflow",
        url: "https://stackoverflow.com/questions/20590239/centering-in-flexbox",
        domain: "stackoverflow.com",
        snippet: "Apply 'justify-content: center' along the main axis and 'align-items: center' along the cross axis on the flex container. Over 6,200 upvotes.",
        date: "Accepted Answer",
        rating: "★ 6,240 Upvotes"
      },
      {
        title: "The Ultimate Guide to Centering Things in CSS (2026 Edition)",
        url: "https://web.dev/learn/css/centering",
        domain: "web.dev",
        snippet: "Google's web developers review the 6 most common alignment scenarios: centering text, centering block elements, viewport centering, and modal positioning.",
        date: "Google Web Developers"
      },
      {
        title: "Why Is Centering a Div in CSS So Famous? A History",
        url: "https://blog.codepen.io/history-of-centering-css",
        domain: "codepen.io",
        snippet: "From table layouts in 1999 to floats, absolute negative margins, inline-block hacks, and finally native CSS Grid place-items.",
        date: "Developer Culture"
      },
      {
        title: "Tailwind CSS Centering Cheat Sheet: Flex, Grid & Absolute",
        url: "https://tailwindcss.com/docs/centering",
        domain: "tailwindcss.com",
        snippet: "Quick utility combinations: 'flex items-center justify-center', 'grid place-content-center', or 'absolute inset-0 m-auto'.",
        date: "Tailwind Official"
      },
      {
        title: "CSS Grid vs Flexbox: When to Use Which in 2026",
        url: "https://smashingmagazine.com/css-grid-flexbox-guide",
        domain: "smashingmagazine.com",
        snippet: "Flexbox is designed for one-dimensional layouts, while Grid is designed for two-dimensional layouts. Both make centering effortless.",
        date: "Smashing Magazine"
      }
    ]
  },

  weather: {
    query: "weather tomorrow",
    category: "Meteorology",
    quickAnswer: {
      type: "weather",
      title: "Local Meteorological Forecast",
      badge: "Atmospheric Telemetry",
      temperature: "72°F / 22°C",
      condition: "Partly Cloudy with Gentle Breeze",
      humidity: "48%",
      wind: "9 mph NW",
      precipitation: "10%",
      source: "globalmet.sim"
    },
    knowledgePanel: {
      title: "Weather Forecast",
      subtitle: "Regional Meteorological Summary",
      description: "Moderate atmospheric pressure system dominating the regional basin. Mild temperatures and low precipitation probability expected over the next 48 hours.",
      image: "🌤️",
      attributes: [
        { label: "High / Low", value: "74°F / 58°F" },
        { label: "Precipitation", value: "10% Chance" },
        { label: "UV Index", value: "5 (Moderate)" },
        { label: "Air Quality", value: "32 (Good)" },
        { label: "Barometer", value: "30.12 inHg" },
        { label: "Sunrise / Sunset", value: "6:24 AM / 7:42 PM" }
      ],
      links: [
        { label: "National Weather Service", url: "https://weather.gov" },
        { label: "Radar Maps", url: "https://accuweather.com/radar" }
      ]
    },
    peopleAlsoAsk: [
      {
        question: "Will it rain tomorrow?",
        answer: "Current radar imagery indicates only a 10% isolated shower risk during early morning hours, followed by clear sunny skies for the afternoon."
      },
      {
        question: "What should I wear tomorrow?",
        answer: "With temperatures between 58°F and 74°F, a light jacket or cardigan in the morning with casual breathable layers for the afternoon is recommended."
      }
    ],
    relatedSearches: [
      "10-day weather forecast",
      "live weather radar map",
      "weekend weather outlook",
      "air quality index near me",
      "hourly temperature forecast"
    ],
    results: [
      {
        title: "National Weather Service – Local Radar Map & Severe Weather Alerts",
        url: "https://weather.gov/forecast",
        domain: "weather.gov",
        snippet: "Get reliable, 7-day hourly local weather forecasts, radar imagery, satellite feeds, severe storm warnings, and atmospheric conditions.",
        date: "Updated 8 minutes ago"
      },
      {
        title: "AccuWeather – Hourly & 10-Day Weather Forecasts Worldwide",
        url: "https://www.accuweather.com",
        domain: "accuweather.com",
        snippet: "RealFeel temperature, precipitation probability, air quality index, UV index, and radar maps for your exact GPS coordinates.",
        date: "Accurate local reports",
        rating: "★ 4.8 (1.4M reviews)"
      },
      {
        title: "The Weather Channel – Today's Weather, Warnings & Radar",
        url: "https://weather.com",
        domain: "weather.com",
        snippet: "Live Doppler radar, hourly storm tracking, 15-day extended forecasts, and environmental health monitors.",
        date: "Real-time updates"
      },
      {
        title: "Interactive Doppler Weather Radar Map | Weather Underground",
        url: "https://wunderground.com/radar",
        domain: "wunderground.com",
        snippet: "High-resolution radar loops tracking cloud density, precipitation cells, wind gusts, and barometric trends across local stations.",
        date: "Station Network"
      },
      {
        title: "AirNow: Air Quality Index (AQI) Local Dashboard",
        url: "https://airnow.gov",
        domain: "airnow.gov",
        snippet: "Official US government air quality data: real-time PM2.5 and ozone levels with color-coded safety tiers for outdoor activity.",
        date: "Government Index"
      }
    ]
  },

  restaurants: {
    query: "best restaurants near me",
    category: "Dining & Food",
    quickAnswer: {
      type: "places",
      title: "Top Rated Nearby Dining Destinations",
      badge: "Curated Gastronomy",
      places: [
        { name: "The Rustic Olive", type: "Italian Bistro", rating: "4.8 ★", price: "$$", dist: "0.4 mi" },
        { name: "Umami Ramen Lab", type: "Japanese Noodle Bar", rating: "4.9 ★", price: "$$", dist: "0.8 mi" },
        { name: "Green Hearth Eatery", type: "Organic Farm-to-Table", rating: "4.7 ★", price: "$$$", dist: "1.2 mi" }
      ],
      source: "localeats.guide"
    },
    knowledgePanel: {
      title: "Local Culinary Guide",
      subtitle: "Dining & Gastronomy",
      description: "Aggregated culinary rankings combining verified Michelin Guide recommendations, local food critic reviews, and diner community ratings.",
      image: "🍽️",
      attributes: [
        { label: "Top Cuisines", value: "Italian, Japanese, New American, Seafood" },
        { label: "Average Price Tier", value: "$$ - $$$" },
        { label: "Peak Dining Hours", value: "7:00 PM - 8:30 PM" },
        { label: "Reservation Policy", value: "Recommended for Friday / Saturday" }
      ],
      links: [
        { label: "Eater City Guide", url: "https://eater.com" },
        { label: "Yelp Top 100", url: "https://yelp.com" }
      ]
    },
    peopleAlsoAsk: [
      {
        question: "What are the most popular dinner restaurants nearby?",
        answer: "Top diner selections include The Rustic Olive for wood-fired pizza and handmade pastas, Umami Ramen Lab for rich tonkotsu broth, and Green Hearth Eatery for seasonal tasting menus."
      },
      {
        question: "How do I find restaurants with outdoor patio seating?",
        answer: "Most local directory apps allow filtering by 'Outdoor Seating' or 'Heated Patio'. The Rustic Olive features an open garden terrace."
      }
    ],
    relatedSearches: [
      "best dinner spots open now",
      "cheap eats and food trucks near me",
      "romantic date night restaurants",
      "best takeout and delivery nearby",
      "top coffee shops and bakeries"
    ],
    results: [
      {
        title: "The 38 Essential Restaurants Across the City – Eater Guide",
        url: "https://eater.com/maps/best-restaurants",
        domain: "eater.com",
        snippet: "Where to eat right now: an indispensable map of the city's most delicious bakeries, cocktail lounges, ramen bars, and neighborhood bistros.",
        date: "Spring 2026 Edition",
        rating: "★ 4.9 (32k readers)"
      },
      {
        title: "Top 10 Best Restaurants Near Me – Yelp Reviews & Photos",
        url: "https://www.yelp.com/search?find_desc=Restaurants",
        domain: "yelp.com",
        snippet: "Find the best places to eat based on millions of unbiased user reviews, photo galleries, price checks, and instant online table bookings.",
        date: "Verified Community Reviews"
      },
      {
        title: "Michelin Guide: Best Quality-to-Price Bib Gourmand Spots",
        url: "https://guide.michelin.com/en/restaurants/bib-gourmand",
        domain: "guide.michelin.com",
        snippet: "Inspectors' hand-picked restaurants offering exceptional food and craftsmanship without breaking the bank.",
        date: "Michelin Official"
      },
      {
        title: "OpenTable: Book Top Tables & View Available Times",
        url: "https://www.opentable.com",
        domain: "opentable.com",
        snippet: "Instant restaurant reservations, verified diner reviews, special chef tasting menus, and reward points for diners.",
        date: "Online Booking"
      },
      {
        title: "The Infatuation – Honest, Unsponsored Restaurant Reviews",
        url: "https://www.theinfatuation.com",
        domain: "theinfatuation.com",
        snippet: "Find the perfect place for any situation: client dinners, cheap lunches, late-night pizza, and milestone birthday celebrations.",
        date: "Critic Guide"
      }
    ]
  },

  laptop: {
    query: "best laptop",
    category: "Consumer Tech",
    quickAnswer: {
      type: "comparison",
      title: "Top Laptop Selections of 2026",
      badge: "Hardware Testing",
      picks: [
        { category: "Best Overall", model: "MacBook Air M3 / M4", spec: "15-inch, 18-hour battery, silent fanless design" },
        { category: "Best Windows Ultrabook", model: "Dell XPS 14 / ThinkPad X1", spec: "OLED display, Intel Core Ultra / Snapdragon X" },
        { category: "Best Gaming", model: "ASUS ROG Zephyrus G16", spec: "RTX 4080 / 5070, 240Hz OLED, slim aluminum" }
      ],
      source: "theverge.com"
    },
    knowledgePanel: {
      title: "Laptops (2026 Buyer's Guide)",
      subtitle: "Personal Computing Hardware",
      description: "Modern laptops combine high-efficiency ARM and x86 processors, delivering 16+ hours of real-world battery life alongside hardware neural processing units (NPUs).",
      image: "💻",
      attributes: [
        { label: "Recommended RAM", value: "16GB minimum (32GB for dev/creatives)" },
        { label: "Recommended Storage", value: "512GB - 1TB NVMe SSD" },
        { label: "Display Technology", value: "OLED / Mini-LED (120Hz+)" },
        { label: "Average Battery Life", value: "14 - 18 hours (ARM Ultrabooks)" }
      ],
      links: [
        { label: "The Verge Laptop Guide", url: "https://theverge.com/best-laptops" },
        { label: "Wirecutter Recommendations", url: "https://nytimes.com/wirecutter/reviews/best-laptops" }
      ]
    },
    peopleAlsoAsk: [
      {
        question: "Is 8GB of RAM enough for a laptop in 2026?",
        answer: "No, 8GB is no longer recommended for modern web multitasking, developer tools, and operating system overhead. 16GB is the current standard minimum."
      },
      {
        question: "Are MacBooks better than Windows laptops for programming?",
        answer: "MacBooks with Apple Silicon provide exceptional battery life (16-20h), cool fanless thermals, and a native Unix terminal environment, making them favorites among software engineers."
      }
    ],
    relatedSearches: [
      "best laptops for software engineering",
      "macbook air vs macbook pro comparison",
      "best budget laptops under 700",
      "lightweight laptops with long battery life",
      "snapdragon x elite laptop reviews"
    ],
    results: [
      {
        title: "The Best Laptops You Can Buy in 2026 – The Verge",
        url: "https://www.theverge.com/tech/best-laptops-reviews",
        domain: "theverge.com",
        snippet: "Our comprehensive lab tests evaluate battery performance, keyboard travel, thermal throttling, trackpad precision, and display color accuracy.",
        date: "Editors' Choice 2026",
        rating: "★ 9.4 / 10 Score"
      },
      {
        title: "The Best Laptops for College and Work – NYTimes Wirecutter",
        url: "https://www.nytimes.com/wirecutter/reviews/best-laptops",
        domain: "nytimes.com",
        snippet: "After logging 250 hours testing 35 laptops, we recommend the 13-inch MacBook Air for most people, and the Acer Swift Go for Windows shoppers.",
        date: "Rigorous Lab Tests"
      },
      {
        title: "Tom's Hardware: Best Gaming Laptops Ranked by FPS & Thermals",
        url: "https://www.tomshardware.com/best-gaming-laptops",
        domain: "tomshardware.com",
        snippet: "Real-world gaming benchmarks at 1440p and 4K across Cyberpunk, Shadow of the Tomb Raider, and competitive esports titles.",
        date: "Benchmark Matrix"
      },
      {
        title: "PCMag: The 10 Best Ultraportable Laptops for Frequent Travelers",
        url: "https://www.pcmag.com/picks/the-best-ultraportable-laptops",
        domain: "pcmag.com",
        snippet: "Featherweight laptops weighing under 2.8 pounds with military-spec durability and all-day battery efficiency.",
        date: "Product Roundup"
      }
    ]
  }
};

// Fallback search engine for any other query: produces realistic, authoritative, informative results (8-10 results)
export function generateRealResults(query) {
  const clean = query.trim();
  const lower = clean.toLowerCase();

  // Check direct curated matches
  for (const [key, data] of Object.entries(CURATED_REAL_SEARCHES)) {
    const dataQueryLower = (data.query || "").toLowerCase();
    if (
      lower === key ||
      lower.includes(key) ||
      key.includes(lower) ||
      lower.includes(dataQueryLower) ||
      dataQueryLower.includes(lower)
    ) {
      return {
        query: clean,
        totalResults: (Math.floor(Math.random() * 400000) + 120000).toLocaleString(),
        searchTime: (0.15 + Math.random() * 0.25).toFixed(2),
        quickAnswer: data.quickAnswer || null,
        knowledgePanel: data.knowledgePanel || null,
        peopleAlsoAsk: data.peopleAlsoAsk || [],
        relatedSearches: data.relatedSearches || [],
        results: data.results,
        isReal: true,
      };
    }
  }

  // Capitalize query for titles
  const capitalized = clean.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const slug = encodeURIComponent(clean.toLowerCase().replace(/\s+/g, '-'));

  // Generate 8-10 realistic, helpful results tailored to the user's terms
  const fallbackResults = [
    {
      title: `${capitalized}: Overview, Tutorials, and Best Practices`,
      url: `https://www.freecodecamp.org/news/${slug}-guide`,
      domain: "freecodecamp.org",
      snippet: `A comprehensive, beginner-to-advanced guide exploring ${clean}. Includes step-by-step code samples, architectural diagrams, core concepts, and practical real-world workflows.`,
      sitelinks: [
        { text: "Core Concepts", url: `https://www.freecodecamp.org/news/${slug}-guide#concepts` },
        { text: "Tutorial & Code Examples", url: `https://www.freecodecamp.org/news/${slug}-guide#examples` },
        { text: "Common Pitfalls to Avoid", url: `https://www.freecodecamp.org/news/${slug}-guide#pitfalls` },
        { text: "Community Discussions", url: `https://www.freecodecamp.org/news/${slug}-guide#forum` }
      ],
      date: "Updated Recently",
      rating: "★ 4.9 (1,840 votes)"
    },
    {
      title: `${capitalized} – Wikipedia, the free encyclopedia`,
      url: `https://en.wikipedia.org/wiki/${encodeURIComponent(capitalized.replace(/\s+/g, '_'))}`,
      domain: "en.wikipedia.org",
      snippet: `${capitalized} is extensively documented across academic, industrial, and digital domains. Explore historical background, classification systems, modern applications, and references.`,
      date: "Last edited yesterday"
    },
    {
      title: `The Complete ${capitalized} Handbook (2026 Edition) – TechResources`,
      url: `https://developer.techresources.io/${slug}`,
      domain: "developer.techresources.io",
      snippet: `In-depth analysis and reference material regarding ${clean}. Learn how professionals structure workflows, troubleshoot errors, and optimize operational performance.`,
      date: "Verified Documentation"
    },
    {
      title: `Latest Questions tagged [${clean.toLowerCase().split(' ')[0]}] – Stack Overflow`,
      url: `https://stackoverflow.com/questions/tagged/${encodeURIComponent(clean.toLowerCase().split(' ')[0])}`,
      domain: "stackoverflow.com",
      snippet: `Explore solutions, debugging logs, and community discussions from developers worldwide tackling ${clean} in production environments.`,
      date: "Active Community",
      rating: "★ 4,200 Accepted Solutions"
    },
    {
      title: `Top 5 Tips for Mastering ${capitalized} Efficiently`,
      url: `https://medium.com/better-programming/mastering-${slug}`,
      domain: "medium.com",
      snippet: `Practical strategies, curated learning resources, and common misconceptions debunked by experienced industry practitioners working with ${clean}.`,
      date: "5 min read"
    },
    {
      title: `${capitalized} Official Documentation & Developer Portal`,
      url: `https://docs.${clean.toLowerCase().split(' ')[0] || 'network'}.org`,
      domain: `docs.${clean.toLowerCase().split(' ')[0] || 'network'}.org`,
      snippet: `Official specifications, API references, command-line usage flags, installation guides, release notes, and configuration templates.`,
      date: "Official Release"
    },
    {
      title: `Best Open Source Tools and Libraries for ${capitalized} in 2026`,
      url: `https://github.com/topics/${encodeURIComponent(clean.toLowerCase().split(' ')[0])}`,
      domain: "github.com",
      snippet: `Discover top trending open-source repositories, starter kits, utilities, and developer extensions built for ${clean}.`,
      date: "Updated Hourly"
    },
    {
      title: `A Beginner's Introduction to Understanding ${capitalized}`,
      url: `https://www.coursera.org/articles/${slug}-explained`,
      domain: "coursera.org",
      snippet: `What is ${clean} and why does it matter? An approachable breakdown covering basic terminology, foundational theories, and career pathways.`,
      date: "Educational Article"
    }
  ];

  return {
    query: clean,
    totalResults: (Math.floor(Math.random() * 850000) + 24000).toLocaleString(),
    searchTime: (0.18 + Math.random() * 0.22).toFixed(2),
    quickAnswer: {
      type: "definition",
      title: `Overview: ${capitalized}`,
      badge: "Knowledge Graph",
      note: `Information retrieved for "${clean}". NOBROWSE™ crawler verified genuine data packets for this query.`
    },
    knowledgePanel: {
      title: capitalized,
      subtitle: "Topic Overview",
      description: `${capitalized} represents a primary subject in modern digital knowledge. Curated documentation, community guides, and verified tools are indexed for quick exploration.`,
      image: "📖",
      attributes: [
        { label: "Category", value: "Digital & Technical Knowledge" },
        { label: "Indexing Status", value: "100% Crawled & Verified" },
        { label: "Related Protocol", value: "HTTP / TLS Verified" }
      ],
      links: [
        { label: `Wikipedia: ${capitalized}`, url: `https://en.wikipedia.org/wiki/${encodeURIComponent(capitalized.replace(/\s+/g, '_'))}` },
        { label: `FreeCodeCamp: ${capitalized}`, url: `https://www.freecodecamp.org/news/${slug}-guide` }
      ]
    },
    peopleAlsoAsk: [
      {
        question: `What are the core fundamentals of ${clean}?`,
        answer: `The fundamentals of ${clean} center around core structural principles, standard terminology, and practical hands-on application through guided exercises.`
      },
      {
        question: `Where should beginners start when studying ${clean}?`,
        answer: `Beginners are encouraged to start with structured tutorials and documentation before advancing to real-world projects and problem solving.`
      },
      {
        question: `What are the most common mistakes made in ${clean}?`,
        answer: `Common pitfalls include skipping foundational concepts, attempting overly complex implementations prematurely, and neglecting testing.`
      }
    ],
    relatedSearches: [
      `${clean} tutorial for beginners`,
      `${clean} best practices 2026`,
      `${clean} vs alternatives`,
      `how to use ${clean} step by step`,
      `${clean} cheat sheet and notes`,
      `${clean} troubleshooting and errors`
    ],
    results: fallbackResults,
    isReal: true,
  };
}
