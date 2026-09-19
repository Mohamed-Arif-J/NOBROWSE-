// NOBROWSE™ - altf4 Blue Screen of Death (BSOD) Fake System Error (Section 11)

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Volume2 } from 'lucide-react';
import { soundEffects } from '../utils/audio';

export function ErrorPage({ errorData, query, onRetry, soundEnabled = true, volume = 0.35 }) {
  const [showStack, setShowStack] = useState(false);

  const code = errorData?.code || "0xWHY-DID-YOU-SEARCH-THIS";
  const message = errorData?.message || "search.exe has stopped searching.";
  const advice = errorData?.advice || "Try blowing gently into your USB port.";
  const callStack = errorData?.callStack || [
    "at QuantumCrawler.panic(index.sys:404)",
    "at BrainBridge.refuse(browser.exe:0xDEAD)",
    "at Reality.collapse(universe.dll:99)"
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[65vh] p-4 sm:p-8 bg-[#0000aa] text-white font-mono text-left animate-fade-in select-text">
      <div className="max-w-2xl w-full mx-auto space-y-4">
        {/* Centered Classic Windows Banner */}
        <div className="text-center mb-6">
          <span className="bg-[#c0c0c0] text-[#0000aa] font-bold px-3 py-0.5 text-base tracking-wider inline-block">
            NOBROWSE™
          </span>
        </div>

        <p className="text-sm leading-relaxed">
          A fatal exception <strong>{code}</strong> has occurred at 0028:C0011E36 in VXD NOBROWSE(01) + 00010E36.
          The query <span className="text-[#ffff00] font-bold">"{query}"</span> has caused an unrecoverable system crisis.
        </p>

        <p className="text-sm leading-relaxed">
          {message}
        </p>

        <div className="space-y-1.5 text-xs text-slate-200 pl-4 border-l-2 border-[#ffffff]/40 my-4">
          <p>* Recommended diagnostic: {advice}</p>
          <p>* System integrity status: Questionable</p>
          <p>* No physical components were harmed during this simulated panic.</p>
        </div>

        {/* Expandable Stack Trace */}
        <div className="pt-2">
          <button
            onClick={() => setShowStack(!showStack)}
            className="text-xs text-[#ffff00] underline flex items-center gap-1 cursor-pointer hover:text-white"
          >
            {showStack ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            {showStack ? "Hide Technical Memory Dump" : "View Technical Memory Dump"}
          </button>

          {showStack && (
            <div className="mt-2 p-3 bg-black/50 border border-white/40 text-[11px] space-y-1">
              {callStack.map((line, idx) => (
                <div key={idx} className="text-slate-300">
                  {idx + 1}. {line}
                </div>
              ))}
              <div className="text-gray-400 text-[10px] pt-1">
                CS:0028 DS:0030 ES:0030 FS:0000 GS:0000 EFLAGS:00010246
              </div>
            </div>
          )}
        </div>

        {/* Action buttons in retro style */}
        <div className="pt-6 text-center">
          <p className="text-xs text-slate-300 mb-3 animate-pulse">
            Press [ TRY AGAIN ] to return to NOBROWSE™ _
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <button
              onClick={onRetry}
              className="win95-btn h-8 px-6 text-xs font-bold text-black uppercase tracking-wider bg-[#c0c0c0]"
            >
              [ TRY AGAIN ]
            </button>
            <button
              type="button"
              onClick={() => {
                if (soundEnabled) soundEffects.pacmanDeath(volume);
              }}
              className="win95-btn h-8 px-4 text-xs font-bold text-black uppercase tracking-wider bg-[#c0c0c0] flex items-center gap-1.5"
              title="Replay 8-bit Pac-Man Game Over Sound"
            >
              <Volume2 className="w-3.5 h-3.5 text-amber-700" />
              <span>[ REPLAY PAC-MAN SOUND ]</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
