// NOBROWSE™ - Master Browser Component

import React, { useState, useEffect, useCallback } from 'react';
import { TabBar } from './TabBar';
import { AddressBar } from './AddressBar';
import { BookmarksBar } from './BookmarksBar';
import { HomePage } from './HomePage';
import { SearchResults } from './SearchResults';
import { ChaosResult } from './ChaosResult';
import { WebPageView } from './WebPageView';
import { NotFound } from './NotFound';
import { ErrorPage } from './ErrorPage';
import { LoadingPage } from './LoadingPage';
import { HistoryPanel } from './HistoryPanel';
import { BookmarksPanel } from './BookmarksPanel';
import { StatisticsPanel } from './StatisticsPanel';
import { SettingsPanel } from './SettingsPanel';
import { StatusBar } from './StatusBar';

import { getSearchResult } from '../utils/chaosEngine';
import {
  getHistory,
  addHistoryItem,
  getBookmarks,
  addBookmark,
  removeBookmark,
  isBookmarked,
  getStats,
  recordSearchStats,
  getSettings,
  saveSettings
} from '../utils/storage';
import { soundEffects } from '../utils/audio';

export function Browser() {
  // ----------------- STATE -----------------
  const [settings, setSettings] = useState(getSettings);
  const [stats, setStats] = useState(getStats);
  const [historyList, setHistoryList] = useState(getHistory);
  const [bookmarksList, setBookmarksList] = useState(getBookmarks);
  const [isMaximized, setIsMaximized] = useState(true);
  const [activePanel, setActivePanel] = useState(null); // 'history' | 'bookmarks' | 'stats' | 'settings' | null

  const [tabs, setTabs] = useState(() => [
    {
      id: 'tab_default',
      title: 'NOBROWSE™ - The internet, approximately.',
      url: 'nobrowse://home',
      historyStack: ['nobrowse://home'],
      historyIndex: 0,
      query: '',
      result: null,
      pageData: null,
      isLoading: false,
      isChaosHanging: false,
      isReal: false,
      isEasterEgg: false,
    }
  ]);
  const [activeTabId, setActiveTabId] = useState('tab_default');

  const activeTab = tabs.find(t => t.id === activeTabId) || tabs[0];

  // ----------------- TAB ACTIONS -----------------
  const handleNewTab = useCallback(() => {
    const newTab = {
      id: 'tab_' + Date.now() + '_' + Math.random().toString(36).substring(2, 5),
      title: 'New Tab',
      url: 'nobrowse://home',
      historyStack: ['nobrowse://home'],
      historyIndex: 0,
      query: '',
      result: null,
      pageData: null,
      isLoading: false,
      isChaosHanging: false,
      isReal: false,
      isEasterEgg: false,
    };
    setTabs(prev => [...prev, newTab]);
    setActiveTabId(newTab.id);
  }, []);

  const handleCloseTab = useCallback((tabId) => {
    setTabs(prev => {
      if (prev.length <= 1) return prev;
      const nextTabs = prev.filter(t => t.id !== tabId);
      setActiveTabId(current => (current === tabId ? nextTabs[nextTabs.length - 1].id : current));
      return nextTabs;
    });
  }, []);

  const handleSwitchTab = (tabId) => {
    setActiveTabId(tabId);
    setActivePanel(null);
  };

  // Open search result link in a new browser tab
  const handleOpenInNewTab = useCallback((title, url, snippet) => {
    const newTabId = 'tab_' + Date.now() + '_' + Math.random().toString(36).substring(2, 5);
    const domain = url.replace(/^https?:\/\//, '').split('/')[0] || 'web.link';
    const newTab = {
      id: newTabId,
      title: title || url,
      url: url,
      historyStack: [url],
      historyIndex: 0,
      query: '',
      result: null,
      pageData: {
        title: title || url,
        url: url,
        snippet: snippet || '',
        domain
      },
      isLoading: false,
      isChaosHanging: false,
      isReal: true,
      isEasterEgg: false,
    };

    setTabs(prev => [...prev, newTab]);
    setActiveTabId(newTabId);
    setActivePanel(null);

    if (settings.soundEnabled) soundEffects.click(settings.volume);
  }, [settings.soundEnabled, settings.volume]);

  // ----------------- SEARCH & EXECUTION -----------------
  const executeSearchOnTab = useCallback((tabId, queryToSearch) => {
    const cleanQuery = queryToSearch.trim();
    if (!cleanQuery) return;

    // First, query the Chaos Engine
    const resultData = getSearchResult(cleanQuery, settings.forceMode);

    // Update tab state to loading
    const isChaosHanging = resultData.chaosType === 'loading';

    setTabs(prev => prev.map(tab => {
      if (tab.id !== tabId) return tab;

      const newUrl = `nobrowse://search?q=${encodeURIComponent(cleanQuery)}`;
      const newStack = tab.historyStack.slice(0, tab.historyIndex + 1);
      newStack.push(newUrl);

      return {
        ...tab,
        title: `${cleanQuery} - NOBROWSE™`,
        url: newUrl,
        historyStack: newStack,
        historyIndex: newStack.length - 1,
        query: cleanQuery,
        isLoading: true,
        isChaosHanging,
        result: resultData,
        pageData: null,
        isReal: resultData.isReal,
        isEasterEgg: resultData.isEasterEgg,
      };
    }));

    // Record stats
    const updatedStats = recordSearchStats({
      isReal: resultData.isReal,
      chaosType: resultData.chaosType,
      isEasterEgg: resultData.isEasterEgg,
    });
    setStats(updatedStats);

    // Record history
    let historyType = 'CHAOS';
    if (resultData.isReal) {
      historyType = 'REAL SEARCH';
    } else if (resultData.isEasterEgg) {
      historyType = 'EASTER EGG';
    } else if (resultData.chaosType === '404') {
      historyType = '404';
    } else if (resultData.chaosType === 'fake-error') {
      historyType = 'FAKE ERROR';
    } else if (resultData.chaosType === 'wrong-search') {
      historyType = 'WRONG SEARCH';
    }

    const updatedHistory = addHistoryItem({
      query: cleanQuery,
      type: historyType,
      title: `${cleanQuery} - NOBROWSE™`,
      url: `nobrowse://search?q=${encodeURIComponent(cleanQuery)}`,
    });
    setHistoryList(updatedHistory);

    // If not hanging at 99%, simulate short realistic loading delay (~500ms)
    if (!isChaosHanging) {
      setTimeout(() => {
        setTabs(prev => prev.map(tab => {
          if (tab.id !== tabId) return tab;
          return {
            ...tab,
            isLoading: false,
          };
        }));

        // Play appropriate sound effect
        if (settings.soundEnabled) {
          if (resultData.isReal) {
            soundEffects.realSuccess(settings.volume);
          } else if (resultData.isEasterEgg) {
            soundEffects.easterEggChime(settings.volume);
          } else if (resultData.chaosType === 'fake-error' || resultData.chaosType === '404') {
            soundEffects.pacmanDeath(settings.volume);
          } else if (resultData.chaosType === 'ai-confusion') {
            soundEffects.duckQuack(settings.volume);
          } else {
            soundEffects.chaosError(settings.volume);
          }
        }
      }, 500);
    } else {
      // It's the infinite 99% freeze!
      if (settings.soundEnabled) {
        soundEffects.freezeTick(settings.volume);
      }
    }
  }, [settings.forceMode, settings.soundEnabled, settings.volume]);

  // Global search trigger from AddressBar, HomePage, or BookmarksBar
  const handleTriggerSearch = (rawInput) => {
    setActivePanel(null);
    const trimmed = rawInput.trim();

    // Check for internal schemes
    if (trimmed === 'nobrowse://home' || trimmed === 'about:home' || trimmed === 'home') {
      navigateToUrl('nobrowse://home', 'NOBROWSE™ - The internet, approximately.');
      return;
    }
    if (trimmed === 'nobrowse://history' || trimmed === 'about:history' || trimmed === 'history') {
      setActivePanel('history');
      return;
    }
    if (trimmed === 'nobrowse://bookmarks' || trimmed === 'about:bookmarks' || trimmed === 'bookmarks') {
      setActivePanel('bookmarks');
      return;
    }
    if (trimmed === 'nobrowse://stats' || trimmed === 'about:stats' || trimmed === 'stats') {
      setActivePanel('stats');
      return;
    }
    if (trimmed === 'nobrowse://settings' || trimmed === 'about:settings' || trimmed === 'settings') {
      setActivePanel('settings');
      return;
    }

    // If user types a full web URL
    if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
      const domain = trimmed.replace(/^https?:\/\//, '').split('/')[0];
      handleOpenInNewTab(domain, trimmed, '');
      return;
    }

    // Otherwise, treat as search query
    executeSearchOnTab(activeTabId, trimmed);
  };

  // ----------------- NAVIGATION -----------------
  const navigateToUrl = useCallback((url, title) => {
    setTabs(prev => prev.map(tab => {
      if (tab.id !== activeTabId) return tab;
      const newStack = tab.historyStack.slice(0, tab.historyIndex + 1);
      newStack.push(url);
      const isWebUrl = url.startsWith('http://') || url.startsWith('https://');
      return {
        ...tab,
        url,
        title: title || url,
        historyStack: newStack,
        historyIndex: newStack.length - 1,
        isLoading: false,
        isChaosHanging: false,
        result: null,
        pageData: isWebUrl ? {
          title: title || url,
          url,
          domain: url.replace(/^https?:\/\//, '').split('/')[0]
        } : null,
      };
    }));
  }, [activeTabId]);

  const handleGoBack = useCallback(() => {
    if (activeTab.historyIndex > 0) {
      const newIndex = activeTab.historyIndex - 1;
      const targetUrl = activeTab.historyStack[newIndex];
      setTabs(prev => prev.map(tab => {
        if (tab.id !== activeTabId) return tab;

        let restoredResult = null;
        let restoredPageData = null;
        let query = '';

        if (targetUrl.startsWith('nobrowse://search?q=')) {
          query = decodeURIComponent(targetUrl.replace('nobrowse://search?q=', ''));
          restoredResult = getSearchResult(query, settings.forceMode);
        } else if (targetUrl.startsWith('http://') || targetUrl.startsWith('https://')) {
          restoredPageData = {
            url: targetUrl,
            title: targetUrl,
            domain: targetUrl.replace(/^https?:\/\//, '').split('/')[0]
          };
        }

        return {
          ...tab,
          url: targetUrl,
          title: query ? `${query} - NOBROWSE™` : targetUrl === 'nobrowse://home' ? 'NOBROWSE™ - The internet, approximately.' : targetUrl,
          historyIndex: newIndex,
          query,
          result: restoredResult,
          pageData: restoredPageData,
          isLoading: false,
          isChaosHanging: false,
        };
      }));
    }
  }, [activeTab.historyIndex, activeTab.historyStack, activeTabId, settings.forceMode]);

  const handleGoForward = useCallback(() => {
    if (activeTab.historyIndex < activeTab.historyStack.length - 1) {
      const newIndex = activeTab.historyIndex + 1;
      const targetUrl = activeTab.historyStack[newIndex];
      setTabs(prev => prev.map(tab => {
        if (tab.id !== activeTabId) return tab;

        let restoredResult = null;
        let restoredPageData = null;
        let query = '';

        if (targetUrl.startsWith('nobrowse://search?q=')) {
          query = decodeURIComponent(targetUrl.replace('nobrowse://search?q=', ''));
          restoredResult = getSearchResult(query, settings.forceMode);
        } else if (targetUrl.startsWith('http://') || targetUrl.startsWith('https://')) {
          restoredPageData = {
            url: targetUrl,
            title: targetUrl,
            domain: targetUrl.replace(/^https?:\/\//, '').split('/')[0]
          };
        }

        return {
          ...tab,
          url: targetUrl,
          title: query ? `${query} - NOBROWSE™` : targetUrl === 'nobrowse://home' ? 'NOBROWSE™ - The internet, approximately.' : targetUrl,
          historyIndex: newIndex,
          query,
          result: restoredResult,
          pageData: restoredPageData,
          isLoading: false,
          isChaosHanging: false,
        };
      }));
    }
  }, [activeTab.historyIndex, activeTab.historyStack, activeTabId, settings.forceMode]);

  const handleReload = useCallback(() => {
    if (activeTab.query) {
      executeSearchOnTab(activeTabId, activeTab.query);
    } else {
      setTabs(prev => prev.map(tab => {
        if (tab.id !== activeTabId) return tab;
        return { ...tab, isLoading: false, isChaosHanging: false };
      }));
    }
  }, [activeTab.query, activeTabId, executeSearchOnTab]);

  const handleHome = useCallback(() => {
    setActivePanel(null);
    navigateToUrl('nobrowse://home', 'NOBROWSE™ - The internet, approximately.');
  }, [navigateToUrl]);

  // ----------------- BOOKMARKS -----------------
  const handleBookmarkItem = (item) => {
    const url = item.url || (item.query ? `nobrowse://search?q=${encodeURIComponent(item.query)}` : activeTab.url);
    const title = item.title || item.query || activeTab.title;

    if (isBookmarked(url)) {
      const all = getBookmarks();
      const existing = all.find(b => b.url === url || (item.title && b.title === item.title));
      if (existing) {
        const updated = removeBookmark(existing.id);
        setBookmarksList(updated);
        if (settings.soundEnabled) soundEffects.click(settings.volume);
      }
    } else {
      const updated = addBookmark({
        title,
        url,
        domain: item.domain || url.replace(/^https?:\/\//, '').split('/')[0] || 'nobrowse',
        category: item.category || 'User Saved'
      });
      setBookmarksList(updated);
      if (settings.soundEnabled) soundEffects.bookmark(settings.volume);
    }
  };

  const handleToggleBookmarkCurrent = () => {
    if (activeTab.query) {
      handleBookmarkItem({
        title: `${activeTab.query} - Search`,
        url: activeTab.url,
        domain: 'nobrowse.search'
      });
    } else if (activeTab.pageData) {
      handleBookmarkItem({
        title: activeTab.pageData.title,
        url: activeTab.pageData.url,
        domain: activeTab.pageData.domain
      });
    } else {
      handleBookmarkItem({
        title: activeTab.title,
        url: activeTab.url,
        domain: 'nobrowse'
      });
    }
  };

  // ----------------- KEYBOARD SHORTCUTS -----------------
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ctrl+T: New Tab
      if ((e.ctrlKey || e.metaKey) && e.key === 't') {
        e.preventDefault();
        handleNewTab();
        if (settings.soundEnabled) soundEffects.click(settings.volume);
      }
      // Ctrl+W: Close Tab
      if ((e.ctrlKey || e.metaKey) && e.key === 'w') {
        e.preventDefault();
        handleCloseTab(activeTabId);
        if (settings.soundEnabled) soundEffects.click(settings.volume);
      }
      // Ctrl+R or F5: Reload
      if (((e.ctrlKey || e.metaKey) && e.key === 'r') || e.key === 'F5') {
        e.preventDefault();
        handleReload();
        if (settings.soundEnabled) soundEffects.click(settings.volume);
      }
      // Alt+Left Arrow: Back
      if (e.altKey && e.key === 'ArrowLeft') {
        e.preventDefault();
        handleGoBack();
        if (settings.soundEnabled) soundEffects.click(settings.volume);
      }
      // Alt+Right Arrow: Forward
      if (e.altKey && e.key === 'ArrowRight') {
        e.preventDefault();
        handleGoForward();
        if (settings.soundEnabled) soundEffects.click(settings.volume);
      }
      // Alt+Home: Home
      if (e.altKey && e.key === 'Home') {
        e.preventDefault();
        handleHome();
        if (settings.soundEnabled) soundEffects.click(settings.volume);
      }
      // Ctrl+H: History
      if ((e.ctrlKey || e.metaKey) && e.key === 'h') {
        e.preventDefault();
        setActivePanel(prev => prev === 'history' ? null : 'history');
        if (settings.soundEnabled) soundEffects.click(settings.volume);
      }
      // Ctrl+B: Bookmarks
      if ((e.ctrlKey || e.metaKey) && e.key === 'b') {
        e.preventDefault();
        setActivePanel(prev => prev === 'bookmarks' ? null : 'bookmarks');
        if (settings.soundEnabled) soundEffects.click(settings.volume);
      }
      // Escape: Close Panels
      if (e.key === 'Escape' && activePanel) {
        setActivePanel(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNewTab, handleCloseTab, handleReload, handleGoBack, handleGoForward, handleHome, activeTabId, activePanel, settings.soundEnabled, settings.volume]);

  // ----------------- RENDER VIEWPORT -----------------
  const renderViewport = () => {
    // Overlays / Panels (History, Bookmarks, Stats, Settings)
    if (activePanel === 'history') {
      return (
        <HistoryPanel
          historyItems={historyList}
          onUpdateHistory={setHistoryList}
          onSelectQuery={(q) => handleTriggerSearch(q)}
          onClose={() => setActivePanel(null)}
          soundEnabled={settings.soundEnabled}
          volume={settings.volume}
        />
      );
    }
    if (activePanel === 'bookmarks') {
      return (
        <BookmarksPanel
          bookmarks={bookmarksList}
          onUpdateBookmarks={setBookmarksList}
          onOpenUrl={(url, query) => handleTriggerSearch(query || url)}
          onClose={() => setActivePanel(null)}
          soundEnabled={settings.soundEnabled}
          volume={settings.volume}
        />
      );
    }
    if (activePanel === 'stats') {
      return (
        <StatisticsPanel
          stats={stats}
          onUpdateStats={setStats}
          onClose={() => setActivePanel(null)}
          soundEnabled={settings.soundEnabled}
          volume={settings.volume}
        />
      );
    }
    if (activePanel === 'settings') {
      return (
        <SettingsPanel
          settings={settings}
          onUpdateSettings={setSettings}
          onClose={() => setActivePanel(null)}
        />
      );
    }

    // If active tab is loading
    if (activeTab.isLoading) {
      return (
        <LoadingPage
          query={activeTab.query}
          isChaosHanging={activeTab.isChaosHanging}
          onBoredAwake={() => {
            // Wake up and reroll search
            executeSearchOnTab(activeTabId, activeTab.query);
          }}
          soundEnabled={settings.soundEnabled}
          volume={settings.volume}
        />
      );
    }

    // If active tab has pageData or is an external HTTP URL
    if (activeTab.pageData || activeTab.url.startsWith('http://') || activeTab.url.startsWith('https://')) {
      return (
        <WebPageView
          pageData={activeTab.pageData || {
            title: activeTab.title,
            url: activeTab.url,
            domain: activeTab.url.replace(/^https?:\/\//, '').split('/')[0]
          }}
          onBookmark={handleBookmarkItem}
          isBookmarked={(url) => isBookmarked(url)}
          onBackToSearch={activeTab.historyIndex > 0 ? handleGoBack : null}
          onNavigate={(url, title, snippet) => navigateToUrl(url, title, snippet)}
          soundEnabled={settings.soundEnabled}
          volume={settings.volume}
        />
      );
    }

    // If active tab is on Home page
    if (activeTab.url === 'nobrowse://home' || !activeTab.result) {
      return (
        <HomePage
          onSearch={(query) => handleTriggerSearch(query)}
          soundEnabled={settings.soundEnabled}
          volume={settings.volume}
        />
      );
    }

    const { result } = activeTab;

    // Real Search Mode
    if (result.isReal) {
      return (
        <SearchResults
          searchData={result}
          onBookmark={handleBookmarkItem}
          isBookmarked={(url) => isBookmarked(url)}
          onOpenInNewTab={handleOpenInNewTab}
          onNavigate={(url, title, snippet) => navigateToUrl(url, title, snippet)}
          onSearch={(q) => handleTriggerSearch(q)}
          soundEnabled={settings.soundEnabled}
          volume={settings.volume}
        />
      );
    }

    // Chaos Mode: 404 Scenario
    if (result.chaosType === '404') {
      return (
        <NotFound
          variation={result.variation}
          onRetry={() => executeSearchOnTab(activeTabId, activeTab.query)}
          onHome={handleHome}
          soundEnabled={settings.soundEnabled}
          volume={settings.volume}
        />
      );
    }

    // Chaos Mode: Fake System Error Scenario
    if (result.chaosType === 'fake-error') {
      return (
        <ErrorPage
          errorData={result.errorData}
          query={activeTab.query}
          onRetry={() => executeSearchOnTab(activeTabId, activeTab.query)}
          soundEnabled={settings.soundEnabled}
          volume={settings.volume}
        />
      );
    }

    // All other chaos scenarios (Wrong Search, Unrelated, Offline, AI Confusion, Did You Mean, Useless Answer, Meme, Easter Eggs)
    return (
      <ChaosResult
        resultData={result}
        onSearchQuery={(q) => handleTriggerSearch(q)}
        onRetry={() => executeSearchOnTab(activeTabId, activeTab.query)}
        onBookmark={handleBookmarkItem}
        isBookmarked={(url) => isBookmarked(url)}
        onOpenInNewTab={handleOpenInNewTab}
        soundEnabled={settings.soundEnabled}
        volume={settings.volume}
      />
    );
  };

  const isCurrentBookmarked = isBookmarked(activeTab.url) || (activeTab.query && isBookmarked(activeTab.query));

  return (
    <div className="win95-window flex flex-col w-full h-full text-black font-sans relative overflow-hidden">
      {/* 1. TOP TAB BAR */}
      <TabBar
        tabs={tabs}
        activeTabId={activeTabId}
        onSwitchTab={handleSwitchTab}
        onNewTab={handleNewTab}
        onCloseTab={handleCloseTab}
        isMaximized={isMaximized}
        onToggleMaximize={() => setIsMaximized(!isMaximized)}
        soundEnabled={settings.soundEnabled}
        volume={settings.volume}
      />

      {/* 2. ADDRESS / NAVIGATION BAR */}
      <AddressBar
        currentUrl={activeTab.url}
        canGoBack={activeTab.historyIndex > 0}
        canGoForward={activeTab.historyIndex < activeTab.historyStack.length - 1}
        onGoBack={handleGoBack}
        onGoForward={handleGoForward}
        onReload={handleReload}
        onHome={handleHome}
        onSubmitInput={handleTriggerSearch}
        isBookmarked={isCurrentBookmarked}
        onToggleBookmark={handleToggleBookmarkCurrent}
        onToggleHistory={() => setActivePanel(prev => prev === 'history' ? null : 'history')}
        onToggleBookmarks={() => setActivePanel(prev => prev === 'bookmarks' ? null : 'bookmarks')}
        onToggleStats={() => setActivePanel(prev => prev === 'stats' ? null : 'stats')}
        onToggleSettings={() => setActivePanel(prev => prev === 'settings' ? null : 'settings')}
        activePanel={activePanel}
        soundEnabled={settings.soundEnabled}
        onToggleSound={() => {
          const next = saveSettings({ soundEnabled: !settings.soundEnabled });
          setSettings(next);
        }}
        volume={settings.volume}
      />

      {/* 3. BOOKMARKS BAR (Sub-toolbar) */}
      <BookmarksBar
        onNavigate={(url, q) => handleTriggerSearch(q || url)}
        onSearch={(q) => handleTriggerSearch(q)}
        bookmarks={bookmarksList}
      />

      {/* 4. MAIN CONTENT VIEWPORT */}
      <main className="flex-1 overflow-y-auto win95-sunken bg-white relative flex flex-col justify-between m-1">
        <div className="flex-1 w-full bg-white">
          {renderViewport()}
        </div>

        {/* 5. STATUS BAR */}
        <StatusBar
          onOpenStats={() => setActivePanel('stats')}
          forceMode={settings.forceMode}
        />
      </main>
    </div>
  );
}
