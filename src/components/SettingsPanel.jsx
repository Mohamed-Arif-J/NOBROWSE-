// NOBROWSE™ - Settings Panel (Internet Options)

import React from 'react';
import { Settings, Volume2, VolumeX, Play } from 'lucide-react';
import { saveSettings } from '../utils/storage';
import { soundEffects } from '../utils/audio';

export function SettingsPanel({
  settings,
  onUpdateSettings,
  onClose
}) {
  const handleToggleSound = () => {
    const updated = saveSettings({ soundEnabled: !settings.soundEnabled });
    onUpdateSettings(updated);
    if (updated.soundEnabled) soundEffects.click(updated.volume);
  };

  const handleVolumeChange = (e) => {
    const newVol = parseFloat(e.target.value);
    const updated = saveSettings({ volume: newVol });
    onUpdateSettings(updated);
  };

  const handleToggleMotion = () => {
    const updated = saveSettings({ reducedMotion: !settings.reducedMotion });
    onUpdateSettings(updated);
  };

  const handleForceModeChange = (mode) => {
    const updated = saveSettings({ forceMode: mode });
    onUpdateSettings(updated);
    if (settings.soundEnabled) soundEffects.click(settings.volume);
  };

  const handleTestSound = (type) => {
    if (!settings.soundEnabled) return;
    if (type === 'click') soundEffects.click(settings.volume);
    if (type === 'search') soundEffects.searchSubmit(settings.volume);
    if (type === 'real') soundEffects.realSuccess(settings.volume);
    if (type === 'chaos') soundEffects.chaosError(settings.volume);
    if (type === 'duck') soundEffects.duckQuack(settings.volume);
    if (type === 'pacman') soundEffects.pacmanDeath(settings.volume);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4 sm:p-6 text-left font-sans animate-fade-in bg-white">
      <div className="win95-window w-full shadow-2xl">
        {/* Title Bar */}
        <div className="win95-titlebar h-5 px-1.5 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Settings className="w-3.5 h-3.5" />
            <span className="text-[11px] font-bold">Internet Options - NOBROWSE™</span>
          </div>
          {onClose && <button onClick={onClose} className="win95-title-btn">✕</button>}
        </div>

        {/* Content */}
        <div className="p-3 bg-[#c0c0c0] text-black space-y-3">
          {/* Sound Groupbox */}
          <fieldset className="border border-[#808080] p-3 text-xs bg-[#c0c0c0]">
            <legend className="font-bold px-1 text-black">Multimedia Audio</legend>

            <div className="flex items-center justify-between mb-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.soundEnabled}
                  onChange={handleToggleSound}
                  className="cursor-pointer"
                />
                <span className="font-bold">Enable Synthetic Web Audio Effects</span>
              </label>
              {settings.soundEnabled ? (
                <Volume2 className="w-4 h-4 text-emerald-800" />
              ) : (
                <VolumeX className="w-4 h-4 text-gray-500" />
              )}
            </div>

            {/* Volume slider */}
            <div className="flex items-center gap-3 mb-3">
              <span className="w-16">Volume:</span>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={settings.volume}
                onChange={handleVolumeChange}
                disabled={!settings.soundEnabled}
                className="flex-1 cursor-pointer disabled:opacity-50"
              />
              <span className="font-mono w-10 text-right">
                {(settings.volume * 100).toFixed(0)}%
              </span>
            </div>

            {/* Test buttons */}
            <div className="pt-2 border-t border-[#808080]">
              <span className="text-[10px] text-gray-700 block mb-1.5 font-bold">Preview Audio Synthesis:</span>
              <div className="flex flex-wrap gap-1.5">
                <button
                  type="button"
                  onClick={() => handleTestSound('click')}
                  disabled={!settings.soundEnabled}
                  className="win95-btn h-5 px-2 text-[10px]"
                >
                  <Play className="w-2.5 h-2.5 mr-1" /> Click
                </button>
                <button
                  type="button"
                  onClick={() => handleTestSound('search')}
                  disabled={!settings.soundEnabled}
                  className="win95-btn h-5 px-2 text-[10px]"
                >
                  <Play className="w-2.5 h-2.5 mr-1" /> Handshake
                </button>
                <button
                  type="button"
                  onClick={() => handleTestSound('real')}
                  disabled={!settings.soundEnabled}
                  className="win95-btn h-5 px-2 text-[10px]"
                >
                  <Play className="w-2.5 h-2.5 mr-1" /> Success Chime
                </button>
                <button
                  type="button"
                  onClick={() => handleTestSound('chaos')}
                  disabled={!settings.soundEnabled}
                  className="win95-btn h-5 px-2 text-[10px]"
                >
                  <Play className="w-2.5 h-2.5 mr-1" /> Retro Bloop
                </button>
                <button
                  type="button"
                  onClick={() => handleTestSound('duck')}
                  disabled={!settings.soundEnabled}
                  className="win95-btn h-5 px-2 text-[10px]"
                >
                  <Play className="w-2.5 h-2.5 mr-1" /> Quack
                </button>
                <button
                  type="button"
                  onClick={() => handleTestSound('pacman')}
                  disabled={!settings.soundEnabled}
                  className="win95-btn h-5 px-2 text-[10px]"
                  title="Test Pac-Man Game Over / Blue Screen sound"
                >
                  <Play className="w-2.5 h-2.5 mr-1 text-amber-700" /> Pac-Man Game Over
                </button>
              </div>
            </div>
          </fieldset>

          {/* Engine Mode Groupbox */}
          <fieldset className="border border-[#808080] p-3 text-xs bg-[#c0c0c0]">
            <legend className="font-bold px-1 text-black">Chaos Engine Dial-Up Mode</legend>

            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="forceMode"
                  checked={settings.forceMode === 'random' || !settings.forceMode}
                  onChange={() => handleForceModeChange('random')}
                />
                <span>
                  <strong>Standard Mode (Default)</strong> (Randomized engine balance for varied search outcomes)
                </span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="forceMode"
                  checked={settings.forceMode === 'real'}
                  onChange={() => handleForceModeChange('real')}
                />
                <span>
                  <strong>Force 100% Real Mode</strong> (Always show useful search results)
                </span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="forceMode"
                  checked={settings.forceMode === 'chaos'}
                  onChange={() => handleForceModeChange('chaos')}
                />
                <span>
                  <strong>Force 100% Chaos Mode</strong> (Always trigger an unpredictable chaos event)
                </span>
              </label>
            </div>
          </fieldset>

          {/* Accessibility Groupbox */}
          <fieldset className="border border-[#808080] p-3 text-xs bg-[#c0c0c0]">
            <legend className="font-bold px-1 text-black">Display Options</legend>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={settings.reducedMotion}
                onChange={handleToggleMotion}
                className="cursor-pointer"
              />
              <span>Reduce motion and window shaking</span>
            </label>
          </fieldset>

          {/* Action Buttons */}
          <div className="flex justify-end gap-2 pt-2 border-t border-[#808080]">
            {onClose && (
              <>
                <button onClick={onClose} className="win95-btn h-6 px-4 text-xs font-bold">
                  OK
                </button>
                <button onClick={onClose} className="win95-btn h-6 px-4 text-xs">
                  Cancel
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
