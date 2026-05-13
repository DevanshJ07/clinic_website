import { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import SectionHeading from "@/components/shared/SectionHeading";
import PageHero from "@/components/shared/PageHero";
import ContactForm from "@/components/shared/ContactForm";
import { CLINIC } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Medicare Clinic & Diagnostic Centre, Howrah. Call us, WhatsApp us, or fill in the enquiry form. We're here to help.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="We're Here to Help"
        subtitle="Have a question, need to book an appointment, or want to know more about our services? Reach out — we'd love to hear from you."
      />

      {/* ── Quick Contact Strips ───────────────────────────────── */}
      <section className="py-8 bg-clinic-blue-50 border-b border-border">
        <div className="container-clinic">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a
              href={`tel:${CLINIC.contact.phone2.replace(/\s/g, "")}`}
              className="group flex items-center gap-3 p-4 rounded-xl bg-white border border-border hover:border-clinic-blue/30 hover:shadow-md transition-all duration-200"
            >
              <div className="shrink-0 w-10 h-10 rounded-lg bg-clinic-blue-50 flex items-center justify-center group-hover:bg-clinic-blue transition-colors duration-200">
                <Phone className="w-4.5 h-4.5 text-clinic-blue group-hover:text-white transition-colors duration-200" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-clinic-gray font-semibold">
                  Call Us
                </p>
                <p className="text-sm font-semibold text-clinic-navy">
                  {CLINIC.contact.phone2}
                </p>
              </div>
            </a>

            <a
              href={`https://wa.me/${CLINIC.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 p-4 rounded-xl bg-white border border-border hover:border-clinic-green/30 hover:shadow-md transition-all duration-200"
            >
              <div className="shrink-0 w-10 h-10 rounded-lg bg-accent flex items-center justify-center group-hover:bg-clinic-green transition-colors duration-200">
                <MessageCircle className="w-4.5 h-4.5 text-clinic-green group-hover:text-white transition-colors duration-200" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-clinic-gray font-semibold">
                  WhatsApp
                </p>
                <p className="text-sm font-semibold text-clinic-navy">
                  Book Appointment
                </p>
              </div>
            </a>

            <a
              href={`mailto:${CLINIC.contact.email}`}
              className="group flex items-center gap-3 p-4 rounded-xl bg-white border border-border hover:border-clinic-blue/30 hover:shadow-md transition-all duration-200"
            >
              <div className="shrink-0 w-10 h-10 rounded-lg bg-clinic-blue-50 flex items-center justify-center group-hover:bg-clinic-blue transition-colors duration-200">
                <Mail className="w-4.5 h-4.5 text-clinic-blue group-hover:text-white transition-colors duration-200" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-clinic-gray font-semibold">
                  Email
                </p>
                <p className="text-sm font-semibold text-clinic-navy truncate">
                  {CLINIC.contact.email}
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ── Form + Info ───────────────────────────────────────── */}
      <section className="section-py bg-white">
        <div className="container-clinic">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3 flex flex-col gap-6">
              <SectionHeading
                eyebrow="Enquiry"
                title="Send Us a Message"
                subtitle="Fill in the form below and we'll get back to you as soon as possible."
              />
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <SectionHeading
                eyebrow="Details"
                title="Clinic Information"
                subtitle=""
              />

              <div className="flex flex-col gap-5">
                <div className="flex gap-3 items-start">
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-clinic-blue-50 flex items-center justify-center mt-0.5">
                    <MapPin className="w-4 h-4 text-clinic-blue" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-clinic-gray mb-1">
                      Address
                    </p>
                    <p className="text-sm text-clinic-navy leading-relaxed">
                      {CLINIC.address.street}
                      <br />
                      {CLINIC.address.city} – {CLINIC.address.pin}
                      <br />
                      {CLINIC.address.state}
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="flex gap-3 items-start">
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-clinic-blue-50 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-clinic-blue" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-clinic-gray mb-1">
                      Phone Numbers
                    </p>
                    <a
                      href={`tel:${CLINIC.contact.phone1.replace(/\s/g, "")}`}
                      className="block text-sm text-clinic-navy hover:text-clinic-blue transition-colors font-medium"
                    >
                      {CLINIC.contact.phone1}
                    </a>
                    <a
                      href={`tel:${CLINIC.contact.phone2.replace(/\s/g, "")}`}
                      className="block text-sm text-clinic-navy hover:text-clinic-blue transition-colors font-medium mt-0.5"
                    >
                      {CLINIC.contact.phone2}
                    </a>
                  </div>
                </div>

                <Separator />

                <div className="flex gap-3 items-start">
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-clinic-blue-50 flex items-center justify-center mt-0.5">
                    <Clock className="w-4 h-4 text-clinic-blue" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-xs font-semibold uppercase tracking-widest text-clinic-gray mb-1">
                      Clinic Hours
                    </p>
                    <div className="flex flex-col gap-2.5">
                      <div>
                        <p className="text-sm font-medium text-clinic-navy">
                          {CLINIC.timings.weekdays}
                        </p>
                        <p className="text-sm text-clinic-gray">
                          {CLINIC.timings.weekdaysHours}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-clinic-navy">
                          {CLINIC.timings.sunday}
                        </p>
                        <p className="text-sm text-clinic-gray">
                          {CLINIC.timings.sundayHours}
                        </p>
                      </div>
                      <p className="text-xs text-clinic-green font-medium">
                        ● {CLINIC.timings.emergency}
                      </p>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* WhatsApp CTA */}
                <div className="flex flex-col gap-3 p-5 rounded-xl bg-accent border border-clinic-green/20">
                  <p className="text-sm font-semibold text-clinic-navy">
                    Prefer WhatsApp?
                  </p>
                  <p className="text-xs text-clinic-gray leading-relaxed">
                    For the fastest response, send us a message on WhatsApp.
                    Our team typically responds within a few hours during clinic
                    hours.
                  </p>
                  <Button
                    asChild
                    className="bg-clinic-green hover:bg-clinic-navy text-white h-10 rounded-xl text-sm font-semibold transition-colors duration-200 w-full"
                  >
                    <a
                      href={`https://wa.me/${CLINIC.contact.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Message on WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
