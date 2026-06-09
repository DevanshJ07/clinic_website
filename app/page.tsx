import { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import TrustStrip from "@/components/home/TrustStrip";
import AboutPreviewSection from "@/components/home/AboutPreviewSection";
import FacilitiesPreviewSection from "@/components/home/FacilitiesPreviewSection";
import ContactSection from "@/components/home/ContactSection";

export const metadata: Metadata = {
  title: "Medicare | Trusted Healthcare in Howrah",
  description:
    "Medicare — over 37 years of trusted healthcare in Howrah. 600,000+ patients served. NABH-certified nursing home, NABL-accredited laboratory, and comprehensive care under one roof.",
};

export default function HomePage() {
  return (
    <div className="home-page">
      <HeroSection />
      <TrustStrip />
      <AboutPreviewSection />
      <FacilitiesPreviewSection />
      <ContactSection />
    </div>
  );
}
