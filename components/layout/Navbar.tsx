"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, Cross } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { NAV_LINKS, CLINIC } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-white transition-shadow duration-300",
        scrolled ? "shadow-md" : "shadow-sm border-b border-border"
      )}
    >
      {/* Top accent strip */}
      <div className="h-1 w-full bg-gradient-to-r from-clinic-blue via-clinic-blue-light to-clinic-green" />

      <div className="container-clinic">
        <nav className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group shrink-0"
            aria-label="Medicare — Home"
          >
            {/* Clinic icon mark */}
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-clinic-blue shadow-sm transition-transform duration-200 group-hover:scale-105">
              <Cross className="w-4.5 h-4.5 text-white fill-white" strokeWidth={0} />
            </span>
            <span className="flex flex-col leading-tight">
              <span
                className="text-xl font-bold tracking-tight text-clinic-navy"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Medicare
              </span>
              <span className="text-[10px] font-medium tracking-widest uppercase text-clinic-gray hidden sm:block">
                Clinic &amp; Diagnostic Centre
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-150",
                    isActive
                      ? "text-clinic-blue bg-clinic-blue-50"
                      : "text-clinic-navy/80 hover:text-clinic-blue hover:bg-clinic-blue-50"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${CLINIC.contact.phone2.replace(/\s/g, "")}`}
              className="flex items-center gap-2 text-sm text-clinic-gray hover:text-clinic-blue transition-colors duration-150"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="font-medium">{CLINIC.contact.phone2}</span>
            </a>
            <Button
              asChild
              className="bg-clinic-blue hover:bg-clinic-navy text-white h-9 px-5 text-sm rounded-lg shadow-sm transition-colors duration-150"
            >
              <a
                href={`https://wa.me/${CLINIC.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Appointment
              </a>
            </Button>
          </div>

          {/* Mobile menu trigger */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-clinic-navy hover:bg-clinic-blue-50"
                aria-label="Open navigation menu"
              >
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[300px] p-0 flex flex-col">
              <div className="h-1 w-full bg-gradient-to-r from-clinic-blue via-clinic-blue-light to-clinic-green shrink-0" />

              <SheetHeader className="px-6 pt-5 pb-2">
                <SheetTitle asChild>
                  <Link href="/" className="flex items-center gap-2.5">
                    <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-clinic-blue">
                      <Cross className="w-4.5 h-4.5 text-white fill-white" strokeWidth={0} />
                    </span>
                    <span className="flex flex-col leading-tight">
                      <span
                        className="text-xl font-bold text-clinic-navy"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        Medicare
                      </span>
                      <span className="text-[10px] font-medium tracking-widest uppercase text-clinic-gray">
                        Clinic &amp; Diagnostic Centre
                      </span>
                    </span>
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <nav className="flex-1 px-4 py-4 flex flex-col gap-1">
                {NAV_LINKS.map((link) => {
                  const isActive =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);
                  return (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-150",
                          isActive
                            ? "bg-clinic-blue-50 text-clinic-blue font-semibold"
                            : "text-clinic-navy/80 hover:bg-clinic-blue-50 hover:text-clinic-blue"
                        )}
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  );
                })}
              </nav>

              <div className="px-4 pb-6 pt-2 border-t border-border flex flex-col gap-3">
                <a
                  href={`tel:${CLINIC.contact.phone2.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-clinic-navy bg-clinic-blue-50 hover:bg-secondary transition-colors"
                >
                  <Phone className="w-4 h-4 text-clinic-blue" />
                  {CLINIC.contact.phone2}
                </a>
                <Button
                  asChild
                  className="w-full bg-clinic-blue hover:bg-clinic-navy text-white h-10 rounded-xl text-sm"
                >
                  <a
                    href={`https://wa.me/${CLINIC.contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Appointment
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}
