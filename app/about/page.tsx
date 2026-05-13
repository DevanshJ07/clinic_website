import { Metadata } from "next";
import Link from "next/link";
import {
  Award,
  HeartHandshake,
  ShieldCheck,
  Users,
  Building2,
  ChevronRight,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/shared/SectionHeading";
import PageHero from "@/components/shared/PageHero";
import { CLINIC } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Medicare's 37+ year legacy of trusted healthcare in Howrah. Our history, mission, values, and commitment to the community.",
};

const MILESTONES = [
  {
    year: "1987",
    title: "Founded",
    desc: "Medicare was established in Shibpur, Howrah — one of the first multi-specialty, all-under-one-roof clinics in the district.",
  },
  {
    year: "1995",
    title: "Pathology Lab Opened",
    desc: "We launched our in-house diagnostic laboratory, enabling same-day test reports for patients and reducing referral delays.",
  },
  {
    year: "2002",
    title: "Digital Radiology",
    desc: "Upgraded to digital X-ray technology, improving image quality and reducing patient radiation exposure significantly.",
  },
  {
    year: "2010",
    title: "Specialist Expansion",
    desc: "Added dedicated clinics for orthopaedics, ENT, and dental care, growing to serve a wider range of patient needs.",
  },
  {
    year: "2018",
    title: "30 Years of Service",
    desc: "Celebrated three decades of uninterrupted service to the Howrah community, having served over 35,000 patients.",
  },
  {
    year: "2024+",
    title: "Growing Forward",
    desc: "Continuing to modernise facilities while preserving the warmth and trust that has defined Medicare for generations.",
  },
];

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    desc: "Honest, transparent medical advice — always in the best interest of the patient, never influenced by anything else.",
  },
  {
    icon: HeartHandshake,
    title: "Compassion",
    desc: "Every patient is treated with warmth, dignity, and empathy. Healthcare that feels human, not clinical.",
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "Continuous improvement in clinical standards, diagnostics, and patient experience to deliver the best possible care.",
  },
  {
    icon: Users,
    title: "Community",
    desc: "We are rooted in Howrah. Giving back to and strengthening our community has always been central to our mission.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="37+ Years of Trusted
Healthcare in Howrah"
        subtitle="From a modest single-room clinic in 1987 to one of Howrah's most trusted all-under-one-roof centres — a story built on care, legacy, and community trust."
      />

      {/* ── Story Section ─────────────────────────────────────── */}
      <section className="section-py bg-white">
        <div className="container-clinic">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="flex flex-col gap-6">
              <SectionHeading
                eyebrow="Our History"
                title="Where It All Began"
                subtitle=""
              />
              <div className="flex flex-col gap-4 text-sm text-clinic-gray leading-relaxed">
                <p>
                  In 1987, a single physician with a vision set up Medicare in a
                  modest clinic on Rabindra Sarani, Shibpur. The goal was
                  simple: provide the people of Howrah with accessible,
                  affordable, and high-quality medical care without the need to
                  travel to distant hospitals.
                </p>
                <p>
                  As the community grew, so did Medicare. Specialist doctors
                  joined the team, diagnostic services were brought in-house,
                  and the clinic steadily transformed into one of the first
                  truly all-under-one-roof centres in the Howrah district.
                </p>
                <p>
                  Today, Medicare is home to 15+ specialist physicians across 8
                  disciplines, a modern pathology lab, digital radiology, and a
                  team committed to delivering the same quality of care that has
                  earned the trust of over 50,000 patients across generations.
                </p>
              </div>
            </div>

            {/* Visual block */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: Building2,
                  label: "All-Under-One-Roof",
                  sub: "Since 1987",
                  bg: "bg-clinic-blue-50",
                  iconColor: "text-clinic-blue",
                },
                {
                  icon: Users,
                  label: "50,000+ Patients",
                  sub: "Families served",
                  bg: "bg-accent",
                  iconColor: "text-clinic-green",
                },
                {
                  icon: Award,
                  label: "37+ Years",
                  sub: "Of continuous service",
                  bg: "bg-clinic-blue-50",
                  iconColor: "text-clinic-blue",
                },
                {
                  icon: ShieldCheck,
                  label: "15+ Specialists",
                  sub: "8 specialties",
                  bg: "bg-accent",
                  iconColor: "text-clinic-green",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`${item.bg} rounded-2xl p-6 flex flex-col gap-3`}
                >
                  <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                  <div>
                    <p className="font-bold text-clinic-navy text-sm">
                      {item.label}
                    </p>
                    <p className="text-xs text-clinic-gray">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Timeline ──────────────────────────────────────────── */}
      <section className="section-py bg-clinic-blue-50">
        <div className="container-clinic">
          <SectionHeading
            eyebrow="Our Journey"
            title="Key Milestones"
            subtitle="A brief look at the chapters that shaped Medicare into the institution it is today."
            centered
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MILESTONES.map((m, i) => (
              <div
                key={m.year}
                className="relative flex flex-col gap-3 p-6 rounded-2xl bg-white border border-border hover:shadow-md hover:border-clinic-blue/20 transition-all duration-200"
              >
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-clinic-blue text-white text-xs font-bold w-fit">
                  {m.year}
                </span>
                <h3 className="font-bold text-clinic-navy text-sm">{m.title}</h3>
                <p className="text-xs text-clinic-gray leading-relaxed">{m.desc}</p>
                <span className="absolute top-6 right-6 text-4xl font-bold text-clinic-blue/6 select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission & Values ──────────────────────────────────── */}
      <section className="section-py bg-white">
        <div className="container-clinic">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="flex flex-col gap-6">
              <SectionHeading
                eyebrow="Our Mission"
                title="Healthcare Rooted in Purpose"
              />
              <div className="flex flex-col gap-4 text-sm text-clinic-gray leading-relaxed">
                <p>
                  Our mission is to provide every person who walks through our
                  doors — regardless of background or age — with access to
                  expert, compassionate, and dignified medical care.
                </p>
                <p>
                  We believe that exceptional healthcare should be accessible.
                  That is why we have always worked to keep our services
                  affordable, our processes transparent, and our clinic
                  welcoming.
                </p>
                <p>
                  At Medicare, medicine is a calling — not a transaction. Every
                  doctor, every staff member, and every service we offer is
                  guided by this belief.
                </p>
              </div>
              <Button
                asChild
                className="bg-clinic-blue hover:bg-clinic-navy text-white h-11 px-6 rounded-xl text-sm font-semibold w-fit shadow-sm transition-colors duration-200"
              >
                <a
                  href={`https://wa.me/${CLINIC.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Book a Consultation
                </a>
              </Button>
            </div>

            <div className="flex flex-col gap-4">
              <h3
                className="text-lg font-bold text-clinic-navy mb-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Our Core Values
              </h3>
              {VALUES.map((v) => (
                <div
                  key={v.title}
                  className="flex gap-4 p-5 rounded-xl border border-border hover:border-clinic-blue/20 hover:bg-clinic-blue-50/40 transition-all duration-200"
                >
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-clinic-blue-50 flex items-center justify-center">
                    <v.icon className="w-5 h-5 text-clinic-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-clinic-navy text-sm mb-0.5">
                      {v.title}
                    </h4>
                    <p className="text-xs text-clinic-gray leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="section-py bg-clinic-navy">
        <div className="container-clinic text-center max-w-2xl mx-auto flex flex-col items-center gap-6">
          <SectionHeading
            eyebrow="Visit Us"
            title="Come Experience Medicare"
            subtitle="Whether it's a routine check-up, a specialist consultation, or an urgent concern — we are here for you."
            centered
            light
          />
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Button
              asChild
              className="bg-white text-clinic-blue hover:bg-clinic-blue-50 h-11 px-6 rounded-xl text-sm font-semibold"
            >
              <Link href="/contact">
                Contact Us
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="text-white/80 hover:text-white hover:bg-white/10 h-11 px-6 rounded-xl text-sm"
            >
              <Link href="/doctors">Meet Our Doctors</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
