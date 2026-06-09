import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CERTIFICATIONS } from "@/lib/data";

export default function CertificationsSection() {
  return (
    <section className="bg-background border-b border-border">
      <div className="container-wide section-py-sm">
        <div className="grid lg:grid-cols-[minmax(0,340px)_1fr] gap-12 lg:gap-20 items-start mb-14 md:mb-16">
          <div>
            <p className="eyebrow mb-4">Accreditation</p>
            <h2 className="font-display text-[1.75rem] md:text-[2.25rem] font-medium text-clinic-navy leading-[1.2] mb-5">
              Independently verified standards of care
            </h2>
            <p className="text-[15px] text-clinic-gray font-light leading-[1.75]">
              Medicare maintains national accreditations across its nursing
              home and laboratory — not as marketing claims, but as ongoing,
              audited commitments to patient safety and diagnostic accuracy.
            </p>
          </div>
          <p className="text-[14px] text-clinic-gray/80 font-light leading-relaxed lg:pt-8 lg:max-w-md lg:ml-auto">
            These certifications require regular independent assessment. They
            represent the same standards trusted by hospitals and laboratories
            across India.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border">
          {CERTIFICATIONS.map((cert) => (
            <article
              key={cert.id}
              className="bg-background p-10 md:p-12 flex flex-col gap-8"
            >
              {/* Seal-style header */}
              <div className="flex items-start justify-between gap-6">
                <div className="flex flex-col gap-4">
                  <div className="w-16 h-16 rounded-full border-2 border-clinic-navy/15 flex items-center justify-center">
                    <span className="font-display text-lg font-medium text-clinic-navy tracking-wide">
                      {cert.acronym}
                    </span>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-clinic-gray mb-2">
                      {cert.appliesTo} Section
                    </p>
                    <h3 className="font-display text-xl font-medium text-clinic-navy leading-snug">
                      {cert.acronym} Certified
                    </h3>
                  </div>
                </div>
              </div>

              <div className="rule" />

              <div className="flex flex-col gap-3">
                <p className="text-[13px] font-medium text-clinic-navy/80 leading-snug">
                  {cert.fullName}
                </p>
                <p className="text-[15px] text-clinic-gray font-light leading-[1.75]">
                  {cert.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-between gap-4 pt-8 border-t border-border">
          <p className="text-[14px] text-clinic-gray font-light max-w-lg">
            Accreditation is renewed through periodic audits — ensuring our
            standards are maintained, not merely declared.
          </p>
          <Link
            href="/about"
            className="shrink-0 inline-flex items-center gap-2 text-[13px] font-medium text-clinic-navy hover:text-clinic-blue transition-colors group"
          >
            Learn about our history
            <ArrowRight className="w-3.5 h-3.5 stroke-[1.5] group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
