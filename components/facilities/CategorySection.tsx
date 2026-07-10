import { cn } from "@/lib/utils";

interface CategorySectionProps {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  bg?: string;
  children: React.ReactNode;
  headerAside?: React.ReactNode;
  className?: string;
}

export default function CategorySection({
  id,
  eyebrow,
  title,
  intro,
  bg = "bg-home-trust",
  children,
  headerAside,
  className,
}: CategorySectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-28 py-10 md:py-11 border-b border-border/80",
        bg,
        className
      )}
    >
      <div className="container-wide">
        <div
          className={cn(
            "mb-6",
            headerAside
              ? "grid lg:grid-cols-[1fr_auto] gap-4 lg:gap-8 items-start"
              : ""
          )}
        >
          <div>
            <p className="eyebrow mb-2">{eyebrow}</p>
            <h2 className="font-display text-[1.375rem] md:text-[1.625rem] font-semibold text-clinic-navy leading-tight">
              {title}
            </h2>
            {intro && (
              <p className="text-[13px] font-normal leading-relaxed text-clinic-navy/75 mt-2 max-w-2xl">
                {intro}
              </p>
            )}
          </div>
          {headerAside}
        </div>
        {children}
      </div>
    </section>
  );
}
