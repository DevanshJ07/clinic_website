"use client";

import { useMemo, useState } from "react";
import DoctorCard from "@/components/doctors/DoctorCard";
import {
  DOCTOR_FILTER_TAGS,
  MEDICARE_DOCTORS,
  type DoctorFilterId,
} from "@/lib/doctors";
import { cn } from "@/lib/utils";

export default function DoctorsDirectory() {
  const [activeFilter, setActiveFilter] = useState<DoctorFilterId>("all");

  const featuredDoctor = MEDICARE_DOCTORS.find((d) => d.featured);
  const otherDoctors = MEDICARE_DOCTORS.filter((d) => !d.featured);

  const filteredDoctors = useMemo(() => {
    if (activeFilter === "all") return otherDoctors;
    return otherDoctors.filter((d) => d.filterTags.includes(activeFilter));
  }, [activeFilter, otherDoctors]);

  const showFeatured =
    featuredDoctor &&
    (activeFilter === "all" ||
      featuredDoctor.filterTags.includes(activeFilter));

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
              "text-[12px] font-medium px-3 py-1.5 border transition-colors",
              activeFilter === tag.id
                ? "border-clinic-navy/30 bg-clinic-navy text-white"
                : "border-border/60 bg-white/60 text-clinic-gray hover:text-clinic-navy hover:border-clinic-navy/20"
            )}
          >
            {tag.label}
          </button>
        ))}
      </nav>

      {showFeatured && featuredDoctor && (
        <DoctorCard doctor={featuredDoctor} featured />
      )}

      {filteredDoctors.length > 0 ? (
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-5">
          {filteredDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      ) : (
        !showFeatured && (
          <p className="text-[14px] text-clinic-gray font-light py-8 text-center">
            No doctors listed for this speciality. Please call to enquire.
          </p>
        )
      )}
    </div>
  );
}
