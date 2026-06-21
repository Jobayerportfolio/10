"use client";

import { Clapperboard, Layers, Sparkles, Target } from "lucide-react";
import Reveal, { RevealGroup, childVariants } from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { motion } from "framer-motion";
import { PERSONAL } from "@/lib/data";

const HIGHLIGHTS = [
  {
    icon: Clapperboard,
    title: "3+ Years in the Edit Bay",
    description:
      "From short-form social cuts to long-form commercial work, refined across hundreds of real client projects.",
  },
  {
    icon: Layers,
    title: "Story-First Workflow",
    description:
      "Every edit starts with structure — pacing, emotional beats, and a clear narrative arc before a single transition.",
  },
  {
    icon: Sparkles,
    title: "Motion-Driven Detail",
    description:
      "Custom motion graphics and kinetic typography layered in to make the ordinary feel intentional and premium.",
  },
  {
    icon: Target,
    title: "Outcome-Focused",
    description:
      "Every project is built around a goal — retention, conversion, or brand recall — not just visual polish.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About Me"
          title="A storyteller who thinks in frames, beats, and timing."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal direction="right">
            <div className="relative">
              <div className="glass glow-violet relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan/15 via-transparent to-violet/25" />
                <div className="flex h-full w-full items-center justify-center">
                  <div className="font-display text-7xl font-semibold text-white/10">
                    JH
                  </div>
                </div>
                <motion.div
                  className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-4"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <p className="font-mono text-[11px] text-cyan">NOW PLAYING</p>
                  <p className="mt-1 text-sm text-white">{PERSONAL.name} — Reel 2026</p>
                </motion.div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="left" className="flex flex-col gap-6">
            <p className="text-base leading-relaxed text-text-secondary md:text-lg">
              I&apos;m {PERSONAL.name}, a Video Editor and Motion Designer based in{" "}
              {PERSONAL.location}. Over the past {PERSONAL.experience.toLowerCase()}, I&apos;ve
              worked with creators, startups, and brands to turn raw footage into content
              that holds attention and drives results.
            </p>
            <p className="text-base leading-relaxed text-text-secondary md:text-lg">
              My process blends precise technical editing with a motion designer&apos;s eye
              for detail — every cut, transition, and graphic is placed with intention.
              Whether it&apos;s a 15-second Reel or a 10-minute YouTube video, I treat each
              project as a craft problem worth solving properly.
            </p>

            <RevealGroup
              className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2"
              staggerDelay={0.1}
            >
              {HIGHLIGHTS.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    variants={childVariants}
                    className="glass glass-hover rounded-2xl p-5"
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan/20 to-violet/20 text-cyan">
                      <Icon size={18} />
                    </div>
                    <h3 className="mb-1.5 font-display text-sm font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-text-secondary">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </RevealGroup>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
