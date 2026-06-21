"use client";

import { motion } from "framer-motion";
import { RevealGroup, childVariants } from "../ui/Reveal";
import AnimatedCounter from "../ui/AnimatedCounter";
import { STATS } from "@/lib/data";
import { TimelineRuler } from "../ui/SectionHeading";

export default function Statistics() {
  return (
    <section className="relative px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="glass relative overflow-hidden rounded-3xl px-8 py-14 sm:px-12">
          <div className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-violet/20 blur-[100px]" />
          <div className="absolute -bottom-24 left-0 h-64 w-64 rounded-full bg-cyan/20 blur-[100px]" />

          <RevealGroup
            className="relative grid grid-cols-2 gap-10 md:grid-cols-4"
            staggerDelay={0.1}
          >
            {STATS.map((stat) => (
              <motion.div
                key={stat.label}
                variants={childVariants}
                className="flex flex-col items-center text-center"
              >
                <span className="font-display text-4xl font-semibold text-gradient sm:text-5xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="mt-2 text-xs uppercase tracking-wide text-text-secondary sm:text-sm">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </RevealGroup>

          <div className="relative mt-12">
            <TimelineRuler />
          </div>
        </div>
      </div>
    </section>
  );
}
