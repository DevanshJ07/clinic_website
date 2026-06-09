import { Metadata } from "next";
import Link from "next/link";
import { Clock, Award, ChevronRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "@/components/shared/SectionHeading";
import PageHero from "@/components/shared/PageHero";
import { CLINIC } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Doctors",
  description:
    "Meet the specialist doctors at Medicare, Howrah — experienced physicians across general medicine, gynaecology, paediatrics, orthopaedics, ENT, and dental care.",
};

const DOCTORS = [
  {
    id: "dr-rajiv-ghosh",
    name: "Dr. Rajiv Kumar Ghosh",
    initials: "RG",
    qualification: "MBBS, MD (Internal Medicine)",
    designation: "Senior Consultant",
    specialization: "General Medicine & Internal Medicine",
    experience: "30+ Years",
    bio: "Dr. Ghosh is one of the founding physicians of Medicare. With three decades of experience in general and internal medicine, he has earned the deep trust of thousands of families across Howrah.",
    timings: "Mon – Sat: 10:00 AM – 1:00 PM & 5:00 PM – 7:00 PM",
    colorFrom: "from-blue-100",
    colorTo: "to-blue-200",
    textColor: "text-blue-800",
    badgeBg: "bg-blue-50",
    badgeText: "text-blue-700",
  },
  {
    id: "dr-priya-chakraborty",
    name: "Dr. Priya Chakraborty",
    initials: "PC",
    qualification: "MBBS, MS (Obs & Gynaecology)",
    designation: "Senior Gynaecologist",
    specialization: "Gynaecology & Obstetrics",
    experience: "22+ Years",
    bio: "Dr. Chakraborty specialises in high-risk pregnancies, infertility management, and gynaecological care. She is deeply committed to compassionate women's healthcare throughout all life stages.",
    timings: "Mon, Wed, Fri: 11:00 AM – 2:00 PM",
    colorFrom: "from-rose-100",
    colorTo: "to-pink-200",
    textColor: "text-rose-800",
    badgeBg: "bg-rose-50",
    badgeText: "text-rose-700",
  },
  {
    id: "dr-amit-das",
    name: "Dr. Amit Kumar Das",
    initials: "AD",
    qualification: "MBBS, MD (Paediatrics)",
    designation: "Consultant Paediatrician",
    specialization: "Paediatrics & Neonatology",
    experience: "18+ Years",
    bio: "Dr. Das brings warmth and expertise to every young patient's consultation. His gentle approach and thorough clinical knowledge make him a beloved physician among families in Howrah.",
    timings: "Mon – Sat: 4:00 PM – 7:00 PM",
    colorFrom: "from-green-100",
    colorTo: "to-emerald-200",
    textColor: "text-green-800",
    badgeBg: "bg-green-50",
    badgeText: "text-green-700",
  },
  {
    id: "dr-soumyajit-banerjee",
    name: "Dr. Soumyajit Banerjee",
    initials: "SB",
    qualification: "MBBS, MS (Orthopaedics)",
    designation: "Orthopaedic Surgeon",
    specialization: "Orthopaedic Surgery & Sports Medicine",
    experience: "20+ Years",
    bio: "Dr. Banerjee is a skilled orthopaedic surgeon with expertise in joint care, fracture management, and sports medicine. He has helped hundreds of patients regain their mobility and quality of life.",
    timings: "Tue, Thu, Sat: 10:00 AM – 1:00 PM",
    colorFrom: "from-orange-100",
    colorTo: "to-amber-200",
    textColor: "text-orange-800",
    badgeBg: "bg-orange-50",
    badgeText: "text-orange-700",
  },
  {
    id: "dr-nilufar-khatun",
    name: "Dr. Nilufar Khatun",
    initials: "NK",
    qualification: "MBBS, DLO (Ear, Nose & Throat)",
    designation: "ENT Specialist",
    specialization: "ENT & Head & Neck",
    experience: "12+ Years",
    bio: "Dr. Khatun provides comprehensive ear, nose, and throat care with a focus on accurate diagnosis and conservative treatment. Her expertise covers both adult and paediatric ENT conditions.",
    timings: "Mon, Wed, Fri: 5:00 PM – 7:30 PM",
    colorFrom: "from-purple-100",
    colorTo: "to-violet-200",
    textColor: "text-purple-800",
    badgeBg: "bg-purple-50",
    badgeText: "text-purple-700",
  },
  {
    id: "dr-sunita-sharma",
    name: "Dr. Sunita Sharma",
    initials: "SS",
    qualification: "BDS, MDS (Oral Medicine)",
    designation: "Dental Surgeon",
    specialization: "Dental & Oral Health",
    experience: "15+ Years",
    bio: "Dr. Sharma combines clinical expertise with a gentle chair-side manner to make dental visits comfortable for patients of all ages. She offers comprehensive dental care with a focus on patient comfort.",
    timings: "Mon – Sat: 9:00 AM – 12:00 PM",
    colorFrom: "from-teal-100",
    colorTo: "to-cyan-200",
    textColor: "text-teal-800",
    badgeBg: "bg-teal-50",
    badgeText: "text-teal-700",
  },
];

