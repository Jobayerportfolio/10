"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Clock, Calendar } from "lucide-react";
import type { PortfolioItem } from "@/lib/types";

type PortfolioModalProps = {
  item: PortfolioItem | null;
  onClose: () => void;
};

export default function PortfolioModal({ item, onClose }: PortfolioModalProps) {
  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={item.title}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="glass relative w-full max-w-2xl overflow-hidden rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              aria-label="Close preview"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white transition-colors hover:bg-black/60"
            >
              <X size={18} />
            </button>

            <div className={`relative flex aspect-video items-center justify-center bg-gradient-to-br ${item.thumbnail}`}>
              <div className="absolute inset-0 bg-bg/30" />
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.15, type: "spring", stiffness: 260, damping: 20 }}
                className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white/15 backdrop-blur-md"
              >
                <Play size={24} className="fill-white text-white" />
              </motion.div>
            </div>

            <div className="p-7">
              <span className="font-mono text-xs uppercase tracking-wider text-cyan">
                {item.category}
              </span>
              <h3 className="mt-2 font-display text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                {item.description}
              </p>
              <div className="mt-5 flex items-center gap-5 border-t border-border pt-4 text-xs text-text-tertiary">
                <span className="flex items-center gap-1.5">
                  <Clock size={13} /> {item.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} /> {item.year}
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
