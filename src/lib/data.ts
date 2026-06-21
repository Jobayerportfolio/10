import type {
  PortfolioItem,
  ServiceItem,
  SkillGroup,
  StatItem,
  TestimonialItem,
  TimelineItem,
} from "./types";

export const PERSONAL = {
  name: "Jobayer Hossan",
  role: "Video Editor & Motion Designer",
  location: "Bangladesh",
  experience: "3+ Years",
  email: "hello@jobayerhossan.com",
  whatsapp: "https://wa.me/8801XXXXXXXXX",
  facebook: "https://www.facebook.com/jobayerhossan",
  linkedin: "https://www.linkedin.com/in/jobayerhossan",
  behance: "https://www.behance.net/jobayerhossan",
  youtube: "https://www.youtube.com/@jobayerhossan",
};

export const SERVICES: ServiceItem[] = [
  {
    title: "Video Editing",
    description:
      "Narrative-driven editing that turns raw footage into a paced, emotionally resonant story — from rough cut to final grade.",
    icon: "Scissors",
  },
  {
    title: "Motion Graphics",
    description:
      "Custom kinetic typography, logo animation, and animated UI elements designed to make every frame feel intentional.",
    icon: "Sparkles",
  },
  {
    title: "Social Media Content",
    description:
      "Platform-native edits built for the first three seconds — optimized pacing and captions for feeds that move fast.",
    icon: "Smartphone",
  },
  {
    title: "YouTube Video Editing",
    description:
      "Retention-focused long-form editing with pattern interrupts, sound design, and thumbnails that earn the click.",
    icon: "Youtube",
  },
  {
    title: "Promotional Videos",
    description:
      "Brand and product films that balance polish with personality, built to convert viewers into customers.",
    icon: "Megaphone",
  },
  {
    title: "Reels & Shorts Editing",
    description:
      "Punchy, trend-aware vertical edits with dynamic captions and transitions tuned for Reels, Shorts, and TikTok.",
    icon: "Clapperboard",
  },
  {
    title: "Commercial Ads",
    description:
      "High-impact spot editing for brands — tight timing, clear messaging hierarchy, and a finish built for media buying.",
    icon: "Tv",
  },
  {
    title: "Color Grading",
    description:
      "Mood-driven color grading that unifies footage from multiple sources into one consistent, cinematic look.",
    icon: "Palette",
  },
];

