export const INSURANCE_HERO = {
  title: "Insurance & Mediclaim",
  subtitle:
    "Medicare is empanelled with government insurers, third-party administrators, and private insurance companies to provide eligible clients with cashless benefits for inpatient and/or outpatient care, along with pre-policy and renewal medical health check-up services.",
};

export const SCHEME_NOTE =
  "Eligibility and approval are subject to scheme and insurance verification.";

export const GOVERNMENT_SCHEMES = [
  {
    id: "ab-pmjay",
    name: "Ayushman Bharat – Pradhan Mantri Jan Arogya Yojana",
    shortName: "AB-PMJAY",
    featured: true,
  },
];

export const INSURANCE_ENQUIRY_PHONES = [
  "9836612523",
  "9830009417",
  "9331076661",
];

export const CASHLESS_COVERAGE_NOTE =
  "Cashless approval, coverage, and eligibility are subject to the terms of the patient's policy, insurer/TPA authorization, and documentation requirements. Patients are advised to confirm eligibility with Medicare before admission or treatment.";

export type EmpanelmentCategory = {
  id: string;
  title: string;
  supportingLine?: string;
  partners: string[];
};

export const EMPANELMENT_CATEGORIES: EmpanelmentCategory[] = [
  {
    id: "government-insurers",
    title: "Government Insurance Companies",
    supportingLine:
      "Services are processed through the respective Third Party Administrators, subject to eligibility and authorization.",
    partners: [
      "National Insurance Company Ltd.",
      "The New India Assurance Company Ltd.",
      "United India Insurance Company Ltd.",
      "The Oriental Insurance Company Ltd.",
      "Life Insurance Corporation of India",
      "SBI Health Insurance Ltd.",
    ],
  },
  {
    id: "tpas",
    title: "Third Party Administrators",
    partners: [
      "Family Health Plan Insurance TPA",
      "Heritage Health Insurance TPA",
      "Genins India Insurance TPA Ltd.",
      "Raksha Health Insurance TPA Pvt. Ltd.",
      "Medi Assist Insurance TPA",
      "Vidal Health Insurance TPA",
      "Vipul MedCorp Insurance TPA",
      "Good Health Insurance TPA",
      "Ericson Insurance TPA Pvt. Ltd.",
      "Aditya Birla General Insurance",
      "Care Health Insurance",
      "Go Digit General Insurance Ltd.",
      "Niva Bupa General Insurance",
      "Future Generali Health Insurance",
      "Galaxy Health Insurance",
      "Health India Insurance TPA",
    ],
  },
  {
    id: "private-insurers",
    title: "Private Insurance Companies",
    partners: [
      "Cigna TTK — through TPA",
      "Royal Sundaram — through TPA",
      "Tata AIG Health Insurance — through TPA",
      "Bajaj Allianz General & Life Insurance",
      "ICICI Lombard General Insurance",
      "Star Health & Allied Insurance",
      "HDFC ERGO General Insurance",
    ],
  },
];
