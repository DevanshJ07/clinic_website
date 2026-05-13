import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-gradient-to-br from-clinic-navy via-[oklch(0.28_0.08_252)] to-[oklch(0.35_0.08_255)] py-20 md:py-28",
        className
      )}
    >
      {/* Decorative circles */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 -right-16 w-72 h-72 rounded-full bg-clinic-blue/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-16 -left-16 w-60 h-60 rounded-full bg-clinic-green/10 blur-3xl"
      />

      <div className="container-clinic relative">
        <div className="max-w-3xl flex flex-col gap-4">
          {eyebrow && (
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/55">
              <span className="block w-6 h-px bg-white/40" />
              {eyebrow}
            </span>
          )}
          <h1
            className="text-4xl md:text-5xl font-bold text-white leading-tight text-balance"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {title}
          </h1>
          {subtitle && (
            <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
