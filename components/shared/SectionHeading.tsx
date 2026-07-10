import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
  size?: "default" | "large";
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = false,
  light = false,
  className,
  size = "default",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 max-w-2xl",
        centered && "items-center text-center mx-auto",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "eyebrow",
            light ? "text-white/50" : "text-clinic-gray"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-display font-medium leading-[1.15] text-balance whitespace-pre-line tracking-[-0.01em]",
          size === "large"
            ? "text-[2rem] md:text-[2.75rem] lg:text-[3rem]"
            : "text-[1.75rem] md:text-[2.125rem]",
          light ? "text-white" : "text-clinic-navy"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-[15px] md:text-base leading-[1.7] font-normal",
            light ? "text-white/65" : "text-clinic-gray",
            centered && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
