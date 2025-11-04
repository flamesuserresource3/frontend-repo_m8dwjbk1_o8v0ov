import React from 'react';
import { ChevronRight, Tag as TagIcon } from 'lucide-react';

const ItemCard = ({ item }) => {
  return (
    <article
      className="group flex h-full flex-col justify-between rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 transition hover:bg-white/10 focus-within:ring-2 focus-within:ring-violet-400"
      tabIndex={0}
      aria-label={`${item.name} card`}
    >
      <div>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-white">{item.name}</h3>
            <p className="mt-1 text-sm text-slate-300">{item.description}</p>
          </div>
          <div className="rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 p-2 text-white shadow">
            {item.badge}
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2" aria-label="Tags">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300"
            >
              <TagIcon className="h-3 w-3" aria-hidden="true" /> {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
        <div className="text-xs text-slate-400">{item.categoryLabel}</div>
        <button
          type="button"
          className="inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm font-medium text-violet-200 transition hover:bg-violet-500/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
          aria-label={`View ${item.name}`}
        >
          View details <ChevronRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </article>
  );
};

const ItemGrid = ({ items = [] }) => {
  return (
    <div className="mx-auto max-w-7xl px-6">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.length === 0 ? (
          <div className="col-span-full rounded-xl border border-white/10 bg-white/5 p-8 text-center text-slate-300">
            No results. Try different tags or a broader description.
          </div>
        ) : (
          items.map((item) => <ItemCard key={item.id} item={item} />)
        )}
      </div>
    </div>
  );
};

export default ItemGrid;
