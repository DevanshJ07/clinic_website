import { Clock } from "lucide-react";
import DoctorAppointmentDialog from "@/components/doctors/DoctorAppointmentDialog";
import {
  getDoctorInitials,
  type DoctorProfile,
} from "@/lib/doctors";
import { cn } from "@/lib/utils";

interface DoctorCardProps {
  doctor: DoctorProfile;
  featured?: boolean;
}

export default function DoctorCard({ doctor, featured = false }: DoctorCardProps) {
  const initials = getDoctorInitials(doctor.name);

  return (
    <article
      className={cn(
        "flex flex-col rounded-sm border bg-white/70 backdrop-blur-[2px] shadow-sm shadow-clinic-navy/[0.03]",
        featured
          ? "border-clinic-navy/20 p-6 md:p-8"
          : "border-border/60 p-5 md:p-6 h-full"
      )}
    >
      <div className="flex gap-4 md:gap-5">
        <div
          className={cn(
            "shrink-0 rounded-sm border border-border/60 bg-clinic-blue-50 flex items-center justify-center font-display font-medium text-clinic-navy",
            featured ? "w-16 h-16 md:w-[4.5rem] md:h-[4.5rem] text-xl" : "w-14 h-14 text-lg"
          )}
        >
          {initials}
        </div>

        <div className="min-w-0 flex-1">
          <h3
            className={cn(
              "font-display font-medium text-clinic-navy leading-snug",
              featured ? "text-[1.25rem] md:text-[1.375rem]" : "text-[16px]"
            )}
          >
            {doctor.name}
          </h3>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {doctor.specialities.map((spec) => (
              <span
                key={spec}
                className="text-[10px] uppercase tracking-[0.1em] text-clinic-navy/80 bg-clinic-blue-50 border border-clinic-blue/10 px-2 py-0.5"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className={cn("flex flex-col gap-3 mt-5", featured && "md:mt-6")}>
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-clinic-gray mb-1">
            Qualifications
          </p>
          <p className="text-[13px] text-clinic-navy font-light leading-relaxed">
            {doctor.qualifications}
          </p>
        </div>

        {doctor.additionalTraining && doctor.additionalTraining.length > 0 && (
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-clinic-gray mb-1.5">
              Additional Training
            </p>
            <ul className="flex flex-col gap-1">
              {doctor.additionalTraining.map((item) => (
                <li
                  key={item}
                  className="text-[12px] text-clinic-gray font-light leading-relaxed pl-2.5 relative before:absolute before:left-0 before:top-[0.55em] before:w-1 before:h-1 before:rounded-full before:bg-clinic-navy/25"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {doctor.additional && (
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-clinic-gray mb-1">
              Additional
            </p>
            <p className="text-[12px] text-clinic-gray font-light leading-relaxed">
              {doctor.additional}
            </p>
          </div>
        )}

        {doctor.professionalHighlight && (
          <div className="rounded-sm border border-clinic-navy/10 bg-clinic-blue-50/50 px-4 py-3">
            <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-clinic-gray mb-1.5">
              Professional Highlight
            </p>
            <p className="text-[13px] text-clinic-navy font-light leading-relaxed">
              {doctor.professionalHighlight}
            </p>
          </div>
        )}

        {doctor.registration && (
          <p className="text-[12px] text-clinic-gray font-light">
            <span className="text-clinic-navy/70 font-medium">Registration · </span>
            {doctor.registration}
          </p>
        )}

        {doctor.chamber && (
          <p className="text-[12px] text-clinic-gray font-light">
            <span className="text-clinic-navy/70 font-medium">Chamber · </span>
            {doctor.chamber}
          </p>
        )}

        <div className="flex items-start gap-2 pt-1 border-t border-border/50">
          <Clock className="w-3.5 h-3.5 text-clinic-gray shrink-0 mt-0.5 stroke-[1.5]" />
          <p className="text-[12px] text-clinic-gray font-light">
            <span className="text-clinic-navy/80">Timing · </span>
            {doctor.timing}
          </p>
        </div>
      </div>

      <div className={cn("mt-5 pt-4 border-t border-border/40", featured && "mt-6")}>
        <DoctorAppointmentDialog
          doctorName={doctor.name}
          className="w-full sm:w-auto"
        />
      </div>
    </article>
  );
}
