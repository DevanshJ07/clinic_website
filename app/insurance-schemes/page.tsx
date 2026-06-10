import Link from "next/link";
import { Metadata } from "next";
import { Phone, Shield, Building2, ArrowRight } from "lucide-react";
import {
  INSURANCE_HERO,
  SCHEME_NOTE,
  GOVERNMENT_SCHEMES,
  INSURANCE_PARTNERS,
  INSURANCE_PARTNERS_INTRO,
} from "@/lib/insurance";
import { CLINIC } from "@/lib/data";

export const metadata: Metadata = {
  title: "Insurance & Health Schemes",
  description:
    "Medicare accepts Ayushman Bharat (AB-PMJAY), Swasthya Sathi, and cashless mediclaim from leading insurance providers and TPAs in Howrah.",
};

export default function InsuranceSchemesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-10 md:py-12 bg-home-hero bg-institutional-pattern border-b border-border/80">
        <div className="container-wide">
          <p className="eyebrow mb-3">Patients &amp; coverage</p>
          <h1 className="font-display text-[2rem] md:text-[2.5rem] font-semibold text-clinic-navy leading-tight mb-3 max-w-3xl">
            {INSURANCE_HERO.title}
          </h1>
          <p className="text-[15px] text-clinic-gray font-light leading-relaxed max-w-2xl">
            {INSURANCE_HERO.subtitle}
          </p>
        </div>
      </section>

      {/* Government schemes */}
      <section className="py-10 md:py-12 bg-nursing-warm border-b border-border/80">
        <div className="container-wide">
          <div className="flex items-center gap-2 mb-6">
            <Building2 className="w-4 h-4 text-clinic-navy/70 stroke-[1.5]" />
            <h2 className="font-display text-[1.375rem] md:text-[1.625rem] font-medium text-clinic-navy">
              Government Health Schemes Accepted
            </h2>
          </div>

          <div className="grid md:grid-cols-[1.2fr_1fr] gap-4 mb-5">
            {GOVERNMENT_SCHEMES.map((scheme) =>
              scheme.featured ? (
                <article
                  key={scheme.id}
                  className="rounded-sm border-2 border-clinic-navy/20 bg-white/80 p-6 md:p-7 shadow-sm shadow-clinic-navy/[0.04]"
                >
                  <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-clinic-green mb-2">
                    Accepted scheme
                  </p>
                  <h3 className="font-display text-[1.125rem] md:text-[1.25rem] font-medium text-clinic-navy leading-snug mb-1">
                    {scheme.name}
                  </h3>
                  <p className="text-[13px] font-medium text-clinic-navy/80">
                    {scheme.shortName}
                  </p>
                </article>
              ) : (
                <article
                  key={scheme.id}
                  className="rounded-sm border border-border/60 bg-white/70 p-6 md:p-7 shadow-sm shadow-clinic-navy/[0.02]"
                >
                  <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-clinic-gray mb-2">
                    Accepted scheme
                  </p>
                  <h3 className="font-display text-[1.0625rem] font-medium text-clinic-navy leading-snug">
                    {scheme.name}
                  </h3>
                </article>
              )
            )}
          </div>

          <p className="text-[13px] text-clinic-gray font-light border-l-2 border-clinic-navy/15 pl-4 max-w-2xl">
            {SCHEME_NOTE}
          </p>
        </div>
      </section>

      {/* Insurance partners */}
      <section className="py-10 md:py-12 bg-background border-b border-border/80">
        <div className="container-wide">
          <div className="mb-6 max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <Shield className="w-4 h-4 text-clinic-navy/70 stroke-[1.5]" />
              <h2 className="font-display text-[1.375rem] md:text-[1.625rem] font-medium text-clinic-navy">
                Cashless Insurance &amp; Mediclaim Partners
              </h2>
            </div>
            <p className="text-[14px] text-clinic-gray font-light leading-relaxed">
              {INSURANCE_PARTNERS_INTRO}
            </p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5">
            {INSURANCE_PARTNERS.map((partner) => (
              <li
                key={partner}
                className="rounded-sm border border-border/50 bg-white/60 px-3.5 py-3 text-[12px] text-clinic-navy font-light leading-snug hover:bg-white hover:border-border/80 transition-colors"
              >
                {partner}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-11 bg-home-contact">
        <div className="container-wide">
          <p className="eyebrow mb-3">Enquiries</p>
          <h2 className="font-display text-[1.25rem] md:text-[1.375rem] font-medium text-clinic-navy mb-5">
            For insurance or scheme enquiries, please contact
          </h2>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-6">
            <a
              href={`tel:${CLINIC.contact.helpline}`}
              className="inline-flex items-center gap-2 rounded-sm border border-border/60 bg-white/70 px-5 py-3 text-[14px] text-clinic-navy hover:border-clinic-navy/25 transition-colors"
            >
              <Phone className="w-4 h-4 stroke-[1.5] text-clinic-gray" />
              <span>
                <span className="block text-[10px] uppercase tracking-[0.14em] text-clinic-gray mb-0.5">
                  24×7 Helpline
                </span>
                {CLINIC.contact.helpline}
              </span>
            </a>
            <a
              href="tel:03326381777"
              className="inline-flex items-center gap-2 rounded-sm border border-border/60 bg-white/70 px-5 py-3 text-[14px] text-clinic-navy hover:border-clinic-navy/25 transition-colors"
            >
              <Phone className="w-4 h-4 stroke-[1.5] text-clinic-gray" />
              <span>
                <span className="block text-[10px] uppercase tracking-[0.14em] text-clinic-gray mb-0.5">
                  Nursing Home
                </span>
                {CLINIC.contact.nursingHome}
              </span>
            </a>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-[13px] font-medium text-clinic-navy hover:text-clinic-blue transition-colors group"
          >
            Contact page
            <ArrowRight className="w-3.5 h-3.5 stroke-[1.5] group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
