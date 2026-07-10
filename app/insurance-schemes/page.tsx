import Link from "next/link";
import { Metadata } from "next";
import { Phone, Building2, ArrowRight } from "lucide-react";
import InsurancePartnerCategory from "@/components/insurance/InsurancePartnerCategory";
import {
  INSURANCE_HERO,
  SCHEME_NOTE,
  GOVERNMENT_SCHEMES,
  EMPANELMENT_CATEGORIES,
  CASHLESS_COVERAGE_NOTE,
} from "@/lib/insurance";
import { CLINIC } from "@/lib/data";

export const metadata: Metadata = {
  title: "Insurance & Mediclaim",
  description:
    "Medicare is empanelled with government insurers, TPAs, and private insurance companies for cashless inpatient and outpatient care in Howrah.",
};

export default function InsuranceSchemesPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border/80 bg-home-hero bg-institutional-pattern py-10 md:py-12">
        <div className="container-wide">
          <p className="eyebrow mb-3">Patients &amp; coverage</p>
          <h1 className="font-display mb-3 max-w-3xl text-[2rem] font-semibold leading-tight text-clinic-navy md:text-[2.5rem]">
            {INSURANCE_HERO.title}
          </h1>
          <p className="max-w-3xl text-[15px] font-normal leading-relaxed text-clinic-navy/80">
            {INSURANCE_HERO.subtitle}
          </p>
        </div>
      </section>

      {/* Government schemes */}
      <section className="border-b border-border/80 bg-nursing-warm py-10 md:py-12">
        <div className="container-wide">
          <div className="mb-6 flex items-center gap-2">
            <Building2 className="h-4 w-4 stroke-[1.5] text-clinic-navy/70" />
            <h2 className="font-display text-[1.375rem] font-semibold text-clinic-navy md:text-[1.625rem]">
              Government Health Schemes Accepted
            </h2>
          </div>

          <div className="mb-5 grid gap-4 md:grid-cols-[1.2fr_1fr]">
            {GOVERNMENT_SCHEMES.map((scheme) =>
              scheme.featured ? (
                <article
                  key={scheme.id}
                  className="rounded-sm border-2 border-clinic-navy/20 bg-white/80 p-6 shadow-sm shadow-clinic-navy/[0.04] md:p-7"
                >
                  <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.16em] text-clinic-green">
                    Accepted scheme
                  </p>
                  <h3 className="font-display mb-1 text-[1.125rem] font-semibold leading-snug text-clinic-navy md:text-[1.25rem]">
                    {scheme.name}
                  </h3>
                  <p className="text-[13px] font-medium text-clinic-navy/80">
                    {scheme.shortName}
                  </p>
                </article>
              ) : (
                <article
                  key={scheme.id}
                  className="rounded-sm border border-border/60 bg-white/70 p-6 shadow-sm shadow-clinic-navy/[0.02] md:p-7"
                >
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-clinic-navy/65">
                    Accepted scheme
                  </p>
                  <h3 className="font-display text-[1.0625rem] font-semibold leading-snug text-clinic-navy">
                    {scheme.name}
                  </h3>
                </article>
              )
            )}
          </div>

          <p className="text-note max-w-2xl border-l-2 border-clinic-navy/25 pl-4">
            {SCHEME_NOTE}
          </p>
        </div>
      </section>

      {/* Empanelment categories */}
      <section className="border-b border-border/80 bg-background py-10 md:py-12">
        <div className="container-wide flex flex-col gap-8 md:gap-10">
          {EMPANELMENT_CATEGORIES.map((category) => (
            <InsurancePartnerCategory key={category.id} category={category} />
          ))}

          <p className="text-note max-w-3xl rounded-sm border border-clinic-navy/10 bg-clinic-blue-50/40 px-4 py-3.5">
            {CASHLESS_COVERAGE_NOTE}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-home-contact py-10 md:py-11">
        <div className="container-wide">
          <p className="eyebrow mb-3">Enquiries</p>
          <h2 className="font-display mb-5 text-[1.25rem] font-medium text-clinic-navy md:text-[1.375rem]">
            For insurance or scheme enquiries, please contact
          </h2>
          <div className="mb-6 flex flex-col flex-wrap gap-3 sm:flex-row">
            <a
              href={`tel:${CLINIC.contact.helpline}`}
              className="inline-flex items-center gap-2 rounded-sm border border-border/60 bg-white/70 px-5 py-3 text-[14px] text-clinic-navy transition-colors hover:border-clinic-navy/25"
            >
              <Phone className="h-4 w-4 stroke-[1.5] text-clinic-gray" />
              <span>
                <span className="text-label mb-0.5 block">24×7 Helpline</span>
                {CLINIC.contact.helpline}
              </span>
            </a>
            <a
              href={`tel:${CLINIC.contact.nursingHomeTel}`}
              className="inline-flex items-center gap-2 rounded-sm border border-border/60 bg-white/70 px-5 py-3 text-[14px] text-clinic-navy transition-colors hover:border-clinic-navy/25"
            >
              <Phone className="h-4 w-4 shrink-0 stroke-[1.5] text-clinic-gray" />
              <span>
                <span className="text-label mb-0.5 block">Nursing Home</span>
                <span className="leading-snug">{CLINIC.contact.nursingHome}</span>
              </span>
            </a>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 text-[13px] font-medium text-clinic-navy transition-colors hover:text-clinic-blue"
          >
            Contact page
            <ArrowRight className="h-3.5 w-3.5 stroke-[1.5] transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>
    </>
  );
}
