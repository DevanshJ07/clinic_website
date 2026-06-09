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
import { CLINIC } from "@/lib/data";
import { cn } from "@/lib/utils";

interface BookAppointmentDialogProps {
  serviceName: string;
  className?: string;
}

export default function BookAppointmentDialog({
  serviceName,
  className,
}: BookAppointmentDialogProps) {
  const phone = CLINIC.contact.diagnosticOpd;
  const tel = "03340073713";

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className={cn(
            "inline-flex items-center justify-center text-[13px] font-medium text-clinic-navy border border-border/80 bg-white/80 px-4 py-2.5 hover:border-clinic-navy/30 hover:bg-white transition-colors w-full sm:w-auto",
            className
          )}
        >
          Book Appointment
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md rounded-sm border-border/80 p-6 md:p-8">
        <DialogHeader className="gap-3 text-left">
          <DialogTitle className="font-display text-xl font-medium text-clinic-navy">
            Book diagnostic service
          </DialogTitle>
          <DialogDescription className="text-[14px] text-clinic-gray font-light leading-relaxed">
            To book{" "}
            <span className="text-clinic-navy font-normal">{serviceName}</span>,
            please call Medicare Diagnostic Centre &amp; OPD at{" "}
            <span className="text-clinic-navy font-normal">{phone}</span>.
          </DialogDescription>
        </DialogHeader>
        <a
          href={`tel:${tel}`}
          className="inline-flex items-center justify-center gap-2 text-[14px] font-medium text-white bg-clinic-navy px-6 py-3.5 hover:bg-clinic-navy/90 transition-colors w-full"
        >
          <Phone className="w-4 h-4 stroke-[1.5]" />
          Call {phone}
        </a>
      </DialogContent>
    </Dialog>
  );
}
