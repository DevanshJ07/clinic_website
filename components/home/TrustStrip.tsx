import { HOME_TRUST, DIAGNOSTIC_24_HOUR_HIGHLIGHT } from "@/lib/data";
import { AccreditationMarksRow } from "@/components/shared/AccreditationMarkSlot";

export default function TrustStrip() {
  return (
    <section className="relative overflow-hidden border-b border-border/80 bg-home-trust bg-institutional-pattern">
      <div className="container-wide py-10 md:py-12">
        <p className="mb-6 text-center text-[13px] font-medium text-clinic-navy/85 md:text-[14px]">
          {DIAGNOSTIC_24_HOUR_HIGHLIGHT}
        </p>
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4 lg:divide-x lg:divide-border/70">
          {HOME_TRUST.map((item, i) => (
            <li
              key={item.label}
              className={`flex flex-col gap-1 ${
                i > 0 ? "lg:pl-5 xl:pl-6" : ""
              } ${item.featured ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              <span
                className={`font-display font-medium text-clinic-navy tracking-tight leading-none ${
                  item.featured
                    ? "text-[2rem] md:text-[2.25rem] lg:text-[2rem] xl:text-[2.35rem]"
                    : "text-2xl md:text-[1.75rem]"
                }`}
              >
                {item.value}
              </span>
              <span className="text-[12px] md:text-[13px] text-clinic-gray font-light leading-snug">
                {item.label}
              </span>
              {"sub" in item && item.sub && (
                <span className="text-[11px] text-clinic-gray/70 font-light">
                  {item.sub}
                </span>
              )}
            </li>
          ))}
        </ul>
        <div className="mt-8 border-t border-border/60 pt-8">
          <AccreditationMarksRow compact />
        </div>
      </div>
    </section>
  );
}
