// NOBROWSE™ - altf4 History Panel (Section 18)

import React, { useState } from 'react';
import { Clock, Trash2, Search } from 'lucide-react';
import { clearHistory, removeHistoryItem } from '../utils/storage';
import { soundEffects } from '../utils/audio';

export function HistoryPanel({
  historyItems,
  onUpdateHistory,
  onSelectQuery,
  onClose,
  soundEnabled,
  volume
}) {
  const [filterType, setFilterType] = useState('ALL');
  const [searchTerm, setSearchTerm] = useState('');

  const handleClear = () => {
    if (confirm("Are you sure you want to erase all search history logs?")) {
      const empty = clearHistory();
      onUpdateHistory(empty);
      if (soundEnabled) soundEffects.click(volume);
    }
  };

  const handleRemove = (id, e) => {
    e.stopPropagation();
    const updated = removeHistoryItem(id);
    onUpdateHistory(updated);
    if (soundEnabled) soundEffects.click(volume);
  };

  const filtered = historyItems.filter(item => {
    const matchesSearch = item.query.toLowerCase().includes(searchTerm.toLowerCase());
    if (!matchesSearch) return false;
    if (filterType === 'ALL') return true;
    if (filterType === 'REAL') return item.type === 'REAL SEARCH';
    if (filterType === 'CHAOS') return item.type !== 'REAL SEARCH';
    return true;
  });

  const formatTime = (ts) => {
    if (!ts) return "Recently";
    const date = new Date(ts);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4 sm:p-6 text-left font-sans animate-fade-in bg-white">
      <div className="win95-window w-full shadow-2xl">
        {/* Title Bar */}
        <div className="win95-titlebar h-5 px-1.5 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            <span className="text-[11px] font-bold">History Archive - NOBROWSE™</span>
          </div>
          {onClose && <button onClick={onClose} className="win95-title-btn">✕</button>}
        </div>

        {/* Dialog Content */}
        <div className="p-3 bg-[#c0c0c0] text-black">
          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 mb-3">
            <div className="win95-sunken flex items-center bg-white px-2 py-0.5 flex-1 w-full text-xs">
              <Search className="w-3.5 h-3.5 text-gray-500 mr-1.5" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search history records..."
                className="w-full bg-transparent outline-none text-black text-xs"
              />
            </div>

            <div className="flex items-center gap-1 shrink-0">
              {['ALL', 'REAL', 'CHAOS'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilterType(tab)}
                  className={`win95-btn h-6 px-2 text-[10px] ${filterType === tab ? 'win95-sunken-gray font-bold' : ''}`}
                >
                  {tab}
                </button>
              ))}

              {historyItems.length > 0 && (
                <button
                  onClick={handleClear}
                  className="win95-btn h-6 px-2 text-[10px] text-red-900 font-bold"
                >
                  <Trash2 className="w-3 h-3 mr-0.5" />
                  Clear All
                </button>
              )}
            </div>
          </div>

          {/* Sunken List Viewport */}
          <div className="win95-sunken bg-white p-1 min-h-[300px] max-h-[420px] overflow-y-auto font-sans text-xs">
            {filtered.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                No past queries match the search criteria.
              </div>
            ) : (
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#dfdfdf] border-b border-[#808080] text-[11px] font-bold text-black">
                    <th className="p-1 border-r border-[#808080]">Query</th>
                    <th className="p-1 border-r border-[#808080] w-24">Type</th>
                    <th className="p-1 border-r border-[#808080] w-20">Time</th>
                    <th className="p-1 w-8 text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((item) => (
                    <tr
                      key={item.id}
                      onClick={() => onSelectQuery(item.query)}
                      className="hover:bg-[#000080] hover:text-white cursor-pointer border-b border-[#f0f0f0] group"
                    >
                      <td className="p-1 font-medium truncate max-w-[200px]">
                        "{item.query}"
                      </td>
                      <td className="p-1 font-mono text-[10px]">
                        <span className={`px-1 py-0.5 font-bold ${
                          item.type === 'REAL SEARCH' ? 'text-emerald-800 group-hover:text-emerald-300' : 'text-purple-800 group-hover:text-purple-300'
                        }`}>
                          {item.type}
                        </span>
                      </td>
                      <td className="p-1 text-[10px] text-gray-600 group-hover:text-white font-mono">
                        {formatTime(item.timestamp)}
                      </td>
                      <td className="p-1 text-center">
                        <button
                          onClick={(e) => handleRemove(item.id, e)}
                          className="hover:text-red-400 p-0.5 text-gray-400 group-hover:text-white"
                          title="Remove item"
                        >
                          ✕
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          <div className="flex justify-between items-center pt-2 text-[10px] text-gray-700">
            <span>Total Logged Entries: {historyItems.length}</span>
            {onClose && (
              <button onClick={onClose} className="win95-btn h-6 px-4 text-xs">
                Close
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
