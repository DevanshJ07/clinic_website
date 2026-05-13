export const CLINIC = {
  name: "Medicare",
  nameFull: "Medicare Clinic & Diagnostic Centre",
  tagline: "Trusted Healthcare, Compassionate Care",
  established: 1987,
  yearsOfService: "37+",
  address: {
    street: "12, Rabindra Sarani, Shibpur",
    city: "Howrah",
    state: "West Bengal",
    pin: "711 102",
    country: "India",
    full: "12, Rabindra Sarani, Shibpur, Howrah – 711 102, West Bengal",
  },
  contact: {
    phone1: "+91 33 2638 4455",
    phone2: "+91 98300 12345",
    whatsapp: "+919830012345",
    email: "info@medicarehowrah.in",
  },
  timings: {
    weekdays: "Monday – Saturday",
    weekdaysHours: "8:00 AM – 8:00 PM",
    sunday: "Sunday & Holidays",
    sundayHours: "9:00 AM – 1:00 PM",
    emergency: "Emergency services available 24×7",
  },
  landmark: "Near Shibpur Police Station, opposite State Bank of India",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Facilities", href: "/facilities" },
  { label: "Doctors", href: "/doctors" },
  { label: "Find Us", href: "/find-us" },
  { label: "Contact", href: "/contact" },
];

export const STATS = [
  { value: "37+", label: "Years of Service", sub: "Est. 1987" },
  { value: "50,000+", label: "Patients Served", sub: "Trusted by families" },
  { value: "15+", label: "Specialist Doctors", sub: "Expert care team" },
  { value: "8+", label: "Specialties", sub: "All-under-one-roof" },
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
    shortDesc: "Accurate blood work, panels, and rapid diagnostics.",
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
    icon: "Award",
    title: "37+ Years of Legacy",
    desc: "One of Howrah's oldest and most trusted all-under-one-roof clinics, serving generations of families since 1987.",
  },
  {
    icon: "Users",
    title: "Expert Specialists",
    desc: "A team of 15+ experienced doctors across 8 disciplines, ensuring the right diagnosis and the right care.",
  },
  {
    icon: "Building2",
    title: "All-Under-One-Roof",
    desc: "OPD, diagnostics, X-ray, specialist clinics — everything you need in one clean, convenient location.",
  },
  {
    icon: "ShieldCheck",
    title: "Accurate Diagnostics",
    desc: "Modern lab and digital radiology deliver precise, reliable results that your doctor can depend on.",
  },
  {
    icon: "HeartHandshake",
    title: "Family-Centred Care",
    desc: "From newborns to elders, every patient receives personalised attention in a welcoming, respectful environment.",
  },
  {
    icon: "MapPin",
    title: "Central Howrah Location",
    desc: "Conveniently located in Shibpur with easy access by road and public transport for patients across the district.",
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
