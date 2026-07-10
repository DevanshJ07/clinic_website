import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Clock, Mail } from "lucide-react";
import { CLINIC, CONTACT_LINES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Medicare Clinic & Diagnostic Centre, Howrah. 24×7 Helpline 9331076661, Diagnostic Centre & OPD, and Nursing Home numbers.",
};

export default function ContactPage() {
  return (
    <>
      <section className="py-12 md:py-16 bg-background border-b border-border">
        <div className="container-wide">
          <p className="eyebrow mb-4">Contact</p>
          <h1 className="font-display text-[2rem] md:text-[2.5rem] font-medium text-clinic-navy leading-tight mb-3">
            Get in touch
          </h1>
          <p className="text-[15px] text-clinic-gray font-normal max-w-lg">
            Call Medicare directly for appointments, admissions, and enquiries.
            We are here to help during clinic hours and around the clock for
            emergencies.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-12 bg-clinic-paper border-b border-border">
        <div className="container-wide">
          <p className="eyebrow mb-5">Phone</p>
          <div className="flex max-w-3xl flex-col gap-px bg-border">
            {CONTACT_LINES.map((line) => (
              <a
                key={line.id}
                href={`tel:${line.tel}`}
                className="flex flex-col gap-1.5 bg-background p-6 transition-colors hover:bg-clinic-warm/50 md:p-8"
              >
                <p className="text-[11px] uppercase tracking-[0.16em] text-clinic-gray">
                  {line.label}
                </p>
                <p
                  className={
                    line.id === "nursing-home"
                      ? "font-display text-lg font-medium leading-snug tracking-tight text-clinic-navy md:text-xl"
                      : "contact-phone-link"
                  }
                >
                  {line.phone}
                </p>
                <p className="text-[13px] font-normal text-clinic-gray">
                  {line.detail}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-background">
        <div className="container-wide">
          <p className="eyebrow mb-5">Clinic information</p>
          <div className="grid gap-6 md:grid-cols-2 lg:max-w-4xl lg:gap-8">
            <div className="flex gap-3 rounded-sm border border-border/60 bg-white/60 p-6 shadow-sm shadow-clinic-navy/[0.02]">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-clinic-gray stroke-[1.5]" />
              <div>
                <p className="mb-2 text-[11px] uppercase tracking-[0.16em] text-clinic-gray">
                  Address
                </p>
                <p className="text-[14px] font-normal leading-relaxed text-clinic-navy">
                  {CLINIC.address.street}
                  <br />
                  {CLINIC.address.area}, {CLINIC.address.city}
                  <br />
                  {CLINIC.address.state} {CLINIC.address.pin}
                </p>
                <Link
                  href="/find-us"
                  className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-medium text-clinic-navy transition-colors hover:text-clinic-blue"
                >
                  Find us on Google Maps
                  <ArrowRight className="h-3.5 w-3.5 stroke-[1.5]" />
                </Link>
              </div>
            </div>

            <div className="flex gap-3 rounded-sm border border-border/60 bg-white/60 p-6 shadow-sm shadow-clinic-navy/[0.02]">
              <Mail className="mt-1 h-4 w-4 shrink-0 text-clinic-gray stroke-[1.5]" />
              <div>
                <p className="mb-2 text-[11px] uppercase tracking-[0.16em] text-clinic-gray">
                  Email
                </p>
                <a
                  href={`mailto:${CLINIC.contact.email}`}
                  className="text-[14px] font-medium text-clinic-navy transition-colors hover:text-clinic-blue"
                >
                  {CLINIC.contact.email}
                </a>
              </div>
            </div>

            <div className="flex gap-3 rounded-sm border border-border/60 bg-white/60 p-6 shadow-sm shadow-clinic-navy/[0.02] md:col-span-2">
              <Clock className="mt-1 h-4 w-4 shrink-0 text-clinic-gray stroke-[1.5]" />
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-[14px] font-medium text-clinic-navy">
                    {CLINIC.timings.diagnosticOpd.label}
                  </p>
                  <p className="mt-1 text-[13px] font-normal text-clinic-gray">
                    Mon–Sat, 8 AM – 8 PM
                    <br />
                    Sun, 8 AM – 4 PM
                  </p>
                </div>
                <div>
                  <p className="text-[14px] font-medium text-clinic-navy">
                    {CLINIC.timings.nursingHome.label}
                  </p>
                  <p className="mt-1 text-[13px] font-normal text-clinic-gray">
                    Open 24 Hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