export default function DoctorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="Experienced Specialists,
Compassionate Care"
        subtitle="A dedicated team of 15+ doctors across 8 specialties — committed to your health and wellbeing."
      />

      {/* ── Doctors Grid ──────────────────────────────────────── */}
      <section className="section-py bg-white">
        <div className="container-clinic">
          <SectionHeading
            eyebrow="Our Specialists"
            title="Meet Our Doctors"
            subtitle="Each of our physicians brings deep expertise and a genuine dedication to patient care."
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {DOCTORS.map((doc) => (
              <Card
                key={doc.id}
                className="group ring-1 ring-border hover:shadow-xl hover:shadow-clinic-navy/8 hover:-translate-y-0.5 transition-all duration-250"
              >
                <CardContent className="pt-6 flex flex-col gap-5">
                  {/* Header row */}
                  <div className="flex items-start gap-4">
                    <div
                      className={`shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${doc.colorFrom} ${doc.colorTo} flex items-center justify-center`}
                    >
                      <span
                        className={`text-xl font-bold ${doc.textColor}`}
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        {doc.initials}
                      </span>
                    </div>
                    <div className="flex flex-col gap-0.5 min-w-0">
                      <h3
                        className="font-bold text-clinic-navy text-base leading-snug"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        {doc.name}
                      </h3>
                      <p className="text-xs text-clinic-gray">
                        {doc.qualification}
                      </p>
                      <p className="text-xs font-medium text-clinic-blue mt-0.5">
                        {doc.designation}
                      </p>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-xs text-clinic-gray leading-relaxed">
                    {doc.bio}
                  </p>

                  {/* Badges */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge
                      className={`${doc.badgeBg} ${doc.badgeText} border-0 text-xs`}
                    >
                      {doc.specialization}
                    </Badge>
                    <span className="flex items-center gap-1 text-xs text-clinic-gray font-medium">
                      <Award className="w-3 h-3 text-clinic-green" />
                      {doc.experience}
                    </span>
                  </div>

                  {/* Timings */}
                  <div className="flex items-start gap-2 p-3 rounded-lg bg-clinic-blue-50 border-t border-border mt-auto">
                    <Clock className="w-3.5 h-3.5 text-clinic-blue shrink-0 mt-0.5" />
                    <p className="text-xs text-clinic-navy/70">{doc.timings}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Note ──────────────────────────────────────────────── */}
      <section className="py-10 bg-clinic-blue-50 border-y border-border">
        <div className="container-clinic">
          <p className="text-center text-sm text-clinic-gray max-w-2xl mx-auto">
            <span className="font-semibold text-clinic-navy">Please note:</span>{" "}
            Doctor timings are subject to change. We recommend confirming
            availability by calling{" "}
            <a
              href={`tel:${CLINIC.contact.diagnosticOpd}`}
              className="text-clinic-blue hover:underline font-medium"
            >
              {CLINIC.contact.diagnosticOpd}
            </a>
            .
          </p>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="section-py bg-white">
        <div className="container-clinic">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-2xl bg-clinic-navy">
            <div className="text-center md:text-left">
              <h2
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Contact Us
              </h2>
              <p className="text-sm text-white/65 mt-1">
                Call our 24×7 helpline or contact the OPD desk directly.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <Button
                asChild
                className="bg-white text-clinic-blue hover:bg-clinic-blue-50 h-11 px-6 rounded-xl text-sm font-semibold"
              >
                <a href={`tel:${CLINIC.contact.helpline}`}>
                  <Phone className="w-4 h-4 mr-2" />
                  {CLINIC.contact.helpline}
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="text-white/80 hover:text-white hover:bg-white/10 h-11 px-6 rounded-xl text-sm"
              >
                <a href={`tel:03340073713`}>
                  OPD · {CLINIC.contact.diagnosticOpd}
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="text-white/80 hover:text-white hover:bg-white/10 h-11 px-6 rounded-xl text-sm"
              >
                <Link href="/contact">
                  Contact Us
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
