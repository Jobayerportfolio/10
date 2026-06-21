"use client";

import { motion } from "framer-motion";

type SkillBarProps = {
  name: string;
  level: number;
  delay?: number;
};

export default function SkillBar({ name, level, delay = 0 }: SkillBarProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-baseline justify-between">
        <span className="text-sm font-medium text-white">{name}</span>
        <span className="font-mono text-xs text-cyan">{level}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-bg-elevated">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-cyan to-violet"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  );
}
