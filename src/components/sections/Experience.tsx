"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { TIMELINE } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Experience"
          title="Three years, building one project at a time."
          description="A timeline of milestones from first freelance gig to a 100+ project portfolio."
        />

        <div className="relative mt-16 pl-8 sm:pl-10">
          <motion.div
            className="absolute left-[5px] top-0 w-px bg-gradient-to-b from-cyan via-violet to-transparent sm:left-[7px]"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
          />

          <div className="flex flex-col gap-12">
            {TIMELINE.map((item, index) => (
              <motion.div
                key={item.year}
                className="relative"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="absolute -left-8 top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-gradient-to-br from-cyan to-violet sm:-left-10">
                  <span className="h-2 w-2 rounded-full bg-bg" />
                </span>

                <div className="glass glass-hover rounded-2xl p-6">
                  <span className="font-mono text-xs text-cyan">{item.year}</span>
                  <h3 className="mt-1.5 font-display text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
