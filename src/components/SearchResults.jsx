// NOBROWSE™ - Search Results Component (Substantial, authentic search page)

import React, { useState } from 'react';
import {
  Bookmark,
  Check,
  Copy,
  Code2,
  CloudSun,
  Utensils,
  Laptop,
  Coins,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Globe,
  Sparkles,
  HelpCircle,
  ArrowRight
} from 'lucide-react';
import { soundEffects } from '../utils/audio';

export function SearchResults({
  searchData,
  onBookmark,
  isBookmarked,
  onOpenInNewTab,
  onNavigate,
  onSearch,
  soundEnabled,
  volume
}) {
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedLink, setCopiedLink] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedFaq, setExpandedFaq] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  if (!searchData || !searchData.results) {
    return (
      <div className="p-8 text-center text-gray-700 bg-white">
        No search results found.
      </div>
    );
  }

  const {
    query,
    totalResults,
    searchTime,
    quickAnswer,
    knowledgePanel,
    peopleAlsoAsk = [],
    relatedSearches = [],
    results = []
  } = searchData;

  const handleCopyCode = (code) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(code);
      setCopiedCode(true);
      if (soundEnabled) soundEffects.click(volume);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  const handleShareLink = (url) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(url);
      setCopiedLink(url);
      if (soundEnabled) soundEffects.click(volume);
      setTimeout(() => setCopiedLink(null), 2000);
    }
  };

  const toggleFaq = (index) => {
    setExpandedFaq(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
    if (soundEnabled) soundEffects.click(volume);
  };

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (soundEnabled) soundEffects.click(volume);
  };

  // Pagination logic: 6 results per page
  const itemsPerPage = 6;
  const totalPages = Math.ceil(results.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedResults = results.slice(startIndex, startIndex + itemsPerPage);

  // Split results for inserting "People Also Ask" in the middle of page 1
  const firstBatch = currentPage === 1 ? displayedResults.slice(0, 3) : displayedResults;
  const secondBatch = currentPage === 1 ? displayedResults.slice(3) : [];

  const handleOpenLink = (title, url, snippet) => {
    if (soundEnabled) soundEffects.click(volume);
    if (onOpenInNewTab) {
      onOpenInNewTab(title, url, snippet);
    } else if (onNavigate) {
      onNavigate(url, title, snippet);
    }
  };

  const handleOpenInSameTab = (title, url, snippet) => {
    if (soundEnabled) soundEffects.click(volume);
    if (onNavigate) {
      onNavigate(url, title, snippet);
    } else if (onOpenInNewTab) {
      onOpenInNewTab(title, url, snippet);
    }
  };

  const renderResultItem = (result, idx) => {
    const bookmarked = isBookmarked ? isBookmarked(result.url) : false;

    return (
      <div key={idx} className="border-b border-[#dfdfdf] pb-5 group">
        {/* Breadcrumb URL with favicon/domain */}
        <div className="flex items-center gap-1.5 text-xs text-gray-700 font-sans mb-1 truncate">
          <Globe className="w-3.5 h-3.5 text-blue-900 shrink-0" />
          <span className="font-semibold text-black">{result.domain}</span>
          <span className="text-gray-400">›</span>
          <span className="text-gray-600 font-mono text-[11px] truncate">
            {result.url.replace(/^https?:\/\/[^/]+/, '') || '/'}
          </span>
        </div>

        {/* Title as blue underlined hyperlink */}
        <div className="flex items-baseline justify-between mb-1">
          <h2 className="text-base sm:text-lg font-medium text-[#0000ee] hover:underline leading-snug">
            <a
              href={result.url}
              onClick={(e) => {
                e.preventDefault();
                handleOpenInSameTab(result.title, result.url, result.snippet);
              }}
              title="Click to view webpage in this tab"
            >
              {result.title}
            </a>
          </h2>

          <div className="flex items-center gap-1 shrink-0 ml-2">
            <button
              onClick={() => handleOpenLink(result.title, result.url, result.snippet)}
              className="win95-btn h-5 px-1.5 text-[10px] flex items-center gap-0.5 text-blue-900"
              title="Open link in a New Browser Tab"
            >
              <ExternalLink className="w-2.5 h-2.5" />
              <span className="hidden sm:inline">New Tab</span>
            </button>

            <button
              onClick={() => handleShareLink(result.url)}
              className="win95-btn h-5 px-1.5 text-[10px]"
              title="Copy URL"
            >
              {copiedLink === result.url ? <Check className="w-3 h-3 text-emerald-700" /> : <Copy className="w-3 h-3 text-gray-700" />}
            </button>

            <button
              onClick={() => onBookmark && onBookmark(result)}
              className={`win95-btn h-5 px-1.5 text-[10px] ${bookmarked ? 'win95-sunken-gray font-bold text-amber-900' : ''}`}
              title={bookmarked ? "Bookmarked" : "Bookmark this result"}
            >
              <Bookmark className={`w-3 h-3 ${bookmarked ? 'fill-amber-500 text-amber-800' : 'text-gray-600'}`} />
            </button>
          </div>
        </div>

        {/* Rich Metadata Badges (Rating, Date, Category) */}
        {(result.date || result.rating) && (
          <div className="flex items-center gap-2 text-[11px] font-mono text-gray-600 mb-1.5">
            {result.rating && (
              <span className="text-amber-800 font-bold bg-amber-50 px-1 border border-amber-200">
                {result.rating}
              </span>
            )}
            {result.date && (
              <span className="text-gray-700">
                {result.date}
              </span>
            )}
          </div>
        )}

        {/* Snippet text */}
        <p className="text-xs sm:text-sm text-gray-900 leading-relaxed mb-2 font-serif">
          {result.snippet}
        </p>

        {/* Sitelinks in classic grid */}
        {result.sitelinks && result.sitelinks.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[#0000ee] pl-3 border-l-2 border-[#b0b0b0] my-2 bg-[#fbfbfb] p-2">
            {result.sitelinks.map((link, lIdx) => (
              <div
                key={lIdx}
                onClick={() => handleOpenLink(link.text, link.url, result.snippet)}
                className="hover:underline cursor-pointer flex items-center gap-1 truncate text-xs"
              >
                <span className="text-gray-400">•</span>
                <span className="font-medium text-blue-900 truncate">{link.text}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-3 sm:p-6 text-left text-black font-sans bg-white min-h-full">
      {/* Category Tabs: All, Documentation, News, Discussions, Tools */}
      <div className="flex items-center gap-1 pb-2 mb-4 border-b border-[#c0c0c0] overflow-x-auto text-xs">
        {['all', 'documentation', 'discussions', 'tools', 'news'].map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              if (soundEnabled) soundEffects.click(volume);
            }}
            className={`px-3 py-1 font-bold capitalize transition-colors ${
              activeCategory === cat
                ? 'win95-sunken-gray text-[#000080]'
                : 'win95-btn text-gray-700 hover:text-black'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Search Metadata Header Bar */}
      <div className="win95-sunken-gray flex flex-wrap items-center justify-between gap-2 px-3 py-1.5 mb-6 text-xs">
        <div className="text-gray-800">
          About <strong>{totalResults || "412,000"}</strong> results ({searchTime || "0.31"} seconds) for <em>"{query}"</em>
        </div>
        <div className="flex items-center gap-1.5 text-emerald-900 font-bold text-[11px]">
          <span>🛡️</span>
          <span>DATA PACKET VERIFIED</span>
        </div>
      </div>

      {/* Main 2-Column Layout (Results + Knowledge Panel) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* LEFT COLUMN: Quick Answers, Results, People Also Ask, Related Searches */}
        <div className="lg:col-span-8 space-y-6">
          {/* QUICK ANSWER WIDGET */}
          {quickAnswer && currentPage === 1 && (
            <div className="win95-raised p-4 text-black">
              <div className="flex items-center justify-between border-b border-[#808080] pb-1.5 mb-3">
                <span className="font-bold text-xs uppercase tracking-wide text-[#000080] flex items-center gap-1.5">
                  {quickAnswer.type === 'code' && <Code2 className="w-4 h-4 text-blue-800" />}
                  {quickAnswer.type === 'weather' && <CloudSun className="w-4 h-4 text-amber-600" />}
                  {quickAnswer.type === 'places' && <Utensils className="w-4 h-4 text-red-700" />}
                  {quickAnswer.type === 'comparison' && <Laptop className="w-4 h-4 text-indigo-700" />}
                  {quickAnswer.type === 'list' && <Coins className="w-4 h-4 text-emerald-700" />}
                  {quickAnswer.title}
                </span>
                {quickAnswer.source && (
                  <span className="text-[10px] font-mono text-gray-600">
                    Source: {quickAnswer.source}
                  </span>
                )}
              </div>

              {/* Code Snippet */}
              {quickAnswer.code && (
                <div className="win95-sunken mb-3 bg-white">
                  <div className="flex justify-between items-center px-3 py-1 bg-[#dfdfdf] border-b border-[#808080] text-[11px]">
                    <span className="font-bold">Code Sample</span>
                    <button
                      onClick={() => handleCopyCode(quickAnswer.code)}
                      className="win95-btn h-5 px-2 text-[10px]"
                    >
                      {copiedCode ? <Check className="w-3 h-3 text-emerald-700 mr-1" /> : <Copy className="w-3 h-3 mr-1" />}
                      {copiedCode ? "Copied!" : "Copy Code"}
                    </button>
                  </div>
                  <pre className="p-3 text-xs font-mono text-black overflow-x-auto bg-[#fafafa]">
                    <code>{quickAnswer.code}</code>
                  </pre>
                </div>
              )}

              {/* Centering Live Demo */}
              {quickAnswer.type === 'css_demo' && (
                <div className="win95-sunken mb-3 p-3 bg-white flex flex-col items-center">
                  <span className="text-[11px] text-gray-600 mb-2 font-bold">Interactive CSS Centering Sandbox:</span>
                  <div className="w-full h-24 bg-[#dfdfdf] border border-[#808080] flex items-center justify-center">
                    <div className="win95-raised px-4 py-1.5 bg-[#c0c0c0] font-bold text-xs">
                      Centered &lt;div&gt; 🎉
                    </div>
                  </div>
                </div>
              )}

              {/* Weather Data */}
              {quickAnswer.type === 'weather' && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 my-3">
                  <div className="win95-sunken p-2 bg-white text-center">
                    <span className="text-[10px] text-gray-500 block">Temperature</span>
                    <span className="text-base font-bold text-blue-900">{quickAnswer.temperature}</span>
                  </div>
                  <div className="win95-sunken p-2 bg-white text-center">
                    <span className="text-[10px] text-gray-500 block">Conditions</span>
                    <span className="text-xs font-medium text-black">{quickAnswer.condition}</span>
                  </div>
                  <div className="win95-sunken p-2 bg-white text-center">
                    <span className="text-[10px] text-gray-500 block">Humidity</span>
                    <span className="text-xs font-medium text-black">{quickAnswer.humidity}</span>
                  </div>
                  <div className="win95-sunken p-2 bg-white text-center">
                    <span className="text-[10px] text-gray-500 block">Precipitation</span>
                    <span className="text-xs font-medium text-black">{quickAnswer.precipitation}</span>
                  </div>
                </div>
              )}

              {/* Places */}
              {quickAnswer.places && (
                <div className="space-y-1.5 my-3">
                  {quickAnswer.places.map((p, i) => (
                    <div key={i} className="win95-sunken flex justify-between items-center p-2 bg-white text-xs">
                      <div>
                        <strong className="text-blue-900">{p.name}</strong>
                        <span className="text-gray-600 ml-1">({p.type})</span>
                      </div>
                      <div className="flex items-center gap-2 font-mono text-[11px]">
                        <span className="text-amber-700 font-bold">{p.rating}</span>
                        <span className="text-gray-600">{p.price}</span>
                        <span className="text-emerald-700">{p.dist}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Laptop Comparison */}
              {quickAnswer.picks && (
                <div className="space-y-1.5 my-3">
                  {quickAnswer.picks.map((p, i) => (
                    <div key={i} className="win95-sunken p-2 bg-white text-xs">
                      <div className="flex justify-between font-bold mb-0.5">
                        <span className="text-blue-800">{p.category}:</span>
                        <span className="text-black">{p.model}</span>
                      </div>
                      <p className="text-gray-600 text-[11px]">{p.spec}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Notes */}
              {quickAnswer.note && (
                <p className="text-[11px] text-gray-600 italic mt-2">
                  {quickAnswer.note}
                </p>
              )}
            </div>
          )}

          {/* FIRST BATCH OF ORGANIC RESULTS */}
          <div className="space-y-5">
            {firstBatch.map((result, idx) => renderResultItem(result, idx))}
          </div>

          {/* PEOPLE ALSO ASK (Accordion) */}
          {peopleAlsoAsk.length > 0 && currentPage === 1 && (
            <div className="win95-raised p-3 bg-[#f8f8f8] border border-[#b0b0b0]">
              <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wide text-gray-800 pb-2 border-b border-[#dfdfdf] mb-2">
                <HelpCircle className="w-4 h-4 text-blue-900" />
                <span>People Also Ask</span>
              </div>

              <div className="space-y-1.5">
                {peopleAlsoAsk.map((item, qIdx) => {
                  const isExpanded = !!expandedFaq[qIdx];
                  return (
                    <div key={qIdx} className="win95-sunken bg-white overflow-hidden text-xs">
                      <button
                        onClick={() => toggleFaq(qIdx)}
                        className="w-full p-2.5 flex items-center justify-between text-left font-bold text-gray-900 hover:text-blue-900 hover:bg-[#f3f3f3]"
                      >
                        <span>{item.question}</span>
                        {isExpanded ? <ChevronUp className="w-3.5 h-3.5 text-gray-500 shrink-0" /> : <ChevronDown className="w-3.5 h-3.5 text-gray-500 shrink-0" />}
                      </button>

                      {isExpanded && (
                        <div className="p-3 pt-0 border-t border-gray-100 bg-[#fafafa] text-gray-800 text-xs leading-relaxed font-serif animate-fade-in">
                          <p className="pt-2">{item.answer}</p>
                          {onSearch && (
                            <button
                              onClick={() => onSearch(item.question)}
                              className="mt-2 text-[11px] text-blue-900 hover:underline flex items-center gap-1 font-sans font-bold"
                            >
                              <span>Search for answers to this question</span>
                              <ArrowRight className="w-3 h-3" />
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* SECOND BATCH OF ORGANIC RESULTS */}
          {secondBatch.length > 0 && (
            <div className="space-y-5">
              {secondBatch.map((result, idx) => renderResultItem(result, idx + 3))}
            </div>
          )}

          {/* PAGINATION */}
          <div className="win95-raised p-3 bg-[#e8e8e8] flex items-center justify-center gap-1 my-6 text-xs">
            <span className="font-serif font-black text-lg mr-3 text-blue-900">
              N<span className="text-red-700">o</span><span className="text-amber-600">o</span><span className="text-blue-700">b</span><span className="text-emerald-700">r</span>owse
            </span>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => handlePageChange(pageNum)}
                className={`h-7 w-7 text-xs font-bold ${
                  currentPage === pageNum
                    ? 'win95-sunken-gray font-black text-black'
                    : 'win95-btn text-blue-900'
                }`}
              >
                {pageNum}
              </button>
            ))}

            {currentPage < totalPages && (
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                className="win95-btn h-7 px-3 text-xs font-bold text-blue-900 ml-1"
              >
                Next &gt;
              </button>
            )}
          </div>

          {/* RELATED SEARCHES PILLS */}
          {relatedSearches.length > 0 && (
            <div className="pt-4 border-t border-[#c0c0c0]">
              <div className="text-xs font-bold text-gray-700 mb-3 flex items-center gap-1.5 uppercase">
                <Sparkles className="w-3.5 h-3.5 text-blue-900" />
                <span>Related Searches</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {relatedSearches.map((term, tIdx) => (
                  <button
                    key={tIdx}
                    onClick={() => {
                      if (soundEnabled) soundEffects.click(volume);
                      if (onSearch) onSearch(term);
                    }}
                    className="win95-btn p-2 text-xs text-left text-blue-950 font-medium hover:text-black flex items-center justify-between"
                  >
                    <span>{term}</span>
                    <span className="text-gray-400">🔍</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: KNOWLEDGE PANEL CARD */}
        {knowledgePanel && (
          <div className="lg:col-span-4">
            <div className="win95-raised p-4 bg-[#f8f8f8] sticky top-4 text-left font-sans text-xs space-y-3">
              {/* Header */}
              <div className="border-b border-[#b0b0b0] pb-2">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl">{knowledgePanel.image || "📖"}</span>
                  <div>
                    <h3 className="font-bold text-base text-[#000080] leading-tight">
                      {knowledgePanel.title}
                    </h3>
                    <span className="text-[11px] text-gray-600 block">
                      {knowledgePanel.subtitle}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-800 font-serif leading-relaxed text-xs">
                {knowledgePanel.description}
              </p>

              {/* Quick Facts Table */}
              {knowledgePanel.attributes && knowledgePanel.attributes.length > 0 && (
                <div className="win95-sunken p-2 bg-white space-y-1.5">
                  <span className="font-bold text-[10px] uppercase text-gray-500 block mb-1">
                    Quick Facts
                  </span>
                  {knowledgePanel.attributes.map((attr, aIdx) => (
                    <div key={aIdx} className="flex justify-between items-baseline text-[11px] border-b border-gray-100 pb-1">
                      <span className="text-gray-600 font-medium">{attr.label}:</span>
                      <span className="text-black font-semibold text-right max-w-[60%] truncate">{attr.value}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Official Links */}
              {knowledgePanel.links && knowledgePanel.links.length > 0 && (
                <div className="pt-2 border-t border-[#b0b0b0]">
                  <span className="font-bold text-[10px] uppercase text-gray-500 block mb-1.5">
                    Official Resources
                  </span>
                  <div className="space-y-1">
                    {knowledgePanel.links.map((link, lIdx) => (
                      <div
                        key={lIdx}
                        onClick={() => handleOpenLink(link.label, link.url, knowledgePanel.description)}
                        className="win95-btn p-1.5 text-xs text-blue-900 hover:text-black flex items-center justify-between cursor-pointer"
                      >
                        <span className="font-bold truncate">{link.label}</span>
                        <ExternalLink className="w-3 h-3 text-gray-500 shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Telemetry Note */}
              <div className="win95-sunken-gray p-1.5 text-[10px] text-gray-600 font-mono text-center">
                Knowledge graph verified via NOBROWSE™ Index
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
