import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MapPin, Clock, Mail } from "lucide-react";
import ContactPhoneList from "@/components/shared/ContactPhoneList";
import ContactForm from "@/components/shared/ContactForm";
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
          <p className="text-[15px] text-clinic-gray font-light max-w-lg">
            For enquiries, call us directly or send a message using the form
            below.
          </p>
        </div>
      </section>

      <section className="py-10 bg-clinic-paper border-b border-border">
        <div className="container-wide">
          <div className="flex flex-col gap-px bg-border max-w-3xl">
            {CONTACT_LINES.map((line) => (
              <a
                key={line.id}
                href={`tel:${line.tel}`}
                className="bg-background flex flex-col gap-1.5 p-6 md:p-8 hover:bg-clinic-warm/50 transition-colors"
              >
                <p className="text-[11px] uppercase tracking-[0.16em] text-clinic-gray">
                  {line.label}
                </p>
                <p className="contact-phone-link">{line.phone}</p>
                <p className="text-[13px] text-clinic-gray font-light">
                  {line.detail}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-3 flex flex-col gap-6">
              <div>
                <p className="eyebrow mb-3">Enquiry</p>
                <h2 className="font-display text-[1.625rem] md:text-[2rem] font-medium text-clinic-navy">
                  Send a message
                </h2>
                <p className="text-[14px] text-clinic-gray font-light mt-2">
                  We will respond as soon as possible during clinic hours.
                </p>
              </div>
              <ContactForm />
            </div>

            <div className="lg:col-span-2 flex flex-col gap-8">
              <div>
                <p className="eyebrow mb-3">Details</p>
                <h2 className="font-display text-[1.625rem] md:text-[2rem] font-medium text-clinic-navy">
                  Clinic information
                </h2>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex gap-3 items-start">
                  <MapPin className="w-4 h-4 text-clinic-gray shrink-0 mt-1 stroke-[1.5]" />
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.16em] text-clinic-gray mb-1">
                      Address
                    </p>
                    <p className="text-[14px] text-clinic-navy leading-relaxed font-light">
                      {CLINIC.address.street}
                      <br />
                      {CLINIC.address.area}, {CLINIC.address.city}
                      <br />
                      {CLINIC.address.state} {CLINIC.address.pin}
                    </p>
                    <Link
                      href="/find-us"
                      className="inline-flex items-center gap-1.5 text-[13px] text-clinic-navy hover:text-clinic-blue transition-colors mt-3"
                    >
                      View on map
                      <ArrowRight className="w-3.5 h-3.5 stroke-[1.5]" />
                    </Link>
                  </div>
                </div>

                <div className="h-px bg-border/80" />

                <div className="flex gap-3 items-start">
                  <Mail className="w-4 h-4 text-clinic-gray shrink-0 mt-1 stroke-[1.5]" />
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.16em] text-clinic-gray mb-1">
                      Email
                    </p>
                    <a
                      href={`mailto:${CLINIC.contact.email}`}
                      className="text-[14px] text-clinic-navy hover:text-clinic-blue transition-colors"
                    >
                      {CLINIC.contact.email}
                    </a>
                  </div>
                </div>

                <div className="h-px bg-border/80" />

                <div className="flex gap-3 items-start">
                  <Clock className="w-4 h-4 text-clinic-gray shrink-0 mt-1 stroke-[1.5]" />
                  <div className="flex flex-col gap-3">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-clinic-gray mb-1">
                      Timings
                    </p>
                    <div>
                      <p className="text-[14px] font-medium text-clinic-navy">
                        {CLINIC.timings.diagnosticOpd.label}
                      </p>
                      <p className="text-[13px] text-clinic-gray font-light mt-0.5">
                        Mon–Sat, 8 AM – 8 PM · Sun, 8 AM – 4 PM
                      </p>
                    </div>
                    <div>
                      <p className="text-[14px] font-medium text-clinic-navy">
                        {CLINIC.timings.nursingHome.label}
                      </p>
                      <p className="text-[13px] text-clinic-gray font-light mt-0.5">
                        Open 24 Hours
                      </p>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-border/80" />

                <ContactPhoneList itemClassName="py-4 first:pt-0 last:pb-0" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
