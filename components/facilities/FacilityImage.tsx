import Image from "next/image";
import { cn } from "@/lib/utils";

export const FACILITY_IMAGE_FRAME =
  "relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-border/60 bg-white/60 shadow-sm shadow-clinic-navy/[0.05]";

interface FacilityImageProps {
  src: string;
  alt: string;
  objectPosition?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}

export default function FacilityImage({
  src,
  alt,
  objectPosition = "center",
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 320px",
  className,
}: FacilityImageProps) {
  return (
    <div className={cn(FACILITY_IMAGE_FRAME, className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover"
        style={{ objectPosition }}
        sizes={sizes}
      />
    </div>
  );
}

interface FacilityImageStackProps {
  children: React.ReactNode;
  className?: string;
}

export function FacilityImageStack({
  children,
  className,
}: FacilityImageStackProps) {
  return (
    <div className={cn("flex w-full flex-col gap-3", className)}>{children}</div>
  );
}
