// NOBROWSE™ - altf4 Bookmarks / Favorites Panel (Section 19)

import React, { useState } from 'react';
import { Trash2, Plus } from 'lucide-react';
import { removeBookmark, addBookmark } from '../utils/storage';
import { soundEffects } from '../utils/audio';

export function BookmarksPanel({
  bookmarks,
  onUpdateBookmarks,
  onOpenUrl,
  onClose,
  soundEnabled,
  volume
}) {
  const [newTitle, setNewTitle] = useState('');
  const [newUrl, setNewUrl] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);

  const handleRemove = (id, e) => {
    e.stopPropagation();
    const updated = removeBookmark(id);
    onUpdateBookmarks(updated);
    if (soundEnabled) soundEffects.click(volume);
  };

  const handleAddCustom = (e) => {
    e.preventDefault();
    if (!newTitle.trim() || !newUrl.trim()) return;

    const updated = addBookmark({
      title: newTitle.trim(),
      url: newUrl.trim(),
      domain: newUrl.replace(/^https?:\/\//, '').split('/')[0] || 'custom.link',
      category: 'User Custom'
    });

    onUpdateBookmarks(updated);
    setNewTitle('');
    setNewUrl('');
    setShowAddForm(false);
    if (soundEnabled) soundEffects.bookmark(volume);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4 sm:p-6 text-left font-sans animate-fade-in bg-white">
      <div className="win95-window w-full shadow-2xl">
        {/* Title Bar */}
        <div className="win95-titlebar h-5 px-1.5 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="text-xs">⭐</span>
            <span className="text-[11px] font-bold">Organize Favorites - NOBROWSE™</span>
          </div>
          {onClose && <button onClick={onClose} className="win95-title-btn">✕</button>}
        </div>

        {/* Content */}
        <div className="p-3 bg-[#c0c0c0] text-black">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-gray-800">
              Folder: Favorites ({bookmarks.length} shortcuts)
            </span>
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="win95-btn h-6 px-2 text-[10px] font-bold"
            >
              <Plus className="w-3 h-3 mr-1" />
              New Favorite
            </button>
          </div>

          {/* New Favorite Form */}
          {showAddForm && (
            <form onSubmit={handleAddCustom} className="win95-raised p-2.5 mb-3 bg-[#e8e8e8] space-y-2">
              <div className="text-[11px] font-bold text-blue-900 uppercase">
                Add Shortcut to Favorites
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="Name (e.g. React Tutorial)"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="win95-sunken px-2 py-0.5 bg-white text-xs outline-none"
                  required
                />
                <input
                  type="text"
                  placeholder="URL or query"
                  value={newUrl}
                  onChange={(e) => setNewUrl(e.target.value)}
                  className="win95-sunken px-2 py-0.5 bg-white text-xs outline-none"
                  required
                />
              </div>
              <div className="flex justify-end gap-1.5">
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="win95-btn h-5 px-2 text-[10px]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="win95-btn h-5 px-3 text-[10px] font-bold"
                >
                  Save
                </button>
              </div>
            </form>
          )}

          {/* List of Favorites */}
          <div className="win95-sunken bg-white p-1 min-h-[260px] max-h-[380px] overflow-y-auto text-xs font-sans">
            {bookmarks.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                No favorites saved. Click the star on any result to bookmark it.
              </div>
            ) : (
              <div className="space-y-0.5">
                {bookmarks.map((bm) => (
                  <div
                    key={bm.id}
                    onClick={() => onOpenUrl(bm.url, bm.query)}
                    className="flex items-center justify-between p-1 hover:bg-[#000080] hover:text-white cursor-pointer group"
                  >
                    <div className="flex items-center gap-2 overflow-hidden">
                      <span className="text-sm shrink-0">📄</span>
                      <div className="truncate">
                        <div className="font-bold truncate group-hover:text-white">
                          {bm.title}
                        </div>
                        <div className="text-[10px] text-gray-500 group-hover:text-gray-300 truncate font-mono">
                          {bm.domain || bm.url}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 shrink-0 ml-2">
                      <span className="text-[10px] px-1 bg-[#dfdfdf] group-hover:bg-[#1084d0] group-hover:text-white rounded-none border border-gray-400">
                        {bm.category || 'General'}
                      </span>
                      <button
                        onClick={(e) => handleRemove(bm.id, e)}
                        className="p-1 text-gray-400 hover:text-red-300 group-hover:text-white"
                        title="Delete shortcut"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex justify-end pt-2 border-t border-[#808080] mt-2">
            {onClose && (
              <button onClick={onClose} className="win95-btn h-6 px-4 text-xs font-bold">
                Close
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
