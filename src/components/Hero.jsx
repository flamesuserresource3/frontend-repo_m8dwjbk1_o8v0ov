import React from 'react';
import Spline from '@splinetool/react-spline';
import { Search, Sparkles } from 'lucide-react';

const Hero = ({ query, setQuery, onSearch }) => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 pt-16 sm:pt-20 md:pt-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10 backdrop-blur">
              <Sparkles className="h-4 w-4 text-violet-300" aria-hidden="true" />
              <span className="text-xs text-slate-300">Discover AI agents, apps, and tools</span>
            </div>
            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Build faster with the right
              <span className="bg-gradient-to-r from-violet-300 via-sky-300 to-amber-200 bg-clip-text text-transparent"> AI solutions</span>
            </h1>
            <p className="mt-4 max-w-xl text-slate-300">
              Describe what you need and we’ll surface the most suitable agents, applications, and tools—sorted by capabilities and tags.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                onSearch?.();
              }}
              className="mt-8"
              role="search"
              aria-label="Find solutions"
            >
              <label htmlFor="homepage-query" className="sr-only">
                Describe your requirement
              </label>
              <div className="flex w-full items-center gap-2 rounded-xl bg-white/5 p-2 ring-1 ring-white/10 focus-within:ring-2 focus-within:ring-violet-400">
                <Search className="ml-2 h-5 w-5 text-slate-300" aria-hidden="true" />
                <input
                  id="homepage-query"
                  name="query"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="E.g., transcribe meetings and summarize action items"
                  className="flex-1 bg-transparent px-3 py-3 text-base text-white placeholder:text-slate-400 focus:outline-none"
                  autoComplete="off"
                  aria-describedby="query-help"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-500 to-indigo-500 px-4 py-2 text-sm font-medium text-white shadow hover:from-violet-400 hover:to-indigo-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-400 focus-visible:ring-offset-slate-900"
                >
                  <Search className="h-4 w-4" aria-hidden="true" />
                  Search
                </button>
              </div>
              <p id="query-help" className="mt-2 text-sm text-slate-400">
                One-time request. We’ll match the best options using tags and capabilities.
              </p>
            </form>
          </div>

          <div className="relative h-[420px] w-full md:h-[520px]">
            <div className="absolute inset-0">
              <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_40%,rgba(136,58,234,0.25),rgba(0,0,0,0))]"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
