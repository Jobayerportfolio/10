"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, MapPin } from "lucide-react";
import Button from "../ui/Button";
import AmbientGlow from "../ui/AmbientGlow";
import FloatingElements from "../ui/FloatingElements";
import { TimelineRuler } from "../ui/SectionHeading";
import { PERSONAL } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-20"
    >
      <AmbientGlow />
      <FloatingElements />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass mb-7 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs text-text-secondary"
        >
          <MapPin size={13} className="text-cyan" />
          Based in {PERSONAL.location} · Available for freelance work
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Crafting Cinematic
          <br />
          Stories Through{" "}
          <span className="text-gradient">Editing</span> &amp;{" "}
          <span className="text-gradient">Motion</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="mt-6 max-w-xl text-base text-text-secondary md:text-lg"
        >
          I&apos;m <span className="text-white font-medium">{PERSONAL.name}</span> —
          Professional Video Editor &amp; Motion Designer with{" "}
          <span className="text-white font-medium">{PERSONAL.experience}</span> of
          experience turning raw footage into stories worth watching.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.34 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button href="#portfolio" icon={<ArrowRight size={16} />}>
            View My Work
          </Button>
          <Button href="#contact" variant="secondary" icon={<Play size={14} className="fill-current" />}>
            Contact Me
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="relative z-10 mt-20 w-full max-w-2xl"
      >
        <TimelineRuler />
        <div className="mt-2 flex justify-between font-mono text-[10px] text-text-tertiary">
          <span>00:00:00:00</span>
          <span>EDITING IN PROGRESS</span>
          <span>00:03:00:12</span>
        </div>
      </motion.div>
    </section>
  );
}
