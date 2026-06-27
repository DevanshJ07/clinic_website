export const DOCTORS_INTRO =
  "Medicare hosts a panel of qualified specialists across orthopaedics, cardiology, gynaecology, surgery, ENT, diabetes care, and other disciplines. Doctor availability may vary, so patients are requested to call before visiting.";

export const DOCTORS_AVAILABILITY_NOTE =
  "Doctor availability and timings may change. Please call before visiting.";

export const DEFAULT_TIMING = "Please call to confirm availability.";

export const DOCTOR_FILTER_TAGS = [
  { id: "all", label: "All" },
  { id: "surgery", label: "Surgery" },
  { id: "orthopaedic", label: "Orthopaedic" },
  { id: "gynaecology", label: "Gynaecology" },
  { id: "cardiology", label: "Cardiology" },
  { id: "ent", label: "ENT" },
  { id: "diabetes", label: "Diabetes Care" },
  { id: "general-medicine", label: "General Medicine" },
] as const;

export type DoctorFilterId = (typeof DOCTOR_FILTER_TAGS)[number]["id"];

export type DoctorProfile = {
  id: string;
  name: string;
  featured?: boolean;
  specialities: string[];
  filterTags: Exclude<DoctorFilterId, "all">[];
  qualifications: string;
  additionalTraining?: string[];
  additional?: string;
  professionalHighlight?: string;
  registration?: string;
  chamber?: string;
  timing?: string;
};

function initialsFromName(name: string): string {
  const parts = name.replace(/^Prof\.\s*/i, "").match(/\b[A-Z]/g);
  if (!parts || parts.length === 0) return "MD";
  return parts.slice(0, 2).join("");
}

export function getDoctorInitials(name: string): string {
  return initialsFromName(name);
}

export const MEDICARE_DOCTORS: DoctorProfile[] = [
  {
    id: "dr-ashok-kumar-saraf",
    name: "Prof. Dr. Ashok Kumar Saraf",
    featured: true,
    specialities: [
      "General Surgery",
      "Cancer Surgery",
      "Laparoscopic Surgery",
      "Surgical Gastroenterology",
      "GI Endoscopy",
      "Urology",
    ],
    filterTags: ["surgery"],
    qualifications:
      "MBBS, LRCP (UK), MRCS (Edin), LRCS (Glasg), ECFMG (USA), FICS, MS, FRCS",
    professionalHighlight:
      "Principal, Vivekananda Institute of Medical Sciences, Ramkrishna Mission Seva Pratishthan Hospital, Post Graduate Medical College affiliated to West Bengal University of Health Sciences",
    timing: DEFAULT_TIMING,
  },
  {
    id: "dr-rajesh-kushwaha",
    name: "Dr. Rajesh Kushwaha",
    specialities: [
      "Orthopaedic",
      "Arthroscopy",
      "Robotic Joint Replacement & Spine Surgeon",
    ],
    filterTags: ["orthopaedic"],
    qualifications: "MBBS, D.Ortho, MS Ortho",
    additionalTraining: [
      "Specialized in minimally invasive and endoscopic spine surgery",
      "Fellowship in Arthroscopy, France",
      "Fellowship in Arthroplasty, France",
      "Fellowship in Revision Joint Replacement, Germany",
    ],
    registration: "MCI 26508 | WBMC 77553",
    timing: DEFAULT_TIMING,
  },
  {
    id: "dr-dolly-bose-chowdhury",
    name: "Dr. Dolly Bose Chowdhury",
    specialities: ["Gynaecologist & Obstetrician"],
    filterTags: ["gynaecology"],
    qualifications: "MBBS, DGO",
    additional: "Advanced Laparoscopic Surgery",
    timing: DEFAULT_TIMING,
  },
  {
    id: "dr-b-b-shukla",
    name: "Dr. B. B. Shukla",
    specialities: ["Cardiologist & Physician"],
    filterTags: ["cardiology", "general-medicine"],
    qualifications: "MD",
    chamber: "Medicare Clinic, opposite Howrah Jute Mill",
    timing: "10 AM – 11 AM, Weekdays",
  },
  {
    id: "dr-abhishek-shaw",
    name: "Dr. Abhishek Shaw",
    specialities: ["Orthopaedic"],
    filterTags: ["orthopaedic"],
    qualifications: "MBBS, MS Ortho",
    registration: "WBMC 68336",
    timing: DEFAULT_TIMING,
  },
  {
    id: "dr-sabyasachi-gupta",
    name: "Dr. Sabyasachi Gupta",
    specialities: ["Cardiology"],
    filterTags: ["cardiology"],
    qualifications: "MBBS, PGDGM, CCEBDM, PG Diploma Cardiology",
    registration: "59031",
    timing: DEFAULT_TIMING,
  },
];
