"use client";

import { motion } from "framer-motion";
import {
  Scissors,
  Sparkles,
  Smartphone,
  Megaphone,
  Clapperboard,
  Tv,
  Palette,
  type LucideIcon,
} from "lucide-react";
import { YoutubeIcon } from "../ui/BrandIcons";
import SectionHeading from "../ui/SectionHeading";
import { RevealGroup, childVariants } from "../ui/Reveal";
import { SERVICES } from "@/lib/data";

const ICON_MAP: Record<string, LucideIcon | typeof YoutubeIcon> = {
  Scissors,
  Sparkles,
  Smartphone,
  Youtube: YoutubeIcon,
  Megaphone,
  Clapperboard,
  Tv,
  Palette,
};

export default function Services() {
  return (
    <section id="services" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Services"
          title="Everything you need to go from raw footage to finished story."
          description="A full editing and motion design toolkit, applied to whichever format your project calls for."
        />

        <RevealGroup
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          staggerDelay={0.08}
        >
          {SERVICES.map((service) => {
            const Icon = ICON_MAP[service.icon];
            return (
              <motion.div
                key={service.title}
                variants={childVariants}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass glass-hover group relative overflow-hidden rounded-2xl p-6"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-cyan/0 to-violet/0 transition-all duration-500 group-hover:from-cyan/20 group-hover:to-violet/20" />

                <div className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan/15 to-violet/15 text-cyan transition-colors duration-300 group-hover:text-white">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan to-violet opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <Icon size={20} className="relative z-10" />
                </div>

                <h3 className="relative mb-2 font-display text-base font-semibold text-white">
                  {service.title}
                </h3>
                <p className="relative text-sm leading-relaxed text-text-secondary">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
