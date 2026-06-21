"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Send, Play } from "lucide-react";
import { FacebookIcon, LinkedinIcon, YoutubeIcon } from "../ui/BrandIcons";
import { PERSONAL } from "@/lib/data";

const SOCIALS = [
  { icon: FacebookIcon, href: PERSONAL.facebook, label: "Facebook" },
  { icon: LinkedinIcon, href: PERSONAL.linkedin, label: "LinkedIn" },
  { icon: Send, href: PERSONAL.behance, label: "Behance" },
  { icon: YoutubeIcon, href: PERSONAL.youtube, label: "YouTube" },
];

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="relative border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <a href="#home" className="flex items-center gap-2 font-display text-base font-semibold">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-cyan to-violet">
            <Play size={12} className="fill-white text-white" />
          </span>
          Jobayer Hossan
        </a>

        <p className="text-xs text-text-tertiary">
          © {new Date().getFullYear()} {PERSONAL.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          {SOCIALS.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full glass glass-hover text-text-secondary transition-colors hover:text-cyan"
              >
                <Icon size={15} />
              </a>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-cyan to-violet text-white shadow-[0_0_30px_-6px_rgba(0,212,255,0.6)]"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
