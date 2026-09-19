// NOBROWSE™ - altf4 Loading Component (Handles dial-up transfer & 99% freeze)

import React, { useState, useEffect } from 'react';
import { RefreshCw } from 'lucide-react';
import { soundEffects } from '../utils/audio';

const NORMAL_STAGES = [
  "Dialing ISP via 14.4k modem...",
  "Negotiating TCP/IP handshake...",
  "Connecting to remote DNS server...",
  "Formatting Netscape frames...",
  "Rendering 256-color palette..."
];

export function LoadingPage({ query, isChaosHanging, onBoredAwake, soundEnabled, volume }) {
  const [stageIndex, setStageIndex] = useState(0);
  const [progress, setProgress] = useState(12);
  const [hasGivenUp, setHasGivenUp] = useState(false);

  useEffect(() => {
    if (!isChaosHanging) {
      const interval = setInterval(() => {
        setStageIndex(prev => (prev + 1) % NORMAL_STAGES.length);
        setProgress(prev => Math.min(prev + 25, 95));
      }, 200);
      return () => clearInterval(interval);
    } else {
      const t1 = setTimeout(() => setProgress(35), 250);
      const t2 = setTimeout(() => {
        setProgress(72);
        setStageIndex(1);
      }, 600);
      const t3 = setTimeout(() => {
        setProgress(94);
        setStageIndex(2);
      }, 1100);
      const t4 = setTimeout(() => {
        setProgress(99);
        setStageIndex(3);
      }, 1600);
      const t5 = setTimeout(() => {
        setHasGivenUp(true);
        if (soundEnabled) soundEffects.browserBored(volume);
      }, 3400);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
        clearTimeout(t4);
        clearTimeout(t5);
      };
    }
  }, [isChaosHanging, soundEnabled, volume]);

  // Calculate number of chunky blue blocks for 100% (e.g. 20 chunks total)
  const totalChunks = 24;
  const filledChunks = Math.floor((progress / 100) * totalChunks);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-6 text-center font-sans bg-white">
      {!hasGivenUp ? (
        <div className="win95-window max-w-md w-full text-left shadow-xl">
          {/* Title Bar */}
          <div className="win95-titlebar h-5 px-1.5 flex items-center justify-between">
            <span className="text-[11px] font-bold">Transferring Data from Web...</span>
            <button className="win95-title-btn">✕</button>
          </div>

          <div className="p-4 bg-[#c0c0c0] text-black">
            {/* Flying folder animation simulation */}
            <div className="flex items-center justify-between px-8 py-3 mb-3 win95-sunken bg-white">
              <span className="text-2xl">📁</span>
              <span className="text-sm animate-pulse">📄 ➔ ➔ 📄</span>
              <span className="text-2xl">🌐</span>
            </div>

            <div className="text-xs font-bold mb-1">
              Searching: <span className="text-blue-900">"{query}"</span>
            </div>

            <p className="text-[11px] text-gray-700 h-5 mb-3 font-sans">
              {isChaosHanging && progress >= 99
                ? "Reaching singularity... please hold line..."
                : NORMAL_STAGES[stageIndex]}
            </p>

            {/* Classic altf4 Chunky Blue Progress Bar */}
            <div className="win95-progress-track h-5 flex items-center mb-3">
              {Array.from({ length: filledChunks }).map((_, i) => (
                <div key={i} className="h-full bg-[#000080] w-2.5 mr-0.5 shrink-0" />
              ))}
            </div>

            <div className="flex justify-between items-center text-[10px] text-gray-700 font-mono">
              <span>ESTIMATED TIME: UNKNOWN</span>
              <span className="font-bold text-black">{progress}%</span>
            </div>
          </div>
        </div>
      ) : (
        /* Section 12: The browser got bored */
        <div className="win95-window max-w-md w-full text-left shadow-2xl animate-shake">
          <div className="win95-titlebar h-5 px-1.5 flex items-center justify-between bg-[#800000]">
            <span className="text-[11px] font-bold text-white">Attention Span Exhausted</span>
            <button onClick={onBoredAwake} className="win95-title-btn">✕</button>
          </div>

          <div className="p-4 bg-[#c0c0c0] text-black">
            <div className="flex items-start gap-3 mb-4">
              <span className="text-3xl shrink-0">⚠️</span>
              <div>
                <h3 className="text-sm font-bold text-black mb-1">
                  Search cancelled.
                </h3>
                <p className="text-xs text-red-900 font-bold mb-1">
                  The browser got bored.
                </p>
                <p className="text-[11px] text-gray-800 leading-normal">
                  The algorithm stared at 99% for 2.4 seconds, contemplated the dial-up connection, and decided you probably didn't need to know anyway.
                </p>
              </div>
            </div>

            <div className="flex justify-end pt-2 border-t border-[#808080]">
              <button
                onClick={onBoredAwake}
                className="win95-btn h-6 px-4 text-xs font-bold"
              >
                <RefreshCw className="w-3 h-3 mr-1" />
                Wake Up Browser
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
