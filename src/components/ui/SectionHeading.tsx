import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={`flex flex-col gap-4 ${
        align === "center" ? "items-center text-center" : "items-start text-left"
      }`}
    >
      <Reveal>
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-cyan inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-glow-pulse" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight max-w-2xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className="text-text-secondary text-base md:text-lg max-w-xl leading-relaxed">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/** Signature element: a faux editing-timeline ruler used as a section divider. */
export function TimelineRuler({ className = "" }: { className?: string }) {
  return (
    <div className={`timeline-ruler ${className}`} aria-hidden="true">
      <div className="timeline-playhead" />
    </div>
  );
}
