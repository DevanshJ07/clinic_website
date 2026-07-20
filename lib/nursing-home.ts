export const NURSING_HOME_TRUST = [
  { value: "24×7", label: "Admission" },
  { value: "ICU", label: "Critical Care" },
  { value: "Modern", label: "Operation Theatres" },
  { value: "Zero", label: "Infection" },
  { value: "Specialists", label: "Experienced Panel" },
];

export const NURSING_HOME_ABOUT = [
  "Medicare Nursing Home focuses on excellent patient care, patient safety, infection control, equal treatment for all classes, and quality nursing care.",
  "Since 1988, Medicare has continuously upgraded all departments including the Nursing Home section with modern infrastructure, equipment, and facilities.",
];

export const OT_EQUIPMENT = [
  "Work Station for Anesthesia",
  "C-arm image intensifier",
  "Laminar Flow airway system for zero infection",
];

export const OT_SURGERIES = [
  "General Surgery",
  "ENT",
  "Gynecology",
  "Orthopedic",
  "Urology / T.U.R",
  "Kidney stone procedures",
  "Neurological and brain surgeries",
  "Temporary and permanent pacemaker procedures",
  "Other Surgical Procedures",
];

export const ROOM_TYPES = [
  {
    id: "single",
    name: "Single Accommodation",
    amenities: [
      "Attached bathroom",
      "Sofa-cum-bed for the attendant or accompanying family member.",
      "Centralized oxygen source",
      "Suction facility",
      "Air-conditioned",
      "TV",
      "Well furnished",
    ],
  },
  {
    id: "double",
    name: "Double Bedded Cabins",
    amenities: [
      "Air-conditioned",
      "Attached bathroom",
      "Centralized oxygen source",
      "Suction facility",
      "TV",
      "Well furnished",
    ],
  },
  {
    id: "wards",
    name: "Separate Male & Female Wards",
    amenities: [
      "Attached bathrooms",
      "Centralized oxygen source",
      "Suction facility",
      "Good ambience",
    ],
  },
  {
    id: "icu",
    name: "ICU",
    amenities: [
      "Managed by qualified doctors, technicians, and nurses",
      "Round-the-clock admission",
      "Air-conditioned",
      "Attached bathroom",
      "Centralized oxygen source",
      "Suction facility",
      "Ventilator",
      "CPAP",
      "BiPAP",
      "Defibrillator",
    ],
  },
];

export const EMERGENCY_ADMISSION =
  "In emergencies, no doctor referral is required for admission. Medicare will arrange specialist care after admission.";

export const EMERGENCY_ADMISSION_SUPPORT =
  "Round-the-clock MBBS doctor available.";

export const PHARMACY_NOTE =
  "Medicare Pharmacy stocks authentic medicines and operates from 9 AM to 8 PM.";

export const NURSING_HOME_ADDITIONAL_FACILITIES = [
  {
    id: "kitchen",
    title: "In-house Kitchen",
    description:
      "Food is available from Medicare's in-house kitchen. Home-prepared food is also permitted.",
  },
  {
    id: "pharmacy",
    title: "In-house Pharmacy",
    description: "On-site pharmacy for inpatient and outpatient medicine needs.",
  },
  {
    id: "ambulance",
    title: "Ambulance Services Available",
    description: "Ambulance services available for patient transport when required.",
  },
];
