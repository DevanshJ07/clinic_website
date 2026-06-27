import Link from "next/link";
import { Metadata } from "next";
import { Phone, ArrowRight } from "lucide-react";
import DoctorsDirectory from "@/components/doctors/DoctorsDirectory";
import { DOCTORS_INTRO, DOCTORS_AVAILABILITY_NOTE } from "@/lib/doctors";
import { CLINIC } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Doctors",
  description:
    "Meet the specialist doctors at Medicare, Howrah — qualified surgeons, orthopaedic specialists, cardiologists, gynaecologists, and more.",
};

export default function DoctorsPage() {
  return (
    <>
      <section className="py-10 md:py-12 bg-home-hero bg-institutional-pattern border-b border-border/80">
        <div className="container-wide">
          <p className="eyebrow mb-3">Our specialists</p>
          <h1 className="font-display text-[2rem] md:text-[2.5rem] font-semibold text-clinic-navy leading-tight mb-3">
            Doctors at Medicare
          </h1>
          <p className="text-[15px] text-clinic-gray font-light leading-relaxed max-w-3xl">
            {DOCTORS_INTRO}
          </p>
        </div>
      </section>

      <section className="py-10 md:py-12 bg-background border-b border-border/80">
        <div className="container-wide">
          <DoctorsDirectory />
        </div>
      </section>

      <section className="py-8 bg-nursing-warm border-b border-border/80">
        <div className="container-wide">
          <p className="text-[13px] text-clinic-gray font-light text-center max-w-2xl mx-auto border-l-2 border-clinic-navy/15 pl-4 md:border-l-0 md:pl-0">
            <span className="font-medium text-clinic-navy">Please note: </span>
            {DOCTORS_AVAILABILITY_NOTE} Call{" "}
            <a
              href="tel:03340073713"
              className="text-clinic-navy hover:text-clinic-blue transition-colors"
            >
              {CLINIC.contact.diagnosticOpd}
            </a>{" "}
            to confirm.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-11 bg-home-contact">
        <div className="container-wide flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="font-display text-[1.25rem] font-medium text-clinic-navy">
              Book an appointment
            </p>
            <p className="text-[13px] text-clinic-gray font-light mt-1">
              Medicare Diagnostic Centre &amp; OPD · {CLINIC.contact.diagnosticOpd}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 shrink-0">
            <a
              href="tel:03340073713"
              className="btn-book-appointment px-5 py-3"
            >
              <Phone className="w-4 h-4 stroke-[1.5]" />
              Book Appointment
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 text-[13px] font-medium text-clinic-navy border border-border/80 bg-white/70 px-5 py-3 hover:border-clinic-navy/30 transition-colors group"
            >
              Contact page
              <ArrowRight className="w-4 h-4 stroke-[1.5] group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
