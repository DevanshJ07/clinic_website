export const DIAGNOSTIC_INTRO = [
  "Medicare Diagnostic Services are known for quality, advanced care, and accurate results in Howrah — serving all age groups with routine to specialised investigations.",
  "Stringent protocols, modern infrastructure, and skilled technicians, pathologists, and support staff ensure dependable service.",
];

export const ENQUIRE_PRICE = "Please call to enquire";

export const PATHOLOGY_EXTENDED_NOTE =
  "Medicare offers a comprehensive range of pathology and laboratory investigations beyond the commonly listed tests. Please contact Medicare Diagnostic Centre for complete test availability and pricing.";

export const PATHOLOGY_OVERVIEW = {
  title: "Pathology Laboratory Services",
  nabl: "NABL certified Pathology Laboratory",
  subServices: [
    { title: "Hematology", description: "Blood tests including CBC" },
    {
      title: "Microbiology",
      description: "Microbial disease and infection diagnosis",
    },
    {
      title: "Biochemistry",
      description: "Blood and urine tests — sugar, lipid, LFT, KFT",
    },
  ],
  features: [
    "Qualified pathologists and technicians",
    "State-of-the-art equipment",
    "Accurate results",
    "Cost-effective service",
    "Short turnaround time",
    "Home blood collection",
    "Emergency blood tests at night",
  ],
  equipment: [
    { name: "Sodium Potassium Analyzer", model: "Roche 9180" },
    { name: "Cell Counter", model: "Alispa Count Plus ADL" },
    {
      name: "Biochemistry, electrolyte, immunoturbidimetric, and coagulation tests",
      model: "ORBIT SMART 7",
    },
  ],
  image: {
    src: "/clinic/pathology-wide.png",
    alt: "Medicare NABL-accredited pathology laboratory with diagnostic analyzers",
  },
};

export const BLOOD_TEST_RATES = [
  { name: "Sugar Fasting", price: "₹50" },
  { name: "Sugar P.P", price: "₹50" },
  { name: "Urea", price: "₹130" },
  { name: "Creatinine", price: "₹130" },
  { name: "Lipid Profile", price: "₹550" },
  { name: "L.F.T", price: "₹520" },
  { name: "C.B.C", price: "₹200" },
  { name: "Sodium", price: "₹180" },
  { name: "Potassium", price: "₹180" },
  { name: "Uric Acid", price: "₹130" },
];

export const RADIOLOGY_INTRO =
  "Modern radiology with quality-focused imaging. Among the first to offer ultrasonography in Howrah, with experienced radiologists on panel.";

export const RADIOLOGY_SERVICES = [
  {
    id: "digital-xray",
    name: "Digital X-Ray",
    description: "Bones, digestive tract, chest, heart, and lungs.",
    machine: "GE 500mA",
    price: ENQUIRE_PRICE,
  },
  {
    id: "ultrasound",
    name: "Ultrasound with Colour Doppler / Ultrasonography",
    description: "Blood flow in vessels and heart chambers.",
    machine: "GE Voluson P8",
    price: ENQUIRE_PRICE,
  },
  {
    id: "chest-xray",
    name: "Chest X-Ray",
    description: "Chest, upper spine, clavicle, and ribs.",
    price: ENQUIRE_PRICE,
  },
  {
    id: "portable-xray",
    name: "Portable X-Ray",
    description: "Home visit with portable X-ray for immobile patients.",
    price: ENQUIRE_PRICE,
  },
];

export const CARDIOLOGY_SERVICES = [
  {
    id: "ecg",
    name: "ECG",
    description: "Examines the electrical activity of the heart.",
    price: ENQUIRE_PRICE,
  },
  {
    id: "tmt",
    name: "TMT",
    description: "Cardiac stress test under exertion.",
    price: ENQUIRE_PRICE,
  },
  {
    id: "echo-doppler",
    name: "2D Echo / Cardiac Echo Doppler / Arterial and Venous Doppler of Limbs",
    description: "Heart and vascular ultrasound imaging.",
    machine: "GE Voluson P8",
    price: ENQUIRE_PRICE,
  },
  {
    id: "holter",
    name: "Holter Monitor",
    description: "24-hour continuous ECG monitoring.",
    price: ENQUIRE_PRICE,
  },
];

export const ENDOSCOPY_SERVICES = [
  {
    id: "colonoscopy",
    name: "Colonoscopy",
    price: ENQUIRE_PRICE,
  },
  {
    id: "ogd",
    name: "Oesophago Gastroduodenoscopy",
    price: ENQUIRE_PRICE,
  },
];

export const NEUROLOGY_SERVICES = [
  {
    id: "eeg",
    name: "EEG",
    price: ENQUIRE_PRICE,
  },
];

export const PULMONARY_SERVICES = [
  {
    id: "spirometry",
    name: "Spirometry / Pulmonary Function Test",
    description: "Lung capacity and gas exchange assessment.",
    price: ENQUIRE_PRICE,
  },
];

export const PHYSIOTHERAPY_SERVICES = {
  id: "physiotherapy",
  name: "Physiotherapy",
  services: [
    "Ultrasonic therapy",
    "IFT",
    "Nerve muscle stimulator",
    "Wax bath",
    "etc.",
  ],
  price: ENQUIRE_PRICE,
};

export const CT_SCAN = {
  id: "ct-scan",
  name: "CT Scan",
  description:
    "Cross-sectional imaging of bones, vessels, and soft tissues — greater detail than standard X-ray.",
  machine: "GE Revolution ACT",
  image: {
    src: "/clinic/ct-scan-room.png",
    alt: "Medicare CT scan room — GE Revolution ACT scanner",
  },
};

export const CT_SCAN_RATES = [
  { name: "Brain", price: "₹1500" },
  { name: "PNS", price: "₹2600" },
  { name: "HRCT Temporal Bone", price: "₹2600" },
  { name: "Neck", price: "₹2600" },
  { name: "HRCT Thorax", price: "₹3500" },
  { name: "Chest", price: "₹2600" },
  { name: "Whole Abdomen", price: "₹5000" },
  { name: "Upper Abdomen", price: "₹2700" },
  { name: "N.C.C.T. KUB", price: "₹3100" },
  { name: "Urogram", price: "₹3100" },
];

export const CT_SCAN_CONTRAST_CHARGES = [
  { name: "Brain contrast", price: "₹1000" },
  { name: "Whole Abdomen contrast", price: "₹2200" },
  { name: "Other body parts contrast", price: "₹1800" },
];

export const OPD_TREATMENT = {
  id: "opd-treatment",
  name: "OPD / Out Patient Treatment Rooms",
  description:
    "Procedures requiring specialised equipment and trained staff.",
  services: [
    "Dressing",
    "Stitches",
    "Nebulization",
    "Injection services",
    "Incision and drainage procedures",
    "Plaster for broken bones",
    "Plaster cutting",
    "Wound packing",
    "Examination procedures",
  ],
  price: ENQUIRE_PRICE,
};

export const DIAGNOSTIC_CATEGORIES = [
  { id: "pathology", label: "Pathology" },
  { id: "endoscopy", label: "Endoscopy" },
  { id: "radiology", label: "Radiology" },
  { id: "cardiology", label: "Cardiology" },
  { id: "neurology", label: "Neurology" },
  { id: "pulmonary", label: "Pulmonary" },
  { id: "physiotherapy", label: "Physiotherapy" },
  { id: "ct-scan", label: "CT Scan" },
  { id: "opd", label: "OPD Treatment" },
];

export type DiagnosticServiceItem = {
  id: string;
  name: string;
  description?: string;
  machine?: string;
  price: string;
  services?: string[];
};
