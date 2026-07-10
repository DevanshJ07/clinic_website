import Image from "next/image";
import { Clock, User } from "lucide-react";
import DoctorAppointmentDialog from "@/components/doctors/DoctorAppointmentDialog";
import { type DoctorProfile } from "@/lib/doctors";

interface DoctorCardProps {
  doctor: DoctorProfile;
}

export default function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <article className="flex h-full flex-col rounded-sm border border-border/60 bg-white/70 p-5 md:p-6 shadow-sm shadow-clinic-navy/[0.03] backdrop-blur-[2px]">
      {doctor.photoSrc ? (
        <div className="mb-4">
          <div className="relative mb-4 h-[11rem] w-full shrink-0 overflow-hidden rounded-sm border border-border/60 bg-clinic-warm">
            <Image
              src={doctor.photoSrc}
              alt={doctor.photoAlt ?? doctor.name}
              fill
              className="object-cover"
              style={{
                objectPosition: doctor.photoObjectPosition ?? "50% 35%",
              }}
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          </div>
          <h3 className="font-display mt-3.5 text-[16px] font-medium leading-snug text-clinic-navy">
            {doctor.name}
          </h3>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {doctor.specialities.map((spec) => (
              <span
                key={spec}
                className="border border-clinic-blue/10 bg-clinic-blue-50 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.1em] text-clinic-navy/85"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex gap-4">
          <div
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-sm border border-border/60 bg-gradient-to-br from-clinic-warm via-white/90 to-clinic-blue-50/25"
            aria-hidden
          >
            <User className="h-5 w-5 text-clinic-gray/35 stroke-[1.5]" />
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="font-display text-[16px] font-medium leading-snug text-clinic-navy">
              {doctor.name}
            </h3>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {doctor.specialities.map((spec) => (
                <span
                  key={spec}
                  className="border border-clinic-blue/10 bg-clinic-blue-50 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.1em] text-clinic-navy/85"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="mt-5 flex flex-1 flex-col gap-3">
        <div>
          <p className="text-label mb-1">Qualifications</p>
          <p className="text-[13px] font-normal leading-relaxed text-clinic-navy">
            {doctor.qualifications}
          </p>
        </div>

        {doctor.additionalTraining && doctor.additionalTraining.length > 0 && (
          <div>
            <p className="text-label mb-1.5">Additional Training</p>
            <ul className="flex flex-col gap-1">
              {doctor.additionalTraining.map((item) => (
                <li
                  key={item}
                  className="relative pl-2.5 text-[12px] font-normal leading-relaxed text-clinic-navy/75 before:absolute before:left-0 before:top-[0.55em] before:h-1 before:w-1 before:rounded-full before:bg-clinic-navy/25"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {doctor.additional && (
          <div>
            <p className="text-label mb-1">Additional</p>
            <p className="text-[12px] font-normal leading-relaxed text-clinic-navy/75">
              {doctor.additional}
            </p>
          </div>
        )}

        {doctor.professionalExpertise &&
          doctor.professionalExpertise.length > 0 && (
            <div>
              <p className="text-label mb-1.5">Professional Expertise</p>
              <ul className="flex flex-col gap-1">
                {doctor.professionalExpertise.map((item) => (
                  <li
                    key={item}
                    className="relative pl-2.5 text-[12px] font-normal leading-relaxed text-clinic-navy/75 before:absolute before:left-0 before:top-[0.55em] before:h-1 before:w-1 before:rounded-full before:bg-clinic-navy/25"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

        {(doctor.extendedCredentials?.length ||
          doctor.membershipsAndHonors?.length) && (
          <details className="group rounded-sm border border-border/50 bg-white/50">
            <summary className="cursor-pointer list-none px-3 py-2 text-[12px] font-medium text-clinic-navy marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="inline-flex items-center gap-1.5">
                View credentials
                <span
                  className="text-[10px] text-clinic-navy/50 transition-transform group-open:rotate-180"
                  aria-hidden
                >
                  ▾
                </span>
              </span>
            </summary>
            <div className="flex flex-col gap-3 border-t border-border/40 px-3 pb-3 pt-2">
              {doctor.extendedCredentials &&
                doctor.extendedCredentials.length > 0 && (
                  <div>
                    <p className="text-label mb-1.5">Additional Credentials</p>
                    <ul className="flex flex-col gap-1">
                      {doctor.extendedCredentials.map((item) => (
                        <li
                          key={item}
                          className="relative pl-2.5 text-[11px] font-normal leading-relaxed text-clinic-navy/75 before:absolute before:left-0 before:top-[0.55em] before:h-1 before:w-1 before:rounded-full before:bg-clinic-navy/25"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              {doctor.membershipsAndHonors &&
                doctor.membershipsAndHonors.length > 0 && (
                  <div>
                    <p className="text-label mb-1.5">Professional Highlights</p>
                    <ul className="flex flex-col gap-1">
                      {doctor.membershipsAndHonors.map((item) => (
                        <li
                          key={item}
                          className="relative pl-2.5 text-[11px] font-normal leading-relaxed text-clinic-navy/75 before:absolute before:left-0 before:top-[0.55em] before:h-1 before:w-1 before:rounded-full before:bg-clinic-navy/25"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
            </div>
          </details>
        )}

        {doctor.professionalHighlight && (
          <div className="rounded-sm border border-clinic-navy/10 bg-clinic-blue-50/50 px-3 py-2.5">
            <p className="text-label mb-1">Professional Highlight</p>
            <p className="line-clamp-4 text-[12px] font-normal leading-relaxed text-clinic-navy">
              {doctor.professionalHighlight}
            </p>
          </div>
        )}

        {doctor.registration && (
          <p className="text-[12px] font-normal text-clinic-navy/75">
            <span className="font-medium text-clinic-navy">Registration · </span>
            {doctor.registration}
          </p>
        )}

        {doctor.chamber && (
          <p className="text-[12px] font-normal text-clinic-navy/75">
            <span className="font-medium text-clinic-navy">Chamber · </span>
            {doctor.chamber}
          </p>
        )}

        <div className="flex items-start gap-2 border-t border-border/50 pt-1">
          <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-clinic-navy/50 stroke-[1.5]" />
          <p className="text-[12px] font-normal leading-relaxed text-clinic-navy/75">
            <span className="font-medium text-clinic-navy">Timing · </span>
            {doctor.timing}
          </p>
        </div>
      </div>

      <div className="mt-5 border-t border-border/40 pt-4">
        <DoctorAppointmentDialog doctorName={doctor.name} className="w-full" />
      </div>
    </article>
  );
}
