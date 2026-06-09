"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone } from "lucide-react";
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
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm transition-[border-color,box-shadow] duration-300",
        scrolled
          ? "border-b border-border shadow-[0_1px_0_0_rgba(0,0,0,0.03)]"
          : "border-b border-transparent"
      )}
    >
      <div className="container-wide">
        <nav className="flex items-center justify-between h-[4.25rem] md:h-[4.75rem]">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-baseline gap-3 shrink-0"
            aria-label="Medicare — Home"
          >
            <span className="font-display text-[1.35rem] md:text-[1.5rem] font-medium tracking-[-0.02em] text-clinic-navy">
              Medicare
            </span>
            <span className="hidden sm:inline text-[10px] font-normal uppercase tracking-[0.18em] text-clinic-gray/80">
              Est. {CLINIC.established}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
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
                    "text-[13px] tracking-wide transition-colors duration-150 py-1 border-b-2 border-transparent",
                    isActive
                      ? "text-clinic-navy font-medium border-clinic-navy"
                      : "text-clinic-gray hover:text-clinic-navy"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop contact */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href={`tel:${CLINIC.contact.helpline}`}
              className="flex items-center gap-2 text-[13px] text-clinic-gray hover:text-clinic-navy transition-colors"
            >
              <Phone className="w-3.5 h-3.5 stroke-[1.5]" />
              <span className="hidden xl:inline text-clinic-gray/80 mr-0.5">
                24×7
              </span>
              <span>{CLINIC.contact.helpline}</span>
            </a>
            <Link
              href="/contact"
              className="text-[13px] font-medium text-clinic-navy border border-clinic-navy/20 px-4 py-2 hover:bg-clinic-navy hover:text-white transition-colors duration-200"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <button
                type="button"
                className="lg:hidden p-2 -mr-2 text-clinic-navy"
                aria-label="Open navigation menu"
              >
                <Menu className="w-5 h-5 stroke-[1.5]" />
              </button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[min(100vw-2rem,320px)] p-0 flex flex-col border-l border-border">
              <SheetHeader className="px-6 pt-8 pb-4 border-b border-border">
                <SheetTitle asChild>
                  <Link href="/" className="flex flex-col gap-1 text-left">
                    <span className="font-display text-xl font-medium text-clinic-navy">
                      Medicare
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.18em] text-clinic-gray font-normal">
                      Clinic &amp; Diagnostic Centre
                    </span>
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <nav className="flex-1 px-4 py-6 flex flex-col">
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
                          "px-3 py-3.5 text-[15px] border-b border-border/60 transition-colors",
                          isActive
                            ? "text-clinic-navy font-medium"
                            : "text-clinic-gray hover:text-clinic-navy"
                        )}
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  );
                })}
              </nav>

              <div className="px-6 pb-8 pt-4 border-t border-border flex flex-col gap-4">
                <a
                  href={`tel:${CLINIC.contact.helpline}`}
                  className="text-sm text-clinic-navy"
                >
                  <span className="block text-[10px] uppercase tracking-[0.15em] text-clinic-gray mb-1">
                    24×7 Helpline
                  </span>
                  {CLINIC.contact.helpline}
                </a>
                <a
                  href={`tel:03340073713`}
                  className="text-sm text-clinic-gray"
                >
                  <span className="block text-[10px] uppercase tracking-[0.15em] text-clinic-gray/80 mb-1">
                    Diagnostic &amp; OPD
                  </span>
                  {CLINIC.contact.diagnosticOpd}
                </a>
                <SheetClose asChild>
                  <Link
                    href="/contact"
                    className="text-center text-sm font-medium text-white bg-clinic-navy py-3 hover:bg-clinic-navy/90 transition-colors"
                  >
                    Contact Us
                  </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}
