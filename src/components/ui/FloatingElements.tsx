"use client";

import { motion } from "framer-motion";

/** Floating motion-graphics shapes referencing the subject's own tools: play, waveform, keyframe, aperture. */
export default function FloatingElements() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden="true">
      {/* Play button */}
      <motion.div
        className="absolute top-[18%] left-[8%] glass rounded-2xl p-4"
        animate={{ y: [0, -18, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <polygon points="6,4 20,12 6,20" fill="url(#playGrad)" />
          <defs>
            <linearGradient id="playGrad" x1="0" y1="0" x2="24" y2="24">
              <stop stopColor="#00D4FF" />
              <stop offset="1" stopColor="#7C3AED" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Waveform */}
      <motion.div
        className="absolute top-[10%] right-[12%] glass rounded-2xl p-4"
        animate={{ y: [0, 16, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <svg width="56" height="24" viewBox="0 0 56 24" fill="none">
          {[6, 14, 20, 10, 18, 8, 16, 12].map((h, i) => (
            <rect
              key={i}
              x={i * 7}
              y={12 - h / 2}
              width="3"
              height={h}
              rx="1.5"
              fill={i % 2 === 0 ? "#00D4FF" : "#7C3AED"}
              opacity="0.85"
            />
          ))}
        </svg>
      </motion.div>

      {/* Keyframe diamond (After Effects reference) */}
      <motion.div
        className="absolute bottom-[28%] left-[14%] glass rounded-xl p-3"
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <rect x="3" y="3" width="16" height="16" rx="2" transform="rotate(45 11 11)" fill="none" stroke="#00D4FF" strokeWidth="2" />
        </svg>
      </motion.div>

      {/* Aperture / camera */}
      <motion.div
        className="absolute bottom-[16%] right-[18%] glass rounded-2xl p-4"
        animate={{ y: [0, 18, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="url(#apertureGrad)" strokeWidth="1.5">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3 L12 7 M21 12 L17 12 M12 21 L12 17 M3 12 L7 12 M18.4 5.6 L15.5 8.5 M18.4 18.4 L15.5 15.5 M5.6 18.4 L8.5 15.5 M5.6 5.6 L8.5 8.5" />
          <defs>
            <linearGradient id="apertureGrad" x1="0" y1="0" x2="24" y2="24">
              <stop stopColor="#00D4FF" />
              <stop offset="1" stopColor="#7C3AED" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Bezier handle (motion design reference) */}
      <motion.div
        className="absolute top-[45%] left-[3%] glass rounded-xl p-3"
        animate={{ x: [0, 10, 0] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      >
        <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
          <path d="M2 22 C 2 4, 20 4, 38 2" stroke="#7C3AED" strokeWidth="1.5" fill="none" />
          <circle cx="2" cy="22" r="2.5" fill="#00D4FF" />
          <circle cx="38" cy="2" r="2.5" fill="#00D4FF" />
        </svg>
      </motion.div>
    </div>
  );
}
