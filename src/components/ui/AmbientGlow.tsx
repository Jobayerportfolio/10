export default function AmbientGlow({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-cyan/20 blur-[120px] animate-glow-pulse" />
      <div className="absolute top-1/3 -right-40 h-[450px] w-[450px] rounded-full bg-violet/25 blur-[130px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
      <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-violet-bloom blur-[100px]" />
    </div>
  );
}
