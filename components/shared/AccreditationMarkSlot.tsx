import Image from "next/image";
import { ACCREDITATION_MARKS } from "@/lib/data";

type AccreditationMark = (typeof ACCREDITATION_MARKS)[number];

interface AccreditationMarkSlotProps {
  mark: AccreditationMark;
  compact?: boolean;
}

export default function AccreditationMarkSlot({
  mark,
  compact = false,
}: AccreditationMarkSlotProps) {
  if (!mark.available) {
    return (
      <div
        className={`flex flex-col items-center justify-center rounded-sm border border-dashed border-border/80 bg-white/40 text-center ${
          compact ? "h-[72px] px-3 py-2" : "h-[100px] px-4 py-3"
        }`}
        role="img"
        aria-label={`${mark.alt} — authorized mark pending`}
      >
        <p
          className={`font-medium text-clinic-navy/80 ${
            compact ? "text-[10px] leading-snug" : "text-[11px] leading-snug"
          }`}
        >
          {mark.placeholderLabel}
        </p>
        <p className="mt-1 text-[9px] leading-snug text-clinic-gray/80">
          Authorized asset required
        </p>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-sm border border-border/60 bg-white ${
        compact ? "h-[72px] w-[120px]" : "h-[100px] w-[160px]"
      }`}
    >
      <Image
        src={mark.src}
        alt={mark.alt}
        fill
        className="object-contain p-2"
        sizes={compact ? "120px" : "160px"}
      />
    </div>
  );
}

export function AccreditationMarksRow({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-4 ${
        compact ? "gap-3" : "gap-6"
      }`}
    >
      {ACCREDITATION_MARKS.map((mark) => (
        <AccreditationMarkSlot key={mark.id} mark={mark} compact={compact} />
      ))}
    </div>
  );
}
