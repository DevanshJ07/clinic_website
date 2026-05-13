import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Cross,
} from "lucide-react";
import { CLINIC, NAV_LINKS } from "@/lib/data";

const FACILITY_LINKS = [
  { label: "General Medicine", href: "/facilities#general-medicine" },
  { label: "Pathology & Lab", href: "/facilities#pathology" },
  { label: "Digital X-Ray & ECG", href: "/facilities#radiology" },
  { label: "Gynaecology", href: "/facilities#gynaecology" },
  { label: "Paediatrics", href: "/facilities#paediatrics" },
  { label: "Orthopaedics", href: "/facilities#orthopaedics" },
  { label: "ENT Clinic", href: "/facilities#ent" },
  { label: "Dental Care", href: "/facilities#dental" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-clinic-navy text-white">
      {/* Main footer grid */}
      <div className="container-clinic py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1 — Brand */}
          <div className="lg:col-span-1 flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-2.5 group w-fit">
              <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
                <Cross className="w-4.5 h-4.5 text-white fill-white" strokeWidth={0} />
              </span>
              <span className="flex flex-col leading-tight">
                <span
                  className="text-xl font-bold text-white"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Medicare
                </span>
                <span className="text-[10px] font-medium tracking-widest uppercase text-white/50">
                  Clinic &amp; Diagnostic Centre
                </span>
              </span>
            </Link>

            <p className="text-sm text-white/65 leading-relaxed max-w-[260px]">
              Trusted healthcare for over 37 years. One of Howrah&apos;s first
              all-under-one-roof clinics — serving families with compassion
              since 1987.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={`https://wa.me/${CLINIC.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 hover:bg-clinic-green/80 text-white transition-colors duration-150"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`tel:${CLINIC.contact.phone1.replace(/\s/g, "")}`}
                aria-label="Phone"
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 hover:bg-clinic-blue/80 text-white transition-colors duration-150"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${CLINIC.contact.email}`}
                aria-label="Email"
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 hover:bg-clinic-blue/80 text-white transition-colors duration-150"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors duration-150 inline-flex items-center gap-1.5 group"
                  >
                    <span className="block w-1 h-1 rounded-full bg-clinic-blue-light group-hover:bg-clinic-green transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Specialties */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50">
              Our Specialties
            </h3>
            <ul className="flex flex-col gap-2">
              {FACILITY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors duration-150 inline-flex items-center gap-1.5 group"
                  >
                    <span className="block w-1 h-1 rounded-full bg-clinic-blue-light group-hover:bg-clinic-green transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact & Timings */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50">
              Contact &amp; Timings
            </h3>

            <ul className="flex flex-col gap-3.5">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-clinic-blue-light shrink-0 mt-0.5" />
                <span className="text-sm text-white/70 leading-relaxed">
                  {CLINIC.address.full}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-clinic-blue-light shrink-0" />
                <div className="flex flex-col gap-0.5">
                  <a
                    href={`tel:${CLINIC.contact.phone1.replace(/\s/g, "")}`}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {CLINIC.contact.phone1}
                  </a>
                  <a
                    href={`tel:${CLINIC.contact.phone2.replace(/\s/g, "")}`}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {CLINIC.contact.phone2}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-clinic-blue-light shrink-0" />
                <a
                  href={`mailto:${CLINIC.contact.email}`}
                  className="text-sm text-white/70 hover:text-white transition-colors break-all"
                >
                  {CLINIC.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-clinic-blue-light shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1 text-sm text-white/70">
                  <div>
                    <span className="font-medium text-white/90">
                      {CLINIC.timings.weekdays}:
                    </span>
                    <br />
                    {CLINIC.timings.weekdaysHours}
                  </div>
                  <div>
                    <span className="font-medium text-white/90">
                      {CLINIC.timings.sunday}:
                    </span>
                    <br />
                    {CLINIC.timings.sundayHours}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-clinic py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40 text-center sm:text-left">
            &copy; {currentYear} Medicare Clinic &amp; Diagnostic Centre,
            Howrah. All rights reserved.
          </p>
          <p className="text-xs text-white/30 text-center sm:text-right">
            Est. 1987 &mdash; Serving Howrah for {currentYear - 1987}+ years
          </p>
        </div>
      </div>
    </footer>
  );
}
