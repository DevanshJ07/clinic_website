import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Phone, ChevronRight } from "lucide-react";
import BloodTestRatesPanel from "@/components/facilities/BloodTestRatesPanel";
import CategorySection from "@/components/facilities/CategorySection";
import DiagnosticServiceCard from "@/components/facilities/DiagnosticServiceCard";
import {
  DIAGNOSTIC_INTRO,
  DIAGNOSTIC_CATEGORIES,
  PATHOLOGY_OVERVIEW,
  PATHOLOGY_EXTENDED_NOTE,
  BLOOD_TEST_RATES,
  RADIOLOGY_INTRO,
  RADIOLOGY_SERVICES,
  CARDIOLOGY_SERVICES,
  ENDOSCOPY_SERVICES,
  NEUROLOGY_SERVICES,
  PULMONARY_SERVICES,
  PHYSIOTHERAPY_SERVICES,
  CT_SCAN,
  OPD_TREATMENT,
} from "@/lib/diagnostic-services";
import { CLINIC } from "@/lib/data";

export const metadata: Metadata = {
  title: "Diagnostic Centre & Facilities",
  description:
    "Medicare Diagnostic Centre in Howrah — NABL pathology laboratory, radiology, cardiology, CT scan, physiotherapy, and OPD treatment services.",
};

const SERVICE_GRID =
  "grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3";

