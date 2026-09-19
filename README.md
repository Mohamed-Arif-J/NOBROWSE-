# NOBROWSE™
> *"The browser that sometimes understands you."*  
> *"The internet, approximately."*

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](#)
[![Code Quality](https://img.shields.io/badge/lint-0%20warnings-brightgreen.svg)](#)
[![Engine Ratio](https://img.shields.io/badge/Probability-40%25%20Useful%20%7C%2060%25%20Chaos-purple.svg)](#)
[![Theme](https://img.shields.io/badge/Theme-Classic%20altf4%20Retro-008080.svg)](#)
[![Sound System](https://img.shields.io/badge/Audio-Web%20Audio%20API%20%28Pac--Man%20Included%29-ffb700.svg)](#)
[![System Integrity](https://img.shields.io/badge/Integrity-Questionable-amber.svg)](#)

---

## 🌐 Project Overview

**NOBROWSE™** is an experimental, production-grade browser and search application wrapped in an authentic retro **altf4 beveled desktop aesthetic**, designed with a deliberate **40% / 60% probability engine**:

- **40% of searches** → Process normally and display an authoritative, extended search results experience (8–12 comprehensive results, Knowledge Graph panels, expandable "People Also Ask" accordions, pagination, and interactive simulated websites for `react.dev`, `stackoverflow.com`, and `wikipedia.org`).
- **60% of searches** → Intentionally trigger one of ten randomized chaos scenarios (ranging from classic Blue Screens of Death accompanied by synthesized **Pac-Man death audio**, philosophical 404 dialogs, semantic query reinterpretations, AI confusion episodes, and uncooperative loading bars).

> *"A browser built with the finest mid-90s engineering by someone who understands the internet completely, but chooses not to cooperate."*

---

## 🎲 The 40% / 60% Core Decision Mechanic

At the center of NOBROWSE™ is the **Chaos Engine** (`src/utils/chaosEngine.js`). When a user submits a query:

```javascript
// 1. Check for dedicated Easter Egg triggers first
const easterEgg = checkEasterEgg(cleanQuery);
if (easterEgg) return easterEgg;

// 2. Strict 40% Useful / 60% Chaos decision roll
const isRealSearch = Math.random() < 0.4;
```

### 1. 🟢 Useful Mode (40% of Searches)
When this branch activates, the user receives an authentic, full-featured search and browsing workflow:
- **Comprehensive Results (8–12 Entries)**: Real breadcrumbs, domain badges, star ratings, timestamps, and deep sublinks.
- **Two-Column SERP Layout**: Main results on the left and a sticky **Knowledge Graph Panel** on the right with quick facts, metadata, and verified links.
- **People Also Ask Accordion**: Interactive questions that expand with detailed answers and instant search triggers.
- **Interactive Simulated Websites**:
  - **`react.dev`**: Documentation reader with an interactive, live-state counter sandbox (`count is 0`).
  - **`stackoverflow.com`**: Upvoting/downvoting question view (`▲ 8542 ▼`), tags, accepted answers, and live CSS centering preview.
  - **`wikipedia.org`**: Full encyclopedia article layout with infobox and cross-links.
  - **Universal Simulated Reader**: Clean reading mode for external domains with Reader View vs. Live Frame toggles.
- **Browser Navigation Chrome**: Working Back (`←`), Forward (`→`), Reload (`⟳`), Home (`🏠`), bookmarks star, and SSL security inspector.

---

### 2. 🔴 Chaos Mode (60% of Searches)
When chaos strikes, the engine randomly selects one of ten distinct scenarios:

| # | Scenario | Visual & Audio Experience |
|---|---|---|
| **1** | **Fake System Error (BSOD)** | Classic retro Blue Screen of Death (`0xWHY-DID-YOU-SEARCH-THIS`, `0xOUT-OF-CHEESE-ERROR`, `0x404-COFFEE-NOT-FOUND`) with memory dumps and automatic **Pac-Man Death / Game-Over sound synthesis**, complete with a replay button. |
| **2** | **Random 404 Alert** | Retro altf4 MessageBox dialog with 6 illustrated variations (*"The page went outside"*, *"Schrödinger's Page"*, *"The page has chosen a better life"*). |
| **3** | **Wrong Interpretation** | Semantic translation engine that hilariously misinterprets user intent (*"how to learn Python"* → *"where can I find snakes?"*, *"React tutorial"* → *"React to my problems"*). |
| **4** | **Completely Unrelated** | Authentic SERP layout displaying absurdly irrelevant articles (*"10 reasons cats hate programmers"*, *"Why your code works on your machine"*, *"A suspiciously specific duck"*). |
| **5** | **Fake 99% Loading** | Progress bar crawls to 99%, freezes solidly for 4 seconds, then cancels itself: *"Search cancelled. The browser got bored."* |
| **6** | **Internet Disconnected** | `🌐 INTERNET STATUS: ❌` retro dialog with interactive ping diagnostics (*"Destination host is unenthusiastic"*). |
| **7** | **AI Confusion Episode** | *"AI analyzed your query. AI processed 14,293 possibilities. AI recommends: A duck."* Features an interactive duck that quacks using synthesized Web Audio. |
| **8** | **Did You Mean?** | Prompts surreal search corrections with `[ YES ]`, `[ NO ]`, and `[ WHY ]` buttons. Clicking `[ WHY ]` admits: *"Excellent question. We don't know either."* |
| **9** | **Useless Answer Checklist** | 3-step checklist where Step 3 (*"You won't. You will click another result"*) is physically locked by the operating system. |
| **10** | **Bitmap Meme Viewer** | 90s Paint window framing retro 8-bit SVG artwork (*"The Confused Computer"*, *"Broken Internet"*, *"This is Fine™"*). |

---

### 3. ✨ Secret Easter Eggs
Entering specific keywords bypasses the randomizer to reveal hidden Easter Eggs:
- `why` → *"That's above our pay grade."*
- `google` → *"Nice try."*
- `chatgpt` → *"You're already using AI."*
- `nobrowse` → *"The browser is self-aware."*
- `404` → *"404ception."*
- `hello` → *"Hello. Please leave."*
- `matrix` → *"Follow the white duck."*
- `coffee` → *"HTTP 418: I'm a teapot."*
- `answer to life` → *"42."*
- `recursion` → *"Did you mean: recursion?"*

---

## 🔊 Native Web Audio API Synthesizer

NOBROWSE™ includes a built-in sound synthesizer (`src/utils/audio.js`) requiring **zero external MP3/WAV audio files**:
- **Pac-Man Death / Game-Over Theme**: 11 descending chromatic pitch sweeps + double comical boop for Blue Screen panics and system alerts.
- **Dial-Up & Search Swoosh**: Ascending triangle sweep.
- **Success Chime**: Futuristic C-major arpeggio for 40% real search discoveries.
- **Retro Chaos Bloop**: Dissonant descending 8-bit tones.
- **Duck Quack Synth**: Multi-stage pitch ramp for AI confusion.
- **Interactive Audio Previews**: Test every synthesized effect directly inside **Internet Options (`nobrowse://settings`)**.

---

## 🖥️ Authentic Retro Beveled Aesthetic

- **Beveled Silver Palette**: Authentic `#c0c0c0` backgrounds with `#ffffff` light and `#808080` / `#000000` shadow bevels.
- **Titlebars & Controls**: Navy blue gradient titlebars with classic `_ □ ✕` control buttons.
- **Custom altf4 Branding**: All branding unified with retro `altf4` iconography.
- **Streamlined Tab Chrome**: Tabs connect directly to the titlebar, maximizing vertical browsing space.

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| `Ctrl + T` / `Cmd + T` | Open a new browser tab |
| `Ctrl + W` / `Cmd + W` | Close the current active tab |
| `Ctrl + H` / `Cmd + H` | Open / close the Search History drawer |
| `Ctrl + B` / `Cmd + B` | Open / close the Bookmarks manager |
| `Esc` | Dismiss any open dialog, modal, or side drawer |
| `Enter` | Execute address bar query or navigate to URL |

---

## 🛠️ Architecture & Tech Stack

- **Core**: React 19 + Vite 8
- **Styling**: Tailwind CSS v4 + Custom altf4 Retro Utility Engine
- **Icons**: Lucide React
- **Sound**: Native Web Audio API (`AudioContext`, `OscillatorNode`, `GainNode`)
- **Storage**: `localStorage` (Isolated keys for history, bookmarks, telemetry stats, and options)
- **Linter & Verification**: Oxlint (0 errors, 0 warnings) + Custom 1,000-trial engine test suite

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or newer, tested on Node v24)
- npm (v9 or newer)

### 1. Clone the Repository
```bash
git clone https://github.com/Mohamed-Arif-J/NOBROWSE-.git
cd NOBROWSE-
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 4. Run Test Suite
```bash
npm test
```
Verifies Easter Eggs, 40/60 probabilistic engine balance over 1,000 runs, and dynamic fallback search generation.

### 5. Lint Check
```bash
npm run lint
```

### 6. Production Build
```bash
npm run build
```

---

## 🛡️ Safety & Stability

While NOBROWSE™ simulates chaos, **the application is 100% crash-safe and non-destructive**:
- Zero actual browser freezes or infinite memory allocations.
- Zero tracking, malware, or unwanted downloads.
- Clean React component state boundaries with deterministic simulated panics.

---

## 📄 License

MIT License. Designed with humor, precision, and a healthy skepticism of modern search algorithms.
