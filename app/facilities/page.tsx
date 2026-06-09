import { Metadata } from "next";
import Link from "next/link";
import {
  Stethoscope,
  FlaskConical,
  ScanLine,
  Heart,
  Baby,
  Activity,
  Ear,
  SmilePlus,
  ChevronRight,
  Phone,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SectionHeading from "@/components/shared/SectionHeading";
import PageHero from "@/components/shared/PageHero";
import { CLINIC } from "@/lib/data";

export const metadata: Metadata = {
  title: "Facilities & Specialties",
  description:
    "Medicare offers 8+ specialties under one roof — general medicine, pathology, radiology, gynaecology, paediatrics, orthopaedics, ENT, and dental care in Howrah.",
};

const FACILITIES = [
  {
    id: "general-medicine",
    icon: Stethoscope,
    name: "General Medicine & OPD",
    description:
      "Comprehensive outpatient consultations for all common illnesses, chronic disease management, preventive care, and health check-ups for all age groups.",
    details: [
      "Adult & elderly medicine",
      "Chronic disease management",
      "Fever, infections & acute illness",
      "Annual health screenings",
      "Referrals & second opinions",
    ],
    color: "bg-blue-50",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    borderHover: "hover:border-blue-200",
  },
  {
    id: "pathology",
    icon: FlaskConical,
    name: "Pathology & Laboratory",
    description:
      "State-of-the-art diagnostic laboratory offering a full range of blood tests, urine analysis, microbiological tests, and preventive health panels.",
    details: [
      "Complete blood count (CBC)",
      "Blood sugar & lipid profiles",
      "Thyroid & hormone tests",
      "Urine & stool analysis",
      "Same-day report delivery",
    ],
    color: "bg-purple-50",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    borderHover: "hover:border-purple-200",
  },
  {
    id: "radiology",
    icon: ScanLine,
    name: "Digital X-Ray & ECG",
    description:
      "Modern digital radiology suite with low-radiation X-ray imaging and 12-lead ECG for accurate cardiac and musculoskeletal diagnostics.",
    details: [
      "Digital X-Ray (all body parts)",
      "12-lead ECG",
      "Chest & spine imaging",
      "Limb & joint X-rays",
      "Same-day reports",
    ],
    color: "bg-sky-50",
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
    borderHover: "hover:border-sky-200",
  },
  {
    id: "gynaecology",
    icon: Heart,
    name: "Gynaecology & Obstetrics",
    description:
      "Complete women's healthcare from adolescence through menopause, including prenatal care, high-risk pregnancy management, and gynaecological consultations.",
    details: [
      "Antenatal & postnatal care",
      "Gynaecological consultations",
      "Family planning counselling",
      "Menstrual health management",
      "High-risk pregnancy care",
    ],
    color: "bg-rose-50",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
    borderHover: "hover:border-rose-200",
  },
  {
    id: "paediatrics",
    icon: Baby,
    name: "Paediatrics",
    description:
      "Dedicated care for infants, children, and adolescents — with vaccination schedules, growth monitoring, and treatment for childhood illnesses.",
    details: [
      "Newborn & infant care",
      "Vaccination & immunisation",
      "Child growth assessment",
      "Adolescent health",
      "Nutritional counselling",
    ],
    color: "bg-green-50",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    borderHover: "hover:border-green-200",
  },
  {
    id: "orthopaedics",
    icon: Activity,
    name: "Orthopaedics",
    description:
      "Expert diagnosis and treatment of bone, joint, and musculoskeletal conditions — from sports injuries and fractures to chronic joint pain.",
    details: [
      "Fracture & trauma management",
      "Joint pain & arthritis",
      "Sports injuries",
      "Post-surgical rehabilitation",
      "Spine & back pain",
    ],
    color: "bg-orange-50",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    borderHover: "hover:border-orange-200",
  },
  {
    id: "ent",
    icon: Ear,
    name: "ENT Clinic",
    description:
      "Specialised care for ear, nose, and throat conditions including hearing assessments, sinusitis, tonsillitis, and voice disorders for all ages.",
    details: [
      "Ear pain & hearing issues",
      "Sinusitis & allergic rhinitis",
      "Tonsillitis & adenoids",
      "Voice & throat disorders",
      "Paediatric ENT",
    ],
    color: "bg-violet-50",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    borderHover: "hover:border-violet-200",
  },
  {
    id: "dental",
    icon: SmilePlus,
    name: "Dental Care",
    description:
      "Comprehensive dental services in a clean, modern clinic — from routine check-ups and fillings to extractions and root canal treatment.",
    details: [
      "Scaling & polishing",
      "Fillings & extractions",
      "Root canal treatment",
      "Dental check-ups",
      "Oral hygiene guidance",
    ],
    color: "bg-teal-50",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
    borderHover: "hover:border-teal-200",
  },
];

export default function FacilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Specialties"
        title="All Your Healthcare Needs,
Under One Roof"
        subtitle="8+ specialties, modern diagnostics, and experienced specialists — everything your family needs, conveniently in one trusted location in Howrah."
      />

      {/* ── Intro strip ───────────────────────────────────────── */}
      <section className="py-10 bg-clinic-blue-50 border-b border-border">
        <div className="container-clinic">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {FACILITIES.map((f) => (
              <a
                key={f.id}
                href={`#${f.id}`}
                className="flex items-center gap-2 text-sm font-medium text-clinic-navy/70 hover:text-clinic-blue transition-colors duration-150"
              >
                <f.icon className="w-3.5 h-3.5" />
                {f.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Facilities Grid ───────────────────────────────────── */}
      <section className="section-py bg-white">
        <div className="container-clinic">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {FACILITIES.map((facility) => (
              <Card
                key={facility.id}
                id={facility.id}
                className={`group ring-1 ring-border ${facility.borderHover} hover:shadow-xl hover:shadow-clinic-navy/6 transition-all duration-250 scroll-mt-24`}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-4">
                    <div
                      className={`shrink-0 w-12 h-12 rounded-xl ${facility.iconBg} flex items-center justify-center`}
                    >
                      <facility.icon
                        className={`w-6 h-6 ${facility.iconColor}`}
                      />
                    </div>
                    <div>
                      <CardTitle className="text-clinic-navy font-bold text-base">
                        {facility.name}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  <CardDescription className="text-sm text-clinic-gray leading-relaxed">
                    {facility.description}
                  </CardDescription>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
                    {facility.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-center gap-2 text-xs text-clinic-gray"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-clinic-green shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="section-py bg-gradient-to-r from-clinic-blue to-[oklch(0.44_0.14_248)]">
        <div className="container-clinic">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="flex flex-col gap-3 max-w-lg">
              <h2
                className="text-3xl md:text-4xl font-bold text-white leading-tight"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Need a Consultation?
              </h2>
              <p className="text-base text-white/75 leading-relaxed">
                Walk in during clinic hours or call us for enquiries.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <Button
                asChild
                className="bg-white text-clinic-blue hover:bg-clinic-blue-50 h-12 px-7 text-sm font-semibold rounded-xl shadow-md"
              >
                <a href={`tel:${CLINIC.contact.helpline}`}>
                  <Phone className="w-4 h-4 mr-2" />
                  24×7 · {CLINIC.contact.helpline}
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="text-white/80 hover:text-white hover:bg-white/10 h-12 px-7 text-sm font-semibold rounded-xl"
              >
                <Link href="/doctors">
                  Meet the Doctors
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
