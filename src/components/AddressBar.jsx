// NOBROWSE™ - altf4 Address Bar & Toolbar (Section 4)

import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  RotateCw,
  Home,
  Lock,
  Star,
  History,
  Bookmark,
  BarChart3,
  Settings,
  Volume2,
  VolumeX,
  ShieldCheck
} from 'lucide-react';
import { soundEffects } from '../utils/audio';

export function AddressBar({
  currentUrl,
  canGoBack,
  canGoForward,
  onGoBack,
  onGoForward,
  onReload,
  onHome,
  onSubmitInput,
  isBookmarked,
  onToggleBookmark,
  onToggleHistory,
  onToggleBookmarks,
  onToggleStats,
  onToggleSettings,
  activePanel,
  soundEnabled,
  onToggleSound,
  volume
}) {
  const [prevUrl, setPrevUrl] = useState(currentUrl);
  const [inputValue, setInputValue] = useState(currentUrl || 'nobrowse://home');
  const [showSecurityTooltip, setShowSecurityTooltip] = useState(false);

  // Sync input value if currentUrl changed from parent
  if (currentUrl !== prevUrl) {
    setPrevUrl(currentUrl);
    setInputValue(currentUrl || 'nobrowse://home');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    if (soundEnabled) soundEffects.searchSubmit(volume);
    onSubmitInput(inputValue.trim());
  };

  const handleClear = () => {
    setInputValue('');
  };

  return (
    <div className="bg-[#c0c0c0] border-b border-[#808080] p-1 select-none z-20 shrink-0 text-black">
      {/* 1. TOP TOOLBAR BUTTONS */}
      <div className="flex items-center justify-between gap-1 pb-1 mb-1 border-b border-[#808080]/60">
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
          {/* Back */}
          <button
            onClick={() => {
              if (canGoBack) {
                if (soundEnabled) soundEffects.click(volume);
                onGoBack();
              }
            }}
            disabled={!canGoBack}
            className="win95-btn h-6 px-2 text-[11px] disabled:opacity-40 disabled:cursor-not-allowed"
            title="Back"
          >
            <ArrowLeft className="w-3.5 h-3.5 mr-0.5 text-black" />
            <span className="hidden sm:inline">Back</span>
          </button>

          {/* Forward */}
          <button
            onClick={() => {
              if (canGoForward) {
                if (soundEnabled) soundEffects.click(volume);
                onGoForward();
              }
            }}
            disabled={!canGoForward}
            className="win95-btn h-6 px-2 text-[11px] disabled:opacity-40 disabled:cursor-not-allowed"
            title="Forward"
          >
            <ArrowRight className="w-3.5 h-3.5 mr-0.5 text-black" />
            <span className="hidden sm:inline">Forward</span>
          </button>

          {/* Refresh */}
          <button
            onClick={() => {
              if (soundEnabled) soundEffects.click(volume);
              onReload();
            }}
            className="win95-btn h-6 px-2 text-[11px]"
            title="Refresh / Reroll"
          >
            <RotateCw className="w-3.5 h-3.5 mr-0.5 text-black" />
            <span className="hidden sm:inline">Refresh</span>
          </button>

          {/* Home */}
          <button
            onClick={() => {
              if (soundEnabled) soundEffects.click(volume);
              onHome();
            }}
            className="win95-btn h-6 px-2 text-[11px]"
            title="NOBROWSE™ Home"
          >
            <Home className="w-3.5 h-3.5 mr-0.5 text-black" />
            <span className="hidden sm:inline">Home</span>
          </button>

          <div className="w-[1px] h-5 bg-[#808080] border-r border-[#ffffff] mx-1 shrink-0" />

          {/* Bookmarks / Favorites */}
          <button
            onClick={onToggleBookmarks}
            className={`win95-btn h-6 px-2 text-[11px] ${activePanel === 'bookmarks' ? 'win95-sunken-gray font-bold' : ''}`}
            title="Favorites"
          >
            <Bookmark className="w-3.5 h-3.5 mr-0.5 text-amber-700" />
            <span className="hidden md:inline">Favorites</span>
          </button>

          {/* History */}
          <button
            onClick={onToggleHistory}
            className={`win95-btn h-6 px-2 text-[11px] ${activePanel === 'history' ? 'win95-sunken-gray font-bold' : ''}`}
            title="Search History"
          >
            <History className="w-3.5 h-3.5 mr-0.5 text-blue-800" />
            <span className="hidden md:inline">History</span>
          </button>

          {/* Statistics */}
          <button
            onClick={onToggleStats}
            className={`win95-btn h-6 px-2 text-[11px] ${activePanel === 'stats' ? 'win95-sunken-gray font-bold' : ''}`}
            title="Browser Telemetry & Chaos Ledger"
          >
            <BarChart3 className="w-3.5 h-3.5 mr-0.5 text-purple-800" />
            <span className="hidden lg:inline">Stats</span>
          </button>

          {/* Settings */}
          <button
            onClick={onToggleSettings}
            className={`win95-btn h-6 px-2 text-[11px] ${activePanel === 'settings' ? 'win95-sunken-gray font-bold' : ''}`}
            title="Browser Options"
          >
            <Settings className="w-3.5 h-3.5 mr-0.5 text-slate-800" />
            <span className="hidden lg:inline">Options</span>
          </button>
        </div>

        {/* Right: Sound & Netscape/IE Animated Activity Logo */}
        <div className="flex items-center gap-1 shrink-0">
          <button
            onClick={onToggleSound}
            className="win95-btn h-6 px-1.5 text-[11px]"
            title={soundEnabled ? "Mute Speaker" : "Enable Speaker"}
          >
            {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-emerald-800" /> : <VolumeX className="w-3.5 h-3.5 text-red-800" />}
          </button>

          {/* Simulated 90s Netscape/IE Spinning Throbber */}
          <div
            className="win95-sunken-gray w-6 h-6 flex items-center justify-center p-0.5 cursor-pointer"
            onClick={onReload}
            title="NOBROWSE™ Dial-Up Throbber"
          >
            <div className="w-full h-full bg-[#000080] flex items-center justify-center text-white text-[10px] font-bold animate-spin-slow">
              🌐
            </div>
          </div>
        </div>
      </div>

      {/* 2. ADDRESS / URL INPUT LINE */}
      <div className="flex items-center gap-1.5 px-0.5">
        <span className="text-[11px] font-bold text-gray-800 whitespace-nowrap">
          <u>A</u>ddress:
        </span>

        <form onSubmit={handleSubmit} className="flex-1 flex items-center relative">
          <div className="win95-sunken flex-1 flex items-center px-1.5 py-0.5 bg-white text-black text-xs font-mono h-6">
            {/* SSL Lock Icon */}
            <div className="relative shrink-0 mr-1.5">
              <button
                type="button"
                onClick={() => setShowSecurityTooltip(!showSecurityTooltip)}
                className="text-amber-800 hover:text-amber-900 cursor-pointer"
                title="Security Protocol: Encrypted Connection"
              >
                <Lock className="w-3 h-3 text-amber-700" />
              </button>

              {showSecurityTooltip && (
                <div className="win95-window absolute left-0 top-7 w-64 p-3 z-50 text-[11px] font-sans text-left text-black shadow-xl">
                  <div className="flex items-center gap-1.5 text-blue-900 font-bold mb-1 border-b border-gray-400 pb-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-700" />
                    Security Certificate
                  </div>
                  <p className="text-gray-800 text-[10px] leading-tight mb-2">
                    Verified connection for NOBROWSE™. Encrypted data packets.
                  </p>
                  <div className="text-[9px] font-mono text-gray-600 border-t border-gray-300 pt-1">
                    Cipher: Vintage SSL / Security Protocol
                  </div>
                </div>
              )}
            </div>

            {/* Input field */}
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type a search query or URL (e.g. http://...)..."
              className="flex-1 bg-transparent text-black text-xs font-sans outline-none leading-none"
            />

            {/* Clear button */}
            {inputValue && (
              <button
                type="button"
                onClick={handleClear}
                className="text-gray-500 hover:text-black text-xs px-1 font-bold"
              >
                ✕
              </button>
            )}

            {/* Bookmark star */}
            <button
              type="button"
              onClick={onToggleBookmark}
              className={`p-0.5 text-xs ${isBookmarked ? "text-amber-600 font-bold" : "text-gray-400 hover:text-amber-600"}`}
              title={isBookmarked ? "Bookmarked in Favorites" : "Add to Favorites"}
            >
              <Star className={`w-3 h-3 ${isBookmarked ? "fill-amber-500 text-amber-600" : ""}`} />
            </button>
          </div>

          <button
            type="submit"
            className="win95-btn h-6 px-3 ml-1 text-[11px] font-bold shrink-0"
          >
            Go
          </button>
        </form>
      </div>
    </div>
  );
}
