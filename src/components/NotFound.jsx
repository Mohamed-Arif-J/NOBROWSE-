// NOBROWSE™ - altf4 404 Component (Section 8)

import React from 'react';
import { Home, RefreshCw, Volume2 } from 'lucide-react';
import { soundEffects } from '../utils/audio';

export function NotFound({ variation, onRetry, onHome, soundEnabled = true, volume = 0.35 }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[65vh] p-4 text-center font-sans bg-white">
      {/* Classic altf4 MessageBox Dialog */}
      <div className="win95-window max-w-lg w-full text-left shadow-2xl">
        {/* Dialog Title Bar */}
        <div className="win95-titlebar h-5 px-1.5 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="text-xs">⚠️</span>
            <span className="text-[11px] font-bold">NOBROWSE™ - HTTP 404 Not Found</span>
          </div>
          <button onClick={onHome} className="win95-title-btn">✕</button>
        </div>

        {/* Dialog Body */}
        <div className="p-4 bg-[#c0c0c0] text-black">
          <div className="flex items-start gap-3 mb-4">
            {/* Classic 90s Critical Red Stop / Question Icon */}
            <div className="w-10 h-10 rounded-full bg-red-600 border-2 border-white flex items-center justify-center text-white text-xl font-black shrink-0 shadow-sm">
              ✕
            </div>

            <div className="flex-1">
              <h2 className="text-base font-bold text-black mb-1">
                404: {variation?.subtitle || "Page Not Found"}
              </h2>
              <p className="text-xs text-gray-800 leading-normal mb-2 font-sans">
                {variation?.description || "We looked everywhere. It wasn't there."}
              </p>
              <div className="win95-sunken p-2 bg-white text-[11px] text-gray-700 italic mb-2">
                {variation?.quote || "“We looked everywhere. We blame the internet.”"}
              </div>
              <div className="text-[11px] font-mono text-red-900 font-bold">
                Official culprit: <span className="text-black font-normal">{variation?.blame || "We blame the internet."}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons (OK / Cancel style) */}
          <div className="flex justify-between items-center pt-2 border-t border-[#808080]">
            <button
              type="button"
              onClick={() => {
                if (soundEnabled) soundEffects.pacmanDeath(volume);
              }}
              className="win95-btn h-6 px-2.5 text-xs flex items-center"
              title="Play Pac-Man Game Over Sound"
            >
              <Volume2 className="w-3 h-3 mr-1 text-amber-600" />
              Pac-Man Sound
            </button>
            <div className="flex gap-2">
              <button
                onClick={onRetry}
                className="win95-btn h-6 px-4 text-xs font-bold"
              >
                <RefreshCw className="w-3 h-3 mr-1" />
                Try Again
              </button>
              <button
                onClick={onHome}
                className="win95-btn h-6 px-4 text-xs"
              >
                <Home className="w-3 h-3 mr-1" />
                Home Page
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
