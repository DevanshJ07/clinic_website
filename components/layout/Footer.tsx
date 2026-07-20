import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import { CLINIC, NAV_LINKS, CONTACT_LINES } from "@/lib/data";
import { cn } from "@/lib/utils";
import CareersCallout from "@/components/shared/CareersCallout";

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
      <div className="container-wide py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="lg:col-span-1 flex flex-col gap-5">
            <Link href="/" className="group w-fit">
              <span className="font-display text-xl font-medium text-white">
                Medicare
              </span>
              <span className="block text-[10px] font-normal tracking-[0.18em] uppercase text-white/45 mt-1">
                Clinic &amp; Diagnostic Centre
              </span>
            </Link>

            <p className="text-sm text-white/60 leading-relaxed max-w-[260px] font-light">
              Pioneer in modern diagnostic facilities in Howrah since{" "}
              {CLINIC.established}. Comprehensive healthcare under one roof.
            </p>

            <a
              href={`mailto:${CLINIC.contact.email}`}
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              {CLINIC.contact.email}
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/45">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/65 hover:text-white transition-colors font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/45">
              Specialties
            </h3>
            <ul className="flex flex-col gap-2">
              {FACILITY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/65 hover:text-white transition-colors font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/45">
              Contact
            </h3>

            <ul className="flex flex-col gap-3.5">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-white/40 shrink-0 mt-0.5 stroke-[1.5]" />
                <span className="text-sm text-white/65 leading-relaxed font-light">
                  {CLINIC.address.full}
                </span>
              </li>
              {CONTACT_LINES.map((line) => (
                <li key={line.id} className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-white/40 shrink-0 mt-0.5 stroke-[1.5]" />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.14em] text-white/40 mb-0.5">
                      {line.label}
                    </p>
                    <a
                      href={`tel:${line.tel}`}
                      className={cn(
                        "text-sm text-white/65 hover:text-white transition-colors",
                        line.id === "nursing-home" && "leading-snug"
                      )}
                    >
                      {line.phone}
                    </a>
                  </div>
                </li>
              ))}
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-white/40 shrink-0 mt-0.5 stroke-[1.5]" />
                <div className="text-sm text-white/65 font-light leading-relaxed">
                  <p>OPD: Mon–Sat 8 AM – 8 PM, Sun 8 AM – 4 PM</p>
                  <p className="mt-1">Nursing Home: 24 Hours</p>
                </div>
              </li>
            </ul>

            <CareersCallout variant="compact" />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-wide py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/35 text-center sm:text-left font-light">
            &copy; {currentYear} Medicare Clinic &amp; Diagnostic Centre,
            Howrah.
          </p>
          <p className="text-xs text-white/35 text-center sm:text-right font-light">
            Est. {CLINIC.established}
          </p>
        </div>
      </div>
    </footer>
  );
}
