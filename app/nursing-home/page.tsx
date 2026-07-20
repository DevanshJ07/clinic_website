import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { Phone, Clock, ArrowRight } from "lucide-react";
import {
  NURSING_HOME_TRUST,
  NURSING_HOME_ABOUT,
  OT_EQUIPMENT,
  OT_SURGERIES,
  ROOM_TYPES,
  EMERGENCY_ADMISSION,
  EMERGENCY_ADMISSION_SUPPORT,
  PHARMACY_NOTE,
  NURSING_HOME_ADDITIONAL_FACILITIES,
} from "@/lib/nursing-home";
import { CLINIC, INDOOR_ADMISSION_HIGHLIGHT } from "@/lib/data";

export const metadata: Metadata = {
  title: "Nursing Home",
  description:
    "Medicare Nursing Home, Howrah — 24×7 inpatient care, ICU, modern operation theatres, and compassionate nursing in a trusted healthcare setting.",
};

export default function NursingHomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-10 md:py-14 bg-nursing-hero border-b border-border/80">
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-clinic-green/[0.05] blur-3xl"
        />
        <div className="container-wide relative">
          <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.85fr] lg:gap-10">
            <div className="flex flex-col gap-5">
              <p className="eyebrow">Inpatient Care · Open 24 Hours</p>
              <h1 className="font-display text-[2rem] md:text-[2.75rem] font-semibold text-clinic-navy leading-[1.1] tracking-[-0.02em]">
                Medicare Nursing Home
              </h1>
              <p className="text-[15px] md:text-[16px] text-clinic-gray font-light leading-relaxed max-w-lg">
                Excellent patient care, modern facilities, and 24×7 emergency
                admission in a trusted inpatient setting.
              </p>
              <p className="text-[14px] md:text-[15px] font-medium text-clinic-navy/90 max-w-lg">
                {INDOOR_ADMISSION_HIGHLIGHT}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <a
                  href={`tel:${CLINIC.contact.nursingHomeTel}`}
                  className="inline-flex items-center justify-center gap-2 text-[14px] font-medium text-white bg-clinic-navy px-6 py-3.5 hover:bg-clinic-navy/90 transition-colors"
                >
                  <Phone className="w-4 h-4 stroke-[1.5] shrink-0" />
                  <span className="text-left leading-snug">
                    <span className="block">Nursing Home</span>
                    <span className="block text-[12px] font-light opacity-90">
                      {CLINIC.contact.nursingHome}
                    </span>
                  </span>
                </a>
                <a
                  href={`tel:${CLINIC.contact.helpline}`}
                  className="inline-flex items-center justify-center text-[14px] font-medium text-clinic-navy bg-white/70 border border-border/80 px-6 py-3.5 hover:bg-white transition-colors"
                >
                  24×7 Helpline · {CLINIC.contact.helpline}
                </a>
              </div>
            </div>
            <div className="relative aspect-[5/4] w-full overflow-hidden rounded-sm border border-border/60 bg-clinic-warm shadow-sm shadow-clinic-navy/[0.04] lg:ml-auto lg:aspect-[4/3] lg:max-w-[360px] xl:max-w-[380px]">
              <Image
                src="/clinic/nursing-patient-room.png"
                alt="Medicare Nursing Home — single accommodation with hospital bed and centralized oxygen facility"
                fill
                className="object-cover object-center brightness-[0.88] contrast-[1.03] saturate-[0.96]"
                sizes="(max-width: 1024px) 90vw, 380px"
                priority
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-br from-clinic-navy/[0.12] via-clinic-navy/[0.06] to-clinic-navy/[0.14]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-border/80 bg-nursing-warm">
        <div className="container-wide py-8 md:py-9">
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-3 lg:divide-x lg:divide-border/60">
            {NURSING_HOME_TRUST.map((item, i) => (
              <li
                key={item.label}
                className={`flex flex-col gap-0.5 ${i > 0 ? "lg:pl-4 xl:pl-5" : ""}`}
              >
                <span className="font-display text-xl md:text-[1.35rem] font-medium text-clinic-navy tracking-tight leading-none">
                  {item.value}
                </span>
                <span className="text-[12px] text-clinic-gray font-light leading-snug">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* About */}
      <section className="py-10 md:py-12 bg-background border-b border-border/80">
        <div className="container-wide">
          <div className="grid lg:grid-cols-[1fr_220px] gap-8 lg:gap-12 items-start">
            <div>
              <p className="eyebrow mb-3">Our approach</p>
              <h2 className="font-display text-[1.5rem] md:text-[1.75rem] font-medium text-clinic-navy mb-5">
                About the Nursing Home
              </h2>
              <div className="flex flex-col gap-4 max-w-2xl">
                {NURSING_HOME_ABOUT.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-[14px] md:text-[15px] text-clinic-gray font-light leading-[1.8]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/3] lg:aspect-square overflow-hidden rounded-sm border border-border/60 bg-clinic-warm shadow-sm shadow-clinic-navy/[0.04]">
              <Image
                src="/clinic/indoor-reception.png"
                alt="Medicare Nursing Home — indoor reception desk with staff"
                fill
                className="object-cover object-[center_35%]"
                sizes="(max-width: 1024px) 100vw, 220px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Operation Theatre */}
      <section className="py-10 md:py-12 bg-nursing-soft border-b border-border/80">
        <div className="container-wide">
          <div className="grid lg:grid-cols-[minmax(260px,1fr)_1.1fr] gap-8 lg:gap-10 items-start">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-border/60 bg-clinic-warm shadow-sm shadow-clinic-navy/[0.04] order-1 lg:order-none">
              <Image
                src="/clinic/ot-room.png"
                alt="Medicare Nursing Home — modern operation theatre with surgical lights and ATHENA anesthesia workstation"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 90vw, 45vw"
              />
            </div>

            <div className="flex flex-col gap-6 order-2">
              <div>
                <p className="eyebrow mb-3">Surgical care</p>
                <h2 className="font-display text-[1.5rem] md:text-[1.875rem] font-medium text-clinic-navy leading-tight mb-3">
                  Operation Theatre
                </h2>
                <p className="text-[14px] text-clinic-gray font-light leading-relaxed max-w-xl">
                  Recently upgraded OT complex with advanced operation theatre
                  equipment.
                </p>
              </div>

              <div>
                <h3 className="text-[10px] font-medium uppercase tracking-[0.14em] text-clinic-gray mb-3">
                  Equipment
                </h3>
                <ul className="flex flex-col gap-2">
                  {OT_EQUIPMENT.map((item) => (
                    <li
                      key={item}
                      className="text-[13px] text-clinic-navy font-light pl-3 relative before:absolute before:left-0 before:top-[0.55em] before:w-1 before:h-1 before:rounded-full before:bg-clinic-green/60"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-[10px] font-medium uppercase tracking-[0.14em] text-clinic-gray mb-3">
                  Surgeries carried out
                </h3>
                <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2">
                  {OT_SURGERIES.map((surgery) => (
                    <li
                      key={surgery}
                      className="text-[13px] text-clinic-gray font-light pl-3 relative before:absolute before:left-0 before:top-[0.55em] before:w-1 before:h-1 before:rounded-full before:bg-clinic-navy/25"
                    >
                      {surgery}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section className="py-10 md:py-12 bg-background border-b border-border/80">
        <div className="container-wide">
          <div className="mb-8">
            <p className="eyebrow mb-3">Accommodation</p>
            <h2 className="font-display text-[1.5rem] md:text-[1.75rem] font-medium text-clinic-navy">
              Rooms &amp; Accommodation
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ROOM_TYPES.map((room) => (
              <article
                key={room.id}
                className="flex flex-col rounded-sm border border-border/60 bg-white/70 p-5 shadow-sm shadow-clinic-navy/[0.02]"
              >
                <h3 className="font-display text-[15px] font-medium text-clinic-navy mb-3 pb-3 border-b border-border/50">
                  {room.name}
                </h3>
                <ul className="flex flex-col gap-1.5 flex-1">
                  {room.amenities.map((amenity) => (
                    <li
                      key={amenity}
                      className="text-[12px] text-clinic-gray font-light leading-snug pl-2.5 relative before:absolute before:left-0 before:top-[0.5em] before:w-0.5 before:h-0.5 before:rounded-full before:bg-clinic-navy/30"
                    >
                      {amenity}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Additional facilities */}
      <section className="py-10 md:py-12 bg-nursing-soft border-b border-border/80">
        <div className="container-wide">
          <div className="mb-8">
            <p className="eyebrow mb-3">Amenities</p>
            <h2 className="font-display text-[1.5rem] md:text-[1.75rem] font-medium text-clinic-navy">
              Additional Facilities
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
            {NURSING_HOME_ADDITIONAL_FACILITIES.map((facility) => (
              <article
                key={facility.id}
                className="rounded-sm border border-border/60 bg-white/70 p-5 shadow-sm shadow-clinic-navy/[0.02]"
              >
                <h3 className="font-display text-[15px] font-medium text-clinic-navy mb-2">
                  {facility.title}
                </h3>
                <p className="text-[13px] text-clinic-gray font-light leading-relaxed">
                  {facility.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency admission */}
      <section className="py-10 md:py-12 bg-nursing-warm border-b border-border/80">
        <div className="container-wide">
          <div className="grid lg:grid-cols-[1fr_auto] gap-6 lg:gap-10 items-center rounded-sm border border-clinic-navy/10 bg-white/60 p-6 md:p-8 shadow-sm shadow-clinic-navy/[0.03]">
            <div className="flex flex-col gap-3">
              <p className="eyebrow">Emergency admission</p>
              <p className="font-display text-[1.25rem] md:text-[1.375rem] font-medium text-clinic-navy leading-snug max-w-2xl">
                {EMERGENCY_ADMISSION}
              </p>
              <p className="text-[14px] font-medium text-clinic-navy/85 max-w-2xl">
                {INDOOR_ADMISSION_HIGHLIGHT}
              </p>
              <p className="text-[14px] font-medium text-clinic-navy/85 max-w-2xl">
                {EMERGENCY_ADMISSION_SUPPORT}
              </p>
            </div>
            <a
              href={`tel:${CLINIC.contact.nursingHomeTel}`}
              className="inline-flex items-center justify-center gap-2 text-[14px] font-medium text-white bg-clinic-navy px-6 py-3.5 hover:bg-clinic-navy/90 transition-colors shrink-0 w-full lg:w-auto"
            >
              <Phone className="w-4 h-4 stroke-[1.5] shrink-0" />
              <span className="text-left leading-snug">
                <span className="block">Nursing Home</span>
                <span className="block text-[12px] font-light opacity-90">
                  {CLINIC.contact.nursingHome}
                </span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Pharmacy */}
      <section className="py-10 md:py-12 bg-background border-b border-border/80">
        <div className="container-wide max-w-2xl">
          <p className="eyebrow mb-3">On-site pharmacy</p>
          <h2 className="font-display text-[1.375rem] md:text-[1.5rem] font-medium text-clinic-navy mb-2">
            Medicare Pharmacy
          </h2>
          <p className="text-[14px] text-clinic-gray font-light leading-relaxed">
            {PHARMACY_NOTE}
          </p>
          <p className="flex items-center gap-2 text-[13px] text-clinic-navy mt-3 font-light">
            <Clock className="w-3.5 h-3.5 stroke-[1.5] text-clinic-gray" />
            9 AM – 8 PM
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-11 bg-home-contact">
        <div className="container-wide flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="font-display text-[1.25rem] font-medium text-clinic-navy">
              Nursing Home — open 24 hours
            </p>
            <p className="text-[13px] text-clinic-gray font-light mt-1">
              {CLINIC.address.full}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 shrink-0">
            <a
              href={`tel:${CLINIC.contact.nursingHomeTel}`}
              className="inline-flex items-center justify-center gap-2 text-[13px] font-medium text-white bg-clinic-navy px-5 py-3 hover:bg-clinic-navy/90 transition-colors"
            >
              <Phone className="w-4 h-4 stroke-[1.5] shrink-0" />
              <span className="text-left leading-snug">
                <span className="block">Nursing Home</span>
                <span className="block text-[11px] font-light opacity-90">
                  {CLINIC.contact.nursingHome}
                </span>
              </span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 text-[13px] font-medium text-clinic-navy border border-border/80 bg-white/70 px-5 py-3 hover:border-clinic-navy/30 transition-colors group"
            >
              Contact us
              <ArrowRight className="w-4 h-4 stroke-[1.5] group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
