import { Metadata } from "next";
import Link from "next/link";
import { MapPin, Clock, Mail, ExternalLink, Bus, Car, Navigation } from "lucide-react";
import ContactPhoneList from "@/components/shared/ContactPhoneList";
import { CLINIC } from "@/lib/data";

export const metadata: Metadata = {
  title: "Find Us",
  description:
    "Find Medicare Clinic & Diagnostic Centre at 138, Grand Trunk Road South, Shibpur, Howrah. Directions, map, timings, and contact details.",
};

const TRANSPORT = [
  {
    icon: Bus,
    mode: "By Bus",
    desc: "Multiple CSTC and private buses on Grand Trunk Road stop near Shibpur. Alight at Shibpur Crossing — the clinic is a short walk from the main road.",
  },
  {
    icon: Car,
    mode: "By Car / Auto",
    desc: "From Howrah Station, take Grand Trunk Road towards Shibpur. Medicare is on G.T. Road South, Shibpur — easily accessible by auto-rickshaw or taxi.",
  },
  {
    icon: Navigation,
    mode: "By Metro / Rail",
    desc: "Nearest station: Howrah (Indian Railways). From the station, auto-rickshaws and taxis to Shibpur take approximately 10–15 minutes.",
  },
];

export default function FindUsPage() {
  return (
    <>
      <section className="py-12 md:py-16 bg-home-hero bg-institutional-pattern border-b border-border/80">
        <div className="container-wide">
          <p className="eyebrow mb-4">Location</p>
          <h1 className="font-display text-[2rem] md:text-[2.5rem] font-medium text-clinic-navy leading-tight mb-3">
            Find us in Shibpur, Howrah
          </h1>
          <p className="text-[15px] text-clinic-gray font-light max-w-xl">
            Conveniently located on Grand Trunk Road South with easy access by
            road, bus, and auto-rickshaw.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-16 bg-home-about border-b border-border/80">
        <div className="container-wide">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
            <div className="lg:col-span-3 flex flex-col gap-5">
              <div>
                <p className="eyebrow mb-3">Map</p>
                <h2 className="font-display text-[1.5rem] md:text-[1.75rem] font-medium text-clinic-navy">
                  Our location
                </h2>
              </div>

              <div className="relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-sm border border-border/70 bg-clinic-blue-50 shadow-sm shadow-clinic-navy/[0.04]">
                <iframe
                  title="Medicare Clinic location on Google Maps"
                  src={CLINIC.maps.embed}
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              <a
                href={CLINIC.maps.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[14px] font-medium text-clinic-navy hover:text-clinic-blue transition-colors w-fit"
              >
                Open in Google Maps
                <ExternalLink className="w-4 h-4 stroke-[1.5]" />
              </a>

              <div className="rounded-sm border border-border/60 bg-white/60 p-5 md:p-6">
                <p className="text-[11px] uppercase tracking-[0.16em] text-clinic-gray mb-2">
                  Nearby landmark
                </p>
                <p className="text-[14px] text-clinic-gray font-light leading-relaxed">
                  {CLINIC.landmark}
                </p>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col gap-8">
              <div>
                <p className="eyebrow mb-3">Visit</p>
                <h2 className="font-display text-[1.5rem] md:text-[1.75rem] font-medium text-clinic-navy">
                  Address &amp; contact
                </h2>
              </div>

              <div className="rounded-sm border border-border/60 bg-white/60 backdrop-blur-[2px] p-7 md:p-8 shadow-sm shadow-clinic-navy/[0.03] flex flex-col gap-6">
                <div className="flex gap-3 items-start">
                  <MapPin className="w-4 h-4 text-clinic-gray shrink-0 mt-1 stroke-[1.5]" />
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.16em] text-clinic-gray mb-2">
                      Address
                    </p>
                    <address className="not-italic text-[15px] text-clinic-navy leading-[1.75] font-light">
                      {CLINIC.address.street}
                      <br />
                      {CLINIC.address.area}, {CLINIC.address.city}
                      <br />
                      {CLINIC.address.state} {CLINIC.address.pin}
                    </address>
                  </div>
                </div>

                <div className="h-px bg-border/80" />

                <ContactPhoneList itemClassName="py-4 first:pt-0 last:pb-0" />

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
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.16em] text-clinic-gray mb-3">
                      Hours
                    </p>
                    <dl className="flex flex-col gap-3 text-[14px]">
                      <div>
                        <dt className="font-medium text-clinic-navy">
                          {CLINIC.timings.diagnosticOpd.label}
                        </dt>
                        <dd className="text-clinic-gray font-light mt-0.5">
                          Mon–Sat, 8 AM – 8 PM · Sun, 8 AM – 4 PM
                        </dd>
                      </div>
                      <div>
                        <dt className="font-medium text-clinic-navy">
                          {CLINIC.timings.nursingHome.label}
                        </dt>
                        <dd className="text-clinic-navy font-medium mt-0.5">
                          Open 24 Hours
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center text-[14px] font-medium text-white bg-clinic-navy px-6 py-3.5 hover:bg-clinic-navy/90 transition-colors"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16 bg-home-facilities border-b border-border/80">
        <div className="container-wide">
          <div className="mb-10 md:mb-12 max-w-2xl">
            <p className="eyebrow mb-3">Directions</p>
            <h2 className="font-display text-[1.5rem] md:text-[1.75rem] font-medium text-clinic-navy mb-2">
              How to reach us
            </h2>
            <p className="text-[14px] text-clinic-gray font-light">
              Medicare is easily accessible from all parts of Howrah and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/80 border border-border/60 rounded-sm overflow-hidden">
            {TRANSPORT.map((t) => (
              <div
                key={t.mode}
                className="bg-white/80 backdrop-blur-[2px] p-7 md:p-8 flex flex-col gap-4"
              >
                <t.icon className="w-5 h-5 text-clinic-navy/70 stroke-[1.5]" />
                <div>
                  <h3 className="font-display text-[16px] font-medium text-clinic-navy mb-2">
                    {t.mode}
                  </h3>
                  <p className="text-[13px] text-clinic-gray font-light leading-relaxed">
                    {t.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
