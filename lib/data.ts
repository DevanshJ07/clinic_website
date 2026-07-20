export const CLINIC = {
  name: "Medicare",
  nameFull: "Medicare Clinic & Diagnostic Centre",
  tagline: "Trusted Healthcare, Compassionate Care",
  established: 1988,
  yearsOfService: "37+",
  address: {
    building: "Shree Apartments",
    street: "138, G.T Road South",
    area: "Shibpur",
    city: "Howrah",
    state: "West Bengal",
    pin: "711102",
    country: "India",
    full: "Shree Apartments, 138, G.T Road South, Shibpur, Howrah, West Bengal 711102",
  },
  maps: {
    url: "https://maps.app.goo.gl/pZ4Mnb3dqWwhtUZU6",
    embed:
      "https://maps.google.com/maps?q=Shree+Apartments,+138,+G.T+Road+South,+Shibpur,+Howrah,+West+Bengal+711102&hl=en&z=16&output=embed",
  },
  contact: {
    helpline: "9331076661",
    diagnosticOpd: "033-40073713",
    nursingHome: "033-2638-1777 / 1778 / 1788 / 9237",
    nursingHomeTel: "03326381777",
    email: "medicareclinic@hotmail.com",
  },
  timings: {
    diagnosticOpd: {
      label: "Diagnostic Centre & OPD",
      weekdays: "Monday – Saturday",
      weekdaysHours: "8:00 AM – 8:00 PM",
      sunday: "Sunday",
      sundayHours: "8:00 AM – 4:00 PM",
    },
    nursingHome: {
      label: "Nursing Home",
      hours: "Open 24 Hours",
    },
    open365: "Open 365 days a year",
    weekdays: "Monday – Saturday",
    weekdaysHours: "8:00 AM – 8:00 PM",
    sunday: "Sunday",
    sundayHours: "8:00 AM – 4:00 PM",
    emergency: "Nursing Home open 24 hours",
  },
  landmark: "Opposite HDFC Bank, Howrah Jute Mill, Shibpur",
  landmarks: ["Opposite HDFC Bank", "Howrah Jute Mill"],
};

export const POSITIONING_STATEMENT =
  "Howrah's first integrated medical centre since 1988, committed to accessible and affordable healthcare.";

export const DIAGNOSTIC_24_HOUR_HIGHLIGHT =
  "X-ray, CT Scan and Pathology services available 24 hours.";

export const INDOOR_ADMISSION_HIGHLIGHT =
  "Indoor admission available round the clock.";

export const CAREERS = {
  heading: "Join Our Team",
  text: "For better career prospects, join our team.",
  phones: [
    { display: "98300-09417", tel: "9830009417" },
    { display: "98310-05555", tel: "983105555" },
  ],
};

export const ACCREDITATION_MARKS = [
  {
    id: "nabh",
    alt: "NABH accredited Nursing Home",
    src: "/accreditation/nabh-certification-mark.png",
    placeholderLabel: "Official NABH certification mark",
    requiredFile: "public/accreditation/nabh-certification-mark.png",
    available: false,
  },
  {
    id: "nabl",
    alt: "NABL accredited Medical Laboratory",
    src: "/accreditation/nabl-accreditation-symbol.png",
    placeholderLabel: "Official NABL accreditation symbol",
    requiredFile: "public/accreditation/nabl-accreditation-symbol.png",
    available: false,
  },
] as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Facilities", href: "/facilities" },
  { label: "Nursing Home", href: "/nursing-home" },
  { label: "Insurance", href: "/insurance-schemes" },
  { label: "Doctors", href: "/doctors" },
  { label: "Find Us", href: "/find-us" },
  { label: "Contact", href: "/contact" },
];

export const HOME_TRUST = [
  { value: "37+", label: "Years of Service" },
  {
    value: "600,000+",
    label: "Patients Served",
    featured: true,
    sub: "Overall patient care",
  },
  { value: "NABH", label: "Certified Nursing Home" },
  { value: "NABL", label: "Certified Laboratory" },
  { value: "24×7", label: "Nursing Home" },
];

export const STATS = [
  {
    value: "37+",
    label: "Years of Service",
    sub: "Since 1988",
  },
  {
    value: "NABH",
    label: "Nursing Home",
    sub: "Accredited inpatient care",
  },
  {
    value: "NABL",
    label: "Laboratory",
    sub: "Accredited diagnostics",
  },
  {
    value: "24×7",
    label: "Nursing Home",
    sub: "Open around the clock",
  },
];

export const COVID_VACCINATION = {
  value: "30,000+",
  label: "COVID-19 Vaccinations Administered",
  sub: "Supporting the community during the pandemic through Covishield vaccination services.",
};

