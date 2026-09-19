// NOBROWSE™ - Simulated Web Page Engine (Substantial, authentic browser experience)

import React, { useState } from 'react';
import {
  Globe,
  Lock,
  ExternalLink,
  Bookmark,
  Check,
  ArrowLeft,
  Share2
} from 'lucide-react';
import { soundEffects } from '../utils/audio';

export function WebPageView({
  pageData,
  onBookmark,
  isBookmarked,
  onBackToSearch,
  onNavigate,
  soundEnabled,
  volume
}) {
  const [copied, setCopied] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(100);
  const [viewMode, setViewMode] = useState('simulated'); // 'simulated' | 'iframe'
  const [activeDocTab, setActiveDocTab] = useState('overview');
  const [upvotes, setUpvotes] = useState(8542);
  const [hasVoted, setHasVoted] = useState(false);
  const [counter, setCounter] = useState(0);

  const title = pageData?.title || "Web Document";
  const url = pageData?.url || "https://internet.archive.org";
  const snippet = pageData?.snippet || "This document has been retrieved from the simulated network buffer.";
  const domain = pageData?.domain || url.replace(/^https?:\/\//, '').split('/')[0] || "web.network";

  const lowerTitle = (title + " " + snippet + " " + url).toLowerCase();
  const bookmarked = isBookmarked ? isBookmarked(url) : false;

  const handleCopyUrl = () => {
    navigator.clipboard?.writeText(url);
    setCopied(true);
    if (soundEnabled) soundEffects.click(volume);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenExternal = () => {
    if (soundEnabled) soundEffects.click(volume);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleVote = (delta) => {
    if (hasVoted) return;
    setUpvotes(prev => prev + delta);
    setHasVoted(true);
    if (soundEnabled) soundEffects.click(volume);
  };

  const handleInternalNav = (targetUrl, targetTitle) => {
    if (soundEnabled) soundEffects.click(volume);
    if (onNavigate) {
      onNavigate(targetUrl, targetTitle);
    }
  };

  // =========================================================================
  // 1. REACT.DEV - OFFICIAL REACT DOCUMENTATION
  // =========================================================================
  if (lowerTitle.includes('react.dev') || (lowerTitle.includes('react') && !lowerTitle.includes('stackoverflow'))) {
    return (
      <div className="flex-1 w-full flex flex-col bg-white overflow-hidden text-black font-sans text-left">
        {/* Browser Page Header Sub-bar */}
        {renderBrowserSubBar()}

        {/* Website Container */}
        <div
          className="flex-1 flex flex-col overflow-y-auto"
          style={{ fontSize: `${zoomLevel}%` }}
        >
          {viewMode === 'iframe' ? (
            renderIframeView()
          ) : (
            <div className="min-h-full flex flex-col bg-[#23272f] text-[#f6f7f9]">
              {/* React Website Navbar */}
              <header className="h-14 border-b border-[#343a46] px-4 flex items-center justify-between bg-[#1b1e24] sticky top-0 z-10 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#149eca]/20 flex items-center justify-center text-[#149eca] font-black text-lg">
                    ⚛
                  </div>
                  <span className="font-bold text-white text-base tracking-tight">React</span>
                  <span className="text-[11px] bg-[#343a46] text-[#149eca] px-1.5 py-0.5 rounded font-mono">v19.0.0</span>
                </div>

                <nav className="hidden sm:flex items-center gap-6 text-sm text-[#f6f7f9]">
                  <button
                    onClick={() => setActiveDocTab('overview')}
                    className={`hover:text-[#149eca] ${activeDocTab === 'overview' ? 'text-[#149eca] font-bold' : ''}`}
                  >
                    Learn
                  </button>
                  <button
                    onClick={() => setActiveDocTab('reference')}
                    className={`hover:text-[#149eca] ${activeDocTab === 'reference' ? 'text-[#149eca] font-bold' : ''}`}
                  >
                    Reference
                  </button>
                  <button
                    onClick={() => setActiveDocTab('community')}
                    className={`hover:text-[#149eca] ${activeDocTab === 'community' ? 'text-[#149eca] font-bold' : ''}`}
                  >
                    Community
                  </button>
                  <button
                    onClick={() => setActiveDocTab('blog')}
                    className={`hover:text-[#149eca] ${activeDocTab === 'blog' ? 'text-[#149eca] font-bold' : ''}`}
                  >
                    Blog
                  </button>
                </nav>

                <div className="flex items-center gap-2">
                  <span className="text-xs bg-[#343a46] px-2.5 py-1 rounded text-gray-300 font-mono">
                    ★ 225,000 on GitHub
                  </span>
                </div>
              </header>

              {/* React Main Layout: Sidebar + Content */}
              <div className="flex-1 flex max-w-7xl w-full mx-auto">
                {/* Left Sidebar */}
                <aside className="w-64 border-r border-[#343a46] p-4 hidden md:block bg-[#1b1e24]/50 shrink-0 text-xs space-y-4">
                  <div>
                    <span className="font-bold text-gray-400 uppercase tracking-wider text-[10px] block mb-2">Get Started</span>
                    <ul className="space-y-1.5 text-gray-300">
                      <li
                        onClick={() => setActiveDocTab('overview')}
                        className={`p-1.5 rounded cursor-pointer ${activeDocTab === 'overview' ? 'bg-[#149eca]/20 text-[#149eca] font-bold' : 'hover:bg-[#343a46]'}`}
                      >
                        Quick Start
                      </li>
                      <li
                        onClick={() => handleInternalNav('https://react.dev/learn/tutorial-tic-tac-toe', 'Tutorial: Tic-Tac-Toe – React')}
                        className="p-1.5 rounded hover:bg-[#343a46] cursor-pointer"
                      >
                        Tutorial: Tic-Tac-Toe
                      </li>
                      <li
                        onClick={() => handleInternalNav('https://react.dev/learn/thinking-in-react', 'Thinking in React – React')}
                        className="p-1.5 rounded hover:bg-[#343a46] cursor-pointer"
                      >
                        Thinking in React
                      </li>
                    </ul>
                  </div>

                  <div>
                    <span className="font-bold text-gray-400 uppercase tracking-wider text-[10px] block mb-2">Core Concepts</span>
                    <ul className="space-y-1.5 text-gray-300">
                      <li
                        onClick={() => setActiveDocTab('components')}
                        className={`p-1.5 rounded cursor-pointer ${activeDocTab === 'components' ? 'bg-[#149eca]/20 text-[#149eca] font-bold' : 'hover:bg-[#343a46]'}`}
                      >
                        Describing the UI
                      </li>
                      <li
                        onClick={() => setActiveDocTab('state')}
                        className={`p-1.5 rounded cursor-pointer ${activeDocTab === 'state' ? 'bg-[#149eca]/20 text-[#149eca] font-bold' : 'hover:bg-[#343a46]'}`}
                      >
                        Adding Interactivity (State)
                      </li>
                      <li
                        onClick={() => setActiveDocTab('hooks')}
                        className={`p-1.5 rounded cursor-pointer ${activeDocTab === 'hooks' ? 'bg-[#149eca]/20 text-[#149eca] font-bold' : 'hover:bg-[#343a46]'}`}
                      >
                        Managing State & Hooks
                      </li>
                    </ul>
                  </div>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1 p-6 sm:p-10 max-w-4xl space-y-6">
                  {/* Breadcrumb */}
                  <div className="text-xs text-[#149eca] flex items-center gap-1.5 font-mono">
                    <span>Learn React</span>
                    <span>›</span>
                    <span>Quick Start</span>
                  </div>

                  <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    Quick Start
                  </h1>

                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                    Welcome to the React documentation! React apps are made out of <strong>components</strong>. A component is a piece of the UI (user interface) that has its own logic and appearance.
                  </p>

                  {/* Callout box */}
                  <div className="p-4 rounded-lg bg-[#149eca]/10 border border-[#149eca]/30 text-sm text-gray-200">
                    <strong className="text-[#149eca] block mb-1">What you will learn:</strong>
                    <ul className="list-disc list-inside space-y-1 text-xs">
                      <li>How to create and nest components</li>
                      <li>How to add markup with JSX and styles with CSS</li>
                      <li>How to display dynamic data and respond to user events</li>
                      <li>How to share data between components using state</li>
                    </ul>
                  </div>

                  {/* Section 1 */}
                  <div className="space-y-3 pt-4">
                    <h2 className="text-2xl font-bold text-white border-b border-[#343a46] pb-2">
                      Creating and nesting components
                    </h2>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      React components are JavaScript functions that return markup. Declare a component using standard function syntax and return JSX tags:
                    </p>

                    {/* Interactive Code Playground */}
                    <div className="rounded-lg border border-[#343a46] overflow-hidden bg-[#16181d]">
                      <div className="bg-[#1b1e24] px-4 py-2 flex items-center justify-between border-b border-[#343a46] text-xs font-mono text-gray-400">
                        <span>App.jsx (Live Interactive Component)</span>
                        <span className="text-emerald-400">● Running in Browser</span>
                      </div>
                      <pre className="p-4 text-xs font-mono text-gray-200 overflow-x-auto leading-relaxed">
                        <code>{`function MyButton() {
  const [count, setCount] = useState(${counter});

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}`}</code>
                      </pre>
                      {/* Live interactive sandbox component */}
                      <div className="p-4 bg-[#23272f] border-t border-[#343a46] flex flex-col items-center justify-center gap-2">
                        <span className="text-[11px] text-gray-400 font-mono">Live Sandbox Output:</span>
                        <button
                          onClick={() => {
                            setCounter(c => c + 1);
                            if (soundEnabled) soundEffects.click(volume);
                          }}
                          className="px-5 py-2 rounded bg-[#149eca] hover:bg-[#149eca]/90 text-white font-bold text-sm shadow-md transition-transform active:scale-95"
                        >
                          Clicked {counter} times 🚀
                        </button>
                        <span className="text-[10px] text-gray-400">Click the button above to test real interactive React state inside this browser tab!</span>
                      </div>
                    </div>
                  </div>

                  {/* Section 2: Hooks */}
                  <div className="space-y-3 pt-4">
                    <h2 className="text-2xl font-bold text-white border-b border-[#343a46] pb-2">
                      Using Hooks in React
                    </h2>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Functions starting with <code>use</code> are called Hooks. <code>useState</code> is a built-in Hook provided by React. Hooks are more restrictive than regular functions—you can only call Hooks at the top of your components.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div
                        onClick={() => handleInternalNav('https://react.dev/reference/react/useState', 'useState – React Reference')}
                        className="p-4 rounded-lg bg-[#1b1e24] border border-[#343a46] hover:border-[#149eca] cursor-pointer transition-colors"
                      >
                        <h4 className="font-bold text-[#149eca] text-sm mb-1">useState</h4>
                        <p className="text-xs text-gray-300">Declare a state variable that you can update directly to trigger UI re-renders.</p>
                      </div>

                      <div
                        onClick={() => handleInternalNav('https://react.dev/reference/react/useEffect', 'useEffect – React Reference')}
                        className="p-4 rounded-lg bg-[#1b1e24] border border-[#343a46] hover:border-[#149eca] cursor-pointer transition-colors"
                      >
                        <h4 className="font-bold text-[#149eca] text-sm mb-1">useEffect</h4>
                        <p className="text-xs text-gray-300">Synchronize a component with external systems like network APIs or the browser DOM.</p>
                      </div>
                    </div>
                  </div>

                  {/* Next Step Banner */}
                  <div className="pt-6 border-t border-[#343a46] flex justify-between items-center text-sm">
                    <span className="text-gray-400">Next section:</span>
                    <button
                      onClick={() => handleInternalNav('https://react.dev/learn/describing-the-ui', 'Describing the UI – React')}
                      className="px-4 py-2 rounded bg-[#343a46] hover:bg-[#149eca] hover:text-white font-bold transition-colors flex items-center gap-1.5 text-xs text-white"
                    >
                      <span>Describing the UI</span>
                      <span>→</span>
                    </button>
                  </div>
                </main>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // =========================================================================
  // 2. STACK OVERFLOW - COMMUNITY QUESTIONS & ANSWERS
  // =========================================================================
  if (lowerTitle.includes('stackoverflow.com') || lowerTitle.includes('stack overflow')) {
    return (
      <div className="flex-1 w-full flex flex-col bg-white overflow-hidden text-black font-sans text-left">
        {renderBrowserSubBar()}

        <div
          className="flex-1 overflow-y-auto bg-white"
          style={{ fontSize: `${zoomLevel}%` }}
        >
          {viewMode === 'iframe' ? (
            renderIframeView()
          ) : (
            <div className="max-w-5xl mx-auto p-4 sm:p-8">
              {/* StackOverflow Top Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-[#f48024] text-white flex items-center justify-center font-black rounded-sm text-sm">
                    ≡
                  </div>
                  <span className="font-bold text-gray-900 text-lg">
                    stack<strong>overflow</strong>
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <span className="text-gray-600">Active Developer Community</span>
                  <button
                    onClick={handleOpenExternal}
                    className="win95-btn px-2 py-1 text-xs text-blue-900 font-bold"
                  >
                    View on Real StackOverflow ↗
                  </button>
                </div>
              </div>

              {/* Question Header */}
              <div className="border-b border-gray-200 pb-3 mb-6">
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  {title.replace(/– Stack Overflow.*/, '') || "How do I center a div horizontally and vertically in CSS?"}
                </h1>
                <div className="flex flex-wrap gap-4 text-xs text-gray-500 font-mono">
                  <span>Asked: <strong className="text-gray-700">12 years, 4 months ago</strong></span>
                  <span>Modified: <strong className="text-gray-700">yesterday</strong></span>
                  <span>Viewed: <strong className="text-gray-700">4,821,049 times</strong></span>
                </div>
              </div>

              {/* Question Content + Voting */}
              <div className="flex gap-4 sm:gap-6 mb-8">
                {/* Voting Column */}
                <div className="flex flex-col items-center gap-1 shrink-0 text-gray-500">
                  <button
                    onClick={() => handleVote(1)}
                    className="p-1 hover:text-[#f48024] transition-colors"
                    title="This question shows research effort; it is useful and clear"
                  >
                    ▲
                  </button>
                  <span className="font-bold text-lg font-mono text-gray-800">{upvotes}</span>
                  <button
                    onClick={() => handleVote(-1)}
                    className="p-1 hover:text-[#f48024] transition-colors"
                    title="This question does not show any research effort"
                  >
                    ▼
                  </button>
                  <Bookmark className="w-4 h-4 text-gray-400 mt-2" />
                </div>

                {/* Question Body */}
                <div className="flex-1 space-y-4 text-sm text-gray-800 font-serif leading-relaxed">
                  <p>
                    I have a container <code>&lt;div&gt;</code> and an inner modal box. How do I center the inner element both vertically and horizontally so that it remains centered regardless of browser viewport size?
                  </p>

                  <pre className="p-3 bg-[#f6f6f6] border border-gray-300 rounded font-mono text-xs text-black">
                    <code>{`<div class="parent">
  <div class="child">
    Centered content here!
  </div>
</div>`}</code>
                  </pre>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {['css', 'html', 'flexbox', 'css-grid', 'centering'].map((tag) => (
                      <span
                        key={tag}
                        onClick={() => handleInternalNav(`https://stackoverflow.com/questions/tagged/${tag}`, `${tag} Questions – Stack Overflow`)}
                        className="bg-[#e1ecf4] text-[#39739d] hover:bg-[#b3d3ea] px-2 py-0.5 rounded text-xs font-mono cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Answers Header */}
              <div className="border-t-2 border-gray-200 pt-6 mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  2 Answers
                </h2>

                {/* ACCEPTED ANSWER */}
                <div className="p-4 sm:p-6 bg-[#f7fdf7] border border-[#a3d9a5] rounded-md mb-6 space-y-4">
                  <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm border-b border-emerald-200 pb-2">
                    <span className="text-xl">✔</span>
                    <span>Accepted Solution (+6,240 Votes)</span>
                  </div>

                  <p className="text-sm text-gray-800 font-serif leading-relaxed">
                    The modern, standard, and cleanest solution is <strong>CSS Grid</strong> or <strong>CSS Flexbox</strong>.
                  </p>

                  <div className="space-y-3 font-sans">
                    <div className="p-3 bg-white border border-gray-300 rounded">
                      <strong className="text-blue-900 text-xs block mb-1">Option 1: CSS Grid (2 lines of code):</strong>
                      <pre className="p-2 bg-[#f6f6f6] font-mono text-xs text-black">
                        <code>{`.parent {
  display: grid;
  place-items: center;
  min-height: 100vh; /* Or container height */
}`}</code>
                      </pre>
                    </div>

                    <div className="p-3 bg-white border border-gray-300 rounded">
                      <strong className="text-blue-900 text-xs block mb-1">Option 2: CSS Flexbox:</strong>
                      <pre className="p-2 bg-[#f6f6f6] font-mono text-xs text-black">
                        <code>{`.parent {
  display: flex;
  justify-content: center; /* Horizontally center */
  align-items: center;     /* Vertically center */
  min-height: 100vh;
}`}</code>
                      </pre>
                    </div>
                  </div>

                  {/* Live centered demo preview */}
                  <div className="p-3 bg-white border border-gray-300 rounded">
                    <span className="text-xs font-bold text-gray-600 block mb-2">Live Demo Rendered in Browser:</span>
                    <div className="w-full h-32 bg-[#e8e8e8] border border-dashed border-gray-400 flex items-center justify-center">
                      <div className="win95-raised px-4 py-2 bg-white font-bold text-xs shadow-sm">
                        Centered Target Element 🎉
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // =========================================================================
  // 3. WIKIPEDIA - ENCYCLOPEDIA ARTICLE
  // =========================================================================
  if (lowerTitle.includes('wikipedia.org') || lowerTitle.includes('wikipedia')) {
    return (
      <div className="flex-1 w-full flex flex-col bg-white overflow-hidden text-black font-sans text-left">
        {renderBrowserSubBar()}

        <div
          className="flex-1 overflow-y-auto bg-white"
          style={{ fontSize: `${zoomLevel}%` }}
        >
          {viewMode === 'iframe' ? (
            renderIframeView()
          ) : (
            <div className="max-w-5xl mx-auto p-4 sm:p-8 font-serif text-gray-900">
              {/* Wikipedia Header */}
              <div className="border-b border-gray-300 pb-2 mb-4 flex items-center justify-between font-sans">
                <div className="flex items-center gap-2">
                  <span className="font-serif text-2xl font-bold">W</span>
                  <span className="text-xs text-gray-600">The Free Encyclopedia</span>
                </div>
                <span className="text-xs text-gray-500">From Wikipedia, the free encyclopedia</span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-serif text-black border-b border-gray-300 pb-1 mb-4 font-normal">
                {title.replace(/– Wikipedia.*/, '') || "Technical Encyclopedia Entry"}
              </h1>

              {/* 2-Column Article (Text + Infobox) */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-8 space-y-4 text-sm sm:text-base leading-relaxed">
                  <p>
                    <strong>{title.split(' ')[0]}</strong> is an established subject across modern computational, technical, and digital systems. Established literature documents its initial development, architectural design criteria, and extensive deployment across distributed client-server networks.
                  </p>

                  <p>
                    {snippet}
                  </p>

                  <h2 className="font-sans font-bold text-lg border-b border-gray-300 pb-1 mt-6">
                    1. Historical Background
                  </h2>
                  <p className="text-sm">
                    Early implementations were developed in response to scalability limitations in legacy software stacks. Architectural formalization emerged throughout the 2010s, driving broad standardization across standard web browser engines.
                  </p>

                  <h2 className="font-sans font-bold text-lg border-b border-gray-300 pb-1 mt-6">
                    2. Design Principles & Architecture
                  </h2>
                  <p className="text-sm">
                    Key engineering principles emphasize declarative abstractions, predictable state management, and separation of concerns. In modern environments, compilation and bundler pipelines optimize runtime performance.
                  </p>
                </div>

                {/* Wikipedia Infobox */}
                <div className="md:col-span-4 font-sans text-xs">
                  <div className="border border-gray-400 bg-[#f8f9fa] p-3 space-y-3">
                    <div className="font-bold text-center border-b border-gray-300 pb-1 text-sm">
                      {title.split(' ')[0]}
                    </div>
                    <div className="text-center text-4xl py-2">
                      🌐
                    </div>
                    <div className="space-y-1.5 border-t border-gray-300 pt-2 text-[11px]">
                      <div className="flex justify-between">
                        <strong className="text-gray-600">Type:</strong>
                        <span>Technology standard</span>
                      </div>
                      <div className="flex justify-between">
                        <strong className="text-gray-600">Standard:</strong>
                        <span>ISO / W3C Verified</span>
                      </div>
                      <div className="flex justify-between">
                        <strong className="text-gray-600">License:</strong>
                        <span>Open Source / MIT</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // =========================================================================
  // 4. GENERAL / UNIVERSAL FULL-LENGTH WEBPAGE (For any other website)
  // =========================================================================
  return (
    <div className="flex-1 w-full flex flex-col bg-white overflow-hidden text-black font-sans text-left">
      {renderBrowserSubBar()}

      <div
        className="flex-1 overflow-y-auto bg-[#fafafa] p-4 sm:p-8"
        style={{ fontSize: `${zoomLevel}%` }}
      >
        {viewMode === 'iframe' ? (
          renderIframeView()
        ) : (
          <div className="max-w-4xl mx-auto bg-white border border-gray-300 shadow-sm p-6 sm:p-10 space-y-6">
            {/* Website Brand Header */}
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-blue-900" />
                <span className="font-bold text-lg text-gray-900">{domain.toUpperCase()}</span>
              </div>
              <div className="text-xs font-mono text-gray-500">
                Verified Web Article • {domain}
              </div>
            </div>

            {/* Title & Metadata */}
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight mb-2">
                {title}
              </h1>
              <div className="flex items-center gap-3 text-xs text-gray-500 font-mono border-b border-gray-100 pb-3">
                <span>By Editorial Staff</span>
                <span>•</span>
                <span>Updated Spring 2026</span>
                <span>•</span>
                <span>5 min read</span>
              </div>
            </div>

            {/* Featured Callout */}
            <div className="win95-raised p-4 bg-[#ffffdf] border border-[#d0d000] text-sm text-gray-800 leading-relaxed font-serif">
              <strong>Executive Summary:</strong>
              <p className="mt-1">{snippet}</p>
            </div>

            {/* Main Article Sections */}
            <div className="space-y-4 text-sm sm:text-base text-gray-800 font-serif leading-relaxed">
              <p>
                In recent years, industry standards around <strong>{title.split(' ')[0]}</strong> have rapidly evolved. As applications demand greater performance, cleaner developer workflows, and lower latency, adopting modern guidelines has become essential for engineers and technical organizations.
              </p>

              <h2 className="text-xl font-bold font-sans text-gray-900 pt-4 border-b border-gray-200 pb-1">
                Key Technical Concepts & Core Mechanisms
              </h2>

              <p>
                Whether implementing solutions in production or evaluating architectural tradeoffs, the underlying principles revolve around modularity, resilience, and standard protocol adherence. Comprehensive documentation and verified benchmarks indicate consistent performance gains when adhering to best practices.
              </p>

              {/* Code / Data Sandbox */}
              <div className="win95-sunken p-3 bg-[#f6f8fa] border border-gray-300 font-mono text-xs text-black">
                <div className="text-gray-500 border-b border-gray-300 pb-1 mb-2 text-[10px] flex justify-between">
                  <span>Configuration Reference ({domain})</span>
                  <span>HTTP 200 OK</span>
                </div>
                <pre className="overflow-x-auto leading-relaxed">
                  <code>{`// Core Verified Configuration
{
  "target": "${domain}",
  "status": "online",
  "security": "TLS_AES_256_GCM_SHA384",
  "verified": true
}`}</code>
                </pre>
              </div>

              <h2 className="text-xl font-bold font-sans text-gray-900 pt-4 border-b border-gray-200 pb-1">
                Next Steps and Recommended Resources
              </h2>

              <p>
                To explore further, review the source documentation or experiment with related topics directly within your NOBROWSE™ session. All links and navigation continue to maintain tab history and session state.
              </p>
            </div>

            {/* Bottom Footer Action Bar */}
            <div className="pt-6 border-t border-gray-200 flex flex-wrap items-center justify-between gap-3 text-xs font-sans">
              <span className="text-gray-500">Document path: {url}</span>
              <button
                onClick={handleOpenExternal}
                className="win95-btn px-3 py-1 text-xs font-bold text-blue-900 flex items-center gap-1.5"
              >
                <span>Launch in Real External Browser</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  // =========================================================================
  // SUB-BAR HELPER
  // =========================================================================
  function renderBrowserSubBar() {
    return (
      <div className="win95-raised p-2 bg-[#dfdfdf] flex flex-wrap items-center justify-between gap-2 border-b border-[#808080] text-xs font-sans select-none shrink-0 z-20">
        <div className="flex items-center gap-2 min-w-0">
          {onBackToSearch && (
            <button
              onClick={onBackToSearch}
              className="win95-btn h-6 px-2 text-xs flex items-center gap-1 font-bold shrink-0"
              title="Return to Search Results"
            >
              <ArrowLeft className="w-3 h-3" />
              <span>Back</span>
            </button>
          )}

          <div className="flex items-center gap-1.5 text-xs truncate">
            <Globe className="w-3.5 h-3.5 text-blue-900 shrink-0" />
            <strong className="truncate text-black">{domain}</strong>
            <span className="win95-sunken-gray px-1.5 py-0.5 text-[10px] text-emerald-900 font-bold shrink-0 flex items-center gap-1">
              <Lock className="w-2.5 h-2.5 text-emerald-800" />
              <span>HTTPS Verified</span>
            </span>
          </div>
        </div>

        {/* View mode toggle & actions */}
        <div className="flex items-center gap-1.5 shrink-0 ml-auto">
          {/* Zoom controls */}
          <div className="flex items-center gap-0.5 mr-2">
            <button
              onClick={() => setZoomLevel(z => Math.max(z - 10, 70))}
              className="win95-btn h-5 w-5 text-[10px] flex items-center justify-center font-mono font-bold"
              title="Zoom out"
            >
              -
            </button>
            <span className="text-[10px] font-mono w-8 text-center text-gray-700">{zoomLevel}%</span>
            <button
              onClick={() => setZoomLevel(z => Math.min(z + 10, 150))}
              className="win95-btn h-5 w-5 text-[10px] flex items-center justify-center font-mono font-bold"
              title="Zoom in"
            >
              +
            </button>
          </div>

          {/* Mode toggle: Simulated Website vs Live Iframe */}
          <div className="flex items-center gap-1 mr-2">
            <button
              onClick={() => setViewMode('simulated')}
              className={`win95-btn h-6 px-2 text-[10px] font-bold ${viewMode === 'simulated' ? 'win95-sunken-gray text-blue-950' : 'text-gray-700'}`}
              title="High-performance simulated website"
            >
              Reader View
            </button>
            <button
              onClick={() => setViewMode('iframe')}
              className={`win95-btn h-6 px-2 text-[10px] font-bold ${viewMode === 'iframe' ? 'win95-sunken-gray text-blue-950' : 'text-gray-700'}`}
              title="Attempt live web frame embedding"
            >
              Live Frame
            </button>
          </div>

          {onBookmark && (
            <button
              onClick={() => onBookmark({ title, url, domain, snippet })}
              className={`win95-btn h-6 px-2 text-[11px] flex items-center gap-1 ${
                bookmarked ? 'win95-sunken-gray font-bold text-amber-900' : ''
              }`}
              title="Bookmark this page"
            >
              <Bookmark className={`w-3 h-3 ${bookmarked ? 'fill-amber-500 text-amber-800' : ''}`} />
              <span className="hidden sm:inline">{bookmarked ? 'Saved' : 'Save'}</span>
            </button>
          )}

          <button
            onClick={handleCopyUrl}
            className="win95-btn h-6 px-2 text-[11px] flex items-center gap-1"
            title="Copy URL"
          >
            {copied ? <Check className="w-3 h-3 text-emerald-800" /> : <Share2 className="w-3 h-3" />}
            <span className="hidden sm:inline">{copied ? 'Copied' : 'Share'}</span>
          </button>

          <button
            onClick={handleOpenExternal}
            className="win95-btn h-6 px-2 text-[11px] flex items-center gap-1 font-bold text-blue-900"
            title="Launch in real external browser"
          >
            <ExternalLink className="w-3 h-3" />
            <span className="hidden sm:inline">External</span>
          </button>
        </div>
      </div>
    );
  }

  // =========================================================================
  // IFRAME VIEW HELPER
  // =========================================================================
  function renderIframeView() {
    return (
      <div className="w-full h-full flex flex-col bg-white">
        <div className="p-2 bg-[#ffffdf] border-b border-[#d0d000] text-xs text-gray-800 flex items-center justify-between">
          <span>Loading live website frame for: <strong>{url}</strong></span>
          <button
            onClick={handleOpenExternal}
            className="win95-btn px-2 py-0.5 text-xs text-blue-900 font-bold"
          >
            Open in New Window ↗
          </button>
        </div>
        <div className="flex-1 w-full relative">
          <iframe
            src={url}
            title={title}
            className="w-full h-full border-none min-h-[70vh]"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            onError={() => setViewMode('simulated')}
          />
        </div>
      </div>
    );
  }
}
