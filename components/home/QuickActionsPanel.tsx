"use client";

import Link from "next/link";
import {
  FlaskConical,
  Stethoscope,
  Droplets,
  MapPin,
  ArrowRight,
} from "lucide-react";
import BookAppointmentDialog from "@/components/facilities/BookAppointmentDialog";
import { cn } from "@/lib/utils";

const cardBase =
  "group flex flex-col gap-2.5 rounded-sm border border-border/60 bg-white/55 backdrop-blur-[2px] p-4 hover:bg-white/90 hover:border-clinic-navy/20 transition-colors h-full text-left";

const actionLink =
  "inline-flex items-center gap-1 text-[12px] font-medium text-clinic-navy group-hover:text-clinic-blue transition-colors mt-auto pt-1";

const bookAppointmentCta =
  "mt-auto inline-flex items-center justify-center gap-1.5 rounded-sm text-[12px] font-semibold text-white bg-[oklch(0.18_0.045_252)] px-3 py-2 w-full whitespace-nowrap shadow-sm shadow-clinic-navy/20";

export default function QuickActionsPanel() {
  return (
    <section
      className="border-b border-border/80 bg-home-hero bg-institutional-pattern"
      aria-label="Quick actions"
    >
      <div className="container-wide pb-8 md:pb-10 pt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Book diagnostic test */}
          <BookAppointmentDialog serviceName="Diagnostic Test">
            <button type="button" className={cn(cardBase, "cursor-pointer")}>
              <FlaskConical className="w-4 h-4 text-clinic-navy/70 stroke-[1.5]" />
              <h2 className="font-display text-[15px] font-medium text-clinic-navy leading-snug">
                Book Diagnostic Test
              </h2>
              <p className="text-[12px] text-clinic-gray font-light leading-relaxed flex-1">
                Book tests and diagnostic services at Medicare.
              </p>
              <span className={bookAppointmentCta}>
                Book Appointment
                <ArrowRight className="w-3 h-3 stroke-[1.5]" />
              </span>
            </button>
          </BookAppointmentDialog>

          {/* Doctor appointment */}
          <Link href="/doctors" className={cardBase}>
            <Stethoscope className="w-4 h-4 text-clinic-navy/70 stroke-[1.5]" />
            <h2 className="font-display text-[15px] font-medium text-clinic-navy leading-snug">
              Doctor Appointment
            </h2>
            <p className="text-[12px] text-clinic-gray font-light leading-relaxed flex-1">
              Contact Medicare for doctor consultation availability.
            </p>
            <span className={actionLink}>
              View doctors
              <ArrowRight className="w-3 h-3 stroke-[1.5] group-hover:translate-x-0.5 transition-transform" />
            </span>
          </Link>

          {/* Home blood collection */}
          <BookAppointmentDialog serviceName="Home Blood Collection">
            <button type="button" className={cn(cardBase, "cursor-pointer")}>
              <Droplets className="w-4 h-4 text-clinic-navy/70 stroke-[1.5]" />
              <h2 className="font-display text-[15px] font-medium text-clinic-navy leading-snug">
                Home Blood Collection
              </h2>
              <p className="text-[12px] text-clinic-gray font-light leading-relaxed flex-1">
                Home blood collection facility available by trained collectors.
              </p>
              <span className={bookAppointmentCta}>
                Book Appointment
                <ArrowRight className="w-3 h-3 stroke-[1.5]" />
              </span>
            </button>
          </BookAppointmentDialog>

          {/* Find us */}
          <Link href="/find-us" className={cardBase}>
            <MapPin className="w-4 h-4 text-clinic-navy/70 stroke-[1.5]" />
            <h2 className="font-display text-[15px] font-medium text-clinic-navy leading-snug">
              Find Us
            </h2>
            <p className="text-[12px] text-clinic-gray font-light leading-relaxed flex-1">
              Visit Medicare at Shree Apartments, 138, G.T Road South, Shibpur, Howrah.
            </p>
            <span className={actionLink}>
              Get directions
              <ArrowRight className="w-3 h-3 stroke-[1.5] group-hover:translate-x-0.5 transition-transform" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
