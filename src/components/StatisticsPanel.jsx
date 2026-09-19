// NOBROWSE™ - Statistics Panel (Section 20)

import React from 'react';
import { BarChart3, RotateCcw } from 'lucide-react';
import { resetStats } from '../utils/storage';
import { soundEffects } from '../utils/audio';

export function StatisticsPanel({
  stats,
  onUpdateStats,
  onClose,
  soundEnabled,
  volume
}) {
  const total = stats.totalSearches || 0;
  const useful = stats.usefulSearches || 0;
  const chaos = stats.chaosSearches || 0;

  const usefulPercentage = total > 0 ? ((useful / total) * 100).toFixed(1) : "0.0";
  const chaosPercentage = total > 0 ? ((chaos / total) * 100).toFixed(1) : "0.0";

  const handleReset = () => {
    if (confirm("Reset all browser telemetry counters?")) {
      const fresh = resetStats();
      onUpdateStats(fresh);
      if (soundEnabled) soundEffects.click(volume);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4 sm:p-6 text-left font-sans animate-fade-in bg-white">
      <div className="win95-window w-full shadow-2xl">
        {/* Title Bar */}
        <div className="win95-titlebar h-5 px-1.5 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <BarChart3 className="w-3.5 h-3.5" />
            <span className="text-[11px] font-bold">System Telemetry - NOBROWSE™</span>
          </div>
          {onClose && <button onClick={onClose} className="win95-title-btn">✕</button>}
        </div>

        {/* Content */}
        <div className="p-3 bg-[#c0c0c0] text-black">
          {/* Distribution Meter */}
          <div className="win95-raised p-3 mb-3 bg-[#dfdfdf]">
            <div className="flex justify-between items-center text-xs font-bold mb-1.5">
              <span>Result Distribution Telemetry</span>
              <span className="font-mono text-[11px] text-blue-900">
                Current: {usefulPercentage}% / {chaosPercentage}%
              </span>
            </div>

            {/* Chunky Bar */}
            <div className="win95-progress-track h-5 flex items-center mb-2 bg-white">
              <div
                className="h-full bg-[#008000] transition-all"
                style={{ width: `${usefulPercentage}%` }}
                title={`Useful: ${usefulPercentage}%`}
              />
              <div
                className="h-full bg-[#800080] transition-all"
                style={{ width: `${chaosPercentage}%` }}
                title={`Chaos: ${chaosPercentage}%`}
              />
            </div>

            <div className="flex justify-between text-[10px] font-mono font-bold">
              <span className="text-emerald-900">■ Useful: {useful} ({usefulPercentage}%)</span>
              <span className="text-purple-900">■ Chaos: {chaos} ({chaosPercentage}%)</span>
            </div>
          </div>

          {/* KPI Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
            <div className="win95-sunken p-2 bg-white text-center">
              <span className="text-[10px] text-gray-600 block">TOTAL QUERIES</span>
              <span className="text-lg font-bold font-mono text-black">{total}</span>
            </div>
            <div className="win95-sunken p-2 bg-white text-center">
              <span className="text-[10px] text-emerald-800 block font-bold">USEFUL RESULTS</span>
              <span className="text-lg font-bold font-mono text-emerald-900">{useful}</span>
            </div>
            <div className="win95-sunken p-2 bg-white text-center">
              <span className="text-[10px] text-purple-800 block font-bold">CHAOS RESULTS</span>
              <span className="text-lg font-bold font-mono text-purple-900">{chaos}</span>
            </div>
            <div className="win95-sunken p-2 bg-white text-center">
              <span className="text-[10px] text-amber-800 block font-bold">EASTER EGGS</span>
              <span className="text-lg font-bold font-mono text-amber-900">{stats.easterEggCount || 0}</span>
            </div>
          </div>

          {/* Incident Table */}
          <div className="win95-sunken bg-white p-1 mb-3 max-h-[220px] overflow-y-auto text-xs font-sans">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#dfdfdf] border-b border-[#808080] text-[11px] font-bold">
                  <th className="p-1 border-r border-[#808080]">Chaos Event Type</th>
                  <th className="p-1 text-right w-16">Count</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f0f0f0] text-[11px]">
                <tr>
                  <td className="p-1">404 Page Disappearances</td>
                  <td className="p-1 text-right font-mono font-bold text-red-900">{stats.fourOhFourCount || 0}</td>
                </tr>
                <tr>
                  <td className="p-1">Wrong Interpretations (Snakes, Honey)</td>
                  <td className="p-1 text-right font-mono font-bold text-purple-900">{stats.wrongSearchCount || 0}</td>
                </tr>
                <tr>
                  <td className="p-1">Blue Screen of Death / Fake Errors</td>
                  <td className="p-1 text-right font-mono font-bold text-blue-900">{stats.fakeErrorCount || 0}</td>
                </tr>
                <tr>
                  <td className="p-1">Infinite 99% Loads (Bored Browser)</td>
                  <td className="p-1 text-right font-mono font-bold text-amber-900">{stats.infiniteLoadCount || 0}</td>
                </tr>
                <tr>
                  <td className="p-1">Simulated Dial-Up Network Failures</td>
                  <td className="p-1 text-right font-mono font-bold text-red-900">{stats.offlineCount || 0}</td>
                </tr>
                <tr>
                  <td className="p-1">AI Confusion Incidents (Duck Recommendations)</td>
                  <td className="p-1 text-right font-mono font-bold text-teal-900">{stats.aiConfusionCount || 0}</td>
                </tr>
                <tr>
                  <td className="p-1">Unrelated & Absurd Results</td>
                  <td className="p-1 text-right font-mono font-bold text-emerald-900">{stats.unrelatedCount || 0}</td>
                </tr>
                <tr>
                  <td className="p-1">Did-You-Mean Inquiries</td>
                  <td className="p-1 text-right font-mono font-bold text-indigo-900">{stats.didYouMeanCount || 0}</td>
                </tr>
                <tr>
                  <td className="p-1">Useless 3-Step Answers</td>
                  <td className="p-1 text-right font-mono font-bold text-gray-900">{stats.uselessAnswerCount || 0}</td>
                </tr>
                <tr>
                  <td className="p-1">Bitmap Memes Rendered</td>
                  <td className="p-1 text-right font-mono font-bold text-pink-900">{stats.memeCount || 0}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Integrity & Buttons */}
          <div className="flex items-center justify-between pt-1 border-t border-[#808080]">
            <div className="flex items-center gap-1.5 text-xs font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-600 animate-pulse" />
              <span>System Integrity: <strong className="text-amber-900">Questionable</strong></span>
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleReset}
                className="win95-btn h-6 px-3 text-xs"
              >
                <RotateCcw className="w-3 h-3 mr-1" />
                Reset
              </button>
              {onClose && (
                <button
                  onClick={onClose}
                  className="win95-btn h-6 px-4 text-xs font-bold"
                >
                  OK
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
