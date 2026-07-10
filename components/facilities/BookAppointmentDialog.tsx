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
  triggerLabel?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function BookAppointmentDialog({
  serviceName,
  triggerLabel = "Book Appointment",
  className,
  children,
}: BookAppointmentDialogProps) {
  const phone = CLINIC.contact.diagnosticOpd;
  const tel = "03340073713";

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children ?? (
          <button
            type="button"
            className={cn("btn-book-appointment w-full sm:w-auto", className)}
          >
            {triggerLabel}
          </button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md rounded-sm border-border/80 p-6 md:p-8">
        <DialogHeader className="gap-3 text-left">
          <DialogTitle className="font-display text-xl font-medium text-clinic-navy">
            Book Appointment
          </DialogTitle>
          <DialogDescription className="text-[14px] text-clinic-gray font-normal leading-relaxed">
            To book{" "}
            <span className="text-clinic-navy font-normal">{serviceName}</span>,
            please call Medicare Diagnostic Centre &amp; OPD at{" "}
            <span className="text-clinic-navy font-normal">{phone}</span>.
          </DialogDescription>
        </DialogHeader>
        <a
          href={`tel:${tel}`}
          className="btn-book-appointment w-full px-6 py-3.5 gap-2 text-[14px]"
        >
          <Phone className="w-4 h-4 stroke-[1.5]" />
          Call {phone}
        </a>
      </DialogContent>
    </Dialog>
  );
}