export default function FacilitiesPage() {
  return (
    <>
      {/* Hero + intro */}
      <section className="relative overflow-hidden py-8 md:py-10 bg-home-hero bg-institutional-pattern border-b border-border/80">
        <div className="container-wide relative">
          <div className="grid lg:grid-cols-[1.2fr_200px] gap-6 lg:gap-10 items-start">
            <div>
              <p className="eyebrow mb-3">Facilities</p>
              <h1 className="font-display text-[1.875rem] md:text-[2.35rem] font-semibold text-clinic-navy leading-tight mb-3">
                Diagnostic Centre
              </h1>
              <div className="flex flex-col gap-3 max-w-2xl">
                {DIAGNOSTIC_INTRO.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-[14px] text-clinic-gray font-light leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="relative hidden lg:block aspect-square w-[200px] overflow-hidden rounded-sm border border-border/60 bg-white/50 shadow-sm">
              <Image
                src="/clinic/lab-analyzer.png"
                alt="Medicare diagnostic laboratory"
                fill
                className="object-cover object-center"
                sizes="200px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category nav */}
      <section className="sticky top-[4.25rem] md:top-[4.75rem] z-40 border-b border-border/80 bg-background/95 backdrop-blur-sm">
        <div className="container-wide py-2 overflow-x-auto">
          <nav
            className="flex items-center gap-1.5 min-w-max"
            aria-label="Diagnostic service categories"
          >
            {DIAGNOSTIC_CATEGORIES.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="text-[11px] md:text-[12px] font-medium text-clinic-gray hover:text-clinic-navy border border-border/60 bg-white/60 px-2.5 py-1 hover:border-clinic-navy/25 transition-colors whitespace-nowrap"
              >
                {cat.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Pathology */}
      <CategorySection
        id="pathology"
        eyebrow="Laboratory"
        title={PATHOLOGY_OVERVIEW.title}
        bg="bg-home-trust"
        headerAside={
          <span className="inline-block text-[10px] font-medium uppercase tracking-[0.14em] text-clinic-navy bg-clinic-blue-50 border border-clinic-blue/15 px-2.5 py-1 lg:mt-6 shrink-0 h-fit">
            {PATHOLOGY_OVERVIEW.nabl}
          </span>
        }
      >
        <div className="grid lg:grid-cols-[1fr_160px] gap-5 lg:gap-8 mb-6">
          <div className="flex flex-col gap-5">
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-1">
              {PATHOLOGY_OVERVIEW.specialties.map((item) => (
                <li
                  key={item}
                  className="text-[12px] text-clinic-gray font-light leading-snug pl-2.5 relative before:absolute before:left-0 before:top-[0.5em] before:w-0.5 before:h-0.5 before:rounded-full before:bg-clinic-navy/30"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="grid sm:grid-cols-3 gap-2">
              {PATHOLOGY_OVERVIEW.subServices.map((sub) => (
                <div
                  key={sub.title}
                  className="rounded-sm border border-border/50 bg-white/50 px-3 py-2.5"
                >
                  <h4 className="text-[13px] font-medium text-clinic-navy mb-0.5">
                    {sub.title}
                  </h4>
                  <p className="text-[11px] text-clinic-gray font-light leading-snug">
                    {sub.description}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-[12px] text-clinic-gray font-light leading-snug">
              {PATHOLOGY_OVERVIEW.features.join(" · ")}
            </p>
          </div>

          <div className="relative hidden lg:block aspect-[3/4] overflow-hidden rounded-sm border border-border/60 bg-white/50">
            <Image
              src={PATHOLOGY_OVERVIEW.image.src}
              alt={PATHOLOGY_OVERVIEW.image.alt}
              fill
              className="object-cover object-center"
              sizes="160px"
            />
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-[10px] font-medium uppercase tracking-[0.14em] text-clinic-gray mb-2">
            Laboratory Equipment
          </h3>
          <div className="grid sm:grid-cols-3 gap-px bg-border/60 border border-border/50 rounded-sm overflow-hidden">
            {PATHOLOGY_OVERVIEW.equipment.map((eq) => (
              <div key={eq.model} className="bg-white/75 px-3 py-2.5">
                <p className="text-[11px] text-clinic-gray font-light leading-snug">
                  {eq.name}
                </p>
                <p className="font-display text-[13px] font-medium text-clinic-navy mt-0.5">
                  {eq.model}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-[1.125rem] font-medium text-clinic-navy mb-3">
            Common blood test rates
          </h3>
          <BloodTestRatesPanel
            tests={BLOOD_TEST_RATES}
            extendedNote={PATHOLOGY_EXTENDED_NOTE}
          />
        </div>
      </CategorySection>

      {/* Radiology */}
      <CategorySection
        id="radiology"
        eyebrow="Imaging"
        title="Radiology Services"
        intro={RADIOLOGY_INTRO}
        bg="bg-home-facilities"
        headerAside={
          <div className="relative hidden md:block w-[140px] aspect-[4/3] overflow-hidden rounded-sm border border-border/60 bg-white/50 lg:mt-4">
            <Image
              src="/clinic/xray-room.png"
              alt="Medicare digital X-ray facility"
              fill
              className="object-cover object-center"
              sizes="140px"
            />
          </div>
        }
      >
        <div className={SERVICE_GRID}>
          {RADIOLOGY_SERVICES.map((service) => (
            <DiagnosticServiceCard key={service.id} {...service} />
          ))}
        </div>
      </CategorySection>

      {/* Cardiology */}
      <CategorySection
        id="cardiology"
        eyebrow="Heart care"
        title="Cardiology Services"
        bg="bg-home-about"
      >
        <div className={SERVICE_GRID}>
          {CARDIOLOGY_SERVICES.map((service) => (
            <DiagnosticServiceCard key={service.id} {...service} />
          ))}
        </div>
      </CategorySection>

      {/* Endoscopy */}
      <CategorySection
        id="endoscopy"
        eyebrow="Gastroenterology"
        title="Endoscopy & Gastro Diagnostics"
        bg="bg-home-trust"
      >
        <div className="grid sm:grid-cols-2 gap-3 max-w-2xl">
          {ENDOSCOPY_SERVICES.map((service) => (
            <DiagnosticServiceCard key={service.id} {...service} />
          ))}
        </div>
      </CategorySection>

      {/* Neurology */}
      <CategorySection
        id="neurology"
        eyebrow="Neurology"
        title="Neurology Diagnostics"
        bg="bg-home-facilities"
      >
        <div className="max-w-xs">
          {NEUROLOGY_SERVICES.map((service) => (
            <DiagnosticServiceCard key={service.id} {...service} />
          ))}
        </div>
      </CategorySection>

      {/* Pulmonary */}
      <CategorySection
        id="pulmonary"
        eyebrow="Respiratory care"
        title="Pulmonary Diagnostics"
        bg="bg-home-about"
      >
        <div className="max-w-sm">
          {PULMONARY_SERVICES.map((service) => (
            <DiagnosticServiceCard key={service.id} {...service} />
          ))}
        </div>
      </CategorySection>

      {/* Physiotherapy */}
      <CategorySection
        id="physiotherapy"
        eyebrow="Rehabilitation"
        title="Physiotherapy"
        bg="bg-home-trust"
      >
        <div className="max-w-md">
          <DiagnosticServiceCard
            name={PHYSIOTHERAPY_SERVICES.name}
            services={PHYSIOTHERAPY_SERVICES.services}
            price={PHYSIOTHERAPY_SERVICES.price}
          />
        </div>
      </CategorySection>

      {/* CT Scan */}
      <CategorySection
        id="ct-scan"
        eyebrow="Advanced imaging"
        title="CT Scan"
        bg="bg-home-about"
      >
        <div className="grid lg:grid-cols-[1fr_200px] gap-4 lg:gap-6 items-start">
          <DiagnosticServiceCard
            name={CT_SCAN.name}
            description={CT_SCAN.description}
            machine={CT_SCAN.machine}
            price={CT_SCAN.price}
          />
          <div className="relative aspect-[4/3] lg:aspect-square overflow-hidden rounded-sm border border-border/60 bg-white/50">
            <Image
              src={CT_SCAN.image.src}
              alt={CT_SCAN.image.alt}
              fill
              className="object-cover object-center"
              sizes="200px"
            />
          </div>
        </div>
      </CategorySection>

      {/* OPD */}
      <CategorySection
        id="opd"
        eyebrow="Outpatient"
        title={OPD_TREATMENT.name}
        bg="bg-home-trust"
      >
        <div className="max-w-lg">
          <DiagnosticServiceCard
            name="Available procedures"
            bookingName={OPD_TREATMENT.name}
            description={OPD_TREATMENT.description}
            services={OPD_TREATMENT.services}
            price={OPD_TREATMENT.price}
          />
        </div>
      </CategorySection>

      {/* CTA */}
      <section className="py-10 md:py-11 bg-home-contact">
        <div className="container-wide flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="font-display text-[1.25rem] font-medium text-clinic-navy">
              Book a diagnostic service
            </p>
            <p className="text-[13px] text-clinic-gray font-light mt-1 max-w-md">
              Call Medicare Diagnostic Centre &amp; OPD to schedule tests or
              imaging.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 shrink-0">
            <a
              href="tel:03340073713"
              className="inline-flex items-center justify-center gap-2 text-[13px] font-medium text-white bg-clinic-navy px-5 py-3 hover:bg-clinic-navy/90 transition-colors"
            >
              <Phone className="w-4 h-4 stroke-[1.5]" />
              {CLINIC.contact.diagnosticOpd}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 text-[13px] font-medium text-clinic-navy border border-border/80 bg-white/70 px-5 py-3 hover:border-clinic-navy/30 transition-colors group"
            >
              Contact page
              <ChevronRight className="w-4 h-4 stroke-[1.5] group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
