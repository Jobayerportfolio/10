"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import SkillBar from "../ui/SkillBar";
import Reveal from "../ui/Reveal";
import { SKILLS } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Skills & Tools"
          title="The software stack behind every edit."
          description="Proficiency built through repeated, real-world use across editing, motion design, and visual design."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {SKILLS.map((group, groupIndex) => (
            <Reveal key={group.category} delay={groupIndex * 0.1}>
              <motion.div
                className="glass glass-hover h-full rounded-2xl p-7"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
              >
                <h3 className="mb-6 font-display text-sm font-semibold uppercase tracking-wide text-cyan">
                  {group.category}
                </h3>
                <div className="flex flex-col gap-6">
                  {group.skills.map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={i * 0.15}
                    />
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
