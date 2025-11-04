import React, { useMemo, useState } from 'react';
import Hero from './components/Hero';
import CategoryTabs from './components/CategoryTabs';
import FilterBar from './components/FilterBar';
import ItemGrid from './components/ItemGrid';
import { Bot, AppWindow, Wrench } from 'lucide-react';

const DATA = [
  // Agents
  {
    id: 'agent-voice-concierge',
    name: 'Voice Concierge',
    description: 'Real-time voice agent to answer FAQs, route calls, and capture leads.',
    tags: ['voice', 'realtime', 'support', 'telephony'],
    category: 'agent',
    badge: <Bot className="h-5 w-5" aria-hidden="true" />,
  },
  {
    id: 'agent-research',
    name: 'Research Scout',
    description: 'Autonomous web research agent that compiles citations and summaries.',
    tags: ['research', 'automation', 'citations', 'web'],
    category: 'agent',
    badge: <Bot className="h-5 w-5" aria-hidden="true" />,
  },
  // Applications
  {
    id: 'app-meeting-notes',
    name: 'Meeting Notes Pro',
    description: 'Transcribe, summarize, and assign action items from meetings.',
    tags: ['transcription', 'summarization', 'meetings', 'productivity'],
    category: 'application',
    badge: <AppWindow className="h-5 w-5" aria-hidden="true" />,
  },
  {
    id: 'app-analytics-copilot',
    name: 'Analytics Copilot',
    description: 'Natural language analytics over your dashboards and databases.',
    tags: ['analytics', 'nlq', 'dashboards', 'data'],
    category: 'application',
    badge: <AppWindow className="h-5 w-5" aria-hidden="true" />,
  },
  // Tools
  {
    id: 'tool-ocr-extract',
    name: 'OCR Extractor',
    description: 'Accurate OCR to extract text and tables from PDFs and images.',
    tags: ['ocr', 'pdf', 'images', 'extraction'],
    category: 'tool',
    badge: <Wrench className="h-5 w-5" aria-hidden="true" />,
  },
  {
    id: 'tool-translation',
    name: 'Instant Translate',
    description: 'High-quality translation with glossary control and batch support.',
    tags: ['translation', 'multilingual', 'glossary', 'batch'],
    category: 'tool',
    badge: <Wrench className="h-5 w-5" aria-hidden="true" />,
  },
];

const CATEGORY_LABELS = {
  agent: 'Agent',
  application: 'Application',
  tool: 'Tool',
};

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('agent');
  const [query, setQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  const dataWithLabels = useMemo(
    () =>
      DATA.map((d) => ({
        ...d,
        categoryLabel: CATEGORY_LABELS[d.category] || 'Item',
      })),
    []
  );

  const availableTags = useMemo(() => {
    const set = new Set();
    dataWithLabels
      .filter((d) => d.category === selectedCategory)
      .forEach((d) => d.tags.forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }, [dataWithLabels, selectedCategory]);

  const normalizedQuery = query.trim().toLowerCase();

  const filteredItems = useMemo(() => {
    return dataWithLabels
      .filter((d) => d.category === selectedCategory)
      .filter((d) => {
        if (!normalizedQuery) return true;
        const hay = `${d.name} ${d.description} ${d.tags.join(' ')}`.toLowerCase();
        return normalizedQuery.split(/\s+/).every((q) => hay.includes(q));
      })
      .filter((d) => {
        if (selectedTags.length === 0) return true;
        return selectedTags.every((t) => d.tags.includes(t));
      });
  }, [dataWithLabels, selectedCategory, normalizedQuery, selectedTags]);

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => setSelectedTags([]);

  const onSearch = () => {
    // Triggered by the hero search submit; filtering is reactive already.
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Hero query={query} setQuery={setQuery} onSearch={onSearch} />

      <main className="relative z-0 -mt-8 space-y-6 pb-20">
        <CategoryTabs selected={selectedCategory} onChange={setSelectedCategory} />
        <section id={`panel-${selectedCategory}`} role="tabpanel" aria-labelledby={selectedCategory}>
          <div className="mt-2">
            <FilterBar
              availableTags={availableTags}
              selectedTags={selectedTags}
              onToggleTag={toggleTag}
              onClear={clearFilters}
            />
          </div>
          <div className="mt-6">
            <ItemGrid items={filteredItems} />
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-6 text-center text-sm text-slate-400">
          Built for accessibility: keyboard-navigable, clear focus states, and semantic landmarks.
        </div>
      </footer>
    </div>
  );
}
