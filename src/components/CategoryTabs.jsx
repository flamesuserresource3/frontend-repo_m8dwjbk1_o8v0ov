import React from 'react';
import { Bot, AppWindow, Wrench } from 'lucide-react';

const categories = [
  { key: 'agent', label: 'Agents', icon: Bot },
  { key: 'application', label: 'Applications', icon: AppWindow },
  { key: 'tool', label: 'Tools', icon: Wrench },
];

const CategoryTabs = ({ selected, onChange }) => {
  return (
    <div className="w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <nav
          className="relative inline-flex rounded-xl bg-white/5 p-1 ring-1 ring-white/10"
          role="tablist"
          aria-label="Solution categories"
        >
          {categories.map(({ key, label, icon: Icon }) => {
            const active = selected === key;
            return (
              <button
                key={key}
                role="tab"
                aria-selected={active}
                aria-controls={`panel-${key}`}
                onClick={() => onChange(key)}
                className={`group relative inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
                  active
                    ? 'bg-gradient-to-r from-violet-500/90 to-indigo-500/90 text-white shadow'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {label}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default CategoryTabs;
