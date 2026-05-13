import { Metadata } from "next";
import Link from "next/link";
import {
  Award,
  Users,
  Building2,
  ShieldCheck,
  HeartHandshake,
  MapPin,
  Phone,
  MessageCircle,
  ChevronRight,
  Star,
  Stethoscope,
  FlaskConical,
  ScanLine,
  Heart,
  Baby,
  Activity,
  Ear,
  SmilePlus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import SectionHeading from "@/components/shared/SectionHeading";
import {
  CLINIC,
  STATS,
  FACILITIES_PREVIEW,
  WHY_US,
  DOCTORS_PREVIEW,
  TESTIMONIALS,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Medicare | Trusted Healthcare in Howrah Since 1987",
};

const ICON_MAP: Record<string, React.ElementType> = {
  Stethoscope,
  FlaskConical,
  ScanLine,
  Heart,
  Baby,
  Activity,
  Ear,
  SmilePlus,
  Award,
  Users,
  Building2,
  ShieldCheck,
  HeartHandshake,
  MapPin,
};

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-clinic-blue-50 to-white">
        {/* Background decoration */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-clinic-blue/5 -translate-y-1/3 translate-x-1/3"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-0 w-96 h-96 rounded-full bg-clinic-green/5 translate-y-1/3 -translate-x-1/3"
        />

        <div className="container-clinic relative py-20 md:py-28 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — text */}
            <div className="flex flex-col gap-6 max-w-xl">
              <div className="flex items-center gap-2">
                <Badge className="bg-clinic-blue-50 text-clinic-blue border-clinic-blue/20 px-3 py-1 text-xs font-semibold tracking-wide">
                  Est. {CLINIC.established}
                </Badge>
                <Badge className="bg-accent text-accent-foreground border-clinic-green/20 px-3 py-1 text-xs font-semibold tracking-wide">
                  37+ Years of Trust
                </Badge>
              </div>

              <h1
                className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-clinic-navy leading-tight text-balance"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Trusted Healthcare
                <br />
                <span className="text-clinic-blue">for Every Family</span>
                <br />
                in Howrah
              </h1>

              <p className="text-base md:text-lg text-clinic-gray leading-relaxed">
                Medicare is one of Howrah&apos;s first all-under-one-roof
                clinics — bringing expert specialists, diagnostics, and
                compassionate care to your neighbourhood for over 37 years.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-2">
                <Button
                  asChild
                  className="bg-clinic-blue hover:bg-clinic-navy text-white h-12 px-7 text-sm font-semibold rounded-xl shadow-md shadow-clinic-blue/20 transition-all duration-200"
                >
                  <a
                    href={`https://wa.me/${CLINIC.contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Book Appointment
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-12 px-7 text-sm font-semibold rounded-xl border-border hover:bg-clinic-blue-50 hover:border-clinic-blue/30 hover:text-clinic-blue transition-all duration-200"
                >
                  <Link href="/facilities">
                    Our Facilities
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </div>

              {/* Trust strip */}
              <div className="flex items-center gap-6 pt-2 border-t border-border">
                {STATS.slice(0, 3).map((s) => (
                  <div key={s.label} className="flex flex-col">
                    <span className="text-2xl font-bold text-clinic-blue">
                      {s.value}
                    </span>
                    <span className="text-xs text-clinic-gray">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — visual card */}
            <div className="relative hidden lg:block">
              <div className="relative mx-auto w-full max-w-sm">
                {/* Main card */}
                <div className="rounded-2xl border border-border bg-white shadow-2xl shadow-clinic-navy/10 overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-clinic-blue to-clinic-green" />
                  <div className="p-8 flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-clinic-blue-50">
                        <Stethoscope className="w-6 h-6 text-clinic-blue" />
                      </div>
                      <div>
                        <p className="font-semibold text-clinic-navy text-sm">
                          Medicare Clinic
                        </p>
                        <p className="text-xs text-clinic-gray">
                          Howrah, West Bengal
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {STATS.map((s) => (
                        <div
                          key={s.label}
                          className="rounded-xl bg-clinic-blue-50 p-4 flex flex-col gap-1"
                        >
                          <span className="text-2xl font-bold text-clinic-blue">
                            {s.value}
                          </span>
                          <span className="text-xs text-clinic-gray leading-snug">
                            {s.label}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 rounded-xl bg-accent/60 p-3">
                      <ShieldCheck className="w-5 h-5 text-clinic-green shrink-0" />
                      <p className="text-xs text-accent-foreground font-medium">
                        Trusted by 50,000+ families across Howrah
                      </p>
                    </div>
                  </div>
                </div>
                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-clinic-blue text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  Est. 1987
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ──────────────────────────────────────────── */}
      <section className="bg-clinic-navy">
        <div className="container-clinic py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-white/10">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center py-4 px-6 gap-1 text-center"
              >
                <span className="text-3xl md:text-4xl font-bold text-white">
                  {stat.value}
                </span>
                <span className="text-sm font-medium text-white/80">
                  {stat.label}
                </span>
                <span className="text-xs text-white/40">{stat.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Facilities Preview ─────────────────────────────────── */}
      <section className="section-py bg-white">
        <div className="container-clinic">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <SectionHeading
              eyebrow="Our Specialties"
              title="All Your Healthcare Needs,
Under One Roof"
              subtitle="From general consultations to specialist care and diagnostics — everything your family needs, conveniently in one place."
            />
            <Button
              asChild
              variant="outline"
              className="shrink-0 h-10 px-5 border-border hover:bg-clinic-blue-50 hover:border-clinic-blue/30 hover:text-clinic-blue rounded-xl text-sm"
            >
              <Link href="/facilities">
                View All Facilities
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {FACILITIES_PREVIEW.map((f) => {
              const Icon = ICON_MAP[f.icon] ?? Stethoscope;
              return (
                <Link key={f.id} href={`/facilities#${f.id}`}>
                  <Card className="group h-full ring-1 ring-border hover:ring-clinic-blue/30 hover:shadow-lg hover:shadow-clinic-blue/8 transition-all duration-250 cursor-pointer">
                    <CardHeader className="pb-2">
                      <div className="w-11 h-11 rounded-xl bg-clinic-blue-50 flex items-center justify-center mb-3 group-hover:bg-clinic-blue group-hover:shadow-md transition-all duration-250">
                        <Icon className="w-5 h-5 text-clinic-blue group-hover:text-white transition-colors duration-250" />
                      </div>
                      <CardTitle className="text-clinic-navy text-sm font-semibold">
                        {f.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-xs leading-relaxed">
                        {f.shortDesc}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ─────────────────────────────────────── */}
      <section className="section-py bg-clinic-blue-50">
        <div className="container-clinic">
          <SectionHeading
            eyebrow="Why Medicare"
            title="Why Families Trust Us"
            subtitle="For over three decades, Medicare has been the cornerstone of healthcare in Howrah — built on trust, expertise, and genuine care."
            centered
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_US.map((item) => {
              const Icon = ICON_MAP[item.icon] ?? ShieldCheck;
              return (
                <div
                  key={item.title}
                  className="flex gap-4 p-6 rounded-2xl bg-white border border-border hover:shadow-md hover:border-clinic-blue/20 transition-all duration-250"
                >
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-clinic-blue-50 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-clinic-blue" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold text-clinic-navy text-sm">
                      {item.title}
                    </h3>
                    <p className="text-xs text-clinic-gray leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Doctors Preview ───────────────────────────────────── */}
      <section className="section-py bg-white">
        <div className="container-clinic">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <SectionHeading
              eyebrow="Our Doctors"
              title="Meet Our Specialists"
              subtitle="Experienced, compassionate physicians dedicated to your health and wellbeing."
            />
            <Button
              asChild
              variant="outline"
              className="shrink-0 h-10 px-5 border-border hover:bg-clinic-blue-50 hover:border-clinic-blue/30 hover:text-clinic-blue rounded-xl text-sm"
            >
              <Link href="/doctors">
                All Doctors
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DOCTORS_PREVIEW.map((doc) => (
              <Card
                key={doc.id}
                className="group ring-1 ring-border hover:shadow-xl hover:shadow-clinic-navy/8 hover:-translate-y-0.5 transition-all duration-250"
              >
                <CardContent className="pt-6 flex flex-col gap-4">
                  {/* Avatar */}
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${doc.colorFrom} ${doc.colorTo} flex items-center justify-center shrink-0`}
                  >
                    <span
                      className={`text-xl font-bold ${doc.textColor}`}
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {doc.initials}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3
                      className="font-bold text-clinic-navy text-base leading-snug"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {doc.name}
                    </h3>
                    <p className="text-xs text-clinic-gray">{doc.qualification}</p>
                  </div>
                  <div className="flex items-center justify-between pt-1 border-t border-border">
                    <Badge className="bg-clinic-blue-50 text-clinic-blue border-0 text-xs">
                      {doc.specialization}
                    </Badge>
                    <span className="text-xs text-clinic-gray font-medium">
                      {doc.experience}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────── */}
      <section className="section-py bg-clinic-navy">
        <div className="container-clinic">
          <SectionHeading
            eyebrow="Patient Stories"
            title="Trusted by Families Across Howrah"
            subtitle="Words from patients who have trusted us with their health for years — and continue to do so."
            centered
            light
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="flex flex-col gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/8 transition-colors duration-200"
              >
                {/* Stars */}
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-sm text-white/75 leading-relaxed italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-2 border-t border-white/10 mt-auto">
                  <div className="w-9 h-9 rounded-full bg-clinic-blue/40 flex items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-white">
                      {t.initials}
                    </span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm font-semibold text-white">
                      {t.name}
                    </span>
                    <span className="text-xs text-white/45">{t.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact CTA ───────────────────────────────────────── */}
      <section className="section-py bg-gradient-to-r from-clinic-blue to-[oklch(0.44_0.14_248)]">
        <div className="container-clinic">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="flex flex-col gap-3 max-w-xl">
              <h2
                className="text-3xl md:text-4xl font-bold text-white leading-tight"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Ready to Visit Us?
              </h2>
              <p className="text-base text-white/75 leading-relaxed">
                Walk in anytime or book ahead via WhatsApp. Our team is ready to
                help you with consultations, diagnostics, and specialist care.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <Button
                asChild
                className="bg-white text-clinic-blue hover:bg-clinic-blue-50 h-12 px-7 text-sm font-semibold rounded-xl shadow-md transition-all duration-200"
              >
                <a
                  href={`https://wa.me/${CLINIC.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Us
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 h-12 px-7 text-sm font-semibold rounded-xl transition-all duration-200"
              >
                <a href={`tel:${CLINIC.contact.phone2.replace(/\s/g, "")}`}>
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="text-white/80 hover:text-white hover:bg-white/10 h-12 px-7 text-sm font-semibold rounded-xl transition-all duration-200"
              >
                <Link href="/find-us">
                  <MapPin className="w-4 h-4 mr-2" />
                  Find Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
