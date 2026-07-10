"use client";

import { Phone } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DOCTORS_AVAILABILITY_NOTE } from "@/lib/doctors";
import { CLINIC } from "@/lib/data";
import { cn } from "@/lib/utils";

interface DoctorAppointmentDialogProps {
  doctorName: string;
  className?: string;
}

export default function DoctorAppointmentDialog({
  doctorName,
  className,
}: DoctorAppointmentDialogProps) {
  const phone = CLINIC.contact.diagnosticOpd;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className={cn("btn-book-appointment w-full sm:w-auto", className)}
        >
          Book Appointment
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md rounded-sm border-border/80 p-6 md:p-8">
        <DialogHeader className="gap-3 text-left">
          <DialogTitle className="font-display text-xl font-medium text-clinic-navy">
            Book Appointment
          </DialogTitle>
          <DialogDescription className="text-[14px] text-clinic-gray font-normal leading-relaxed">
            To book an appointment with{" "}
            <span className="text-clinic-navy font-normal">{doctorName}</span>,
            please call Medicare Diagnostic Centre &amp; OPD at{" "}
            <span className="text-clinic-navy font-normal">{phone}</span>.
          </DialogDescription>
        </DialogHeader>
        <a
          href="tel:03340073713"
          className="btn-book-appointment w-full px-6 py-3.5 gap-2 text-[14px]"
        >
          <Phone className="w-4 h-4 stroke-[1.5]" />
          Call {phone}
        </a>
        <p className="text-[12px] text-clinic-gray font-normal leading-relaxed text-center">
          {DOCTORS_AVAILABILITY_NOTE}
        </p>
      </DialogContent>
    </Dialog>
  );
}
