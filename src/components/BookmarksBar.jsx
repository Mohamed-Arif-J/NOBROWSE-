// NOBROWSE™ - altf4 Links Bar (Sub-toolbar)

import React from 'react';
import { Dice5, Bookmark } from 'lucide-react';
import { sample } from '../utils/random.js';

export function BookmarksBar({ onNavigate, onSearch, bookmarks }) {
  const defaultShortcuts = [
    { label: "React Docs", query: "how to learn React", icon: "⚛️" },
    { label: "Python 3", query: "Python tutorial", icon: "🐍" },
    { label: "Center Div", query: "how to center a div", icon: "📐" },
    { label: "Weather", query: "weather tomorrow", icon: "⛅" },
    { label: "Duck AI", query: "what is the meaning of life", icon: "🦆" },
    { label: "Best Pizza", query: "best restaurants near me", icon: "🍕" },
  ];

  const handleRandomRoll = () => {
    const randomPicks = [
      "how to build an AI robot",
      "best gaming laptop",
      "how to make money from home",
      "why does javascript exist",
      "how to train a cat",
      "quantum physics for beginners",
      "how to wake up before noon"
    ];
    onSearch(sample(randomPicks));
  };

  return (
    <div className="bg-[#c0c0c0] border-b border-[#808080] px-2 py-0.5 flex items-center gap-1 overflow-x-auto no-scrollbar select-none z-10 shrink-0 text-black text-[11px] font-sans">
      <span className="font-bold text-gray-700 mr-1 select-none flex items-center gap-0.5 shrink-0">
        <span className="text-[12px]">📁</span>
        <span><u>L</u>inks:</span>
      </span>

      {/* Default Quick Shortcuts */}
      {defaultShortcuts.map((item, idx) => (
        <button
          key={idx}
          onClick={() => onSearch(item.query)}
          className="win95-btn h-5 px-1.5 text-[10px] whitespace-nowrap shrink-0"
        >
          <span className="mr-1">{item.icon}</span>
          <span>{item.label}</span>
        </button>
      ))}

      {/* User Bookmarks */}
      {bookmarks.slice(0, 3).map((bm) => (
        <button
          key={bm.id}
          onClick={() => onNavigate(bm.url, bm.query)}
          className="win95-btn h-5 px-1.5 text-[10px] whitespace-nowrap text-blue-950 font-bold shrink-0"
        >
          <Bookmark className="w-2.5 h-2.5 mr-0.5 fill-amber-500 text-amber-700" />
          <span className="truncate max-w-[90px]">{bm.title}</span>
        </button>
      ))}

      {/* Roll Random Search */}
      <button
        onClick={handleRandomRoll}
        className="win95-btn h-5 px-2 text-[10px] font-bold text-purple-900 ml-auto whitespace-nowrap shrink-0"
        title="Roll random search query"
      >
        <Dice5 className="w-3 h-3 mr-1 text-purple-700" />
        <span>Random Roll</span>
      </button>
    </div>
  );
}
