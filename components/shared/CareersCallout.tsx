import { Phone } from "lucide-react";
import { CAREERS } from "@/lib/data";

interface CareersCalloutProps {
  variant?: "section" | "compact";
}

export default function CareersCallout({ variant = "section" }: CareersCalloutProps) {
  if (variant === "compact") {
    return (
      <div className="border-t border-white/10 pt-6 mt-2">
        <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/45 mb-2">
          {CAREERS.heading}
        </p>
        <p className="text-sm text-white/60 font-light leading-relaxed mb-3">
          {CAREERS.text}
        </p>
        <div className="flex flex-col gap-2">
          {CAREERS.phones.map((phone) => (
            <a
              key={phone.tel}
              href={`tel:${phone.tel}`}
              className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
            >
              <Phone className="h-3.5 w-3.5 stroke-[1.5] shrink-0" />
              {phone.display}
            </a>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="border-t border-border/80 bg-clinic-paper py-10 md:py-12">
      <div className="container-wide max-w-2xl">
        <p className="eyebrow mb-3">Careers</p>
        <h2 className="font-display text-[1.375rem] md:text-[1.5rem] font-medium text-clinic-navy mb-2">
          {CAREERS.heading}
        </h2>
        <p className="text-[15px] font-normal leading-relaxed text-clinic-navy/80 mb-5">
          {CAREERS.text}
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {CAREERS.phones.map((phone) => (
            <a
              key={phone.tel}
              href={`tel:${phone.tel}`}
              className="inline-flex items-center gap-2 rounded-sm border border-border/60 bg-white/70 px-5 py-3 text-[14px] font-medium text-clinic-navy transition-colors hover:border-clinic-navy/25"
            >
              <Phone className="h-4 w-4 stroke-[1.5] text-clinic-gray" />
              {phone.display}
            </a>
          ))}
        </div>
        <p className="mt-4 text-[13px] font-normal text-clinic-gray">
          For clinical, administrative, technical, nursing, and support roles.
        </p>
      </div>
    </section>
  );
}
