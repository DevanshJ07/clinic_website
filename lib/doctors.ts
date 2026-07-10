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
  { id: "obstetrics", label: "Obstetrics" },
  { id: "cardiology", label: "Cardiology" },
  { id: "ent", label: "ENT" },
  { id: "diabetes", label: "Diabetes" },
  { id: "endocrinology", label: "Endocrinology" },
  { id: "internal-medicine", label: "Internal Medicine" },
  { id: "geriatric-medicine", label: "Geriatric Medicine" },
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
  professionalExpertise?: string[];
  extendedCredentials?: string[];
  membershipsAndHonors?: string[];
  professionalHighlight?: string;
  registration?: string;
  chamber?: string;
  timing?: string;
  photoSrc?: string;
  photoAlt?: string;
  photoObjectPosition?: string;
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
    photoSrc: "/clinic/dr-ashok-kumar-saraf.png",
    photoAlt: "Dr. Ashok Kumar Saraf",
    photoObjectPosition: "50% 42%",
    timing: "Monday to Saturday · 3:00 PM – 6:00 PM",
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
    photoSrc: "/clinic/dr-rajesh-kushwaha.png",
    photoAlt: "Dr. Rajesh Kushwaha",
    photoObjectPosition: "50% 38%",
    timing: "Monday to Saturday · 11:00 AM – 1:00 PM",
  },
  {
    id: "dr-dolly-bose-chowdhury",
    name: "Dr. Dolly Bose Chowdhury",
    specialities: ["Gynaecologist & Obstetrician"],
    filterTags: ["gynaecology", "obstetrics"],
    qualifications: "MBBS, DGO",
    additional: "Advanced Laparoscopic Surgery",
    timing: "Friday · 10:00 AM – 11:00 AM",
  },
  {
    id: "dr-b-b-shukla",
    name: "Dr. B. B. Shukla",
    specialities: ["Cardiologist & Physician"],
    filterTags: ["cardiology", "general-medicine"],
    qualifications: "MD",
    photoSrc: "/clinic/dr-b-b-shukla.png",
    photoAlt: "Dr. B. B. Shukla",
    photoObjectPosition: "50% 40%",
    chamber: "Medicare Clinic, opposite Howrah Jute Mill",
    timing: "Monday to Saturday · 10:00 AM – 11:00 AM",
  },
  {
    id: "dr-abhishek-shaw",
    name: "Dr. Abhishek Shaw",
    specialities: ["Orthopaedic"],
    filterTags: ["orthopaedic"],
    qualifications: "MBBS, MS Ortho",
    registration: "WBMC 68336",
    timing: "Monday, Wednesday and Friday · 5:00 PM – 6:00 PM",
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
  {
    id: "dr-ankit-choudhary",
    name: "Dr. Ankit Choudhary",
    specialities: ["ENT", "Ear, Nose and Throat", "Head and Neck Surgery"],
    filterTags: ["ent"],
    qualifications: "MBBS, MS (ENT)",
    registration: "WBMC 69224",
    timing: DEFAULT_TIMING,
  },
  {
    id: "dr-sitansu-chatterjee",
    name: "Dr. Sitansu Chatterjee",
    specialities: ["Gynaecology", "Obstetrics"],
    filterTags: ["gynaecology", "obstetrics"],
    qualifications: "MBBS (Cal), DGO, MD (Cal)",
    photoSrc: "/clinic/dr-sitansu-chatterjee.png",
    photoAlt: "Dr. Sitansu Chatterjee",
    photoObjectPosition: "50% 36%",
    timing: DEFAULT_TIMING,
  },
  {
    id: "dr-p-r-gupta",
    name: "Dr. P. R. Gupta",
    specialities: [
      "Diabetes",
      "Endocrinology",
      "Internal Medicine",
      "Geriatric Medicine",
    ],
    filterTags: [
      "diabetes",
      "endocrinology",
      "internal-medicine",
      "geriatric-medicine",
    ],
    qualifications: "MBBS (Cal), MD (Medicine), Diploma / MSc in Diabetes (UK)",
    photoSrc: "/clinic/dr-p-r-gupta.png",
    photoAlt: "Dr. P. R. Gupta",
    photoObjectPosition: "50% 40%",
    professionalExpertise: [
      "Consultant in Diabetes and Endocrinology",
      "Physician and Geriatrician",
      "Special interest in Nephrology",
      "Special interest in Cardiology and Chest Disease",
    ],
    extendedCredentials: [
      "Integrated Diabetes and Endocrine Course, Newcastle University, Australia",
      "Advanced Postgraduate Course in Diabetes, USA",
      "Advanced Certificate in Diabetes, Cleveland Clinic, USA",
      "Postgraduate Diploma in Diabetology, Johns Hopkins, USA",
      "Certificate in Endocrinology, Endocrine Society, USA",
      "Certificate in Endocrinology, Mayo Clinic, USA",
      "Postgraduate Certificate in Cardiology",
      "Postgraduate Certificate in Thyroid Diseases",
      "Postdoctoral Certificate in Kidney and Dialysis",
      "Postgraduate Diploma in Geriatrics",
      "Advanced Certificate in Diabetes and Cardiovascular Disease",
    ],
    membershipsAndHonors: [
      "ADA Scholar 2014",
      "Speaker, American Diabetes Association",
      "Life Member: Indian Medical Association",
      "Life Member: Cardiological Society of India",
      "Life Member: Association of Physicians of India",
      "Life Member: Geriatric Association of India",
      "Life Member: Diabetic Association of India",
      "Life Member: Indian Thyroid Society",
      "Life Member: RSSDI",
    ],
    registration: "WBMC 49247",
    timing:
      "Monday to Saturday · 4:00 PM – 6:00 PM · Sunday · 11:00 AM – 12:00 Noon",
  },
];
