import React from 'react';
import { Filter, Tag as TagIcon } from 'lucide-react';

const FilterBar = ({ availableTags = [], selectedTags = [], onToggleTag, onClear }) => {
  return (
    <div className="mx-auto max-w-7xl px-6">
      <div className="flex flex-col gap-3 rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-200">
            <Filter className="h-4 w-4 text-violet-300" aria-hidden="true" />
            <span className="text-sm font-medium">Refine by tags</span>
          </div>
          <button
            type="button"
            onClick={onClear}
            className="rounded-md px-2 py-1 text-sm text-slate-300 underline-offset-2 hover:text-white hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
          >
            Clear
          </button>
        </div>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Tag filters">
          {availableTags.map((tag) => {
            const active = selectedTags.includes(tag);
            return (
              <button
                key={tag}
                type="button"
                aria-pressed={active}
                onClick={() => onToggleTag(tag)}
                className={`inline-flex items-center gap-1 rounded-full border px-3 py-1.5 text-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 ${
                  active
                    ? 'border-violet-400/60 bg-violet-500/20 text-violet-100'
                    : 'border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:text-white'
                }`}
              >
                <TagIcon className="h-3.5 w-3.5" aria-hidden="true" />
                {tag}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
