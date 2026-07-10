import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { CLINIC } from "@/lib/data";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border/80 bg-home-hero bg-institutional-pattern">
      <div className="container-wide relative">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center py-14 md:py-16 lg:py-20 pb-8 md:pb-10 lg:pb-12">
          <div className="flex flex-col gap-7 order-2 lg:order-1">
            <p className="eyebrow">Howrah · Est. {CLINIC.established}</p>

            <div className="flex flex-col gap-3">
              <p className="font-display text-[3rem] sm:text-[3.5rem] lg:text-[4.25rem] xl:text-[4.5rem] font-semibold leading-[0.95] tracking-[-0.03em] text-clinic-navy">
                Medicare
              </p>
              <h1 className="font-display text-[1.5rem] sm:text-[1.75rem] lg:text-[2rem] font-medium leading-[1.2] tracking-[-0.015em] text-clinic-navy/90 text-balance max-w-lg">
                Trusted healthcare for over 37 years
              </h1>
            </div>

            <p className="text-[16px] md:text-[17px] text-clinic-gray font-light leading-[1.75] max-w-md">
              A pioneer in modern diagnostic facilities in Howrah since 1988
              — with NABH-certified Nursing Home and NABL-accredited laboratory
              care under one roof.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <a
                href={`tel:${CLINIC.contact.helpline}`}
                className="inline-flex items-center justify-center gap-2 text-[14px] font-medium text-white bg-clinic-navy px-6 py-3.5 hover:bg-clinic-navy/90 transition-colors shadow-sm shadow-clinic-navy/10"
              >
                <Phone className="w-4 h-4 stroke-[1.5]" />
                24×7 Helpline · {CLINIC.contact.helpline}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center text-[14px] font-medium text-clinic-navy bg-white/70 border border-border/80 px-6 py-3.5 hover:bg-white transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="order-1 lg:order-2 grid grid-cols-12 gap-3 md:gap-4">
            <div className="col-span-7 relative aspect-[4/5] overflow-hidden rounded-sm border border-border/60 bg-white/50 shadow-sm shadow-clinic-navy/[0.04]">
              <Image
                src="/clinic/reception-nabh.png"
                alt="Medicare reception with NABH accreditation certificates displayed"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 58vw, 28vw"
                priority
              />
            </div>
            <div className="col-span-5 flex flex-col gap-3 md:gap-4">
              <div className="relative flex-1 min-h-[120px] overflow-hidden rounded-sm border border-border/60 bg-white/50 shadow-sm shadow-clinic-navy/[0.04]">
                <Image
                  src="/clinic/ct-scan-room.png"
                  alt="Medicare CT scan room — GE Revolution ACT"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 38vw, 14vw"
                  priority
                />
              </div>
              <div className="relative flex-1 min-h-[120px] overflow-hidden rounded-sm border border-border/60 bg-white/50 shadow-sm shadow-clinic-navy/[0.04]">
                <Image
                  src="/clinic/waiting-area.png"
                  alt="Medicare clinic waiting area"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 38vw, 14vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
