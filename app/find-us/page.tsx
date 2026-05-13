import { Metadata } from "next";
import { MapPin, Phone, Clock, Mail, Navigation, Bus, Car } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import SectionHeading from "@/components/shared/SectionHeading";
import PageHero from "@/components/shared/PageHero";
import { CLINIC } from "@/lib/data";

export const metadata: Metadata = {
  title: "Find Us",
  description:
    "Find Medicare Clinic & Diagnostic Centre in Shibpur, Howrah. Address, directions, timings, nearby landmarks, and contact details.",
};

const TRANSPORT = [
  {
    icon: Bus,
    mode: "By Bus",
    desc: "Multiple CSTC & private buses on G.T. Road stop near Shibpur Police Station. Get off at Shibpur Crossing — the clinic is a 2-minute walk.",
  },
  {
    icon: Car,
    mode: "By Car / Auto",
    desc: "From Howrah Station, take G.T. Road towards Shibpur. Turn onto Rabindra Sarani. Clinic is on the left, 200m from Shibpur Police Station.",
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
      <PageHero
        eyebrow="Location"
        title="Find Us in Shibpur, Howrah"
        subtitle="Conveniently located in the heart of Shibpur with easy access by road, bus, and auto-rickshaw."
      />

      {/* ── Map + Info ────────────────────────────────────────── */}
      <section className="section-py bg-white">
        <div className="container-clinic">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
            {/* Map placeholder — left (wider) */}
            <div className="lg:col-span-3 flex flex-col gap-4">
              <h2
                className="text-lg font-bold text-clinic-navy"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Our Location
              </h2>
              {/* Map embed container */}
              <div className="w-full aspect-[4/3] md:aspect-[16/9] rounded-2xl overflow-hidden border border-border shadow-md bg-clinic-blue-50 flex items-center justify-center">
                {/* Replace the div below with an actual <iframe> embed in production */}
                <div className="flex flex-col items-center gap-3 text-center p-8">
                  <div className="w-14 h-14 rounded-full bg-clinic-blue/10 flex items-center justify-center">
                    <MapPin className="w-7 h-7 text-clinic-blue" />
                  </div>
                  <p className="text-sm font-semibold text-clinic-navy">
                    Google Maps Embed
                  </p>
                  <p className="text-xs text-clinic-gray max-w-xs">
                    Replace this block with a Google Maps{" "}
                    <code className="bg-muted px-1 py-0.5 rounded text-[11px]">
                      &lt;iframe&gt;
                    </code>{" "}
                    embed for{" "}
                    <span className="font-medium">
                      12, Rabindra Sarani, Shibpur, Howrah
                    </span>
                    .
                  </p>
                  <a
                    href="https://maps.google.com/?q=Shibpur+Howrah+West+Bengal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-clinic-blue hover:underline mt-1"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>

              {/* Nearby landmarks */}
              <div className="p-5 rounded-xl bg-clinic-blue-50 border border-border">
                <p className="text-sm font-semibold text-clinic-navy mb-1">
                  Nearby Landmark
                </p>
                <p className="text-sm text-clinic-gray leading-relaxed">
                  {CLINIC.landmark}
                </p>
              </div>
            </div>

            {/* Info panel — right */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <SectionHeading
                eyebrow="Contact & Hours"
                title="Visit Us"
                subtitle=""
              />

              <div className="flex flex-col gap-5">
                {/* Address */}
                <div className="flex gap-3 items-start">
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-clinic-blue-50 flex items-center justify-center mt-0.5">
                    <MapPin className="w-4 h-4 text-clinic-blue" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <p className="text-xs font-semibold uppercase tracking-widest text-clinic-gray mb-1">
                      Address
                    </p>
                    <p className="text-sm text-clinic-navy leading-relaxed">
                      {CLINIC.address.street}
                      <br />
                      {CLINIC.address.city} – {CLINIC.address.pin}
                      <br />
                      {CLINIC.address.state}, {CLINIC.address.country}
                    </p>
                  </div>
                </div>

                <Separator />

                {/* Phone */}
                <div className="flex gap-3 items-start">
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-clinic-blue-50 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-clinic-blue" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <p className="text-xs font-semibold uppercase tracking-widest text-clinic-gray mb-1">
                      Phone
                    </p>
                    <a
                      href={`tel:${CLINIC.contact.phone1.replace(/\s/g, "")}`}
                      className="text-sm text-clinic-navy hover:text-clinic-blue transition-colors font-medium"
                    >
                      {CLINIC.contact.phone1}
                    </a>
                    <a
                      href={`tel:${CLINIC.contact.phone2.replace(/\s/g, "")}`}
                      className="text-sm text-clinic-navy hover:text-clinic-blue transition-colors font-medium"
                    >
                      {CLINIC.contact.phone2}
                    </a>
                  </div>
                </div>

                <Separator />

                {/* Email */}
                <div className="flex gap-3 items-start">
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-clinic-blue-50 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-clinic-blue" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <p className="text-xs font-semibold uppercase tracking-widest text-clinic-gray mb-1">
                      Email
                    </p>
                    <a
                      href={`mailto:${CLINIC.contact.email}`}
                      className="text-sm text-clinic-navy hover:text-clinic-blue transition-colors"
                    >
                      {CLINIC.contact.email}
                    </a>
                  </div>
                </div>

                <Separator />

                {/* Timings */}
                <div className="flex gap-3 items-start">
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-clinic-blue-50 flex items-center justify-center mt-0.5">
                    <Clock className="w-4 h-4 text-clinic-blue" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-xs font-semibold uppercase tracking-widest text-clinic-gray mb-1">
                      Clinic Hours
                    </p>
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-sm text-clinic-navy font-medium">
                          {CLINIC.timings.weekdays}
                        </span>
                        <span className="text-sm text-clinic-gray">
                          {CLINIC.timings.weekdaysHours}
                        </span>
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-sm text-clinic-navy font-medium">
                          {CLINIC.timings.sunday}
                        </span>
                        <span className="text-sm text-clinic-gray">
                          {CLINIC.timings.sundayHours}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-clinic-green font-medium mt-1">
                      ● {CLINIC.timings.emergency}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How to Reach Us ───────────────────────────────────── */}
      <section className="section-py bg-clinic-blue-50">
        <div className="container-clinic">
          <SectionHeading
            eyebrow="Directions"
            title="How to Reach Us"
            subtitle="Medicare is easily accessible from all parts of Howrah and beyond."
            centered
            className="mb-10"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TRANSPORT.map((t) => (
              <div
                key={t.mode}
                className="flex flex-col gap-4 p-6 rounded-2xl bg-white border border-border hover:shadow-md hover:border-clinic-blue/20 transition-all duration-200"
              >
                <div className="w-11 h-11 rounded-xl bg-clinic-blue-50 flex items-center justify-center">
                  <t.icon className="w-5 h-5 text-clinic-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-clinic-navy text-sm mb-1.5">
                    {t.mode}
                  </h3>
                  <p className="text-xs text-clinic-gray leading-relaxed">
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
