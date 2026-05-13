import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Medicare | Trusted Healthcare in Howrah Since 1987",
    template: "%s | Medicare Howrah",
  },
  description:
    "Medicare — one of Howrah's first all-under-one-roof clinics, delivering trusted, compassionate healthcare to families for over 37 years. OPD, diagnostics, gynaecology, paediatrics, orthopaedics and more.",
  keywords: [
    "Medicare Howrah",
    "medical clinic Howrah",
    "diagnostic centre Howrah",
    "doctor Howrah",
    "all under one roof clinic",
    "best clinic Howrah",
    "healthcare West Bengal",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Medicare Clinic & Diagnostic Centre",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