export const SKILLS: SkillGroup[] = [
  {
    category: "Video Editing",
    skills: [
      { name: "Adobe Premiere Pro", level: 96 },
      { name: "DaVinci Resolve", level: 90 },
      { name: "Final Cut Pro", level: 78 },
    ],
  },
  {
    category: "Motion Design",
    skills: [
      { name: "Adobe After Effects", level: 94 },
      { name: "Cinema 4D", level: 75 },
      { name: "Blender", level: 68 },
    ],
  },
  {
    category: "Design",
    skills: [
      { name: "Photoshop", level: 88 },
      { name: "Illustrator", level: 80 },
    ],
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    title: "Nimbus Audio — Brand Film",
    category: "Commercial Ads",
    description:
      "A 60-second product launch film for a wireless audio brand, edited for cinema sound and rhythm.",
    thumbnail: "from-cyan-500/30 to-violet-600/30",
    duration: "0:60",
    year: "2025",
  },
  {
    id: 2,
    title: "Orbit Logo Reveal",
    category: "Motion Graphics",
    description:
      "Kinetic logo animation and title sequence built in After Effects with custom particle simulation.",
    thumbnail: "from-violet-500/30 to-cyan-400/30",
    duration: "0:12",
    year: "2025",
  },
  {
    id: 3,
    title: "Daybreak Coffee Co. — Reel Series",
    category: "Social Media",
    description:
      "A six-part Instagram Reels series with dynamic captions, built to lift engagement during launch week.",
    thumbnail: "from-cyan-400/30 to-blue-600/30",
    duration: "0:18",
    year: "2024",
  },
  {
    id: 4,
    title: "The Wanderlog — Travel Vlog Edit",
    category: "YouTube",
    description:
      "A 14-minute travel vlog with sound-designed transitions and pacing tuned for long-form retention.",
    thumbnail: "from-violet-600/30 to-fuchsia-500/30",
    duration: "14:32",
    year: "2024",
  },
  {
    id: 5,
    title: "Fitcore App Launch — Short",
    category: "Reels & Shorts",
    description:
      "A trend-aware vertical short for a fitness app launch, optimized for Shorts and TikTok discovery.",
    thumbnail: "from-cyan-500/30 to-emerald-500/30",
    duration: "0:30",
    year: "2024",
  },
  {
    id: 6,
    title: "Solace Skincare — Commercial",
    category: "Commercial Ads",
    description:
      "A clean, color-graded 30-second commercial spot for a skincare brand's seasonal campaign.",
    thumbnail: "from-rose-500/30 to-violet-600/30",
    duration: "0:30",
    year: "2023",
  },
  {
    id: 7,
    title: "Pulse — Animated Explainer",
    category: "Motion Graphics",
    description:
      "A fully animated explainer video translating a complex SaaS workflow into clear visual motion.",
    thumbnail: "from-cyan-400/30 to-indigo-600/30",
    duration: "1:45",
    year: "2023",
  },
  {
    id: 8,
    title: "Tech Review Weekly — Channel Edit",
    category: "YouTube",
    description:
      "Weekly tech review editing with motion graphic overlays, lower thirds, and consistent channel branding.",
    thumbnail: "from-violet-500/30 to-cyan-500/30",
    duration: "9:47",
    year: "2023",
  },
];

export const TIMELINE: TimelineItem[] = [
  {
    year: "2021",
    title: "Started the Journey",
    description:
      "Began editing short-form content and motion graphics as a self-taught freelancer, learning Premiere Pro and After Effects through real client work.",
  },
  {
    year: "2022",
    title: "First Long-Term Clients",
    description:
      "Took on recurring YouTube channels and small business clients, building a workflow around fast turnaround and consistent quality.",
  },
  {
    year: "2023",
    title: "Expanded into Motion Design",
    description:
      "Added Cinema 4D and advanced After Effects animation to the toolkit, moving into brand films and animated explainers.",
  },
  {
    year: "2024",
    title: "Commercial & Agency Work",
    description:
      "Began collaborating with agencies on commercial ad campaigns, color grading, and multi-platform content systems.",
  },
  {
    year: "2025",
    title: "100+ Projects Milestone",
    description:
      "Crossed 100 completed projects and 50 happy clients across YouTube, social media, and commercial production.",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Sarah Mitchell",
    role: "Founder, Daybreak Coffee Co.",
    quote:
      "Jobayer turned a folder of raw clips into a Reel series that actually moved the needle on engagement. Fast, professional, and genuinely creative.",
    avatar: "SM",
  },
  {
    name: "David Park",
    role: "Creator, The Wanderlog",
    quote:
      "He understands pacing for retention better than most editors I've worked with. My average view duration improved within the first two videos.",
    avatar: "DP",
  },
  {
    name: "Amelia Rossi",
    role: "Marketing Lead, Solace Skincare",
    quote:
      "The color grading alone elevated our commercial to a different level. Jobayer is detail-obsessed in the best way — highly recommended.",
    avatar: "AR",
  },
];

export const STATS: StatItem[] = [
  { label: "Years Experience", value: 3, suffix: "+" },
  { label: "Projects Completed", value: 100, suffix: "+" },
  { label: "Happy Clients", value: 50, suffix: "+" },
  { label: "Million Video Views", value: 25, suffix: "M+" },
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#portfolio" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const PROJECT_TYPES = [
  "YouTube Video Editing",
  "Motion Graphics",
  "Social Media Content",
  "Commercial Ad",
  "Reels & Shorts",
  "Color Grading",
  "Other",
];
