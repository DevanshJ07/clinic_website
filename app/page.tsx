import { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import QuickActionsPanel from "@/components/home/QuickActionsPanel";
import TrustStrip from "@/components/home/TrustStrip";
import AboutPreviewSection from "@/components/home/AboutPreviewSection";
import FacilitiesPreviewSection from "@/components/home/FacilitiesPreviewSection";
import ContactSection from "@/components/home/ContactSection";

export const metadata: Metadata = {
  title: "Medicare | Trusted Healthcare in Howrah",
  description:
    "Medicare — over 37 years of trusted healthcare in Howrah. 600,000+ patients served. NABH-certified Nursing Home, NABL-accredited laboratory, and comprehensive care under one roof.",
};

export default function HomePage() {
  return (
    <div className="home-page">
      <HeroSection />
      <QuickActionsPanel />
      <TrustStrip />
      <AboutPreviewSection />
      <FacilitiesPreviewSection />
      <ContactSection />
    </div>
  );
}
