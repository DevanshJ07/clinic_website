import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AboutImageCarousel from "@/components/about/AboutImageCarousel";
import { ABOUT_HISTORY, CLINIC, COVID_VACCINATION } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Medicare was started in 1988 by two qualified eminent doctors. A pioneer in modern diagnostic facilities in Howrah, offering comprehensive healthcare under one roof.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden py-14 md:py-16 lg:py-20 bg-home-hero bg-institutional-pattern border-b border-border/80">
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 right-0 h-48 w-48 rounded-full bg-clinic-green/[0.04] blur-3xl"
        />
        <div className="container-wide relative">
          <div className="grid lg:grid-cols-[1fr_minmax(260px,320px)] gap-10 lg:gap-14 xl:gap-16 items-start">
            {/* Content — left on desktop, first on mobile */}
            <div className="flex flex-col gap-8">
              <div>
                <p className="eyebrow mb-4">Our History</p>
                <h1 className="font-display text-[2rem] md:text-[2.35rem] font-medium text-clinic-navy leading-[1.15]">
                  About Medicare
                </h1>
              </div>

              <div className="flex flex-col gap-6">
                {ABOUT_HISTORY.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-[15px] md:text-[16px] text-clinic-gray font-light leading-[1.85]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Carousel — right on desktop, below content on mobile */}
            <div className="lg:sticky lg:top-24 flex justify-center lg:justify-end">
              <AboutImageCarousel />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-12 bg-home-trust border-b border-border/80">
        <div className="container-wide">
          <p className="eyebrow mb-6">Community Service</p>
          <div className="grid lg:grid-cols-[1fr_minmax(240px,280px)] gap-8 lg:gap-12 items-center">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
              <p className="font-display text-[3rem] md:text-[3.5rem] font-medium text-clinic-navy leading-none tracking-[-0.03em] shrink-0">
                {COVID_VACCINATION.value}
              </p>
              <div className="flex flex-col gap-1.5">
                <p className="text-[17px] md:text-[18px] font-medium text-clinic-navy leading-snug">
                  {COVID_VACCINATION.label}
                </p>
                <p className="text-[14px] text-clinic-gray font-light leading-relaxed max-w-xl">
                  {COVID_VACCINATION.sub}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-border/60 bg-white/50 shadow-sm shadow-clinic-navy/[0.04]">
                <Image
                  src="/clinic/covid-vacc-camp.png"
                  alt="Community members seated for post-vaccination observation at Medicare COVID vaccination camp"
                  fill
                  className="object-cover object-center"
                  sizes="140px"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-border/60 bg-white/50 shadow-sm shadow-clinic-navy/[0.04]">
                <Image
                  src="/clinic/covid-vacc-team.png"
                  alt="Medicare healthcare team conducting COVID-19 Covishield vaccination service"
                  fill
                  className="object-cover object-center"
                  sizes="140px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-14 bg-home-contact border-b border-border/80">
        <div className="container-wide flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <p className="text-[15px] text-clinic-navy font-medium">
              Established {CLINIC.established} · Howrah, West Bengal
            </p>
            <p className="text-[14px] text-clinic-gray font-light mt-1">
              {CLINIC.contact.email}
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-[14px] font-medium text-clinic-navy border border-border/80 bg-white/70 px-6 py-3 hover:border-clinic-navy/30 transition-colors group shrink-0"
          >
            Contact Us · {CLINIC.contact.helpline}
            <ArrowRight className="w-4 h-4 stroke-[1.5] group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
