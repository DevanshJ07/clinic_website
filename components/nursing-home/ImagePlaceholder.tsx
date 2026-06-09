import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  label: string;
  className?: string;
  aspect?: string;
}

export default function ImagePlaceholder({
  label,
  className,
  aspect = "aspect-[4/3]",
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-sm border border-dashed border-border/70 bg-gradient-to-br from-clinic-warm via-white/80 to-clinic-blue-50/25",
        aspect,
        className
      )}
      aria-hidden
    >
      <div className="absolute inset-0 flex items-center justify-center p-5">
        <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-clinic-gray/55 text-center leading-relaxed max-w-[12rem]">
          {label}
        </p>
      </div>
    </div>
  );
}
