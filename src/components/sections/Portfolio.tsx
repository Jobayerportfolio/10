"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Play, Clock } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import PortfolioModal from "./PortfolioModal";
import { PORTFOLIO_ITEMS } from "@/lib/data";
import type { PortfolioCategory, PortfolioItem } from "@/lib/types";

const CATEGORIES: PortfolioCategory[] = [
  "All",
  "Motion Graphics",
  "Commercial Ads",
  "Social Media",
  "YouTube",
  "Reels & Shorts",
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("All");
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return PORTFOLIO_ITEMS;
    return PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="portfolio" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Selected Work"
          title="A few stories worth re-watching."
          description="A mix of motion graphics, commercial ads, social content, and long-form edits from recent client work."
        />

        <LayoutGroup>
          <div className="mt-12 flex flex-wrap justify-center gap-2.5">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative rounded-full px-4 py-2 text-xs font-medium transition-colors duration-300 sm:text-sm ${
                  activeCategory === category
                    ? "text-white"
                    : "text-text-secondary hover:text-white"
                }`}
              >
                {activeCategory === category && (
                  <motion.span
                    layoutId="active-filter-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan to-violet"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            ))}
          </div>
        </LayoutGroup>

        <motion.div
          layout
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.button
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setActiveItem(item)}
                className="group glass glass-hover relative overflow-hidden rounded-2xl text-left"
              >
                <div
                  className={`relative aspect-[4/3] w-full bg-gradient-to-br ${item.thumbnail} overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-bg/10 transition-opacity duration-300 group-hover:bg-bg/30" />

                  {/* faux waveform texture */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-end gap-[3px] opacity-40">
                    {Array.from({ length: 24 }).map((_, i) => (
                      <span
                        key={i}
                        className="flex-1 rounded-full bg-white"
                        style={{ height: `${8 + ((i * 7) % 20)}px` }}
                      />
                    ))}
                  </div>

                  <div className="absolute right-3 top-3 glass rounded-full px-2.5 py-1 font-mono text-[10px] text-white">
                    {item.duration}
                  </div>

                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    initial={false}
                  >
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                      <Play size={20} className="fill-white text-white" />
                    </span>
                  </motion.div>
                </div>

                <div className="p-5">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-cyan">
                    {item.category}
                  </span>
                  <h3 className="mt-1.5 font-display text-sm font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-text-secondary">
                    {item.description}
                  </p>
                  <div className="mt-3 flex items-center gap-1.5 text-[11px] text-text-tertiary">
                    <Clock size={11} /> {item.duration} · {item.year}
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <PortfolioModal item={activeItem} onClose={() => setActiveItem(null)} />
    </section>
  );
}
