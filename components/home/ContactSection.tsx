import Link from "next/link";
import ContactPhoneList from "@/components/shared/ContactPhoneList";
import { CLINIC } from "@/lib/data";

export default function ContactSection() {
  const { diagnosticOpd, nursingHome } = CLINIC.timings;

  return (
    <section className="relative overflow-hidden py-16 md:py-20 bg-home-contact bg-institutional-pattern-soft home-ambient-glow-bl">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="rounded-sm border border-border/60 bg-white/60 backdrop-blur-[2px] p-8 md:p-10 shadow-sm shadow-clinic-navy/[0.03]">
            <p className="eyebrow mb-3">Visit</p>
            <h2 className="font-display text-[1.625rem] md:text-[2rem] font-medium text-clinic-navy mb-8">
              Timings
            </h2>

            <dl className="divide-y divide-border/80">
              <div className="py-5 grid grid-cols-[1fr_auto] gap-4 items-baseline">
                <dt className="text-[15px] font-medium text-clinic-navy">
                  {diagnosticOpd.label}
                </dt>
                <dd className="text-[14px] text-clinic-gray font-light text-right leading-relaxed">
                  Mon–Sat, 8 AM – 8 PM
                  <br />
                  Sun, 8 AM – 4 PM
                </dd>
              </div>
              <div className="py-5 grid grid-cols-[1fr_auto] gap-4 items-baseline">
                <dt className="text-[15px] font-medium text-clinic-navy">
                  {nursingHome.label}
                </dt>
                <dd className="text-[14px] text-clinic-navy font-medium text-right">
                  Open 24 Hours
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-sm border border-border/60 bg-white/60 backdrop-blur-[2px] p-8 md:p-10 shadow-sm shadow-clinic-navy/[0.03]">
            <p className="eyebrow mb-3">Contact</p>
            <h2 className="font-display text-[1.625rem] md:text-[2rem] font-medium text-clinic-navy mb-8">
              Phone numbers
            </h2>

            <ContactPhoneList />

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <a
                href={`mailto:${CLINIC.contact.email}`}
                className="text-center text-[14px] font-medium text-white bg-clinic-navy px-6 py-3.5 hover:bg-clinic-navy/90 transition-colors"
              >
                {CLINIC.contact.email}
              </a>
              <Link
                href="/contact"
                className="text-center text-[14px] font-medium text-clinic-navy border border-border/80 bg-white/70 px-6 py-3.5 hover:border-clinic-navy/30 transition-colors"
              >
                Contact form
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
