import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HOME_FACILITIES } from "@/lib/data";

export default function FacilitiesPreviewSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20 bg-home-facilities bg-institutional-pattern home-ambient-glow-tr border-b border-border/80">
      <div className="container-wide relative">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 md:mb-12">
          <div>
            <p className="eyebrow mb-3">Facilities</p>
            <h2 className="font-display text-[1.625rem] md:text-[2rem] font-medium text-clinic-navy">
              Care under one roof
            </h2>
          </div>
          <Link
            href="/facilities"
            className="inline-flex items-center gap-2 text-[14px] font-medium text-clinic-navy hover:text-clinic-blue transition-colors group shrink-0"
          >
            All facilities
            <ArrowRight className="w-4 h-4 stroke-[1.5] group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/80 rounded-sm overflow-hidden border border-border/60 shadow-sm shadow-clinic-navy/[0.03]">
          {HOME_FACILITIES.map((facility) => (
            <Link
              key={facility.id}
              href={
                facility.id === "nursing-home"
                  ? "/nursing-home"
                  : `/facilities#${facility.id}`
              }
              className="group bg-white/80 backdrop-blur-[2px] p-7 md:p-8 flex flex-col gap-2 hover:bg-white transition-colors"
            >
              <h3 className="font-display text-[17px] font-medium text-clinic-navy group-hover:text-clinic-blue transition-colors">
                {facility.name}
              </h3>
              <p className="text-[13px] text-clinic-gray font-light leading-relaxed">
                {facility.desc}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
