// NOBROWSE™ - Status Bar Component

import React from 'react';

export function StatusBar({ onOpenStats, forceMode }) {
  return (
    <footer className="h-6 bg-[#c0c0c0] border-t border-[#ffffff] px-1 py-0.5 flex items-center justify-between text-[11px] font-sans text-black select-none z-20 shrink-0 gap-1">
      {/* Sunken Panel 1: Status */}
      <div className="win95-sunken-gray flex-1 h-4.5 px-2 flex items-center text-[10px] truncate">
        <span className="text-black font-semibold mr-1">Ready</span>
        <span className="text-gray-600 hidden sm:inline">• NOBROWSE™</span>
      </div>

      {/* Sunken Panel 2: Connection */}
      <div className="win95-sunken-gray hidden sm:flex items-center h-4.5 px-2 text-[10px] shrink-0">
        <span className="mr-1">🌐</span>
        <span>Simulated Dial-Up</span>
      </div>

      {/* Sunken Panel 3: Engine */}
      <div className="win95-sunken-gray hidden md:flex items-center h-4.5 px-2 text-[10px] shrink-0">
        <span>Engine: {forceMode === 'real' ? 'Direct' : forceMode === 'chaos' ? 'Random' : 'Online'}</span>
      </div>

      {/* Sunken Panel 4: Zone */}
      <div className="win95-sunken-gray hidden md:flex items-center h-4.5 px-2 text-[10px] shrink-0">
        <span>Zone: <strong>Internet</strong></span>
      </div>

      {/* Sunken Panel 5: Integrity */}
      <div
        onClick={onOpenStats}
        className="win95-sunken-gray flex items-center h-4.5 px-2 text-[10px] shrink-0 cursor-pointer hover:bg-[#d0d0d0]"
        title="Click to view full statistics ledger"
      >
        <span className="w-2 h-2 rounded-full bg-amber-600 inline-block mr-1.5 animate-pulse" />
        <span className="font-bold text-amber-900">Integrity: Questionable</span>
      </div>

      {/* Resizing Grip in corner */}
      <div className="w-3 h-3 flex flex-col justify-end items-end gap-0.5 opacity-60 pr-0.5 shrink-0">
        <div className="w-1 h-1 bg-[#808080] border-t border-l border-white" />
        <div className="flex gap-0.5">
          <div className="w-1 h-1 bg-[#808080] border-t border-l border-white" />
          <div className="w-1 h-1 bg-[#808080] border-t border-l border-white" />
        </div>
      </div>
    </footer>
  );
}
