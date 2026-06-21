export type ServiceItem = {
  title: string;
  description: string;
  icon: string;
};

export type SkillItem = {
  name: string;
  level: number;
};

export type SkillGroup = {
  category: string;
  skills: SkillItem[];
};

export type PortfolioCategory =
  | "All"
  | "Motion Graphics"
  | "Commercial Ads"
  | "Social Media"
  | "YouTube"
  | "Reels & Shorts";

export type PortfolioItem = {
  id: number;
  title: string;
  category: PortfolioCategory;
  description: string;
  thumbnail: string;
  duration: string;
  year: string;
};

export type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

export type TestimonialItem = {
  name: string;
  role: string;
  quote: string;
  avatar: string;
};

export type StatItem = {
  label: string;
  value: number;
  suffix: string;
};
