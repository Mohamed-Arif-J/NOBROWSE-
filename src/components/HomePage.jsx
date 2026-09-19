// NOBROWSE™ - Home Page (Section 5)

import React, { useState, useRef, useEffect } from 'react';
import { Search, Shuffle } from 'lucide-react';
import { soundEffects } from '../utils/audio';

export function HomePage({ onSearch, soundEnabled, volume }) {
  const [queryInput, setQueryInput] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!queryInput.trim()) return;
    if (soundEnabled) soundEffects.searchSubmit(volume);
    onSearch(queryInput.trim());
  };

  const handlePillClick = (sampleQuery) => {
    setQueryInput(sampleQuery);
    if (soundEnabled) soundEffects.click(volume);
    onSearch(sampleQuery);
  };

  const sampleQueries = [
    "how to learn React",
    "best restaurants near me",
    "Python tutorial",
    "weather tomorrow",
    "how to center a div",
    "best laptop",
    "how to make money",
    "why",
    "google",
    "chatgpt"
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[65vh] px-4 py-8 text-center text-black font-sans animate-fade-in bg-white">
      <div className="max-w-2xl w-full mx-auto">
        {/* Retro 90s Logo Box */}
        <div className="mb-6 inline-block">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="text-3xl">🌐</span>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#000080] font-serif select-none drop-shadow-[2px_2px_0px_#c0c0c0]">
              NOBROWSE™
            </h1>
          </div>
          <p className="text-sm sm:text-base font-serif italic text-gray-700">
            "The internet, approximately."
          </p>
        </div>

        {/* Main Search Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto mb-6">
          <div className="win95-sunken flex items-center bg-white p-1 mb-3">
            <Search className="w-4 h-4 text-gray-500 mx-1.5 shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={queryInput}
              onChange={(e) => setQueryInput(e.target.value)}
              placeholder="Search the internet..."
              className="w-full py-1 text-sm bg-transparent text-black outline-none font-sans"
            />
          </div>

          <div className="flex items-center justify-center gap-2">
            <button
              type="submit"
              disabled={!queryInput.trim()}
              className="win95-btn h-7 px-4 text-xs font-bold disabled:opacity-40"
            >
              Search NOBROWSE
            </button>
            <button
              type="button"
              onClick={() => handlePillClick("why")}
              className="win95-btn h-7 px-4 text-xs"
            >
              I'm Feeling Curious
            </button>
          </div>
        </form>

        {/* Retro 90s Horizontal Rule */}
        <div className="w-full max-w-md mx-auto border-t border-[#808080] border-b border-b-[#ffffff] my-6" />

        {/* Sample Pills formatted as Win95 beveled buttons */}
        <div>
          <div className="text-xs text-gray-600 mb-2 flex items-center justify-center gap-1">
            <Shuffle className="w-3.5 h-3.5 text-gray-700" />
            <span>Try an automated query:</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-1.5 max-w-lg mx-auto">
            {sampleQueries.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handlePillClick(q)}
                className="win95-btn text-[11px] py-1 px-2 font-normal text-blue-900 hover:text-black"
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
