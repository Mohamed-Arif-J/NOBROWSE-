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

  return (
    <div className="flex flex-col select-none z-30 shrink-0 bg-[#c0c0c0]">
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
