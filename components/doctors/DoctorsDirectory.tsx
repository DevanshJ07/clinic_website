"use client";

import { useMemo, useState } from "react";
import DoctorCard from "@/components/doctors/DoctorCard";
import {
  DOCTOR_FILTER_TAGS,
  DOCTOR_DISPLAY_ORDER,
  MEDICARE_DOCTORS,
  type DoctorFilterId,
} from "@/lib/doctors";
import { cn } from "@/lib/utils";

export default function DoctorsDirectory() {
  const [activeFilter, setActiveFilter] = useState<DoctorFilterId>("all");

  const displayedDoctors = useMemo(() => {
    const list =
      activeFilter === "all"
        ? MEDICARE_DOCTORS
        : MEDICARE_DOCTORS.filter((d) => d.filterTags.includes(activeFilter));

    return [...list].sort(
      (a, b) =>
        DOCTOR_DISPLAY_ORDER.indexOf(
          a.id as (typeof DOCTOR_DISPLAY_ORDER)[number]
        ) -
        DOCTOR_DISPLAY_ORDER.indexOf(
          b.id as (typeof DOCTOR_DISPLAY_ORDER)[number]
        )
    );
  }, [activeFilter]);

  return (
    <div className="flex flex-col gap-8">
      <nav
        className="flex flex-wrap gap-2"
        aria-label="Filter doctors by speciality"
      >
        {DOCTOR_FILTER_TAGS.map((tag) => (
          <button
            key={tag.id}
            type="button"
            onClick={() => setActiveFilter(tag.id)}
            className={cn(
              "border px-3 py-1.5 text-[12px] font-medium transition-colors",
              activeFilter === tag.id
                ? "border-clinic-navy/30 bg-clinic-navy text-white"
                : "border-border/60 bg-white/60 text-clinic-gray hover:border-clinic-navy/20 hover:text-clinic-navy"
            )}
          >
            {tag.label}
          </button>
        ))}
      </nav>

      {displayedDoctors.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:gap-5 xl:grid-cols-3">
          {displayedDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      ) : (
        <p className="py-8 text-center text-[14px] font-normal text-clinic-gray">
          No doctors listed for this speciality. Please call to enquire.
        </p>
      )}
    </div>
  );
}