export const CERTIFICATIONS = [
  {
    id: "nabh",
    acronym: "NABH",
    fullName:
      "National Accreditation Board for Hospitals & Healthcare Providers",
    appliesTo: "Nursing Home",
    description:
      "Our Nursing Home meets nationally recognised standards for patient safety, clinical quality, and compassionate inpatient care.",
    accent: "blue" as const,
  },
  {
    id: "nabl",
    acronym: "NABL",
    fullName:
      "National Accreditation Board for Testing and Calibration Laboratories",
    appliesTo: "Laboratory",
    description:
      "Our laboratory follows rigorous quality protocols — ensuring accurate, reliable diagnostic results you and your doctor can depend on.",
    accent: "green" as const,
  },
];

// Image registry — each image is assigned a primary page/section to avoid repetition.
// Home hero: reception-nabh, ct-scan-room, waiting-area
// About carousel: reception-desk (new), reception-nabh, pathology-wide, ultrasound-room, ct-scan-room, xray-interior, operating-room, waiting-area
// Facilities: xray-interior, pathology-wide, ultrasound-room, physiotherapy-room, phlebotomy-room, uroflowmetry-room, ct-scan-room
// Nursing Home: operating-room, pharmacy
export const CLINIC_IMAGES = [
  {
    src: "/clinic/reception-nabh.png",
    alt: "Medicare clinic reception with NABH accreditation",
  },
  {
    src: "/clinic/pathology-wide.png",
    alt: "Medicare NABL-accredited pathology laboratory with diagnostic analyzers",
  },
  {
    src: "/clinic/ultrasound-room.png",
    alt: "Medicare ultrasound and colour Doppler imaging room",
  },
  {
    src: "/clinic/ct-scan-room.png",
    alt: "Medicare CT scan room with GE multi-slice scanner",
  },
  {
    src: "/clinic/xray-interior.png",
    alt: "Medicare digital X-ray room",
  },
  {
    src: "/clinic/reception-desk.png",
    alt: "Medicare clinic reception — staff at the front desk",
  },
  {
    src: "/clinic/operating-room.png",
    alt: "Medicare Nursing Home operation theatre",
  },
  {
    src: "/clinic/waiting-area.png",
    alt: "Medicare clinic waiting area",
  },
];

export const ABOUT_HISTORY = [
  "Medicare was started by two qualified eminent doctors in 1988 after noticing the lack of modern diagnostic and treatment facilities in Howrah. The idea of Medicare, a modern diagnostic cum nursing room with all facilities under one roof, was conceptualized from this need.",
  "Medicare has been a pioneer in bringing modern diagnostic facilities to Howrah since 1988 and offers diagnostic services, specialist doctor consultations, treatments, and Nursing Home facilities under one roof.",
  "Medicare has earned the trust of thousands of doctors and patients for dependable treatment and care at cost-effective rates.",
];

export const HOME_ABOUT = {
  title: "Pioneer in modern diagnostics since 1988",
  body: "Medicare was started by two qualified eminent doctors in 1988 after noticing the lack of modern diagnostic and treatment facilities in Howrah — Medicare, a modern diagnostic cum nursing room with all facilities under one roof was conceptualized.",
};

export const HOME_FACILITIES = [
  {
    id: "general-medicine",
    name: "OPD & General Medicine",
    desc: "Outpatient consultations and general medical care.",
  },
  {
    id: "pathology",
    name: "Pathology & Laboratory",
    desc: "NABL-accredited diagnostic laboratory.",
  },
  {
    id: "radiology",
    name: "Diagnostic Imaging",
    desc: "Digital X-Ray, ECG, and advanced imaging.",
  },
  {
    id: "nursing-home",
    name: "Nursing Home",
    desc: "NABH-certified inpatient care, open 24 hours.",
  },
];

export const FACILITIES_PREVIEW = [
  {
    id: "general-medicine",
    name: "General Medicine",
    icon: "Stethoscope",
    shortDesc: "Expert OPD consultations for all age groups.",
  },
  {
    id: "pathology",
    name: "Pathology & Lab",
    icon: "FlaskConical",
    shortDesc: "NABL-accredited laboratory with accurate, rapid diagnostics.",
  },
  {
    id: "radiology",
    name: "Digital X-Ray & ECG",
    icon: "ScanLine",
    shortDesc: "Modern digital imaging with same-day reports.",
  },
  {
    id: "gynaecology",
    name: "Gynaecology",
    icon: "Heart",
    shortDesc: "Complete women's health and maternity care.",
  },
  {
    id: "paediatrics",
    name: "Paediatrics",
    icon: "Baby",
    shortDesc: "Dedicated child care, vaccinations, and growth monitoring.",
  },
  {
    id: "orthopaedics",
    name: "Orthopaedics",
    icon: "Activity",
    shortDesc: "Bone, joint, and sports injury management.",
  },
  {
    id: "ent",
    name: "ENT Clinic",
    icon: "Ear",
    shortDesc: "Expert ear, nose, and throat care for all ages.",
  },
  {
    id: "dental",
    name: "Dental Care",
    icon: "SmilePlus",
    shortDesc: "Comprehensive dental services in a gentle environment.",
  },
];

