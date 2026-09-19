// NOBROWSE™ - Tab Bar & Window Header

import React from 'react';
import { Plus } from 'lucide-react';
import { soundEffects } from '../utils/audio';

export function TabBar({
  tabs,
  activeTabId,
  onSwitchTab,
  onNewTab,
  onCloseTab,
  isMaximized,
  onToggleMaximize,
  soundEnabled,
  volume
}) {
  const handleNewTabClick = () => {
    if (soundEnabled) soundEffects.tabOpen(volume);
    onNewTab();
  };

  const handleCloseTabClick = (tabId, e) => {
    e.stopPropagation();
    if (soundEnabled) soundEffects.tabClose(volume);
    onCloseTab(tabId);
  };

  const handleSwitchTabClick = (tabId) => {
    if (activeTabId !== tabId && soundEnabled) {
      soundEffects.click(volume);
    }
    onSwitchTab(tabId);
  };

  const handleWindowClose = () => {
    if (soundEnabled) soundEffects.click(volume);
  };

  const handleWindowMinimize = () => {
    if (soundEnabled) soundEffects.click(volume);
  };

  const activeTab = tabs.find(t => t.id === activeTabId) || tabs[0];

  return (
    <div className="flex flex-col select-none z-30 shrink-0 bg-[#c0c0c0]">
      {/* 1. TITLE BAR */}
      <div className="win95-titlebar h-6 px-1.5 flex items-center justify-between mx-0.5 mt-0.5">
        <div className="flex items-center gap-1.5 overflow-hidden">
          <div className="w-4 h-4 flex items-center justify-center shrink-0">
            <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none">
              <rect x="1" y="2" width="6" height="5" fill="#ff4b4b" />
              <rect x="8" y="1" width="6" height="5" fill="#00d040" />
              <rect x="2" y="8" width="6" height="5" fill="#0080ff" />
              <rect x="9" y="7" width="6" height="5" fill="#ffd700" />
            </svg>
          </div>

          <span className="truncate text-[11px] font-bold tracking-wide">
            {activeTab.title
              ? activeTab.title.includes('NOBROWSE™')
                ? activeTab.title
                : `${activeTab.title} - NOBROWSE™`
              : "NOBROWSE™ - The browser that sometimes understands you"}
          </span>
        </div>

        {/* Window Controls (─, □, ✕) */}
        <div className="flex items-center gap-1 shrink-0 ml-2">
          <button
            onClick={handleWindowMinimize}
            className="win95-title-btn"
            title="Minimize"
          >
            _
          </button>
          <button
            onClick={onToggleMaximize}
            className="win95-title-btn font-mono"
            title={isMaximized ? "Restore" : "Maximize"}
          >
            {isMaximized ? "❐" : "□"}
          </button>
          <button
            onClick={handleWindowClose}
            className="win95-title-btn font-bold text-red-900"
            title="Close"
          >
            ✕
          </button>
        </div>
      </div>

      {/* 2. PROPERTY TABS STRIP */}
      <div className="flex items-end px-2 pt-1.5 overflow-x-auto no-scrollbar border-b-2 border-[#ffffff] relative z-10 bg-[#c0c0c0]">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTabId;

          return (
            <div
              key={tab.id}
              onClick={() => handleSwitchTabClick(tab.id)}
              className={`group flex items-center gap-1.5 px-3 py-1 max-w-[190px] min-w-[100px] text-[11px] font-sans border-t-2 border-l-2 border-r-2 cursor-pointer transition-none ${
                isActive
                  ? "bg-[#c0c0c0] font-bold border-t-[#ffffff] border-l-[#ffffff] border-r-[#808080] border-b-2 border-b-[#c0c0c0] -mb-[2px] pb-1.5 z-20 shadow-[1px_0_0_#000000]"
                  : "bg-[#b0b0b0] text-[#404040] border-t-[#ffffff] border-l-[#ffffff] border-r-[#808080] border-b-2 border-b-[#ffffff] mb-0 opacity-90 hover:bg-[#b8b8b8]"
              }`}
            >
              {/* Tab Icon */}
              <span className="shrink-0 text-xs">
                {tab.isReal ? "🌐" : tab.isEasterEgg ? "✨" : tab.result?.type === '404' ? "❌" : tab.result?.type === 'ai-confusion' ? "🦆" : "📄"}
              </span>

              {/* Tab Title */}
              <span className="truncate flex-1">
                {tab.title || "Document"}
              </span>

              {/* Close Tab Button */}
              {tabs.length > 1 && (
                <button
                  onClick={(e) => handleCloseTabClick(tab.id, e)}
                  className="w-3.5 h-3.5 flex items-center justify-center font-bold text-[9px] hover:bg-[#808080] hover:text-white rounded-none ml-1 shrink-0"
                  title="Close tab"
                >
                  ✕
                </button>
              )}
            </div>
          );
        })}

        {/* New Tab Button */}
        <button
          onClick={handleNewTabClick}
          className="win95-btn h-5 px-1.5 mb-0.5 ml-1 text-[10px]"
          title="Open new tab"
        >
          <Plus className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}
