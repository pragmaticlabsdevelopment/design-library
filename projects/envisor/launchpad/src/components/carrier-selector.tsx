"use client";

import { useState, useMemo } from "react";
import { useLaunchpad } from "@/context/launchpad-context";

const categories = [
  "All",
  "Cloud Storage",
  "Agency Portal",
  "Environmental Database",
  "Correspondence",
];

export default function SourceSelector() {
  const { dataSources, toggleDataSource, selectedSourceCount } = useLaunchpad();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    return dataSources.filter((s) => {
      const matchesSearch =
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        activeCategory === "All" || s.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [dataSources, search, activeCategory]);

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-sm font-semibold text-text-primary">
            Connect document sources
          </h2>
          <p className="text-xs text-text-secondary mt-0.5">
            Link cloud storage, agency portals, and databases so Envisor can
            index project materials.
          </p>
        </div>
        <span className="rounded-full bg-navy/8 px-3 py-1 text-xs font-semibold text-navy tabular-nums">
          {selectedSourceCount} connected
        </span>
      </div>

      {/* Search */}
      <div className="relative mb-3">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
        >
          <circle
            cx="7"
            cy="7"
            r="4.5"
            stroke="currentColor"
            strokeWidth="1.3"
          />
          <path
            d="M10.5 10.5L14 14"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
        </svg>
        <input
          type="text"
          placeholder="Search sources..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border border-border bg-surface py-2 pl-9 pr-3 text-sm text-text-primary placeholder:text-text-muted focus:border-slate focus:outline-none focus:ring-1 focus:ring-slate/30"
        />
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full px-3 py-1 text-[11px] font-medium transition-colors ${
              activeCategory === cat
                ? "bg-navy text-white"
                : "bg-surface-alt text-text-secondary hover:bg-border"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Source grid */}
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((source) => (
          <button
            key={source.id}
            onClick={() => toggleDataSource(source.id)}
            className={`group flex items-start gap-3 rounded-lg border p-3.5 text-left transition-all ${
              source.selected
                ? "border-navy/30 bg-navy/5 shadow-sm"
                : "border-border bg-surface hover:border-border hover:shadow-sm"
            }`}
          >
            <div
              className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border-2 transition-colors ${
                source.selected
                  ? "border-navy bg-navy text-white"
                  : "border-border group-hover:border-text-muted"
              }`}
            >
              {source.selected && (
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path
                    d="M2 5.5L4 7.5L8 3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
            <div className="min-w-0">
              <div className="text-xs font-semibold text-text-primary">
                {source.name}
              </div>
              <div className="text-[10px] text-text-muted mt-0.5 uppercase tracking-wide font-medium">
                {source.category}
              </div>
              <div className="text-[11px] text-text-secondary mt-1 leading-relaxed line-clamp-2">
                {source.description}
              </div>
            </div>
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="py-8 text-center text-sm text-text-muted">
          No sources match your search.
        </div>
      )}
    </div>
  );
}
