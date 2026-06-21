"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { RevealGroup, childVariants } from "../ui/Reveal";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Client Words"
          title="What clients say after the final export."
        />

        <RevealGroup
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3"
          staggerDelay={0.1}
        >
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.name}
              variants={childVariants}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="glass glass-hover flex h-full flex-col rounded-2xl p-7"
            >
              <Quote size={22} className="mb-4 text-cyan" />
              <p className="flex-1 text-sm leading-relaxed text-text-secondary">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan to-violet font-display text-xs font-semibold text-white">
                  {t.avatar}
                </span>
                <div>
                  <p className="text-sm font-medium text-white">{t.name}</p>
                  <p className="text-xs text-text-tertiary">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
