import Link from "next/link";
import { Metadata } from "next";
import { Phone, ChevronRight } from "lucide-react";
import BloodTestRatesPanel from "@/components/facilities/BloodTestRatesPanel";
import CTScanRatesPanel from "@/components/facilities/CTScanRatesPanel";
import CategorySection from "@/components/facilities/CategorySection";
import DiagnosticServiceCard from "@/components/facilities/DiagnosticServiceCard";
import FacilityContentLayout from "@/components/facilities/FacilityContentLayout";
import FacilityImage, {
  FacilityImageStack,
} from "@/components/facilities/FacilityImage";
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
  CT_SCAN_RATES,
  CT_SCAN_CONTRAST_CHARGES,
  OPD_TREATMENT,
} from "@/lib/diagnostic-services";

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
      <section className="relative overflow-hidden border-b border-border/80 bg-home-hero bg-institutional-pattern py-8 md:py-10">
        <div className="container-wide relative">
          <FacilityContentLayout
            mediaFirstOnMobile={false}
            media={
              <FacilityImage
                src="/clinic/lab-analyzer.png"
                alt="Medicare NABL-accredited pathology laboratory — technician at diagnostic analyzer"
                priority
              />
            }
          >
            <div>
              <p className="eyebrow mb-3">Facilities</p>
              <h1 className="font-display mb-3 text-[1.875rem] font-semibold leading-tight text-clinic-navy md:text-[2.35rem]">
                Diagnostic Centre
              </h1>
              <div className="flex max-w-2xl flex-col gap-3">
                {DIAGNOSTIC_INTRO.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-[14px] font-normal leading-relaxed text-clinic-navy/80"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </FacilityContentLayout>
        </div>
      </section>

      {/* Category nav */}
      <section className="sticky top-[4.25rem] z-40 border-b border-border/80 bg-background/95 backdrop-blur-sm md:top-[4.75rem]">
        <div className="container-wide overflow-x-auto py-2">
          <nav
            className="flex min-w-max items-center gap-1.5"
            aria-label="Diagnostic service categories"
          >
            {DIAGNOSTIC_CATEGORIES.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="whitespace-nowrap border border-border/60 bg-white/60 px-2.5 py-1 text-[11px] font-medium text-clinic-navy/70 transition-colors hover:border-clinic-navy/25 hover:text-clinic-navy md:text-[12px]"
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
          <span className="inline-block h-fit shrink-0 border border-clinic-blue/15 bg-clinic-blue-50 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-clinic-navy lg:mt-6">
            {PATHOLOGY_OVERVIEW.nabl}
          </span>
        }
      >
        <div className="mb-6 flex flex-col gap-5">
          <FacilityContentLayout
            media={
              <FacilityImage
                src={PATHOLOGY_OVERVIEW.image.src}
                alt={PATHOLOGY_OVERVIEW.image.alt}
              />
            }
          >
            <div className="grid gap-2 sm:grid-cols-3">
              {PATHOLOGY_OVERVIEW.subServices.map((sub) => (
                <div
                  key={sub.title}
                  className="rounded-sm border border-border/50 bg-white/50 px-3 py-2.5"
                >
                  <h4 className="mb-0.5 text-[13px] font-semibold text-clinic-navy">
                    {sub.title}
                  </h4>
                  <p className="text-[11px] font-normal leading-snug text-clinic-navy/75">
                    {sub.description}
                  </p>
                </div>
              ))}
            </div>
          </FacilityContentLayout>

          <p className="text-[12px] font-normal leading-snug text-clinic-navy/75">
            {PATHOLOGY_OVERVIEW.features.join(" · ")}
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-label mb-2">Laboratory Equipment</h3>
          <div className="grid gap-px overflow-hidden rounded-sm border border-border/50 bg-border/60 sm:grid-cols-3">
            {PATHOLOGY_OVERVIEW.equipment.map((eq) => (
              <div key={eq.model} className="bg-white/75 px-3 py-2.5">
                <p className="text-[11px] font-normal leading-snug text-clinic-navy/75">
                  {eq.name}
                </p>
                <p className="mt-0.5 font-display text-[13px] font-medium text-clinic-navy">
                  {eq.model}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-3 font-display text-[1.125rem] font-semibold text-clinic-navy">
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
      >
        <FacilityContentLayout
          media={
            <FacilityImageStack>
              <FacilityImage
                src="/clinic/xray-interior.png"
                alt="Medicare digital X-ray room — GE 500mA equipment"
              />
              <FacilityImage
                src="/clinic/ultrasound-room.png"
                alt="Medicare ultrasound imaging room — GE Voluson P8"
              />
            </FacilityImageStack>
          }
        >
          <div className={SERVICE_GRID}>
            {RADIOLOGY_SERVICES.map((service) => (
              <DiagnosticServiceCard key={service.id} {...service} />
            ))}
          </div>
        </FacilityContentLayout>
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
        <div className="grid max-w-2xl gap-3 sm:grid-cols-2">
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
        <FacilityContentLayout
          media={
            <FacilityImage
              src="/clinic/physiotherapy-room.png"
              alt="Medicare physiotherapy treatment room with electrotherapy equipment"
              objectPosition="center 70%"
            />
          }
        >
          <div className="max-w-md">
            <DiagnosticServiceCard
              name={PHYSIOTHERAPY_SERVICES.name}
              services={PHYSIOTHERAPY_SERVICES.services}
              price={PHYSIOTHERAPY_SERVICES.price}
            />
          </div>
        </FacilityContentLayout>
      </CategorySection>

      {/* CT Scan */}
      <CategorySection
        id="ct-scan"
        eyebrow="Advanced imaging"
        title="CT Scan"
        bg="bg-home-about"
      >
        <FacilityContentLayout
          media={
            <FacilityImage
              src={CT_SCAN.image.src}
              alt={CT_SCAN.image.alt}
            />
          }
        >
          <div className="flex flex-col gap-4">
            <p className="max-w-2xl text-[13px] font-normal leading-relaxed text-clinic-navy/80">
              {CT_SCAN.description}
            </p>
            <p className="text-[12px] font-normal text-clinic-navy/75">
              <span className="text-label">Equipment · </span>
              {CT_SCAN.machine}
            </p>
            <CTScanRatesPanel
              scanRates={CT_SCAN_RATES}
              contrastCharges={CT_SCAN_CONTRAST_CHARGES}
            />
          </div>
        </FacilityContentLayout>
      </CategorySection>

      {/* OPD */}
      <CategorySection
        id="opd"
        eyebrow="Outpatient"
        title={OPD_TREATMENT.name}
        bg="bg-home-trust"
      >
        <FacilityContentLayout
          media={
            <FacilityImage
              src="/clinic/waiting-area.png"
              alt="Medicare outpatient waiting and treatment area"
              objectPosition="center 45%"
            />
          }
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
        </FacilityContentLayout>
      </CategorySection>

      {/* CTA */}
      <section className="bg-home-contact py-10 md:py-11">
        <div className="container-wide flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-[1.25rem] font-medium text-clinic-navy">
              Book Appointment
            </p>
            <p className="mt-1 max-w-md text-[13px] font-normal text-clinic-navy/75">
              Call Medicare Diagnostic Centre &amp; OPD to schedule tests or
              imaging.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <a
              href="tel:03340073713"
              className="btn-book-appointment gap-2 px-5 py-3"
            >
              <Phone className="h-4 w-4 stroke-[1.5]" />
              Book Appointment
            </a>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 border border-border/80 bg-white/70 px-5 py-3 text-[13px] font-medium text-clinic-navy transition-colors hover:border-clinic-navy/30"
            >
              Contact page
              <ChevronRight className="h-4 w-4 stroke-[1.5] transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
