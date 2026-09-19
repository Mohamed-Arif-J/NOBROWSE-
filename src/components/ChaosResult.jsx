// NOBROWSE™ - altf4 Chaos Result Component (Section 9, 10, 13, 14, 15, 16, 17, 24)

import React, { useState } from 'react';
import {
  RefreshCw,
  Bookmark,
  Volume2
} from 'lucide-react';
import { soundEffects } from '../utils/audio';

export function ChaosResult({
  resultData,
  onSearchQuery,
  onRetry,
  onBookmark,
  isBookmarked,
  onOpenInNewTab,
  soundEnabled,
  volume
}) {
  const [whyModalOpen, setWhyModalOpen] = useState(false);
  const [noClicked, setNoClicked] = useState(false);
  const [quackCount, setQuackCount] = useState(0);
  const [checkedSteps, setCheckedSteps] = useState({ 0: false, 1: false });
  const [step3Blocked, setStep3Blocked] = useState(false);
  const [pingStatus, setPingStatus] = useState(null);

  const type = resultData?.type || resultData?.chaosType;

  const handleQuack = () => {
    setQuackCount(prev => prev + 1);
    if (soundEnabled) {
      soundEffects.duckQuack(volume);
    }
  };

  const handleStep3Click = () => {
    setStep3Blocked(true);
    if (soundEnabled) {
      soundEffects.chaosError(volume);
    }
    setTimeout(() => setStep3Blocked(false), 2000);
  };

  const handlePing = () => {
    setPingStatus("Pinging 127.0.0.1 with 32 bytes of data... Destination host is currently unenthusiastic.");
  };

  // ----------------------------------------------------
  // SCENARIO 9: WRONG INTERPRETATION
  // ----------------------------------------------------
  if (type === 'wrong-search') {
    return (
      <div className="max-w-3xl mx-auto p-4 sm:p-6 text-left font-sans bg-white min-h-full">
        {/* altf4 Notice Box */}
        <div className="win95-raised p-3 mb-6 bg-[#ffffdf] border border-[#d0d000]">
          <div className="flex items-center gap-2 text-xs font-bold text-blue-900 uppercase mb-1">
            <span>ℹ️</span>
            <span>NOBROWSE™ Semantic Translation Engine</span>
          </div>
          <div className="text-xs text-gray-800 space-y-0.5 mb-2">
            <div>You searched: <span className="line-through text-gray-500">"{resultData.searched || resultData.query}"</span></div>
            <div className="text-sm font-bold text-purple-900">
              We understood: "{resultData.understoodAs}"
            </div>
          </div>
          <p className="text-[11px] text-gray-600 italic">
            {resultData.explanation}
          </p>
        </div>

        {/* Results for the reinterpretation */}
        <div className="space-y-4 mb-6">
          <div className="text-xs font-bold text-gray-700 uppercase border-b border-[#dfdfdf] pb-1">
            Search Results for: "{resultData.understoodAs}"
          </div>

          {resultData.results?.map((item, idx) => (
            <div key={idx} className="border-b border-[#dfdfdf] pb-3">
              <div className="flex items-baseline justify-between mb-0.5">
                <h3 className="text-base font-medium text-[#0000ee] hover:underline">
                  <a
                    href={item.url}
                    onClick={(e) => {
                      e.preventDefault();
                      if (onOpenInNewTab) onOpenInNewTab(item.title, item.url, item.snippet);
                    }}
                  >
                    {item.title}
                  </a>
                </h3>
                <button
                  onClick={() => onBookmark(item)}
                  className="win95-btn h-5 px-1.5 text-[10px] shrink-0"
                  title="Bookmark"
                >
                  <Bookmark className={`w-3 h-3 ${isBookmarked(item.url) ? 'fill-amber-500 text-amber-700' : 'text-gray-600'}`} />
                </button>
              </div>
              <div className="text-xs font-mono text-[#008000] mb-1">
                {item.url}
              </div>
              <p className="text-xs sm:text-sm text-gray-900 font-serif leading-relaxed">
                {item.snippet}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="win95-raised p-3 bg-[#c0c0c0] flex items-center justify-between">
          <span className="text-xs font-bold text-black">{resultData.footer || "We hope this helps."}</span>
          <button
            onClick={onRetry}
            className="win95-btn h-6 px-3 text-xs"
          >
            <RefreshCw className="w-3 h-3 mr-1" />
            Retry Search
          </button>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // SCENARIO 10: COMPLETELY UNRELATED RESULTS
  // ----------------------------------------------------
  if (type === 'unrelated') {
    return (
      <div className="max-w-3xl mx-auto p-4 sm:p-6 text-left font-sans bg-white min-h-full">
        <div className="win95-sunken-gray p-2.5 mb-4 text-xs">
          <div>You searched for: <strong>"{resultData.query}"</strong></div>
          <div className="text-[11px] text-gray-600">
            About 10 completely irrelevant entries found in dial-up archive (0.41 seconds):
          </div>
        </div>

        <div className="space-y-4 mb-6">
          {resultData.results?.map((item, idx) => (
            <div key={idx} className="border-b border-[#dfdfdf] pb-3">
              <div className="flex items-baseline justify-between mb-0.5">
                <h3 className="text-base font-medium text-[#0000ee] hover:underline">
                  <a
                    href={item.url}
                    onClick={(e) => {
                      e.preventDefault();
                      if (onOpenInNewTab) onOpenInNewTab(item.title, item.url, item.snippet);
                    }}
                  >
                    {item.title}
                  </a>
                </h3>
                <button
                  onClick={() => onBookmark(item)}
                  className="win95-btn h-5 px-1.5 text-[10px] shrink-0"
                >
                  <Bookmark className={`w-3 h-3 ${isBookmarked(item.url) ? 'fill-amber-500 text-amber-700' : 'text-gray-600'}`} />
                </button>
              </div>
              <div className="text-xs font-mono text-[#008000] mb-1">
                {item.url}
              </div>
              <p className="text-xs sm:text-sm text-gray-900 font-serif leading-relaxed mb-1">
                {item.snippet}
              </p>
              <div className="text-[10px] text-gray-500 font-mono">
                Category: {item.category} • {item.readTime} • Verified 0% query relevance
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onRetry}
            className="win95-btn h-7 px-4 text-xs font-bold"
          >
            <RefreshCw className="w-3.5 h-3.5 mr-1" />
            Roll Another Search
          </button>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // SCENARIO 13: INTERNET DISCONNECTED (Win95 Dial-Up Error)
  // ----------------------------------------------------
  if (type === 'offline') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-4 text-center font-sans bg-white">
        <div className="win95-window max-w-md w-full text-left shadow-2xl">
          <div className="win95-titlebar h-5 px-1.5 flex items-center justify-between">
            <span className="text-[11px] font-bold">Dial-Up Networking - Error 678</span>
            <button onClick={onRetry} className="win95-title-btn">✕</button>
          </div>

          <div className="p-4 bg-[#c0c0c0] text-black">
            <div className="flex items-start gap-3 mb-4">
              <span className="text-3xl shrink-0">🔌</span>
              <div>
                <h3 className="text-sm font-bold text-black mb-1">
                  There was no answer.
                </h3>
                <p className="text-xs text-red-900 font-bold mb-1">
                  Internet: ❌ Disconnected
                </p>
                <p className="text-[11px] text-gray-800 leading-normal">
                  {resultData.reason || "We don't know. The internet was here a minute ago."}
                </p>
                <p className="text-[10px] text-gray-600 mt-1 italic">
                  Ensure the phone cord is connected from the modem to the wall jack.
                </p>
              </div>
            </div>

            {pingStatus && (
              <div className="win95-sunken p-2 bg-black text-green-400 font-mono text-[10px] mb-3">
                {pingStatus}
              </div>
            )}

            <div className="flex justify-end gap-2 pt-2 border-t border-[#808080]">
              <button
                onClick={onRetry}
                className="win95-btn h-6 px-4 text-xs font-bold"
              >
                [ Redial ]
              </button>
              <button
                onClick={handlePing}
                className="win95-btn h-6 px-3 text-xs"
              >
                [ Ping 127.0.0.1 ]
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // SCENARIO 14: AI CONFUSION (altf4 Assistant Oracle)
  // ----------------------------------------------------
  if (type === 'ai-confusion') {
    const rec = resultData.recommendation || {
      item: "A Duck",
      description: "It floats on water. It eats stale bread crusts without judgment.",
      advice: "“Stare into the duck's plumage until clarity washes over your soul.”"
    };

    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-4 text-center font-sans bg-white">
        <div className="win95-window max-w-lg w-full text-left shadow-2xl">
          <div className="win95-titlebar h-5 px-1.5 flex items-center justify-between">
            <span className="text-[11px] font-bold">altf4 AI Assistant - Status Alert</span>
            <button onClick={onRetry} className="win95-title-btn">✕</button>
          </div>

          <div className="p-4 bg-[#c0c0c0] text-black">
            <div className="flex items-start gap-3 mb-4">
              <span className="text-3xl shrink-0">🦆</span>
              <div className="space-y-1 text-xs">
                <p>AI analyzed your query: <strong>"{resultData.query}"</strong></p>
                <p>AI processed <span className="font-mono font-bold text-blue-900">{resultData.possibilitiesProcessed || "14,293"}</span> possibilities.</p>
                <p className="text-red-900 font-bold">AI has become confused.</p>
              </div>
            </div>

            {/* Recommendation Box */}
            <div className="win95-raised p-3 bg-white mb-3 text-black">
              <div className="text-[10px] font-bold text-blue-900 uppercase mb-1">
                RECOMMENDED SOLUTION:
              </div>
              <h4 className="text-lg font-bold text-black mb-1">
                {rec.item}
              </h4>
              <p className="text-xs text-gray-800 mb-2">
                {rec.description}
              </p>
              <div className="win95-sunken p-2 bg-[#ffffdf] text-[11px] italic text-gray-700">
                {rec.advice}
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-[#808080]">
              <button
                onClick={handleQuack}
                className="win95-btn h-6 px-3 text-xs font-bold"
              >
                <Volume2 className="w-3.5 h-3.5 mr-1" />
                Quack ({quackCount})
              </button>

              <button
                onClick={onRetry}
                className="win95-btn h-6 px-4 text-xs font-bold"
              >
                Retry Search
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // SCENARIO 15: DID YOU MEAN?
  // ----------------------------------------------------
  if (type === 'did-you-mean') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-4 text-center font-sans bg-white">
        <div className="win95-window max-w-md w-full text-left shadow-2xl">
          <div className="win95-titlebar h-5 px-1.5 flex items-center justify-between">
            <span className="text-[11px] font-bold">Confirm Query Correction</span>
            <button onClick={onRetry} className="win95-title-btn">✕</button>
          </div>

          <div className="p-4 bg-[#c0c0c0] text-black">
            <div className="flex items-start gap-3 mb-4">
              <span className="text-3xl shrink-0">❓</span>
              <div>
                <div className="text-xs text-gray-700 mb-1">
                  You searched: <strong>"{resultData.searched || resultData.query}"</strong>
                </div>
                <div className="text-sm font-bold text-blue-900 mb-2">
                  Did you mean: <span className="underline">"{resultData.suggested}"</span>?
                </div>
              </div>
            </div>

            {noClicked && (
              <div className="win95-sunken p-1.5 bg-[#ffffdf] text-[11px] text-red-900 mb-3">
                Notice: Tough luck. We liked our suggestion better.
              </div>
            )}

            {whyModalOpen && (
              <div className="win95-sunken p-2 bg-white text-xs text-gray-800 mb-3 space-y-1">
                <div className="font-bold text-blue-900">Excellent question.</div>
                <div className="text-[11px]">{resultData.whyAnswer}</div>
              </div>
            )}

            <div className="flex justify-end gap-2 pt-2 border-t border-[#808080]">
              <button
                onClick={() => onSearchQuery(resultData.suggested)}
                className="win95-btn h-6 px-3 text-xs font-bold"
              >
                Yes
              </button>
              <button
                onClick={() => setNoClicked(true)}
                className="win95-btn h-6 px-3 text-xs"
              >
                No
              </button>
              <button
                onClick={() => setWhyModalOpen(!whyModalOpen)}
                className="win95-btn h-6 px-3 text-xs"
              >
                Why
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // SCENARIO 16: USELESS ANSWER MODE
  // ----------------------------------------------------
  if (type === 'useless-answer') {
    const ans = resultData.answer || {
      title: `How to Deal With: "${resultData.query}"`,
      steps: [
        { num: 1, text: "Stop searching on a joke browser." },
        { num: 2, text: "Close this browser window." },
        { num: 3, text: "You won't." }
      ],
      footer: "Certified 0% practical utility."
    };

    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-4 text-center font-sans bg-white">
        <div className="win95-window max-w-md w-full text-left shadow-2xl">
          <div className="win95-titlebar h-5 px-1.5 flex items-center justify-between">
            <span className="text-[11px] font-bold">System Wizard - Step by Step</span>
            <button onClick={onRetry} className="win95-title-btn">✕</button>
          </div>

          <div className="p-4 bg-[#c0c0c0] text-black">
            <h3 className="text-sm font-bold text-black mb-3 border-b border-[#808080] pb-1">
              {ans.title}
            </h3>

            <div className="space-y-2 mb-4">
              {ans.steps.map((step, idx) => {
                const isThird = idx === 2;
                const isChecked = checkedSteps[idx];

                return (
                  <div
                    key={idx}
                    onClick={() => {
                      if (isThird) {
                        handleStep3Click();
                      } else {
                        setCheckedSteps(prev => ({ ...prev, [idx]: !prev[idx] }));
                      }
                    }}
                    className={`win95-sunken p-2 flex items-start gap-2 text-xs cursor-pointer ${
                      isChecked ? "line-through text-gray-500 bg-[#dfdfdf]" : "bg-white text-black"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      readOnly
                      className="mt-0.5 pointer-events-none"
                    />
                    <div>
                      <strong>Step {step.num}:</strong> {step.text}
                    </div>
                  </div>
                );
              })}
            </div>

            {step3Blocked && (
              <div className="win95-sunken p-1.5 bg-[#ffffdf] text-red-900 text-[11px] mb-3 animate-shake">
                ⚠️ Error: The operating system does not permit Step 3 to be checked.
              </div>
            )}

            <div className="flex justify-between items-center pt-2 border-t border-[#808080]">
              <span className="text-[10px] text-gray-600 font-mono">{ans.footer}</span>
              <button
                onClick={onRetry}
                className="win95-btn h-6 px-4 text-xs font-bold"
              >
                Finish
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // SCENARIO 17: RANDOM MEME MODE
  // ----------------------------------------------------
  if (type === 'meme') {
    const meme = resultData.meme || {
      title: "The Confused Computer",
      subtitle: "It processed your query and now its fans are spinning in grief.",
      caption: "“I was built to calculate physics, not your CSS bugs.”",
      badge: "HARDWARE_CONFUSION"
    };

    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-4 text-center font-sans bg-white">
        <div className="win95-window max-w-md w-full text-left shadow-2xl">
          <div className="win95-titlebar h-5 px-1.5 flex items-center justify-between">
            <span className="text-[11px] font-bold">Bitmap Viewer - {meme.badge}.BMP</span>
            <button onClick={onRetry} className="win95-title-btn">✕</button>
          </div>

          <div className="p-4 bg-[#c0c0c0] text-black text-center">
            {/* 90s Paint Canvas Frame */}
            <div className="win95-sunken p-4 bg-white mb-3 flex items-center justify-center">
              <svg className="w-24 h-24 text-[#000080]" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="10" y="12" width="44" height="32" rx="2" className="stroke-[#000080] fill-[#dfdfdf]" />
                <line x1="22" y1="44" x2="16" y2="52" strokeLinecap="round" />
                <line x1="42" y1="44" x2="48" y2="52" strokeLinecap="round" />
                <line x1="12" y1="52" x2="52" y2="52" strokeLinecap="round" />
                <circle cx="24" cy="28" r="4" className="stroke-blue-800 fill-white" />
                <path d="M38 24 L44 30 M44 24 L38 30" className="stroke-red-600" strokeWidth="2" />
                <path d="M26 36 Q 32 32 38 36" strokeLinecap="round" className="stroke-black" />
              </svg>
            </div>

            <h3 className="text-base font-bold text-black mb-1">
              {meme.title}
            </h3>
            <p className="text-xs text-gray-700 mb-2">
              {meme.subtitle}
            </p>
            <div className="win95-sunken p-2 bg-[#ffffdf] text-xs italic text-gray-800 mb-3">
              {meme.caption}
            </div>

            <div className="flex justify-end pt-2 border-t border-[#808080]">
              <button
                onClick={onRetry}
                className="win95-btn h-6 px-4 text-xs font-bold"
              >
                Reroll Meme
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // SECTION 24: EASTER EGG
  // ----------------------------------------------------
  if (resultData.isEasterEgg) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-4 text-center font-sans bg-white">
        <div className="win95-window max-w-md w-full text-left shadow-2xl">
          <div className="win95-titlebar h-5 px-1.5 flex items-center justify-between bg-[#008080]">
            <span className="text-[11px] font-bold text-white">Secret Easter Egg</span>
            <button onClick={onRetry} className="win95-title-btn">✕</button>
          </div>

          <div className="p-4 bg-[#c0c0c0] text-black">
            <div className="flex items-start gap-3 mb-3">
              <span className="text-3xl shrink-0">✨</span>
              <div>
                <h3 className="text-sm font-bold text-blue-900 mb-1">
                  {resultData.title || "Secret Discovered"}
                </h3>
                <div className="win95-sunken p-2 bg-white text-base font-bold text-black mb-2">
                  "{resultData.response}"
                </div>
                <p className="text-xs text-gray-800 leading-normal">
                  {resultData.subtext}
                </p>
              </div>
            </div>

            <div className="flex justify-end pt-2 border-t border-[#808080]">
              <button
                onClick={onRetry}
                className="win95-btn h-6 px-4 text-xs font-bold"
              >
                {resultData.actionText || "OK"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 text-center bg-white text-black">
      <p>Retro mode rendered.</p>
      <button onClick={onRetry} className="win95-btn mt-2">Retry</button>
    </div>
  );
}