export const WHY_US = [
  {
    icon: "BadgeCheck",
    title: "NABH & NABL Accredited",
    desc: "Nationally accredited Nursing Home and laboratory — a mark of quality, safety, and clinical excellence you can verify and trust.",
  },
  {
    icon: "Award",
    title: "37+ Years of Legacy",
    desc: "One of Howrah's first all-under-one-roof clinics, pioneering advanced diagnostics since 1988 and serving generations of families.",
  },
  {
    icon: "Building2",
    title: "All-Under-One-Roof",
    desc: "Diagnostics, specialist OPD, and Nursing Home care — comprehensive healthcare in one trusted, accessible location.",
  },
  {
    icon: "Users",
    title: "Trusted by Thousands",
    desc: "Trusted by thousands of doctors and patients across Howrah for dependable treatment and care.",
  },
  {
    icon: "Building2",
    title: "Nursing Home — 24 Hours",
    desc: "NABH-certified Nursing Home facilities, open around the clock.",
  },
  {
    icon: "HeartHandshake",
    title: "Care at Reasonable Rates",
    desc: "Quality healthcare guided by experienced professionals — delivered with compassion and respect, without compromising on standards.",
  },
];

export const DOCTORS_PREVIEW = [
  {
    id: "dr-rajiv-ghosh",
    name: "Dr. Rajiv Kumar Ghosh",
    initials: "RG",
    qualification: "MBBS, MD (Internal Medicine)",
    specialization: "General Medicine",
    experience: "30+ Years",
    colorFrom: "from-blue-100",
    colorTo: "to-blue-200",
    textColor: "text-blue-800",
  },
  {
    id: "dr-priya-chakraborty",
    name: "Dr. Priya Chakraborty",
    initials: "PC",
    qualification: "MBBS, MS (Obs & Gynaecology)",
    specialization: "Gynaecology & Obstetrics",
    experience: "22+ Years",
    colorFrom: "from-rose-100",
    colorTo: "to-pink-200",
    textColor: "text-rose-800",
  },
  {
    id: "dr-amit-das",
    name: "Dr. Amit Kumar Das",
    initials: "AD",
    qualification: "MBBS, MD (Paediatrics)",
    specialization: "Paediatrics",
    experience: "18+ Years",
    colorFrom: "from-green-100",
    colorTo: "to-emerald-200",
    textColor: "text-green-800",
  },
];

export const TESTIMONIALS = [
  {
    name: "Sanjay Mukherjee",
    location: "Shibpur, Howrah",
    initials: "SM",
    text: "Our family has been coming to Medicare for over 20 years. The doctors are exceptionally knowledgeable and the staff always makes us feel cared for. Truly a trusted institution.",
    rating: 5,
  },
  {
    name: "Ruma Dey",
    location: "Santragachi, Howrah",
    initials: "RD",
    text: "Dr. Chakraborty guided me through my entire pregnancy with such care and professionalism. Clean facilities, accurate reports, and prompt service. I recommend this clinic to everyone.",
    rating: 5,
  },
  {
    name: "Tapas Chatterjee",
    location: "Liluah, Howrah",
    initials: "TC",
    text: "Everything under one roof — pathology, X-ray, specialist consultations. Dr. Ghosh explained my condition with patience. This is what quality healthcare looks like.",
    rating: 5,
  },
];

export const CONTACT_LINES = [
  {
    id: "helpline",
    label: "24×7 Helpline",
    detail: "Always available",
    phone: CLINIC.contact.helpline,
    tel: "9331076661",
  },
  {
    id: "diagnostic-opd",
    label: "Diagnostic Centre & OPD",
    detail: "Mon–Sat 8 AM – 8 PM · Sun 8 AM – 4 PM",
    phone: CLINIC.contact.diagnosticOpd,
    tel: "03340073713",
  },
  {
    id: "nursing-home",
    label: "Nursing Home (24 hrs)",
    detail: "Open 24 hours",
    phone: CLINIC.contact.nursingHome,
    tel: CLINIC.contact.nursingHomeTel,
  },
];
