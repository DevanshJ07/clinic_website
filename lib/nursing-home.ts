export const NURSING_HOME_TRUST = [
  { value: "24×7", label: "Admission" },
  { value: "ICU", label: "Critical Care" },
  { value: "Modern", label: "Operation Theatres" },
  { value: "Infection", label: "Control Focus" },
  { value: "Specialists", label: "Experienced Panel" },
];

export const NURSING_HOME_ABOUT = [
  "Medicare Nursing Home focuses on excellent patient care, patient safety, infection control, equal treatment for all classes, and quality nursing care.",
  "Over the last 30+ years, Medicare has continuously upgraded all departments including the Nursing Home section with modern infrastructure, equipment, and facilities.",
];

export const OT_EQUIPMENT = [
  "Work Station for Anesthesia",
  "C-arm image intensifier",
  "Laminar Flow airway system for infection reduction",
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
];

export const ROOM_TYPES = [
  {
    id: "single",
    name: "Single Accommodation",
    amenities: [
      "Attached bathroom",
      "Sofa-cum-bed for attendant",
      "Couch/sofa seating for the accompanying attendant or family member",
      "Piped oxygen",
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
      "Couch/sofa seating for the accompanying attendant or family member",
      "Piped oxygen",
      "Centralized oxygen source",
      "Suction facility",
      "TV",
      "Well furnished",
    ],
  },
  {
    id: "wards",
    name: "Male & Female Wards",
    amenities: ["Piped oxygen", "Centralized oxygen source", "Suction facility", "Good ambience"],
  },
  {
    id: "icu",
    name: "ICU",
    amenities: [
      "Managed by qualified doctors, technicians, and nurses",
      "Round-the-clock admission",
    ],
  },
];

export const EMERGENCY_ADMISSION =
  "In emergencies, no doctor reference is required for admission. Medicare will arrange specialist care after admission.";

export const PHARMACY_NOTE =
  "Medicare Pharmacy stocks authentic medicines and operates from 9 AM to 8 PM.";
